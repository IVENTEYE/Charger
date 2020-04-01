let rating = document.querySelector('.users-info__stars');
let ratingItem = document.querySelectorAll('.info__stars');

rating.addEventListener('click', (e) => {
  let target = e.target;
  if (target.classList.contains('info__stars')) {
    removeClass(ratingItem, 'current-active');
    target.classList.add('active', 'current-active');
  }
});

rating.addEventListener("mouseover", (e) => {
  let target = e.target;
  if (target.classList.contains('info__stars')) {
    removeClass(ratingItem, 'active');
    target.classList.add('active');
    mousOverActiveClass(ratingItem);
  }
});

rating.addEventListener('mouseout', () => {
  addClass(ratingItem, 'active');
  mousOutActiveClass(ratingItem);
});

function removeClass(arr) {
  for (let i = 0, iLen = arr.length; i < iLen; i++) {
    for (let j = 1; j < arguments.length; j++) {
      ratingItem[i].classList.remove(arguments[j]);
    }
  }
}

function addClass(arr) {
  for (let i = 0, iLen = arr.length; i < iLen; i++) {
    for (let j = 1; j < arguments.length; j++) {
      ratingItem[i].classList.add(arguments[j]);
    }
  }
}

function mousOverActiveClass(arr) {
  for (let i = 0, iLen = arr.length; i < iLen; i++) {
    if(arr[i].classList.contains('active')) {
      break;
    } else {
      arr[i].classList.add('active');
    }
  }
}

function mousOutActiveClass(arr) {
  for (let i = arr.length-1; i >= 1; i--) {
    if (arr[i].classList.contains('current-active')) {
      break;
    } else {
      arr[i].classList.remove('active');
    }
  }
}

new WOW().init();

function ibg() {
    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector("img")) {
        ibg[i].style.backgroundImage =
          "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
      }
    }
  }
  
  ibg();