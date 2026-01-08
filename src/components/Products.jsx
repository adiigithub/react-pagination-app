import { useDispatch } from "react-redux"
import { addToCart } from "./Redux/CartSlice"


const Products = ({product}) => {
  const dispatch = useDispatch()
  return (
    <div className="product-cart">
      <img   src={product.thumbnail}
  alt={product.title}
  className="product-img"
  width="200"
  height="200"
  loading={product.id === 1 ? "eager" : "lazy"}
      />
      <span>{product.title}</span>
      <span>${product.price}</span>  

        <button onClick={() => dispatch(addToCart(product))}>
        Add 🛒
      
      </button>
    
    </div>
  )
}

export default Products