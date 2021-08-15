import React from 'react';
import ReactDOM from 'react-dom';
import Input from './Input';
import Form from './Form';
import styled from 'styled-components';

function FormAnimal() {
    return (
            <div className="row justify-content-center">
                    <Form action="animal/add" method="PUT" className="row col-md-u justify-content-center">
                        <div className="form-group row">
                        <div class="col-sm-10">
                            <label for="label">
                                <p>Identificação:</p>
                            </label>
                                <Input className="form-control" aria-describedby="labelHelp" placeholder="Cachorro da cliente Maria" type="text" id="label" name="label" />
                                <small id="labelHelp" className="form-text text-muted">Identificação do animal: Ex: Cachorro da cliente Maria</small>
                        </div>
                        </div>
                        <div className="form-group col-6">
                            <label for="name">
                                <p>Nome:</p>
                            </label>
                                <Input className="form-control" aria-describedby="labelHelp" placeholder="Pipoca" type="text" id="name" name="name" />
                                <small id="labelHelp" className="form-text text-muted">Nome do animal</small>
                        </div>
                        <div className="form-group col-4">
                            <label for="specie">
                                <p>Espécie:</p>
                            </label>
                                <Input className="form-control" aria-describedby="labelHelp" placeholder="Pipoca" type="text" id="specie" name="specie" />
                                <small id="labelHelp" className="form-text text-muted">Espécie do animal</small>
                        </div>
                        <div className="form-group col-4">
                            <label for="breed">
                                <p>Raça:</p>
                            </label>
                                <Input className="form-control" aria-describedby="labelHelp" placeholder="Pipoca" type="text" id="breed" name="breed" />
                                <small id="labelHelp" className="form-text text-muted">Raça do animal</small>
                        </div>
                        <buttonDiv>
                        <button type="submit">Cadastrar</button>
                        <a className="button">Voltar</a>
                        </buttonDiv>
                        </Form>
                </div>
    );
}

export default FormAnimal;

if (document.getElementById('formAnimal')) {
    ReactDOM.render(<FormAnimal />, document.getElementById('formAnimal'));
}
