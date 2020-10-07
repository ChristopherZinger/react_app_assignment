import React, { useContext } from 'react';
import RequestList from '../RequestList/RequestList';
import UserInfo from '../UserInfo/UserInfo';
import { UserContext } from '../UserContext/UserContext';
import { Route, Redirect } from 'react-router-dom';
import RequestCreate from '../RequestCreate/RequestCreate';
import { RequestContext } from '../RequestContext/RequestContext';


const Dashboard = props => {
    const { user, isAuth } = useContext(UserContext);
    const { requestDB } = useContext(RequestContext);
    const userRequestList = requestDB.filter(item => {
        console.log(item.user, item.careGiver, user.id)
        return item.user === user.id
    }) || {};
    console.log(userRequestList)
    const activeRequestList = requestDB.filter(item => item.isActive) || {};
    const content = user.type === 'careGiver'
        ? <CaregiverDashboard requestList={activeRequestList} />
        : <CaretakerDashboard requestList={userRequestList} />;

    return (
        <div>
            <h3>Dashboard</h3>
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

const CaregiverDashboard = ({ requestList }) => {
    console.log(requestList)
    return (
        <Route component={(p) =>
            <RequestList {...p} requestList={requestList} />} />
    )
}


export default Dashboard;
