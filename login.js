



function submit() {
    

    let login = document.getElementById('lid').value;
    let password = document.getElementById('pid').value;

    if(login.length == 0 && password.length == 0 ){
        let ldisp = document.getElementById('loginDisp');
        ldisp.innerText = "username can't be empty";
        console.log(ldisp.innerText);
        let passDisp = document.getElementById('passDisp');
        passDisp.innerText = "Password can't be empty";
        console.log(passDisp.innerText);
    

    }
    else if(login.length == 0){
        let ldisp = document.getElementById('loginDisp');
        ldisp.innerText = "Login can't be empty";
        console.log(ldisp.innerText);
    }
    else if(password.length == 0){
        let passdisp = document.getElementById('passDisp');
        passdisp.innerText = "Password can't be empty";
        console.log(passdisp.innerText);
    }
    else if( password.length <=5 && password.length !=0){
        let passDisp = document.getElementById('passDisp');
        passDisp.innerText = "Weak";
        console.log(passDisp.innerText);
    }
    else if( password.length >5 && password.length<=8 ){
        let passDisp = document.getElementById('passDisp');
        passDisp.innerText = "Moderate";
        console.log(passDisp.innerText);
    }
    else{
        let passDisp = document.getElementById('passDisp');
        passDisp.innerText = "Strong";
        console.log(passDisp.innerText);
}
}
