class LifeCycleCallbacks extends HTMLElement {
  static get observedAttributes() {
    return ['c', 'l'];
  }
  constructor() {
    super();
    const shadow = this.attachShadow({
      mode: 'open'
    });

    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'wrapper');

    const buttonGroup = document.createElement('div');
    buttonGroup.setAttribute('class', 'buttonGroup');
    const addBtn = document.createElement('button');
    const updateBtn = document.createElement('button');
    const removeBtn = document.createElement('button');


    addBtn.setAttribute('class', 'add');
    addBtn.textContent = 'Add';

    updateBtn.setAttribute('class', 'update');
    updateBtn.textContent = 'Update';

    removeBtn.setAttribute('class', 'remove');
    removeBtn.textContent = 'Remove';


    const styleEle = document.createElement('style');



    shadow.appendChild(styleEle);
    shadow.appendChild(wrapper);
    wrapper.appendChild(buttonGroup);
    buttonGroup.appendChild(addBtn);
    buttonGroup.appendChild(updateBtn);
    buttonGroup.appendChild(removeBtn);

  }
  connectedCallback() {
    console.log('首次被插入文档DOM时被调用！');
  }
  disconnectedCallback() {
    console.log('从文档DOM中删除时被调用！');
  }
  adoptedCallback() {
    console.log('被移动到新文档时被调用！');
  }
  // eslint-disable-next-line no-unused-vars
  attributeChangedCallback(name, oldValue, newValue) {
    console.log('增加、修改、删除自身属性时被调用！');
    updateStyle(this);

  }
}
customElements.define('life-cycle-callbacks', LifeCycleCallbacks);
let lccEle;

function updateStyle(elem) {
  const shadow = elem.shadowRoot;
  shadow.querySelector('style').textContent = `
    .wrapper{
      border: 0.01rem solid ${elem.getAttribute('c')};
      padding:1rem;
      width: ${elem.getAttribute('l')}px;
      height: ${elem.getAttribute('l')}px;

    }
    .buttonGroup>button{
      margin:auto 0.2rem
    }
    `;
}
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
// eslint-disable-next-line no-unused-vars
const LifeCycleCallbacksAdd = (querySelector) => {
  lccEle = document.createElement('life-cycle-callbacks');
  lccEle.setAttribute('l', 100);
  lccEle.setAttribute('c', 'red');

  document.querySelector(querySelector).appendChild(lccEle);
};
// eslint-disable-next-line no-unused-vars
const LifeCycleCallbacksUpdate = (querySelector) => {
  lccEle.setAttribute('l', random(50, 200));
  lccEle.setAttribute('c', `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`);
};
// eslint-disable-next-line no-unused-vars
const LifeCycleCallbacksRemove = (querySelector) => {
  document.querySelector(querySelector).removeChild(lccEle);
};