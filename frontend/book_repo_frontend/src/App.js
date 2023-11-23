import './App.css';
import ButtonAppBar from './components/main/ButtonAppBar';
import Books from './components/main/Books'
import Auth from './components/auth/Auth';

function App() {
  return (
    <div className="App">
      {/* <ButtonAppBar/>
      <Books/> */}
      <Auth/>
    </div>
  );
}

export default App;

// todo add http cookies functionality to contact the backend for rgister and authentication
// todo add redirection, to main webpage after successfull login, and maybe error message after unsuccessfull login/registration
