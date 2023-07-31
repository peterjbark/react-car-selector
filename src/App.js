import Filter from "./components/Filter";
import Display from "./components/Display";

function App() {
  return (
    <div className="app">
      <header className = "header">
      <h1>Car Selector</h1>
        <Filter/>
      </header>
      <main className = "main">
        <Display/>
      </main>
    </div>
  );
}

export default App;
