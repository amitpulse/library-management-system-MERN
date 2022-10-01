import { createContext, useReducer } from "react";

export const BooksContext = createContext();

export const booksReducer = (state, action) => {
    switch(action.type){
        case 'SET_BOOKS':
            return{
                books: action.payload
            }
        case 'CREATE_BOOKS':
            return{
                books: [action.payload, ...state.books]
            }
        default:
            return state;
    }
}
export const BooksContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(booksReducer, {
        books: null
    })

    // to update state first dispatch function is called and an object as an argument is passed
    // this object should have type property
    // second property is a payload poperty, it is the data we need to make a change
    // dispatch({type: 'SET_BOOKS', payload:[]})
    
    return(
        <BooksContext.Provider value={{ ...state, dispatch }}>
            {children}
        </BooksContext.Provider>
    )
}