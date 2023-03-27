function solution(keyinput, board) {
    let answer = [0,0];
    const keyCalc = value => {
        switch(value){
            case 'left':
                return answer[0]=answer[0]-1
            case 'right':
                return answer[0]=answer[0]+1
            case 'up' :
                return answer[1]=answer[1]+1
            case 'down':
                return answer[1]=answer[1]-1
        }
    }
    for(let i=0; i<keyinput.length; i++){
        keyCalc(keyinput[i])
        if(answer[0] > 0){
        if(answer[0] > Math.floor(board[0]/2)){answer[0] = Math.floor(board[0]/2)}
    }else{
        if(answer[0] < -Math.floor(board[0]/2)){answer[0] = -Math.floor(board[0]/2)}
    }
    if(answer[1] > 0){
        if(answer[1] > Math.floor(board[1]/2)){answer[1] = Math.floor(board[1]/2)}
    }else{
        if(answer[1] < -Math.floor(board[1]/2)){answer[1] = -Math.floor(board[1]/2)}
    }
    }
    return answer;
}