import React from 'react'
import styled from 'styled-components'


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
    const onSubmit = (data: any)=>{
        data.preventDefault
        /* console.log('ola mundo') */
    }
  return (
    <Div>
        <form onSubmit={()=>onSubmit}>
            <label>
                Email
                <input type="text" />
            </label>

            <label>
                Senha
                <input type="password" />
            </label>
            <button>Login</button>
        </form>
    </Div>
  )
}
