const fs= require('fs');
const tareas= require('./app-tareas/tareas.json');
const escribirJSON= (newTask) => fs.writeFileSync('./app-tareas/tareas.json',JSON.stringify(newTask,null,4),'utf-8')

module.exports = {lista: () => {tareas.forEach((tarea,i)=>{console.log(`${i+1}. ${tarea.titulo} ---> ${tarea.estado}`);
        });
    },
    guardarTarea: (task) => {
    tareas.push(task);
    escribirJSON(tareas);
    return console.log(`${task.titulo} - ${task.estado}`);    
    },
    filtrarPorEstado: (estado) => {
        if (estado=="terminado"||estado=="pendiente"||estado=="en progreso"){
        let leerPorEstado= tareas.filter(filtrar => filtrar.estado.toLowerCase()===estado);
        (leerPorEstado[0] === undefined)?console.log(`No tienes tareas en estado "${estado}"\n`):
        leerPorEstado.forEach((tarea,i) => console.log(`${i+1}. ${tarea.titulo} ---> ${tarea.estado}.`));
        }
        else console.log(`¡No existe el estado "${estado}"!\nRecuerda que los estados disponibles son: \n- Terminado \n- En progreso \n- Pendiente`)
    }
}
