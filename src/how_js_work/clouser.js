const outerfunction = () => {
    let globalFunction = "Hello friends!";

    const  innerFunction = () => {
        console.log(globalFunction);
    }
    return innerFunction
}
var clouserFunction = outerfunction()
clouserFunction();