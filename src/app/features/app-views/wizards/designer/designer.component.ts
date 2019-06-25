import { Component, OnInit } from '@angular/core';
import { of, Observable } from "rxjs";
import interact from 'interactjs';



@Component({
  selector: 'sa-designer',
  templateUrl: './designer.component.html'
})
export class DesignerComponent implements OnInit {


  color="#278ce2";
  container = document.getElementById('#designer-canva');


  constructor() { }

  ngOnInit() {
  }

  
  public configStage: Observable<any> = of({
    width: 900,   
    height: 500,
  });

  public configCircle: Observable<any> = of({
    x: 100,
    y: 100,
    radius: 70,
    fill: "yellow",
    stroke: "black",
    strokeWidth: 4,
    draggable: true,
  });


  public configText: Observable<any> = of({
    x: 100,
    y: 15,
    text: 'Simple Text',
    fontSize: 30,
    fontFamily: 'Calibri',
    fill: 'green',
    draggable: true,
    
  });

  public handleClick(component) {
    console.log("Hello", component);
  }


  public handleDragStart(component) {
    console.log("drag start", component);
  }

  public updatePosition(x: string, y: string) {
    document.getElementById('PosX').setAttribute('value',x);
    document.getElementById('PosY').setAttribute('value',y);
    
  }

  public handleDragEnd(component) {
    console.log("drag end", component);
    const mousePos = component._stage._lastPos;
    const componentSize = component.cacheProps.radius;
    var x = mousePos.x;
    var y = mousePos.y;
    if (componentSize > 0) {
      x = mousePos.x - componentSize;
      y = mousePos.y - componentSize;
    }
    console.log('x: ' + x + ', y: ' + y);
    this.updatePosition(x,y);
  }
  

}

interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    modifiers: [
      interact.modifiers.restrict({
        restriction: "parent",
        endOnly: true,
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
      }),
    ],
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {
      var textEl = event.target.querySelector('p');

      textEl && (textEl.textContent =
        'moved a distance of '
        + (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                     Math.pow(event.pageY - event.y0, 2) | 0))
            .toFixed(2) + 'px');
    }
  });

  function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }