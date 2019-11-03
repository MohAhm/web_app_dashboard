// const closeButton = document.getElementById('close');

// // Hide alert message
// closeButton.addEventListener('click', (e) => {
//     const close = e.target;
//     const alertMessage = close.parentNode.parentNode;
//     alertMessage.style.display = 'none';
// });

// Hide alert message
$('#close').click(function () {
    $('.alert-message').slideUp();
});