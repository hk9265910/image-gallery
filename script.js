$(document).ready(function() {
    // Lightbox functionality
    $('.image img').on('click', function() {
        var imgSrc = $(this).attr('src');
        $('.lightbox-image').attr('src', imgSrc);
        $('#lightbox').fadeIn();
    });

    $('.close-button, #lightbox').on('click', function() {
        $('#lightbox').fadeOut();
    });

    // Filtering functionality
    $('.filter-button').on('click', function() {
        var filterValue = $(this).attr('data-filter');
        if (filterValue == 'all') {
            $('.image').fadeIn('slow').removeClass('hidden');
        } else {
            $('.image').each(function() {
                if (!$(this).hasClass(filterValue)) {
                    $(this).fadeOut('normal').addClass('hidden');
                } else {
                    $(this).fadeIn('slow').removeClass('hidden');
                }
            });
        }
    });
});
