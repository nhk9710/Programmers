function solution(board) {
    let arr = []
    let chk = false;
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[i].length; j++){
            if(
                (board[i-1] && board[i-1][j]===1) 
                || (board[i+1] && board[i+1][j]===1)
                || (board[i][j-1] && board[i][j-1]===1)
                || (board[i][j+1] && board[i][j+1]===1)
                || (board[i-1] && board[i-1][j-1]===1)
                || (board[i-1] && board[i-1][j+1]===1)
                || (board[i+1] && board[i+1][j+1]===1)
                || (board[i+1] && board[i+1][j-1]===1)
            ){
                arr.push([i,j])}
            if(board[i][j]===1){arr.push([i,j]); chk = true;}
        }
    }
    const uniqueArr = (array) => {
        return [...new Set(array.join(' ').split(' '))]
        .map((v) => v.split(','))
        .map((v) => v.map((a)=>+a));
    }
    const newArr = uniqueArr(arr)
    return chk===true ? board.length**2-newArr.length : board.length**2;
}