// Hooks
import { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import '../css/products.css'

export const BodyProducts = () => {
  const [products, setProduct] = useState([])
  // const [selectedProduct, setSelectedProduct] = useState(null)
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(data => {
        setProduct(data.results)
        console.log(data)
      })
      .catch(error => {
        console.error('Error al cargar datos:', error)
      })
  }, [])

  const fetchMoreData = () => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page + 1}`)
      .then(res => res.json())
      .then(data => {
        setProduct(prevProducts => [...prevProducts, ...data.results])
        setPage(prevPage => prevPage + 1)
      })
      .catch(error => {
        console.error('Error al cargar más datos:', error)
      })
  }

  const openModal = (product) => {
    const infoWindow = window.open('', '_blank', 'width=100%,height=auto')
    const productInfo = `
      <div>
        <h2>${product.name}</h2>
        <img src="${product.image}" alt="${product.name}" />
        <p>ID: ${product.id}</p>
        <p>Estado: ${product.status}</p>
        <p>Especie: ${product.species}</p>
        <!-- Agrega más información del producto según sea necesario -->
      </div>
    `
    infoWindow.document.write(productInfo)
  }

  return (
    <>
      <InfiniteScroll
        dataLength={products.length}
        next={fetchMoreData}
        hasMore
        loader={<h4>Cargando...</h4>}
        endMessage={<p>¡Ya has visto todos los personajes!</p>}
      >
        <ul className='bodyProducts'>
          {products.map(product => (
            <li key={product.id}>
              <div>
                <h4>{product.name}</h4>
                <img src={product.image} alt={product.image} onClick={() => openModal(product)} />
              </div>
            </li>
          ))}
        </ul>
      </InfiniteScroll>
    </>
  )
}
