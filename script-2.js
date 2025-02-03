
    document.querySelectorAll('.about .video-container .controlls .controll-btn').forEach(btn => {
    btn.onclick = () => {
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .video-container .video').src = src;
    }
})
