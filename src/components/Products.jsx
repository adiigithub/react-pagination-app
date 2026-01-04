

const Products = ({images,title}) => {
  return (
    <div className="product-cart">
      <img className="product-img" src={images} alt={title} />
      <span>{title}</span>
    </div>
  )
}

export default Products