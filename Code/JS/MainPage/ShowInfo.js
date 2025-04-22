$(document).ready(function () {
    let currentActive = 0;
    const contentClasses = ['.frontEndContent', '.backEndContent', '.otherContent'];

    function toggleContent(newActive, showSelector) {
        if (currentActive === newActive) {
            $(showSelector).slideUp();
            currentActive = 0;
            return;
        }
        const $currentlyVisible = $(contentClasses.join(', ')).filter(':visible').not(showSelector);
        if ($currentlyVisible.length) {
            $currentlyVisible.slideUp(function() {
                $(showSelector).slideDown();
                currentActive = newActive;
            });
        } else {
            // If nothing is visible, just slide down the new content
            $(showSelector).slideDown();
            currentActive = newActive;
        }
    }

    $('#btn1').on('click', function () {
        toggleContent(1, '.frontEndContent');
    });

    $('#btn2').on('click', function () {
        toggleContent(2, '.backEndContent');
    });

    $('#btn3').on('click', function () {
        toggleContent(3, '.otherContent');
    });
});