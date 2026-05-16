   // Theme Toggle Logic
    const themeBtn = document.getElementById('themeToggle');
    const htmlEl = document.documentElement;

    themeBtn.addEventListener('click', () => {
      const currentTheme = htmlEl.getAttribute('data-theme');
      if (currentTheme === 'light') {
        htmlEl.setAttribute('data-theme', 'dark');
      } else {
        htmlEl.setAttribute('data-theme', 'light');
      }
    });