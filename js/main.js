const forms = document.querySelectorAll('form');
const $name = $('#name');
const $message = $('#message');
const $alertIcon = $('#alertIcon');
const list = $('.notification__list');


// cancel the browser default behavior for all form sumbit button
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });
});


// close the alert bar when the close button is clicked
$('.close').click(function (e) {
    const alert = e.target.parentNode.parentNode;
    $(alert).slideUp();
});


function isFieldEmpty(field) {
    return field.val().length > 0;
}

$('.alert--success').hide();
$('.alert--error').hide();

// display success or error message when send button is clicked,
// depending on user input  
$('#sendButton').click(function () {

    if (isFieldEmpty($name) && isFieldEmpty($message)) {
        $('.alert--error').hide();
        $('.alert--success')
            .slideDown(1000)
            .delay(3000)
            .slideUp();

        $name.val('');
        $message.val('');
    } else {
        $('.alert--success').hide();
        $('.alert--error')
            .slideDown(1000)
            .delay(3000)
            .slideUp();
    }

});


// Display notifications when the alert icon is clicked
$alertIcon.click(function (e) {
    e.stopPropagation();

    if (list.css('display') === 'none') {
        list.slideDown();
    } else {
        list.slideUp();
    }

    $('.notification__dot').hide();
});

list.click(function (e) {
    e.stopPropagation();
});

$(document).click(function () {
    list.slideUp();
});