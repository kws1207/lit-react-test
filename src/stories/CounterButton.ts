import { createComponent } from "@lit-labs/react";
import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import React from "react";

@customElement("counter-button")
class CounterButtonWC extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--counter-button-text-color, #000);
    }
  `;

  @property({ type: String }) title = "Hey there";

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}

export const CounterButton = createComponent({
  react: React,
  tagName: "counter-button",
  elementClass: CounterButtonWC,
});
