import { Component } from '@angular/core';

interface SplitGroup {
  title: string;
  chips: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <section id="skills">
      <div class="wrap">
        <p class="kicker">Pace by segment</p>
        <h2>Skills</h2>
        <div class="splits">
          @for (group of groups; track group.title) {
            <div class="split">
              <h3>{{ group.title }}</h3>
              <div class="chip-row">
                @for (chip of group.chips; track chip) {
                  <span class="chip">{{ chip }}</span>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .splits {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
        gap: 1px;
        background: rgba(239, 233, 219, 0.12);
        margin-top: 28px;
      }
      .split {
        background: var(--track);
        padding: 20px 20px 22px;
      }
      .split h3 {
        font-family: var(--font-mono);
        font-size: 12.5px;
        color: var(--lane);
        letter-spacing: 0.04em;
        margin: 0 0 12px;
      }
      .chip-row {
        display: flex;
        flex-wrap: wrap;
        gap: 7px;
      }
      .chip {
        font-size: 13px;
        padding: 5px 10px;
        border: 1px solid rgba(239, 233, 219, 0.25);
        color: var(--chalk-dim);
      }
    `,
  ],
})
export class SkillsComponent {
  groups: SplitGroup[] = [
    {
      title: 'DESIGN SYSTEMS & TOOLING',
      chips: [
        'Stencil.js',
        'Storybook',
        'Zeroheight',
        'Figma',
        'Micro-frontends',
        'MCP servers',
      ],
    },
    {
      title: 'FRAMEWORKS & LANGUAGES',
      chips: [
        'Angular 2–22',
        'React',
        'TypeScript',
        'JavaScript / ES6',
        'Redux',
        'HTML5 / CSS3',
      ],
    },
    {
      title: 'PLATFORM & PACKAGING',
      chips: [
        'GitHub Packages',
        'GitHub Pages',
        'vite',
        'Webpack',
        'Parcel',
        'Nx mono-repo',
        'Git',
      ],
    },
    {
      title: 'CERTIFICATION',
      chips: ['AWS Certified Developer — Associate (2021)'],
    },
  ];
}
