window.addEventListener('scroll', function() {
  let infosBoxLeft = document.getElementById('infos-box-left');
  let boxLeftH1 = document.getElementById('hidden-element-left');
  let infosBoxRight = document.getElementById('infos-box-right');
  let boxRightH1 = document.getElementById('hidden-element-right');
  let limiteSuperirorLeft = infosBoxLeft.getBoundingClientRect().top;
  let limiteSuperirorRight = infosBoxRight.getBoundingClientRect().top;
  
  if (limiteSuperirorLeft < window.innerHeight) {
    infosBoxLeft.classList.add('mostrar');
    boxLeftH1.classList.add('hidden-element-h1');
    boxLeftH1.style.display = 'block';
  } else {
    infosBoxLeft.classList.remove('mostrar');
    boxLeftH1.classList.remove('hidden-element-h1');
    boxLeftH1.style.display = 'none';
  }
  if (limiteSuperirorRight + 200 < window.innerHeight) {
    infosBoxRight.classList.add('mostrar');
    boxRightH1.classList.add('hidden-element-h1');
    boxRightH1.style.display = 'block';
  } else {
    infosBoxRight.classList.remove('mostrar');
    boxRightH1.classList.remove('hidden-element-h1');
    boxRightH1.style.display = 'none';
  }
});