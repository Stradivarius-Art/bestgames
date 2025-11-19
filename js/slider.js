/**
 * Слайдер новинок
 * Автоматическое переключение слайдов с возможностью ручного управления
 */

class GameSlider {
  constructor() {
    this.slider = document.getElementById('slider')
    this.slides = this.slider
      ? this.slider.querySelectorAll('.slider__item')
      : []
    this.indicators = document.querySelectorAll('.slider__indicator')
    this.prevBtn = document.getElementById('sliderPrev')
    this.nextBtn = document.getElementById('sliderNext')

    this.currentSlide = 0
    this.slideCount = this.slides.length
    this.autoSlideInterval = null
    this.autoSlideDuration = 5000 // 5 секунд

    this.init()
  }

  /**
   * Инициализация слайдера
   */
  init() {
    if (this.slideCount === 0) return

    // Добавить слушатели к кнопкам навигации
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.prevSlide())
    }
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.nextSlide())
    }

    // Добавить слушатели к индикаторам
    this.indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => this.goToSlide(index))
    })

    // Запустить автоматическое переключение
    this.startAutoSlide()

    // Остановить при наведении
    if (this.slider) {
      this.slider.addEventListener('mouseenter', () => this.stopAutoSlide())
      this.slider.addEventListener('mouseleave', () => this.startAutoSlide())
    }
  }

  /**
   * Показать следующий слайд
   */
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slideCount
    this.updateSlider()
  }

  /**
   * Показать предыдущий слайд
   */
  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.slideCount) % this.slideCount
    this.updateSlider()
  }

  /**
   * Перейти к конкретному слайду
   */
  goToSlide(index) {
    this.currentSlide = index
    this.updateSlider()
    // Перезапустить автоматическое переключение
    this.stopAutoSlide()
    this.startAutoSlide()
  }

  /**
   * Обновить состояние слайдера
   */
  updateSlider() {
    // Обновить видимость слайдов
    this.slides.forEach((slide, index) => {
      if (index === this.currentSlide) {
        slide.classList.add('slider__item--active')
      } else {
        slide.classList.remove('slider__item--active')
      }
    })

    // Обновить индикаторы
    this.indicators.forEach((indicator, index) => {
      if (index === this.currentSlide) {
        indicator.classList.add('slider__indicator--active')
      } else {
        indicator.classList.remove('slider__indicator--active')
      }
    })

    console.log(`Слайдер: ${this.currentSlide + 1}/${this.slideCount}`)
  }

  /**
   * Запустить автоматическое переключение
   */
  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide()
    }, this.autoSlideDuration)
  }

  /**
   * Остановить автоматическое переключение
   */
  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval)
    }
  }
}

// Инициализировать при загрузке DOM
document.addEventListener('DOMContentLoaded', () => {
  new GameSlider()
})
