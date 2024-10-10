const imagesNumbers = document.querySelector('.imagesNumbers');
const numberDiv = document.getElementById('numberDiv');

imagesNumbers.addEventListener('mousemove', function(e) {
  numberDiv.style.display = 'block';

  numberDiv.style.left = e.pageX + 10 + 'px';
  numberDiv.style.top = e.pageY + 10 + 'px';
});

imagesNumbers.addEventListener('mouseleave', function() {
  numberDiv.style.display = 'none';
});

for (let i = 1; i <= 6; i++) {
  const titleQuality = document.getElementById(`titlequality${i}`);
  const bigIlluDiv = titleQuality.nextElementSibling; // Cible la div juste après chaque titleQuality
  if (titleQuality && bigIlluDiv) {
    titleQuality.addEventListener('click', () => {
      if (bigIlluDiv.classList.contains('visible')) {
        bigIlluDiv.classList.remove('visible');
      } else {
        bigIlluDiv.classList.add('visible');
        titleQuality.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}


const scrollbottom = document.getElementById("scrollbottom");
const final = document.getElementById("final");
scrollbottom.addEventListener('click', function() {
  final.scrollIntoView({ behavior: 'smooth' });
});
