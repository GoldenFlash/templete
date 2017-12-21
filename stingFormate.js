function stringFormate(string) {
 	var params = [].slice.call(arguments, 1);
 	console.log(params)
 	var reg = /\{(\d+)\}/g
 	var newstring = string.replace(reg, function() {
 		// console.log(arguments)
 		var index = arguments[1] - 1
 		console.log(index)
 		return params[index]

 	})
 	return newstring;

 }
 export {stringFormate}
 // stringFormate('{3} {1} {2}', 'hi', 'pp', 'aa')