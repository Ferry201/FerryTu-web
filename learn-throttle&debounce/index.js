import { debounce } from './debounce';
import { throttle } from './throttle';

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

//按钮点击生成随机数,3s内只会生成一次.
const el_search_onchange = debounce((value) => {
	el_rst.innerText = `这是${value}的搜索结果`;	
} , 1500);

el_search.addEventListener('input' , (e) => {
	el_search_onchange(e.target.value);
});


























































function _debounce (callback,timeout) {
	let cb,timeoutID;
	
	return (...args) => {
		if(timeoutID){
			clearTimeout(timeoutID);
		}
		timeoutID = setTimeout(() => {
			callback(...args);
		},timeout);
		
	}
}
