import React, { useContext } from 'react';
import RequestList from '../RequestList/RequestList';
import UserInfo from '../UserInfo/UserInfo';
import { UserContext } from '../UserContext/UserContext';
import { Route, Redirect } from 'react-router-dom';
import RequestCreate from '../RequestCreate/RequestCreate';



const Dashboard = props => {
    const { user, isAuth } = useContext(UserContext);


    const content = user.type === 'careGiver'
        ? <CaregiverDashboard />
        : <CaretakerDashboard />;


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


const CaretakerDashboard = () => <Route component={RequestCreate} />;
const CaregiverDashboard = () => <Route component={RequestList} />;

export default Dashboard;
