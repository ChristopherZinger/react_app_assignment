import React, { useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SignupForm from './components/Auth/SignupForm';
import LoginForm from './components/Auth/LoginForm';
import Logout from './components/Auth/Logout';
import { UserContextProvider } from './components/UserContext/UserContext'
import UserInfo from './components/UserInfo/UserInfo'

function App() {
  return (
    <div className="App">
      <Router >
        <UserContextProvider >
          <Layout />
        </UserContextProvider>
      </Router>
    </div>
  );
}

export default App;


const Layout = props => {
  return (
    <div>
      <Navbar />
      <UserInfo />
      <Switch>


        <Route path='/login' component={LoginForm} />
        <Route path='/signup' component={SignupForm} />
        <Route path='/logout' component={Logout} />

      </Switch>
    </div>

  )
}

const Navbar = props => {
  return (
    <div>
      <h1>asdfasdf</h1>
      <ul>
        <Link to='login' >login</Link><br />
        <Link to='signup' >signup</Link><br />
        <Link to='logout' >logout</Link><br />
      </ul >
    </div >

  )
}


