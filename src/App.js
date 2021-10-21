import './App.css';
import Playcard from './Playcard';
import NavBar from './NavBar';

function App() {
  return (
    <div>
      <h1>
        Replay WOOOT
      </h1>
      <NavBar />
      <Playcard song="Live From Space" artist="Mac Miller" cover="live-from-space.jpeg" />
      <Playcard song="I Wonder" artist="Kanye West" cover="graduation.jpeg" />
      <Playcard song="Bohemian Rhapsody" artist="Queen" cover="queen-ii.jpeg" />
    </div>
  );
}

export default App;
