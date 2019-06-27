import { Component, OnInit } from '@angular/core';
import { of, Observable } from "rxjs";

export interface Item {
  id: number;
  title: string;
  img: string;
}


declare const interact: any;

@Component({
  selector: 'sa-designer',
  templateUrl: './designer.component.html'
})
export class DesignerComponent implements OnInit {
  color = "#278ce2";

  data: any[] = [];

  componentItems: Item[] = [
    {id: 1, title: 'Radiobuttons', img: 'assets/img/components/radiobuttons.png'},
    {id: 2, title: 'Card', img: 'assets/img/components/cards-template014.png'},
  ];

  public startPageId:number = 1;

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



      for (let i = 1; i <= 10; i++) {
        const item = { id: i, name: `Page ${i}`};
  
        this.data.push(item);
      }


  }

  showPage(pageId) {
    console.log("Show page nr " + pageId);

  }

}
