class WordCount extends HTMLParagraphElement {
  constructor() {
    super()
    const wcParent = this.parentNode;

    function countWords(node) {
      const text = node.innerText || node.textContent;
      return text.split(/\s+/g).length;
    }

    const count = `Words: ${countWords(this.wcParent)}`;

    // Create a shadow root
    const shadow = this.attachShadow({
      mode: 'open'
    });

    // Create text node and add word count to it
    const text = document.createElement('span');
    text.textContent = count;

    // Append it to the shadow root
    shadow.appendChild(text);

  }
  connectedCallback() {
    // Update count when element content changes
    setInterval(function () {
      const count = `Words: ${this.countWords(wcParent)}`;
      this.text.textContent = count;
    }, 200);
  }
}
customElements.define('word-count', WordCount, {
  extends: 'p'
});