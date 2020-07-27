function botao( num ){
    var salvo = document.calc.visor.value;
    document.calc.visor.value = salvo + num;
}

function calcule(){

    resultado = eval(document.calc.visor.value);
    document.calc.visor.value = resultado;

}

