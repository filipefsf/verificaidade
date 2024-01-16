function verificar(){
    var nascimento = window.document.getElementById('txtyear')
    var opcoesSexo = document.getElementsByName('txtsex')
    var resultado = window.document.getElementById('result')
    var imagem = window.document.getElementById('image')

    //Tratamento de exceções:
    if (nascimento.value == "") {
        alert('Por favor, digite um ano de nascimento!')
        return
    } else if ((opcoesSexo[0].checked == false) && (opcoesSexo[1].checked == false)) {
        alert ('Por favor, selecione um sexo para continuar!')
        return
    }
    Number.parseInt(nascimento.value)
    if(nascimento.value < 1904 || nascimento.value > 2024) {
        alert('Por favor, revise o ano de nascimento! \nSelecione um ano entre 1904 e 2024!')
        nascimento.value = " "
        return
    }
    //--------------------------------------------------------------------
    var idade = 2024 - (nascimento.value)

    if (idade < 3){
        if (opcoesSexo[0].checked){
            resultado.innerHTML = `Detectamos um bebê menino de <strong>${idade}</strong> anos de idade.`
            imagem.src = 'bebehomem.png'
            document.body.style.background = '#f4f4f4'
            
        }
        else {
            resultado.innerHTML = `Detectamos uma bebê menina de <strong>${idade}</strong> anos de idade.`
            imagem.src = 'bebemulher.png'
            document.body.style.background = '#f6a0b2'
        }
        return
    }
    
    if (idade < 11){
        if (opcoesSexo[0].checked) {
            resultado.innerHTML = `Detectamos um menino de <strong>${idade}</strong> anos de idade.`
            imagem.src = 'criancamenino.png'
            document.body.style.background = '#264450'
        }
        else {
            resultado.innerHTML = `Detectamos uma menina de <strong>${idade}</strong> anos de idade.`
            imagem.src = 'criancamenina.png'
            document.body.style.background = '#877361'
        }
        return
    }

    if (idade < 16){
        if (opcoesSexo[0].checked) {
            resultado.innerHTML = `Detectamos um adolescente de <strong>${idade}</strong> anos de idade.`
            imagem.src = 'adolescentehomem.png'
            document.body.style.background = '#7e8c9e'
        }
        else {
            resultado.innerHTML = `Detectamos uma adolescente de <strong>${idade}</strong> anos de idade.`
            imagem.src = 'adolescentemulher.png'
            document.body.style.background = '#b6b0bb'
        }
        return
    }

    if (idade < 21){
        if (opcoesSexo[0].checked) {
            resultado.innerHTML = `Detectamos um jovem de <strong>${idade}</strong> anos de idade.`
            imagem.src = 'jovemhomem.png'
            document.body.style.background = '#c3a64c'
        }
        else { 
            resultado.innerHTML = `Detectamos uma jovem de <strong>${idade}</strong> anos de idade.`
            imagem.src = 'jovemmulher.png'
            document.body.style.background = '#d55e6d'
        }
        return
    }

    if (idade < 60){
        if (opcoesSexo[0].checked) {
            resultado.innerHTML = `Detectamos um homem adulto de <strong>${idade}</strong> anos de idade.`
            imagem.src = 'homemadulto.png'
            document.body.style.background = '#9fbad7'
        }
        else {
            resultado.innerHTML = `Detectamos uma mulher adulta de <strong>${idade}</strong> anos de idade.`
            imagem.src = 'mulheradulta.png'
            document.body.style.background = '#eeccbb'
        }
    }

    if (idade > 60){
        if (opcoesSexo[0].checked) {
            resultado.innerHTML = `Detectamos um homem idoso de <strong>${idade}</strong> anos de idade.`
            imagem.src = 'idosohomem.png'
            document.body.style.background = '#686f80'
        }
        else {
            resultado.innerHTML = `Detectamos uma mulher idosa de <strong>${idade}</strong> anos de idade.`
            imagem.src = 'idosamulher.png'
            document.body.style.background = '#cdbdb0'
            
        }
    }

}