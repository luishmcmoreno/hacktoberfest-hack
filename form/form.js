class HacktoberForm extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    let shadowRoot = this.attachShadow({mode: 'open'});
    const t = document.getElementById('hacktober-form-template');
    const instance = t.content.cloneNode(true);
    shadowRoot.appendChild(instance);
  }

}

customElements.define('hacktober-form', HacktoberForm);
