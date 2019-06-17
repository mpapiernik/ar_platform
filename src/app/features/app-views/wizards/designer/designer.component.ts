import { Component, OnInit } from '@angular/core';
import { of, Observable } from "rxjs";
import * as Konva from 'konva/konva';

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
