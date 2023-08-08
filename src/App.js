
import './App.css';
import Navbar from './components/Navbar/nav'
import MovieList from './components/MovieList/movieList';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <MovieList />
      <p class="footer">Created by <a href="https://www.linkedin.com/in/rahulgundluru/" target="_blank"  rel="noreferrer"  >@rahulgundluru2023</a>
      </p>
    </div>
  );
}

export default App;
