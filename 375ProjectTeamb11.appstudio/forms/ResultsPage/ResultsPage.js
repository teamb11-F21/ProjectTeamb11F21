
ResultsPage.onshow=function(){
   let searchingValue = inptRestSearch.value
      query = "SELECT * from restaurant Where city = '"+ searchingValue +"'"
   req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + databaseSchema + "&query=" + query)
   
//show name
  if (req.status == 200) {       
          results = JSON.parse(req.responseText)
        if (results.length == 0)
            lblResult1.value = "There are no restaurants in the database."
          else { 

              lblResult1.value = results[0][1] + "\n"
              lblResult2.value = results[1][1] + "\n"
              lblResult3.value = results[2][1] + "\n"
              
              lblAddress1.value = results[0][2] + ", " + results[0][3] + ", " + results[0][4] + " " + results[0][5]
              lblAddress2.value = results[1][2] + ", " + results[1][3] + ", " + results[1][4] + " " + results[1][5]
              lblAddress3.value = results[2][2] + ", " + results[2][3] + ", " + results[2][4] + " " + results[2][5]
      
              lblPhoneNum1.value = results[0][6]
              lblPhoneNum2.value = results[1][6]
              lblPhoneNum3.value = results[2][6]

        }
    } else {
        lblResult1.value = "Error code: " + req.status
 }

}


lblResult1.onclick=function(){
  ChangeForm(LandingPage)
}

lblResult2.onclick=function(){
  ChangeForm(MsPub)
}

lblResult3.onclick=function(){
  ChangeForm(LandingPage)
}


hmbrResultsPage.onclick=function(s){
        if (typeof(s) == "object") {
       return
     } else {
       switch(s) {
            case "Home":
                ChangeForm(LandingPage)
                break
            case "Account":
                ChangeForm(Customer)
                break
            case "Contact Us":
                ChangeForm(LogIn)
                break
}
}
}