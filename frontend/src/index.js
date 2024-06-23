import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BarGraph from './BarGraph';
import PieChart2 from './PieChart2';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes> 
        <Route  path="/" element={<App />} /> 
        <Route path="/bar_graph" element={<BarGraph />} /> 
        <Route path="/pie_chart" element={<PieChart2 />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);




reportWebVitals();
