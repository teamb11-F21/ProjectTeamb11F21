


hmbrLanding.onclick=function(s){
    if (typeof(s) == "object") {
       return
     } else {
       switch(s) {
            case "Account":
                ChangeForm(CustomerAccount)
                break
            case "Sign In":
                ChangeForm(Login)
                break
            case "Contact Us":
                ChangeForm(ContactUs)
                break
        }
    }
}       

