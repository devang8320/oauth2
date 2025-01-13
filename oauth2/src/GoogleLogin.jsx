import React,{useState} from 'react'
import {useGoogleLogin} from '@react-oauth/google'
import { googleAuth } from "./api";
import {useNavigate} from 'react-router-dom';

function GoogleLogin(props) 
{
  const [user, setUser] = useState(null);
	const navigate = useNavigate();

    const handleLogin = async(authResult)=>
    {

        try 
        {
          console.log(authResult)
            
          if (authResult["code"]) {

            console.log("code is here")

            const result = await googleAuth(authResult.code);

            console.log("result is ",result)
            
            const {email, name, image} = result.data.user;
            const token = result.data.token;
            const obj = {email,name, token, image};


            console.log("obe is :  ",obj)


            localStorage.setItem('user-info',JSON.stringify(obj));
            navigate('/dashboard');
          } else {
            console.log(authResult);
            throw new Error(authResult);
          }
        } catch (e) {
          console.log('Error while Google Login...', e);
        }
    }

        const glogin = useGoogleLogin({
            onSuccess:handleLogin,
            onError : handleLogin,
            flow: 'auth-code'
        })
    
  return (
    <div>
      <button onClick={glogin}> 
        Login with Google 
        
      </button>
    </div>
  )
}

export default GoogleLogin
