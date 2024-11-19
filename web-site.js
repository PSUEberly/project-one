import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class WebSite extends DDDSuper(I18NMixin(LitElement)) {
  static get properties() {
    return {
      title: { type: String },
      description: { type: String },
      logo: { type: String },
      created: { type: String },
      updated: { type: String },
      hexCode: { type: String },
      theme: { type: String },
      icon: { type: String },
      jsonUrl: { type: String },
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
        }
        .overview-container {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: var(--ddd-spacing-3, 12px);
          flex-wrap: wrap;
          width: fit-content;
          padding: var(--ddd-spacing-5, 20px);
          font-family: var(--ddd-font-primary, roboto);
          font-size: 16px;
          color: var(--ddd-theme-default-beaverBlue);
          border-radius: var(--ddd-radius-md);
          border: var(--ddd-border-md);
        }
        .text-container {
          font-weight: 400;
        }
        .title {
          font-size: 24px;
          font-weight: var(--ddd-font-weight-bold, bold);
          text-align: center;
          margin-bottom: var(--ddd-spacing-4);
        }
        .overview-container img {
          display: block;
          height: 150px;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="overview-container" style="background-color:${this.hexCode}">
        <div class="image-container">
          ${this.logo
            ? html`<img src="https://haxtheweb.org/${this.logo}" alt="${this.title}" />`
            : html`<div>No Logo</div>`}
        </div>

        <div class="text-container">
          <div class="title">
            <a href="https://haxtheweb.org/${this.slug}" target="_blank" rel="noopener noreferrer">
              ${this.icon ? html`<simple-icon icon="${this.icon}"></simple-icon>` : ""}
              ${this.title}
            </a>
          </div>
          ${this.description ? html`<p><strong>Description:</strong> ${this.description}</p>` : ""}
          ${this.created ? html`<p><strong>Date Created:</strong> ${this.created}</p>` : ""}
          ${this.updated ? html`<p><strong>Last Updated:</strong> ${this.updated}</p>` : ""}
          ${this.theme ? html`<p><strong>Theme:</strong> ${this.theme}</p>` : ""}
        </div>
      </div>
    `;
  }

  static get tag() {
    return 'web-site';
  }
}

customElements.define(WebSite.tag, WebSite);