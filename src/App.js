import Filter from "./components/Filter";
import Display from "./components/Display";

function App() {
  return (
    <div className="app">
      <header className = "header">
        <Filter/>
      </header>
      <main>
        <Display/>
      </main>
    </div>
  );
}

export default App;
