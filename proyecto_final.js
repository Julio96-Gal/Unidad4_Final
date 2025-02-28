
    // Variables útiles
    // Precio base de la cotización (en Quetzales)
    var precio_base = 2000;

    // Valores de los recargos (en decimales que representan porcentajes)
    var edad_18 = 0.1;  // 10%
    var edad_25 = 0.2;  // 20%
    var edad_50 = 0.3;  // 30%

    var casado_18 = 0.1; // 10%
    var casado_25 = 0.2; // 20%
    var casado_50 = 0.3; // 30%

    var hijos_recargo = 0.2; // 20%

    // Variables para ir acumulando los recargos
    var recargo = 0;
    var recargo_total = 0;

    // Precio final (se calcula al final)
    var precio_final = 0;

    // Mensajes de alerta para ingresar datos
    var nombre = prompt("Ingrese su nombre, por favor:");
    var edad = prompt("¿Cuántos años tiene? Ingrese solamente números:");

//*******************************************************************************
    // Convertimos la edad a número
    var edad_numero = parseInt(edad);
  
    // Verificamos si es mayor o igual a 18
    if (edad_numero < 18) {
      alert("Lo sentimos, el asegurado debe ser mayor de edad. El formulario no aplica.");
      // Detenemos la ejecución para no hacer ningún cálculo
      throw new Error("El asegurado es menor de edad, no se realiza la cotización.");
    }


//*******************************************************************************
    // Si llega a este punto, quiere decir que es mayor o igual a 18 años.
    var casado = prompt("¿Está casado actualmente? (Responda 'si' o 'no'):");
    var edad_conyuge_numero = 0;
    
    // Si está casado/a, solicitamos la edad del cónyuge
    if (casado.toUpperCase() === "SI") {
      var edad_conyuge = prompt("¿Qué edad tiene su esposo/a?");
      edad_conyuge_numero = parseInt(edad_conyuge);
    }



    // Preguntamos si tiene hijos
    var hijos = prompt("¿Tiene hijos o hijas? (Responda 'si' o 'no'):");
    var cantidad_hijos = 0;




    // Si responde que sí, preguntamos cuántos hijos
    if (hijos.toUpperCase() === "SI") {
      cantidad_hijos = prompt("¿Cuántos hijos tiene?");
      
      
//*******************************************************************************
// 1. convierta la cantidad de hijos a numero
//*******************************************************************************
      
      
      cantidad_hijos = parseInt(cantidad_hijos);
    }



//Aquí debe calcular el recargo total basado en las respuestas ingresadas

    // ---------------------------------------------
    // 1. Recargo por la edad del asegurado
    // ---------------------------------------------
    if (edad_numero >= 18 && edad_numero < 25) {
      recargo = precio_base * edad_18;   // 10%
      recargo_total += recargo;
    } else if (edad_numero >= 25 && edad_numero < 50) {
      recargo = precio_base * edad_25;   // 20%
      recargo_total += recargo;
    } else if (edad_numero >= 50) {
      recargo = precio_base * edad_50;   // 30%
      recargo_total += recargo;
    }

    // ---------------------------------------------
    // 2. Recargo por la edad del cónyuge
    // ---------------------------------------------
    if (casado.toUpperCase() === "SI") {
      if (edad_conyuge_numero >= 18 && edad_conyuge_numero < 25) {
        recargo = precio_base * casado_18; // 10%
        recargo_total += recargo;
      } else if (edad_conyuge_numero >= 25 && edad_conyuge_numero < 50) {
        recargo = precio_base * casado_25; // 20%
        recargo_total += recargo;
      } else if (edad_conyuge_numero >= 50) {
        recargo = precio_base * casado_50; // 30%
        recargo_total += recargo;
      }
    }

    // ---------------------------------------------
    // 3. Recargo por la cantidad de hijos
    // ---------------------------------------------


    if (hijos.toUpperCase() === "SI" && cantidad_hijos > 0) {
      recargo = cantidad_hijos * (precio_base * hijos_recargo); // 20% por cada hijo
      recargo_total += recargo;
    }

    // ---------------------------------------------
    // Cálculo final
    // ---------------------------------------------
    precio_final = precio_base + recargo_total;

    // ---------------------------------------------
    // Mensajes de salida
    // ---------------------------------------------
    alert("Para el asegurado(a): " + nombre);
    alert("El recargo total será de: Q." + recargo_total.toFixed(2));
    alert("El precio final de la cotización será de: Q." + precio_final.toFixed(2))


