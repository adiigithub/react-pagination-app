import { useEffect, useState } from "react"
import Products from "./Products"

import './Pagination.css'

import { pageSize } from "../ConstName"
import Pages from "./Pages"

const Pagination = ()=>{
  const [products,setProduct]=useState([])
  const [current,setCurrent] = useState(0)

  const handleProductsApi = async()=>{
    const data = await fetch("https://dummyjson.com/products?limit=194")
    const json = await data.json()
    setProduct(json.products)
  }
  useEffect(()=>{
    handleProductsApi()
  },[])

  const handelPage = (n)=>{
    setCurrent(n)
  }
  const handelRightButton = ()=>{
    setCurrent(prev => prev+1)
  }
    const handelLeftButton = ()=>{
    setCurrent(prev => prev-1)
  }

  const Page_size = pageSize
  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts/Page_size);
  const start = current*Page_size;
  const end = start+Page_size
return (
  <div className="product-list">
    <h1>pagination</h1>
   <Pages   current={current}
  handelLeftButton={handelLeftButton}
  handelRightButton={handelRightButton}
  noOfPages={noOfPages}
  handelPage={handelPage}
  />
    <div className="products-container">
      {
        products.slice(start,end).map(items=>
        (
        <Products key={items.id} images = {items.thumbnail} title={items.title}/>
        ))
      }
    </div>
  </div>
)
}

export default Pagination
