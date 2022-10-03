import React, { useState } from 'react'
import {useForm} from "react-hook-form"
import * as yup from "yup"
import {schema} from "../Validations/Validation"
import {yupResolver} from "@hookform/resolvers/yup"
import styled from 'styled-components'
import {RegistrationFormData} from "../Validations/RegistrationFormData"
import {Div} from "./RegisterStyle"
import axios from "axios"
import {api} from "../Api/api"


type RegisterProps = {
    screenAccount: () =>void,
}
export function Register(props: RegisterProps) {
    const {register, handleSubmit, formState: {errors}} = useForm<RegistrationFormData>({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data: any, value: any) =>{
        value.preventDefault()
        console.log(data)
        try {
            api.post('/register', {data}).then(res=>{
                console.log(res)
            }).then(err =>{
                console.log(err)
            })
        } catch (error) {
            console.error(error)
        }
        
    }
    const [nameScreen, setNameScreen] = useState('')

  return (
    <Div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Nome <input type="text" placeholder='Name...' {... register("name")}/>
                <p className='error-message' >{errors.name ?.message}</p>            
            </label>

            <label>Email <input type="text" placeholder='example@email.com' {... register("email")}/>
                <p className='error-message'>{errors.email ?.message}</p>
             </label>

             <label>Username <input type="text" placeholder='name123' {... register("username")}/>
                <p className='error-message'>{errors.username ?.message}</p>
             </label>

            <label>Password <input type="password" {... register("password")}/> 
                <p className='error-message'>{errors.password ?.message}</p>
            </label>

            <label>Confirm Password <input type="password" {... register("confirmPassword")}/>
                <p className='error-message'>{errors.confirmPassword ?.message}</p>
            </label>

            <button >Register</button>
        </form>

        <div className='returnLogin'>
                <p> have an account?<span onClick={()=>props.screenAccount()}> Click Here</span> </p>
        </div>
    </Div>
  )
}
