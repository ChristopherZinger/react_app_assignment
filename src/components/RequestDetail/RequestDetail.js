


import React, { useEffect } from 'react';
import { RequestContext } from '../RequestContext/RequestContext';
import { Switch, Route, useParams } from 'react-router-dom';

const RequestDetail = props => {
    const { requestDB } = React.useContext(RequestContext)


    useEffect(() => {
        // i dont know why i am not getting the params here :(
        console.log(props.match.params)
    })

    return (
        <div>
            <h4>request detail</h4>
            <ul>
                {/* <li>{request.typeOfCare}</li> */}
            </ul>
        </div>
    )
}

export default RequestDetail;