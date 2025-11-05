// lib/binance.ts
export const SPOT_WS_BASE = 'wss://stream.binance.com:9443';
export const FUTURES_WS_BASE = 'wss://fstream.binance.com';
export const AGGTRADE_STREAM = (symbol: string) => `${symbol.toLowerCase()}@aggTrade`;
export const DEPTH_STREAM = (symbol: string, ms?: number) =>
  ms ? `${symbol.toLowerCase()}@depth@${ms}ms` : `${symbol.toLowerCase()}@depth`;
export const REST_DEPTH = (symbol: string, limit = 100) =>
  `https://api.binance.com/api/v3/depth?symbol=${symbol.toUpperCase()}&limit=${limit}`;
