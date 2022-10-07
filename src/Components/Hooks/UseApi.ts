import axios from "axios";
import Api from "../Api/Api";


export const UseApi = () =>({
    validateToke: async (token: string) => {
        const response = await Api.post('/validate-token', {token})
        return response.data
    },
    signIn:async (loginEmail:string, loginPassword: string) => {
         const response = await Api.post('/signin', {loginEmail, loginPassword})
         return response.data
    },
    signOut:async () => {
        return true
        const response = await Api.post('/logout')
        return response.data
    }

})