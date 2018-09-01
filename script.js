$(function () {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    
    var x = 30;
    var y = 30;
    var w = 40;
    var h = 40;
    
    for (var i = 0; i < 10; i++) {
    
    context.fillStyle = 'rgba(224,162,72,0.5)';
    context.fillRect(x,y,w,h);
      x+=20;
      y+=20;
    }
    });