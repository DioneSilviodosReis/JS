function tabuada() {
    var numero = document.getElementById('numero');
    var espaco = document.getElementById('espaco');

    if(numero.value.length == 0)
    {
        window.alert('Por favor digite um numero!')
    }else{
        var numero = Number(numero.value);
        espaco.innerHTML = ''
        for(var i=0;i<10;i++){
            var item = document.createElement('option')
            item.text = ` ${numero} x ${i} = ${i*numero}`
            item.value = `tab${i}`
            espaco.appendChild(item)
        }
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
