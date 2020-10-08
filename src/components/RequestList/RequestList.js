import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment';
import { UserContext } from '../UserContext/UserContext'


const RequestList = props => {
    const { isAuth } = useContext(UserContext)

    const requestList = props.requestList.map(item => {
        return (
            < RequestItem item={item} match={props.match} isAuth={isAuth} />
        )
    })

    return (
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Type</th>
                    <th scope="col">start</th>
                    <th scope="col">end</th>
                    <th scope="col">status</th>
                    {isAuth
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

/* <Route path={`${props.match.path}/:id`} component={RequestDetail} /> */

const RequestItem = props => {
    const item = props.item;
    console.log('is auth in rq items   ', props.isAuth)
    return (
        <tr key={item.id}>
            <th scope="row">{item.typeOfCare}</th>
            <td>{moment(item.start).format('DD MMMM')}</td>
            <td>{moment(item.end).format('DD MMMM')}</td>
            <td>{item.isActive ? 'active' : 'reserved'}</td>

            {  props.isAuth ?
                <td>
                    <Link to={`${props.match.path}/${item.id}`} >
                        view details
                    </Link> </td>
                : null}
        </tr>
    )
}

export default RequestList;





// <table class="table table-hover">
//     <thead>
//         <tr>
//             <th scope="col">Type</th>
//             <th scope="col">Column heading</th>
//             <th scope="col">Column heading</th>
//             <th scope="col">Column heading</th>
//         </tr>
//     </thead>
//     <tbody>

//         <tr>
//             <th scope="row">Default</th>
//             <td>Column content</td>
//             <td>Column content</td>
//             <td>Column content</td>
//         </tr>

//     </tbody>
// </table> 