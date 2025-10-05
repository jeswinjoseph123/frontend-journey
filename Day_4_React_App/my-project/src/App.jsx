function Profile() {
  return (
    <div>
      <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
    </div>
  );
}

export default function App() {
  return (
    <>
      <section className="flex justify-center items-center text-center flex-col">
        <h1>Amazing Scientist</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
    </>
  );
}
