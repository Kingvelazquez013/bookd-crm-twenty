# book'd CRM — Custom Twenty Image with Managed AI Agents
# 
# This Dockerfile builds the Twenty CRM server from source using the same process as CI.
# The custom agents are included in the standard application constants.

# Build stage
FROM node:24-alpine AS builder

# Install build dependencies
RUN apk add --no-cache python3 make g++ git

WORKDIR /app

# Copy package files first for caching
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn

# Install dependencies (all deps including devDependencies)
RUN yarn install

# Copy source code
COPY packages ./packages
COPY nx.json tsconfig.base.json ./
RUN if [ -d tools ]; then cp -r tools ./tools; fi

# Install @prettier/sync for generateBarrels script (after packages copied)
RUN cd packages/twenty-shared && yarn add @prettier/sync --dev

# Fix deprecated TypeScript options in tsconfig.lib.json - remove entire lines
RUN sed -i '/esModuleInterop/d' packages/twenty-shared/tsconfig.lib.json && \
    sed -i '/moduleResolution/d' packages/twenty-shared/tsconfig.lib.json

# Build using the same process as CI - build twenty-shared first
RUN npx nx build twenty-shared

# Build twenty-server
RUN npx nx build twenty-server

# Production stage
FROM node:24-alpine AS production

# Install runtime dependencies
RUN apk add --no-cache dumb-init

WORKDIR /app

# Copy built application
COPY --from=builder /app/packages/twenty-server/dist ./packages/twenty-server/dist
COPY --from=builder /app/packages/twenty-front/dist ./packages/twenty-front/dist
COPY --from=builder /app/packages/twenty-shared/dist ./packages/twenty-shared/dist
COPY --from=builder /app/packages/twenty-client-sdk/dist ./packages/twenty-client-sdk/dist
COPY --from=builder /app/packages/twenty-emails/dist ./packages/twenty-emails/dist
COPY --from=builder /app/packages/twenty-ui/dist ./packages/twenty-ui/dist

# Copy package.json files for runtime
COPY --from=builder /app/packages/twenty-server/package.json ./packages/twenty-server/package.json
COPY --from=builder /app/packages/twenty-front/package.json ./packages/twenty-front/package.json

# Copy node_modules for production dependencies only
COPY --from=builder /app/node_modules ./node_modules

# Set environment
ENV NODE_ENV=production
ENV NODE_PORT=3000

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=5s --timeout=5s --retries=30 \
  CMD wget -qO- http://localhost:3000/healthz || exit 1

# Start the server
ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "packages/twenty-server/dist/main.js"]
