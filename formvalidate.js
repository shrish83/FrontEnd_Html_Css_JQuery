var pattern = /[A-Za-z]{25}/;
$(document).ready(function(){
    var name_val = $(".name").val();
    $(".name").keyup(function(){
        if(name_val.match(pattern)){
            $(".name").removeClass("invalid").addClass("valid");
        }
        else{
            $(".name").addClass("invalid").removeClass("valid");
        }
    });
  });