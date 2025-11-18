import axios from "axios";

import { useState, useEffect } from "react";

import { Header } from "../../components/Header";

import "./OrdersPage.css";
import { OrdersList } from "./OrdersList";

export function OrdersPage({ cart }) {
  const [orders, setOders] = useState([]);
  useEffect(() => {
    axios.get("/api/orders?expand=products").then((response) => {
      return setOders(response.data);
    });
  }, []);
  return (
    <>
      <Header cart={cart} />
      <OrdersList orders={orders} />
    </>
  );
}
