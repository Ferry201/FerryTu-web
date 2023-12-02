export const debounce = (callback , timeout) => {
	let timeID;
	return function (...arg) {
		clearTimeout(timeID);
		timeID = setTimeout(() => {
			callback(...arg);
		} , timeout);
	};
	
	
};
