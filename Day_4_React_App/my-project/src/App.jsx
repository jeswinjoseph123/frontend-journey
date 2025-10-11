import { useState } from "react";
import products from "./Products";
import Student from "./Student";
const user = { name: "Jesvin" };
function ProductCard({ name, price, id, inStock }) {
  return (
    <div
      className={`h-64 w-64 p-8 text-center rounded ${
        inStock ? "bg-teal-600" : "bg-gray-600"
      }`}
    >
      <p>{id}</p>
      <h1>Product Name:{name}</h1>
      <h3>Price : {price}$</h3>
      <h4>In Stock : {inStock ? "✅" : "❌"} </h4>
    </div>
  );
}

function ProductList() {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          name={item.name}
          price={item.price}
          id={item.id}
          inStock={item.inStock}
        />
      ))}
    </div>
  );
}

export default function App() {
  const [isLoggedin, setisLoggedin] = useState(false);
  function handleClick() {
    setisLoggedin(!isLoggedin);
  }
  return (
    <>
      <div className="bg-blue-950 h-screen flex flex-col items-center justify-center gap-3">
        {isLoggedin ? (
          <>
            <h1 className="text-white text-4xl mb-4 flex-col">
              Welcome, {user.name} 👋
            </h1>
            <ProductList />
            <Student />
            <button
              onClick={handleClick}
              className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${
                isLoggedin ? "bg-green-500" : "bg-gray-400"
              }`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full transform transition-transform duration-300 ${
                  isLoggedin ? "translate-x-6" : "translate-x-0"
                }`}
              ></div>
            </button>
          </>
        ) : (
          <>
            <h1 className="text-8xl">Please Login</h1>
            <button
              onClick={handleClick}
              className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${
                isLoggedin ? "bg-green-500" : "bg-gray-400"
              }`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full transform transition-transform duration-300 ${
                  isLoggedin ? "translate-x-6" : "translate-x-0"
                }`}
              ></div>
            </button>
          </>
        )}
      </div>
    </>
  );
}
