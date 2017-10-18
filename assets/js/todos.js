
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

$("#textbox").on("keypress", function (event) {
    if (event.which === 13) {
        let newTodo = $(this).val();
        if (newTodo.length <= 0) {
            alert("O valor da todo não pode ser vazio");
            return;
        } else {
        $(this).val("");
        $.post('/adicionar', {
            todo: newTodo
        })
        .done(() => {
            $("#list").append("<li class='disable-select'><span><i class='fa fa-trash' aria-hidden='true'></i></span>" + newTodo + "</li>")
        })
        .fail((error) => { throw error })
        };
    }
});

$("i.fa-plus").on("click", function () {
    let newTodo = $("#textbox").val();
    if (newTodo.length <= 0) {
        alert("O valor da todo não pode ser vazio");
        return;
    } else {
    $("#textbox").val("");
    $.post('/adicionar', {
        todo: newTodo
    })
        .done(() => {
            $("#list").append("<li class='disable-select'><span><i class='fa fa-trash' aria-hidden='true'></i></span>" + newTodo + "</li>")
        })
        .fail((error) => { throw error })
    } 
});

$("ul").on("click", "span", function (event) {
    
        let id = $(this).attr('id');
    
        $.post('/remover', {
            id: id
        })
        .done((retorno) => {
            $(this).parent().fadeOut(500, function () {
                    $(this).remove();   
             });
        })
        .fail((error) => { throw error })
});

