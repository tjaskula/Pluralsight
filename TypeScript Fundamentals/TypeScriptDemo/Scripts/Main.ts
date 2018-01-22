// Interface
interface IPoint {
    getDist(): number;
}

// Modules
namespace Shapes {

    // Class
    export class Point implements IPoint {
        // Constructor
        constructor (public x: number, public y: number) { }

        // Instance member
        getDist() { return Math.sqrt(this.x * this.x + this.y * this.y); }

        // Static member
        static origin = new Point(0, 0);
    }
}

// Local variables
let p: IPoint = new Shapes.Point(3, 4);
let dist = p.getDist();