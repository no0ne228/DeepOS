// This is executed on startup

if (BootType === 'terminal') {
    dash$(`exscript 'sys/version.js'`)
    dash$('term.println version.fullHeader');
}
