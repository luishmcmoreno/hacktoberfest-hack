/**
 * A button that changes color randomly when clicked.
 *
 * Example:
 * ```
 *  <color-button id="button" style="height: 128px; height: 32px;"></color-button>
 */
class ColorButton extends HTMLElement {

  constructor() {
    super();
    this.addEventListener('click', e => {
      if (this.disabled) {
        return;
      }
      this.toggle();
    });
  }
  
  toggle() {
    color = this._getRandomColor();
  }

  get disabled() {
    return this.hasAttribute('background-color');
  }

  set color(value) {
    if (value) {
      this.setAttribute('background-color', value);
    } else {
      this.removeAttribute('background-color');
    }
  }

  _getRandomColor() {
    const letters = '0123456789ABCDEF';
    const color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}

window.customElements.define('color-button', ColorButton);