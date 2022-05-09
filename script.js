
$(document).ready(function() {

    console.log(printObject( $('.g.tF2Cxc:nth-child(3n)') ) );

    function printObject( obj ) {
        return obj.map( function() {
            return $(this).text();
        }).toArray().toString();
    }

});

// function getEveryNth(arr, searchResult) {
//     arr = $(".g.tF2Cxc");

//     searchResult = [];

//     for (let i = 0; i < arr.length; i++) {
//         searchResult.push($(arr[i]).innerHTML);
//     }
  
//     return searchResult;
//   }
  
//   console.log(getEveryNth(arr, 3));

    




  
