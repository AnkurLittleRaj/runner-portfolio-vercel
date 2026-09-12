import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about">
      <div class="wrap">
        <p class="kicker">Runner overview</p>
        <h2>About me</h2>
        <p class="lede">
       Ten years designing and coding frontend and backend systems , the last several spent going deep on one problem: how do you build UI once and let it run everywhere. At Baker Hughes, I own the design system end to end — from the Stencil.js components that compile down to native Angular, React, and vanilla-JS wrappers, to the Figma libraries and Storybook docs that keep design and engineering honest with each other. Outside of architecture and component lifecycles, I apply that same endurance and discipline to training, currently working toward completing a full marathon (I'll make sure to factor this training journey into our future chats, too).
        </p>
        <div class="about-grid">
          <div class="about-card">
            <h3>WHAT I OWN</h3>
            <ul>
              <li>Full technical ownership of the org-wide design system</li>
              <li>Component architecture in Stencil.js, wrapped for Angular / React / JS</li>
              <li>Documentation and governance across Storybook, Zeroheight and Figma</li>
              <li>Package distribution via GitHub Packages and GitHub Pages</li>
              <li>Actively working toward building AI-driven tools that seamlessly connect designers and developers to scale products</li>
            </ul>
          </div>
          <div class="about-card">
            <h3>HOW I SHOW UP</h3>
            <ul>
              <li>Run internal sessions to onboard engineers onto the design system</li>
              <li>Trained across 68+ teams inside the org</li>
              <li>Treat consistency and pacing as the same skill, on-screen and on-road</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .about-grid {
        display: grid;
        grid-template-columns: 1.3fr 1fr;
        gap: 40px;
        margin-top: 28px;
      }
      @media (max-width: 640px) {
        .about-grid {
          grid-template-columns: 1fr;
        }
      }
      .about-card {
        background: var(--track-2);
        border-left: 3px solid var(--pine);
        padding: 20px 22px;
      }
      .about-card h3 {
        font-family: var(--font-mono);
        font-size: 13px;
        color: var(--lane);
        margin: 0 0 10px;
        font-weight: 500;
      }
      .about-card ul {
        margin: 0;
        padding-left: 18px;
        color: var(--chalk-dim);
        font-size: 14.5px;
      }
      .about-card li {
        margin-bottom: 6px;
      }
    `,
  ],
})
export class AboutComponent {}
