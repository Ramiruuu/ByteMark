document.addEventListener('DOMContentLoaded', function() {
    // Show modal with info
    document.querySelectorAll('.features .all-btn').forEach(function(btn, idx) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const info = [
                {
                    title: "Bookmark in one click",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Sed euismod, nisl euismod consectetur consectetur, nisi nisl euismod nisi, euismod consectetur nisi nisi euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
                },
                {
                    title: "Intelligent search",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Sed euismod, nisl euismod consectetur consectetur, nisi nisl euismod nisi, euismod consectetur nisi nisi euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
                },
                {
                    title: "Share your bookmarks",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Sed euismod, nisl euismod consectetur consectetur, nisi nisl euismod nisi, euismod consectetur nisi nisi euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
                }
            ];
            document.getElementById('modal-title').textContent = info[idx].title;
            document.getElementById('modal-desc').textContent = info[idx].desc;
            document.getElementById('info-modal').style.display = 'flex';
        });
    });

    // Close modal on X click
    document.querySelector('.close-btn').addEventListener('click', function(e) {
        document.getElementById('info-modal').style.display = 'none';
    });

    // Close modal when clicking outside modal-content
    document.getElementById('info-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            this.style.display = 'none';
        }
    });
});