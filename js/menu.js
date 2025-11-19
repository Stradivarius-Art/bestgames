/**
 * Мобильное меню (бургер)
 * Открытие/закрытие меню на мобильных устройствах
 */

class MobileMenu {
  constructor() {
    this.burger = document.getElementById('burgerBtn')
    this.nav = document.getElementById('navMenu')
    this.navLinks = this.nav ? this.nav.querySelectorAll('.nav__link') : []

    this.init()
  }

  /**
   * Инициализация мобильного меню
   */
  init() {
    if (this.burger) {
      this.burger.addEventListener('click', () => this.toggleMenu())
    }

    // Закрыть меню при клике на ссылку
    this.navLinks.forEach(link => {
      link.addEventListener('click', () => this.closeMenu())
    })

    // Закрыть меню при клике вне его
    document.addEventListener('click', e => this.handleOutsideClick(e))
  }

  /**
   * Переключить меню
   */
  toggleMenu() {
    if (this.burger && this.nav) {
      this.burger.classList.toggle('active')
      this.nav.classList.toggle('active')
    }
  }

  /**
   * Закрыть меню
   */
  closeMenu() {
    if (this.burger && this.nav) {
      this.burger.classList.remove('active')
      this.nav.classList.remove('active')
    }
  }

  /**
   * Закрыть меню при клике вне
   */
  handleOutsideClick(e) {
    if (this.burger && this.nav) {
      if (!this.burger.contains(e.target) && !this.nav.contains(e.target)) {
        this.closeMenu()
      }
    }
  }
}

// Инициализировать при загрузке DOM
document.addEventListener('DOMContentLoaded', () => {
  new MobileMenu()
})
