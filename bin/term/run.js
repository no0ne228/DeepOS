// Boot into terminal session
// Create terminal elements
$('div.global.screen').append('<div class="global screen terminal container"></div>');
$('div.global.screen.terminal.container').append('<div class="global screen terminal text"></div>');
$('div.global.screen.terminal.container').append(`<span class="global screen terminal c"><span class="global screen terminal ip">ip</span>:<span class="global screen terminal dir">/</span>:</span>`);
$.getJSON("https://api.ipify.org?format=json", function(data) {
    $('span.global.screen.terminal.ip').html(data.ip);
});
$('div.global.screen.terminal.container').append('<input class="global screen terminal">');
// Focus on input field
$('input.global.screen.terminal').focus();
// Detect when keys pressed
$('input.global.screen.terminal').keyup(function (e){
        $(this).attr('size', $(this).val().length);
        // Detect if enter pressed
        if(e.keyCode == 13){
        // Execute command from input
        dash$(document.querySelector('input.global.screen.terminal').value);
        $('input.global.screen.terminal').val('');
        }
});
// Detect when mouse pressed
$(document).click(function(e) {
        if (e.button == 0) {
        // Focus on input to prevent bug
        $('input.global.screen.terminal').focus();
        }
});
$('body').append('<script src="sys/boot/startup.js"></script>');
