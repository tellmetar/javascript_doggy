var buf = new Buffer(10);
len = buf.write("www.yifan.com");

console.log("ddd"+len);
console.log(buf.toString());
