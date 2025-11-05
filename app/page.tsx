"use client";
import React from "react";
import OrderBook from "./components/OrderBook";
import RecentTrades from "./components/RecentTrades";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Live Binance BTC/USDT</h1>

      <OrderBook />
      <RecentTrades />
    </main>
  );
}
