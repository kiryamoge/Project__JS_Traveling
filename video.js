document.querySelector('.main-button').addEventListener('click', function() {
    const video = document.querySelector('.video');
    video.style.opacity = '0';
    video.style.display = 'block';

    let opacity = 0;
    let interval = setInterval(function() {
        opacity += 0.1;
        video.style.opacity = opacity;

        if (opacity >= 1) {
            clearInterval(interval);
        }
    }, 200);
});