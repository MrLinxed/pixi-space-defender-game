import * as PIXI from 'pixi.js';

(async () => {
    const Application = PIXI.Application;
    const Graphics = PIXI.Graphics;

    let gameContainer = document.getElementById("app");
    if(!gameContainer) {
        throw new Error("Game container not found");
    }

    const app = new Application();
    await app.init({
        width: 480,
        height: 720,
    });

    gameContainer.appendChild(app.canvas);

    const rectangle = new Graphics();
    rectangle
        .roundRect(0, 0, 64, 64, 15)
        .fill(0x66CCFF);

    rectangle.x = 100;
    rectangle.y = 100;

    app.stage.addChild(rectangle);

    let rectangleSpeed: number = 500;
    app.ticker.add((ticker) => {
        const delta = ticker.deltaTime / 100;
        rectangle.x += rectangleSpeed * delta;

        if(rectangle.x > app.screen.width - rectangle.width) {
            rectangle.x = app.screen.width - rectangle.width;
            rectangleSpeed = -rectangleSpeed;
        } else if(rectangle.x < 0) {
            rectangle.x = 0;
            rectangleSpeed = -rectangleSpeed;
        }
    });
})();