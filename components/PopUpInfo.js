class PopUpInfo extends HTMLElement {
  constructor() {
    super();
    var shadow = this.attachShadow({
      mode: 'open'
    });
    var wrapper = document.createElement('span');
    wrapper.setAttribute('class', 'wrapper');
    var text = this.hasAttribute('data-context') ? this.getAttribute('data-context') : '';
    wrapper.textContent = text;
    var style = document.createElement('style');
    style.textContent = `span{
      color:red;
    }`;
    shadow.appendChild(wrapper);
    wrapper.appendChild(style);
  }
}
customElements.define('popup-info', PopUpInfo);