import { useState } from "react";
import products from "./Products";
import Student from "./Student";

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

function Login({ setIsLoggedIn }) {
  const [formData, setformData] = useState({
    username: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      formData.username.trim().toLowerCase() === "jesvin" &&
      formData.password.trim() === "1234"
    ) {
      setIsLoggedIn(true);
      console.log("success");
    } else {
      console.log("Not correct");
    }
  }
  return (
    <>
      <h1 className="text-4xl font-bold text-white mb-6">Please Login</h1>
      <form
        className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col gap-4 w-80"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Username"
          className="p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
          onChange={handleChange}
          name="username"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
          onChange={handleChange}
          name="password"
        />
        <button
          type="submit"
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-md transition-all"
        >
          Login
        </button>
      </form>
    </>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isEnabled, setisEnabled] = useState(false);
  function handleClick() {
    setisEnabled(!isEnabled);
  }
  return (
    <>
      <div className="bg-blue-950 h-screen flex flex-col items-center justify-center gap-3">
        {isLoggedIn ? (
          <>
            <h1 className="text-white text-4xl mb-4 flex-col">
              Welcome, Jesvin 👋
            </h1>
            <ProductList />
            <button
              onClick={handleClick}
              className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${
                isEnabled ? "bg-green-500" : "bg-gray-400"
              }`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full transform transition-transform duration-300 ${
                  isEnabled ? "translate-x-6" : "translate-x-0"
                }`}
              ></div>
            </button>
            {isEnabled && <Student />}
          </>
        ) : (
          <Login setIsLoggedIn={setIsLoggedIn} />
        )}
      </div>
    </>
  );
}
