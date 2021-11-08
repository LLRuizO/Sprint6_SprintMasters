import React,{useState} from "react";
import {Menu,Footer} from '../pages/Home';
import { Button } from "reactstrap";
import {Ventas} from '../api/Ventas'

export default function LayoutVentas(props){

    return(
        <Formulario/>
    );
}

function Formulario(){
    /*estados iniciales del formualrio */
    const [form,setForm]=useState({})
    const [errors,setError]=useState({})

    /*actualiza estado */
    const updateForm=(value,field)=>{
        setForm({...form,[field]:value})
    }
    /*envío formulario */
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(validate()){
            Ventas(form).then(res=>{
                alert("Producto registrado")
                emptyProps()
            })
        }
    }
    

    const validate=()=>{
        let foundErrors={}
        let required="Este campo es requerido"
        if(!form["Nombre"]) foundErrors.Nombre=required
        //if(!form["IdProduct"]) foundErrors.IdProduct=required
        if(!form["EsProduct"]) foundErrors.EsProduct=required
        if(!form["Descripcion"]) foundErrors.Descripcion=required
        if(!form["City"]) foundErrors.City=required
        if(!form["ValorProduct"]) foundErrors.ValorProduct=required
        if(!form["Moneda"]) foundErrors.Moneda=required
        setError(foundErrors)
        return Object.keys(foundErrors).length==0
    }
    /*vaciar formulario*/
    const emptyProps=()=>{
        setForm({})
    }

    return (
        <React.Fragment>
            <Menu/>
            <div class="container">

            <center><h1>Registrar Ventas</h1></center>
          {/*   <button type="button" class="btn btn-primary me-md-2"> Listado de Ventas</button> */}

<br />
<br />
                <form onSubmit={handleSubmit} class="row g-3">
     
                    <div class="col-md-2">
                        <label for="inputIDVenta" class="form-label">ID de Venta</label>
                        <input type="text" class="form-control" 
                            placeholder="ID"
                          
                        />
                     
                    </div>

                    <div class="col-md-2">
                        <label for="inputCodigo" class="form-label">Codigo</label>
                        <input type="text" class="form-control" 
                            placeholder="#"
                       
                        />
                        
                    </div>

                    <div class="col-md-2">
                        <label for="inputValorUnitario" class="form-label">Valor Unitario</label>
                        <input type="text" class="form-control" 
                            placeholder="$"
                         
                        />
                      
                    </div>

                    <div class="col-md-2">
                        <label for="inputCantidad" class="form-label">Cantidad</label>
                        <input type="text" class="form-control" 
                            placeholder="Un"
                         
                        />
                     
                    </div>
                    
                    <div class="col-md-2">
                        <label for="inputValorTotal" class="form-label">Valor Total</label>
                        <input type="text" class="form-control" 
                            placeholder="$"
                          
                        />
                       
                    </div>
                    
                    <div class="col-md-2">
                        <label for="inputFechaVenta" class="form-label">Fecha de Venta</label>
                        <input type="date" class="form-control" 
                            placeholder="Nombre del Producto"
                        
                        />
                    
                    </div>
                    
                    
                    
                    

                   
                  {/*   <div class="col-md-6">
                        <label for="inputState" class="form-label">Estado del producto</label>
                        <select id="inputState" 
                            class="form-select"
                            name="EsProduct"
                            onChange={(e)=>updateForm(e.target.value,e.target.name)}
                            value={form.EsProduct?form.EsProduct:""}
                        >
                            <option selected></option>
                            <option>Disponible</option>
                            <option>No Disponible</option>
                        </select>
                        {errors.EsProduct?<p style={{color:"red"}}>{errors.EsProduct}</p>:""}
                    </div> */}

                   {/*  <div class="col-12">
                        <label for="inputDescripcion" class="form-label">Descripción</label>
                        <textarea class="form-control" id="inputDescripcion" rows="3"
                            name="Descripcion" 
                            value={form.Descripcion?form.Descripcion:""}
                            onChange={(e)=>updateForm(e.target.value,e.target.name)}
                        ></textarea>
                        {errors.Descripcion?<p style={{color:"red"}}>{errors.Descripcion}</p>:""}
                    </div> */}

                                    
                    <div class="col-md-6">
                    <span class="input-group-text">Nombre Clientes</span>
                    
                        <input type="text" class="form-control"  
                            placeholder="Nombres y Appellidos"/>
                    </div>
                    <div class="col-md-6">
                    <span class="input-group-text">Cedula</span>
                    
                        <input type="text" class="form-control"  
                            placeholder="CC"/>
                    </div>


                    



                    <br/><br/>
                    <br/><br/>
                    
                    <div class="col-md-6">
                        
                                <div class="col-md-12">
                                  <div class="form-floating">
                                    <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                                      <option selected>Select</option>
                                      <option value="1">Leidy Ruiz</option>
                                      <option value="2">Alejandro Ruiz</option>
                                      <option value="3">Luz Helena Camacho</option>
                                      <option value="4">Wilington Perenguez</option>
                                    </select>
                                    <label for="floatingSelectGrid">Vendedor</label>
                                  </div>
                                </div>
                                
                     </div>
      

<center>            <div class="col-12">
                         <button class="btn btn-success" type="submit">Aceptar  Venta</button>    
                         <button class="btn btn-danger" type="submit">Cancelar Venta</button>       
                    </div> </center>
                </form>
            </div>
            <Footer/>
        </React.Fragment>
    );
}