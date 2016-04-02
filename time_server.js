var net=require('net')

function append_zero(n) { return n < 10 ? '0' + n : n }

var server = net.createServer(function(socket) {
  date = new Date();
  s = date.getFullYear() + "-"
    + append_zero(date.getMonth() + 1) + "-"
    + append_zero(date.getDate()) + " "
    + append_zero(date.getHours()) + ":"
    + append_zero(date.getMinutes()) + "\n";
  socket.end(s);
});
server.listen(process.argv[2]);