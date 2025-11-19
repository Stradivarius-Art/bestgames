/**
 * Главный скрипт BestGames
 * Общая функциональность и инициализация
 */

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  console.log('BestGames загружен')

  // Инициализировать поиск
  initSearch()
})

/**
 * Инициализировать функцию поиска
 */
function initSearch() {
  const searchInput = document.getElementById('genreSearch')

  if (searchInput) {
    searchInput.addEventListener('keypress', e => {
      if (e.key === 'Enter') {
        performSearch(searchInput.value)
      }
    })
  }
}

/**
 * Выполнить поиск
 * @param {string} query - запрос поиска
 */
function performSearch(query) {
  if (!query.trim()) {
    alert('Пожалуйста, введите жанр для поиска')
    return
  }

  // Перенаправить в каталог с параметром поиска
  window.location.href = `catalog.html?genre=${encodeURIComponent(query)}`
}

/**
 * Плавная прокрутка к якорям
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  })
})

/**
 * Формат цены
 * @param {number} price - цена
 * @returns {string} отформатированная цена
 */
function formatPrice(price) {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
  }).format(price)
}

/**
 * Проверить, авторизован ли пользователь
 * @returns {boolean}
 */
function isUserLoggedIn() {
  return localStorage.getItem('bestgames-user') !== null
}

/**
 * Получить информацию о пользователе
 * @returns {object|null}
 */
function getUserInfo() {
  const userJson = localStorage.getItem('bestgames-user')
  return userJson ? JSON.parse(userJson) : null
}

/**
 * Сохранить информацию о пользователе
 * @param {object} userInfo - информация о пользователе
 */
function setUserInfo(userInfo) {
  localStorage.setItem('bestgames-user', JSON.stringify(userInfo))
}

/**
 * Удалить информацию о пользователе (выход)
 */
function clearUserInfo() {
  localStorage.removeItem('bestgames-user')
}

// Глобальные функции для использования в HTML
window.formatPrice = formatPrice
window.isUserLoggedIn = isUserLoggedIn
window.getUserInfo = getUserInfo
window.setUserInfo = setUserInfo
window.clearUserInfo = clearUserInfo
