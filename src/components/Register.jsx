import { useState } from "react";

export const Register = (props) => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="register-form">
            <label> REGISTER PAGE </label><br />
            <form>
                <label>UserName</label> 
                <input value={username} onChange={(e) => setUserName(e.target.value)} type="text" placeholder="Enter the UserName" id="username" name="username" required/>
                <br />
                <label>Email ID</label> 
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter the Email" id="email" name="email" required/>
                <br />
                <label>Password</label>
                <input  value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter the Password" id="password" name="password" required/>
                <br />        
                <label>Confirm Password</label>
                <input  value={cpassword} onChange={(e) => setCPassword(e.target.value)} type="password" placeholder="Renter the Password" id="cpassword" name="cpassword" required/>
                <br />   
                <button onClick={handleSubmit}  type="button">Sign Up</button>
            </form>
            <button onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}


export default Register;