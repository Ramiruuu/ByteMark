document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.box a[rel="noopener"]').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const url = this.href;
            alert('You are about to visit my social media profile!');
            window.open(url, '_blank');
        });
    });
});