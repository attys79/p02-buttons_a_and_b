basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showString("X")
    } else if (input.buttonIsPressed(Button.A)) {
        basic.showString("A")
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showString("B")
    } else {
        basic.clearScreen()
    }
})
