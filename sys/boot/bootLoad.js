// /sys/boot/bootLoad.js

// Detect boot type
var BootType = 'n';
//This used to print time after message in console
let Time = new Date();

if ('DeepOS.BootType' in localStorage) {
    BootType = localStorage.getItem('DeepOS.BootType');
    console.info(`[DeepOS][bootDetect.js][Info] BootType detected, sending ...[${Time.getTime()}]`);
} else {
    console.info(`[DeepOS][bootDetect.js][Info] BootType not detected, setting up BootType [${Time.getTime()}]`);
    localStorage.setItem('DeepOS.BootType', 'terminal');
    BootType = 'terminal';
}
// The main boot process
$(document).ready(function() {
    // Check boot type
    if (BootType = 'terminal') {
        // Boot into terminal session
        // Create terminal elements
        $('div.global.screen').append('<div class="global screen terminal container"></div>');
        $('div.global.screen.terminal.container').append('<div class="global screen terminal text"></div>');
        $('div.global.screen.terminal.container').append('<input class="div global screen terminal">');
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
        $('body').append('<script src="sys/boot/startup.js"></script>')
    }
});
