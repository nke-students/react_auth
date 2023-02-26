import './App.css';
import LoginButton from './Components/LoginButton';
import LogoutButton from './Components/LogoutButton';
import Profile from './Components/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import Start from './Components/Start';


function App() {
  const {isLoading} = useAuth0();
  if (isLoading) return <div class = "Friendlist"> <h1>
    Capi loading . . .</h1> <br/>
    
    <img class ="loading" src="https://cdn3.iconfinder.com/data/icons/spooky-3d/512/5._Ghost2.png"/>

  </div>
  return (
    <>
    <Start/>
    <LoginButton/>
    <Profile/>
    <LogoutButton/>
    </>
  );
}

export default App;
