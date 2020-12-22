import { useCallback } from "react"

export default function useUser () {

   

    const login = useCallback(() => {
        setJWT('test')
    },[setJWT])


    return {
        isLoggedIn: Boolean(),
        login
    }
}