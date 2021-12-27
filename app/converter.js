exports.rgbToHex = function (red,green,blue){

	//return red.toString(16);
	return pad(red.toString(16)) + pad(green.toString(16)) + pad(blue.toString(16));



}



exports.hexToRGB = function (hex){

	var red   = parseInt(hex.substring(0, 2), 16);
  var green = parseInt(hex.substring(2, 4), 16);
  var blue  = parseInt(hex.substring(4, 6), 16);

  return [red, green, blue];


}

function pad(hex){

	return (hex.length=== 1 ? "0"+hex:hex);
}