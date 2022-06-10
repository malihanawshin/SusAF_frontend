import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const MainContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1; 

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        
    }
`

export const FormContainer = styled.div`
    min-height: 692px;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    padding-top: 80px;
    padding-bottom: 120px;
    z-index: 0;
    overflow: hidden;

    /* linear-gradient(
        108deg,
        rgba(1, 147, 86, 1) 0%,
        rgba(10, 201, 122, 1) 100%,
    );  */
`  
export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    //width: 500px;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`

export const Form = styled.form`
   background: #fff;
   max-width: 850px;
   height: auto;
   width: 100%;
   z-index:1;
   display: grid;
   margin: 0 auto;
   padding: 40px 32px;
   border-radius: 4px;
   display: flex;
   flex-direction: column;
   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

   @media screen and (max-width: 400px) {
        padding: 32px 32px; 
    }
`

export const FormH1 = styled.h1`
    margin-bottom: 20px;
    color: #000;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: none;
    border-radius: 4px;
`

export const FormTextArea = styled.textarea`
    padding: 16px 16px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: none;
    border-radius: 4px;
`

export const FormSelect = styled.select`
    display: flex;
    flex: 3;
    margin-top: 10px;
    align-items: flex-start;
    padding: 16px 16px;
    border-radius: 4px;
    margin-right: 10px;
    min-width: 200px;
`

export const Option = styled.option``

export const Row = styled.div`
    min-width: 280px;
    display: flex;
    // align-items: center;
    flex-direction: row;
    justify-content : space-between;
`

export const Column = styled.div`
    width: 225px;
    margin-bottom: 15px;
    padding: 10px 10px;
`

export const FormButton = styled.button`
    background: #00b300;
    padding: 12px 0;
    width: 120px;
    margin:0 auto;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 4px;
    color: #000;
    font-size: 16px;
    cursor: pointer;
`

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
`


export const NavBtnLink = styled(Link)`
    border-radius: 50px;
    background: #01BF71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #000;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
`