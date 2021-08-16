import React from 'react';
import styled from "styled-components"

const Select = styled.select`
background-color:transparent;
border: 0;
border-bottom: 1px solid #2b93ec;
color: #fff;
height:50px;

&:hover{
    background-color:transparent;
    border: 0;
    border-bottom: 1px solid #2b93ec;
    color: #fff;
}

&:focus{
    background-color:transparent;
    border: 0;
    border-bottom: 1px solid #2b93ec;
    color: #fff;

}
&>option{
    color: black;
}
`
const TextArea = styled.textarea`
background:transparent !important;
border:0px !important;
border-bottom: 1px solid #2b93ec !important;
color:white !important;
`

const FormTitle = styled.h1`
    color:white;
    font-size:50px;
    font-weight:bold;
    text-align:center;
    text-transform: uppercase;
`
const Form = styled.form`
border-radius: 15px;
padding:20px;
margin:0;`

const Input = styled.input`
background:transparent !important;
height:50px !important;
`

const Label = styled.label``


export { TextArea, Select, FormTitle, Form, Input, Label };
