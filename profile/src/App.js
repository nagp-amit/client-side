import './App.css';

function App() {
  return (
    <div className="App">
      <personal-details> </personal-details>
      <div className="personal-details-container">
        <h3>Address - React</h3>
        <p>
          <span className="label">Address Line 1: </span> <span>Jersey City</span>
        </p>
        <p>
          <span className="label">Address Line 2: </span> <span>NJ</span>
        </p>
      </div>
    </div>
  );
}

export default App;
