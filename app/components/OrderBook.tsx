"use client";
import React from "react";
import useBinanceSocket from "../hooks/useBinanceSocket";

export default function OrderBook() {
  const { orderBook } = useBinanceSocket("btcusdt");

  if (!orderBook) {
    return <p className="text-gray-400 text-center">Loading order book...</p>;
  }

  const bids = orderBook.bids.slice(0, 10);
  const asks = orderBook.asks.slice(0, 10);
  const highestBid = parseFloat(bids[0]?.[0] || "0");
  const lowestAsk = parseFloat(asks[0]?.[0] || "0");
  const spread = (lowestAsk - highestBid).toFixed(2);

  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg shadow-md w-full max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">BTC/USDT Order Book</h2>

      <div className="grid grid-cols-2 gap-4">
        {/* Bids */}
        <div className="text-right">
          <h3 className="text-green-400 font-semibold mb-2 text-center">
            Bids (Buy)
          </h3>
          <div className="w-full">
            <div className="grid grid-cols-2 text-gray-400 text-sm border-b border-gray-700 pb-1 mb-1">
              <span className="text-right">Price</span>
              <span className="text-right">Amount</span>
            </div>
            {bids.map(([price, qty], i) => (
              <div
                key={i}
                className="grid grid-cols-2 text-sm py-0.5 border-b border-gray-800"
              >
                <span className="text-green-400 text-right">
                  {parseFloat(price).toFixed(2)}
                </span>
                <span className="text-right">{parseFloat(qty).toFixed(6)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Asks */}
        <div className="text-right">
          <h3 className="text-red-400 font-semibold mb-2 text-center">
            Asks (Sell)
          </h3>
          <div className="w-full">
            <div className="grid grid-cols-2 text-gray-400 text-sm border-b border-gray-700 pb-1 mb-1">
              <span className="text-right">Price</span>
              <span className="text-right">Amount</span>
            </div>
            {asks.map(([price, qty], i) => (
              <div
                key={i}
                className="grid grid-cols-2 text-sm py-0.5 border-b border-gray-800"
              >
                <span className="text-red-400 text-right">
                  {parseFloat(price).toFixed(2)}
                </span>
                <span className="text-right">{parseFloat(qty).toFixed(6)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Spread */}
      <p className="text-center mt-4 text-yellow-300 font-semibold">
        Spread: {spread} USDT
      </p>
    </div>
  );
}
