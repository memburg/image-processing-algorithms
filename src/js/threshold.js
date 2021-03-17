let image, canvas, context, time;

const threshold = () => {
    console.log(`X: ${image.width}, Y: ${image.height}, Image: ${image}`);

    // Set canvas width and height
    canvas.width = image.width;
    canvas.height = image.height;

    context.drawImage(image, 0, 0, image.width, image.height);

    const frame = context.getImageData(0, 0, image.width, image.height);

    // measure time
    const t0 = performance.now();

    for (let i = 0; i < frame.data.length; i += 4) {
        const r = frame.data[i + 0];
        const g = frame.data[i + 1];
        const b = frame.data[i + 2];
        const avg = (r + g + b) / 3;

        if (avg < 75) {
            frame.data[i + 0] = 0;
            frame.data[i + 1] = 0;
            frame.data[i + 2] = 0;
        } else {
            frame.data[i + 0] = 255;
            frame.data[i + 1] = 255;
            frame.data[i + 2] = 255;
        }
    }

    time.innerText = `Threshold execution time: ${((performance.now() - t0) / 1000).toFixed(4)} seconds`;

    context.putImageData(frame, 0, 0);
}

window.addEventListener('load', () => {
    time = document.getElementById('time');
    image = document.getElementById('input');
    canvas = document.getElementById('output');

    // Create canvas context
    context = canvas.getContext('2d');

    image.onload = threshold();
});