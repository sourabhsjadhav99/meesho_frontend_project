import React, { useState } from "react";
import { auth } from './firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from './AuthContext';


const Signup = () => {
    const navigate = useNavigate();
    const notify = (message) => toast(message);
    const { setIsLoggedIn } = useAuth();
    const {setloginnumber} =  useAuth()



    const [hasFilled, setHasFilled] = useState(false);
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [phone, setPhone] = useState('+91');

    const generateRecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                // ...
            }
        }, auth);
    };

    const handleSend = (event) => {
        setloginnumber(phone)

        event.preventDefault();
        setHasFilled(true);
        generateRecaptcha();
        let appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, `+91${phone}`, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
            }).catch((error) => {
                // Error; SMS not sent
                console.log(error);
            });
    };

    const handleOtpChange = (element, index) => {
        let otpArray = [...otp];
        otpArray[index] = element.value;
        setOtp(otpArray);

        // Move to next input if a digit is entered
        if (element.nextSibling && element.value) {
            element.nextSibling.focus();
        }

        // Verify OTP if all inputs are filled
        if (otpArray.join("").length === 6) {
            let otpValue = otpArray.join("");
            let confirmationResult = window.confirmationResult;
            confirmationResult.confirm(otpValue).then((result) => {
                // User signed in successfully.
                let user = result.user;
                setIsLoggedIn(true);
                console.log(user);
                navigate("/");
            }).catch((error) => {
                // User couldn't sign in (bad verification code?)
                notify('User couldn\'t sign in (bad verification code?)');
            });
        }
    };

    return (
        <div className="bg-[#fdecef] h-[110vh]">
            <div className="flex flex-col justify-center pt-9 items-center">
                <img className=" w-[421px] h-[206px] rounded" src="https://images.meesho.com/images/marketing/1661417516766.webp" alt="" />
                <div className="bg-white pt-10  w-[421px] h-[68vh] text-[20px] font-[600] font-[Mier bold] pl-12">
                    {!hasFilled ? (
                        <>
                            <p>Sign Up to view your profile</p>
                            <p className="text-[12px] mt-7 text-gray-400">Country</p>
                            <div className="flex gap-5 mt-3">
                                <p className="text-[17px] border-b-2">IN +91</p>
                                <input onChange={(event) => setPhone(event.target.value)} className="text-[17px] border-b-2  outline-none" placeholder="Phone Number" />
                            </div>
                        </>
                    ) : (
                        <div className='app__container'>
                            <div sx={{ width: '300px' }}>
                                <div sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                    <p sx={{ padding: '20px' }} variant='h5' component='div'>Enter the OTP</p>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: "10%", marginTop: "20px", width: '240px' }}>
                                        {otp.map((data, index) => (
                                            <input
                                                key={index}
                                                type="text"
                                                maxLength="1"
                                                value={data}
                                                onChange={e => handleOtpChange(e.target, index)}
                                                style={{ width: '30px', height: '30px', textAlign: 'center', marginRight: '5px', fontSize: '20px', borderBottom: "1px solid black" }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div id="recaptcha"></div>
                        </div>
                    )}
                    <button className="bg-[#9f2089] mt-11 rounded-md text-white w-[335px] h-[48px]" type="button" onClick={handleSend}>Continue</button>

                    <div className="text-[12px] w-[230px] m-auto mt-[150px]">
                        By continuing, you agree to Meesho’s Terms & Conditions and Privacy Policy
                    </div>
                    <div id="recaptcha"></div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Signup;
