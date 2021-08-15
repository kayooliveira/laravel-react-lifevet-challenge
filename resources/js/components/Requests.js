import React from 'react';
import ReactDOM from 'react-dom';
const Requests = (props) => {
    return (
        <>
            <div className="row justify-content-center">

                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Descrição</th>
                            <th scope="col">Animal</th>
                            <th scope="col">Exames</th>
                        </tr>
                    </thead>
                        <tbody>
                            {props.html}
                        </tbody>
                </table>

            </div>
        </>
     );
}

export default Requests;

const requestsDiv = document.getElementById('requests');

if(requestsDiv){
    ReactDOM.render(<Requests html={requestsDiv.children} exams={exams} requests={requests}></Requests>,requestsDiv)
}
