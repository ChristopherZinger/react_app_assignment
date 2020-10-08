import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment';
import { UserContext } from '../UserContext/UserContext'


const RequestList = props => {
    const { user, isAuth } = useContext(UserContext)

    const requestList = props.requestList.map(item =>
        < RequestItem key={item.id} item={item} match={props.match} />
    )

    return (
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Type</th>
                    <th scope="col">start</th>
                    <th scope="col">end</th>
                    <th scope="col">status</th>
                    {(isAuth && user.type === "careGiver")
                        ? <th scope="col">link</th>
                        : null
                    }
                </tr>
            </thead>
            <tbody>
                {requestList}
            </tbody>
        </table>
    )
}


const RequestItem = props => {
    const { user, isAuth } = useContext(UserContext)
    const item = props.item;

    return (
        <tr >
            <th scope="row">{item.typeOfCare}</th>
            <td>{moment(item.start).format('DD MMMM')}</td>
            <td>{moment(item.end).format('DD MMMM')}</td>
            <td>{item.isActive ? 'active' : 'reserved'}</td>

            { (isAuth && user.type === "careGiver") ?
                <td>
                    <Link to={`${props.match.path}/${item.id}`} >
                        view details
                    </Link> </td>
                : null}
        </tr>
    )
}

export default RequestList;