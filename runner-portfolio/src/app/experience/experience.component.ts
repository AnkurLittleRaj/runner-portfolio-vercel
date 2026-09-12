import { Component } from '@angular/core';

interface Marker {
  mile: number;
  current: boolean;
  role: string;
  org: string;
  time: string;
  bullets: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  template: `
    <section id="experience">
      <div class="wrap">
        <p class="kicker">Splits</p>
        <h2>The route so far</h2>
        <div class="route">
          @for (m of markers; track m.mile) {
            <div class="marker" [class.current]="m.current">
              <div class="marker-node">{{ m.mile }}</div>
              <div class="marker-head">
                <h3>{{ m.role }}</h3>
                <span class="marker-time" [innerHTML]="m.time"></span>
              </div>
              <p class="marker-org">{{ m.org }}</p>
              <ul>
                @for (b of m.bullets; track b) {
                  <li>{{ b }}</li>
                }
              </ul>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .route {
        position: relative;
        margin-top: 36px;
      }
      .route::before {
        content: '';
        position: absolute;
        left: 19px;
        top: 6px;
        bottom: 6px;
        width: 2px;
        background: repeating-linear-gradient(
          to bottom,
          var(--rust) 0 10px,
          transparent 10px 18px
        );
      }
      .marker {
        position: relative;
        padding: 0 0 40px 62px;
      }
      .marker:last-child {
        padding-bottom: 4px;
      }
      .marker-node {
        position: absolute;
        left: 0;
        top: 0;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: var(--track);
        border: 2px solid var(--rust);
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: var(--font-mono);
        font-size: 13px;
        color: var(--rust);
      }
      .marker.current .marker-node {
        background: var(--rust);
        color: var(--track);
        border-color: var(--lane);
      }
      .marker-head {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        flex-wrap: wrap;
        gap: 8px;
      }
      .marker-head h3 {
        font-family: var(--font-display);
        font-size: 19px;
        margin: 0;
      }
      .marker-time {
        font-family: var(--font-mono);
        font-size: 12.5px;
        color: var(--chalk-dim);
      }
      .marker-org {
        color: var(--lane);
        font-size: 13.5px;
        margin: 2px 0 10px;
      }
      .marker ul {
        margin: 0;
        padding-left: 18px;
        color: var(--chalk-dim);
        font-size: 14.5px;
      }
      .marker li {
        margin-bottom: 6px;
      }
    `,
  ],
})
export class ExperienceComponent {
  markers: Marker[] = [
    {
      mile: 4,
      current: true,
      role: 'Senior Software Engineer, Design Systems',
      org: 'Baker Hughes',
      time: '<span class="placeholder">Nov 2023 — Present</span>',
      bullets: [
        'Own full technical responsibility for the design system used by 68+ teams org-wide',
        'Build framework-agnostic components in Stencil.js, generating wrappers for Angular, React and vanilla JS',
        'Maintain design-to-dev workflow across Storybook, Zeroheight and Figma',
        'Publish component packages via GitHub Packages, host docs on GitHub Pages',
        'Run recurring sessions to train engineers across the organization on the system',
        'Actively working toward building AI-driven tools that seamlessly connect designers and developers to scale products'
      ],
    },
    {
      mile: 3,
      current: false,
      role: 'Application Development Senior Analyst',
      org: 'Accenture Solutions — client: Cox Communications',
      time: 'Jan 2021 —  Nov 2023',
      bullets: [
        "Senior frontend engineer building responsive UIs for Cox's plans, pricing and support flows in Angular (9, 10, 15) and React 18",
        'Led UI requirements gathering, cross-team technical support and regular code reviews',
        "Built a micro-frontend application from scratch for Accenture's internal rewards platform",
      ],
    },
    {
      mile: 2,
      current: false,
      role: 'UI Developer',
      org: 'Sasken Technologies — client: Caterpillar',
      time: 'Mar 2019 — Jan 2021',
      bullets: [
        'Frontend developer in a 5-person Agile team building fleet-reporting dashboards for heavy vehicles',
        'Worked in an Nx (NRWL) mono-repo on Angular 6–9 with 80%+ unit test coverage via Jasmine and Karma',
      ],
    },
    {
      mile: 1,
      current: false,
      role: 'System Engineer',
      org: 'Tata Consultancy Services — client: Fidelity Investments',
      time: 'Sep 2016 — Mar 2019',
      bullets: [
        'Full-stack engineer in banking, shipping 10+ responsive pages in React and Angular 4/5 integrated with backend services',
      ],
    },
  ];
}
