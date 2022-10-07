import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AuthContext } from '../Contexts/Auth/AuthContext'
import { Navigate } from 'react-router-dom'


const Div = styled.div`
    form{
        display: flex;
        flex-direction: column;
        padding-top: 2rem;
        label{
            display: flex;
            flex-direction: column;
            margin-bottom: 1rem;
            position: relative;

            input{
                padding: 1rem 2rem;
                border-radius: 5px;
                border: solid 1px  #E8E8E8;
                margin-top: .5rem;
            }
        }
        button{
            width: 100%;
            padding: 1.5rem;
            border: none;
            border-radius: 5px;
            background-color: #04C35C;
            color: white;
            cursor: pointer;
        }
    }
`
export function Login() {
    const [user_email, setUser_email] = useState('')
    const [user_password, setUser_password] = useState('')
    const auth = useContext(AuthContext);

    const handleLogin = async ()=>{
       /*  value.preventDefault()       */  
        if(user_email && user_password){
            const isLogged = await auth.signIn(user_email, user_password)
            if(isLogged){
                <Navigate to={'/home'}/>
            }
            else{
                alert("nao deu certo")
            }
        }
    }

  return (
    <Div>
        <form onSubmit={()=>handleLogin()}>
            <label>
                Email
                <input type="text" onChange={e=> setUser_email(e.target.value)}/>
            </label>

            <label>
                Senha
                <input type="password" onChange={e=> setUser_password(e.target.value)}/>
            </label>
           {/* <Link to={"/home"}> */} <button>Login </button>{/* </Link>  */}
        </form>
    </Div>
  )
}
