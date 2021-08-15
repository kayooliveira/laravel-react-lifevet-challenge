import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import Input from './Input';
import styled from 'styled-components';
import Popup from 'reactjs-popup';

const FormTitle = styled.h1`
    color:white;
    font-size:50px;
    font-weight:bold;
    text-align:center;
    text-transform: uppercase;
`

const Right = styled.div`
grid-area:right;
width:100%;
text-align:center;
height:100% !important;
overflow:hidden;
`

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
const FormRequest = (props) => {
    return (
        <>
        <Right className="text-center row justify-content-center text-center text-white">
                <FormTitle className="text-primary uppercase">nova Solicitação</FormTitle>
                    <Form action={document.location.origin.toString()+"/request/add"} method="POST" className="row col-md-u justify-content-center">
                    <input type="hidden" name="_token" value={props.csrf_token} />
                        <div className="col-sm-12 my-1">
                            <label className="sr-only" for="label">Descrição</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                <div className="input-group-text bg-primary text-white">Descrição</div>
                                </div>
                                <TextArea required name="label" className="form-control" id="label" placeholder="Descrição" rows="3" ></TextArea>
                            </div>
                        </div>
                        <div className="form-group col-sm-12 my-1">
                            <label className="sr-only" for="animal">Selecione o animal:</label>
                            <div className="input-group">
                        <div className="input-group-prepend">
                                <div className="input-group-text bg-primary text-white">Animal</div>
                                </div>
                            <Select required name="animal" className="form-control" id="animals" aria-describedby="labelHelp">
                                {props.animals.map((animal) => (
                                    <option value={animal.id}>{animal.name} - {animal.specie} - {animal.breed}</option>
                                ))}
                            </Select>

                        </div>
                        </div>
                        <div className="col-sm-12 my-1">
                            <label className="sr-only" for="label">Novo animal</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                <a className="btn btn-primary" href={document.location.origin.toString()+"/animal/add"}>Novo Animal</a>
                                </div>
                            </div>
                        </div>
                        <div className="form-group col-sm-12 my-1">
                            <h2>EXAMES</h2>
                                {props.exams.map((exam) => (
                                    <>
                                        <h3 className="text-left">{exam.label}</h3>
                                    <div className="checkbox-div">
                                    <Input type="checkbox" name="exams[]" id={"exam"+exam.id} value={exam.id} />
                                    <label for={"exam"+exam.id}></label>
                                    </div>
                                    </>
                                ))}

                        </div>
                        <div className="col-12 text-right">
                        <button className="btn btn-success" type="submit">Cadastrar</button>
                        </div>
                        </Form>
                </Right>
                </>
    );
}

export default FormRequest;
const form = document.getElementById('formRequest');
if (form) {
    ReactDOM.render(<FormRequest csrf_token={csrf_token} exams={exams} animals={animals} />, form);
}
