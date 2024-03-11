import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import DebounceComponent from './components/debounce';
import ThrottleComponent from './components/Throttle';
import WindowSize from './components/customeHook/WindoSize';
import WithCounterOne from './components/HOC/CounterOne';
import WithCounterTwo from './components/HOC/CounterTwo';

function App() {
  return (
    // <div className="App">
    //     <Counter/>
    // </div>
    // <DebounceComponent/>
    // <ThrottleComponent/>
    // <WindowSize/>
    <>
      <WithCounterOne />
      <WithCounterTwo />
    </>
  );
}

export default App;
