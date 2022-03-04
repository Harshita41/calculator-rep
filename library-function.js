let add = (a,b) => {
    a=parseFloat(a)
    b=parseFloat(b)
    return (a+b).toFixed(2);
}

let sub = (a,b) => {
    a=parseFloat(a)
    b=parseFloat(b)
    return (a-b).toFixed(2);
}

let mul = (a,b) => {
    a=parseFloat(a)
    b=parseFloat(b)
    return (a*b).toFixed(2);
}

let div = (a,b) => {
    a=parseFloat(a)
    b=parseFloat(b)
    if (b==0) {
        return "Undefined"
    } else {
        return (a/b).toFixed(2);
    }
}

let modulodiv = (a,b) => {
    a=parseFloat(a)
    b=parseFloat(b)
    if (b==0) {
        return "Undefined"
    } else {
        return (a%b).toFixed(2);
    }
}

export { add, sub, mul, div, modulodiv};