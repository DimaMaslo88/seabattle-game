class Mouse {
    element = null;

    under = false;
    pUnder = false;

    x = null;
    y = null;

    pX = null;
    pY = null;

    left = false;
    pLeft = false;

    delta = 0;
    pDelta = 0;

    constructor(element) {
this.element = element;
element.addEventListener('mousemove', e =>{
    this.tick()
    this.x = e.clientX
    this.y = e.clientY
    this.under = true

})
element.addEventListener('mouseenter', e =>{
    this.tick()
    this.x = e.clientX
    this.y = e.clientY
    this.under = true

})
element.addEventListener('mouseleave', e =>{
    this.tick()
    this.x = e.clientX
    this.y = e.clientY
    this.under = false

})
element.addEventListener('mouseup', e =>{
    this.tick()
    this.x = e.clientX
    this.y = e.clientY
    this.under = true

})
element.addEventListener('mousedown', e =>{
    this.tick()
    this.x = e.clientX
    this.y = e.clientY
    this.under = true

})
element.addEventListener('wheel', e =>{
    this.tick()
    this.x = e.clientX
    this.y = e.clientY
    this.under = true

})
    }
    tick(){
        this.pX = this.x
        this.pY = this.y
        this.pUnder = this.under
        this.pLeft = this.left
        this.pDelta = this.delta
    }
}
