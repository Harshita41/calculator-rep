let screen = ''; //displays the content on calculator screen
let arr = []; // holds operators and operands

let operands = document.querySelectorAll( '#number'); //targets all operands
console.log( operands )

//displays the operand on screen with the help of event listener
for ( let num of operands ) {
    num.addEventListener( 'click' , () => {
        document.getElementById( 'screen' ).value += num.innerHTML; //displays operand on screen
        screen += num.innerHTML; //stores the operand in string
        let count = 0;
        for ( let elements of screen ) {
            if ( elements === '.') {
                count++;
            }
            if ( count > 1) {
                document.getElementById ( 'screen' ).value = 'Invalid number !';
                screen = '';
            }
        }
        console.log ( "screen value" + screen );
    })
}



//targetting the operators

let operators = document.querySelectorAll ( '#operator' );
console.log ( operators );

// event listener for selecting operators
for ( let opr of operators ) {
    opr.addEventListener( 'click' , () => {
        document.getElementById( 'screen' ).value += opr.innerHTML; //displays operator on screen
        //pushing operands in array
        if ( screen.length != 0 ) {
            arr.push ( screen );
            console.log(arr)
        }
        //adding operators in array
        arr.push ( opr.innerHTML )
        console.log(arr);
        screen = ''; 
    })
}

let equal = document.querySelector( '#equals' );
equal.addEventListener( 'click' , () => {
    arr.push ( screen ); //push last operand in arr
    console.log (arr);
    function calculator ( arr ) {

        if( arr[0] === '') {
            return "Expression not entered";
        }
        //last element is an operator
        else if ( arr[ arr.length - 1] === "") {
            return "invalid expression";
        }

        
        else {  
            //if expression starts with a minus sign
            if ( arr[0] === '-' ) {
                arr[0] = arr[0] + arr[1];
                arr.splice(1 , 1);
                console.log(arr);
            }

            //if expression starts with a plus sign
            if ( arr[0] === '+' ) {
                arr.splice(0 , 1);
                console.log( arr );
            }

            let i;
            //checking the presence of operator on odd indexes
            for ( i = 1 ; i < arr.length ; i = i+2) {
                if ( arr[i - 1] === "+" || arr[i - 1] === "-" || arr[i - 1] === "*" || arr[i - 1] === "/"  || arr[ i + 1 ] === "+" || arr[ i + 1 ] === "-" || arr[ i + 1 ] === "*" || arr[ i + 1 ] === "/" ) {
                    return "Invalid expression";
                }
            }
                
            //solving all division operation
            for ( i = 1 ; i < arr.length ; i = i + 2 ) {
                if ( arr[i] === '/' ) {
                    if ( Number ( arr[ i + 1 ] === 0 ) ) {
                        return "invalid operation";
                    } else {
                        //storing result of division operation
                        arr[i-1] = ( Number ( arr[i - 1] ) / Number ( arr[i + 1] )).toFixed(2);
                        arr.splice( i , 2); //removing elements from already solved indices
                        i = i - 2 ;
                        console.log(i);
                        console.log (arr);
                    }
                }
            } 
            //solving all multiplication operation
            for ( i = 1 ; i < arr.length ; i = i + 2 ) {
                if ( arr[i] === '*' ) {
                    //storing result of multiplication operation
                    arr[i - 1] = ( Number ( arr[i - 1] ) * Number ( arr[i + 1] )).toFixed(2);
                    arr.splice( i , 2); //removing elements from already solved indices
                    i = i - 2 ;
                    console.log (arr);
                }
            } 
            //solving all addition operation
            for ( i = 1 ; i < arr.length ; i = i + 2 ) {
                if ( arr[i] === '+' ) {
                    //storing result of addition operation
                    arr[i - 1] = ( Number ( arr[i - 1] ) + Number ( arr[i + 1] )).toFixed(2);
                    arr.splice( i , 2); //removing elements from already solved indices
                    i = i - 2 ;
                }
            } 
            //solving all subtraction operation
            for ( i = 1 ; i < arr.length ; i = i + 2 ) {
                if ( arr[i] === '-' ) {
                    //storing result of subtraction operation
                    arr[i - 1] = ( Number ( arr[i - 1] ) - Number ( arr[i + 1] )).toFixed(2);
                    arr.splice( i , 2); //removing elements from already solved indices
                    i = i - 2 ;
                }
            }
            
            return arr[0];
        }
    }
    let result = calculator(arr);
    
    document.getElementById('screen').value = result;
    screen = result;
    arr = [];
    
});

let del = document.querySelector( '#del' );
del.addEventListener ( 'click' , () => {
    arr = [];
    screen = '';
    document.getElementById( 'screen' ).value = '';
})










