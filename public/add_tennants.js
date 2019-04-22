$(()=>{

    $('#userbtn').click(()=>{
        $.post('/users',{
            username:$('#username').val(),
            password:$('#password').val(),
            phone:$('#phone').val(),
            address:$('#address').val(),
        })
    })})
       
