export const STANDARD_AGENT = {
  helper: {
    universalIdentifier: '20202020-c7ab-4065-b822-0ca1d5de60a9',
  },
  'bookd-fast': {
    universalIdentifier: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
  },
  'bookd-balanced': {
    universalIdentifier: 'b2c3d4e5-f6a7-8901-bcde-f23456789012',
  },
  'bookd-thinking': {
    universalIdentifier: 'c3d4e5f6-a7b8-9012-cdef-345678901234',
  },
  'bookd-flagship': {
    universalIdentifier: 'd4e5f6a7-b8c9-0123-defa-456789012345',
  },
} as const satisfies Record<
  string,
  {
    universalIdentifier: string;
  }
>;