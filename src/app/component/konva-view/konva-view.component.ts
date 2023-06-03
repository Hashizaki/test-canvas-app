import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-konva-view',
  templateUrl: './konva-view.component.html',
  styleUrls: ['./konva-view.component.scss']
})
export class KonvaViewComponent {
  public configStage: Observable<any> = of({
    width: 200,
    height: 200
  });
  public configCircle: Observable<any> = of({
    x: 100,
    y: 100,
    radius: 70,
    fill: "red",
    stroke: "black",
    strokeWidth: 4
  });

  public handleClick(component: any) {
    console.log("Hello Circle", component);
  }
}
