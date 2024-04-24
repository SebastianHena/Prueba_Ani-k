// import { BodyProducts } from '../pages/Body.jsx'
import '../css/App.css'

export const Header = ({ title }) => {
  return (
    <>
      <div>
        <h1>{title}</h1>
      </div>
      <div className='url'>
        <a href='/products'>Productos</a>
        <a href='/leanding'>Presentación</a>
      </div>
    </>
  )
}
