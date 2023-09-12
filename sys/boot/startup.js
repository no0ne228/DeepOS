// This is executed on startup

if (BootType === 'terminal') {
    dash$(`import 'sys/version.js'`)
    dash$('term.println version.fullHeader');
    // Load utils
    dash$('import `bin/Dash/StringToArray.js`');
    // Fix 'Dash-term-report-import'
    GLOBAL_TERM_LASTCMD = '';
}
