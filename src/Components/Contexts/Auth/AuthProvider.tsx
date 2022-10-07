import { useEffect, useState } from "react"
import { User } from "../../../Types/User"
import { UseApi } from "../../Hooks/UseApi";
import { AuthContext } from "./AuthContext"


export const AuthProvider = ({children}: {children: JSX.Element})=>{
    const [user, setUser] = useState<User | null>(null);
    const useApi = UseApi()

    useEffect(()=>{
        const valdiateToken = async () =>{
            const storageData = localStorage.getItem('authToken');
            if(storageData){
                const data = await useApi.validateToke(storageData);
                if(data.user){
                    setUser(data.user)
                }

            }
        }
        valdiateToken()
    },[useApi])

    const signIn = async (loginEmail: string, loginPassword: string)=>{
        const data = await useApi.signIn(loginEmail, loginPassword);
        if(data.user && data.token){
            setUser(data.user);
            setToken(data.token)
            return true
        }
        else{
            return false
        }
    }

    const signOut = async () =>{
        await useApi.signOut();
        setUser(null)
        setToken('');
    }

    const setToken = (token: string)=>{
        localStorage.setItem('authToken', token)
    }

    return(
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}