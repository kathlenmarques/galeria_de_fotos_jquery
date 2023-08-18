
$(document).ready(function(){
    // Prevenir ação default 
    $('#btn-cancelar').click(function(){
        $('form').slideUp();
    });

    $('header button').click(function(e){
        $('form').slideDown();
    });

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display:none;"> </li>');

        $(`<img src="${enderecoNovaImagem}"/>`).appendTo(novoItem);

        $(`<div class="overlay-img-link"><a href="${enderecoNovaImagem}" target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real</a></div>`).appendTo(novoItem);

        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(300);
        $('#endereco-imagem-nova').val();
    });
});