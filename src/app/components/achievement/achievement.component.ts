import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.scss']
})
export class AchievementComponent implements AfterViewInit {


  @ViewChild("features") features!: ElementRef;
  @ViewChildren("card") cards!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    this.animateMainPage();
  }



  animateMainPage() {
    // this.cards.forEach(card => {
    //   gsap.set(card.nativeElement, { position: 'absolute' })
    // })

    gsap.set(".section", { position: 'absolute' })

    gsap.to(".section", {
      scrollTrigger: {
        trigger: ".achievements_wrapper",
        start: "top 100px",
        end: "+=4000px 300px",
        scrub: true,
        pin: true,
      },
      yPercent: -150, stagger: 0.217,
    })
  }
}
