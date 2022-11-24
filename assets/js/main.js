$(document).ready(function() {
    $('.openBox').on('click', function() {
        let elem = $(this).data('target')
        $(`.title-${elem}`).removeClass('animate__animated')
        $(`#${elem}`).addClass('show')
    })
    $('#pagepiling').pagepiling({
        direction: 'horizontal',
        sectionsColor: ['#ffffff', '#ffffff', '#ffffff'],
        verticalCentered: false,
        navigation: false
    });
})