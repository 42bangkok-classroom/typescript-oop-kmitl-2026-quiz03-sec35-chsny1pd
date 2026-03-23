import { Drawable } from './drawable'

export abstract class Shape implements Drawable {
  protected color: string

  constructor(color: string) {
    this.color = color
  }

//   public Shape(color: string , number:number) {
//     return this.Shape
//   }

  public getColor(): string {
    return this.color
  }

  // บังคับให้ class ลูกต้อง implement
  abstract draw(): void
  abstract getArea(): number
}