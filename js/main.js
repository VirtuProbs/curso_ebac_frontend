$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000');
    $('#cep').mask('00000-000');
    $('#cpf').mask('000.000.000-00')


    $('form').validate({
            rules: {
        nome:{
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        cpf: {
            required: true
        },
        endereco:{
            required: true
        },
        cep: {
            required: true
        }
        },
        messages: {
            nome: 'Por favor, Insira o seu nome',
            email: 'Por favor, Insira seu e-mail',
            telefone: 'por favor, Insira seu telefone',
            cpf: 'Por favor, Insira seu CPF',
            endereco: 'Por favor, Insira seu endereço completo',
            cep: 'Por favor, Insira seu CEP'

            
            },
            submitHandler: function(form) {
            console.log(form)
            },
            invalidHandler: function(evento, validador) {
                let camposIncorretos = validador.numberOfInvalids();
                if (camposIncorretos) {
                    alert(`Existem ${camposIncorretos} campos incorretos`)
                }
            }
        
    })
})