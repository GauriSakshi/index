const marqueeText = document.querySelector('.marquee-text');
const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('.pause-btn');
const speedUpBtn = document.querySelector('.speed-forward-btn');
const speedDownBtn = document.querySelector('.speed-backward-btn');

let isPlaying = true;
let animationSpeed = 10; // 10 seconds is the initial speed

playBtn.addEventListener('click', () => {
    isPlaying = true;
    marqueeText.style.animationPlayState = 'running';
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
});

pauseBtn.addEventListener('click', () => {
    isPlaying = false;
    marqueeText.style.animationPlayState = 'paused';
    playBtn.style.display = 'block';
    pauseBtn.style.display = 'none';
});

speedUpBtn.addEventListener('click', () => {
    animationSpeed -= 2; // Decrease the speed by 2 seconds
    marqueeText.style.animationDuration = `${animationSpeed}s`;
});

speedDownBtn.addEventListener('click', () => {
    animationSpeed += 2; // Increase the speed by 2 seconds
    marqueeText.style.animationDuration = `${animationSpeed}s`;
});
