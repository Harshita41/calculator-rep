let screen = ''; //displays the content on calculator screen
let arr = []; // holds operators and operands

let operands = document.querySelectorAll( '#number'); //targets all operands
console.log( operands )

//displays the operand on screen with the help of event listener
for ( let num of operands ) {
    num.addEventListener( 'click' , () => {
        document.getElementById( 'screen' ).value += num.innerHTML; //displays operand on screen
        screen += num.innerHTML; //stores the operand in string
        console.log ( screen );
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
        if ( arr[ arr.length - 1] === "") {
            return "invalid expression";
        }
        let i;
        //checking the presence of operator on odd indexes
        for ( i = 1 ; i < arr.length ; i = i+2) {
            if ( arr[i - 1] === "+" || arr[i - 1] === "-" || arr[i - 1] === "*" || arr[i - 1] === "/"  || arr[ i + 1 ] === "+" || arr[ i + 1 ] === "-" || arr[ i + 1 ] === "*" || arr[ i + 1 ] === "/" ) {
                return "Invalid expression";
            } else {
                if ( arr[i] === '+') {
                    arr[i+1] = ( Number( arr[i-1] ) + Number( arr[i+1] ) ).toFixed(2);
                }
        
                else if ( arr[i] === '-') {
                    arr[i+1] = ( Number ( arr[i-1] ) - Number ( arr[i+1] )).toFixed(2);
                }
        
                else if ( arr[i] === '*') {
                    arr[i+1] = ( Number ( arr[i-1] ) * Number ( arr[i+1] ) ).toFixed(2);
                }
        
                else if ( arr[i] === '/') {
                    if ( arr[i+1] === 0){
                        return 'undefined';
                    } else {
                        arr[i+1] = ( Number ( arr[i-1] ) / Number ( arr[i+1] )).toFixed(2);
                    }
                }
                //if no operator is there on odd index
                else {
                    console.log ('invalid expression');
                    return 'invalid expression';
                }
            }
        }  
        return arr[arr.length - 1];
    }
    let result = calculator(arr);
    
    document.getElementById('screen').value = result;
    screen = result;
    arr = [];
    
});

let del = document.querySelector('#del');
del.addEventListener ( 'click' , () => {
    arr = [];
    screen = '';
    document.getElementById( 'screen' ).value = '';
})








