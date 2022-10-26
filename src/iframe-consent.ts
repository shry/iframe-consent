import {LitElement, html, css, TemplateResult} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {styleMap} from 'lit/directives/style-map.js';
import {ifDefined} from 'lit/directives/if-defined.js';


const icons = {
  default:  html`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layout"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
  map: html`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>`,
  video: html`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-video"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>`
}

/**
 * A web component GDPR conform drop-in replacement for the html iframe tag.
 *
 * @slot This element has a slot
 * @cssprop --iframe-consent-wrapper-bg - Background color of wrapper
 * @cssprop --iframe-consent-wrapper-border - Border of wrapper
 * @cssprop --iframe-consent-wrapper-radius - Border radius of wrapper
 * @cssprop --iframe-consent-wrapper-iframe-border - The actual iframe border 
 * @cssprop --iframe-consent-btn-border - Button border
 * @cssprop --iframe-consent-btn-color - Button color
 * @cssprop --iframe-consent-btn-bg - Button background
 * @cssprop --iframe-consent-btn-radius - Button radius
 * @cssprop --iframe-consent-btn-padding - Button padding
 * @cssprop --iframe-consent-btn-font-weight - Button font weight
 * @cssprop --iframe-consent-btn-font-family - Button font family
 * @cssprop --iframe-consent-btn-font-size - Button font size
 * @cssprop --iframe-consent-poster-opacity - Poster image opacity
 * @cssprop --iframe-consent-poster-filter - Poster image filter for blur etc.
 * @cssprop --iframe-consent-icon-color - Icon color
 */
@customElement('iframe-consent')
export class IframeConsent extends LitElement {

  static override styles = css`
    :host {
      display: block;
    }
    #wrapper {
      position:relative;
      overflow:hidden;
    }

    .wrapper-consent {
      position:relative;
      background:var(--iframe-consent-wrapper-bg, #eee);
      border: var(--iframe-consent-wrapper-border, 1px solid #ccc);
      border-radius:var(--iframe-consent-wrapper-radius);
    }

    .wrapper-iframe {
      background:var(--iframe-consent-wrapper-bg, #eee);
      border: var(--iframe-consent-wrapper-iframe-border, 1px solid transparent);
      border-radius:var(--iframe-consent-wrapper-radius);
    }

    iframe {
      border:0;
      border-radius:var(--iframe-consent-wrapper-radius);
      position:absolute;
      top:0;
      left:0;
      right:0;
      bottom:0;
      width:100%;
      height:100%;
    }


    .consent-overlay, .consent-icon-mobile {
      position:absolute;
      top:50%;
      left:50%;
      width:75%;
      text-align:center;
      transform:translate(-50%,-50%);
      z-index:1;
    }

    .consent-icon-mobile {
      display:none;

    }

    button {
      cursor:pointer;
      border:var(--iframe-consent-btn-border, 1px solid black);
      color:var(--iframe-consent-btn-color, white);
      background:var(--iframe-consent-btn-bg, black);
      border-radius:var(--iframe-consent-btn-radius, 5px);
      padding:var(--iframe-consent-btn-padding, 0.75rem 2rem);
      font-weight:var(--iframe-consent-btn-font-weight);      
      font-family:var(--iframe-consent-btn-font-family);
      font-size:var(--iframe-consent-btn-font-size, 1rem);
    }

    button:hover  {
      background:var(--iframe-consent-btn-hover-bg, black);
      color:var(--iframe-consent-btn-hover-color, white);
      border-color:var(--iframe-consent-btn-hover-border-color, black);
    }

    img.poster {
      position:absolute;
      top:0;
      left:0;
      right:0;
      bottom:0;
      width:100%;
      height:100%;
      object-fit:cover;
      opacity:var(--iframe-consent-poster-opacity, 0.2);
      filter: var(--iframe-consent-poster-filter);
    }

    svg {
      color:var(--iframe-consent-icon-color);
    }

    @media only screen and (max-width: 480px) {

      .consent-overlay {
        border-top:var(--iframe-consent-wrapper-border, 1px solid #ccc);
        position:static;
        width:auto;
        padding:1rem;
        transform:none;
        background:var(--iframe-consent-wrapper-mobile-bg, white);
        border-bottom-left-radius:var(--iframe-consent-wrapper-radius);
        border-bottom-right-radius:var(--iframe-consent-wrapper-radius);
      }
      .consent-icon-mobile {
        display:block;
      }
      .consent-icon {
        display:none;
      }
    }
  `;

  /*
  override connectedCallback() {
    super.connectedCallback();
    //ro.observe(this);
    //window.addEventListener('resize' , () => this._handleResize(this.shadowRoot));
    
  }
  override disconnectedCallback() {
    //ro.unobserve(this);
    //window.removeEventListener('resize', () => this._handleResize(this.shadowRoot));
    
    super.disconnectedCallback();
  }
  */

  /**
   * The iframe src.
   * @attr
   */
  @property({type: String})
  src = '';

  /**
   * The iframe title.
   * @attr
   */
  @property({type: String})
  override title = '';

  /**
   * The iframe width.
   * @attr
   */
  @property()
  width?:number;


  /**
   * The iframe width.
   * @attr
   */
  @property()
  height?:number;

  /**
   * The iframe name.
   * @attr
   */
  @property()
  name?:string;

  /**
   * The iframe referrerpolicy.
   * @attr
   */
  @property()
  referrerpolicy?:string;
  
  /**
   * iframe attribute
   * @attr
   */
  @property({type: Boolean})
  allowfullscreen = false;

  /**
   * iframe attribute
   * @attr
   */
  @property()
  allow?:string;

  /**
   * The Button accept text.
   * @attr
   */
  @property({type: String})
  accept = 'Accept';

  /**
   * Should the iframe be responsive
   * @attr
   */
  @property({type: Boolean})
  responsive = false;

  /**
   * Shows an icon (video, map etc.) 
   * Select 'auto' to automatically select the icon based on the url
   * @attr
   * @type {"auto" | "video" | "map" | "default"}
   */
  @property()
  icon?: IconType;

  /**
   * Provide an image source which will overlay the container 
   * @attr
   */
  @property({type: String})
  poster = '';

  /**
   * Does the user consent
   */
  @state()
  consent = false;
 

  /**
   *  Calculates the height of the wrapper
   * 
   * @returns string
   */
  private _getStyle(): { paddingBottom?: string; width?: string; height?: string; } {
    if(this.height && this.width){
      return this.responsive ? {paddingBottom: `${(this.height / this.width)*100}%`} : {width: `${this.width}px`, height: `${this.height}px`};
    } 
    return {paddingBottom: '56.25%'};
  }


  /**
   * Button click for consent
   */
  private _onConsent() {
    //this._handleResize();
    this.consent = !this.consent;
  }

  /**
   * 
   * @param shadowRoot 
   * @returns 
   */
  /*
  private _handleResize(shadowRoot?: Element["shadowRoot"]) {
    if(this.responsive !== true){
      return;
    }

    const root = (shadowRoot || this.shadowRoot);
    const elem = root!.querySelector('#wrapper');
    if(elem && this.height && this.width){
      const width = parseFloat(getComputedStyle(elem).getPropertyValue('width'));
      const ratio = this.width / this.height;
      this.width = width;
      this.height = width / ratio;
    }
    
  }*/

  private _getIcon(className:string ): TemplateResult<1> | undefined{
    let icon = icons['default'];

    if(!this.icon){
      return;
    }else if(this.icon !== 'auto'){
      icon = icons[this.icon];
    }else{

      const url = new URL(this.src);

      switch (url.hostname) {
        case 'www.youtube.com':
        case 'www.youtube-nocookie.com':
        case 'player.vimeo.com':
          icon = icons['video'];
          break;
        case 'www.openstreetmap.org':
        case 'www.google.com':
          icon = icons['map'];
          break;
      }
    }

    return html`<div class=${className}>${icon}</div>`;
  }

  private _getPoster(): TemplateResult<1> | undefined{
    if(!this.poster){
      return;
    }

    return html`<img src=${this.poster} alt="" loading="lazy" class="poster" />`;
  }



  override render() {

    if(this.consent){
      return html`
        <div id="wrapper" class="wrapper-iframe" style=${styleMap(this._getStyle())}>
          <iframe title=${ifDefined(this.title)} name=${ifDefined(this.name)} src=${this.src} width=${ifDefined(this.width)} height=${ifDefined(this.height)} allow=${ifDefined(this.allow)} referrerpolicy=${ifDefined(this.referrerpolicy)} ?allowfullscreen=${this.allowfullscreen}></iframe>        
        </div>
      `;
    }

    return html`
      <div class="wrapper-consent" style=${styleMap({width: !this.responsive && this.width ? `${this.width}px` : 'auto'})}>
        <div id="wrapper" style=${styleMap(this._getStyle())}>
          ${this._getPoster()}
          ${this._getIcon('consent-icon-mobile')}
        </div>
        <div class="consent-overlay">
            <div class="consent-overlay-msg">
              ${this._getIcon('consent-icon')}
              <slot></slot>
              <div>
                <button @click=${this._onConsent} part="button">
                    ${this.accept}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }


}

declare global {
  type IconType = 'auto' | 'map' | 'video' | 'default';

  interface HTMLElementTagNameMap {
    'iframe-consent': IframeConsent;
  }
}
