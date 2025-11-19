/**
 * Переключатель тем (светлая/темная)
 * Сохраняет выбор пользователя и применяет при загрузке
 */

class ThemeSwitcher {
  constructor() {
    this.themeToggle = document.getElementById('themeToggle')
    this.body = document.body
    this.storageKey = 'bestgames-theme'

    // Инициализация
    this.init()
  }

  /**
   * Инициализация переключателя
   */
  init() {
    // Загрузить сохраненную тему или использовать темную по умолчанию
    const savedTheme = localStorage.getItem(this.storageKey) || 'dark'
    this.setTheme(savedTheme)

    // Добавить слушатель события
    if (this.themeToggle) {
      this.themeToggle.addEventListener('click', () => this.toggleTheme())
    }
  }

  /**
   * Переключение темы
   */
  toggleTheme() {
    const currentTheme = this.body.classList.contains('theme-dark')
      ? 'dark'
      : 'light'
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
    this.setTheme(newTheme)
  }

  /**
   * Установить тему
   * @param {string} theme - 'dark' или 'light'
   */
  setTheme(theme) {
    if (theme === 'light') {
      this.body.classList.remove('theme-dark')
      this.body.classList.add('theme-light')
      this.updateThemeIcon('☀️')
    } else {
      this.body.classList.remove('theme-light')
      this.body.classList.add('theme-dark')
      this.updateThemeIcon('🌙')
    }

    // Сохранить выбор в localStorage
    localStorage.setItem(this.storageKey, theme)
  }

  /**
   * Обновить иконку переключателя
   * @param {string} icon - иконка для отображения
   */
  updateThemeIcon(icon) {
    if (this.themeToggle) {
      const iconElement = this.themeToggle.querySelector('.theme-toggle__icon')
      if (iconElement) {
        iconElement.textContent = icon
      }
    }
  }
}

// Инициализировать при загрузке DOM
document.addEventListener('DOMContentLoaded', () => {
  new ThemeSwitcher()
})
