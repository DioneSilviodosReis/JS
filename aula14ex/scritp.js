function contar(){
    var inicio = document.getElementsByName('nIncio')
    var fim = document.getElementsByName('nFim')
    var passo = document.getElementsByName('nPasso')
    var ini = Number(inicio.valeu)
    var f = Number(fim.valeu)
    var p = Number(passo.valeu)
    var res = document.getElementById('res')

    while(ini < 10){
        res.innerHTML = ` l ol o  `
        ini = ini + p
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
}