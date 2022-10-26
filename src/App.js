import Navbar from './components/Navbar';
import Journey from './components/Journey';
import data from './components/data';
import './App.css';

function App() {
  const data_sets = data.map(set =>
    <Journey key={set.id} item={set}/>
  );
  return (
    <div className='App'>
      <Navbar />
      <div className='journeies'>
        {data_sets}
      </div>
    </div>
  );
}

export default App;
