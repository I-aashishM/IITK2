$(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $(this).toggleClass('active');
                $('#sidebar').toggleClass('active');
                $('.wrapper').toggleClass('active');
                   
            });
        });