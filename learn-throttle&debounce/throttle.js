/**
 * 节流,返回一个函数,此函数在<timeout>时间内不会被重复调用,直到超时.
 * @param callback {Function}
 * @param timeout {number}
 * @returns {*}
 */
export const throttle = function (callback , timeout) {
	let timeID = null;
	
	// function _throttle () {
	// 	if ( timeID===null ) {
	// 		timeID = setTimeout(function () {
	// 			callback();
	// 			timeID = null;	
	// 		}, timeout);
	// 	}
	// 	console.log(timeID);
	// }
	
	//时间戳:
	// let preTime=Date.now();
	//preTime是闭包形成的那一刻Date.now的值,为了防止刷新后就立刻点击导致nextTime-preTime<timeOut,
	// 也就是说第一次查询没有查询结果,所以更好的做法是设置preTime的值为0.
	let preTime = 0;
	
	function _throttle () {
		let nextTime = Date.now();
		console.log(nextTime - preTime);
		if ( nextTime - preTime >= timeout ) {
			callback();
			preTime = nextTime;
		}
		
	}
	
	return _throttle;
	
};


