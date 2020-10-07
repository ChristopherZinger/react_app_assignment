import React, { useContext, useState } from 'react';
import { RequestContext } from '../RequestContext/RequestContext';
import { Link } from 'react-router-dom'
import moment from 'moment';
import { Switch, Route, useParams } from 'react-router-dom';
import RequestDetail from '../RequestDetail/RequestDetail';



const RequestList = props => {
    const { requestDB } = useContext(RequestContext);
    const [reqId, setReqId] = useState(null)

    function handleReqId(id) {
        setReqId(id)
    }


    const requestList = requestDB.map(item => {
        return (
            <li key={item.id} onClick={() => handleReqId(item.id)}>
                <Link to={`request-list/` + item.id} >
                    {item.typeOfCare} &nbsp;
                    {item.isActive ? "active" : "not active"}&nbsp;

                    from: &nbsp; {moment(item.start).format('DD MMMM YYYY')} &nbsp;
                    to: &nbsp; {moment(item.end).format('DD MMMM YYYY')}
                </Link>
            </li>
        )
    })

    return (

        <div>
            <h4>Request List</h4>
            <ul>
                {requestList}

                <Route to={`${props.match.path}/:id`} component={RequestDetail} />
            </ul>
        </div>

    )
}

export default RequestList;