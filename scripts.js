document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('section').forEach(section => {
        const listCount = section.querySelectorAll('.list-container a').length;
        const listCountSpan = section.querySelector('.list-count');
        if (listCountSpan) listCountSpan.textContent = `(${listCount})`;
    });

    document.querySelectorAll('.toggle-button').forEach(button => {
        button.addEventListener('click', () => {
            const listContainer = button.parentElement.nextElementSibling;
            listContainer.classList.toggle('hidden');
            button.textContent = listContainer.classList.contains('hidden') ? '펼치기' : '접기';
        });
    });

    document.querySelectorAll('a').forEach(element => element.classList.add('common-class'));
});