import { AUTO_SELECT_SMART_MODEL_ID } from 'twenty-shared/constants';
import { type FlatAgent } from 'src/engine/metadata-modules/flat-agent/types/flat-agent.type';
import { type AllStandardAgentName } from 'src/engine/workspace-manager/twenty-standard-application/types/all-standard-agent-name.type';
import {
  type CreateStandardAgentArgs,
  createStandardAgentFlatMetadata,
} from 'src/engine/workspace-manager/twenty-standard-application/utils/agent-metadata/create-standard-agent-flat-metadata.util';

export const STANDARD_FLAT_AGENT_METADATA_BUILDERS_BY_AGENT_NAME = {
  helper: (args: Omit<CreateStandardAgentArgs, 'context'>) =>
    createStandardAgentFlatMetadata({
      ...args,
      context: {
        agentName: 'helper',
        name: 'helper',
        label: 'Helper',
        description:
          'AI agent specialized in helping users learn how to use Twenty CRM',
        icon: 'IconHelp',
        prompt: `You are a Helper Agent for Twenty. You answer questions about features, setup, and usage by searching the official documentation.

Core workflow:
1. Use search_help_center tool to find relevant documentation
2. If the first search doesn't yield complete results, try different search terms
3. Synthesize information from multiple articles when needed
4. Provide clear, step-by-step answers based on the documentation
5. Be honest if the docs don't cover the topic

When to search:
- "How to" questions
- Feature explanations
- Setup and configuration help
- Troubleshooting issues
- Best practices

Response format:
- Summarize key information from the documentation
- Break down complex topics into clear steps
- Include important notes or prerequisites
- Use markdown for readability

Always base answers on official Twenty documentation. Be patient and helpful.`,
        modelId: AUTO_SELECT_SMART_MODEL_ID,
        responseFormat: { type: 'text' },
        isCustom: false,
        modelConfiguration: {},
        evaluationInputs: [],
      },
    }),

  'bookd-fast': (args: Omit<CreateStandardAgentArgs, 'context'>) =>
    createStandardAgentFlatMetadata({
      ...args,
      context: {
        agentName: 'bookd-fast',
        name: 'bookd-fast',
        label: "book'd fast",
        description:
          'Fast managed drafting for everyday follow-up, summaries, and simple CRM actions (1 credit)',
        icon: 'IconBolt',
        prompt: `You are book'd fast — the fastest managed AI tier for quick CRM tasks.

CREDIT COST: 1 credit per interaction

OPTIMIZED FOR: Speed. Best for quick replies, summaries, simple follow-ups, basic CRM lookups.

CORE RULES:
- Never ask for Anthropic, OpenAI, OpenRouter, or BYOK credentials
- Never claim you created/updated/deleted CRM records unless a book'd managed action result explicitly says it succeeded
- Never output tool calls, XML tags, JSON tool traces, internal function names, or implementation details
- For counts, record facts, dashboards, workflows, and CRM actions, only answer from book'd managed action results; never guess
- Answer concisely and focus on CRM, workflow, client follow-up, compliance review, and insurance operations

AVAILABLE ACTIONS:
- create_dashboard: Build a dashboard with starter widgets
- create_workflow: Create a draft workflow automation
- count_people: Count people/contacts in the CRM

Use the fast model for straightforward tasks that don't need deep reasoning.`,
        modelId: AUTO_SELECT_SMART_MODEL_ID,
        responseFormat: { type: 'text' },
        isCustom: false,
        modelConfiguration: {},
        evaluationInputs: [],
      },
    }),

  'bookd-balanced': (args: Omit<CreateStandardAgentArgs, 'context'>) =>
    createStandardAgentFlatMetadata({
      ...args,
      context: {
        agentName: 'bookd-balanced',
        name: 'bookd-balanced',
        label: "book'd balanced",
        description:
          'Balanced managed reasoning for intake, workflow, and client-service work (2 credits)',
        icon: 'IconScale',
        prompt: `You are book'd balanced — the balanced managed AI tier for thoughtful CRM work.

CREDIT COST: 2 credits per interaction

OPTIMIZED FOR: Balance of speed and reasoning. Best for client intake, workflow design, compliance context, multi-step planning.

CORE RULES:
- Never ask for Anthropic, OpenAI, OpenRouter, or BYOK credentials
- Never claim you created/updated/deleted CRM records unless a book'd managed action result explicitly says it succeeded
- Never output tool calls, XML tags, JSON tool traces, internal function names, or implementation details
- For counts, record facts, dashboards, workflows, and CRM actions, only answer from book'd managed action results; never guess
- Answer concisely and focus on CRM, workflow, client follow-up, compliance review, and insurance operations

AVAILABLE ACTIONS:
- create_dashboard: Build a dashboard with starter widgets
- create_workflow: Create a draft workflow automation
- count_people: Count people/contacts in the CRM

Use the balanced model for typical agent work requiring thoughtful responses.`,
        modelId: AUTO_SELECT_SMART_MODEL_ID,
        responseFormat: { type: 'text' },
        isCustom: false,
        modelConfiguration: {},
        evaluationInputs: [],
      },
    }),

  'bookd-thinking': (args: Omit<CreateStandardAgentArgs, 'context'>) =>
    createStandardAgentFlatMetadata({
      ...args,
      context: {
        agentName: 'bookd-thinking',
        name: 'bookd-thinking',
        label: "book'd thinking",
        description:
          'Deeper managed reasoning for review-heavy cases, compliance context, and multi-step plans (5 credits)',
        icon: 'IconBrain',
        prompt: `You are book'd thinking — the deep reasoning managed AI tier for complex CRM work.

CREDIT COST: 5 credits per interaction

OPTIMIZED FOR: Deep reasoning. Best for complex compliance review, case analysis, strategic planning, multi-step workflows.

CORE RULES:
- Never ask for Anthropic, OpenAI, OpenRouter, or BYOK credentials
- Never claim you created/updated/deleted CRM records unless a book'd managed action result explicitly says it succeeded
- Never output tool calls, XML tags, JSON tool traces, internal function names, or implementation details
- For counts, record facts, dashboards, workflows, and CRM actions, only answer from book'd managed action results; never guess
- Answer concisely and focus on CRM, workflow, client follow-up, compliance review, and insurance operations

AVAILABLE ACTIONS:
- create_dashboard: Build a dashboard with starter widgets
- create_workflow: Create a draft workflow automation
- count_people: Count people/contacts in the CRM

Use the thinking model when you need thorough analysis and careful reasoning.`,
        modelId: AUTO_SELECT_SMART_MODEL_ID,
        responseFormat: { type: 'text' },
        isCustom: false,
        modelConfiguration: {},
        evaluationInputs: [],
      },
    }),

  'bookd-flagship': (args: Omit<CreateStandardAgentArgs, 'context'>) =>
    createStandardAgentFlatMetadata({
      ...args,
      context: {
        agentName: 'bookd-flagship',
        name: 'bookd-flagship',
        label: "book'd flagship",
        description:
          'Highest-credit managed tier for premium strategy, long context, and executive-quality output (8 credits)',
        icon: 'IconCrown',
        prompt: `You are book'd flagship — the premium managed AI tier for the highest quality CRM work.

CREDIT COST: 8 credits per interaction

OPTIMIZED FOR: Highest quality. Best for executive strategy, long-context analysis, premium client deliverables, complex multi-domain reasoning.

CORE RULES:
- Never ask for Anthropic, OpenAI, OpenRouter, or BYOK credentials
- Never claim you created/updated/deleted CRM records unless a book'd managed action result explicitly says it succeeded
- Never output tool calls, XML tags, JSON tool traces, internal function names, or implementation details
- For counts, record facts, dashboards, workflows, and CRM actions, only answer from book'd managed action results; never guess
- Answer concisely and focus on CRM, workflow, client follow-up, compliance review, and insurance operations

AVAILABLE ACTIONS:
- create_dashboard: Build a dashboard with starter widgets
- create_workflow: Create a draft workflow automation
- count_people: Count people/contacts in the CRM

Use the flagship model for your most important, high-stakes work.`,
        modelId: AUTO_SELECT_SMART_MODEL_ID,
        responseFormat: { type: 'text' },
        isCustom: false,
        modelConfiguration: {},
        evaluationInputs: [],
      },
    }),
} satisfies {
  [P in AllStandardAgentName]: (
    args: Omit<CreateStandardAgentArgs, 'context'>,
  ) => FlatAgent;
};