import { useState } from "react"

export const Profile = (props) => {
    const[username, setUserName] = useState('');
    const[age, SetAge] = useState('');
    const[gender, setGender] = useState('');
    const[dob, setDob] = useState('');  
    const[phone, setPhone] = useState('');   

    const handleLogout = (e) => {
         e.preventDefault();
         console.log(dob);
         handleLogout.push('/login');
    }
    return (
        <>
        <label>PROFILE PAGE </label>
        <form>
            <label>UserName</label> 
                <input value={username} onChange={(e) => setUserName(e.target.value)} type="text" placeholder="Enter the UserName" id="username" name="username"/>
                <br />
            <label>Age </label>   
            <input value={age} onChange={(e) => SetAge(e.target.value)} type="age" placeholder="Enter your Age" id='age' name='age' />
            <br />
            <label>Gender</label>
            <input value={gender} onChange={(e) => setGender(e.target.value)} type="radio"  id='gender' name='gender' />Male
            <input value={gender} onChange={(e) => setGender(e.target.value)} type="radio"  id='gender' name='gender' />Female
            <br />
            <label>Date of Birth </label>
            <input value={dob} onChange={(e) => setDob(e.target.value)} type="dob" placeholder="Enter your Date of Birth" id='dob' name='dob' />
            <br />
            <label>Mobile</label>
            <input type="phone" country={'ind'} name="phone" placeholder="Enter your PhoneNo" value={phone} onChange={(e)  => setPhone(e.target.value)}  />
             <br />
            </form>
            <button type="button" onClick={handleLogout}>Logout</button>
        </>
    )

}
export default Profile;