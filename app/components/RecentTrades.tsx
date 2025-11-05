"use client";
import React from "react";
// Without alias
import useBinanceSocket from '../hooks/useBinanceSocket';

export default function RecentTrades() {
  const { trades } = useBinanceSocket("btcusdt");

  if (!trades || trades.length === 0) {
    return <p className="text-gray-400">Loading recent trades...</p>;
  }

  // show the latest 20 trades
  const recent = trades.slice(0, 20);

  return (
    <div className="mt-8 w-full max-w-2xl">
      <h2 className="text-lg font-semibold mb-2">Recent Trades</h2>

      <div className="bg-gray-900 p-3 rounded-lg max-h-80 overflow-y-auto">
        {recent.map((t, i) => (
          <div
            key={i}
            className={`flex justify-between py-1 ${
              t.isBuyerMaker ? "text-red-400" : "text-green-400"
            }`}
          >
            <span>{t.price}</span>
            <span>{t.quantity}</span>
            <span className="text-gray-400 text-xs">
              {new Date(t.time).toLocaleTimeString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
