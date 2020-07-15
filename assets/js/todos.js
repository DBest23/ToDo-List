$("ul").on("click", "#done", function(){
    $(this).parent().toggleClass("completed");
});

$("ul").on("click", "#trash", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").on('keypress',function(event){
    if(event.which === 13) {
        var newTodo = $(this).val();
        $("ul").append("<li><span id='trash'><i class='fa fa-trash'></i></span> "+ newTodo +"<span id='done'><i class='fa fa-check-circle'></i></span></li>");
        $(this).val("");
    }
})

$(".fa-plus-circle").click(function(){
    $("input[type='text']").fadeToggle();
});