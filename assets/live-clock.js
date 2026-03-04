(() => {
  const format = (value) => String(value).padStart(2, '0');

  const tick = () => {
    const now = new Date();
    const time = `${format(now.getHours())}:${format(now.getMinutes())}:${format(now.getSeconds())}`;
    document.querySelectorAll('[data-live-clock]').forEach((node) => {
      node.textContent = time;
    });
  };

  tick();
  setInterval(tick, 1000);
})();
