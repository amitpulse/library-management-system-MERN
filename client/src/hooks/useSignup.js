import { useState } from "react"
import { useAuthContext } from "./useAuthContext"

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()
    

    const signup = async (username, email, password, studentID, department) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch('/api/user/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, email, password, studentID,  department})
        })

        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            // if response is ok save user's webtokens in the locals storage
            localStorage.setItem('user', JSON.stringify(json))

            // then update the auth context
            dispatch({type:'LOGIN', payload: json})
            setIsLoading(false)

        }
    }

    return {signup, isLoading, error}

}