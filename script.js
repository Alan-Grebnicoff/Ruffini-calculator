let input = document.getElementById("input")
let boton = document.getElementById("boton")

function tocarBoton () {
let polinomio = input.value
console.log(polinomio)
let monomios = polinomio.split(/(?=[+-])/)
console.log(monomios)
let gradosycositas = []
monomios.forEach(monomio => {
    let partes = monomio.split("^")
    if (partes.length===2) {
        let partes2= partes[0].split("x")
        gradosycositas.push(
            {coeficiente: partes2[0], grado: partes[1]}
        )
    }
    else if (partes.length===1) {
    gradosycositas.push({coeficiente: partes[0], grado: "0"})
    }
});
console.log(gradosycositas)
}

boton.addEventListener("click", tocarBoton)