//Crie um arquivo adicione uma variável inteira com qualquer valor. 
//Calcule o fatorial deste valor utilizando o for e imprima o resultado no terminal.

function fatorial(valor){
    let contador = 1;
  
          for(let i = valor; i > 1; i--){
        contador *= i;
        console.log (contador);
      } 
  }
  fatorial(5);