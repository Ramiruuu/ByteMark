document.querySelectorAll('.all-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const originalText = btn.textContent;
        btn.textContent = 'Installing...';
        btn.disabled = true;
        setTimeout(function() {
            btn.textContent = originalText;
            btn.disabled = false;
            alert('Installation started!');
        }, 1500); // 1.5 seconds
    });
});