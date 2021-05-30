
import './App.css';
import Mensaje from './Mensaje.js';

/* Creamos nuestros propios componentes, con arrow function */
const Saludo = () => {
  return <h1>Hola Mundo</h1>
}

/*Este componente creado como function normal*/ 
/*Los componentes tienen que empezar en mayuscula para diferenciarlos de las etiquetas HTML*/
const Description = function() {
  return <p>Esta es la app del bootcamp FullSatck</p>
}

function App() {
 
  return (
    <div className="App">
      <Saludo />
      <Mensaje color='red' message='Estamos trabajando' />
      <Mensaje color='blue' message='en un curso'/>
      <Mensaje color='green' message='de React'/>
      <Mensaje color='violet' message='La Roci se aburre sin TWD'/>
      <Description />
    </div>
  );
} 

export default App;
