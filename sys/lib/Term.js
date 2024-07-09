/*
 * Copyright 2023 KolibriKing
 */

///sys/lib/Term.js

import { fs } from '/sys/lib/fs.js';

export const Term = {
  create: function(holder) {
    GLOBAL_STDIO_TERM = 'div#term';
    GLOBAL_STDIO_TERM_TEXT = `${holder}_text`;
    console.log('Initialized terminal at ' + holder);
  },
  exists: function() {
    if (GLOBAL_STDIO_TERM != '' && GLOBAL_STD_TERM_TEXT != '') {
      return true;
    } else {
      return false;
    }
  },
  getPrompt: function(callback) {
    callback(eval('`' + GLOBAL_USER_PROMPT + '`'));
  }
}
