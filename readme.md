# Image processing algorithms

This is a set of image processing algorithms written in JavaScript.

## List of Algorithms
You can click on the links below to see the examples on your web browser.

### Threshold
From [Wikipedia][threshold-wiki]: Thresholding is the simplest method of segmenting images. The simplest thresholding methods replace each pixel in an image with a black pixel if the image intensity `I(i, j)` is less than some fixed constant T (that is, `I(i, j) < T`), or a white pixel if the image intensity is greater than that constant. In the example image on the right, this results in the dark tree becoming completely black, and the white snow becoming completely white.

See the result on the [browser][threshold-gp].

### Invert
From [Wikipedia][invert-wiki]: A positive image is a normal image. A negative image is a total inversion, in which light areas appear dark and vice versa.

See the result on the [browser][invert-gp].

### Gray Scale
From [Wikipedia][grayscale-wiki]: Grayscale images, a kind of black-and-white or gray monochrome, are composed exclusively of shades of gray. The contrast ranges from black at the weakest intensity to white at the strongest.

See the result on the [browser][grayscale-gp].

### Colour
This algorithms iterates through the pixels, calculates the average of the current pixel, multiplies average by the desired colour channel (R, G, B), finally divide the result by 255. I don't know if there's an specific name for this algorithm, if you know it, please share.

Example:

|   | Desired colour (channels) | Formula                        |
|---|---------------------------|--------------------------------|
| R | 160                       | I(i, j)[0] = (avg * 160) / 255 |
| G | 104                       | I(i, j)[1] = (avg * 160) / 255 |
| B | 166                       | I(i, j)[2] = (avg * 160) / 255 |

See the result on the [browser][colour-gp].


## License
[MIT][license-link]

[comment]: <> (Links for info and images)

[threshold-wiki]: https://en.wikipedia.org/wiki/Thresholding_(image_processing)
[threshold-gp]: https://memburg.dev/image-processing-algorithms/src/views/threshold.html

[invert-wiki]: https://en.wikipedia.org/wiki/Negative_(photography)#Negative_image
[invert-gp]: https://memburg.dev/image-processing-algorithms/src/views/invert.html

[grayscale-wiki]: https://en.wikipedia.org/wiki/Negative_(photography)#Negative_image
[grayscale-gp]: https://memburg.dev/image-processing-algorithms/src/views/grayscale.html

[colour-gp]: https://memburg.dev/image-processing-algorithms/src/views/colour.html

[license-link]: https://github.com/memburg/image-processing-algorithms/blob/main/LICENSE