# JICompare.js
A Javascript library for comparing images.

## License
<a rel="license" href="http://creativecommons.org/licenses/by-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nd/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">JICompare.js</span> by <span xmlns:cc="http://creativecommons.org/ns#" property="cc:attributionName">Jorge Antón Caballero</span> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nd/4.0/">Creative Commons Attribution-NoDerivatives 4.0 International License</a>.<br />Based on a work at <a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/jorgeac89/JICompare.js" rel="dct:source">https://github.com/jorgeac89/JICompare.js</a>.

##Examples

###Comparing canvas

```js
//Take two canvas with the images to compare
var canvas1 = document.getElementById("canvas1");
var canvas2 = document.getElementById("canvas2");

//Compare them
var differenceInfo = JICompare.Compare(canvas1, canvas2);

//Show the number of pixel witch have changed
alert(differenceInfo.changedPixels);

//Append a canvas with the result of subtract one image from another to the body
document.getElementsByTagName('body')[0].appendChild(differenceInfo.canvasComponentsDiference);
```

###Comparing chunks

```js
//Take two canvas with the images to compare
var canvas1 = document.getElementById("canvas1");
var canvas2 = document.getElementById("canvas2");

//Divide the images into a 3x3 grid and compare each chunk
var differenceInfo = JICompare.CompareChunks(canvas1, canvas2, 3, 3);

//Show the number of pixel witch have changed in the chunk at position 2,2
alert(differenceInfo[2][2].changedPixels);

//Append a canvas with the result of subtract each chunk at position 1,3 from another to the body
document.getElementsByTagName('body')[0].appendChild(differenceInfo[1][3].canvasComponentsDiference);
```

##Contact
If you have any recommendation or is your desire to contact me for any other reason, my email is <a href="mailto:jorgeac89@gmail.com">jorgeac89@gmail.com</a>.

## Donations
If you want to make a monetary contribution to the project developer (me), make a Bitcoin transaction to this address:

**16cr9P5WugcfbE9LHZYfxkCgsBHdFoQcDT**

I will be very grateful, thanks!
