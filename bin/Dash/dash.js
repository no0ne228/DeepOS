// /bin/Dash/dash.js

const dashList = ["term.print", "term.println", "term.printlnc", "help", "exscript"]

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
    // Get argument
    var startArgReadIndex = shortCommand.length + 2;
    argReadString = fullCommand.slice(startArgReadIndex);
    var commandArg = '';
    for (char of argReadString) {
        if (!(char === ' ')) {
            commandArg = commandArg + char;
        } else {
            break;
        }
    }
    if (dashList.includes(shortCommand)) {
        switch (shortCommand) {
            case 'term.print':
                switch (commandArg) {
                    case 'c':
                        var output = eval(fullCommand.slice(21));
                        var color = fullCommand.slice(13, 19);
                        $('div.global.screen.terminal.text').append(`<span class="global screen terminal text cr" style="color:${color};">${output}</span>`);
                        break;
                    default:
                        var output = eval(fullCommand.slice(11));
                        $('div.global.screen.terminal.text').append(`<span class="global screen terminal text">${output}</span>`);
                        break;
                }
                break;
            case 'term.println':
                switch (commandArg) {
                    case 'c':
                        var output = eval(fullCommand.slice(24));
                        var color = fullCommand.slice(15, 21);
                        $('div.global.screen.terminal.text').append(`<p class="global screen terminal text cr" style="color:${color};">${output}</p>`);
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
                dash$(`term.println 'term.print [text]- Displays text'`);
                dash$(`term.println 'term.println [text] - Displays text in a new line'`);
                dash$(`term.println 'term.printlnc [hex color] [text] - Displays colored text in a new line'`);
                break;
            case 'exscript':
                var link = eval(fullCommand.slice(9));
                $('body').append(`<script src="${link}"></script>`);
                break;
            default:
                break;
        }
    } else {
        console.error(`[Dash][ReportError] Command '${fullCommand}' wasn't executed: command '${shortCommand}' not found`);
    }
}
