document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.box a[rel="noopener"]').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const url = this.href;
            Swal.fire({
                title: 'You are leaving ByteMark',
                text: 'You are about to visit my social media profile. Do you want to continue?',
                icon: 'info',
                iconColor: '#5368df',
                confirmButtonText: 'Yes, open in new tab',
                confirmButtonColor: '#5368df',
                showCancelButton: true,
                cancelButtonText: 'Cancel',
                background: '#f7f8fa',
                color: '#3246a8',
                customClass: {
                    popup: 'swal2-border-radius'
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    window.open(url, '_blank');
                }
            });
        });
    });
});