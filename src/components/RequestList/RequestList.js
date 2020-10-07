import React, { useContext } from 'react';
import { RequestContext } from '../RequestContext/RequestContext';
import { Link } from 'react-router-dom'
import moment from 'moment';


const RequestList = props => {
    const { requestDB } = useContext(RequestContext);

    const requestList = requestDB.map(item => {
        return (
            <li key={item.id}>
                <Link to={"/request/" + item.id} >
                    {item.typeOfCare} &nbsp;
                    {item.isActive ? "active" : "not active"}&nbsp;

                    from: &nbsp; {moment(item.start).format('DD MMMM YYYY')} &nbsp;
                    to: &nbsp; {moment(item.end).format('DD MMMM YYYY')}
                </Link>
            </li>

        )
    }
    )
    return (

        <div>
            <h4>Request List</h4>
            <ul>
                {requestList}
            </ul>
        </div>

    )
}


export default RequestList;