
 export function validate(values){
    var name=values.name;
    var pass=values.pass;
    var cpass=values.cpass;
    var err={}
    if(!name){
        err.name="Enter the name";
    }
    else if(name.length>8){
        err.name="Name should be 8 character"
    }
     if(!pass){
        err.pass="Password required"
    }
    else if(pass.length>8){
        err.pass="Password should be 8 strings"
    }
     if(!cpass){
        err.cpass="Confirm password required"
    }
    else if(pass!=cpass){
        err.cpass="Password didn't match"
    }
    return err;
}


export function loginValidate(values){
    var name=values.name;
    var pass=values.pass;
    var err={}
    if(!name){
        err.name="Enter the name";
    }
    if(!pass){
        err.pass="Password required"
    }
    return err;
}