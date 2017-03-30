$(document).ready(function() {
  var socket = io.connect(window.location.href);
    socket.on('greet', function (data) {
        toastr.info( data.hello,'welcome back!');
        socket.emit('respond', { message: 'Hello to you too, Mr.Server!' });
    });
});
