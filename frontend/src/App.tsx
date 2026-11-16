import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';

function App() {
  return (
    <div className="min-h-screen bg-[#090d18]">
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;