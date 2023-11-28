function Validation() {
    var vali = true; 

    let hesaru = document.formName.Name1.value;
    if (hesaru.length <= 3) {
        errorMsg('naaam','Name must be at least 4 characters');
        // alert('Name must be at least 4 characters');
        vali = false; // Set vali to false if condition fails
    }

    let emailEnter = document.formName.Email1.value;
    if(emailEnter==null){
        document.getElementById('span2').innerHTML='* Enter a valid email Id';
        vali= false;
    }
    let phoneNumber = document.formName.contact.value;
    if (phoneNumber.length !== 10) {
        document.getElementById('span4').innerHTML='* Enter 10 digit phone number ';
        vali = false;
    }

    let newPass = document.formName.confirm1.value;
    let confPass = document.formName.confirms2.value;
    if (newPass !== confPass) {
        document.getElementById('span6').innerHTML='Password Mismatch';
        vali = false;
    }

    let checkBox = document.formName.Check1.checked; 
    if (!checkBox) {
        alert('Checkbox must be checked');
        vali = false;
    }



    function errorMsg(id, errorCon){
        Element= document.getElementById(id);
        Element = document.getElementsByClassName('errorMessage')[0].innerHTML= errorCon;
    
    }
    
    
    return vali; 
}

function cleat(){
    document.getElementById('span1').innerHTML='';
    document.getElementById('span2').innerHTML='';
    document.getElementById('span4').innerHTML='';
    document.getElementById('span6').innerHTML='';
   
}