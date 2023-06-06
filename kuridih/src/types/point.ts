export interface Point {
    x: number;
    y: number;
}

export interface Draw {
    startPoint: Point;
    prevPoint: Point,
    currentPoint: Point;
    isDraw: boolean;
    ctx: CanvasRenderingContext2D
}

export interface Mode {
    
}