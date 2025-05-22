document.addEventListener('DOMContentLoaded', function() {
    var chromeBtn = document.querySelector('.home-btn');
    if (chromeBtn) {
        chromeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Redirecting you to the Chrome Web Store to get the extension!');
        });
    }
});