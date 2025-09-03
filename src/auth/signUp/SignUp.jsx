import React,{useEffect, useState} from 'react'

const SignUp = () => {
    const [username, setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')
    const [passwordCheck, setPasswordCheck] = useState('')
    const [email,setEmail] = useState('')
    

    
    const passwordTest =(password)=>{
      const isLongEnough = password.length >= 8;
      const hasLowercase = /[a-z]/.test(password);
      const hasUppercase = /[A-Z]/.test(password);
      const hasNumber = /[0-9]/.test(password);
      const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]/.test(password);

  // Return true only if ALL conditions are true
  return isLongEnough && hasLowercase && hasUppercase && hasNumber && hasSpecialChar;
    }
    

    const handleSubmit = (e)=>{
        e.preventDefault()
        //this checks for username password and email
        if((!username || username.length <= 2 ) || !password || !email){
          setError('please input the username, password and email')
          return;
        }
        setError('')

        //this block tests to see if the password passes the security check
        if(!passwordTest(password)){
          setPasswordCheck('password not secure enough')
          return;
        }
        setPasswordCheck('')
        
        
      }
      
      useEffect(()=>{
        if(passwordTest(password)){
          const timer = setTimeout(() => {
            setPasswordCheck('password checked')
          },1000);
          setPasswordCheck('')
          return ()=>{clearTimeout(timer)}
        }
          
        },[passwordTest(password)])

        


    

  

       

// this gets the username
    const handleUsername = (e)=>{
        setUsername(e.target.value)
    }
    // this gets the password
    const handlePassword =(e)=>{
        setPassword(e.target.value)
    }
    // this gets the email
    const handleEmail =(e)=>{
      setEmail(e.target.value)
    }

  return (
    <div >
        <form onSubmit={handleSubmit} 
         style={{
          display:'flex',
          flexDirection:'column',
          maxWidth:'300px',
          margin:'auto'
          
        }}>

            {/* this handles the input for the username */}
            <label htmlFor="username">Username:</label>
            <input type="text" 
                    value={username}
                    onChange={handleUsername}
                    id='username' />

            {/*this handles the password  */}
            <label htmlFor="password">Password:</label>
            <input type="password"
                    value={password}
                    onChange={handlePassword}
                    id='password' />

            {passwordCheck && <p style={{color:'red'}}>{passwordCheck}</p>}

            {/* this handles the email */}
            <label htmlFor="email">Email:</label>
            <input type="email"
                    value={email}
                    onChange={handleEmail} />
            

            {error && <p style={{color:'red'}}>{error}</p>}
            
            <button>Submit</button>

            
        </form>
      
    </div>
  )
}


export default SignUp
