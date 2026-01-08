import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Products from "./Products";
import Pages from "./Pages";
import Cart from "./Cart";

import { pageSize } from "../ConstName";
import "./Pagination.css";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [current, setCurrent] = useState(0);
  const [showCart, setShowCart] = useState(false);

  // 🔹 Cart count badge
  const cartCount = useSelector(state =>
    state.cart.items.reduce((sum, item) => sum + item.qty, 0)
  );

  // 🔹 Fetch products
  const handleProductsApi = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=194");
    const json = await data.json();
    setProducts(json.products);
  };

  useEffect(() => {
    handleProductsApi();
  }, []);

  // 🔹 Pagination logic
  const handlePage = (n) => setCurrent(n);
  const handleRightButton = () => setCurrent(prev => prev + 1);
  const handleLeftButton = () => setCurrent(prev => prev - 1);

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / pageSize);
  const start = current * pageSize;
  const end = start + pageSize;

  return (
    <div className="product-list">
      {/* 🔹 Header */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Pagination</h1>

        {/* 🛒 Cart Icon */}
        <div
          className="cart-icon-wrapper"
          onClick={() => setShowCart(true)}
        >
          🛒
          {cartCount > 0 && (
            <span className="cart-badge">{cartCount}</span>
          )}
        </div>
      </div>

      {/* 🔹 Slide-in Cart */}
      {showCart && <Cart close={() => setShowCart(false)} />}

      {/* 🔹 Pagination buttons */}
      <Pages
        current={current}
        handelLeftButton={handleLeftButton}
        handelRightButton={handleRightButton}
        noOfPages={noOfPages}
        handelPage={handlePage}
      />

      {/* 🔹 Products Grid */}
      <div className="products-container">
        {products.slice(start, end).map(item => (
          <Products
            key={item.id}
            product={item}
          />
        ))}
      </div>
    </div>
  );
};

export default Pagination;
