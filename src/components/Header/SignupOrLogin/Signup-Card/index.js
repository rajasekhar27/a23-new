import '../../Css/signup-card.css'

const SignupCard = ({handleCloseLoginSignUp}) => {
    return(
        <div id="signup-my-card" className="my-login-card-container modal-content">

            <div className="badge-container">
                <img src="/assets/images/header/sign-up-bonus.png" alt="signup and get off" className="w-100" style={{width:'120px'}} />
            </div>

            <div style={{position:'absolute',top:10,right:10,}}>
                <button onClick={() => handleCloseLoginSignUp()} style={{padding:'8px',background:'#9c9d9f',border:'none',borderRadius:'4px',cursor:'pointer',color:'black'}} type="button" id="cross"><img src="/assets/images/header/signup-close.svg" height={12} width={12} alt=""/></button>
            </div>

            <div>
                <h1  style={{fontWeight:700,fontSize:'20px',color:'#fffdea',textAlign:'center'}}>sign up & Play Now</h1>
            </div>

            <form id="signupForm" > 
                <div  style={{padding:'0 20px'}}>

                    <div  style={{borderBottom:'1.4px solid #868e92',padding:'10px 0',}}>
                        <span >+91</span>
                        <input type="text" name="mobileNo"  id="mobilenumber" placeholder="Enter Mobile Number" maxLength="10" autoComplete="off" style={{background:'none',border:'none',outline:'none',color:'white',marginLeft:'10px'}}/>
                    </div>
                
                    <button type="submit" id="continue-signup" className="mybtn mybtn-success success-glow" >
                        Request OTP
                    </button>

                    <div style={{marginTop:'20px'}}>
                        <label   style={{color:'#9c9d9f',fontSize:'11px',}}>
                            I confirm I am 18 and above and I accept the Terms & Conditions
                        </label>
                    </div>

                </div>

                <div style={{marginTop:'25px',textAlign:'center'}}>
                    <span style={{fontWeight:400,color:'white'}}>Already have an account?</span> <span id="signup-my-card" style={{fontWeight:600,color:'#eabf69',marginLeft:'8px',textDecoration:'underline',cursor:'pointer'}}>Login</span>
                </div>

            </form>

        </div>
    )
}

export default SignupCard