
//     $(window).resize(function() {

//     if( window.innerWidth <= 780 ){ 
//        $('.footer__title').on('click', function(){
//            var answer = $(this).next();
    
//         $('.footer__list').not(answer).slideUp(400);
//             answer.slideToggle(400);
//          });   
//  }
// });

$('.footer__title').on('click', function(){
    if( window.innerWidth <= 780 ){
               var answer = $(this).next();
        
            $('.footer__list').not(answer).slideUp(400);
                answer.slideToggle(400);
    }
    });
