import { Shape } from './shape'

export class Circle extends Shape {
  private radius: number

  constructor(color: string, radius: number) {
    super(color)
    this.radius = radius
  }

  public draw(): void {
    console.log(`Drawing a ${this.color} circle with radius ${this.radius}`)
  }

  public getArea(): number {
    return Math.PI * this.radius * this.radius
  }
}