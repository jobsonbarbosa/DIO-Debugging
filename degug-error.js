function validaArray(arr, num) {
    try{
        if(!arr && num) throw new ReferenceError("Envie os parâmetros");

        if(typeof arr !== 'object') throw TypeError("Array precisa do tipo object");
    
        if(typeof num!== 'number') throw TypeError("Num precisa ser do tiipo number");
    
        if(arr.length !== num) throw new RangeError('Tamanho inválido');

        return arr;
    }
    catch(e){
        if(e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError!");
            console.log(e.menssage);
        }else if (e instanceof TypeError) {
            console.log("Este erro é um TypeError!");
            console.log(e.message);
        }else if (e instanceof RangeError) {
            console.log("Este erro é m RangeError!");
            console.log(e.message);
        }else {
            console.log(`Tipo de erro não esperado: ` + e);
        }
    }

}
