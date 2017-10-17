$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");

});

$("ul").on("click", "span", function (event) {
    
   var id = $(this).attr('id');
    console.log(id);
    $.post('/removeTodo')

    .done((retorno) => {
        $(this).parent().fadeOut(500, function () {
            $(this).remove();
    
        });
        event.stopPropagation;
    })
    

    .fail((error)=>{throw error})
    



    

});

    

$("#textbox").on("keypress", function (event) {
    if (event.which === 13) {
        let newTodo = $(this).val();
        if(newTodo.length <= 0){

            alert("O valor da todo não pode ser vazio");
            return;
        }
        $(this).val("");
        $.post('/addTodo', {
            todo: newTodo
        })

        .done(()=>{
                    $("#list").append("<li class='disable-select'><span><i class='fa fa-trash' aria-hidden='true'></i></span>" + newTodo + "</li>")
                })

        .fail((error)=>{throw error})
    };
});

    $("i.fa-plus").on("click", function () {
        var newTodo = $("#textbox").val();
        $("#textbox").val("");
        $.post('/addTodo', {
                todo: newTodo
        })
        .done((result)=>{$("<li class='disable-select'><span><i class='fa fa-trash' aria-hidden='true'></i></span>" + result.newTodo + "</li>")
        })
        .fail((error)=>{throw error})
    
    });

