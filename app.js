const body = document.body;
const darkMode = localStorage.getItem('darkMode');
const elDarkToggleButton = document.querySelector('.dark-toggle-button');
const elFiltersSelect = document.querySelector('.filters-region-select');
const elFiltersIcon = document.querySelector('.filters-region-icon');

// LOCALSTORAGE
document.addEventListener('DOMContentLoaded', function() {
    elDarkToggleButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});

// FOCUS EVENT UCHUN LISTENER
elFiltersSelect.addEventListener('focus', function () {
    elFiltersIcon.classList.add('filters-icon-rotate');
});

// BLUR EVENT UCHUN LISTENER (FOCUS HOLATIDAN CHIQQANDA)
elFiltersSelect.addEventListener('blur', function () {
    elFiltersIcon.classList.remove('filters-icon-rotate');
});

// CHANGE EVENT UCHUN LISTENER (OPTION TANLANGANDA)
elFiltersSelect.addEventListener('change', function () {
    elFiltersIcon.classList.remove('filters-icon-rotate');
});