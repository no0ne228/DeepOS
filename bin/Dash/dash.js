// /bin/Dash/dash.js

const dashList = ["term.print", "term.println", "term.printlnc"]

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
    if (dashList.includes(shortCommand)) {
        switch (shortCommand) {
            case 'term.print':
                var output = eval(fullCommand.slice(11));
                $('div.global.screen.terminal.text').append(`<span class="global screen terminal text">${output}</span>`);
                break;
            case 'term.println':
                var output = eval(fullCommand.slice(13));
                $('div.global.screen.terminal.text').append(`<p class="global screen terminal text">${output}</p>`);
                break;
            case 'term.printlnc':
                var color = fullCommand.slice(14, 22);
                var output = eval(fullCommand.slice(22));
                $('div.global.screen.terminal.text').append(`<p class="global screen terminal textc" style="color:${color};">${output}</p>`);
                break;
            default:
                break;
        }
    } else {
        console.error(`[Dash][ReportError] Command '${fullCommand}' wasn't executed: command '${shortCommand}' not found`);
    }
}
