import { useEffect, useState } from "react";

type Trade = {
  price: string;
  quantity: string;
  time: number;
  isBuyerMaker: boolean;
};

type OrderBook = {
  bids: [string, string][];
  asks: [string, string][];
};

export default function useBinanceSocket(symbol: string) {
  const [trades, setTrades] = useState<Trade[]>([]);
  const [orderBook, setOrderBook] = useState<OrderBook | null>(null);

  useEffect(() => {
    if (!symbol) return;

    // Create WebSocket connections for trades and order book
    const tradeSocket = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol}@trade`
    );
    const depthSocket = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol}@depth`
    );

    tradeSocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const newTrade: Trade = {
        price: data.p,
        quantity: data.q,
        time: data.T,
        isBuyerMaker: data.m,
      };
      setTrades((prev) => [newTrade, ...prev.slice(0, 19)]); // keep only 20 recent trades
    };

    depthSocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setOrderBook({
        bids: data.b,
        asks: data.a,
      });
    };

    tradeSocket.onerror = (err) => console.error("Trade socket error:", err);
    depthSocket.onerror = (err) => console.error("Depth socket error:", err);

    // Clean up sockets when component unmounts
    return () => {
      tradeSocket.close();
      depthSocket.close();
    };
  }, [symbol]);

  return { trades, orderBook };
}
