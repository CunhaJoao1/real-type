import React, { useState } from 'react'
import {useForm} from "react-hook-form"
import * as yup from "yup"
import {schema} from "../Validations/Validation"
import {yupResolver} from "@hookform/resolvers/yup"
import styled from 'styled-components'
import {RegistrationFormData} from "../Validations/RegistrationFormData"
import {Div} from "./RegisterStyle"


type RegisterProps = {
    screenAccount: (screenType: string) =>void,
}
export function Register(props: RegisterProps) {
    const {register, handleSubmit, formState: {errors}} = useForm<RegistrationFormData>({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: any, value: any) =>{
        value.preventDefault()
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

            <label>Password <input type="password" {... register("password")}/> 
                <p className='error-message'>{errors.password ?.message}</p>
            </label>

            <label>Confirm Password <input type="password" {... register("confirmPassword")}/>
                <p className='error-message'>{errors.confirmPassword ?.message}</p>
            </label>

            <button >Register</button>
        </form>

        <div className='returnLogin'>
                <p> have an account?<span onClick={()=>props.screenAccount('login')}> Click Here</span> </p>
        </div>
    </Div>
  )
}
