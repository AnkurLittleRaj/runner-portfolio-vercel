import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  template: `
    <div class="profile-container">
      <img src="assets/profilepic.png" alt="Profile Picture" class="profile-image">
    </div>
  `,
  styles: [
    `
      .profile-container {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .profile-image {
        width: 220px;
        height: 220px;
        border-radius: 50%;
        object-fit: cover;
        border: 4px solid var(--rust);
        box-shadow: 0 8px 32px rgba(193, 68, 14, 0.25);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .profile-image:hover {
        transform: scale(1.05);
        box-shadow: 0 12px 40px rgba(193, 68, 14, 0.35);
      }
    `,
  ],
})
export class ProfileComponent {}
