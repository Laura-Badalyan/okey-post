let filter = 'clothes';
let animationDuration = 1000
let animationTimeOut = animationDuration / 2
let isMoved = false

class Slider {
   constructor(slider, slides, btnLeft, btnRight, slidesCount) {
      this.slider = document.querySelector(slider)
      this.slides = document.querySelectorAll(slides)
      this.btnLeft = document.querySelectorAll(btnLeft)
      this.btnRight = document.querySelectorAll(btnRight)

      this.slidesCount = slidesCount
      this.maxSlides = this.slides.length
      this.curSlide = 0
      this.isMultiSlide = slidesCount > 1

      // for drag
      this.pressed = false;
      this.startX;
      this.x;
      this.clientX;
   }

   goToSlide(slide) {
      this.slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide)}%)`)
   }
   updateSlidesCount() {
      this.slidesCount = Math.round(this.slider.clientWidth / this.slides[0].clientWidth)
   }
   updateClientX(e) {
      this.clientX = e.clientX ? e.clientX : e.touches[0].clientX
   }
   arrowLeft() {
      this.updateSlidesCount()
      this.curSlide !== 0 ? this.curSlide-- : this.curSlide = this.maxSlides - this.slidesCount
      this.goToSlide(this.curSlide)
   }
   arrowRight() {
      this.updateSlidesCount()
      this.curSlide <= this.maxSlides - this.slidesCount - 1 ? this.curSlide++ : this.curSlide = 0
      this.goToSlide(this.curSlide)
   }
   init() {
      this.goToSlide(this.curSlide)
   }
   // drag events

   checkBoundary() {
      if (this.isMultiSlide) {
         const curSlideNum = Math.ceil(parseInt(this.slider.style.left) / this.slides[0].getBoundingClientRect().width)
         this.updateSlidesCount()
         if (parseInt(this.slider.style.left) > 0) {
            this.curSlide - curSlideNum >= 0 ? this.curSlide -= curSlideNum : this.curSlide = this.maxSlides - this.slidesCount
         } else if (parseInt(this.slider.style.left) < 0) {
            this.curSlide + this.slidesCount + curSlideNum * -1 + 1 <= this.maxSlides ? this.curSlide += curSlideNum * -1 + 1 : this.curSlide = 0
         }
         this.goToSlide(this.curSlide)
      } else {
         if (parseInt(this.slider.style.left) > 0) {
            this.arrowLeft()
         } else if (parseInt(this.slider.style.left) < 0) {
            this.arrowRight()
         }
      }
   }

   dragMouseDown(e) {
      e.preventDefault()
      this.updateClientX(e)
      this.pressed = true;
      this.startX = this.clientX - this.slider.offsetLeft;
      this.slider.style.transition = 'none'
   }
   dragMouseMove(e) {
      e.preventDefault()
      if (!this.pressed) return;
      this.updateClientX(e)
      if (this.isMultiSlide) isMoved = true
      this.x = this.clientX;
      this.slider.style.left = `${this.x - this.startX}px`

   }
   dragMouseUp(e) {
      e.preventDefault()
      if (this.isMultiSlide) {
         if (isMoved) {
            this.checkBoundary()
            this.slider.style.left = '0px'
            this.slider.style.transition = 'all 1s'
         }
      } else {
         this.checkBoundary()
         this.slider.style.left = '0px'
         this.slider.style.transition = 'all 1s'
      }
      this.pressed = false;
   }

   // resize event
   updateSlidesCountResize() {
      if (this.isMultiSlide) {
         this.updateSlidesCount()
         if (this.curSlide > this.maxSlides - this.slidesCount - 1) {
            this.goToSlide(this.maxSlides - this.slidesCount - 1)
         }
      }
   }
}

class ProductSlider extends Slider {
   constructor(slider, slides, btnLeft, btnRight, slidesCount) {
      super(slider, slides, btnLeft, btnRight, slidesCount)

      this.btnImgRight = document.querySelector('.productSlider__footerRightImg')
      this.btnImgLeft = document.querySelector('.productSlider__footerLeftImg')
      this.productSliderFooterImg = document.querySelectorAll('.productSlider__footerImg')
   }
   changeBtnImg(curSlide) {
      const nextSlide = curSlide + 2 > 3 ? 1 : curSlide + 2
      const prevSlide = nextSlide === 3 ? 1 : nextSlide + 1
      this.productSliderFooterImg.forEach(el => {
         this.animFunc(el)
      })
      setTimeout(() => {
         this.btnImgRight.src = `img/${filter}${nextSlide}.png`
         this.btnImgLeft.src = `img/${filter}${prevSlide}.png`
      }, animationTimeOut)
   }
   animFunc(el) {
      const animateProcess = [{
            transform: 'translateY(0%)'
         },
         {
            transform: 'translateY(-150%)'
         },
         {
            transform: 'translateY(0%)'
         },


      ];
      const animationOptions = {
         duration: animationDuration,
         iterations: 1,
      }
      el.animate(animateProcess, animationOptions)
   }
   arrowLeft() {
      super.arrowLeft()
      this.changeBtnImg(this.curSlide)
   }
   arrowRight() {
      super.arrowRight()
      this.changeBtnImg(this.curSlide)
   }
   changeFilter(arr, slide) {
      if (!isMoved) {
         arr.forEach(el => el.classList.remove('categorySlider__slide_active'))
         filter = slide.dataset.filter.toLowerCase()
         document.querySelectorAll(`[data-filter='${filter[0].toUpperCase() + filter.slice(1)}']`).forEach(item => item.classList.add('categorySlider__slide_active'))
         this.changeBtnImg(this.curSlide)
         this.slides.forEach((el, i) => {
            setTimeout(() => el.querySelector('img').src = `img/${filter}${i + 1}.png`, animationTimeOut)
            this.animFunc(el.querySelector('img'))
         })
      }
      isMoved = false
   }

}


export const sliderFunc = function (slider, slides, btnLeft, btnRight, slidesCount) {
   let sliderClass
   if (slidesCount > 1) {
      sliderClass = new Slider(slider, slides, btnLeft, btnRight, slidesCount)
   } else {
      sliderClass = new ProductSlider(slider, slides, btnLeft, btnRight, slidesCount)
   }
   sliderClass.init()
   sliderClass.btnRight.forEach(btn => {
      btn.addEventListener('click', function () {
         sliderClass.arrowRight()
      })
   })
   sliderClass.btnLeft.forEach(btn => {
      btn.addEventListener('click', function () {
         sliderClass.arrowLeft()
      })
   });
   ['mousedown', 'touchstart'].forEach(evt => {
      sliderClass.slider.addEventListener(evt, (e) => {
         sliderClass.dragMouseDown(e)
      })
   });
   ['mousemove', 'touchmove'].forEach(evt => {
      sliderClass.slider.addEventListener(evt, (e) => {
         sliderClass.dragMouseMove(e)
      })
   });
   ['mouseup', 'touchend'].forEach(evt => {
      sliderClass.slider.addEventListener(evt, (e) => {
         sliderClass.dragMouseUp(e)
      })
   });
   window.addEventListener('resize', () => {
      sliderClass.updateSlidesCountResize()
   })
   const categorySliderSlides = document.querySelectorAll('.categorySlider__slide')


   categorySliderSlides.forEach((el, _, arr) => {
      !sliderClass.isMultiSlide && sliderClass.changeFilter(arr, arr[0])
      el.addEventListener('click', () => {
         !sliderClass.isMultiSlide && sliderClass.changeFilter(arr, el)
      })
   })
}