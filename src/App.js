import logo from './logo.svg';
import './App.css';
// import Ejemplo1 from './hooks/ejemplo1';
// import Ejemplo2 from './hooks/ejemplo2';
// import MiComponenteConContexto from './hooks/ejemplo3';
// import Ejemplo4 from './hooks/ejemplo4';
// import TaskListComponent from './components/container/task_list';
// import GreetingStyled from './components/pure/greetingStyled';
// import Clock from './components/pure/clockClass';
import ClockFx from './components/pure/clockFunctional';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* ejemplos de uso de hooks */}

        {/* useState */}
        {/* <Ejemplo1></Ejemplo1> */}

        {/* useRef y useEffect */}
        {/* <Ejemplo2></Ejemplo2> */}

        {/* useState y useContext */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}

        {/* props children */}
        {/* <Ejemplo4 nombre="contenido estatico"> */}
        {/* todo aqui dentro es tratado como props.children */}
          {/* <h3>
            contenido del props.children
          </h3>
        </Ejemplo4> */}
        {/* <TaskListComponent></TaskListComponent> */}

        {/* <GreetingStyled name='Angela'></GreetingStyled> */}
        {/* <Clock></Clock> */}
        <ClockFx nombre='Martin' apellidos='San Jose'></ClockFx>
      </header>
    </div>
  );
}

export default App;
