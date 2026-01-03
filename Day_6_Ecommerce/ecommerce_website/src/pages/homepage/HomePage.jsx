import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { Header } from "../../components/Header";

import "./homepage.css";
import { ProductList } from "./ProductList";

export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    const getProductList = async () => {
      const urlPath = search
        ? `/api/products?search=${search}`
        : "/api/products";
      const response = await axios.get(urlPath);
      setProducts(response.data);
    };
    getProductList();
  }, [search]);

  return (
    <>
      <Header cart={cart} />
      <ProductList products={products} loadCart={loadCart} />
    </>
  );
}
