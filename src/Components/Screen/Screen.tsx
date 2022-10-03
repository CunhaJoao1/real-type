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
       @media screen and (max-width: 768px){
           padding-top: 7rem;
        }
    }
    
`
type ScreenProps = {
    dontHaveAccount: string,
    haveAccount: string,
}
export function Screen() {
    const [nameScreen, setNameScreen] = useState(true)

    const chooseScreen = ()=>{
        setNameScreen(!nameScreen)
    }

  return (
    <Div>
        <div className='image'></div>

        <div className='screen'>
            <h4>Wellcome back</h4>
            <h2>Login to your account</h2>
                     
            
            <Register screenAccount={chooseScreen}/>      
           
            
        </div>
        
    </Div>
  )
}
