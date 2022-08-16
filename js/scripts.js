$(document).ready(function(){
    //monitorar o click do formulário
    $('#send').click(function(e){
        e.preventDefault()

        //criar as variáveis que guardarão os dados digitados
        var nome = $('#NOME').val()
        var idade = $('#IDADE').val()

        var frase = 'Olá ' +nome+', sua idade é: ' +idade

        $('#NOME').val('')
        $('#IDADE').val('')

        $('#mensagem').append(frase)


       
        })
         // monitorar quando o cursor estiver dentro do campo #NOME
        $('#NOME').focusin(function(){
            $('#mensagem').empty()
    })
})