$(function () {
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        blockId = $(this).data('scroll');
        blockOffset = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset - 50
        }, 700);

    });

    $(document).ready(function () {
        $('#changeColorButton').click(function () {
            var randomColor = getRandomColor();
            $('body').css('background-color', randomColor);
        });

        // Обработчик нажатия на кнопку сброса цвета
        $('#resetColorButton').click(function () {
            // Сброс цвета фона
            $('body').css('background-color', '');
        });
        // Функция, изменяющая цвет абзаца
        $('#colorChange').click(function () {
            // Генерация случайного цвета
            var randomColor = getRandomColor();
            // Установка цвета абзаца
            $(this).css('color', randomColor);
        });

        // Функция для генерации случайного цвета
        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
    });  

});
