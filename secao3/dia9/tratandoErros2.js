try{
    
    // É executada quando não há erros
} catch(error){
    //  É executada quando há erros
} finally{
    //  Sempre é executado.
}

function mostraHora(data){
if(data && !(data instanceof Date)){ // Se nao é uma instancia da funcao construtora Date()
    // e não foi enviada o valor de data
throw new TypeError('Não é do tipo Date()');
} 

if(!data){
    data = new Date(); // se apenas nao foi enviada  a data ele cria uma instancia nova
    //  e retorna ao final o horário.
}
return data.toLocaleTimeString('pt-BR')
}
try{console.log(mostraHora());} // caso tivesse por exemplo '1' dentro de mostra hora, o erro seria mostrado
catch(error){console.log(error);}
finally{console.log('Tenha um bom dia.');}