import { Component, OnInit } from '@angular/core';
import { of, Observable } from "rxjs";

declare const interact: any;

@Component({
  selector: 'sa-designer',
  templateUrl: './designer.component.html'
})
export class DesignerComponent implements OnInit {
  color = "#278ce2";

  constructor() { }

  ngOnInit() {
    const element = document.getElementById('drag-1');
    let x = 0;
    let y = 0;

    interact(element)
      .draggable({
        modifiers: [
          interact.modifiers.snap({
            targets: [
              interact.createSnapGrid({ x: 30, y: 30 })
            ],
            range: Infinity,
            relativePoints: [{ x: 0, y: 0 }]
          }),
          interact.modifiers.restrict({
            restriction: element.parentNode,
            elementRect: { top: 0, left: 0, bottom: 0, right: 0 },
            endOnly: true
          })
        ],
        inertia: true,
      })
      .on('dragmove', function (event) {
        x += event.dx;
        y += event.dy;

        event.target.style.webkitTransform =
          event.target.style.transform =
          'translate(' + x + 'px, ' + y + 'px)';
      });
  }

}
