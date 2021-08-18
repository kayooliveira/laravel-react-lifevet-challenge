import React from 'react';
import ReactDOM from 'react-dom';
import { Form, FormTitle, TextArea, Select, Input } from "../styled-components/form/Form"
import {Right} from '../styled-components/divs/GridAreas';

const FormRequest = (props) => {
    return (
        <Right>
            <div className="text-center row justify-content-center text-center text-white">
                    <Form action={document.location.origin.toString()+"/request/add"} method="POST" className="row col-md-u justify-content-center">
                <FormTitle className="text-primary uppercase">Cadastro | Solicitação</FormTitle>
                    <Input type="hidden" name="_token" value={props.csrf_token} />
                        <div className="col-sm-12 my-1">
                            <label className="sr-only" for="label">Descrição</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                <div className="input-group-text bg-primary text-white">Descrição</div>
                                </div>
                                <TextArea required name="label" className="form-control" id="label" placeholder="Descrição" maxLength="50" rows="3" ></TextArea>
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
                                    <div class="checkbox-field">
                                        <h3 className="text-left">{exam.label}</h3>
                                    <div className="checkbox-div">
                                    <Input type="checkbox" name="exams[]" id={"exam"+exam.id} value={exam.id} />
                                    <label for={"exam"+exam.id}></label>
                                    </div>
                                    </div>
                                ))}

                        </div>
                        <div className="col-12 text-right">
                        <button className="btn btn-success" type="submit">Cadastrar</button>
                        </div>
                        </Form>
                        </div>
                </Right>
    );
}

export default FormRequest;
const form = document.getElementById('formRequests');
if (form) {
    ReactDOM.render(<FormRequest csrf_token={csrf_token} animals={animals} exams={exams}/>, form);
}
