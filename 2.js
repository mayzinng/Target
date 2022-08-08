function calc(number){
    let fibo = []; //um array que vai guardar esses valores
      
       fibo[0] = 0;
       fibo[1] = 1; //definição dos valores que estes indíces guardarão
   
        for (let i = 2; i < number; i++) {
         fibo[i] = fibo[i - 2] + fibo[i - 1];
         
       if(fibo.indexOf(number) == number ) {
               console.log('Este número existe na sequência de fibonacci')
            } else {
               console.log('Este número não existe na sequência')
            }
         //calculará a soma a partir da subtração dos idíces (que dará sempre os dois útlimos índices)
        }
       return fibo;
       
      
   }
   let fiboCalc = calc(20);
   console.log(fiboCalc);