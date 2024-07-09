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

  return (
    <div className='container'>
      <h3>Calculadora en Bitcoin</h3>
      <div>
        <label>
          Inversión Inicial (USD):
          <input
            type="number"
            value={initialInvestment}
            onChange={(e) => setInitialInvestment(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Precio Actual de Bitcoin (USD):
          <input
            type="number"
            value={currentPrice}
            onChange={(e) => setCurrentPrice(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Cantidad de Bitcoin Comprado:
          <input
            type="number"
            value={btcAmount}
            onChange={(e) => setBtcAmount(e.target.value)}
          />
        </label>
      </div>
      <button type="button" className='btn-outline-secondary' onClick={handleCalculate}>Calcular Ganancia</button>
   
      {profit !== null && (
        <div>
          <h2>Ganancia: ${profit.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

export default BitcoinCalculator;


