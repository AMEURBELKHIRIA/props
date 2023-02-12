import logo from './logo.svg';
import './App.css';
import Profile from './Profile/Profile';
import IMG from './Ameur.PNG';

function App() {
  const show=(x)=>{
    alert(x)
  }
  return (
    <div >
     <Profile fct={show} FullName='Ameur belkhiria'Bio ='front end devlopper'Profesion='test technology engener' >{IMG}</Profile>
    </div>
  );
}

export default App;
