$(document).ready(function(){
  $(".form").submit(function(event){
    ("#question1")alert();
    event.preventDefault();
    var question1 = parseInt($("#question1").val());
    var question2 = parseInt($("#question2").val());
    var question3 = parseInt($("#question3").val());
    var question4 = parseInt($("#question4").val());
    var sumAll = add(#question1 + #question2)
    if (12 === sumAll) {
      $(".java, .ruby, .c-sharp, .php, .cc").show();
      $(".none").hide();
  });
});
