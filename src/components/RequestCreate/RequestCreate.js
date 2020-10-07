import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { RequestContext, RequestContextProvider } from '../RequestContext/RequestContext';


const RequestCreate = props => {
    const [request, setRequest] = useState({});
    const [user, setUser] = useState({ type: 'careGiver' })
    const { createNewRequest, requestDB } = useContext(RequestContext)

    function handleChange({ target }) {
        setRequest({
            ...request,
            [target.name]: target.value
        })
    }

    function handleDateChange(name, date) {
        setRequest({
            ...request,
            [name]: date,
        })
    }

    function handleSignup(e) {
        e.preventDefault();
        createNewRequest(request)
    }

    return (
        <form onSubmit={handleSignup}>

            <input type="text" name="id"
                value={user.id}
                readOnly
                hidden /> <br />

            <input type="text" name="typeOfCare"
                value={request.typeOfCare || ""}
                onChange={handleChange}
                placeholder="Type of care needed." /> <br />

            <label htmlFor="start">Starting date</label>
            <DatePicker
                selected={request.start}
                value={request.start}
                onChange={handleDateChange.bind(this, "start")}
                name="start"
                dateFormat="dd MMMM"
            />
            <br />

            <label htmlFor="end">Ending date</label>
            <DatePicker
                selected={request.end}
                value={request.end}
                onChange={handleDateChange.bind(this, "end")}
                name="end"
                dateFormat="dd MMMM"
            />
            <br />

            <textarea name="description"
                value={request.description || ""}
                onChange={handleChange}
                placeholder="Description ..."
                name="description"

            /><br />

            <button type="submit">Post it</button>
        </form>
    )
}

export default RequestCreate;