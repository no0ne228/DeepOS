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
    var startArgReadIndex = fullCommand.length + 2;
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
                var output = eval(fullCommand.slice(11));
                $('div.global.screen.terminal.text').append(`<span class="global screen terminal text">${output}</span>`);
                break;
            case 'term.println':
                switch (commandArg) {
                    case '-c':
                        var colorRead = fullCommand.slice(16); //term.println -c #
                        var color = '';
                        for (char of colorRead) {
                            if (!(char === ' ')) {
                                color = colorRead + char;
                            } else {
                                break;
                            }
                        }
                        var output = eval(fullCommand.slice(22));
                        $('div.global.screen.terminal.text').append(`<p class="global screen terminal textc" style="color:${color};">${output}</p>`);
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
                dash$(`term.println 'term.printlnc [hex color] [text] - Displays colored text in a new line'`)
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
