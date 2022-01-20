/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/
const botonAceptar = document.querySelector("#boton-aceptar");

botonAceptar.onclick = function () {
    let numeroFamiliares = Number(
        document.querySelector("#numero-familia").value
    );
    for (i = 1; i <= numeroFamiliares; i++) {
        let labelFamilia = document.createElement("label");
        labelFamilia.innerText = "Familiar " + i;
        document.querySelector("body").appendChild(labelFamilia);
        let inputFamilia = document.createElement("input");
        inputFamilia.placeholder = "Ingrese la edad";
        inputFamilia.type = "number";
        inputFamilia.class = "edad";
        document.querySelector("body").appendChild(inputFamilia);
        edadesFamiliares = document.querySelectorAll(".edad");
    }
    let divison = document.createElement("div");
    document.querySelector("body").appendChild(divison);
    const botonCalcular = document.createElement("input");
    botonCalcular.value = "Calcular";
    botonCalcular.id = "boton-calcular";
    botonCalcular.type = "button";
    document.querySelector("body").appendChild(botonCalcular);
    document.querySelector("#boton-aceptar").disabled = true;
    let mayorEdad = document.createElement("input");
    mayorEdad.placeholder = "Mayor edad";
    mayorEdad.disabled = true;
    document.querySelector("body").appendChild(mayorEdad);
    let menorEdad = document.createElement("input");
    menorEdad.placeholder = "Menor edad";
    menorEdad.disabled = true;
    document.querySelector("body").appendChild(menorEdad);
    let promedioEdad = document.createElement("input");
    promedioEdad.placeholder = "Promedio edad";
    promedioEdad.disabled = true;
    document.querySelector("body").appendChild(promedioEdad);

    botonCalcular.onclick = function () {
        edadesFamiliares = document.querySelectorAll(".edad");
        for (i = 0; i < edadesFamiliares.length; i++) {
            mayorEdad.value = edadesFamiliares[i];
            menorEdad.value = edadesFamiliares[i];
            if (mayorEdad.value < edadesFaimiliares[i]) {
                mayorEdad.value = edadesFamiliares[i];
            }
            if (menorEdad.value > edadesFaimiliares[i]) {
                menorEdad.value = edadesFamiliares[i];
            }
        }
    };
};

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
