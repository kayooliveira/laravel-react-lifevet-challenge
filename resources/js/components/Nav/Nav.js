import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const SidebarBrand = styled.img`
margin-top:10px;
padding:12px;
width: 100%;
`

const Sidebar = styled.nav`
margin:0;
grid-area:left;
width:100%;
text-align: center;
background-color: #252525;
min-height:100vh;
height:100%;
overflow:hidden;
`
const SidebarList = styled.ul`
margin:0;
width:100%;
padding:0;
list-style: none;
`

const SidebarListItemLink = styled.a`
text-transform: uppercase;
text-align: center;
transition: .2s;
display: block;
width: 100%;
margin: 10px 0 10px 0;
padding:30px 0 30px 0;
border-bottom: 1px solid;
border-color:#2b93ec;
color: white;

&:hover{
    position: relative;
    transform:scale(1.05);
    background-color: rgb(10, 8, 30);
    color: white;
    text-decoration: none;
    font-weight: bold;
}
`

const Version = styled.div`
right:20px;

&>p{
    text-align:right;
    color: #2b93ec
}
`

const  Nav = () => {
    return (
        <>
            <Sidebar className="sidebar">
                <SidebarBrand src={window.location.origin.toString()+"/img/teste.png"} alt="logo" title="Logo" className="sidebar-brand"/>
                <SidebarList className="sidebar-list">
                    <li className="sidebar-list-item"><SidebarListItemLink title="Início" className="sidebar-list-item-link" href={window.location.origin.toString()+"/request/all"}> Solicitações  </SidebarListItemLink></li>
                    <li className="sidebar-list-item"><SidebarListItemLink title="Cadastrar Animal" className="sidebar-list-item-link" href={window.location.origin.toString()+"/animal/add"}> Cadastrar animal </SidebarListItemLink></li>
                    <li className="sidebar-list-item"><SidebarListItemLink title="Cadastrar Solicitação" className="sidebar-list-item-link" href={window.location.origin.toString()+"/request/add"}> Cadastrar Solicitação </SidebarListItemLink></li>
                </SidebarList>
                <Version className="version">
                    <p>V. 13.0821-1533 </p>
                </Version>
            </Sidebar>
        </>

    );
}

export default Nav;

const div = document.getElementById('nav');
if (div) {
    ReactDOM.render(<Nav />, div);
}
