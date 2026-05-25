import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Perfil from './components/Perfil/Perfil';
import Habilidades from './components/Habilidades/Habilidades';
import Proyectos from './components/Proyectos/Proyectos';
import Servicios from './components/Servicios/Servicios';
import Certificados from './components/Certificados/Certificados';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import './App.css';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Perfil />
      <Habilidades />
      <Proyectos />
      <Servicios />
      <Certificados />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;