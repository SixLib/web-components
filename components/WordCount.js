// Create a class for the element
class WordCount extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    var shadow = this.attachShadow({
      mode: 'open'
    })
    var wrapper = document.createElement('div')
    wrapper.setAttribute('class', 'wrapper')
    wrapper.textContent = this.getAttribute('text')
    shadow.appendChild(wrapper)
  }
  connectedCallback() {
    console.log('Custom square element added to page.');
  }
}

// Define the new element
customElements.define('word-count', WordCount);