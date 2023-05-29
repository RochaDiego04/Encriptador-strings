
function verificarTexto() {
    let texto = document.querySelector('.ingresarTexto__texto').value;
    if(/[A-ZÁÉÍÓÚáéíóú]/.test(texto)) {
        alert("El texto contiene mayúsculas o acentos.");
        return false; // interrumpe la ejecución de la función
    }
}

function encriptarTexto() {
    if(verificarTexto() == false){
        return;
    }

    let texto = document.querySelector('.ingresarTexto__texto').value;
    /* Encriptar texto */
    /* /g es una expresion regular para realizar una busqueda global*/
    let textoEncriptado = texto.replace(/e/g, 'enter');
    textoEncriptado = textoEncriptado.replace(/i/g, 'ime');
    textoEncriptado = textoEncriptado.replace(/a/g, 'ai');
    textoEncriptado = textoEncriptado.replace(/o/g, 'ober');
    textoEncriptado = textoEncriptado.replace(/u/g, 'ufat');

    document.querySelector(".resultadoTexto__texto").value = textoEncriptado;
}

function desencriptarTexto() {
    if(verificarTexto() == false){
        return;
    }

    let texto = document.querySelector('.ingresarTexto__texto').value;
    /* Encriptar texto */
    let textoDesencriptado = texto.replace(/enter/g, 'e');
    textoDesencriptado = textoDesencriptado.replace(/ime/g, 'i');
    textoDesencriptado = textoDesencriptado.replace(/ai/g, 'a');
    textoDesencriptado = textoDesencriptado.replace(/ober/g, 'o');
    textoDesencriptado = textoDesencriptado.replace(/ufat/g, 'u');

    document.querySelector(".resultadoTexto__texto").value = textoDesencriptado;
}


function copiarTexto() {

    let copiaTexto = document.querySelector(".resultadoTexto__texto");
  
    copiaTexto.select();
    copiaTexto.setSelectionRange(0, 99999); // celulares
  
    navigator.clipboard.writeText(copiaTexto.value);
  
    const loadingDiv = document.querySelector(".loading");
    loadingDiv.style.display = "block"; // Mostrar el div de loading

    setTimeout(() => {
        loadingDiv.style.display = "none"; // Ocultar el div de loading después de 1 segundo
    }, 500);
  }


  