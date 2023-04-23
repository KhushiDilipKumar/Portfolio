<script>
    function formValidate()
    {
      var roll = document.getElementById("rollno");
      var rollFormat = /^20BCE[0-9]{3}$/
      if(roll.value == "")
      {
        alert("Please enter your roll no.")
        return false
      }
      // else if(roll.value != rollFormat)
      // {
      //   alert("Invalid Format")
      //   return false
      // }
      else{
      var name = document.getElementById("Myname");
      var str = name.value
      if(str[0]<65 || str[0]>90)
      {
        window.alert("First letter should be capital")
        return false
      }
      else 
      {
       if(!isNaN(name.value))
       { 
        window.alert("Please enter a valid name");
        return false 
       }
       else
       {
       if(name.value == "")
      {
       window.alert("Please enter name");
       return false
      } 

      var FatherName = document.getElementById("Fname");
      if(FatherName.value == "")
      {
        window.alert("Please enter name");
        return false
      }
      else{
      if(!isNaN(FatherName.value))
      { 
       window.alert("Please enter a valid name");
       return false
      }

      var MotherName = document.getElementById("Mname");
      if(MotherName.value == "")
      {
        window.alert("Please enter name");
        return false
      }
      else{
      if(!isNaN(MotherName.value))
      { 
        window.alert("Please enter a valid name");
        return false
      }

      // /^[0-9]{2}[A-Z]{3}[0-9]{3}@nirmauni.ac.in$/
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
      var mail = document.getElementById("email");
      if(mail.value == "")
      {
        alert("Email ID is mandatory!!")
        return false
      }
      else{
      if(!mail.value.match(mailformat))
      {
        window.alert("You have entered an invalid email address!");
        return false
      }
      
      var PWformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
      var PW = document.getElementById("password");
      document.write(PW.value);

      if(PW.value == "")
      {
        alert("Password is mandatory!!")
        return false
      }
      else{
      if(PW.length < 8)
      {
        window.alert("Password must be of atleast 8 characters")
        return false
      }
      else{
      if(!PW.value.match(PWformat))
      {
        window.alert("Password must contain atleast one uppercase letter, one lowercase letter, one  numeric digit and one special character");
        return false
      }

      var Confirm = document.getElementById("ConfirmPW");
      document.write(Confirm.value)
      if(!(Confirm.value == PW.value)) 
      {
        alert("Password & Confirm passowrd should be same")  
        return false
      }
    }}}}}}}

      // function radioValidation()
      // {
      //    var gender = document.getElementsByName('gender');
      //    var genValue = false;
      //    for(var i=0; i<gender.length;i++)
      //    {
      //     if(gender[i].checked == true){
      //     genValue = true;    
      //    }
      //   }
      // if(!genValue)
      // {
      //   window.alert("Please Choose the gender");
      // }
      // } 
    }
  }
</script>