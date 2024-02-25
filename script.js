window.addEventListener('load', () => {
  const currentYear = new Date().getFullYear();

  const setYears = () => {
    const el = document.getElementById('years');
    const years = currentYear - 2010;
    el.innerHTML = years;
  }

  const setCopyrightYears = () => {
    const el = document.getElementById('cp-range');
    const range = currentYear === 2024 ? '2024' : `2024-${currentYear}`;
    el.innerHTML = range;
  }

  setYears();
  setCopyrightYears();
})
