///sys/lib/Term.js

export const Term = {
  create: function(holder) {
    localStorage.setItem('DeepOS.Term', holder);
    console.log('Initialized terminal at ' + holder);
  },
  exists: function() {
    if ('DeepOS.Term' in localStorage) {
      return true;
    } else {
      return false;
    }
  }
}