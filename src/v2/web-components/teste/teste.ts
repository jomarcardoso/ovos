import { LitElement, html, customElement, TemplateResult } from 'lit-element';

@customElement('my-element')
// eslint-disable-next-line import/prefer-default-export
export class MyElement extends LitElement {
  render(): TemplateResult {
    return html` <div>Hello from MyElement!</div> `;
  }
}
