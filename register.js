

function submit() {
    
    let name =  document.getElementById('fname').value;
    let login = document.getElementById('lid').value;
    let phone = document.getElementById('phone').value;
    

    if(name.length == 0 && login.length == 0 && phone.length == 0 ){
        let namedisp = document.getElementById('namedisplay');
        namedisp.innerText = "Name can't be empty";
        console.log(namedisp.innerText);

        let userdisplay = document.getElementById('unamedisplay');
        userdisplay.innerText = "Username can't be empty";
        console.log(userdisplay.innerText);

        let phone = document.getElementById('pdisplay');
        phone.innerText = "Phone number can't be empty";
        console.log(phone.innerText);


    

    }
    else if(name.length == 0){
        let namedisp = document.getElementById('namedisplay');
        namedisp.innerText = "Name can't be empty";
        console.log(namedisp.innerText);
    }
    else if(login.length == 0){
        let userdisplay = document.getElementById('unamedisplay');
        userdisplay.innerText = "Username can't be empty";
        console.log(userdisplay.innerText);
    }
    else if( phone.length == 0){
        let phone = document.getElementById('pdisplay');
        phone.innerText = "Phone number can't be empty";
        console.log(phone.innerText);
    }
    else if( phone.length > 0 && phone.length<10  ){
        let phone = document.getElementById('pdisplay');
        phone.innerText = "Invalid Number";
        console.log(phone.innerText);
    }
    else{
        let message = document.getElementById('message');
        message.innerText = "Successful Registration";
        console.log(message.innerText);
}
}