$(function() {

  var socket = io();
  $('#bbb').click(function(){
      var message=$('.input').val()
      if(message){
          socket.emit('new message',message)
      }else{
          alert('请输入信息')
      }

  })

    socket.on('receive message', function (data) {
        console.log(data);
    });
});
