import React from "react";

export default function register (){

    return(
        <div class = "container">
            <div class ="login-container">
                <div class = "register">
                    <h2>Registrarse</h2>
                    <form action="">
                        <input type="text" placeholder="Nombre completo" class ="nombre"></input>
                        <input type="text" placeholder="Correo electronico" class="correo"></input>
                        <input type="password" placeholder="Contraseña" class="pass"></input>
                        <input type="password" placeholder="Confirme contraseña" class="repass"></input>
                        <input type="submit" class="submit" value ="Registrarse"></input>
                    </form>
                </div>
                <div class="login">
                    <h2>Iniciar sesión</h2>

                    <form action="">
                        <div class="form-group">
                            <div class="w-100">
                                <label for="username" class="sr-only">
                                        Correo electronico
                                </label>
                                <input type="text" name="username"  class="form-control"/>
                            </div>
                        </div>
                        <div class="form-group mb-1">
                            <div class="w-101">
                                <label for="password" class="sr-only">
                                    Contraseña
                                </label>
                                <input type="password" name="password"  class="form-control"/>
                            </div>
                        </div>
                        <div class="dos">
                            <a href="  ">
                                ¿Olvido su Contraseña?
                            </a>
                        </div>
                        <input class="submi" type="button" value="Iniciar sesión"/>
                    </form>                   
                </div>       
            </div>

        </div>


    )
}