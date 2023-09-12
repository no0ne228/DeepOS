// /bin/Dash/dash.js

const dashList = ["term.print", "term.println", "help", "import"]

function dash$(fullCommand) {
    // Get short command
    var shortCommand = '';
    for (char of fullCommand) {
        if (!(char === ' ')) {
            shortCommand = shortCommand + char;
        } else {
            break;
        }
    }
    console.log(`Executing ${shortCommand} (${fullCommand})`);
    // Get command array
    var cmdArray = '';
    try {
        cmdArray = StringToArray(shortCommand);
    } catch (e) {
        console.error(`StringToArray function failed: ${e}`);
    }
    var commandArg = '';
    // Get argument
    if (cmdArray.includes('-')) {
        var startArgReadIndex = shortCommand.length + 1;
        argReadString = fullCommand.slice(startArgReadIndex);
        commandArg = '';
        var hasArg = true;
        for (char of argReadString) {
            if (char === "'" || char === '"' || char === "`") {
                commandArg = '';
                break;
            }
            if (!(char === ' ')) {
                commandArg = commandArg + char;
            } else {
                break;
            }
        }
    }
    if (dashList.includes(shortCommand)) {
        switch (shortCommand) {
            case 'term.print':
                console.log(`Switching argument ${commandArg}`)
                switch (commandArg) {
                    case 'c':
                        var output = eval(fullCommand.slice(21));
                        var color = fullCommand.slice(13, 19);
                        $('div.global.screen.terminal.text').append(`<span class="global screen terminal text cr" style="color:${color};">${output}</span>`);
                        break;
                    case 'b':
                        var output = eval(fullCommand.slice(21));
                        var color = fullCommand.slice(13, 19);
                        $('div.global.screen.terminal.text').append(`<p class="global screen terminal text cr" style="background-color:${color};">${output}</p>`);
                        break;
                    default:
                        var output = eval(fullCommand.slice(11));
                        $('div.global.screen.terminal.text').append(`<span class="global screen terminal text">${output}</span>`);
                        break;
                }
                break;
            case 'term.println':
                console.log(`Switching argument ${commandArg}`);
                switch (commandArg) {
                    case 'c':
                        var output = eval(fullCommand.slice(24));
                        var color = fullCommand.slice(15, 21);
                        $('div.global.screen.terminal.text').append(`<p class="global screen terminal text cr" style="color:${color};">${output}</p>`);
                        break;
                    case 'b':
                        var output = eval(fullCommand.slice(24));
                        var color = fullCommand.slice(15, 21);
                        $('div.global.screen.terminal.text').append(`<p class="global screen terminal text cr" style="background-color:${color};">${output}</p>`);
                        break;
                    default:
                        var output = eval(fullCommand.slice(13));
                        $('div.global.screen.terminal.text').append(`<p class="global screen terminal text">${output}</p>`);
                        break;
                }
                break;
            case 'help':
                dash$(`term.println 'List of avalible commands: (4 total)'`);
                dash$(`term.println ''`);
                dash$(`term.println 'help - Displays this help message'`);
                dash$(`term.println 'term.print [text] - Displays text'`);
                //dash$(`term.println 'term.print -c [hex color] [text] - Displays colored text'`);
                //dash$(`term.println 'term.print -b [hex color] [text] - Displays text on colored background'`);
                dash$(`term.println 'term.println [text] - Displays text in a new line'`);
                //dash$(`term.println 'term.println -c [hex color] [text] - Displays colored text in a new line'`);
                //dash$(`term.println 'term.println -b [hex color] [text] - Displays text on colored background in a new line'`);
                dash$(`term.println 'import [dir from root]'`);
                break;
            case 'import':
                var link = eval(fullCommand.slice(6));
                $('body').append(`<script src="${link}"></script>`);
                break;
            case 'list':
                if (fullCommand.length > 4) {
                    dir = fullCommand.slice(5);
                } else {
                    for (let i in localStorage) {
                        
                    }
                }
                break;
            default:
                break;
        }
    } else {
        // Record wrong command
        GLOBAL_TERM_LASTCMD = shortCommand;
        // Warn about that command
        dash$('term.println `Dash: command ${GLOBAL_TERM_LASTCMD} not found`');
        console.error(`[Dash][ReportError] Command '${fullCommand}' wasn't executed: command '${shortCommand}' not found`);
    }
}