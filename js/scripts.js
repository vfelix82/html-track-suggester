$(document).ready(function(){
  $(".form").submit(function(event){
    var question1 = parseInt($("#question1").val());
    var question2 = parseInt($("#question2").val());
    var question3 = parseInt($("#question3").val());
    var question4 = parseInt($("#question4").val());
    var sumAll = question1 + question2 + question3 + question4
    var userInputName = $("#userName").val();
    var userInputEmail = $("#userEmail").val();
    if (12 === sumAll) {
      $(".java, .php, .c-sharp").show();
    }
});
