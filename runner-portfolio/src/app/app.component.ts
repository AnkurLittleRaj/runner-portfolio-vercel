import { Component, HostListener, OnInit, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { TrainingLogComponent } from './training-log/training-log.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatIconModule,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    TrainingLogComponent,
    ContactComponent,
  ],
  template: `
    <div class="theme-toggle">
      <button 
        (click)="toggleTheme()" 
        class="theme-btn"
        [title]="isDarkMode() ? 'Switch to light mode' : 'Switch to dark mode'">
        <mat-icon>{{ isDarkMode() ? 'light_mode' : 'dark_mode' }}</mat-icon>
      </button>
    </div>
    <div 
      class="scroll-runner" 
      [class.show]="showRunnerIcon()"
      [class.scrolling-down]="isScrollingDown()">
      <mat-icon>directions_run</mat-icon>
    </div>
    <app-hero />
    <app-about />
    <app-experience />
    <app-skills />
    <app-training-log />
    <app-contact />
    <footer class="wrap footer">Built with a route, not a template.</footer>
  `,
  styles: [
    `
      .theme-toggle {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 999;
      }

      .theme-btn {
        background: var(--rust);
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        padding: 0;
        color: var(--chalk);
      }

      .theme-btn:hover {
        transform: scale(1.1);
        box-shadow: 0 4px 12px rgba(193, 68, 14, 0.3);
      }

      .theme-btn:active {
        transform: scale(0.95);
      }

      .theme-btn mat-icon {
        font-size: 24px;
        width: 24px;
        height: 24px;
      }

      .footer {
        padding: 30px 0 50px;
        font-size: 12.5px;
        color: var(--chalk-dim);
      }

      .scroll-runner {
        position: fixed;
        right: 30px;
        font-size: 60px;
        opacity: 0;
        pointer-events: none;
        z-index: 1000;
        transition: opacity 0.3s ease-in-out;
      }

      .scroll-runner mat-icon {
        font-size: 60px;
        width: 60px;
        height: 60px;
        color: var(--rust);
      }

      .scroll-runner.show.scrolling-down {
        animation: runnerDownward 1s ease-in-out forwards;
      }

      .scroll-runner.show:not(.scrolling-down) {
        animation: runnerUpward 1s ease-in-out forwards;
      }

      @keyframes runnerDownward {
        0% {
          top: 10%;
          opacity: 1;
        }
        100% {
          top: 90%;
          opacity: 0;
        }
      }

      @keyframes runnerUpward {
        0% {
          top: 90%;
          opacity: 1;
        }
        100% {
          top: 10%;
          opacity: 0;
        }
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  showRunnerIcon = signal(false);
  isScrollingDown = signal(false);
  isDarkMode = signal(true);
  private scrollTimeout: any;
  private lastScrollPosition = 0;

  ngOnInit() {
    this.initializeTheme();
  }

  private initializeTheme() {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      // Use saved preference
      this.setTheme(savedTheme === 'dark');
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.setTheme(prefersDark);
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        this.setTheme(e.matches);
      }
    });
  }

  toggleTheme() {
    const newDarkMode = !this.isDarkMode();
    this.setTheme(newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  }

  private setTheme(isDark: boolean) {
    this.isDarkMode.set(isDark);
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    const currentScrollPosition = window.scrollY;

    // Determine scroll direction
    if (currentScrollPosition > this.lastScrollPosition) {
      this.isScrollingDown.set(true);
    } else {
      this.isScrollingDown.set(false);
    }

    this.lastScrollPosition = currentScrollPosition;

    // Clear existing timeout
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }

    // Show the runner icon
    this.showRunnerIcon.set(true);

    // Hide after 1 second
    this.scrollTimeout = setTimeout(() => {
      this.showRunnerIcon.set(false);
    }, 1000);
  }
}
