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

        // ���������� ������� �� ������ ������ �����
        $('#resetColorButton').click(function () {
            // ����� ����� ����
            $('body').css('background-color', '');
        });
        // �������, ���������� ���� ������
        $('#colorChange').click(function () {
            // ��������� ���������� �����
            var randomColor = getRandomColor();
            // ��������� ����� ������
            $(this).css('color', randomColor);
        });

        // ������� ��� ��������� ���������� �����
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
