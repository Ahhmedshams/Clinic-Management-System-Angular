import { AbstractControl, ValidatorFn } from "@angular/forms";

export function passwordValidation(control:AbstractControl):{[key:string]:boolean}|null{
    const password=control.get('password');
    const confirmPassword=control.get('confirmPassword');
    if(password?.pristine ||confirmPassword?.pristine)
        return null;
    //making sure that password and confirmpassword arent blank and also that there value are equal
    return password && confirmPassword && password.value !=confirmPassword.value ?{'misMatch' : true} : null;
}