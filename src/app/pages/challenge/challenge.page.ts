import { AfterViewInit, Component } from '@angular/core';
import { ChallengeService, TTaskAll } from './challenge.service';

@Component({
  selector: 'page-challenge',
  templateUrl: './challenge.page.html',
  styleUrls: ['./challenge.page.scss']
})
export class ChallengePage implements AfterViewInit {

  public Object: any = Object;

  // private observers: IntersectionObserver[] = []

  public colors = [
    // https://sashamaps.net/docs/resources/20-colors/
    { 'name': 'Black',    'hex': '#000000' },
    { 'name': 'Blue',     'hex': '#4363d8' },
    { 'name': 'Red',      'hex': '#e6194B' },
    { 'name': 'Green',    'hex': '#3cb44b' },
    { 'name': 'Yellow',   'hex': '#ffe119' },
    { 'name': 'Grey',     'hex': '#aaaaaa' },
    { 'name': 'Magenta',  'hex': '#f032e6' },
    { 'name': 'Orange',   'hex': '#f58231' },
    { 'name': 'Cyan',     'hex': '#42d4f4' },
    { 'name': 'Purple',   'hex': '#911eb4' },
    { 'name': 'Lime',     'hex': '#bfef45' },
    { 'name': 'Brown',    'hex': '#870C25' },
  ];

  constructor ( public readonly service: ChallengeService ) {

  }

  public ngAfterViewInit() {

    // let observerOptions = {
    //   root: null,
    //   rootMargin: "0px",
    //   threshold: [1.0],
    // };

    const intersectionCallback: IntersectionObserverCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        let box = entry.target;
        let visiblePct = `${Math.floor(entry.intersectionRatio * 100)}%`;
        console.log(box, visiblePct);
      });
    };

    // document.querySelectorAll('h2').forEach( (ele: HTMLHeadingElement, index: number) => {

    //   this.observers[index] = new IntersectionObserver(
    //     intersectionCallback,
    //     observerOptions
    //   );

    //   this.observers[index].observe(ele);

    // })

  }

  public toggleZoom (key: keyof TTaskAll): void {

    this.service.tasks[key].display!.zoom = !this.service.tasks[key].display!.zoom;

  }

}
