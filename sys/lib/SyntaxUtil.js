/*
 * /sys/SyntaxUtil.js
 *
 * DeepOS internal library to write less code
 */

class SyntaxUtil {
  constructor() {}
  shortif(stat, ifTrue, ifElse) {
    if (stat) {
      return ifTrue;
    } else {
      if (!(typeof ifElse === 'null') && !(typeof ifElse === 'undefined')) {
        return ifElse;
      }
    }
  }
}