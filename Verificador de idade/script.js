function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if  (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente! ')
    } else {
        var fsex = document.getElementsByName( 'radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >=0 && idade <10) {
                //Criança
                img.setAttribute('src', './imagens/bebe-menino.jpg')
            } else if (idade <25) {
                //Jovem
                img.setAttribute('src', './imagens/jovem-masc.jpg')
            } else if (idade <50) {
                //Adulto
                img.setAttribute('src', './imagens/homem-adulto.jpg')
            } else {
                // Idoso
                img.setAttribute('src', './imagens/idoso-masc.jpg')
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >=0 && idade <10) {
                //Criança
                img.setAttribute('src', './imagens/bebe-menina.jpg')
            } else if (idade <25) {
                //Jovem
                img.setAttribute('src', './imagens/jovem-femi.jpg')
            } else if (idade <50) {
                //Adulto
                 img.setAttribute('src', './imagens/mulher-adulta.jpg')
            } else {
                // Idoso
                 img.setAttribute('src', './imagens/idosa-femi.jpg')
            }
        }
        res.style.textAling = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos. `
        res.appendChild(img)
    }
}