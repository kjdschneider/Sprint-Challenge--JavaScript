// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor (attrs){
        this.length = attrs.length;
        this.width = attrs.width;
        this.height = attrs.height;
    }
    volume (){
        return this.length * this.height * this.width;
    }
    surfaceArea (){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
})

class CubeMaker extends CuboidMaker {
    constructor (cubeAttrs){
        super(cubeAttrs);
    }
    cubeSurfaceArea (){
        return 6 * (this.height * this.width);
    }
}

const cube = new CubeMaker ({
    width: 5,
    length: 5,
    height: 5
})


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

console.log(cube.volume()); //125
console.log(cube.cubeSurfaceArea()); //150