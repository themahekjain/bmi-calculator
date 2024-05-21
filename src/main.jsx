import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BmiCalc } from './component/calc/bmi';
import { GetDataFromApi } from './component/product/getApiData';
import App from './App';
import {ProductData} from './component/product/product';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path="/bmi" element={<BmiCalc />} />
        <Route path="/product" element={<GetDataFromApi />}/>
        <Route path="/product/:id"  element={<ProductData/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
