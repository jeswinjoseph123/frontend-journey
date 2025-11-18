import axios from "axios";

import { useState, useEffect } from "react";

import { Header } from "../../components/Header";

import "./OrdersPage.css";
import { OrdersList } from "./OrdersList";

export function OrdersPage({ cart }) {
  const [orders, setOders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      const response = await axios.get("/api/orders?expand=products");
      setOders(response.data);
    };
    getOrders();
  }, []);
  return (
    <>
      <Header cart={cart} />
      <OrdersList orders={orders} />
    </>
  );
}
