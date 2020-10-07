import React, { useContext, useState } from 'react';
import { RequestContext } from '../RequestContext/RequestContext';
import { Link } from 'react-router-dom'
import moment from 'moment';
import { Switch, Route, useParams } from 'react-router-dom';
import RequestDetail from '../RequestDetail/RequestDetail';
import { UserContext } from '../UserContext/UserContext'


const RequestList = props => {
    const { isAuth } = useContext(UserContext)

    const requestList = props.requestList.map(item => {
        return (
            <li key={item.id} >
                < RequestItem item={item} />
                {  isAuth ?
                    <Link to={`${props.match.path}/${item.id}`} >
                        view
                        </Link> : null}
            </li>
        )
    })

    return (
        <div>
            <h4>Request List</h4>
            <ul>
                {requestList}
                <Route path={`${props.match.path}/:id`} component={RequestDetail} />
            </ul>
        </div>
    )
}

const RequestItem = ({ item }) => {
    return (
        <React.Fragment>
            {item.typeOfCare} &nbsp;
            {item.isActive ? "active" : "not active"}&nbsp;
            from: &nbsp; {moment(item.start).format('DD MMMM YYYY')} &nbsp;
            to: &nbsp; {moment(item.end).format('DD MMMM YYYY')}
        </React.Fragment>
    )
}

export default RequestList;