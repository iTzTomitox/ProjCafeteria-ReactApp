import './App.css'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
<<<<<<< HEAD

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer mensaje="Bienvenido a mi tienda"/>
=======
import Footer from './components/Footer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import NotFound from './components/NotFound.jsx'
import { Routes, Route } from 'react-router-dom'
import HeroSectionHomePage from './components/HeroSectionHomePage.jsx'

function App() {

  return (
    <>
      <NavBar />
      <div className="app-container">
      <HeroSectionHomePage />
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:categoryId" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
        <Route path="/metodos" element={<div style={{padding:16}}><h2>Métodos</h2></div>} />
        <Route path="/accesorios" element={<div style={{padding:16}}><h2>Accesorios</h2></div>} />
        <Route path="/kits" element={<div style={{padding:16}}><h2>Kits</h2></div>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </div>
      <Footer/>
>>>>>>> 3007cb80d91d77181b7c9c675964b147a4c3a611
    </>
  )
}

export default App
