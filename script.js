
$(document).ready(function() {

    // function getEveryNth(arr, searchResult) {
    //     arr = $(".g.tF2Cxc");

    //     searchResult = [];
  
    //     for (let i = 0; i < arr.length; i++) {
    //         searchResult.push($(arr[i]).html());
    //     }
      
    //     return searchResult;
    //   }
      
    //   console.log(getEveryNth([3, 6, 9], 3));



    console.log(printObject( $('.g.tF2Cxc:nth-child(3n)') ) );

    function printObject( obj ) {
        return obj.map( function() {
            return $(this).text();
        }).toArray().toString();
    }

});

    




  
