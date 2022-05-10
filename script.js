
$(document).ready(function() {

    // console.log(printObject( $('.g.tF2Cxc:nth-child(3n)') ) );

    // function printObject( obj ) {
    //     return obj.map( function() {
    //         return $(this).text();
    //     }).toArray().toString();
    // }


    // let result = [];
    // let arr = $([]);

    // for (let i = 0; i < arr.length; i++) {
    //     if(arr.length % 3 === 0) {
    //         $(result).push( $(arr[i]));
    //     }
    // };

    // console.log(result);

});


let arr = Array.from('.g.tF2Cxc');
let searchResult = [];
    if(arr.length % 3 === 0) {
        for (let i = 0; i < arr.length; i++) {
            searchResult.push( arr[i].innerText );
            console.log(searchResult);
        };
    };
    



  


  
  


    




  
