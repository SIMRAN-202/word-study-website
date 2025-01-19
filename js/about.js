//javascript for faq-section
$(document).ready(function() {
    $('.faq-question').on('click', function() {
        // Slide toggle the clicked item's answer
        $(this).next('.faq-answer').slideToggle();

        // Close all other answers
        $('.faq-answer').not($(this).next()).slideUp();

        // Toggle the chevron icon
        $(this).find('.faq-icon').toggleClass('bi-chevron-down bi-chevron-up');
    });

    $('.faq-answer').css({              
        'padding': '10px',            
     'text-align':'center', 
        'border-radius':'20px'  ,   
        'margin-bottom': '10px'       
    });  
    
});



//scroll animation for how-it-works-section
$(document).ready(function() {
    // Function to handle scroll animation
    function handleScrollAnimation() {
        $('.step').each(function() {
            var elementTop = $(this).offset().top;
            var windowHeight = $(window).height();
            var scrollTop = $(window).scrollTop();

            if (scrollTop + windowHeight > elementTop + 100) {
                $(this).addClass('fadeIn');
            }
        });
    }

    // Initial check
    handleScrollAnimation();

    // Bind scroll event
    $(window).on('scroll', handleScrollAnimation);

    // CSS for fadeIn animation
    $('.step').css({
        transition: 'opacity 0.5s ease, transform 0.5s ease'
    });

    // Additional CSS for .fadeIn effect
    $('.fadeIn').css({
        opacity: 1,
        transform: 'translateY(0)'
    });
});




$(document).ready(function() {
    let currentIndex = 0; // Current index of the first visible card
    const cards = $('.feature-card'); // All feature cards
    const totalCards = cards.length; // Total number of cards
    const cardsToShow = getCardsToShow(); // Get the number of cards to show based on screen size

    // Clone the first few cards and append them to the end for looping effect
    for (let i = 0; i < cardsToShow; i++) {
        $('.features-container').append(cards.eq(i).clone());
    }

    // Set the initial position of the features container
    updateSlider();

    // Function to slide the cards
    window.slide = function(direction) {
        // Update the current index based on the direction
        currentIndex += direction;

        // If we reach the end of the original cards, reset to the start
        if (currentIndex < 0) {
            currentIndex = totalCards - cardsToShow; // Go to the last set of original cards
        } else if (currentIndex > totalCards) {
            currentIndex = 0; // Go back to the first set of original cards
        }

        // Update the slider position
        updateSlider();
    };

    // Function to update the slider position
    function updateSlider() {
        const offset = -currentIndex * (100 / cardsToShow); // Calculate the offset
        $('.features-container').css('transform', `translateX(${offset}%)`); // Apply the transform
    }

    // Function to determine how many cards to show based on screen size
    function getCardsToShow() {
        if ($(window).width() < 768) { // Small screen
            return 1;
        } else { // Large screen
            return 3;
        }
    }

    // Update the number of cards to show on window resize
    $(window).resize(function() {
        const newCardsToShow = getCardsToShow();
        if (newCardsToShow !== cardsToShow) {
            currentIndex = Math.min(currentIndex, totalCards - newCardsToShow); // Adjust current index if necessary
            updateSlider();
        }
    });
});