// Componenets
import { Header } from './components/Header'
import { BodyProducts } from './pages/Body.jsx'
import { Leading } from './pages/Leading.jsx'
import { ProductInfo } from './pages/ProductInfo.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Style
import './css/App.css'

function App () {
  return (
    <BrowserRouter>
      <div className='Header'>
        <Header title='Ani-k Makeup' />
      </div>
      <div className='Routes'>
        <Routes>
          <Route path='/products' element={<BodyProducts />} />
          <Route path='/leanding' element={<Leading />} />
          <Route path='/productinfo' element={<ProductInfo />} />
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App
