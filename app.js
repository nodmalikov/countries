const body = document.body;
const darkMode = localStorage.getItem('darkMode');
const elDarkToggleButton = document.querySelector('.dark-toggle-button');
const elFiltersSelect = document.querySelector('.filters-region-select');
const elFiltersIcon = document.querySelector('.filters-region-icon');
const elHeader = document.querySelector('.site-header');
const elMainContent = document.querySelector('.main-content');

// LOCALSTORAGE
document.addEventListener('DOMContentLoaded', function() {
    // SAQLANGAN DARK MODE HOLATINI TEKSHIRISH
    if (darkMode === 'enabled') {
        body.classList.add('dark-mode');
    }
    
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

// SCROLL
window.onscroll = function() {
    const offset = elHeader.offsetHeight;
    if (window.scrollY > offset - 20) {
        elHeader.classList.add('header-border');
    } else if (window.scrollY < offset - 20) {
        elHeader.classList.remove('header-border');
    }
}

// FUNCTION TO UPDATE MAIN CONTENT'S MARGIN-TOP BASED ON HEADER'S HEIGHT
function updateMainContentMargin() {
    const headerHeight = elHeader.offsetHeight;
    elMainContent.style.marginTop = `${headerHeight}px`;
}

// UPDATE MAIN CONTENT'S MARGIN INITIALLY
updateMainContentMargin();

// OPTIONAL: UPDATE MAIN CONTENT'S MARGIN IF THE HEADER'S HEIGHT CHANGES DYNAMICALLY
new ResizeObserver(updateMainContentMargin).observe(elHeader);
