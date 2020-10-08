import React from 'react';

const TitleWrapper = props => {
    return (
        <div>
            <h4>{props.title}</h4>
            <hr />
            <p className="lead">{props.description}</p>
            {props.children}
            <br /><br /><br />
        </div>
    )
}

export default TitleWrapper;