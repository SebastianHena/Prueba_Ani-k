import '../css/products.css'

export const ProductInfo = ({ product, onClose }) => {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <span className='close' onClick={onClose}>cerrar</span>
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} />
        <p>ID: {product.id}</p>
      </div>
    </div>
  )
}
