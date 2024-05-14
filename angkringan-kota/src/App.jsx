import './App.css'
import  Home  from './pages/HomePage'
import Header from './components/Header'
import Footer from './components/Footer'
import CreateProduct from './pages/CreateProductPage'

function App() {

  return (
    <>
      <Header/>
      <Home/>
      <CreateProduct/>
      <Footer/>
    </>
  )
}

export default App
