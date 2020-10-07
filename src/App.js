import React, { useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SignupForm from './components/Auth/SignupForm';
import LoginForm from './components/Auth/LoginForm';
import Logout from './components/Auth/Logout';
import { UserContextProvider, UserContext } from './components/UserContext/UserContext'
import RequestList from './components/RequestList/RequestList';
import { RequestContextProvider } from './components/RequestContext/RequestContext';
import RequestDetail from './components/RequestDetail/RequestDetail';
import Dashboard from './components/Dashborad/Dashboard';

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
  const { user, isAuth } = useContext(UserContext);
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path='/login' component={LoginForm} />
        <Route path='/signup' component={SignupForm} />
        <Route path='/logout' component={Logout} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </div>

  )
}

const Navbar = props => {
  const { user, isAuth } = useContext(UserContext);
  return (
    <div>
      <ul>
        <Link to='/home' >home</Link><br />
        {isAuth ?
          <React.Fragment>
            <Link to='/logout' >logout</Link>
            <Link to='/dashboard' >dashboard</Link>
          </React.Fragment >
          :
          <React.Fragment>
            <Link to='/login' >login</Link><br />
            <Link to='/signup' >signup</Link><br />
          </React.Fragment>
        }
      </ul >
    </div >
  )
}


