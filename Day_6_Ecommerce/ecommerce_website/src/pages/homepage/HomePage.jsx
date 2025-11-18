import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";

import "./homepage.css";
import { ProductList } from "./ProductList";

export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      return setProducts(response.data);
    });
  }, []);

  return (
    <>
      <Header cart={cart} />
      <ProductList products={products} />
    </>
  );
}
