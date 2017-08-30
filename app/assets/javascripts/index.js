/* global $*/
$(document).ready(function() {
var $ball = $('#balls > div'),
                diameter = $ball.height(),
                perimeter = Math.PI * diameter,
                n = $ball.length,
                i = 0,
                itv;
            
            itv = setInterval(function(){
                if(i>n)clearInterval(itv);
                rotateBall( 1000-(diameter*i) );
                i++;
            },2000);
            
            function rotateBall(distance) {
              var degree = distance * 360 / perimeter;
              $ball.eq(i).css({
                transition: "2s",
                transform: 'translateX('+ distance +'px)'
              }).find('div').css({
                transition: "2s",
                transform: 'rotate('+ degree +'deg)'    
              });
            }

});