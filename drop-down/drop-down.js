class DropDown extends HTMLElement {
    constructor() {
        super();
    }


    connectedCallback() {
        let shadowRoot = this.attachShadow({mode: 'open'});
        const t = document.getElementById('drop-down-template');
        const instance = t.content.cloneNode(true);
        shadowRoot.appendChild(instance);
    }
}

customElements.define('drop-down', DropDown)