import './App.css';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { useState } from 'react';

function App() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    console.log("click");
  };

  return (
    <div className="App">
      <Header scrollToSection={scrollToSection} />
      <main>
        <Home/>
        <Projects />
        <About />
        <Contact showSuccessModal={showSuccessModal} setShowSuccessModal={setShowSuccessModal} />
      </main>
      {showSuccessModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Message Sent Successfully!</h3>
            <button
              onClick={closeSuccessModal}
              className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
