namespace SpriteKind {
    export const trap = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Leonardo.tileKindAt(TileDirection.Top, sprites.dungeon.stairSouth)) {
        animation.runImageAnimation(
        Leonardo,
        [img`
            ................
            ................
            ................
            ......ffff......
            .....f7777f.88..
            .....8888888....
            .f...f7777f.88..
            f7f..f7777f.....
            f7f...ffff......
            f77ffffeefffff..
            .f777efeefe777f.
            ..fffffffffff77f
            ....fefeefef.f7f
            ....ffffffff.f7f
            ....fefeefef..f.
            ....ffffffff....
            ....f7f..f7f....
            ....f7f..f7f....
            ....f7f..f7f....
            ....fff..fff....
            `,img`
            ................
            ................
            ................
            ......ffff......
            .....f7777f.88..
            .....8888888....
            .....f7777f.88..
            .....f7777f.....
            ......ffff......
            fffffffeefffffff
            f7777efeefe7777f
            ffffffffffffffff
            ....fefeefef....
            ....ffffffff....
            ....fefeefef....
            ....ffffffff....
            ....f7f..f7f....
            ....f7f..f7f....
            ....f7f..f7f....
            ....fff..fff....
            `,img`
            ................
            ................
            ................
            ......ffff......
            .....f7777f.88..
            .....8888888....
            .....f7777f.88f.
            .....f7777f..f7f
            ......ffff...f7f
            ..fffffeeffff77f
            .f777efeefe777f.
            f77fffffffffff..
            f7f.fefeefef....
            f7f.ffffffff....
            .f..fefeefef....
            ....ffffffff....
            ....f7f..f7f....
            ....f7f..f7f....
            ....f7f..f7f....
            ....fff..fff....
            `],
        100,
        true
        )
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    game.over(true)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direction == 0) {
        Leonardo.setImage(img`
            ................
            ................
            ................
            ......ffff......
            .....f7777f.88..
            .....8f88f88....
            .....f7777f.88..
            .....f7227f.....
            ......ffff......
            .ffffffeeffff...
            f7777efeefe77f..
            .ffffffffffff7f.
            ....fefeefef.f7f
            ....ffffffff..ff
            ....fefeefef....
            ....ffffffff....
            ....f7f..f7f....
            ...ff7f..f7ff...
            ...f77f..f77f...
            ...ffff..ffff...
            `)
    } else {
        Leonardo.setImage(img`
            ................
            ................
            ................
            ......ffff......
            ..88.f7777f.....
            ....88f88f8.....
            ..88.f7777f.....
            .....f7227f.....
            ......ffff......
            ...ffffeeffffff.
            ..f77efeefe7777f
            .f7ffffffffffff.
            f7f.fefeefef....
            ff..ffffffff....
            ....fefeefef....
            ....ffffffff....
            ....f7f..f7f....
            ...ff7f..f7ff...
            ...f77f..f77f...
            ...ffff..ffff...
            `)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Leonardo.vy == 0) {
        Leonardo.vy = -100
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 0
    animation.runImageAnimation(
    Leonardo,
    [img`
        ................
        ................
        ................
        ......ffff......
        .....f7777f.88..
        .....8f88f88....
        .....f7777f.88..
        .....f7227f.....
        ......ffff......
        ...ffffeeffff...
        ..f77efeefe77f..
        .f7ffffffffff7f.
        f7f.fefeefef.f7f
        ff..ffffffff..ff
        ....fefeefef....
        ....ffffffff....
        ....f7f..f7f....
        ...ff7f.ff7f....
        ...f77f.f77f....
        ...ffff.ffff....
        `,img`
        ................
        ................
        ................
        ......ffff......
        .....f7777f.88..
        .....8f88f88....
        .....f7777f.88..
        .....f7227f.....
        ......ffff......
        ...ffffeeffff...
        ..f77efeefe77f..
        .f7ffffffffff7f.
        f7f.fefeefef.f7f
        ff..ffffffff..ff
        fff.fefeefef....
        f7ffffffffffffff
        f77777f..f77777f
        fffffff..fffff7f
        .............fff
        ...............c
        `],
    100,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Leonardo)
    Leonardo.setImage(img`
        ................
        ................
        ................
        ......ffff......
        ..88.f7777f.....
        ....88f88f8.....
        ..88.f7777f.....
        .....f7227f.....
        ......ffff......
        ...ffffeeffff...
        ..f77efeefe77f..
        .f7ffffffffff7f.
        f7f.fefeefef.f7f
        ff..ffffffff..ff
        ....fefeefef....
        ....ffffffff....
        ....f7f..f7f....
        ...ff7f..f7ff...
        ...f77f..f77f...
        ...ffff..ffff...
        `)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Leonardo)
    Leonardo.setImage(img`
        ................
        ................
        ................
        ......ffff......
        .....f7777f.88..
        .....8f88f88....
        .....f7777f.88..
        .....f7227f.....
        ......ffff......
        ...ffffeeffff...
        ..f77efeefe77f..
        .f7ffffffffff7f.
        f7f.fefeefef.f7f
        ff..ffffffff..ff
        ....fefeefef....
        ....ffffffff....
        ....f7f..f7f....
        ...ff7f..f7ff...
        ...f77f..f77f...
        ...ffff..ffff...
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.trap, function (sprite, otherSprite) {
    game.over(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 1
    animation.runImageAnimation(
    Leonardo,
    [img`
        ................
        ................
        ................
        ......ffff......
        ..88.f7777f.....
        ....88f88f8.....
        ..88.f7777f.....
        .....f7227f.....
        ......ffff......
        ...ffffeeffff...
        ..f77efeefe77f..
        .f7ffffffffff7f.
        f7f.fefeefef.f7f
        ff..ffffffff..ff
        ....fefeefef....
        ....ffffffff....
        ....f7f..f7f....
        ....f7ff.f7ff...
        ....f77f.f77f...
        ....ffff.ffff...
        `,img`
        ................
        ................
        ................
        ......ffff......
        ..88.f7777f.....
        ....88f88f8.....
        ..88.f7777f.....
        .....f7227f.....
        ......ffff......
        ...ffffeeffff...
        ..f77efeefe77f..
        .f7ffffffffff7f.
        f7f.fefeefef.f7f
        ff..ffffffff..ff
        ....fefeefef.fff
        ffffffffffffff7f
        f77777f..f77777f
        f7fffff..fffffff
        fff.............
        c...............
        `],
    100,
    true
    )
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    if (true) {
        animation.stopAnimation(animation.AnimationTypes.All, Leonardo)
        Leonardo.setImage(img`
            ................
            ................
            ................
            ......ffff......
            ..88.f7777f.....
            ....88f88f8.....
            ..88.f7777f.....
            .....f7227f.....
            ......ffff......
            ...ffffeeffff...
            ..f77efeefe77f..
            .f7ffffffffff7f.
            f7f.fefeefef.f7f
            ff..ffffffff..ff
            ....fefeefef....
            ....ffffffff....
            ....f7f..f7f....
            ...ff7f..f7ff...
            ...f77f..f77f...
            ...ffff..ffff...
            `)
    }
})
function callSpikes () {
    for (let value of tiles.getTilesByType(assets.tile`myTile9`)) {
        spr_Spike = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f f f f f f f f . . . . 
            . . . f f f f f f f f f f . . . 
            . . f f f f f f f f f f f f . . 
            . f f f f f f f f f f f f f f . 
            `, SpriteKind.trap)
        tiles.placeOnTile(spr_Spike, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    if (direction == 0) {
        Leonardo.setImage(img`
            ................
            ................
            ................
            ......ffff......
            .....f7777f.88..
            .....8f88f88....
            .....f7777f.88..
            .....f7227f.....
            ......ffff......
            ...ffffeeffff...
            ..f77efeefe77f..
            .f7ffffffffff7f.
            f7f.fefeefef.f7f
            ff..ffffffff..ff
            ....fefeefef....
            ....ffffffff....
            ....f7f..f7f....
            ...ff7f..f7ff...
            ...f77f..f77f...
            ...ffff..ffff...
            `)
    } else {
        Leonardo.setImage(img`
            ................
            ................
            ................
            ......ffff......
            ..88.f7777f.....
            ....88f88f8.....
            ..88.f7777f.....
            .....f7227f.....
            ......ffff......
            ...ffffeeffff...
            ..f77efeefe77f..
            .f7ffffffffff7f.
            f7f.fefeefef.f7f
            ff..ffffffff..ff
            ....fefeefef....
            ....ffffffff....
            ....f7f..f7f....
            ...ff7f..f7ff...
            ...f77f..f77f...
            ...ffff..ffff...
            `)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
})
function callpoints () {
    for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
        points = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 5 5 5 5 5 5 5 . . . . . . . 
            . 5 5 5 5 5 5 5 5 5 . . . . . . 
            5 5 5 5 f f f 5 5 5 5 . . . . . 
            5 5 5 f 5 5 5 5 5 5 5 . . . . . 
            5 5 5 f 5 5 5 5 5 5 5 . . . . . 
            5 5 5 f f f f 5 5 5 5 . . . . . 
            5 5 5 f 5 5 5 5 5 5 5 . . . . . 
            5 5 5 f 5 5 5 5 5 5 5 . . . . . 
            5 5 5 f 5 5 5 5 5 5 5 . . . . . 
            . 5 5 5 f f f 5 5 5 . . . . . . 
            . . 5 5 5 5 5 5 5 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
        tiles.placeOnTile(points, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        info.changeScoreBy(1)
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairSouth, function (sprite, location) {
    if (controller.up.isPressed()) {
        Leonardo.vy = -100
    }
})
let points: Sprite = null
let spr_Spike: Sprite = null
let direction = 0
let Leonardo: Sprite = null
scene.setBackgroundImage(img`
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    `)
Leonardo = sprites.create(img`
    ................
    ................
    ................
    ......ffff......
    .....f7777f.88..
    .....8f88f88....
    .....f7777f.88..
    .....f7227f.....
    ......ffff......
    ...ffffeeffff...
    ..f77efeefe77f..
    .f7ffffffffff7f.
    f7f.fefeefef.f7f
    ff..ffffffff..ff
    ....fefeefef....
    ....ffffffff....
    ....f7f..f7f....
    ...ff7f..f7ff...
    ...f77f..f77f...
    ...ffff..ffff...
    `, SpriteKind.Player)
Leonardo.ay = 250
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(Leonardo, assets.tile`myTile`)
scene.setBackgroundColor(9)
scene.cameraFollowSprite(Leonardo)
callSpikes()
controller.moveSprite(Leonardo, 80, 0)
info.setScore(0)
let ninja = sprites.create(img`
    .f..............
    .f....ffff......
    .f...f2222f.....
    .f...f2ff2f.....
    .f....ffff......
    .f...ffffff.....
    .f..fff22fff....
    .fffff2ff2f2f...
    .ff2ffffff2f2f..
    .f2f.f2ff2f.f2f.
    .ff..ff22ff..f2f
    .f..ff2ff2ff..f2
    .2..f2f..f2f...f
    ....f2f..f2f....
    ....f2f..f2f....
    ....f2f..f2f....
    ....f2f..f2f....
    ...ff2f..f2ff...
    ..f222f..f222f..
    ...fff....fff...
    `, SpriteKind.Enemy)
ninja.ay = 100
tiles.placeOnRandomTile(ninja, assets.tile`myTile3`)
animation.runImageAnimation(
ninja,
[img`
    .............f...........
    ............f............
    ...........f.............
    ..........f..............
    .........f...............
    ........f................
    ......ff....ffff.........
    .....f2f...f2222f........
    .....ff2f..f2ff2f........
    ....f..f2f..ffff.........
    ...2....f2ffffffff.......
    .........f2ff22ff2f......
    ..........ff2ff2ff2f.....
    ...........2ffff2.f2f....
    ...........f2ff2f..f2f...
    ...........ff22ff...f2f..
    ..........ff2ff2ff...f...
    ..........f2f..f2f.......
    ..........f2f..f2f.......
    ..........f2f..f2f.......
    ..........f2f..f2f.......
    ..........f2f..f2f.......
    .........ff2f..f2ff......
    ........f222f..f222f.....
    .........fff....fff......
    `,img`
    .........................
    .........................
    .........................
    .........................
    .........................
    .........................
    ............ffff.........
    ...........f2222f........
    ...........f2ff2f........
    ............ffff.........
    f.........ffffffff.......
    .f.......f2ff22ff2f......
    ..f.....f2ff2ff2ff2f.....
    ...f.f.f2f.2ffff2.f2f....
    ....f.f2f..f2ff2f..f2f...
    ...f.f2f...ff22ff...f2f..
    ......f...ff2ff2ff...f...
    .......2..f2f..f2f.......
    ..........f2f..f2f.......
    ..........f2f..f2f.......
    ..........f2f..f2f.......
    ..........f2f..f2f.......
    .........ff2f..f2ff......
    ........f222f..f222f.....
    .........fff....fff......
    `],
500,
true
)
