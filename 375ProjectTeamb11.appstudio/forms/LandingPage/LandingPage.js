let req = ""
let query = ""
let results = ""
let netID = "gak77901"
let pw = "Ym100%otsydt" 
let databaseSchema = "375groupb11"

hmbrLanding.onclick=function(s){
    if (typeof(s) == "object") {
       return
     } else {
       switch(s) {
            case "Account":
                ChangeForm(Customer)
                break
            case "Sign In":
                ChangeForm(Login)
                break
        }
    }
}       


btnLandingSubmit.onclick=function(){
  ChangeForm(ResultsPage)
}