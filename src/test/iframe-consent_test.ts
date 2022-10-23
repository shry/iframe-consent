/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {IframeConsent} from '../iframe-consent.js';

import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('iframe-consent', () => {
  test('is defined', () => {
    const el = document.createElement('iframe-consent');
    assert.instanceOf(el, IframeConsent);
  });


  test('youtube renders with minimum attributes', async () => {
    const el = await fixture(html`
      <iframe-consent width="560" height="315" src="https://www.youtube-nocookie.com/embed/I5e6ftNpGsU">
          <p>Lorem Ipsum</p>
      </iframe-consent>
    `);
    assert.shadowDom.equal(
      el,
      `
      <div class="wrapper-consent" style="width:560px;">
        <div id="wrapper" style="width:560px;height:315px;">
        </div>
        <div class="consent-overlay">
            <div class="consent-overlay-msg">
              <slot></slot>
              <div>
                <button part="button">
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
    `
    );
  });

  test('handles a consent click with minimum attributes', async () => {
    const el = (await fixture(html`
      <iframe-consent width="560" height="315" src="https://www.youtube-nocookie.com/embed/I5e6ftNpGsU">
          <p>Lorem Ipsum</p>
      </iframe-consent>
    `)) as IframeConsent;
    const button = el.shadowRoot!.querySelector('button')!;
    button.click();
    await el.updateComplete;
    assert.shadowDom.equal(
      el,
      `
      <div id="wrapper" class="wrapper-iframe" style="width:560px;height:315px;">
        <iframe src="https://www.youtube-nocookie.com/embed/I5e6ftNpGsU" width="560" title="" height="315"></iframe>        
      </div>
    `
    );
  });

  test('youtube renders with custom attributes', async () => {
    const el = await fixture(html`
      <iframe-consent accept="Akzeptieren" icon="auto" responsive width="560" height="315" src="https://www.youtube-nocookie.com/embed/I5e6ftNpGsU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
          <p>Lorem Ipsum</p>
      </iframe-consent>
    
    `);
    assert.shadowDom.equal(
      el,
      `
      <div class="wrapper-consent" style="width:auto;">
        <div id="wrapper" style="padding-bottom:56.25%;">
          <div class="consent-icon-mobile"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-video"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg></div>
        </div>
        <div class="consent-overlay">
            <div class="consent-overlay-msg">
              <div class="consent-icon"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-video"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg></div>
              <slot></slot>
              <div>
                <button part="button">
                  Akzeptieren
                </button>
              </div>
            </div>
          </div>
        </div>
    `
    );
  });

  test('handles a consent click with custom attributes', async () => {
    const el = (await fixture(html`
      <iframe-consent accept="Akzeptieren" icon="auto" responsive width="560" height="315" src="https://www.youtube-nocookie.com/embed/I5e6ftNpGsU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
          <p>Lorem Ipsum</p>
      </iframe-consent>
    `)) as IframeConsent;
    const button = el.shadowRoot!.querySelector('button')!;
    button.click();
    await el.updateComplete;
    assert.shadowDom.equal(
      el,
      `
      <div id="wrapper" class="wrapper-iframe" style="padding-bottom:56.25%;">
        <iframe title="YouTube video player" src="https://www.youtube-nocookie.com/embed/I5e6ftNpGsU" width="560" height="315" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>        
      </div>
    `
    );
  });


  /*
  test('renders with a set name', async () => {
    const el = await fixture(html`<iframe-consent name="Test"></iframe-consent>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, Test!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('styling applied', async () => {
    const el = (await fixture(html`<iframe-consent></iframe-consent>`)) as IframeConsent;
    await el.updateComplete;
    assert.equal(getComputedStyle(el).paddingTop, '16px');
  });*/
});
