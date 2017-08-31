
$("ul").on("click","li", function(){
    $(this).toggleClass("completed");    
    
});

$("ul").on("click","span",function(event){
$(this).parent().fadeOut(500,function(){
    $(this).remove();
});
event.stopPropagation;

});

$("#textbox").on("keypress",function(event){
    if(event.which === 13){
        var newTodo = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span>"+ newTodo +"</li>");
    };
});