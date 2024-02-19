import './App.css';
import { Component } from "react";


function App () {
	
	return (
		<div className = "App">
			<Input
				onInput = { () => {
					console.log('change');
				} }
				blackStyle = { {
					color : '#ddddea' ,
					background : '#6a6d6d',
				} }
			   whiteStyle = { {
				   color : '#6a6d6d' ,
				   background : '#ddddea',
			   } }
			/>
			<Father/>
		
		</div>
	);
}


class Input extends Component {
	static defaultProps = {
		changeBlackText : '黑暗模式' ,
		changeWhiteText : '白天模式' ,
		blackStyle : { color:'white',background:'black' } ,
		whiteStyle : { color:'black',background:'white' },
	};
	
	constructor (props) {
		super(props);
		this.state = {
			show : false ,
			isBlack : false,
			initialPassword : 123456,
		};
	}
	
	handleClick () {
		this.setState({ show : !this.state.show });
		
	}
	
	handleClickOnLikeButton () {
		this.setState((prevState) => {
			console.log(prevState);
			return { count : 0 };
		});
		this.setState((prevState) => {
			return { count : prevState.count + 1 };
		});
		this.setState((prevState) => {
			console.log(prevState);
			return { count : prevState.count + 2 };
			
		});
		
	}
	
	cons () {
		if ( this.props.onInput ) {
			this.props.onInput();
		}
	}
	
	render () {
		return (
			<div>
				<PasswordInput
					InitialPassword = "123456"
					
				/>
				<button
					onClick = { () => {
						this.handleClickOnLikeButton();
					} }
				> { this.state.count === undefined ? 'click me' : this.state.count }</button>
				
				<button
					style = { this.state.isBlack ? this.props.blackStyle : this.props.whiteStyle }
					onClick = { () => {
						this.setState({ isBlack : !this.state.isBlack });
					} }
				>
					{ this.state.isBlack ? this.props.changeWhiteText : this.props.changeBlackText }</button>
			</div>
		
		);
	}
}


class PasswordInput extends Component{
	constructor (props) {
		super(props);
	}
	state = {
		inputValue :this.props.InitialPassword
	}
	render () {
		
		return(
			<div>
				<input
					value = { this.state.inputValue }
					onChange = { (e) => this.setState({inputValue:e.target.value}) }
					onInput={()=>{console.log(this.state.inputValue)}}
				/>
			</div>
		)
	}
}
class Password_Input extends Component{
	constructor (props) {
		super(props);
	}
	state = {
		inputValue :null
	}
	render () {
		
		return(
			<div>
				<input
					value = { this.state.inputValue ?? this.props.InitialPassword}
					onChange = { (e) => this.setState({inputValue:e.target.value}) }
					onInput={()=>{console.log(this.state.inputValue)}}
				/>
			</div>
		)
	}
}



class Father extends Component {
	constructor (props) {
		super(props);
		this.state = {
			value : '',
		};
	}
	
	setInputValue = (value) => {
		console.log(this.state.value);
		this.setState({ value : value });
	};
	
	render () {
		return (
			<div>
				<FrostUsers/>
				<Son2/>
				<button
					onClick = { () => {
						console.log(this.state.value);
					} }
				>click
				</button>
				<Son
					handleInput = { this.setInputValue }
					value = { this.state.value }
				/>
				<FrostUserFather/>
			</div>
		);
	}
}

class Son extends Component {
	constructor (props) {
		super(props);
		this.state = {};
	}
	
	render () {
		const value = this.props.value % 2 === 0 ? this.props.value : 0;
		console.log(this.props.value);
		
		return (
			<input
				value = { this.props.value }
				onChange = { (event) => {
					this.props.handleInput(event.target.value);
				} }
			
			/>
		);
		
	}
}

const Son2 = (props) => {
	const sayHi = (event) => alert('你好呀');
	return(
		<button onClick={sayHi}>点我</button>
	)
	
};

const FrostUsersArray=[
	{name:'小黄兔',food:'蘑菇汤',age:'17'},
	{name:'大白猫',food:'菠萝',age:'23'},
	{name:'陌生人',food:'草莓',age:'8'}
]
class FrostUsers extends Component {
	render(){
		return(
			<div>
				{FrostUsersArray.map((user)=>{
					return (
						<div key={Math.random()}>
							<div>姓名：{ user.name }</div>
							<div>食物：{ user.food }</div>
							<div>年龄：{ user.age }</div>
							<hr/>
						</div>
					)
				}) }
			</div>
		)
	}
}

class FrostUserFather extends Component{
	render(){
		return(
			<div>{FrostUsersArray.map((user,i)=><FrostUserSon user={user} key={i}/>)}</div>
		)
	}
}
class FrostUserSon extends Component{
	render(){
		const {user}=this.props
		return (
			<div>
				<div>姓名：{ user.name }</div>
				<div>食物：{ user.food }</div>
				<div>年龄：{ user.age }</div>
				<hr/>
			</div>
		)
	}
}






class TodoSign extends Component {
	constructor (props) {
		super(props);
		
		
		this.state = {
			inputValue : '' ,
		};
	}
	
	
	render () {
		const { inputValue } = this.state;
		return (
			<div className = "sign-up-box">
				<h1>Sign Up</h1>
				
				
				<form>
					<label htmlFor = "username">用户名：</label>
					
					<input
						type = "text"
						id = "username"
						name = "username"
					
					/>
					
					<p className = "mention user-mention"></p>
					
					<label htmlFor = "email">电子邮件：</label>
					
					<input
						type = "email"
						id = "email"
						name = "email"
						value = { inputValue }
						onChange = { (e) => this.setState({
							inputValue : e.target.value ,
						}) }
					
					/>
					
					<p className = "mention email-mention"></p>
					
					<label htmlFor = "password">密码：</label>
					
					<input
						type = "password"
						id = "password"
						name = "password"
					/>
					
					<p className = "mention psw-mention"></p>
					<label htmlFor = "captcha-verif">验证码：</label>
					
					<input
						type = "text"
						id = "captcha-verif"
						name = "captcha-verif"
					/>
					
					<img className = "captcha-img" />
					<span>看不清?</span>
					<button>
						<a>刷新</a>
					
					</button>
					<p className = "mention captchaVerif-mention"></p>
					
					
					<label htmlFor = "email-verif">邮箱验证码：</label>
					
					<input
						type = "text"
						id = "email-verif"
						name = "email-verif"
					/>
					
					<button className = "send-button">send</button>
					<p className = "mention emailVerif-mention"></p>
					
					
					<input
						type = "button"
						value = "提交"
						className = "sign-up-button"
					
					/>
				
				</form>
			</div>
		);
	}
	
	
}

export default App;
