$(document).ready(onHtmlLoaded);

function onHtmlLoaded() {
    console.log("Document loaded");

    $('#comment-add').on('submit', function(event) { 
        event.preventDefault();
        
         var firstName = $('#firstName').val();
         var lastName = $('#lastName').val();
         var gender = $('input[name=gender]:checked', '#comment-add').val();
         var message = $('.message').val();
         
         var isValid = Validate(firstName, lastName, message);
         if (isValid == true) {
           $('#successDiv').text('Thank you for contacting us, ' + firstName + ' !').show();
         }
         else { 
           return false;
         }
         
        console.log("First Name = ", firstName);
        console.log("Last Name = ", lastName);
        console.log("Gender = ", gender);
        console.log("Message = ", message);
        this.reset();
    });
    
    function Validate(firstName, lastName, message)
    {
        $('#successDiv').hide();
        AddErrorClasses(firstName, lastName, message);
        
        if(firstName == '' || lastName == '' || message == '')
            return false;
         
         if(firstName != '' && lastName != '' && message != '')
            return true;
    }
    
    function AddErrorClasses(firstName, lastName, message)
    {
         if (firstName == '') {
            $('#firstName').addClass('errorClass');
        }
        else {
            $('#firstName').removeClass('errorClass');
        }
        
        if (lastName == '') {
            $('#lastName').addClass('errorClass');
        }
        else {
            $('#lastName').removeClass('errorClass');
        }
        
       if (message == '') {
            $('.message').addClass('errorClass');
        }
        else {
            $('.message').removeClass('errorClass');
        }
    }
}