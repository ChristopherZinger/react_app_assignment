import React, { useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SignupForm from './components/Auth/SignupForm';
import LoginForm from './components/Auth/LoginForm';
import Logout from './components/Auth/Logout';
import { UserContextProvider } from './components/UserContext/UserContext'
import UserInfo from './components/UserInfo/UserInfo'
import RequestList from './components/RequestList/RequestList';
import { RequestContextProvider, RequestContext } from './components/RequestContext/RequestContext';

function App() {
  return (
    <div className="App">
      <Router >
        <UserContextProvider >
          <RequestContextProvider>
            <Layout />
          </RequestContextProvider>
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
        <Route path='/request-list' component={RequestList} />

      </Switch>
    </div>

  )
}

const Navbar = props => {
  return (
    <div>
      <ul>
        <Link to='home' >home</Link><br />
        <Link to='login' >login</Link><br />
        <Link to='signup' >signup</Link><br />
        <Link to='logout' >logout</Link><br />
        <Link to='request-list' >request list</Link><br />
      </ul >
    </div >
  )
}


