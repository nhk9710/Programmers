function solution(polynomial) {
    let num = 0;
    let x = 0;
    let arr = polynomial.split(' ')
    let arrX = 
    arr.filter((v) => v.includes("x"))
    .map((v) => (v.split("x")[0] ? v.split("x")[0] : "1"));
    let numArr = arr.filter((v) => +v);
    if(numArr.length > 0){
        numArr.map(v => {
            num += Number(v)
        })
    }
    if(arrX.length > 0){
        arrX.map(v => {
            x += Number(v)
        })
        if(x===1){
            x = ''
        }
    }
    return arrX.length > 0 && numArr.length < 1 ? String(x) + 'x' : arrX.length < 1 && numArr.length > 0 ? String(num) : String(x) + 'x ' + '+ ' + String(num)
}