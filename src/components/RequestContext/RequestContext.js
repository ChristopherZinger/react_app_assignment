import React, { createContext, useReducer } from 'react';

const requestDB = [
    {
        id: 1112,
        user: 1370,
        start: new Date(2020, 11, 10, 10, 33, 30, 0),
        end: new Date(2020, 11, 13, 10, 33, 30, 0),
        typeOfCare: 'Nursing',
        description: 'This is a description of the care needed.',
        isActive: true,
        careGiver: null
    },
    {
        id: 1111,
        user: 1370,
        start: new Date(2020, 12, 5, 10, 33, 30, 0),
        end: new Date(2020, 12, 7, 10, 33, 30, 0),
        typeOfCare: 'Nursing',
        description: 'This is a description of the care needed.',
        isActive: true,
        careGiver: null
    },
]

const actionTypes = {
    CREATE_REQUEST: 'CREATE_REQUEST',
    CONSUME_REQUEST: 'CONSUME_REQUEST',
}

export const RequestContext = createContext();
const initialState = { requestDB }

function reducer(state, action) {
    switch (action.type) {
        case actionTypes.CONSUME_REQUEST:
            return {
                ...state, requestDB: [...action.data]
            };
        case actionTypes.CREATE_REQUEST:
            return {
                ...state, requestDB: [...state.requestDB, action.data]
            };
    }
}

export function RequestContextProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = {
        requestDB: state.requestDB,

        createNewRequest: (data) => {
            data.id = Math.floor(Math.random() * 10000);
            dispatch({ type: actionTypes.CREATE_REQUEST, data });
        },

        apply: (requestId, userId) => {
            const data = state.requestDB.map(item => {
                if (item.id == requestId) {
                    item.isActive = false;
                    item.careGiver = userId;
                }
                return item;
            })
            dispatch({ type: actionTypes.CONSUME_REQUEST, data })
        },
    }

    return (
        <RequestContext.Provider value={value} >
            { props.children}
        </RequestContext.Provider >
    )
}