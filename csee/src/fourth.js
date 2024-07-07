import React from 'react';
function Registration(){
    return(
        <div>
            <input type="text" class="form-control" placeholder="First name" aria-label="First name"></input><br></br>
            <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"></input><br></br>
            <input type="text" class="form-control" placeholder="Mother name" aria-label="Mother name"></input><br></br>
            <input type="text" class="form-control" placeholder="Father name" aria-label="Father name"></input><br></br>
            <input type="text" class="form-control" placeholder="First name" aria-label="First name"></input><br></br>
            <label for="inputEmail4" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputEmail4"></input><br></br>
            <label for="inputPassword4" class="form-label">Password</label>
            <input type="password" class="form-control" id="inputPassword4"></input><br></br>
            <label>phone:</label>
            <input type="text" name="country code" placeholder="Country Code"  value="+91" size="2"/>   
            <input type="text" name="phone" placeholder="phone no." size="10"/><br></br> 
            <label for="gender">Gender:</label><br></br>
            <input type="radio" id="male" name="gender" value="male" required></input>
            <label for="male">Male</label>
            <input type="radio" id="female" name="gender" value="female"></input>
            <label for="female">Female</label><br></br>

            <label for="clg_name">College Name:</label><br></br>
            <select id="clg_name" name="clg_name" required>
            <option value="Select College">Select College</option>
            <option value="aits rajampet">aits rajampet</option>
            <option value="aits kadapa">aits kadapa</option>
            </select><br></br>

            <label for="branch">Branch:</label><br></br>
            <select id="branch" name="branch" required>
            <option value="">Select Branch</option>
            <option value="CSE">CSE</option>
            <option value="other branches">other branches</option>
            </select><br></br>

            <label for="date_of_joining">Date of Joining:</label><br></br>
            <input type="date" id="date_of_joining" name="date_of_joining" required></input><br></br>

            <label for="resume">Upload Resume:</label><br></br>
            <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" required></input><br></br>
            
            <input type="submit" value="Submit"></input>

            


            </div>

 );
}
export default Registration;