function solution(numbers) {
    let answer = 0;
    for(let i=1; i<10; i++){
        switch (i){
            case 1:
                if(numbers.indexOf(1)===-1){answer += 1}
                break;
            case 2:
                if(numbers.indexOf(2)===-1){answer += 2}
                break;
            case 3:
                if(numbers.indexOf(3)===-1){answer += 3}
                break;
            case 4:
                if(numbers.indexOf(4)===-1){answer += 4}
                break;
            case 5:
                if(numbers.indexOf(5)===-1){answer += 5}
                break;
            case 6:
                if(numbers.indexOf(6)===-1){answer += 6}
                break;
            case 7:
                if(numbers.indexOf(7)===-1){answer += 7}
                break;
            case 8:
                if(numbers.indexOf(8)===-1){answer += 8}
                break;
            case 9:
                if(numbers.indexOf(9)===-1){answer += 9}
                break;
        }
    }
    return answer;
}