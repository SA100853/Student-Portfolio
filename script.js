// Hamburger menu toggle
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('show');
});

// Theme switcher
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const icon = document.getElementById('theme-icon');
  icon.textContent = document.body.classList.contains('dark') ? '☀' : '🌙';
});