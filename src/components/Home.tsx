import backgroundImage from "../assets/backgroundImage.jpeg";

const Home = () => {
  return (
    <section id="home" className="relative">
      <img src={backgroundImage} alt="Background Image" className="object-cover w-full h-screen" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-2/3 -translate-y-2/3 text-white px-2 sm:px-6 lg:px-8 w-fit">
        <div className="container w-[300px] lg:w-fit">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Hello</h2>
          <h3 className="text-2xl sm:text-3xl font-bold">My Name is</h3>
          <h3 className="text-2xl sm:text-3xl font-bold">Akaninyene Asanga, and</h3>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-5">I am a Software Engineer</h2>
        </div>
      </div>
    </section>
  );
};

export default Home;