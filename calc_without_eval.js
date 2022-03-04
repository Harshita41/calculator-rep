import { add , sub, mul , div } from "./library-function.js";
let screen = ''; //displays the content on calculator screen
let arr = []; // holds operators and operands
let result = []; //holds results of arithmetic operation

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
    let i;
    
    for( i = 0 ; i < arr.length ; i++ ) {
        if ( arr[i] == '+' ) {
            let num1;
            if ( result.length != 0 ) {
                num1 = result[result.length - 1];
            } else {
                num1 = arr[i - 1];
            }
            console.log ( num1 ); //6
            let num2 = arr[i + 1]
            console.log ( num2 ); //4
            let temp = add ( num1 , num2 );
            result.push( temp );
            //result=[3 , 6, 10]
        }
        else if ( arr[i] == '-' ) {
            let num1;
            if ( result.length != 0 ) {
                num1 = result[result.length - 1];
            } else {
                num1 = arr[i - 1];
            }
            let num2 = arr[i + 1]
            let temp = sub ( num1 , num2 );
            result.push( temp );
        }
        else if ( arr[i] == '*' ) {
            let num1;
            if ( result.length != 0 ) {
                num1 = result[result.length - 1];
            } else {
                num1 = arr[i - 1];
            }
            let num2 = arr[i + 1]
            let temp = mul ( num1 , num2 );
            result.push( temp );
        }
        else if ( arr[i] == '/' ) {
            let num1;
            if ( result.length != 0 ) {
                num1 = result[result.length - 1];
            } else {
                num1 = arr[i - 1];
            }
            let num2 = arr[i + 1]
            let temp = div ( num1 , num2 );
            result.push( temp );
        }    
    }
    document.getElementById('screen').value = result[result.length - 1];
    screen = result[result.length - 1];
    arr = [];
    result=[];
});

let del = document.querySelector('#del');
del.addEventListener ( 'click' , () => {
    result = [];
    arr = [];
    screen = '';
    document.getElementById( 'screen' ).value = '';
})








