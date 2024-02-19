import react , { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList  from './CommentList';
import '../index.css';



class CommentApp extends Component{
	constructor () {
		super();
		this.state={
			
		}
	}
	render(){
		return(
			<div className='wrapper'>
				<CommentInput/>
				<CommentList/>
			</div>
		)
	}
}



export default CommentApp;
