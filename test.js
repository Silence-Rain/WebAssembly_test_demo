var importObj = {
	env: {
		memoryBase: 0,
		tableBase: 0,
		memory: new WebAssembly.Memory({initial:0,maximum:0}),
		table: new WebAssembly.Table({initial:2,maximum:2,element:'anyfunc'}),
		abort: ()=>{}
	}
}

// 封装的异步loader
function load(path) {
	return fetch(path)
		// 获取二进制buffer
		.then(res => res.arrayBuffer())
		// 编译&实例化，导入js对象
		.then(bytes => WebAssembly.instantiate(bytes, importObj))
		// 返回实例
		.then(res => res.instance)
}


function fibonacci_js(n) {
	let first = 0, second = 1, next;
	for (let i = 0; i < n; i++)
	{
		next = first + second;
		first = second;
		second = next;
	}
	return second;
}

load("./test.wasm").then(instance => {
	// 导出模块中的函数
	const fibonacci_wasm = instance.exports._fibonacci

	var beg1 = new Date()
	for (var i = 0; i < 1000000; i++) {
		fibonacci_js(46)
	}
	console.log("1m fibonacci(46) in js: ", new Date() - beg1)
	var beg2 = new Date()
	for (var i = 0; i < 1000000; i++) {
		fibonacci_wasm(46)
	}
	console.log("1m fibonacci(46) in webassembly: ", new Date() - beg2)
})
