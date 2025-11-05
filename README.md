# Binance Orderbook Visualizer

## Project Overview
The **Binance Orderbook Visualizer** is a real-time application that displays **live bids and asks** from Binance for selected trading pairs. It helps users quickly understand **market depth** through an intuitive visual interface.

## How It Works
- The app connects to the **Binance WebSocket API** to fetch live market data.  
- Data is parsed into **bids and asks**, with **color-coded bars** representing order sizes.  
- The UI updates in real-time, reflecting market changes instantly.   
- Automatic reconnection ensures stability if the network drops.


## Project Structure
binance-orderbook/
│
├─ app/ # React frontend source code
│ ├─ components/ # UI components (e.g., OrderBook, OrderRow)
│ ├─ pages/ # Pages (main app page)
│ ├─ styles/ # CSS/Tailwind styling
│ └─ page.tsx # Main entry point for the React app
│
├─ package.json # Project dependencies and scripts
├─ README.md # Project overview and instructions

## Setup Instructions
1. Clone the repository:
  git clone https://github.com/Lahari-410/binance-orderbook.git
2. Navigate to the project folder:
   cd binance-orderbook
3. Install dependencies and Start the application:
   npm install
   npm start
