// Order ID generator: WORD-WORD-NUMBER format
// Examples: MATCHA-GLOW-482, SWIFT-ZEST-913, CALM-VIBE-204

const ADJECTIVES = [
  "MATCHA", "SWIFT", "CALM", "PURE", "FRESH", "BRIGHT", "SMOOTH", "BOLD",
  "SWEET", "CRISP", "SOFT", "RICH", "LIGHT", "DEEP", "WARM", "COOL"
];

const NOUNS = [
  "GLOW", "ZEST", "VIBE", "FLOW", "WAVE", "BLOOM", "SPARK", "DREAM",
  "BLISS", "CHARM", "GRACE", "SPIRIT", "ENERGY", "PEACE", "JOY", "SOUL"
];

export function generateOrderId(): string {
  const adjective = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
  const noun = NOUNS[Math.floor(Math.random() * NOUNS.length)];
  const number = Math.floor(Math.random() * 900) + 100; // 100-999
  
  return `${adjective}-${noun}-${number}`;
}
