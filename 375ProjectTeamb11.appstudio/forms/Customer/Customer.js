


hmbrLandingCopy.onclick=function(){
      if (typeof(s) == "object") {
       return
     } else {
       switch(s) {
            case "Home":
                ChangeForm(LandingPage)
                break
            case "Sign In":
                ChangeForm(Login)
                break
        }
    }
}
