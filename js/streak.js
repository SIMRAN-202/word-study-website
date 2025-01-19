$(document).ready(function() {
    let completedDays = 0;

    // Toggle day completion
    $('.day').on('click', function() {
        const icon = $(this).find('i');
        const isCompleted = icon.hasClass('completed');

        if (isCompleted) {
            icon.removeClass('completed').removeClass('bi-check-circle').addClass('bi-circle');
            completedDays--;
        } else {
            icon.addClass('completed').removeClass('bi-circle').addClass('bi-check-circle');
            completedDays++;
        }

        updateProgressBar();
    });

    // Update progress bar
    function updateProgressBar() {
        const percentage = (completedDays / 7) * 100;
        $('#progress').css('width', `${percentage}%`);
    }

    // Reset streak
    $('.reset-button').on('click', function() { // Assuming you have a button with id "resetButton"
        $('.day i').removeClass('completed').removeClass('bi-check-circle').addClass('bi-circle');
        completedDays = 0;
        updateProgressBar();
    });




//daily quotes
 $('.quote-like').on('click', function() {
    $(this).find('i').toggleClass('bi-hand-thumbs-up-fill bi-hand-thumbs-up');
});

// Share button alert
$('.quote-share').on('mouseover', function() {
    $(this).attr('title', 'Share this quote!'); 
});

$('.quote-share').on('mouseout', function() {
    $(this).removeAttr('title'); 
});

})





