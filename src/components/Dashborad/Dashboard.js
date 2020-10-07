import React, { useContext } from 'react';
import RequestList from '../RequestList/RequestList';
import UserInfo from '../UserInfo/UserInfo';
import { UserContext } from '../UserContext/UserContext';
import { Route } from 'react-router-dom';
import RequestCreate from '../RequestCreate/RequestCreate';



const Dashboard = props => {
    const { user, isAuth } = useContext(UserContext);
    return (
        <div>
            dashboard
            <UserInfo />

            {user.type === 'careGiver' ?
                <Route component={RequestList} />
                : <Route component={RequestCreate} />
            }

        </div >
    )
}


export default Dashboard;
