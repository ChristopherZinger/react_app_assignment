import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { RequestContext, RequestContextProvider } from '../RequestContext/RequestContext';
import { UserContext } from '../UserContext/UserContext';
import * as gs from '../../styles/GlobalStyles.module.css';
import * as formStyles from '../../styles/FormStyles.module.css';

const RequestCreate = props => {
    const [request, setRequest] = useState({});
    const { user } = useContext(UserContext)
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
        createNewRequest({ user: user.id, ...request })
        props.history.push('/dashboard')
    }

    return (
        <div className={gs.center + " card border-secondary mb-3"} style={{ maxWidth: '30rem' }}>

            <div className="card-header">Login</div>
            <div className={formStyles.formContainer}>
                <form onSubmit={handleSignup}>
                    <input type="text" name="id"
                        value={user.id}
                        readOnly
                        hidden />

                    <label htmlFor="typeOfCare" className="col-form-label">Type of care needed: </label><br />
                    <input type="text" name="typeOfCare"
                        value={request.typeOfCare || ""}
                        onChange={handleChange}
                        placeholder="Type of care needed."
                        className="form-control"
                    />

                    <label htmlFor="start" className="col-form-label">From:</label><br />
                    <DatePicker
                        selected={request.start}
                        value={request.start}
                        onChange={handleDateChange.bind(this, "start")}
                        name="start"
                        dateFormat="dd MMMM"
                        className="form-control"
                    /><br />


                    <label htmlFor="end" className="col-form-label">To:</label><br />
                    <DatePicker
                        selected={request.end}
                        value={request.end}
                        onChange={handleDateChange.bind(this, "end")}
                        name="end"
                        dateFormat="dd MMMM"
                        className="form-control"
                    /><br />


                    <label htmlFor="description" className="col-form-label">Description:</label>
                    <textarea name="description"
                        value={request.description || ""}
                        onChange={handleChange}
                        placeholder="Description ..."
                        name="description"
                        className="form-control"
                    />

                    <br />
                    <br />
                    <button className="btn btn-secondary" type="submit">Post it</button>
                </form>
            </div>
        </div>
    )
}

export default RequestCreate;