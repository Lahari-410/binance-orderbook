// stores/orderbookStore.ts
import { create } from "zustand";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type OrderbookLevel = {
  price: number;
  quantity: number;
};

type Trade = { price: string; quantity: string; isBuyerMaker: boolean; time: number };

type State = {
  bids: Map<string, number>;
  asks: Map<string, number>;
  trades: Trade[];
  updateDepth: (bids: [string, string][], asks: [string, string][]) => void;
  addTrade: (trade: Trade) => void;
};

export const useOrderbookStore = create<State>((set) => ({
  bids: new Map(),
  asks: new Map(),
  trades: [],
  updateDepth: (bids, asks) =>
    set((state) => {
      const newBids = new Map(state.bids);
      const newAsks = new Map(state.asks);
      for (const [price, qty] of bids) {
        if (Number(qty) === 0) newBids.delete(price);
        else newBids.set(price, Number(qty));
      }
      for (const [price, qty] of asks) {
        if (Number(qty) === 0) newAsks.delete(price);
        else newAsks.set(price, Number(qty));
      }
      return { bids: newBids, asks: newAsks };
    }),
  addTrade: (trade) =>
    set((state) => ({
      trades: [trade, ...state.trades].slice(0, 50),
    })),
}));
