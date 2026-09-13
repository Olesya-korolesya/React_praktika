import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

function App() {
  const name = 'Олеся';
  const role = 'Python-разработчик';
  
  return (
    <div className="card">
      <h1 style={{ color: '#2c3e50' }}>{name}</h1>
      <h2>{role}</h2>
      <p>
        Cоздаю программное обеспечение, сайты, приложения и работаю с данными на языке программирования Python.
      </p>
    </div>
  );
}


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
); 

export default App;