function contar() {
    var inicio = document.getElementsByName('nInicio')[0];
    var fim = document.getElementsByName('nFim')[0];
    var passo = document.getElementsByName('nPasso')[0];
    var ini = Number(inicio.value);
    var f = Number(fim.value);
    var p = Number(passo.value);
    var res = document.getElementById('res');


    while (ini < f) {
        res.innerHTML += ini + ' ';
        ini = ini + p;
    }
}
    

    /*if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
        
        }else{
            genero = 'Mulher'
        }
        res.style.textAling = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
*/
