import React from 'react';
import './App.css';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import Footer from './components/Footer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import NotFound from './components/NotFound.jsx';
import { Routes, Route } from 'react-router-dom';
import HeroSectionHomePage from './components/HeroSectionHomePage.jsx';
import { CartProvider } from './context/CartContext.jsx';
import CartContainer from './components/CartContainer.jsx';

function App() {
  return ( 
    <>
    <CartProvider>
      <NavBar />
      <div className="app-container">
        <HeroSectionHomePage />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </CartProvider>
      <Footer />
    </>
  );
}

export default App;
