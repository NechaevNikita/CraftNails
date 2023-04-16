window.onload = function() {
  let current_slide = 1
  let next_slide = 2
  let slides_amount = document.getElementsByClassName('slide').length

  document.querySelector('.next-wrapper').onclick = function() {
    if (current_slide === slides_amount) {
      current_slide = 1
    } else {
      current_slide += 1
    }

    if (next_slide === slides_amount) {
      next_slide = 1
    } else {
      next_slide += 1
    }

    document.querySelector('.slide-wrapper .slide.active').classList.remove('active')
    document.getElementsByClassName('slide')[current_slide - 1].classList.add('active')

    document.querySelector('.dots .dot.active').classList.remove('active')
    document.getElementsByClassName('dot')[current_slide - 1].classList.add('active')

    document.querySelector('.next-wrapper .next-slide.active').classList.remove('active')
    document.getElementsByClassName('next-slide')[next_slide - 1].classList.add('active')

    document.querySelector('.subtitle-wrapper .subtitle.active').classList.remove('active')
    document.getElementsByClassName('subtitle')[next_slide - 1].classList.add('active')
  }
}
