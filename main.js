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

let newsrc = `<!DOCTYPE html>\n<html>\n<head>\n<meta charset='utf-8' />\n<style>\n ${$("#css-box").value}\n</style>\n</head>\n<body>\n ${$("#html-box").value}\n<script>\n ${$("#js-box").value}\n<\/script>\n<\/body>\n<\/html>`;

let iframe = $('#output-box');

setInterval(() => {
     iframe.srcdoc = $('#html-box').value + '<style>' +
                $('#css-box').value + '</style>' + '<script>' +
                $('#js-box').value + '<\/script>'}, 1000)


//setInterval(() => {
//        $('#output-box').attr('src', 'https://google.com');
//        }, 5000);
    
});

