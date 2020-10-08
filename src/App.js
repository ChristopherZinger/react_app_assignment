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
    <React.Fragment>
      <Navbar />
      <div className="">
        <Switch>
          <Route path='/logout' component={Logout} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/login' component={LoginForm} />
          <Route path='/signup' component={SignupForm} />
          <Route path='' component={Home} />
        </Switch>
      </div>
    </React.Fragment>

  )
}


const Home = props => {
  const { requestDB } = useContext(RequestContext);

  return (
    <div className="row">
      <div className="col">
        <Hello />
      </div>
      <div className="col">
        <Route path={props.match.path} component={() =>
          <RequestList requestList={requestDB} {...props} />} /></div>
    </div>
  )
}

const Hello = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-3">Hello!</h1>
      <p className="lead">Welcome to 'takecare.com', Here you will find a health care you need as well as patients you are looking for.</p>
      <hr className="my-4" />
      <p>Choose from thousands of offers posted by our users. </p>
      <p className="lead">

        <Link to='/signup' className="btn btn-secondary btn-lg"
          role="button" >Signup</Link>
          &nbsp; or &nbsp;
        <Link to='/login' className="btn btn-primary btn-lg"
          role="button"  >login</Link>
      </p>
    </div>
  )
}


