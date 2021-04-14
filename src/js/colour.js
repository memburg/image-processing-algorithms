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
        const r = frame.data[i + 0]; // r
        const g = frame.data[i + 1]; // g
        const b = frame.data[i + 2]; // b

        const avg = Math.floor((r + g + b) / 3);

        // Colour pattern RGB(166, 227, 219)
        frame.data[i + 0] = (160 * avg) / 255; // r
        frame.data[i + 1] = (104 * avg) / 255; // g
        frame.data[i + 2] = (166 * avg) / 255; // b
    }

    time.innerText = `Colour execution time: ${((performance.now() - t0) / 1000).toFixed(4)} seconds`;

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