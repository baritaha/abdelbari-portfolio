import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  HostListener
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent implements AfterViewInit {

  /* CV dropdown state */
  isCvOpen = false;

  /* Video reference */
  @ViewChild('terminalVideo')
  terminalVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    // Ensure page starts at top
    window.scrollTo(0, 0);

    // Ensure video always plays (even after refresh)
    setTimeout(() => {
      const video = this.terminalVideo?.nativeElement;
      if (video) {
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.play().catch(() => {});
      }
    }, 100);
  }

  toggleCv(): void {
    this.isCvOpen = !this.isCvOpen;
  }

  closeCv(): void {
    this.isCvOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.cv-dropdown')) {
      this.isCvOpen = false;
    }
  }
}
