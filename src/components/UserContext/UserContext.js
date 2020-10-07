import React, { createContext, useReducer } from 'react';

const userDB = [
    {
        id: 1320,
        email: "john@email.com",
        type: "careGiver", // or "careTaker"
        fullName: "John Smith",
        password: 'testpassword'
    },
    {
        id: 1370,
        email: "kate@email.com",
        type: "careTaker", // or "careTaker"
        fullName: "Kate Adams",
        password: 'testpassword'
    },
]

const actionTypes = {
    AUTH_LOGIN: 'AUTH_LOGIN',
    AUTH_LOGOUT: 'AUTH_LOGOUT',
    AUTH_SIGNUP: 'AUTH_SIGNUP'
}

export const UserContext = createContext();
const initialState = {
    isAuth: false,
    isLoading: false,
    user: {},
    userDB: userDB
}

function reducer(state, action) {

    switch (action.type) {
        case actionTypes.AUTH_LOGIN:
            return { ...state, isAuth: true, user: action.data };

        case actionTypes.AUTH_SIGNUP:
            return {
                ...state,
                isAuth: true,
                user: action.data,
                userDB: [...state.userDB, action.data]
            };
        case actionTypes.AUTH_LOGOUT:
            return { ...state, isAuth: false, user: {} };
    }
}

export function UserContextProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = {
        isAuth: state.isAuth,
        isLoading: state.isLoading,
        user: state.user,
        userDB: state.userDB,
        signup: (userInfo) => {
            // generate id 
            const id = Math.floor(Math.random() * 10000);
            const data = { ...userInfo, id }
            // api call here
            dispatch({ type: actionTypes.AUTH_SIGNUP, data });
            // dispatch({ type: actionTypes.AUTH_SUCCESS, data });
        },
        login: ({ email }) => {
            const data = state.userDB.filter(user => user.email === email)[0]
            if (data) { dispatch({ type: actionTypes.AUTH_LOGIN, data }); }
            else { console.log('this user doesnt exists') }

        },
        logout: () => {
            dispatch({ type: actionTypes.AUTH_LOGOUT });
        }
    }

    return (
        <UserContext.Provider value={value} >
            { props.children}
        </UserContext.Provider >
    )
}