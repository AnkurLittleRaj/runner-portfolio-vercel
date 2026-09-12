import { Component } from '@angular/core';

interface LogEntry {
  label: string;
  title: string;
  body: string;
  isPlaceholder: boolean;
}

@Component({
  selector: 'app-training-log',
  standalone: true,
  template: `
    <section id="training">
      <div class="wrap">
        <p class="kicker">Off the clock</p>
        <h2>Training log</h2>
        <p class="lede">The habits that keep the rest of it standing up.</p>
        <div class="log">
          @for (entry of entries; track entry.title) {
            <div class="log-entry">
              <div class="log-icon" [class.placeholder]="entry.isPlaceholder">{{ entry.label }}</div>
              <div class="log-body">
                <h3 [class.placeholder]="entry.isPlaceholder">{{ entry.title }}</h3>
                <p [class.placeholder]="entry.isPlaceholder">{{ entry.body }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .log-entry {
        display: flex;
        gap: 18px;
        padding: 16px 0;
        border-top: 1px solid rgba(239, 233, 219, 0.1);
      }
      .log-entry:first-of-type {
        border-top: none;
      }
      .log-icon {
        font-family: var(--font-mono);
        color: var(--rust);
        width: 70px;
        flex-shrink: 0;
        font-size: 13px;
        padding-top: 2px;
      }
      .log-body h3 {
        margin: 0 0 4px;
        font-family: var(--font-display);
        font-size: 17px;
      }
      .log-body p {
        margin: 0;
        color: var(--chalk-dim);
        font-size: 14.5px;
      }
    `,
  ],
})
export class TrainingLogComponent {
  // Add more entries here as you tell me about other habits —
  // each one just needs a short label, a title, and a line of body copy.
  entries: LogEntry[] = [
    {
      label: 'RUNNING',
      title: 'Half marathon finisher',
      body: 'Distance running as a discipline: pacing, patience, and showing up on the days it\u2019s not fun yet.',
      isPlaceholder: false,
    },
    // {
    //   label: '[HABIT]',
    //   title: 'Add a second habit',
    //   body: "e.g. reading, cooking, a side project — tell me and I'll write the entry.",
    //   isPlaceholder: true,
    // },
    // {
    //   label: '[HABIT]',
    //   title: 'Add a third habit',
    //   body: 'Same as above — this row is a placeholder until you fill it in.',
    //   isPlaceholder: true,
    // },
  ];
}
