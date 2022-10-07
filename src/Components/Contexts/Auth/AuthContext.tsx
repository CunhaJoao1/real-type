import React, {Context, createContext} from 'react'
import { User } from '../../../Types/User'

export type AuthContexxtType = {
    user: User | null,
    signIn: (loginEmail: string, loginPassword: string) => Promise<Boolean>
    signOut: ()=> void;
}


export const AuthContext = createContext<AuthContexxtType>(null!)