const mouse = new Mouse(document.body)

requestAnimationFrame(tick)

function tick(){
    requestAnimationFrame(tick)

    console.log(mouse.x,mouse.pX)
    mouse.tick()
}
