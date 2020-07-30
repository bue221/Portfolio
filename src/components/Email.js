import React,{ useState } from 'react'
import emailjs from 'emailjs-com'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';


import './styles/Email.css'

const Email = (props)=>{

				const service_id = "default_service";
				const template_id = "template_299HwnVb";
				const user_id = "user_7WGsNgHCIsOUAgfXmbLIU"


				const [email, setEmail] = useState('')
				const [number, setNumber] = useState('')
				const [name, setName] = useState('')
				const [info, setInfo] = useState('none')

				var a = email.search('@')

				const enable = (name != '' & email != '' & number != '' & a>0 ) ? true : false;
				//console.log(enable);
								

				const submit = e => {
								e.preventDefault();
								emailjs.send(service_id,template_id,{email, number, name}, user_id)
												.then(function(response) {
															  setInfo('success')
																setTimeout(()=>{ setInfo('')} , 3000)
												}, function(error) {
																setInfo('error')
																setTimeout(()=>{ setInfo('')} , 6000)
												});
								setEmail('');
								setNumber('');
								setName('');
				}
				
				const handleEmailChange = event =>{
								setEmail(event.target.value)
								//console.log(email);
				}

				const handleName = event =>{
								setName(event.target.value)
								//console.log(name);
				}

				const handleNumber = event =>{
								setNumber(event.target.value)
								//console.log(number)
				}

				return(
								<div id='contact'>
												<form className="contact">
																<h2 className="contact-title">Contact</h2>
																{ !enable ?
																<Alert severity="info">Enter a valid email and fill in all fields to send your information</Alert>:''}
																<div className="fields">
																				<TextField
																				type='email'
																				value={email}
																				onChange={handleEmailChange}
																				name='email'
																				id="standard-basic" 
																				label="Email" />

																				<TextField
																				type='text'
																				value={name}
																				onChange={handleName}
																				name='Name'
																				id="standard-basic" 
																				label="Name" />

																				<TextField
																				type='tel'
																				value={number}
																				onChange={handleNumber}
																				name='number'
																				id="standard-basic" 
																				label="Number" />
																				
																				<Button 
																				disabled={!enable}   
																				variant="contained" 
																				color="secondary" 
																				onClick={submit} 
																				className='contact-boton'
																				type='submit'>
																								Send
																				</Button>
																{info == 'success' ? <Alert severity="success">Your information has been sent</Alert>:
																info == 'error' ? <Alert severity="error">Error sending the information check your email</Alert>: ''
																}
																</div>
												</form>
								</div>
								)
}

export default Email
