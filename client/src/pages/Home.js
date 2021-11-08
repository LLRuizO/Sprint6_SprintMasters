import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home(){
    return(
        <>
            <Menu/>
            <Footer/>
        </>
    );
}

export const Menu=()=>{
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <Navbar light expand="sm" style={{backgroundColor:'#074943',marginBottom:"50px"}}>
            <NavbarBrand href="/">SPRINTMASTERS</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar style={{backgroundColor:'#074943'}}>
                <NavItem>
                    <NavLink  className="text"  href="#">Usuarios</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/Ventas">Ventas</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Estado de Ventas</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/products">Productos</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/Productregistrer">Registro de productos</NavLink>
                </NavItem>
               
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                    <button type="button" class="btn btn-outline-light">Buscar</button>
                </form>
                <button type="button" class="btn btn-outline-light">Cerrar Sesión</button>
            </Nav>
            </Collapse>
        </Navbar>

    );
}

export const Footer=()=>{
    return(
        <section style={{paddingTop:"100px"}}>
            <footer class="text-center text-white" style={{backgroundColor: "#074943"}}>
                <div class="container p-4 pb-0">
                    <section class="">
                        <p class="d-flex justify-content-center align-items-center">
                            <span class="me-3" style={{backgroundColor: "#074943"}}>Contactanos</span>
                        </p>
                        <ul class="list-unstyled mb-0">
                            <li>
                                <a href="mailto:leidylorena9407@gmail.com" class="text-white">leidylorena9407@gmail.com</a>
                            </li>
                            <li>
                                <a href="mailto:wilington48@gmail.com" class="text-white">wilington48@gmail.com</a>
                            </li>
                            <li>
                                <a href="mailto:jamermartinez@hotmail.com" class="text-white">jamermartinez@hotmail.com</a>
                            </li>
                            <li>
                                <a href="mailto:luxajag@gmail.com" class="text-white">luxajag@gmail.com</a>
                            </li>
                            <li>
                                <a href="mailto:arf1993.11@gmail.com" class="text-white">arf1993.11@gmail.com</a>
                            </li>
                        </ul>
                    </section>
                </div>
                <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    © 2020 Copyright:
                    <a class="text-white">sprintmasters.com</a>
                </div>
            </footer>
        </section>
    
    )
} 

export default  Home;