


import React, { useEffect, useState, useContext } from 'react';
import { RequestContext } from '../RequestContext/RequestContext';
import { UserContext } from '../UserContext/UserContext';
import moment from 'moment';
import { Redirect } from 'react-router-dom'

const RequestDetail = props => {
    const { isAuth } = useContext(UserContext);
    const { requestDB } = React.useContext(RequestContext);
    const [request, setRequest] = useState({});

    function getRequest(id) {
        const request = requestDB.filter(i => i.id == id)[0];
        setRequest(request);
    }

    useEffect(() => {
        // i dont know why i am not getting the params here :(
        getRequest(props.match.params.id)
    })

    return (
        <div>
            {!isAuth ? <Redirect to="/login" /> : null}
            <h4>request detail</h4>
            <RequestInfo request={request} />
            <ApplyBtn request={request} />
        </div>
    )
}

const ApplyBtn = ({ request }) => {
    const { apply, requestDB } = useContext(RequestContext);
    const { user } = useContext(UserContext);

    function handleApply() {
        apply(request.id, user.id)
    }
    if (request.user !== user.id) {
        return (
            <button onClick={handleApply}> apply </button>
        )
    } else {
        return null
    }

}


const RequestInfo = ({ request }) => {
    return (
        <ul>
            <li >
                <div>Type of Care :</div>
                <div>{request.typeOfCare}</div>
            </li>
            <li >
                <div>Start Date :</div>
                <div>{moment(request.start).format('DD MMMM YYYY')}</div>
            </li>
            <li >
                <div>End Date:</div>
                <div>{moment(request.end).format('DD MMMM YYYY')}</div>
            </li>
            <li >
                <div>Description:</div>
                <div>{request.description}</div>
            </li>
            <li >
                <div>Status :</div>
                <div>{request.isActive ? "active" : "taken"}</div>
            </li>
        </ul>
    )
}

export default RequestDetail;