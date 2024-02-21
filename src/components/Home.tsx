import backgroundImage from "../assets/backgroundImage.jpeg";

const Home = () => {
  return (
    <section id="home" className="relative">
      <img src={backgroundImage} alt="Background Image" className="object-cover w-full h-screen" />
      <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white">
        <div className="container">
          <h2 className="text-6xl font-bold mb-4">Hello</h2>
          <h3 className="text-3xl font-bold">My Name is</h3>
          <h3 className="text-3xl font-bold">Akaninyene Asanga, and</h3>
          <h2 className="text-5xl font-bold mt-5">I am a Software Engineer</h2>
        </div>
      </div>
    </section>
  );
};

export default Home;
