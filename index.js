function encriptar() {
    let texto = document.getElementById("texto").value;
    //let tituloMensaje = document.getElementById("titulo-mensaje");
    //let parrafo = document.getElementById("parrafo");
    //let muñeco = document.getElementById("muñeco");
  
    let textoCifrado = texto
      .replace(/a/gi, "lm")
      .replace(/e/gi, "ct")
      .replace(/i/gi, "xh")
      .replace(/o/gi, "zp")
      .replace(/u/gi, "wr");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      Mensaje.textContent = "Texto encriptado con éxito";
      parrafo.textContent = "";
      imagenOne.src = "./imagenes/encriptado.jpeg";
    } else {
      imagenOne.src = "./imagenes/Muñeco.jpeg";
      Mensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("WARNING: ","Debes ingresar un texto");
    }
  }
  
  function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
  
    let textoCifrado = texto
      .replace(/lm/gi, "a")
      .replace(/ct/gi, "e")
      .replace(/xh/gi, "i")
      .replace(/zp/gi, "o")
      .replace(/wr/gi, "u");
    
      if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        Mensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        imagenOne.src = "./imagenes/desencriptador.jpeg";
      } else {
        imagenOne.src = "./imagenes/Muñeco.jpeg";
        Mensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("WARNING: ","Debes ingresar un texto");
      }
  }