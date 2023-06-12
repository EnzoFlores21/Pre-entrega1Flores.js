function marca(entrada){
    return entrada = 'Marvel';
}

let entrada =  prompt("Selecciona un Personaje");
while (entrada != 'ESC') {
    switch (entrada) {
        case "1":
            alert("Iron Man");
            break;
        case "2":
            alert("Hulk");
            break;
        case "3":
            alert("Mujer Maravilla");
            break;
        case "4":
            alert("Spiderman");
            break;
        default:
            alert("Elige entre 4 personajes");
            break;
    }
    alert(marca(entrada));
    entrada = prompt("Selecciona un nuevo personaje");
}
