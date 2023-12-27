/*
 * Copyright 2023 KolibriKing
 */

///sys/lib/Term.js

export const Term = {
  create: function(holder) {
    GLOBAL_STD_TERM = 'div#term';
    GLOBAL_STD_TERM_TEXT = `${holder}_text`;
    console.log('Initialized terminal at ' + holder);
  },
  exists: function() {
    if (GLOBAL_STD_TERM != '' && GLOBAL_STD_TERM_TEXT != '') {
      return true;
    } else {
      return false;
    }
  }
}
