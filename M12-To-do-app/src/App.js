import logo from './logo.svg';
import './App.css';
import Task from './Components/Task'

const tasks = [
  {
    id: 1,
    description: 'Wash car'
  },
  {
    id: 2,
    description: 'Buy groceries'
  },
  {
    id: 3,
    description: 'Pay water bill'
  },
]

function App() {
  return (
    // <div>xxx</div> will deisplay error as can only have 1 div element, to resolve, this, would be to wrap all other divs into the main div.
    // in react also use the term 'className' rather than 'class' in html
    // also able to use a framgment which is like '< />' 
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <h1>Hi from App Component! :)</h1>
      {tasks.map((task) => <Task taskInfo={task} />)}
    </div>
  );
}

export default App;
