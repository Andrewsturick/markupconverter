'use strict';
console.log('hello');
$('button').on('click', makeRendering);

function makeRendering(){

  var string = $('.inputarea').val();
  // $.post('/markdown', {'string': string})
  $.ajax({
            method: 'POST',
            url: '/markdown',
            data: {'string': string},
            success: function(data,status){
              console.log(data);
              console.log(jQuery.parseHTML(data))
              var outputtext = $.parseHTML(data);

              ////used $.parseHTML as specified in cade's email!!!

              $('.outputarea').empty().append(outputtext);


}})};
