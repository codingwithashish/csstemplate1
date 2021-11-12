$(document).ready(function(){
        $('.hamburger-menu').click(function(){
            $(this).toggleClass('menu-open');
            $('.main-header').toggleClass('responsive-menu');
        });
});