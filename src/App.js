import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Conocidos de Diego Argote</h1>
      <Testimonio 
      nombre='Armando Arcos'
      pais='Colombia'
      imagen='cafe'
      cargo='Escritor'
      empresa='Luganda Books'
      testimonio='Diego Argote no solo es un autor talentoso, sino también una persona excepcional. Su amabilidad, humildad y disposición para ayudar a otros son rasgos que lo distinguen en el mundo literario. Siempre dispuesto a compartir su conocimiento y experiencias, es un verdadero ejemplo de generosidad. Su calidad como ser humano se refleja en sus obras, donde la empatía y la comprensión son evidentes. Diego Argote no solo enriquece la literatura, sino también las vidas de quienes tienen el privilegio de conocerlo.' />

<Testimonio 
      nombre='Fernando Ortiz'
      pais='Ecuador'
      imagen='cool'
      cargo='Escritor'
      empresa='Wakanda Books'
      testimonio='Diego Argote es un autor de renombre, pero lo que realmente brilla es su calidad como persona. Su calidez, empatía y dedicación hacia los demás son cualidades que merecen ser elogiadas. Siempre dispuesto a escuchar y ayudar, Diego demuestra que su grandeza no se limita a sus palabras en papel, sino que se extiende a su bondad genuina y generosidad. Su presencia en la comunidad literaria y su amabilidad hacen que sea un ser humano admirable, que enriquece nuestras vidas tanto con sus obras como con su espíritu compasivo.' />

<Testimonio 
      nombre='Ezio Auditore'
      pais='Mexico'
      imagen='libro'
      cargo='Escritor'
      empresa='Venecia Books'
      testimonio='Diego Argote es, sin lugar a dudas, un autor de renombre cuyas obras brillan en el mundo literario. Pero más allá de su talento como escritor, es su calidad como ser humano lo que lo distingue. Su amabilidad, generosidad y humildad son rasgos que inspiran y elevan a quienes tienen el privilegio de conocerlo. En un mundo a menudo impersonal, Diego se destaca como un faro de autenticidad y empatía. Su influencia positiva se extiende más allá de las páginas de sus libros, tocando los corazones de quienes lo rodean. Diego Argote es una prueba viva de que la grandeza literaria puede estar acompañada de una grandeza aún mayor como ser humano.' />

      </div>
    </div>
  );
}

export default App;
