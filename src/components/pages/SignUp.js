import React from "react";
import '../../components/pages/SignUp.css';

export default function SignUp() {
    return (
       
        <div class="container">
       
      <form action="./message.html" method="get">
        <div>
            
          <label for=""> First Name</label>
          <input type="text" placeholder="Enter your first name" name="Fname" required />
        </div>
        <div>
          <label for=""> Last Name</label>
          <input type="text" placeholder="Enter your last name" name="Lname"  required/>
        </div>
        <div>
          <label for="">Email</label>
          <input
            type="email"
            placeholder="Enter your email address"
            name="Email"
            required
          />
        </div>
        <div>
          <label for=""> Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            required
          />
        </div>
        <div>
          <label for=""> Gender</label>
          <input type="radio" name="Gender" />Male
          <input type="radio" name="Gender" />Female
          <input type="radio" name="Gender" />Other
        </div>
        <br />
        <div>
          <label for=""> Mobile Number</label>
          <input
            type="number"
            placeholder="Enter your mobile number"
            name="number"
            required
          />
        </div>
        <div>
          <label for=""> Date of birth </label>
          <input type="date" name="dob" />
        </div>
        <div>
          <label for=""> Select city</label>
          <select name="city">
            <option disabled selected>Select your birth place</option>
            <option value="Agra">Agra</option>
            <option value="Mathura">Mathura</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Jaipur">Jaipur</option>
          </select>
        </div>

        <input type="submit" />
        <input type="reset" />
      </form>
      
    </div>
    );
}