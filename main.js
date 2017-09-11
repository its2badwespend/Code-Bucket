$( document ).ready(() => {
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


$("textarea").on("change keyup paste",() =>{    
$("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#css-box").val() + "</style></head><body>" + $("#html-box").val() + "</body></html>");
});
    
    
});

