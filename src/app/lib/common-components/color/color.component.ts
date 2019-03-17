import {Component, Input} from '@angular/core';

const singleColorToHex = (value: number) => ('0' + value.toString(16)).substr(-2, 2).toUpperCase();

const colorToHex = (color: number[]) => '#' + color.map(singleColorToHex).join('');

const rgbwtoRgb = (red: number, green: number, blue: number, white: number): [number, number, number] => {
  // Convert RGBW to RGB reversing algorithm referenced in this post:
  // https://stackoverflow.com/questions/40312216/converting-rgb-to-rgbw

  return [
    Math.min(red + white, 255),
    Math.min(green + white, 255),
    Math.min(blue + white, 255),
  ];
};

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.less']
})
export class ColorComponent {

  @Input() red: number = 0;
  @Input() green: number = 0;
  @Input() blue: number = 0;
  @Input() white: number = 0;

  private hex(): string {
    return colorToHex(rgbwtoRgb(this.red, this.green, this.blue, this.white));
  }

}

