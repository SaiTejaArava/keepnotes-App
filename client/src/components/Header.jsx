/*global google*/
import React,{useState,useEffect} from "react";
import axios from "axios";
require("dotenv").config();

function Header(props) {
  var [clicked,isclicked]=useState(false);
  var [cred,updatecred]=useState({name:"",password:"",email:""});
  var [user,setUser]=useState({});
  var [loginOrSignUp,setlogin]=useState("login");
  var [loginStatus,setLoginStatus]=useState(false);
  var [passwordStatus,setpassStatus]=useState(false);
  const Client_Id=process.env.REACT_APP_CLIENT_ID;
  axios.defaults.withCredentials=true;
  useEffect(()=>{
    axios.get("/login").then(res=> {
      
      if(res.data==="no"){
        google.accounts.id.initialize({
          client_id: Client_Id,
          callback: handleCredentialResponse
        }); 
        google.accounts.id.prompt(); 
      }
      else{
        setUser(res.data);
        setLoginStatus(true);
      }
    }).catch(err=>console.log(err));
    
  },[])

  const handleCredentialResponse=async response=>{
      await axios.post("/Glogin",response).then(res=>{
        props.getData(res.data);
        setUser(res.data);
      }).catch(err=> console.log(err));
      isclicked(false);
      setLoginStatus(true);
    }
    
  const shut=async (e)=>{
        const check=e.target.id;
        if(check==="modelDiv"){
            isclicked(false);
            setpassStatus(false);
            setlogin("login");
            updatecred({name:"",password:"",email:""});
          }
  }
  
  const triggerLogin=async (e)=>{
      e.preventDefault();
      await axios.post(loginOrSignUp==="login"? "/login":"/signup",cred).then(response=>{
        if(response.data!=="wrong"){
        props.getData(response.data);
        setUser(response.data);
        setLoginStatus(true);
        setpassStatus(false);
        isclicked(false);
      }
        else{
          setpassStatus(true);
        }
      }).catch(err=> console.log(err));
      
      updatecred({name:"",email:"",password:""});
  }

  const handlecred=(e)=>{
      var {name,value}=e.target;
      updatecred(prev=>({...prev,[name]:value}));
  }
  const handleLogin=(e)=>{
      setlogin(e.target.value);
  }
  const checkCookie=()=>{
    isclicked(true);
    
  }

  const makeDefault=()=>{
    setLoginStatus(false);
    props.signOut();
    axios.get("/signout").then(res=>console.log(res.data)).catch(err=> console.log(err));
    google.accounts.id.disableAutoSelect();
    isclicked(false);
  }
  useEffect(()=>{
    google.accounts.id.initialize({
        client_id: "768229132762-5mhr41tc287d787lblssb5ma7ra2qi5n.apps.googleusercontent.com",
        callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "dark", size: "large", data:"use" }  // customization attributes
    );
},[clicked]);

  return (
    <header>
      <h1>Keeper</h1>
      <div onClick={checkCookie}>{loginStatus? <h3><span><img src={user.picture}></img></span>
                                                {user.name}</h3>
                                                :<h3 id="modelCard" >Login</h3>}</div>
      {clicked && <div id="modelDiv" className="modelContainer" onClick={shut}>
        <div  className="model" id="mainModel" >
        {!loginStatus? <>
          <button className="close" onClick={()=> isclicked(false)}>X</button>
          <h1 className="modelHeading">Login/SignUp</h1>
          <form className="modelForm" onSubmit={triggerLogin}>
            {loginOrSignUp === "signup" && <>
            <label className="namelabel" htmlFor="name" >Name : </label>
            <input className="modelInput" name="name" type="text" onChange={handlecred} value={cred.name} autoComplete="off"  /><br/>
            </>}
            <label className="emaillabel" htmlFor="emial" >email : </label>
            <input className="modelInput" name="email" type="email" onChange={handlecred} value={cred.email} autoComplete="off"  /><br/>
            <label className="passwordlabel" htmlFor="password"> Password : </label>
            <input className="modelInput" name="password" type="password" onChange={handlecred} value={cred.password} autoComplete="off" /><br/>
            {passwordStatus && <p className="invalid">Invalid email/password</p>}
            <button className="login" type="submit" onClick={handleLogin} value={loginOrSignUp} >{loginOrSignUp}</button>
            <a className="signup" onClick={()=>{
              loginOrSignUp==="login"? setlogin("signup"):setlogin("login");
              updatecred({name:"",email:"",password:""});
              }}> {loginOrSignUp==="login"? "signup":"login"} </a>
            <div id="buttonDiv" className="Gbutton"></div>
          </form>
            </>:
            <div className="AfterLogin">
            <img src={user.picture} alt="image"></img>
            <hr />
            <h2 className="name">Name : {user.name}</h2>
            <h2>email : {user.email}</h2>
            <button onClick={makeDefault}>SignOut</button>
            </div>
            }
        </div>
      </div>}
    </header>
  );
}

export default Header;
