const Etapa = (numero) => {
    let etapa = "";
    switch (true) {
        case numero <= 12:
            etapa = "Niño/a";
            break;
        case numero <= 18:
            etapa = "Adolescente";
            break;
        case numero <= 30:
            etapa = "Joven";
            break;
        case numero <= 64:
            etapa = "Adulto/a";
            break;
        case numero <= 100:
            etapa = "Jubilado/a";
            break;
        default:
            alert("No has introducido un valor adecuado.")
    }

    return etapa;
}