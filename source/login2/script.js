$(function(){
     $('span i').click(function(){
          if ($('#password').attr('type') =='password'){
               $('#password').attr('type','text');
               $('span i').removeClass('far fa-eye');
               $('span i').addClass('far fa-eye-slash');
          } else {
               $('#password').attr('type','password');
               $('span i').removeClass('far fa-eye-slash');
               $('span i').addClass('far fa-eye');
          }
     })
})