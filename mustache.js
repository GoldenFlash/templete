 function mustache(object) {
     var el = object.el ? object.el : this.templete;
     var elment = document.querySelector(el)

     var string = elment.innerHTML;
     var reg = /\{\{(\w+)\}\}/g
     var newstring = string.replace(reg, function() {
         console.log(arguments)
         var key = arguments[1]
         return data[key]

     })
     elment.innerHTML = newstring;
     console.log(newstring)

 }
 export { mustache }
 // stringFormate({
 // 	el:'.box'
 //     data: {
 //         name: 'wang',
 //         age: 12,
 //         q: 'qweqrterwrq'
 //     }
 // })