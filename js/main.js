


// Меню бургер
    $('.burger').on('click', function() {
        $('.burger, .mobile-menu').toggleClass('active');
    });





//Селекты
$(document).ready(function() {
    $('.select').select2();
});

//Инпут
$('.form-item input').on('keyup', function() {
    if ($(this).val().length > 0) {
        $(this).parent().addClass('active');
        $(this).closest('form').find('.btn-main').prop('disabled', false);
        //$('.form-item .btn-main').removeAttr('disabled');
    } else {
        $(this).parent().removeClass('active');
        //$('.form-item .btn-main').prop('disabled', true);
        $(this).closest('form').find('.btn-main').prop('disabled', true);

    }
});


//Карусель
$('.carousel').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
});

$('.widget-title').on('click', function () {
    $(this).parent().toggleClass('open');
   // $('.widget-bottom').toggleClass('open')
})

//Скролл меню
$('.menu a').click(function() {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 90
    }, {
        duration: 2000,
        easing: 'swing'
    });
    return false;
});

