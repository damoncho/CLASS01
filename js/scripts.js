document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('section').forEach(section => {
    const listCount = section.querySelectorAll('.list-container a').length;
    const listCountSpan = section.querySelector('.list-count');

    if (listCountSpan) {
      listCountSpan.textContent = `(${listCount})`;
    }
  });

  document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
      const listContainer = button.parentElement.nextElementSibling;
      listContainer.classList.toggle('hidden');

      if (listContainer.classList.contains('hidden')) {
        button.textContent = '펼치기';
      } else {
        button.textContent = '접기';
      }
    });
  });

  document.querySelectorAll('a:not(.header-title):not(.header-nav):not(.title-container a)').forEach(element => {
    element.classList.add('card-class');
  });
});

function toggleSection(element) {
  const button = element.nextElementSibling;

  if (button) {
    button.click();
  }
}
