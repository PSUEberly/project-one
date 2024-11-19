import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";


// Readable visual card with title, description, logo, metadata (date, time created, etc)
export class CardP extends DDDSuper(I18NMixin(LitElement)) {

  constructor() {
    super();
    this.title = "";
    this.description = '';
    this.logo = ''; // Logo URL
    this.created = ''; // Creation date
    this.lastUpdated = ''; // Last update date
    this.location = ''; // Source URL
    this.slug = ''; // URL for nav
    this.readTime = '';
    this.jsonURL = '';
  }

  static get properties() {
    return {
      title: { type: String },
      description: { type: String },
      created: { type: String },
      lastUpdated: { type: String },
      logo: { type: String },
      slug: { type: String },
      jsonUrl: { type: String },
      location: { type: String },
      readTime: { type: String }
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        .card {
          cursor: pointer;
          background-color: var(--ddd-theme-default-coalyGray);
          border-radius: var(--ddd-radius-md);
          border: var(--ddd-border-sm);
          padding: var(--ddd-spacing-4);
          width: 300px;
          height: 450px;
          outline: 2px solid var(--ddd-theme-default-white);
          display: flex;
          flex-direction: column; // Stack vertically
          justify-content: space-between; // Space cards evenly
          margin-bottom: 20px;
        }
        .card:hover, .card:focus {
          background-color: var(--ddd-theme-default-white);
        }

        .img-wrapper {
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .info {
          font-weight: var(--ddd-font-weight-bold); 
          text-align: center;
          color: var(--ddd-theme-default-nittanyNavy);
          cursor: pointer;
          text-decoration: underline;
        }

        .description, .created, .lastUpdated {
          font-size: 16px;
          text-align: center;
          color: var(--ddd-theme-default-beaverBlue);
        }

        .placeholder {
          width: 100%;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--ddd-theme-default-limestoneLight);
          color: var(--ddd-theme-default-coalyGray);
          font-size: var(--ddd-font-weight-regular);
          text-align: center;
          font-family: var(--ddd-font-primary);
        }
      `
    ];
  }
  render() {
    return html`
         <div
        class="card"
        @click="${this.openSlug}"
        @keydown="${this.handleKeydown}"
        tabindex="0"
        aria-label="${this.title}"
        >
        <div class="img-wrapper">
        ${this.logo
            ? html`<img src="https://haxtheweb.org/${this.logo}"  alt="${this.title}" />`
            : html`<div class="placeholder">No Image</div>` //
          }
        </div>

        <div class="info">
          <a href="${this.slug.startsWith('http') ? this.slug : `https://haxtheweb.org/${this.slug}`}" target="_blank"  @click="${this.stopPropagation}">${this.title}</a>
        </div>

        <div class="description">${this.description}</div>
        <div class="created">Created: ${this.created}</div>
        <div class="lastUpdated">Last Updated: ${this.lastUpdated}</div>
        <div class="lastUpdated">Estimated Read Time: ${this.readTime}</div>

        <div class="info">
          <a href="${this.location}" target="_blank" @click="${this.stopPropagation}">Index Source</a>
        </div>
      </div>
    `;
  }

  openSlug(event) {
    if (this.slug) {
      const url = this.slug.startsWith("http")
        ? this.slug
        : `https://haxtheweb.org/${this.slug}`;

      window.open(url, "_blank");
    } else {
    }
  }

  handleKeydown(event) {
    if (event.key === "Enter" || event.key === " ") {
      this.openSlug();
    }
  }

  stopPropagation(event) {
    event.stopPropagation();
  }

static get tag() {
  return "card-p";
}
}

customElements.define('card-p', CardP);
