$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");

});

$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $.post
        $(this).remove();
    });
    event.stopPropagation;

});

$("#textbox").on("keypress", function (event) {
    if (event.which === 13) {
        var newTodo = $(this).val();
        $(this).val("");
        $.post('/addTodo', {
            todo: newTodo
        })
        /*.done((result)=>{
            $("<li class='disable-select'><span><i class='fa fa-trash' aria-hidden='true'></i></span>" + result.reminder + "</li>")
        })*/

        .done(()=>{
                    $("#list").append("<li class='disable-select'><span><i class='fa fa-trash' aria-hidden='true'></i></span>" + newTodo + "</li>")
                })


        .fail((error)=>{throw error})
    };
});

    $("i.fa-plus").on("click", function () {
        var newTodo = $("#textbox").val();
        $("#textbox").val("");
        $.post('/', {
                todo: newTodo
        })
        .done((result)=>{$("<li class='disable-select'><span><i class='fa fa-trash' aria-hidden='true'></i></span>" + result.newTodo + "</li>")
        })
        .fail((error)=>{throw error})
    
    });

