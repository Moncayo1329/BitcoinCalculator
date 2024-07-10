import React, { useState } from 'react';
// Utilizamos useState para declarar variables de estado y sus funciones de actualización. Aquí manejamos la inversión inicial, el precio actual de Bitcoin, la cantidad de Bitcoin comprada y la ganancia calculada.

const BitcoinCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState('');
  const [currentPrice, setCurrentPrice] = useState('');
  const [btcAmount, setBtcAmount] = useState('');
  const [profit, setProfit] = useState(null);
// Valor de bitcoin
  const handleCalculate = () => {
    const investment = parseFloat(initialInvestment);
    const price = parseFloat(currentPrice);
    const amount = parseFloat(btcAmount);
    const calculatedProfit = (price * amount) - investment;
    setProfit(calculatedProfit);
  };
 // Nueva función para reiniciar los valores
  const handleReset = () => {
    setInitialInvestment('');
    setCurrentPrice('');
    setBtcAmount('');
    setProfit(null);
  };

  // Función para formatear números
  const formatNumber = (num) => {
    return num.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  return (
    <div className='container'>
      <h3>Calculate your Bitcoin investment</h3>
      <div>
        <label>
         <h4>Initial Investment (USD):</h4> 
          <input 
          className='input'
            type="number"
            value={initialInvestment}
            onChange={(e) => setInitialInvestment(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          <h4>Current Price of Bitcoin (USD):</h4>
          <input
          className='input'
            type="number"
            value={currentPrice}
            onChange={(e) => setCurrentPrice(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
        <h4>Amount of Bitcoin Purchased:</h4>
          <input
          className='input'
            type="number"
            value={btcAmount}
            onChange={(e) => setBtcAmount(e.target.value)}
          />
        </label>
      </div>
   
      {profit !== null && (
        <div>
          <h4>Profit: ${formatNumber(profit)}</h4>
        </div> 
      )}

<button type="button" className='btn-outline-secondary' onClick={handleCalculate}>Calculate Profit</button>
<button type="button" className='btn-outline-secondary' onClick={handleReset}>Reset</button>
    </div>
  );
};

export default BitcoinCalculator;


