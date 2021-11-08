// Cách 1
// $(function(){
//      $('span i').click(function(){
//           if ($('#password').attr('type') =='password'){
//                $('#password').attr('type','text');
//                $('span i').removeClass('far fa-eye');
//                $('span i').addClass('far fa-eye-slash');
//           } else {
//                $('#password').attr('type','password');
//                $('span i').removeClass('far fa-eye-slash');
//                $('span i').addClass('far fa-eye');
//           }
//      })
// })

// Cách 2
let password = document.getElementById('password');
let eye = document.getElementById('eye');
let btn = document.querySelector('span i')

btn.addEventListener('click', function(){
   if(password.type == 'password') {
        password.type = 'text';
        btn.classList.value = 'far fa-eye-slash';
   } else {
        password.type = 'password';
        btn.classList.value = 'far fa-eye'
   }
})
