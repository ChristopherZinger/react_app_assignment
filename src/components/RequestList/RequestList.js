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
                </tr>
            </thead>
            <tbody>


                {requestList}


            </tbody>
        </table>
    )
}

/* <Route path={`${props.match.path}/:id`} component={RequestDetail} /> */

const RequestItem = ({ item }, ...props) => {
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