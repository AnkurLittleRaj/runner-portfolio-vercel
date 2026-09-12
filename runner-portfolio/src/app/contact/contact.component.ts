import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section id="contact" class="no-border">
      <div class="wrap finish">
        <p class="kicker">Finish line</p>
        <h2>Get in touch</h2>
        <p class="lede">Bangalore, Karnataka &middot; raj.ankur8&#64;gmail.com</p>
        <div class="finish-links">
          <a href="https://www.linkedin.com/in/ankur-raj-b7ba78103" target="_blank" rel="noopener">
            LinkedIn &#8599;
          </a>
          <a href="https://github.com/AnkurLittleRaj" target="_blank" rel="noopener" title="Add your GitHub URL">
            GitHub 
          </a>
          <a href="mailto:raj.ankur8@gmail.com">Email</a>
          <a href="https://strava.app.link/wPEl8XZVm6b" target="_blank" rel="noopener">
            Strava &#8599;
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .no-border {
        border-bottom: none;
      }
      .finish-links {
        display: flex;
        gap: 14px;
        flex-wrap: wrap;
        margin-top: 22px;
      }
      .finish-links a {
        font-family: var(--font-mono);
        font-size: 14px;
        color: var(--chalk);
        border: 1px solid var(--chalk);
        padding: 12px 20px;
        text-decoration: none;
        display: inline-block;
      }
      .finish-links a:hover {
        background: var(--chalk);
        color: var(--track);
      }
      .finish-links a.placeholder {
        border-color: var(--rust-dim);
        color: var(--rust-dim);
      }
      .finish-links a.placeholder:hover {
        background: transparent;
        color: var(--rust-dim);
      }
    `,
  ],
})
export class ContactComponent {}
