/*
     Developed by the JavaScript team at Fullsail
     Date: 1306
*/

(function(){

    myform.onsubmit = function(e){

        //Below is one example of the validateField call with an argument.
        //You must dynamically retrieve the ID name from the DOM/HTML.


        var username=document.getElementById('f_username');
        var email=document.getElementById('f_email');
        var phoneNumber= document.getElementById('f_phone');
        var socialSecurityNumber= document.getElementById('f_ssn');
        var password=document.getElementById('f_password')
        validateField(f_username,f_email,f_phone,f_ssn,f_password);  //id = is the form input field ID
        e.preventDefault();
        return false;
    };


    var validateField = function(username,email,phoneNumber,socialSecurityNumber,password){

        if (username.name === 'f_username'){//validation for username
            var pattern = '/^[A-z]+ \s[A-z]$/'

            //You will need to create an else-if statement for each input field id.  The
            //      format will be similar to the above IF statement.


        };

        var pass = '/^[A-z]+ \s[A-z]$/';
        var errorMsg = username.nextSibling.nextSibling.nextSibling.nextSibling;

        if (!pass || username.value.length < 2){
            errorMsg.style.display='block';
            username.style.backgroundColor = 'red';
        } else if (pass && username.value.length > 5){
            errorMsg.style.display='none';
            username.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            username.style.backgroundColor = 'white';
        };


        if (email.name === 'f_email'){//validation for email
            var pattern = '/^[\w.-]+@[A-Za-z]{1,}\w.-+\.[A-Za-z]{2,4}$/'



        };

        var pass = '/^[\w.-]+@[A-Za-z]{1,}\w.-]+\.[A-Za-z]{2,4}]$/';
        var errorMsg = email.nextSibling.nextSibling.nextSibling.nextSibling;

        if (!pass || email.value.length < 2){
            errorMsg.style.display='block';
            email.style.backgroundColor = 'red';
        } else if (pass && email.value.length > 5){
            errorMsg.style.display='none';
            email.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            email.style.backgroundColor = 'white';
        };



        if (phoneNumber.name === 'f_phone'){//validation for phone number
            var pattern = '/^(\d{3})+\d{3}-\d{4}/$'



        };

        var pass = '/^(\d{3})+\d{3}-\d{4}/$/';
        var errorMsg = phoneNumber.nextSibling.nextSibling.nextSibling.nextSibling;

        if (!pass || phoneNumber.value.length < 2){
            errorMsg.style.display='block';
            phoneNumber.style.backgroundColor = 'red';
        } else if (pass && phoneNumber.value.length > 5){
            errorMsg.style.display='none';
            phoneNumber.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            phoneNumber.style.backgroundColor = 'white';
        };




        if (socialSecurityNumber.name === 'f_ssn'){//validation for social security number
            var pattern = '/^\d{3}-\d{2}-\d{4}$/'



        };

        var pass = '/^\d{3}-\d{2}-\d{4}$/';
        var errorMsg = socialSecurityNumber.nextSibling.nextSibling.nextSibling.nextSibling;

        if (!pass || socialSecurityNumber.value.length < 2){
            errorMsg.style.display='block';
            socialSecurityNumber.style.backgroundColor = 'red';
        } else if (pass && socialSecurityNumber.value.length > 5){
            errorMsg.style.display='none';
            socialSecurityNumber.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            socialSecurityNumber.style.backgroundColor = 'white';
        };





        if (password.name === 'f_password'){//validation for password
            var pattern = '/^[A-z]\w_{4,15}$/'


        };

        var pass = '/^[A-z]\w_{4,15}$/';
        var errorMsg = socialSecurityNumber.nextSibling.nextSibling.nextSibling.nextSibling;

        if (!pass || socialSecurityNumber.value.length < 2){
            errorMsg.style.display='block';
            socialSecurityNumber.style.backgroundColor = 'red';
        } else if (pass && socialSecurityNumber.value.length > 5){
            errorMsg.style.display='none';
            socialSecurityNumber.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            socialSecurityNumber.style.backgroundColor = 'white';
        };
    };

})();  // end wrapper



