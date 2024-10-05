document.addEventListener('DOMContentLoaded', function () {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slides = document.querySelector('.slides');
    let currentIndex = 0;
    var lastIndex = document.querySelectorAll('.slideHorizontal').length - 1;
  
    prevBtn.style.display = "none"

    function displayButton(){
        if(currentIndex == 0){
            prevBtn.style.display = "none"
        }else{
            prevBtn.style.display = "flex"
        }
        if(currentIndex == lastIndex){
            nextBtn.style.display = "none"
        }else{
            nextBtn.style.display = "flex"
        }
    }

    prevBtn.addEventListener('click', function () {
        slides.style.left = getPercenntage(100);
        currentIndex--
        displayButton()
    });
  
    nextBtn.addEventListener('click', function () {
        slides.style.left = getPercenntage(-100);
        currentIndex++
        displayButton()
    });

    function getPercenntage(add){
        var computedStyle = window.getComputedStyle(slides);
        var leftValue = computedStyle.left;
        var leftInPixels = parseFloat(leftValue);
        var parentWidth = slides.parentElement.offsetWidth;
        var leftInPercentage = (((leftInPixels / parentWidth) * 100) + add) + '%';
        return leftInPercentage;
    }

    slides.addEventListener('wheel', function(event) {
        if (event.deltaY > 0 && currentIndex < lastIndex) {
          currentIndex++;
        } else if (event.deltaY < 0 && currentIndex > 0) {
          currentIndex--;
        }
        var left = currentIndex * -100;
        slides.style.left = `${left}%`;
        displayButton()
    });
  });
  
