///sys/lib/Term.js

class Term {
  constructor(holder) {
    localStorage.setItem('DeepOS.Term', holder);
    console.log('Initialized terminal at ' + holder);
  }
  delete(term, deleteElement) {
    if (delteElement) {
      document.querySelector(term).remove();
    }
    localStorage.removeItem('DeepOS.Term');
  },
  clear() {}
}