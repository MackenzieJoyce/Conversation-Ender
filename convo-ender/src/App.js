import './App.css';

import Im from './components/Im'

function App() {
  return (
    <div className="App">
      <section id="compFrame">
        <section id="compScreen">
          <section id="desktop">
            <Im />
          </section>
          <section id="appBar"></section>
        </section>
      </section>
      <section id="compStand"></section>
    </div>
  );
}

export default App;
