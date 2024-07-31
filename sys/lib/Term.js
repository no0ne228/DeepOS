/*
 * Copyright 2024 KolibriKing
 */

///sys/lib/Term.js

export const Term = {
  create: function(holder) {
    window.GLOBAL_STDIO_TERM = 'div#term';
    window.GLOBAL_STDIO_TERM_TEXT = `${holder}_text`;
    console.log('Initialized terminal at ' + holder);
  },
  exists: function() {
    if (window.GLOBAL_STDIO_TERM != '' && window.GLOBAL_STD_TERM_TEXT != '') {
      return true;
    } else {
      return false;
    }
  },
  getPrompt: function(callback) {
    callback(eval('`' + window.GLOBAL_USER_PROMPT + '`'));
  }
}
