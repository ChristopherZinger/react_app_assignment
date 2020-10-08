import React, { useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SignupForm from './components/Auth/SignupForm';
import LoginForm from './components/Auth/LoginForm';
import Logout from './components/Auth/Logout';
import { UserContextProvider, UserContext } from './components/UserContext/UserContext'
import RequestList from './components/RequestList/RequestList';
import { RequestContextProvider, RequestContext } from './components/RequestContext/RequestContext';
import Dashboard from './components/Dashborad/Dashboard';
import Navbar from './components/Navbar/Navbar';


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
  console.log('layout')
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path='/logout' component={Logout} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/login' component={LoginForm} />
        <Route path='/signup' component={SignupForm} />
        <Route path='' component={Home} />
      </Switch>
    </div>

  )
}


const Home = props => {
  const { requestDB } = useContext(RequestContext);

  return (
    <div>
      home
      <Route path={props.match.path} component={() =>
        <RequestList requestList={requestDB} {...props} />} />
    </div>
  )
}


