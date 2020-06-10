$(document).ready(function(){
    var pattern_name = /^[A-Za-z ]{3,25}$/;
    var pattern_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var pattern_contact = /^\d{10}$/;
    var pattern_password = /^[A-Za-z]\w{7,14}$/;
    $(".name").keyup(function(){
        var name_val = $(this).val();
        console.log(pattern_name.test(name_val));
        if(pattern_name.test(name_val)){
            $(".name").removeClass("invalid").addClass("valid");
            $(".name_err").removeClass("error_show");
        }
        else{
            $(".name").removeClass("valid").addClass("invalid");
            $(".name_err").addClass("error_show");
        }
    });
    $(".email").keyup(function(){
            var email_val = $(this).val();
            console.log(pattern_email.test(email_val));
            if(pattern_email.test(email_val)){
                $(".email").removeClass("invalid").addClass("valid");
                $(".email_err").removeClass("error_show");
            }
            else{
                $(".email").removeClass("valid").addClass("invalid");
                $(".email_err").addClass("error_show");
            }
    });
    $(".password").keyup(function(){
        var pass_val = $(this).val();
        console.log(pattern_password.test(pass_val));
        if(pattern_password.test(pass_val)){
            $(".password").removeClass("invalid").addClass("valid");
            $(".pass_err").removeClass("error_show");
        }
        else{
            $(".password").removeClass("valid").addClass("invalid");
            $(".pass_err").addClass("error_show");
        }
});
$(".contact").keyup(function(){
    var con_val = $(this).val();
    console.log(pattern_contact.test(con_val));
    if(pattern_contact.test(con_val)){
        $(".contact").removeClass("invalid").addClass("valid");
        $(".con_err").removeClass("error_show");
    }
    else{
        $(".contact").removeClass("valid").addClass("invalid");
        $(".con_err").addClass("error_show");
    }
});
  });