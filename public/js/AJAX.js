var checkbox = document.querySelectorAll(".controller");

$(checkbox).click(function(){
    $.ajax({
        type: "POST",
        url: "/m/update",
        data: {
            id: this.id,
            watched: this.checked == true ? true : false
        }
      });      
});

