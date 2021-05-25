import logo from './logo.svg';
import NavBar from './components/NavBar.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './components/combine/SignUp';
import SignIn from './components/combine/SignIn';
import Price from './components/combine/Price';
import MainPage from './components/combine/MainPage';
import Footer from './components/Footer';
import ForgotPage from './components/combine/ForgotPage';
function App() {
  return (
   
   <> 
      <Router>
        
      <NavBar/>
        <Switch>
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/pricing' component={Price} />
          <Route path='/forgot-password' component={ForgotPage} />
          <Route path='/pricing' component={Price} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/sign-in' component={SignIn} />
        </Switch>
        </Switch>
        <Footer/>
      </Router>

    </>
  );
}

export default App;
