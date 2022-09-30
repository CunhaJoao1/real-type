import styled from "styled-components";

export const Div = styled.div`
margin-top: 3rem;
height: 85%;
position: relative;
    form{
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
            .input-error{
            border-color: red;
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
        .error-message{
            color: red;
            position: absolute;
            right: 0;
        }
        
    }
    .returnLogin{
        position: absolute;
        bottom: 0;
        left: 0;
        width:100%;
        text-align: center;

        span{
            color: #2B6CB0;
            cursor: pointer;
        }
    }
    
`
