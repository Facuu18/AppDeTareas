const {argv} = require('process')
const {lista,guardarTarea, filtrarPorEstado} = require('./funcionesDeTareas')
const acceso= argv[2]
if (acceso!=undefined){
    switch (acceso.toLowerCase()) {
        case 'listar':
            console.log("\nListado de tareas\n------------------");
            lista();
            break;
        case 'agregar':
            task={ titulo:argv[3],estado:"pendiente"};
            if(task.titulo==String(task.titulo)){
                console.log('\n¡Tu tarea fue agregada con éxito!\n---------------------------------');
                guardarTarea(task)
            }   else console.log("\n¡Debe agregar un texto!")
            break;
        case 'estado':
            estado= argv[3];
            console.log("----------------------------------------");
            if(estado==undefined){
                console.log("Debes ingresar el estado que deseas ver.\nRecuerda que los estados disponibles son: \n- Terminado \n- En progreso \n- Pendiente");
            }  else{
                estado = estado.toLowerCase()
                filtrarPorEstado(estado)}
            break;
        default:
            console.log('------------------------------------\nNo entiendo qué quieres hacer\nLas acciones disponibles son: \n- listar \n- agregar\n- estado\n------------------------------------');
            break;
    }
}else console.log('\n"¡Atención!"- Tienes que pasarme una acción\nLas acciones disponibles son: \n- listar \n- agregar\n- estado');



