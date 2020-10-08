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
            {request.isActive
                ? <RequestInfo request={request} applyBtn={<ApplyBtn request={request} />} />
                : null
            }
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
            <button className='btn btn-secondary' onClick={handleApply}> apply </button>
        )
    } else {
        return null
    }

}


const RequestInfo = ({ request, ...props }) => {
    return (

        <div className="card bg-light mb-3" style={{ maxWidth: '30rem' }}>
            <div className="card-header">{request.isActive ? "active" : "taken"}</div>
            <div className="card-body">
                <h4 className="card-title">Patient is looking for a {request.typeOfCare}</h4>
                <p className="card-text">{request.description}</p>
                <hr />
                <div>
                    <div className='row'>
                        <div className='col-9'>
                            {moment(request.start).format('DD MMMM YYYY')} <br />
                            {moment(request.end).format('DD MMMM YYYY')}
                        </div>
                        <div className='col-3'>
                            {props.applyBtn}
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default RequestDetail;