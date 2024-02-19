import { debounce } from './debounce.js';
import { throttle } from './throttle.js';

console.log(2222222222222);
/**
 * 测试用例*节流
 * 点击按钮生成随机数, 在一定时间内只会生成一次
 */

const el_fetch = document.getElementById('fetch');
const el_result = document.getElementById('result');

//按钮点击生成随机数,3s内只会生成一次.
const btnClick = throttle(() => {
	el_result.innerText = Math.random();
	//
} , 3000);

el_fetch.addEventListener('click' , () => {
	btnClick();
});

////////////////////////////////////////////////////

const el_search = document.getElementById('search');
const el_rst = document.getElementById('rst');


const el_search_onchange = debounce((value) => {
	el_rst.innerText = `这是${ value }的搜索结果`;
} , 1500);
//因为要传两次参数..第一次调用debounce,注册,
el_search.addEventListener('input' , (e) => {
	el_search_onchange(e.target.value);
	//第二次才是执行debounce返回的函数...so debounce函数里写return
	trigger(e);
});


const trigger = (e) => {
	deboun(() => {
		console.log(e.target.value);
	} , 1300);
};


const deboun = (callback , timeout) => {
	let time_ = null;
	return function (e) {
		if ( time_ !== null ) {
			clearTimeout(time_);
		}
		time_ = setTimeout(
			callback
			
			
			,timeout);
	};
};


function _debounce (callback , timeout) {
	let cb , timeoutID;
	
	return (...args) => {
		if ( timeoutID ) {
			clearTimeout(timeoutID);
		}
		timeoutID = setTimeout(() => {
			callback(...args);
		} , timeout);
		
	};
}
