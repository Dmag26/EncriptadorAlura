const textInput = document.querySelector(".text-input");
const textOutput = document.querySelector(".text-output");
const noMessageInfo = document.querySelector(".noMessageInfo");

function btnEncriptar() {
    const textoEncriptado = encriptar(textInput.value);
    textOutput.value = textoEncriptado;
    textOutput.style.backgroundImage = "none";
    noMessageInfo.style.visibility = "hidden";
}

function encriptar(stringEncriptada) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function btnBorrar() {
    textInput.value = "";
    textOutput.value = "";
    textOutput.style.backgroundImage = "";
    noMessageInfo.style.visibility = "visible";
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textInput.value);
    textOutput.value = textoDesencriptado;
    textOutput.style.backgroundImage = "none";
    noMessageInfo.style.visibility = "hidden";
}

function desencriptar(stringDesencriptada) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}

function btnCopiar() {
    const element = document.querySelector('#text-output-id');
    element.select();
    element.setSelectionRange(0, 99999);
    document.execCommand('copy');
}