class MiFooter
extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `<p>
        &copy; 2021
        Ortiz Arroyo Cristian Erick O.A.C.E.
      </p>`;
    }
}

customElements.define(
    "mi-footer", MiFooter);