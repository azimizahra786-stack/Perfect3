
  // بستن منو بعد از کلیک روی هر لینک
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('menu-toggle').checked = false;
    });
  });
