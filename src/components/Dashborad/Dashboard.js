import React, { useContext } from 'react';
import RequestList from '../RequestList/RequestList';
import UserInfo from '../UserInfo/UserInfo';
import { UserContext } from '../UserContext/UserContext';
import { Route, Redirect } from 'react-router-dom';
import RequestCreate from '../RequestCreate/RequestCreate';
import { RequestContext } from '../RequestContext/RequestContext';
import RequestDetail from '../RequestDetail/RequestDetail';

const Dashboard = props => {
    const { user, isAuth } = useContext(UserContext);
    const { requestDB } = useContext(RequestContext);
    const userRequestList = requestDB.filter(item => {
        return item.user === user.id
    }) || {};

    console.log(props.match)

    const activeRequestList = requestDB.filter(item => item.isActive) || {};
    const content = user.type === 'careGiver'
        ? <CaregiverDashboard requestList={activeRequestList} match={props.match} />
        : <CaretakerDashboard requestList={userRequestList} />;

    return (
        <div>
            <UserInfo />
            {isAuth
                ? content
                : <Redirect to='/' />
            }
        </div >
    )
}


const CaretakerDashboard = ({ requestList }) => {
    return (
        <React.Fragment>
            <Route component={RequestCreate} />
            <Route component={(p) =>
                <RequestList {...p} requestList={requestList} />} />
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
