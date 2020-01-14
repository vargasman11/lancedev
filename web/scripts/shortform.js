// This controls the slider form function on the 3 dots under the questions
    
// FIRST SLIDE CONTROLLER
    $('#slide-btn-1').on("click", function(e){
        // make controller dark
        $('.circle-1').css("color", "black")    
        $('.circle-2').css("color", "#333")    
        $('.circle-3').css("color", "#333")    

        // show and hide controls
        $('#slide-1').css("display", "block")
        $('#slide-2').css("display", "none")
        $('#slide-3').css("display", "none")
        e.preventDefault();
    });

    // SECOND SLIDE CONTROLLER
    $('#slide-btn-2, #next-1').on("click", function(e){
        // make controller dark
        $('.circle-1').css("color", "#333")    
        $('.circle-2').css("color", "black")
        $('.circle-3').css("color", "#333")    

        // show and hide controls
        $('#slide-1').css("display", "none")
        $('#slide-2').css("display", "block")
        $('#slide-3').css("display", "none")
        e.preventDefault();
    });

    // THIRD SLIDE CONTROLLER
    $('#slide-btn-3, #next-2').on("click", function(e){
        // make controller dark
        $('.circle-1').css("color", "#333")
        $('.circle-2').css("color", "#333")
        $('.circle-3').css("color", "black")

        // show and hide controls
        $('#slide-1').css("display", "none")
        $('#slide-2').css("display", "none")
        $('#slide-3').css("display", "block")
        e.preventDefault();
    });
