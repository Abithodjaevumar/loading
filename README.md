[![Maintainability](https://qlty.sh/gh/Abithodjaevumar/projects/loading/maintainability.svg)](https://qlty.sh/gh/Abithodjaevumar/projects/loading)

# Loading Screen

Минималистичный загрузочный экран (preloader) на **HTML + CSS + JavaScript**.

## Возможности

- Показ прелоадера поверх страницы
- Индикатор загрузки (spinner)
- Прогресс‑бар и проценты
- Текстовые этапы загрузки
- Плавное скрытие прелоадера и показ контента
- Разделение по файлам (`HTML` / `CSS` / `JS`)

## Стек

- **HTML**
- **CSS**
- **JavaScript (Vanilla)**

## Структура проекта

- `index.html` — разметка страницы и прелоадера
- `styles.css` — стили (минималистичный дизайн)
- `preloader.js` — логика прогресса и скрытия прелоадера

## Запуск локально

### Вариант 1: просто открыть файл

Открой `index.html` в браузере.

### Вариант 2: через локальный сервер

Если у тебя установлен любой простой сервер (например, расширение Live Server в VS Code), запусти проект через него.

## Как использовать в своём проекте

1. Добавь HTML‑блок прелоадера (элемент с `id="preloader"`) в начало `body`.
2. Подключи стили:

```html
<link rel="stylesheet" href="./styles.css" />
```

3. Подключи скрипт:

```html
<script src="./preloader.js" defer></script>
```

4. Убедись, что у прогресс‑бара и текста такие же `id`:

- `barFill`
- `percentText`
- `stage`

## Примечания

- Сейчас прогресс — **симуляция** (для демонстрации). При необходимости можно заменить логику в `preloader.js`, чтобы прелоадер скрывался после реальной загрузки данных (`fetch`, `Promise.all`, `window.onload`).

## Лицензия

MIT
