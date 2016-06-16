$(document).ready(function() {

    var clickCount = 0;
    var imageArray = [];
    var mywin = 0;

    function hideAll() {
        clickCount = 0;
        imageArray = [];
        mywin = 0;
        $('img').fadeOut(2000);
    }



    $('.grid-cell').click(showImage);

    function showImage(e) {

        if(clickCount != 2){
            var element = $(e.target);
            var getAttr = element.children('img')
            getAttr.show();
            // console.log(clickCount);
            var image = getAttr.attr("src");
            imageArray.push(image);
            console.log(imageArray);
            clickCount++;
            if(clickCount == 2)
            {
                if(imageArray[0] == imageArray[1])
                {
                    // alert('You Matched!');
                    imageArray = [];
                    clickCount = 0;
                    mywin++;
                    if(mywin === 6)
                    {
                        alert('good job! Play Again!');
                        clickCount = 2;
                    }
                } else {
                     alert('You Lose!');
                     $('img').show();
                }
                // console.log(imageArray[0]);
                // console.log(imageArray[1]);
            }

        } else {
            alert('Play Again!');
        }
        
    }

    $('#reset').click(hideAll);

    hideAll();

});