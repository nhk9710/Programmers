function solution(order) {
    let str = '';
    let arr = [];
    let clap = 0;
    let reg = /[369]/g;
    str = String(order);
    arr = str.match(reg);
    console.log(arr)
    if(arr !== null){
        for(let i=0; i<arr.length; i++){
            clap++;
        }
    }
    return clap;
}