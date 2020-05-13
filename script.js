$(document).ready(function(){

     $("#submit").on("click", function(){
      

        var city=$("#search").val();
        city = city.replace(" ", "%");
     

        var API_KEY = '16502464-7153b39dda231f11debcca3fa';
        var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + city + "&image_type=photo";
   
        console.log(URL);
        
        $.ajax({
            type: "GET",
            url: URL,
            dataType: "json",
            success: function(data) {
                
                 $("#images").empty();

                const imageUrl = data.hits[3].webformatURL;
                console.log(imageUrl);
            

                var image = "<img src= '" + imageUrl + "' />";
                 $("#images").append(image);
                

        
            }
        });

        $.ajax({
            type: "GET",
            url: URL,
            dataType: "json",
            success: function(data) {
               
                const imageUrl = data.hits[10].webformatURL;
                console.log(imageUrl);
            

                var image = "<img src= '" + imageUrl + "' />";
                 $("#images").append(image);
                

        
            }
        });


        $.ajax({
            type: "GET",
            url: URL,
            dataType: "json",
            success: function(data) {
               
                const imageUrl = data.hits[9].webformatURL;
                console.log(imageUrl);
            

                var image = "<img src= '" + imageUrl + "' />";
                 $("#images").append(image);
                

        
            }
        });


        $.ajax({
            type: "GET",
            url: URL,
            dataType: "json",
            success: function(data) {
               
                const imageUrl = data.hits[13].webformatURL;
                console.log(imageUrl);
            

                var image = "<img src= '" + imageUrl + "' />";
                 $("#images").append(image);
                

        
            }
        });

        
        

    })
})