var checkbox = document.querySelectorAll(".controller");

$(checkbox).click(function(){
    console.log("inside ajax");
    
    $.ajax({
        type: "POST",
        url: "/m/update",
        data: {
            id: this.id,
            watched: this.checked == true ? true : false
        }
      });
    
      console.log("went through?");
      
});

