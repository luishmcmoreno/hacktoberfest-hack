class HackthoberButton extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    let shadowRoot = this.attachShadow({mode: 'open'});
    const t = document.getElementById('hackthober-button-template');
    const instance = t.content.cloneNode(true);
    shadowRoot.appendChild(instance);
  }

}

customElements.define('hackthober-button', HackthoberButton);