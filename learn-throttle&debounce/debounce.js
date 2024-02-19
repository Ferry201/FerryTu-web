export const debounce = (callback , timeout,e) => {
	
	let time_ = null;
	return function (e) {
		if ( time_ !== null ) {
			clearTimeout(time_);
		}
		//触发事件n秒后执行callback,若这n秒内再次触发事件,则重新计时,也就是重置定时器
		time_ = setTimeout(function () {
			callback(e);
		} , timeout);
		// console.log(time_);
	};
	
	//利用一次性定时器，延迟任务的执行，在延迟这段时间内，
	// 如果任务再次被触发，则通过 clearTimeout 销毁上一次产生的定时器，
	// 因为定时器的被销毁，之前被延迟执行的任务也会随之被取消执行。
	// 这样就实现了在一定时间内，只执行一次任务。这一次的执行通常是最后一次的触发，
	// 因为此前的触发因为定时器的销毁而被取消了。
	// (也就是说,触发第一次时,延迟执行任务1,但在延迟的这段时间,又被触发,
	// 所以销毁上一次产生的,变为延迟执行任务2...以此类推)
};
