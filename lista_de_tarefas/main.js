$(document).ready(function(){

    //Aparecendo botões
    $('#nome-tarefa').keyup(function(){
        $('#btn-reset').fadeIn()
        $('#btn-incluir').fadeIn()
    })

    //Escondendo botôes
    $('button').click(function(){
        $('#btn-reset').fadeOut()
        $('#btn-incluir').fadeOut()
    })

    $('form').submit(function(e){
        e.preventDefault()
        $('section').fadeIn()

        var nome_tarefa = $('#nome-tarefa').val()
        
        $(`<li class="limpar">${nome_tarefa}</li>`).appendTo('ul')


        $('#nome-tarefa').val('')
    })

    //Riscando Tarefa
    $('ul').on('click','li',function(){
        $(this).toggleClass('tarefa-completa')
    })

    $('#btn-limpar').click(function(){
        location.reload()
    })

})