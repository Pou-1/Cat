const animatedDiv = document.getElementById('RoundDivLogo');
const TextInLogo = document.getElementById('TextInLogo');
const SkirtInLogo = document.getElementById('SkirtInLogo');
const StartBackground = document.getElementById('StartBackground');

setTimeout(() => {
    animatedDiv.style.animation = "bounce-in-top 1.1s both";
    animatedDiv.style.opacity = 1;
}, 500);

animatedDiv.addEventListener('animationend', (event) => {
    if (event.animationName === 'bounce-in-top') {
        animatedDiv.style.animation = "color-change-2x 2s linear normal";
        animatedDiv.style.backgroundColor = "#ffc4db";
    } else if (event.animationName === 'color-change-2x') {
        animatedDiv.style.boxShadow = `2.8px 2.8px 2.2px -5px rgba(255, 196, 219, 0.03),
        6.7px 6.7px 5.3px -5px rgba(255, 196, 219, 0.038),
        12.5px 12.5px 10px -5px rgba(255, 196, 219, 0.045),
        22.3px 22.3px 17.9px -5px rgba(255, 196, 219, 0.052),
        41.8px 41.8px 33.4px -5px rgba(255, 196, 219, 0.65),
        100px 100px 80px -5px rgba(255, 196, 219, 0.7),
        2.8px 2.8px 2.2px -5px rgba(162, 210, 255, 0.03),
        6.7px 6.7px 5.3px -5px rgba(162, 210, 255, 0.038),
        12.5px 12.5px 10px -5px rgba(162, 210, 255, 0.045),
        22.3px 22.3px 17.9px -5px rgba(162, 210, 255, 0.052),
        41.8px 41.8px 33.4px -5px rgba(162, 210, 255, 0.65),
        100px 100px 80px -5px rgba(162, 210, 255, 0.7)`;

        TextInLogo.style.animation = "text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
    } else if (event.animationName === 'text-focus-in') {
        SkirtInLogo.style.animation = "slide-in-blurred-bottom 1.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both";
    } else if (event.animationName === 'slide-in-blurred-bottom') {
        animatedDiv.style.animation = "scale-out-center 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
    } else if (event.animationName === 'scale-out-center') {
        StartBackground.style.animation = "fade-out 2s ease-out both";
    }
});

StartBackground.addEventListener('animationend', (event) => {
    if (event.animationName === 'fade-out') {
        StartBackground.style.display = "none";
    }
});