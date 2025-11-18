import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";

import "./homepage.css";
import { ProductList } from "./ProductList";

export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductList = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };
    getProductList();
  }, []);

  return (
    <>
      <Header cart={cart} />
      <ProductList products={products} loadCart={loadCart} />
    </>
  );
}
