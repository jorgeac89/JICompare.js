/**
 * JIcompare.js - A Javascript library for comparing images.
 *
 * @license <a href='http://creativecommons.org/licenses/by-nd/4.0/'>Creative Commons Attribution-NoDerivatives 4.0 International License</a>
 * @author Jorge Antón Caballero
 * @version 0.1.0
 * @date 24/11/2014
 */

JICompare = {};

/**
 * Compares two canvas and returns an object with information about the difference between them.
 *
 * @since 0.1.0
 * @static
 * @param {HTMLCanvasElement} canvasImage1 First canvas to compare.
 * @param {HTMLCanvasElement} canvasImage2 Second canvas to compare.
 * @returns {Object} Object with information about the difference between the canvas.
 */
JICompare.Compare = function(canvasImage1, canvasImage2){
	var markedPixelsColor = new Array();
	markedPixelsColor[0] = 0;
	markedPixelsColor[1] = 255;
	markedPixelsColor[2] = 0;
	markedPixelsColor[3] = 255;

	var width = canvasImage1.width;
	var height = canvasImage1.height;
	var totalPixels = width * height;

	var canvasImage1ImageData = canvasImage1.getContext('2d').getImageData(0, 0, width, height);
	var canvasImage1Pixels = canvasImage1ImageData.data;

	var canvasImage2ImageData = canvasImage2.getContext('2d').getImageData(0, 0, width, height);
	var canvasImage2Pixels = canvasImage2ImageData.data;

	var canvasComponentsDiference = document.createElement("canvas");
	canvasComponentsDiference.width = width;
	canvasComponentsDiference.height = height;
	var canvasComponentsDiferenceContext = canvasComponentsDiference.getContext("2d");
	var canvasComponentsDiferenceImageData = canvasComponentsDiference.getContext('2d').getImageData(0, 0, width, height);
	var canvasComponentsDiferencePixels = canvasComponentsDiferenceImageData.data;

	var canvasPixelsDiference = document.createElement("canvas");
	canvasPixelsDiference.width = width;
	canvasPixelsDiference.height = height;
	var canvasPixelsDiferenceContext = canvasPixelsDiference.getContext("2d");
	var canvasPixelsDiferenceImageData = canvasPixelsDiference.getContext('2d').getImageData(0, 0, width, height);
	var canvasPixelsDiferencePixels = canvasPixelsDiferenceImageData.data;

	var canvasMarkedComponentsDiference = document.createElement("canvas");
	canvasMarkedComponentsDiference.width = width;
	canvasMarkedComponentsDiference.height = height;
	var canvasMarkedComponentsDiferenceContext = canvasMarkedComponentsDiference.getContext("2d");
	var canvasMarkedComponentsDiferenceImageData = canvasMarkedComponentsDiference.getContext('2d').getImageData(0, 0, width, height);
	var canvasMarkedComponentsDiferencePixels = canvasMarkedComponentsDiferenceImageData.data;

	var canvasMarkedPixelsDiference = document.createElement("canvas");
	canvasMarkedPixelsDiference.width = width;
	canvasMarkedPixelsDiference.height = height;
	var canvasMarkedPixelsDiferenceContext = canvasMarkedPixelsDiference.getContext("2d");
	var canvasMarkedPixelsDiferenceImageData = canvasMarkedPixelsDiference.getContext('2d').getImageData(0, 0, width, height);
	var canvasMarkedPixelsDiferencePixels = canvasMarkedPixelsDiferenceImageData.data;

	var colorDiference = 0;
	var redDiference = 0;
	var greenDiference = 0;
	var blueDiference = 0;

	var changedPixels = 0;
	var redChangedPixels = 0;
	var greenChangedPixels = 0;
	var blueChangedPixels = 0;

	for (var i = 0, n = canvasComponentsDiferencePixels.length; i < n; i += 4) {
		canvasComponentsDiferencePixels[i + 0] =  Math.abs(canvasImage1Pixels[i + 0] - canvasImage2Pixels[i + 0]);
		canvasComponentsDiferencePixels[i + 1] =  Math.abs(canvasImage1Pixels[i + 1] - canvasImage2Pixels[i + 1]);
		canvasComponentsDiferencePixels[i + 2] =  Math.abs(canvasImage1Pixels[i + 2] - canvasImage2Pixels[i + 2]);
		canvasComponentsDiferencePixels[i + 3] = 255;

		if(canvasComponentsDiferencePixels[i + 0] != 0){
			redChangedPixels += 1;
		}
		if(canvasComponentsDiferencePixels[i + 1] != 0){
			greenChangedPixels += 1;
		}
		if(canvasComponentsDiferencePixels[i + 2] != 0){
			blueChangedPixels += 1;
		}

		redDiference += canvasComponentsDiferencePixels[i + 0];
		greenDiference += canvasComponentsDiferencePixels[i + 1];
		blueDiference += canvasComponentsDiferencePixels[i + 2];
		colorDiference += canvasComponentsDiferencePixels[i + 0] + canvasComponentsDiferencePixels[i + 1] + canvasComponentsDiferencePixels[i + 2];

		if((canvasImage1Pixels[i + 0] != canvasImage2Pixels[i + 0]) || (canvasImage1Pixels[i + 1] != canvasImage2Pixels[i + 1]) || (canvasImage1Pixels[i + 2] != canvasImage2Pixels[i + 2])){
			canvasMarkedComponentsDiferencePixels[i + 0] = canvasComponentsDiferencePixels[i + 0];
			canvasMarkedComponentsDiferencePixels[i + 1] = canvasComponentsDiferencePixels[i + 1];
			canvasMarkedComponentsDiferencePixels[i + 2] = canvasComponentsDiferencePixels[i + 2];

			canvasPixelsDiferencePixels[i + 0] = markedPixelsColor[0];
			canvasPixelsDiferencePixels[i + 1] = markedPixelsColor[1];
			canvasPixelsDiferencePixels[i + 2] = markedPixelsColor[2];

			canvasMarkedPixelsDiferencePixels[i + 0] = markedPixelsColor[0];
			canvasMarkedPixelsDiferencePixels[i + 1] = markedPixelsColor[1];
			canvasMarkedPixelsDiferencePixels[i + 2] = markedPixelsColor[2];

			changedPixels += 1;
		}else{
			canvasMarkedComponentsDiferencePixels[i + 0] = canvasImage1Pixels[i + 0];
			canvasMarkedComponentsDiferencePixels[i + 1] = canvasImage1Pixels[i + 1];
			canvasMarkedComponentsDiferencePixels[i + 2] = canvasImage1Pixels[i + 2];

			canvasPixelsDiferencePixels[i + 0] = 0;
			canvasPixelsDiferencePixels[i + 1] = 0;
			canvasPixelsDiferencePixels[i + 2] = 0;

			canvasMarkedPixelsDiferencePixels[i + 0] = canvasImage1Pixels[i + 0];
			canvasMarkedPixelsDiferencePixels[i + 1] = canvasImage1Pixels[i + 1];
			canvasMarkedPixelsDiferencePixels[i + 2] = canvasImage1Pixels[i + 2];
		}
		canvasPixelsDiferencePixels[i + 3] = markedPixelsColor[3];
		canvasMarkedComponentsDiferencePixels[i + 3] = 255;
		canvasMarkedPixelsDiferencePixels[i + 3] = markedPixelsColor[3];
	}

	canvasComponentsDiferenceContext.putImageData(canvasComponentsDiferenceImageData, 0, 0);
	canvasPixelsDiferenceContext.putImageData(canvasPixelsDiferenceImageData, 0, 0);
	canvasMarkedComponentsDiferenceContext.putImageData(canvasMarkedComponentsDiferenceImageData, 0, 0);
	canvasMarkedPixelsDiferenceContext.putImageData(canvasMarkedPixelsDiferenceImageData, 0, 0);

	var returnData = new Object();
	returnData.colorDiference = colorDiference;
	returnData.redDiference = redDiference;
	returnData.greenDiference = greenDiference;
	returnData.blueDiference = blueDiference;
	returnData.maxColorDiference = totalPixels * 3 * 255;
	returnData.maxColorDiferenceForChangedPixels = changedPixels * 3 * 255;
	returnData.maxComponentDiference = totalPixels * 255;
	returnData.maxComponentDiferenceForChangedPixels = changedPixels * 255;
	returnData.maxRedDiference = redChangedPixels * 255;
	returnData.maxGreenDiference = greenChangedPixels * 255;
	returnData.maxBlueDiference = blueChangedPixels * 255;

	returnData.totalPixels = totalPixels;
	returnData.changedPixels = changedPixels;
	returnData.redChangedPixels = redChangedPixels;
	returnData.greenChangedPixels = greenChangedPixels;
	returnData.blueChangedPixels = blueChangedPixels;

	returnData.canvasComponentsDiference = canvasComponentsDiference;
	returnData.canvasPixelsDiference = canvasPixelsDiference;
	returnData.canvasMarkedComponentsDiference = canvasMarkedComponentsDiference;
	returnData.canvasMarkedPixelsDiference = canvasMarkedPixelsDiference;

	return returnData;
}

/**
 * Divides two canvas in chunks. Then compares them chunk by chunk and returns an array of objects with information about the difference between the chunks.
 *
 * @since 0.1.0
 * @static
 * @param {HTMLCanvasElement} canvasImage1 First canvas  to compare.
 * @param {HTMLCanvasElement} canvasImage2 Second canvas to compare.
 * @param {Number} rows Number of rows in which the canvas will be splited.
 * @param {Number} columns Number of columns in which the canavas will be splited.
 * @returns {Object[][]} Array of objects with the information about the difference between the chunks in which the canvas have been splitted.
 */
JICompare.CompareFractional = function(canvasImage1, canvasImage2, rows, columns){
	var width = canvasImage1.width;
	var widthPerColumn = width/columns;
	var widthPerColumnInteger = Math.floor(widthPerColumn);
	var height = canvasImage1.height;
	var heightPerRow = height/rows;
	var heightPerRowInteger = Math.floor(heightPerRow);

	var returnData = new Array();

	var lastWidth = 0;
	var counterWidth = 0;
	var lastHeight = 0;
	var counterHeight = 0;
	for(var i = 0; i < rows; i++){
		returnData[i] = new Array();
		var currentHeight = heightPerRowInteger * (i + 1);
		if(((heightPerRow * (i + 1))- currentHeight - counterHeight) >= 1){
			counterHeight++;
			currentHeight++;
		}

		for(var j = 0; j < columns; j++){
			var currentWidth = widthPerColumnInteger * (j + 1);
			if(((widthPerColumn * (j + 1))- currentWidth - counterWidth) >= 1){
				counterWidth++;
				currentWidth++;
			}

			var reducedCanvasImage1 = document.createElement("canvas");
			reducedCanvasImage1.width = widthPerColumnInteger + counterWidth;
			reducedCanvasImage1.height = heightPerRowInteger + counterHeight;
			reducedCanvasImage1.getContext("2d").putImageData(canvasImage1.getContext('2d').getImageData(lastWidth, lastHeight, currentWidth, currentHeight), 0, 0);

			var reducedCanvasImage2 = document.createElement("canvas");
			reducedCanvasImage2.width = widthPerColumnInteger + counterWidth;
			reducedCanvasImage2.height = heightPerRowInteger + counterHeight;
			reducedCanvasImage2.getContext("2d").putImageData(canvasImage2.getContext('2d').getImageData(lastWidth, lastHeight, currentWidth, currentHeight), 0, 0);

			lastWidth = currentWidth;
			returnData[i][j] = JICompare.Compare(reducedCanvasImage1, reducedCanvasImage2, rows, columns);
		}
		lastWidth = 0;
		counterWidth = 0;
		lastHeight = currentHeight;
	}
	counterHeight = 0;

	return returnData;
}

/**
 * Takes a snapshot of the video passed in the param.
 *
 * @since 0.1.0
 * @static
 * @param {HTMLVideoElement} video Video to take a snapshot.
 * @return {HTMLCanvasElement} Canvas with a snapshot of the video passed in the param.
 */
JICompare.TakeVideoSnapshot = function (video) {
	var canvas = document.createElement("canvas");
	canvas.width = cameraScreen.videoWidth;
	canvas.height = cameraScreen.videoHeight;
	canvas.getContext("2d").drawImage(video, 0, 0);

	return canvas;
}
