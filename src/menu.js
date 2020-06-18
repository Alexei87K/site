// $(function(){

    // $('.header__gamb').on('click', function(){
    //   $('.header__ul').slideToggle(300, function(){
    //     $('.fas').removeClass('fa-bars');
    //     $('.fas').addClass('fa-times');
    //    if($(this).css('display') === 'none'){
    //        $(this).removeAttr('style');
    //        $('.fas').addClass('fa-bars');
    //        $('.fas').removeClass('fa-times');
    //    }
    
    //   });
    //  });
   
const headerBtn = document.querySelector('.menu');
const headerPopup = document.querySelector('.overlayer');

headerBtn.addEventListener('click', () => {
    headerPopup.classList.add('open-menu');
});

headerPopup.addEventListener('click', event => {
  if  (!(event.target.closest('.menuMin')))
  headerPopup.classList.remove('open-menu');
})


    // });