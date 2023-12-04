$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

$('form').on('submit', function(e){
    e.preventDefault();

    const enderecoNovaLista = $('#endereco-lista-nova').val();
    const novaLista = $('<li> </li>');

    $(`<li> ${enderecoNovaLista} </li>`).appendTo(novaLista);

    $(novaLista).appendTo('ul');

    $('#endereco-lista-nova').val('');
});
