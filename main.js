$( document ).ready(function() {
    console.log( "ready!" );
    
$( "#html-button" ).click(function() {
  $( "#html-box" ).toggle('slow');
});  

$( "#css-button" ).click(function() {
  $( "#css-box" ).toggle('slow');
});    
    
$( "#js-button" ).click(function() {
  $( "#js-box" ).toggle('slow');
});    
    
$( "#output-button" ).click(function() {
  $( "#output-box" ).toggle('slow');
});    
    
});
