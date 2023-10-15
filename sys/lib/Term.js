///sys/lib/Term.js

class Term {
  constructor(holder) {
    localStorage.setItem('DeepOS.Term', holder);
    localStorage.setItem('DeepOS.TermObj', JSON.stringify(this));
    console.log('Initialized terminal at ' + holder);
    console.log(this);
  }
  delete(term, deleteElement) {
    if (delteElement) {
      document.querySelector(term).remove();
    }
    localStorage.removeItem('DeepOS.Term');
  }
  clear() {}
}