const animatedDiv = document.getElementById('RoundDivLogo');
const TextAnimation = document.getElementById('TextAnimation');
const SpidermanCake = document.getElementById('SpidermanCake');
const StartBackground = document.getElementById('StartBackground');

setTimeout(() => {
    animatedDiv.style.animation = "bounce-in-top 1.1s both";
    animatedDiv.style.opacity = 1;
}, 500);

animatedDiv.addEventListener('animationend', (event) => {
    if (event.animationName === 'bounce-in-top') {
        animatedDiv.style.backgroundColor = "#ffc4db";
        SpidermanCake.style.animation = "slide-in-blurred-bottom 1.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both";
    } else if (event.animationName === 'slide-in-blurred-bottom') {
        TextAnimation.style.animation = "text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
    } else if (event.animationName === 'text-focus-in') {
        animatedDiv.style.animation = "scale-out-center 1.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
    } else if (event.animationName === 'scale-out-center') {
        StartBackground.style.animation = "fade-out 2s ease-out both";
    }
});

StartBackground.addEventListener('animationend', (event) => {
    if (event.animationName === 'fade-out') {
        StartBackground.style.display = "none";
        document.body.style.overflow = "scroll";
        document.body.style.marginTop = "30px";
    }
});


 StartBackground.style.display = "none";
        document.body.style.overflow = "scroll";
        document.body.style.marginTop = "30px";
        