class Link{
    constructor(ba,bb){
        var l=ba.body.bodies.length-2
        this.link=Matter.Constraint.create({
            bodyA:ba.body.bodies[l],
            bodyB:bb,
            length:1,
            stiffness:1

        })
        World.add(world,this.link)
    }
    detach(){
        Matter.World.remove(world,this.link)
    }
}