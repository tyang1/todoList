$(document).ready( () => {
    const toDoFunction = {
        refresh:(() =>{
            $.ajax({
                url:"http://localhost:3002/hello",
                type: 'GET',
                contentType:"application/json; charset=utf-8",
                //dataType:'json',
                success: function(res){
                    $('li').remove();
                    // console.log("success from get!!!", JSON.parse(res));
                    JSON.parse(res).forEach(resItem => (
                        $('ul').append($(`<li> ${resItem.todo}<button class = "delete" id = ${resItem._id}>Delete</button><button class = "edit" id = ${resItem._id}>Edit</button></li>`))))

                    }
            })
        })
    }
    $('#add').on("click", () => {
        if( $('#item').val())
        $.ajax({
            url: "http://localhost:3002/hello",
            type: 'POST',
            data: JSON.stringify({todo: $('#item').val()}),
            contentType:"application/json; charset=utf-8",
            dataType:"json",
            success: () => {
                console.log("get request is working!!")
                toDoFunction.refresh();
            }
        })
        $(document).on("click",".delete", removeItem);

        function removeItem(e){
            console.log('HIIIIIIII');
            console.log(e.target.id);
            $.ajax({
                url:"http://localhost:3002/hello",
                type: 'DELETE',
                data: JSON.stringify({_id : e.target.id}),
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                success: function(res){
                    // console.log("successfully remove Item in res")
                    if(res === true){
                        toDoFunction.refresh();
                    }
                }
            })
            e.preventDefault();
        }
    })
    // const newElement = $(`<div id="somecooldiv">${textVariable}</div>`); // --> makes an element for you to use
    // $('#container').???(newElement); // --> adds items to a container
    // $('#container').??? // --> clears the container
})
