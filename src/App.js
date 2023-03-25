import './App.css';
import ChatGPT from './Components/Form';
import Hero from './Components/Hero';
import ButtonAppBar from './Components/Navbar';

function App() {
  return (
		<div className="App">
			<ButtonAppBar />
			<Hero />
			<ChatGPT />
		</div>
  );
}

export default App;
