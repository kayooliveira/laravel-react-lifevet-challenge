import React from 'react';
import ReactDOM from 'react-dom';
import Table from '../styled-components/tables/Table';
import {Right} from '../styled-components/divs/GridAreas';

const Requests = (props) => {
    return (
        <Right>
            <div className="container row justify-content-center">
                <h1 className="text-white text-uppercase ">Últimas Solicitações</h1>
                <div className="container">
                    <Table className="table table-primary table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Descrição</th>
                            <th scope="col">Nome do animal</th>
                            <th scope="col">Especie do animal</th>
                            <th scope="col">Raça do animal</th>
                            <th scope="col">Exames requeridos</th>
                        </tr>
                    </thead>
                    <tbody>
                    {props.requests.map((request) =>(
                        <tr>
                            <td scope="row">{request.id}</td>
                            <td>{request.label}</td>
                            <td>{request.animalName}</td>
                            <td>{request.animalSpecie}</td>
                            <td>{request.animalBreed}</td>
                            <td>{request.exams.map((exam) =>(
                               " - "+exam+" - "
                            ))}</td>
                        </tr>
                    ))}
                    </tbody>
                    </Table>
                </div>
            </div>
        </Right>
     );
}

export default Requests;

const div = document.getElementById('requests');
if(div){
    ReactDOM.render(<Requests requests={requests}/>,div)
}
