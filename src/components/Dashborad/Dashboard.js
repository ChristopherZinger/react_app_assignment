import React, { useContext } from 'react';
import RequestList from '../RequestList/RequestList';
import UserInfo from '../UserInfo/UserInfo';
import { UserContext } from '../UserContext/UserContext';
import { Route, Redirect, Link } from 'react-router-dom';
import RequestCreate from '../RequestCreate/RequestCreate';
import { RequestContext, RequestContextProvider } from '../RequestContext/RequestContext';
import RequestDetail from '../RequestDetail/RequestDetail';

const Dashboard = props => {
    const { user, isAuth } = useContext(UserContext);
    const { requestDB } = useContext(RequestContext);
    const userRequestList = requestDB.filter(item => {
        return item.user === user.id
    }) || {};

    const activeRequestList = requestDB.filter(item => item.isActive) || {};
    const content = user.type === 'careGiver'
        ? <CaregiverDashboard requestList={activeRequestList} match={props.match} />
        : <CaretakerDashboard requestList={userRequestList} match={props.match} />;

    return (
        <div>
            {!isAuth ? <Redirect to='/' /> : null}
            <UserInfo />
            {content}
        </div >
    )
}


const CaretakerDashboard = ({ requestList, ...props }) => {
    return (
        <React.Fragment>
            <Link to={`${props.match.path}/create-request`}
                className="btn btn-primary">Create new Request
             </Link>
            <br />
            <Route path={`${props.match.path}/create-request`} component={RequestCreate} />
            <br />
            <Route path={props.match.path} exact component={(p) => {
                return (
                    <React.Fragment >
                        <h4>Your requests:</h4>
                        <RequestList {...p} requestList={requestList} />
                    </React.Fragment>
                )
            }
            }
            />
        </React.Fragment>
    )
}

const CaregiverDashboard = ({ requestList, ...props }) => {
    return (
        <div>
            <br />
            <hr />
            <h4>Find new requests</h4>
            <Route component={(p) =>
                <RequestList {...p} requestList={requestList} />} />
            <hr />
            <br />
            <Route path={`${props.match.path}/:id`} component={RequestDetail} />
        </div>

    )
}


export default Dashboard;
