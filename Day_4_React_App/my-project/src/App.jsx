import products from "./Products";
const user = { name: "Jesvin", isLoggedIn: true };
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
  return (
    <>
      <div className="bg-blue-950 h-screen flex flex-col items-center justify-center gap-3">
        {user.isLoggedIn ? (
          <>
            <h1 className="text-white text-4xl mb-4 flex-col">
              Welcome, {user.name} 👋
            </h1>
            <ProductList />
          </>
        ) : (
          <h1 className="text-8xl">Please Login</h1>
        )}
      </div>
    </>
  );
}
