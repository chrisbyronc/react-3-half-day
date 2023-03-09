function ToDoApp(props) {
  for (let index = 0; index < props.toDos.length; index++) {
    console.log(props.toDos[index])
  }
  return (
    <div>
      <h1>Welcome to {props.name}'s To-Do List</h1>
      <h2>The weather in {props.weather.currentCity} is {props.weather.description} with a temperature of {props.weather.temperature} degrees Fahrenheit.</h2>
    </div>
  )
}

export default ToDoApp;