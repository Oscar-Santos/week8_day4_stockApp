
import React from 'react';
import { useParams } from 'react-router-dom';
import stocks from '../data';


export default function Stock() {
    const { symbol } = useParams();
    const stock = stocks.find((stock) => stock.symbol === symbol);
  
    if (!stock) {
      return <div>Stock not found.</div>;
    }
  
    const isNegative = stock.change < 0;
  
    return (
      <div>
        <h2>Company Name: {stock.name}</h2>
        <p>Last Price: {stock.lastPrice}</p>
        <p className={`change ${isNegative ? "negative" : ""}`} data-negative={isNegative}>
          Change: {stock.change}
        </p>
        <p>High: {stock.high}</p>
        <p>Low: {stock.low}</p>
        <p>Open: {stock.open}</p>
      </div>
    );
  }
  

