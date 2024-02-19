/**
 * 节流,返回一个函数,此函数在<timeout>时间内不会被重复调用,直到超时.
 * @param callback {Function}
 * @param timeout {number}
 * @returns {*}
 */
export const throttle = function (callback , timeout) {
//每隔一段时间执行一次
	let lastTime=0;
	return function () {
		let nowTime=Date.now()
		if(nowTime-lastTime>timeout){
			callback()
			lastTime=nowTime
		}
	}
	
	
};


