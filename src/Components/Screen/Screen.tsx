import React, { useState } from 'react'
import styled from "styled-components"
import Image from "../../assets/image1.png"
import { Login } from './Login'
import { Register } from './Register'


const Div = styled.div`
    display: flex;
    @media screen and (max-width: 768px){
            flex-direction: column-reverse;
        }
    .image{
        width: 100%;
        height: 100vh;
        background-image: url(${Image});
        background-repeat: no-repeat;
        background-size: cover;
        @media screen and (max-width: 768px){
            visibility: hidden;
            opacity: 0;
            width: 0;
            height: 0;
        }
    }
    .screen{

        width: 100%;
        height: 100vh;
       padding: 14rem 10%;
       padding-bottom: 0;
       position: relative;
       /* @media screen and (max-width: 1024px){
        padding: 14rem 5rem;
        } */
       /* .returnLogin{
        position: absolute;
        bottom: 2rem;
        left: 0;
        width:100%;
        text-align: center;

        span{
            color: #2B6CB0;
            cursor: pointer;
        }
    } */
    }
    
`
type ScreenProps = {
    dontHaveAccount: string,
    haveAccount: string,
}
export function Screen() {
    const [nameScreen, setNameScreen] = useState('register')

    const chooseScreen = (screenType: string)=>{
        setNameScreen(screenType)
    }

  return (
    <Div>
        <div className='image'></div>

        <div className='screen'>
            <h4>Wellcome back</h4>
            <h2>Login to your account</h2>
            {
                nameScreen == 'register' ?  <Register screenAccount={chooseScreen}/>: <Login/>                
            }
            
           


            
        </div>
        
    </Div>
  )
}
