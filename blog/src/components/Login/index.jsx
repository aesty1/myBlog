import React, { useState } from "react";
import clsx from 'clsx';

import styles from "./Login.module.scss";

export const Login = ({isActive, onChange}) => {

    const [activeBlockNum, setActiveBlockNum] = useState(1);
    
    return (
        <>

            {isActive === true && (
                
                <div className={styles.overlay}>
                    <div className={styles.root}>
                        {activeBlockNum === 1 && (
                            <div className={styles.signin}>
                                <div className={styles.header}>
                                    <p className={styles.text}>SIGN IN</p>
                                    <button className={styles.close_button} onClick={() => {
                                        setActiveBlockNum(1);
                                        onChange(true);
                                    }}>
                                        <img src={"/resources/close.png"} alt=""/>
                                    </button>

                                </div>
                                <div className={styles.buttons}>
                                    <a href="#" className={styles.button}>
                                        <img src={"/resources/google.png"} alt=""/>
                                        <p>GOOGLE</p>
                                    </a>
                                    <a href="#" className={styles.button}>
                                        <img src={"/resources/vk.png"} alt=""/>
                                        <p>VK</p>
                                    </a>
                                    <a href="#" className={styles.button}>
                                        <img src={"/resources/email.png"} alt="" className={styles.email_img}/>
                                        <p>EMAIL</p>
                                    </a>
                                </div>
                                <button className={styles.register_button} onClick={() => setActiveBlockNum(2)}>
                                    <p>REGISTRATION</p>
                                </button>
                                <p className={styles.terms}>
                                    By entering, you accept the terms of the <span>User Agreement</span> and give <span>consent to the processing of your personal data</span> on the terms and for the purposes defined in <span>the policy regarding the processing of personal data.</span>
                                </p>
                            </div>
                        )}
                        {activeBlockNum === 2 && (
                            <div className={styles.login}>
                                <div className={styles.header}>
                                    <p className={styles.text}>SIGN IN</p>
                                    <button className={styles.close_button} onClick={() => {
                                        setActiveBlockNum(1);
                                        onChange(true);
                                    }}>
                                        <img src={"/resources/close.png"} alt=""/>
                                    </button>
                                </div>
                                <div className={styles.buttons}>
                                    <input href="#" className={styles.login_input} placeholder="E-mail"/>
                                    <input href="#" className={styles.login_input} placeholder="Password"/>
                                </div>
                                <button className={styles.register_button}>
                                    <p>LOGIN</p>
                                </button>
                                <a href="#" className={styles.register_link}  onClick={() => setActiveBlockNum(3)}>Register</a>
                            </div>
                        )}
                        {activeBlockNum === 3 && (
                            <div className={styles.register}>
                                <div className={styles.header}>
                                    <p className={styles.text}>SIGN IN</p>
                                    <button className={styles.close_button} onClick={() => {
                                        setActiveBlockNum(1);
                                        onChange(true);
                                    }}>
                                        <img src={"/resources/close.png"} alt=""/>
                                    </button>
                                </div>
                                <div className={styles.buttons}>
                                    <input href="#" className={styles.login_input} placeholder="User name"/>
                                    <input href="#" className={styles.login_input} placeholder="E-mail"/>
                                    <input href="#" className={styles.login_input} placeholder="Password"/>
                                </div>
                                <div className={styles.checkboxes}>
                                    <div className={styles.checkbox_container}>
                                        <input type="checkbox" id="happy" name="happy"/>
                                        <label for="happy" className={styles.terms}>Subscribe to newsletter</label>    
                                    </div>
                                    <div className={styles.checkbox_container}>
                                        <input type="checkbox" id="happy" name="happy"/>
                                        <label for="happy" className={styles.terms}>By entering, you accept the terms of the <span>User Agreement</span> and give <span>consent to the processing of your personal data</span> on the terms and for the purposes defined in <span>the policy regarding the processing of personal data.</span></label>    
                                    </div>
                                </div>
                                <button className={styles.register_button}>
                                    <p>REGISTER</p>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
        
        
        
    )
}