customElements.define('element-details',
  class extends HTMLElement {
    constructor() {
      super();
      var template = document
        .getElementById('element-details-template')
        .content;
      // eslint-disable-next-line no-unused-vars
      const shadowRoot = this.attachShadow({
        mode: 'open'
      })
        .appendChild(template.cloneNode(true));
    }
  });