const btnAgregar = document.getElementById('btnAgregar');

let baseDatos = [];

btnAgregar.addEventListener('click', e =>{
    function Persona(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    let nombreCapturar = document.getElementById('nombre').value;
    let apCapturar = document.getElementById('apellido').value;
    let edadCapturar = document.getElementById('edad').value;
    
    nuevaPersona = new Persona(nombreCapturar,apCapturar, edadCapturar);
    agregar();
});


function agregar(){
    baseDatos.push(nuevaPersona);
    
    document.getElementById('table').innerHTML += `<tbody>
                                                        <td>${nuevaPersona.nombre}</td>
                                                        <td>${nuevaPersona.apellido}</td>
                                                        <td>${nuevaPersona.edad}</td>
                                                    </tbody>`;
}