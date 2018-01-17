$(".form-reload").click(function() {
    location.reload();
});

$(document).ready(function(){
  $(".form").submit(function(event){
    event.preventDefault();
    var answer1 = parseInt($("#question1").val());
    var answer2 = parseInt($("#question2").val());
    var answer3 = parseInt($("#question3").val());
    var answer4 = parseInt($("#question4").val());
    var answer5 = parseInt($("#question5").val());
    var answerAll = answer1 + answer2 + answer3 + answer4 + answer5
    var userrName = $("#userName").val();
    if (answerAll === 15) {
      $(".java, .c-sharp, .ruby, .form, h2").hide();
      $(".php, .css, h5, .form-reload").show();
      $(".userName").empty().append(userrName + " ");
    } else if (answerAll >= 10) {
      $(".php, .c-sharp, .ruby, .form, h2").hide();
      $(".java, .php, h5, .form-reload").show();
      $(".userName").empty().append(userrName + " ");
    } else if (answerAll >= 5) {
      $(".java, .php, .css, .form, h2").hide();
      $(".c-sharp, .ruby, h5, .form-reload").show();
      $(".userName").empty().append(userrName + " ");
    }
  });
});
