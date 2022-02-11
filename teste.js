// Desenvolva um algoritmo que conte qual o maior número de vezes que uma letra se repete em cada nome.


function contaPalavras(){
    const nomes = [
        "Anakin Skywalker",
        "Obiwan Kenobi",
        "Dart Vader",
        "Mandalorian",
      ];

    
        return nomes.map(nome => {

        const map = new Map();
        const letras = nome.toUpperCase().split("");


        for(const letra of letras){
            
            if(map.has(letra)){
            
        
            map.set(letra, map.get(letra) + 1)

            }else{

            map.set(letra, 1)

            }    
            
        }  
        let maior = 0
        for(const contador of map.values()) {
            if(contador > maior){
                maior = contador
            }
        }

        return maior;
    })  
}

 console.log(contaPalavras());
 