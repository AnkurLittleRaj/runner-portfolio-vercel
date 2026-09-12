import { Component } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ProfileComponent],
  template: `
    <header class="hero">
      <div class="wrap hero-container">
        <div class="profile-side">
          <app-profile />
        </div>
        <div class="content-side">
          <div class="bib">
            <span class="bib-num">Exp №</span>
            <span class="bib-num">10 YRS</span>
          </div>
          <h1>Ankur Raj</h1>
          <p class="role">Senior Software Engineer & Runner</p>
          <p class="tagline">
        10 Years of Engineering. Countless Pixels Shipped. Always Chasing the Next Challenge.I’m a Senior Software Engineer specializing in high-performance UI technologies, backed by robust backend and cloud powerhouse skills. I treat software architecture exactly like a long-distance run—demanding high energy, pacing, and total endurance. As a passionate continuous learner and avid runner, I bring the exact same stamina to my code as I do to the trails!
          </p>
          <div class="stat-strip">
            <div class="stat"><b>10</b><span>Years of experience</span></div>
            <div class="stat"><b>4</b><span>companies, one thread</span></div>
          
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [
    `
      .hero {
        position: relative;
        padding: 88px 0 64px;
        border-bottom: 1px solid rgba(239, 233, 219, 0.12);
        overflow: hidden;
      }
      .hero::before {
        content: '';
        position: absolute;
        inset: 0;
        background: repeating-linear-gradient(
          90deg,
          transparent,
          transparent 118px,
          rgba(239, 233, 219, 0.05) 118px,
          rgba(239, 233, 219, 0.05) 120px
        );
        pointer-events: none;
      }
      .hero-container {
        display: flex;
        gap: 60px;
        align-items: center;
      }
      .profile-side {
        flex-shrink: 0;
      }
      .content-side {
        flex: 1;
      }
      .bib {
        display: inline-flex;
        align-items: baseline;
        gap: 18px;
        border: 2px solid var(--chalk);
        padding: 18px 26px;
        background: var(--track-2);
        transform: rotate(-1.2deg);
      }
      .bib-num {
        font-family: var(--font-mono);
        font-size: 15px;
        letter-spacing: 0.08em;
        color: var(--rust);
      }
      h1 {
        font-family: var(--font-display);
        font-weight: 800;
        font-size: clamp(40px, 7vw, 68px);
        margin: 22px 0 6px;
        letter-spacing: -0.01em;
      }
      .role {
        font-family: var(--font-mono);
        color: var(--lane);
        font-size: 15px;
        margin: 0 0 22px;
      }
      .tagline {
        max-width: 56ch;
        font-size: 17px;
        color: var(--chalk-dim);
      }
      .stat-strip {
        display: flex;
        gap: 36px;
        margin-top: 36px;
        flex-wrap: wrap;
      }
      .stat b {
        display: block;
        font-family: var(--font-mono);
        font-size: 26px;
        color: var(--chalk);
      }
      .stat span {
        font-size: 12.5px;
        color: var(--chalk-dim);
      }
      @media (max-width: 768px) {
        .hero-container {
          flex-direction: column;
          gap: 40px;
        }
      }
    `,
  ],
})
export class HeroComponent {}
