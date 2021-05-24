$(() => {
    'use strict';
    $('.toggle-sidebar').on('click', () => {
        $('.content-area, .sidebar').toggleClass('no-sidebar');
    });
});