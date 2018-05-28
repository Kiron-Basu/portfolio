console.log('here');

$('ul').on('click', 'li', function() {
 $(this).toggleClass('completed');
});
 
 /*
 if ($(this).css('color') === 'rgb(128, 128, 128)') {
   $(this).css({
    color: 'black',
    textDecoration: 'none'
   });
 }
 else {
   $(this).css({
     color: 'gray',
     textDecoration: 'line-through' //text-decoration doesn't work in vanilla javascript
   });
 }
 */

$("ul").on('click', 'span', function(event){
 $(this).parent().fadeOut(500, function() {
  $(this).remove(); //'this' on this line refers to this.parent as it's inside a callback on this.parent not just span!
 });
 event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
 if (event.which === 13) {
  var todoText = $(this).val();
  $(this).val("");
  $("ul").append("<li><span><i class = 'fa fa-trash'></i></span> " + todoText + "</li>");
 }
});

$(".fa-plus").click(function () {
$("input[type='text']").fadeToggle(); 
});
