class HackthoberButton extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    let shadowRoot = this.attachShadow({mode: 'open'});
    const t = document.getElementById('alert-hello-world-template');
    const instance = t.content.cloneNode(true);
    shadowRoot.appendChild(instance);
  }

}

customElements.define('alert-hello-world', HackthoberButton);