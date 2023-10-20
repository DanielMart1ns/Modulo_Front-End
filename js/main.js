$(document).ready(function(){

    $('#btn-comecar').click(function(){
        $('#btn-comecar').slideUp()
        $('.dados').slideDown()
    })

    $('#btn-cancelar').click(function(){
        $('#btn-comecar').slideDown()
        $('.dados').slideUp()
    })

    //Aplicando mask ao tel, cpf e cep
    $('#tel').mask('(+00) 00000-0000', {placeholder: '(DD) 90000-0000'})
    
    $('#cpf').mask('000.000.000-00', {placeholder: '000.000.000-00'})

    $('#cep').mask('00000-000', {placeholder: '00000-000'})


    
        //validando formulários
        $('form.dados-pessoais').validate({
            rules: {
                primeiroNome:{
                    required: true
                },

                segundoNome:{
                    required: true
                },

                email: {
                    required: true,
                    email: true
                },

                tel: {
                    required: true
                },

                cpf: {
                    required: true
                },

                estado: {
                required: true
            },

            cidade: {
                required: true
            },

            rua: {
                required: true
            },

            nResidencia: {
                required: true
            },

            cep: {
                required: true
            }
            },

            invalidHandler: function(evento, validador){
                var camposIncorretos = validador.numberOfInvalids()

                if(camposIncorretos){
                    alert('Há campos incorretos. Por favor, revise e tente novamente.')
                }
            }
    })
})

