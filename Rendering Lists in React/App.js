 import './App.css'
import Joke from './components/Joke';
 function App(){
  const jokes = [
    {
      id:1,
      joke: "First joke",
      rating: 3
    },
    {
      id:2,
      joke: "Second joke",
      rating: 4
    },
    {
      id:1,
      joke: "Third joke",
      rating: 5
    },
    {
      id:4,
      joke: "Fourth joke",
      rating: 3
    }
  ]
  return(
    <div className=''>
      <h1>Dad Jokes</h1>
     {jokes.filter(joke =>joke.rating>3).map(joke =>(
      <Joke key={joke.id} joke={joke.joke} rating={joke.rating} />
     ))}
    </div>
  )
 }
export default App;
