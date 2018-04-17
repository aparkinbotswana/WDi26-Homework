

let brother = _.sample(["Groucho", "Harpo", "Chico"]);
let time = new Date().getTime();
let abcd = _.sample(['a', 'b', 'c', 'd']);

$(document).ready(function() {
  $('#hiddenbrother').text(brother);
  $('#hiddentime').text(time);
  $('#abcd').text(abcd);
  setInterval(function() {
    $.getJSON('/').done(function(info) {
       $('#brother').text(info.brother);
       $('#uptime').text(info.uptime);
    })
  }, 3000);
});


//Failed to load file:///: Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https. The setInterval doesn't work.
