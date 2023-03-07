import React from "react";
import validate from "./Validate.js";
import styles from "./Form.module.css"

export default function Form(props) {
    const [userData, setUserData] = React.useState({ username: '', password: '' });
    const [errors, setErrors] = React.useState({ username: '', password: '' });
    function handleInputChange(e) {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...userData,
            [e.target.name]: e.target.value
        }))
    }
    function handleSubmit(e) {
        e.preventDefault()
        props.login(userData)
    }

    return (
        <div>
            <form onSubmit={((e) => {
                handleSubmit(e)
            })}>
                <div className={styles.container}>
                    <img src="https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/GI3V26CAZRE5BPFDDL4BLDB7VU.jpg"
                        className={styles.imagen} alt="fondo" />
                    <div className={styles.username}>
                        <label className={styles.label}>Username:</label>
                        <input type="text" className={styles.input} name="username" placeholder="Username"
                            onChange={(e) => handleInputChange(e)}></input>
                        <p className={styles.p}>{errors.username}</p>
                    </div>
                    <div className={styles.username}>
                        <label>Password:</label>
                        <input type="text"
                            className={styles.input}
                            name="password"
                            placeholder="Password"
                            onChange={(e) => handleInputChange(e)}></input>
                        <p className={styles.p}>{errors.password}</p>
                    </div>
                    <button type="sudmit" className={styles.button}>Login</button>

                </div>
            </form>
        </div>
    )
}