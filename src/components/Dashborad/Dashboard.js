import React, { useContext } from 'react';
import RequestList from '../RequestList/RequestList';
import UserInfo from '../UserInfo/UserInfo';
import { UserContext } from '../UserContext/UserContext';
import { Route, Redirect, Link } from 'react-router-dom';
import RequestCreate from '../RequestCreate/RequestCreate';
import { RequestContext } from '../RequestContext/RequestContext';
import RequestDetail from '../RequestDetail/RequestDetail';
import TitleWrapper from '../TitleWrapper/TitleWrapper';


const Dashboard = props => {
    const { user, isAuth } = useContext(UserContext);
    const content = user.type === 'careGiver'
        ? <CaregiverDashboard match={props.match} />
        : <CaretakerDashboard match={props.match} />;

    return (
        <div>
            {!isAuth ? <Redirect to='/' /> : null}
            <UserInfo />
            {content}
        </div >
    )
}

const CaretakerRequestListOfLists = props => {
    const { requestDB } = useContext(RequestContext);
    const { user } = useContext(UserContext);

    const activeRequestList = requestDB.filter(item => {
        return (item.user === user.id && item.isActive)
    });
    const pendingRequestList = requestDB.filter(item => {
        return (item.user === user.id && !item.isActive)
    });

    return (
        <div>
            <TitleWrapper title="Your Active requests" description="list of all your active requests.">
                <RequestList requestList={activeRequestList} />
            </TitleWrapper>

            {pendingRequestList.length > 0 ?
                <TitleWrapper title="Appointments" description="list of all your appointments.">
                    <RequestList requestList={pendingRequestList} />
                </TitleWrapper>
                : null
            }

        </div>
    )
}

// patient dashboard
const CaretakerDashboard = props => {
    const { requestDB } = useContext(RequestContext);
    const { user } = useContext(UserContext);

    const requestList = requestDB.filter(item => {
        return item.user === user.id
    }) || {};
    return (
        <React.Fragment>
            <Link to={`${props.match.path}/create-request`}
                className="btn btn-primary">Create new Request
             </Link>
            <br />
            <Route path={`${props.match.path}/create-request`} component={RequestCreate} />
            <br />
            <Route path={props.match.path} exact component={(p) =>
                <CaretakerRequestListOfLists {...p} />
            }
            />
        </React.Fragment>
    )
}

// care provider dashboard
const CaregiverDashboard = props => {
    const { requestDB } = useContext(RequestContext);
    const { user } = useContext(UserContext);

    const requestList = requestDB.filter(item => item.isActive) || [];
    const yourAppointments = requestDB.filter(item => item.careGiver == user.id) || [];

    return (
        <div>
            {/* Your appointments */}
            { yourAppointments.length > 0 ?
                <TitleWrapper title="Your Appointments" description="list with your appointments.">
                    <Route component={(p) =>
                        <RequestList {...p} requestList={yourAppointments} />} />
                </TitleWrapper>
                : null
            }

            {/* All appointments */}
            <TitleWrapper title="Find new requests" description="list with all available requests.">
                <Route component={(p) =>
                    <RequestList {...p} requestList={requestList} />} />
            </TitleWrapper>

            {/* details about appointment */}
            <TitleWrapper title="Info" description="">
                <Route path={`${props.match.path}/:id`} component={RequestDetail} />
            </TitleWrapper>
        </div>

    )
}


export default Dashboard;
