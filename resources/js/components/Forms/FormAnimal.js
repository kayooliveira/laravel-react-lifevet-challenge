import React from 'react';
import ReactDOM from 'react-dom';
import { Form, FormTitle, TextArea, Select, Input } from '../styled-components/form/Form';
import {Right} from '../styled-components/divs/GridAreas';

const FormAnimal = (props) => {
    return (
        <>
        <Right className="text-center row justify-content-center text-center text-white">
                <FormTitle className="text-primary uppercase">Novo Animal</FormTitle>
                    <Form action={document.location.origin.toString()+"/animal/add"} method="POST" className="row col-md-u justify-content-center">
                    <Input type="hidden" name="_token" value={props.token} />
                        <div className="col-sm-12 my-1">
                            <label className="sr-only" for="label">Identificação do Animal</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                <div className="input-group-text bg-primary text-white">Identificação</div>
                                </div>
                                <Input type="text" required name="label" className="form-control" id="label" placeholder="Ex: Cachorro da Maria" maxLength="25" ></Input>
                            </div>
                        </div>
                        <div className="col-sm-12 my-1">
                            <label className="sr-only" for="name">Nome do Animal</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                <div className="input-group-text bg-primary text-white">Nome</div>
                                </div>
                                <Input type="text" required name="name" className="form-control" id="name" placeholder="Ex: Pipoca" maxLength="25" ></Input>
                            </div>
                        </div>
                        <div className="form-group col-sm-12 my-1">
                            <label className="sr-only" for="specie">Espécie do animal:</label>
                            <div className="input-group">
                        <div className="input-group-prepend">
                                <div className="input-group-text bg-primary text-white">Espécie do animal:</div>
                                </div>
                                <Input type="text" required name="specie" className="form-control" id="specie" placeholder="Espécie do animal" maxLength="25"></Input>
                        </div>
                        </div>
                        <div className="form-group col-sm-12 my-1">
                            <label className="sr-only" for="breed">Raça do animal:</label>
                            <div className="input-group">
                        <div className="input-group-prepend">
                                <div className="input-group-text bg-primary text-white">Raça do animal:</div>
                                </div>
                                <Input type="text" required name="breed" className="form-control" id="breed" placeholder="Raça do animal" maxLength="25"></Input>
                        </div>
                        </div>
                        <div className="col-12 text-right">
                        <button className="btn btn-success" type="submit">Cadastrar</button>
                        </div>
                        </Form>
                </Right>
                </>
    );
}

export default FormAnimal;
const form = document.getElementById('formAnimals');
if (form) {
    ReactDOM.render(<FormAnimal token={csrf_token} />, form);
}
