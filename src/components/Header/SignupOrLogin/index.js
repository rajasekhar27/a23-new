"use client"

import { useState } from "react"
import Modal from "@/components/UI/Modal"
import SignupCard from "./Signup-Card"
import '../Css/signup-login.css'


const SignupOrLogin = () => {
    const [singupOrLogin,setSignupOrLogin] = useState(false)
    return(
        <>
            <div className="btn-login-signup">
                <button id="singup/login" className="gtm_rummy_web_nd_btn btn-radius btn-bordered-green btn-bordered font-size-sm lg:font-size-lg inner-custom-sm lg:inner-custom-lg" onClick={() => setSignupOrLogin(true)}>
                    <span>Sign Up / Login</span>
                </button>
            </div>
        

            <Modal
                isOpen={singupOrLogin} 
                modalOuterClick={() =>setSignupOrLogin(false) }
                parentClasses={`parentModal`}
            >
                <div onClick={(e) => e.stopPropagation()}>
                    <SignupCard handleCloseLoginSignUp={() => setSignupOrLogin(false)}/>
                </div>
            </Modal>

        </>
    )
}

export default SignupOrLogin