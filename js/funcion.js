/**
 * Tabla de bingo
 * autor: Diego De Jesus Arias Gonzalez
 * fecha: 18 de julio de 2024
 */

document.addEventListener("DOMContentLoaded", function(){
  let bingo = [];
  let iteracion1;
  let iteracion2;
  let contador = 0;
  let tabla;
  let interno = [];

  for (iteracion1 = 0; iteracion1 < 5; iteracion1++) {
    interno = [];
    for (iteracion2 = 0; iteracion2 < 5; iteracion2++) {
      contador = contador + 1;
      tabla = contador * 2;
      interno.push(tabla);
    }
    bingo.push(interno);
  }

  let printBingo = '';
  printBingo += '<div class="col-3">'
  printBingo += '<table class="table table-bordered table-striped">'
  printBingo += '<thead>'
  printBingo += '<tr>'
  printBingo += '<th scope="col">B</th>'
  printBingo += '<th scope="col">I</th>'
  printBingo += '<th scope="col">N</th>'
  printBingo += '<th scope="col">G</th>'
  printBingo += '<th scope="col">O</th>'
  printBingo += '</tr>'
  printBingo += '</thead>'
  printBingo += '<tbody>'

  for (iteracion1 = 0; iteracion1 < bingo.length; iteracion1++) {
    printBingo += '<tr>';
    for (iteracion2 = 0; iteracion2 < bingo[iteracion1].length; iteracion2++) {
      printBingo += '<td>';
      printBingo += bingo[iteracion1][iteracion2];
      printBingo += '</td>'
    }
    printBingo += '</tr>'
  }
  printBingo += '</tbody>'
  printBingo += '</table>'
  printBingo += '</div>'
  
  document.getElementById('bingo-1').innerHTML = printBingo;



  //Primer carton tachando la columna B
  printBingo += '<div class="col-3">'
  printBingo += '<table class="table table-bordered table-striped">'
  printBingo += '<thead>'
  printBingo += '<tr>'
  printBingo += '<th scope="col">B</th>'
  printBingo += '<th scope="col">I</th>'
  printBingo += '<th scope="col">N</th>'
  printBingo += '<th scope="col">G</th>'
  printBingo += '<th scope="col">O</th>'
  printBingo += '</tr>'
  printBingo += '</thead>'
  printBingo += '<tbody>'

  for (iteracion1 = 0; iteracion1 < bingo.length; iteracion1++) {
    printBingo += '<tr>';
    for (iteracion2 = 0; iteracion2 < bingo[iteracion1].length; iteracion2++) {
      if (iteracion2 === 0) {
        printBingo += '<td class="text-danger">';
      } else {
        printBingo += '<td>';
      }
      printBingo += bingo[iteracion1][iteracion2];
      printBingo += '</td>'
    }
    printBingo += '</tr>'
  }
  printBingo += '</tbody>'
  printBingo += '</table>'
  printBingo += '</div>'
  
  document.getElementById('bingo-1').innerHTML = printBingo;


   //Segundo carton tachando la columna I
   printBingo += '<div class="col-3">'
   printBingo += '<table class="table table-bordered table-striped">'
   printBingo += '<thead>'
   printBingo += '<tr>'
   printBingo += '<th scope="col">B</th>'
   printBingo += '<th scope="col">I</th>'
   printBingo += '<th scope="col">N</th>'
   printBingo += '<th scope="col">G</th>'
   printBingo += '<th scope="col">O</th>'
   printBingo += '</tr>'
   printBingo += '</thead>'
   printBingo += '<tbody>'
 
   for (iteracion1 = 0; iteracion1 < bingo.length; iteracion1++) {
     printBingo += '<tr>';
     for (iteracion2 = 0; iteracion2 < bingo[iteracion1].length; iteracion2++) {
       if (iteracion2 === 1) {
         printBingo += '<td class="text-danger">';
       } else {
         printBingo += '<td>';
       }
       printBingo += bingo[iteracion1][iteracion2];
       printBingo += '</td>'
     }
     printBingo += '</tr>'
   }
   printBingo += '</tbody>'
   printBingo += '</table>'
   printBingo += '</div>'
   
   document.getElementById('bingo-1').innerHTML = printBingo;


   //Tercero carton tachando la columna N
   printBingo += '<div class="col-3">'
   printBingo += '<table class="table table-bordered table-striped">'
   printBingo += '<thead>'
   printBingo += '<tr>'
   printBingo += '<th scope="col">B</th>'
   printBingo += '<th scope="col">I</th>'
   printBingo += '<th scope="col">N</th>'
   printBingo += '<th scope="col">G</th>'
   printBingo += '<th scope="col">O</th>'
   printBingo += '</tr>'
   printBingo += '</thead>'
   printBingo += '<tbody>'
 
   for (iteracion1 = 0; iteracion1 < bingo.length; iteracion1++) {
     printBingo += '<tr>';
     for (iteracion2 = 0; iteracion2 < bingo[iteracion1].length; iteracion2++) {
       if (iteracion2 === 2) {
         printBingo += '<td class="text-danger">';
       } else {
         printBingo += '<td>';
       }
       printBingo += bingo[iteracion1][iteracion2];
       printBingo += '</td>'
     }
     printBingo += '</tr>'
   }
   printBingo += '</tbody>'
   printBingo += '</table>'
   printBingo += '</div>'
   
   document.getElementById('bingo-1').innerHTML = printBingo;


   //Cuarto carton tachando la columna G
   printBingo += '<div class="col-3">'
   printBingo += '<table class="table table-bordered table-striped">'
   printBingo += '<thead>'
   printBingo += '<tr>'
   printBingo += '<th scope="col">B</th>'
   printBingo += '<th scope="col">I</th>'
   printBingo += '<th scope="col">N</th>'
   printBingo += '<th scope="col">G</th>'
   printBingo += '<th scope="col">O</th>'
   printBingo += '</tr>'
   printBingo += '</thead>'
   printBingo += '<tbody>'
 
   for (iteracion1 = 0; iteracion1 < bingo.length; iteracion1++) {
     printBingo += '<tr>';
     for (iteracion2 = 0; iteracion2 < bingo[iteracion1].length; iteracion2++) {
       if (iteracion2 === 3) {
         printBingo += '<td class="text-danger">';
       } else {
         printBingo += '<td>';
       }
       printBingo += bingo[iteracion1][iteracion2];
       printBingo += '</td>'
     }
     printBingo += '</tr>'
   }
   printBingo += '</tbody>'
   printBingo += '</table>'
   printBingo += '</div>'
   
   document.getElementById('bingo-1').innerHTML = printBingo;


   //Quinto carton tachando la columna O
   printBingo += '<div class="col-3">'
   printBingo += '<table class="table table-bordered table-striped">'
   printBingo += '<thead>'
   printBingo += '<tr>'
   printBingo += '<th scope="col">B</th>'
   printBingo += '<th scope="col">I</th>'
   printBingo += '<th scope="col">N</th>'
   printBingo += '<th scope="col">G</th>'
   printBingo += '<th scope="col">O</th>'
   printBingo += '</tr>'
   printBingo += '</thead>'
   printBingo += '<tbody>'
 
   for (iteracion1 = 0; iteracion1 < bingo.length; iteracion1++) {
     printBingo += '<tr>';
     for (iteracion2 = 0; iteracion2 < bingo[iteracion1].length; iteracion2++) {
       if (iteracion2 === 4) {
         printBingo += '<td class="text-danger">';
       } else {
         printBingo += '<td>';
       }
       printBingo += bingo[iteracion1][iteracion2];
       printBingo += '</td>'
     }
     printBingo += '</tr>'
   }
   printBingo += '</tbody>'
   printBingo += '</table>'
   printBingo += '</div>'
   
   document.getElementById('bingo-1').innerHTML = printBingo;



   //Carton con 3 X
   printBingo += '<div class="col-3">'
   printBingo += '<table class="table table-bordered table-striped">'
   printBingo += '<thead>'
   printBingo += '<tr>'
   printBingo += '<th scope="col">B</th>'
   printBingo += '<th scope="col">I</th>'
   printBingo += '<th scope="col">N</th>'
   printBingo += '<th scope="col">G</th>'
   printBingo += '<th scope="col">O</th>'
   printBingo += '</tr>'
   printBingo += '</thead>'
   printBingo += '<tbody>'
 
   for (iteracion1 = 0; iteracion1 < bingo.length; iteracion1++) {
    printBingo += '<tr>';
    for (iteracion2 = 0; iteracion2 < bingo[iteracion1].length; iteracion2++) {
      if (iteracion1 === 0 || iteracion1 === 1 || iteracion1 === 2 || iteracion1 === 3 || iteracion1 === 4) {
        if (bingo[iteracion1][iteracion2] !== 4 && bingo[iteracion1][iteracion2] !== 8 && bingo[iteracion1][iteracion2] !== 12 && bingo[iteracion1][iteracion2] !== 16
          && bingo[iteracion1][iteracion2] !== 20 && bingo[iteracion1][iteracion2] !== 24 && bingo[iteracion1][iteracion2] !== 28 && bingo[iteracion1][iteracion2] !== 32
          && bingo[iteracion1][iteracion2] !== 36 && bingo[iteracion1][iteracion2] !== 38 && bingo[iteracion1][iteracion2] !== 40 && bingo[iteracion1][iteracion2] !== 44
          && bingo[iteracion1][iteracion2] !== 48 && bingo[iteracion1][iteracion2] !== 50
        ) {
          printBingo += '<td class="text-danger">';
        } else {
          printBingo += '<td>';
        }
      } else {
        printBingo += '<td>';
      }
      printBingo += bingo[iteracion1][iteracion2];
      printBingo += '</td>'
    }
    printBingo += '</tr>'
  }
  printBingo += '</tbody>'
  printBingo += '</table>'
  printBingo += '</div>'
  
  document.getElementById('bingo-1').innerHTML = printBingo;


  //Carton con la X grande
  printBingo += '<div class="col-3">'
  printBingo += '<table class="table table-bordered table-striped">'
  printBingo += '<thead>'
  printBingo += '<tr>'
  printBingo += '<th scope="col">B</th>'
  printBingo += '<th scope="col">I</th>'
  printBingo += '<th scope="col">N</th>'
  printBingo += '<th scope="col">G</th>'
  printBingo += '<th scope="col">O</th>'
  printBingo += '</tr>'
  printBingo += '</thead>'
  printBingo += '<tbody>'

  for (iteracion1 = 0; iteracion1 < bingo.length; iteracion1++) {
   printBingo += '<tr>';
   for (iteracion2 = 0; iteracion2 < bingo[iteracion1].length; iteracion2++) {
     if (iteracion1 === 0 || iteracion1 === 1 || iteracion1 === 2 || iteracion1 === 3 || iteracion1 === 4) {
       if (bingo[iteracion1][iteracion2] !== 4 && bingo[iteracion1][iteracion2] !== 6 && bingo[iteracion1][iteracion2] !== 8 && bingo[iteracion1][iteracion2] !== 12
         && bingo[iteracion1][iteracion2] !== 16 && bingo[iteracion1][iteracion2] !== 20 && bingo[iteracion1][iteracion2] !== 22 && bingo[iteracion1][iteracion2] !== 24
         && bingo[iteracion1][iteracion2] !== 28 && bingo[iteracion1][iteracion2] !== 30 && bingo[iteracion1][iteracion2] !== 32 && bingo[iteracion1][iteracion2] !== 36
         && bingo[iteracion1][iteracion2] !== 40 && bingo[iteracion1][iteracion2] !== 44 && bingo[iteracion1][iteracion2] !== 46 && bingo[iteracion1][iteracion2] !== 48
       ) {
         printBingo += '<td class="text-danger">';
       } else {
         printBingo += '<td>';
       }
     } else {
       printBingo += '<td>';
     }
     printBingo += bingo[iteracion1][iteracion2];
     printBingo += '</td>'
   }
   printBingo += '</tr>'
 }
 printBingo += '</tbody>'
 printBingo += '</table>'
 printBingo += '</div>'
 
 document.getElementById('bingo-1').innerHTML = printBingo;
});