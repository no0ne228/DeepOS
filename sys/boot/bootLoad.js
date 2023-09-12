// /sys/boot/bootLoad.js

// Kernel (32) (non-graphical)
$('body').append('<script src="sys/krnl32/var.js"></script>');

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
    if (BootType === 'terminal') {
        $('body').append('<script src="bin/term/run.js"></script>');
    }
});
