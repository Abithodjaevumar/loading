(function () {
  const preloader = document.getElementById('preloader');
  const app = document.getElementById('app');
  const barFill = document.getElementById('barFill');
  const percentText = document.getElementById('percentText');
  const stage = document.getElementById('stage');

  if (!preloader || !app || !barFill || !percentText || !stage) return;

  const stages = [
    { at: 10, text: 'Подготавливаем интерфейс' },
    { at: 35, text: 'Загружаем ресурсы' },
    { at: 65, text: 'Почти готово' },
    { at: 90, text: 'Финальные штрихи' }
  ];

  let p = 0;
  let stageIndex = 0;

  const timer = setInterval(() => {
    const inc = Math.random() * 9 + 3;
    p = Math.min(100, Math.round(p + inc));

    barFill.style.width = p + '%';
    percentText.textContent = p + '%';

    if (stageIndex < stages.length && p >= stages[stageIndex].at) {
      stage.textContent = stages[stageIndex].text;
      stageIndex++;
    }

    if (p >= 100) {
      clearInterval(timer);

      preloader.classList.add('hidden');
      preloader.setAttribute('aria-busy', 'false');

      app.classList.add('ready');
    }
  }, 180);
})();
