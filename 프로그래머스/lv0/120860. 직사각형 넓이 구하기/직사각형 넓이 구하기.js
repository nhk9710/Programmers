function solution(dots) {
    let xarr = []
    let yarr = []
    for(let i=0; i<dots.length; i++){
        xarr.push(dots[i][0])
        yarr.push(dots[i][1])
    }
    let horizontal = Math.max(...xarr)-Math.min(...xarr);
    let vertical = Math.max(...yarr)-Math.min(...yarr);
    
    return answer = horizontal*vertical;
}