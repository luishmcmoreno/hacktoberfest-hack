class TopNav extends HTMLElement {
    constructor() {
        super();
    }


    connectedCallback() {
        let shadowRoot = this.attachShadow({mode: 'open'});
        const t = document.getElementById('top-nav-template');
        const instance = t.content.cloneNode(true);
        shadowRoot.appendChild(instance);
    }
}

customElements.define('top-nav', TopNav)