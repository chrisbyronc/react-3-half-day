import ToDoApp from './ToDoApp';
// import OnePotato from './OnePotato';
// import TwoPotato from './TwoPotato';
import './App.css';

function App() {
  let weather = {
    currentCity: "Cleveland",
    description: "Sunny",
    temperature: 76
  }
  let toDos = [
    "learn React",
    "eat",
    "sleep",
    "practice React",
    "watch React Pluralsight videos",
    "practice JavaScript",
  ]
  return (
    <div className="App">
      <ToDoApp 
        name="Chris"
        weather={weather}
        toDos={toDos}
      />
      {/* <OnePotato name="Michael" type="Russet" />
      <TwoPotato name="Kyle" type="French Fry" /> */}
    </div>
  );
}

export default App;
