$(function(){
  var socket=io();
  socket.on('new message1',function(data){
    console.log(data)
  });
   $('#sendMessage').on('click',function(){
       socket.emit('new message',$('#content').val())
   })
})