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


// Local Storage
function supportsLocalStorage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}

// Initialize settings
function getRecentSetting(id) {
    const setting = localStorage.getItem(id);
    return JSON.parse(setting);
}

// Save recent changes
function setRecentSettings(id, isChanged) {
    localStorage.setItem(id, isChanged);
}


window.onload = function () {
    if (supportsLocalStorage()) {
        const settingsForm = document.getElementById('settingsForm');
        const emailCheckbox = settingsForm.querySelector('#emailNotification');
        const publicCheckbox = settingsForm.querySelector('#publicProfile');
        const timezone = settingsForm.querySelector('#timezone');

        if (getRecentSetting('emailNotification')) {
            emailCheckbox.checked = true;
        }

        if (getRecentSetting('publicProfile')) {
            publicCheckbox.checked = true;
        }

        if (getRecentSetting('timezone')) {
            timezone.selectedIndex = getRecentSetting('timezone');
        }

        settingsForm.addEventListener('change', (e) => {
            if (e.target.tagName === 'INPUT') {
                setRecentSettings(e.target.id, e.target.checked);
            } else if (e.target.tagName === 'SELECT') {
                setRecentSettings(e.target.id, e.target.selectedIndex);
            }
        });
    }
};