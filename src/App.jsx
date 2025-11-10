
import MovieForm from './components/MovieForm';
import './App.css'

function App() {

const uniqueId = crypto.randomUUID();
console.log(uniqueId);

  return (
    <div className='app-container'>
      <MovieForm id={uniqueId} />
    </div>
  )
}

export default App
