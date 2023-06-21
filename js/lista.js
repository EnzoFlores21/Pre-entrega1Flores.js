let seguir = true;

const personajes = () => {
    while (seguir) {
        let seleccion = prompt("Ingrese un numero para seleccionar un personaje");
        switch (seleccion) {
            case "1":
                console.log("Iron Man");
                caracteristicas("1")
                seguir = false;
                break;
            case "2":
                console.log("Hulk");
                caracteristicas("2")
                seguir = false;
                break;
            case "3":
                console.log("Thor");
                caracteristicas("3")
                seguir = false;
                break;
            case "4":
                console.log("Mujer Maravilla");
                caracteristicas("4")
                seguir = false;
                break;
            default:
                console.log("Seleccione un personaje correcto");
                seguir = true;
        }
    }
}

const caracteristicas = (personaje) =>{
    let elegirPersonaje = prompt("Ingrese el nombre del Personaje para mostrar habilidad");
    while (personaje == "1" || personaje == "2" || personaje == "3" || personaje == "4") {
        if (elegirPersonaje == "Iron Man") {
            console.log("Habilidad: Inteligencia");
            break;
        } else if (elegirPersonaje == "Hulk") {
            console.log("Habilidad: Fuerza");
            break;
        } else if (elegirPersonaje == "Thor") {
            console.log("Habilidad: Fuerza");
            break;
        } else if (elegirPersonaje == "Mujer Maravilla") {
            console.log("Habilidad: Velocidad");
            break;
        } else {
            console.log("Ingrese Personaje un correcto");
            break;
        }
    }
}

personajes();