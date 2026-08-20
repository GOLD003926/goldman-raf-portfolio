import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer"; // ⚠️ manquait — sans lui, le lien "Contact" ne trouve pas #contact

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        {/*
          Si vous avez d'autres sections (Projets, Services, Expérience...),
          importez-les et ajoutez-les ici, dans l'ordre d'affichage. Ex :
          <Projects />
          <Services />
          <Experience />
        */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
