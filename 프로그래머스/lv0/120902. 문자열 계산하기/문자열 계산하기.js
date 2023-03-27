function solution(str) {
    let answer = 0;
    let arr = str.split(' ')
    for(let i=0; i<arr.length; i++){
        if(Number(arr[i])){
            arr[i] = Number(arr[i])
        }else{
            if(arr[i]==='+'){
                if(answer !== 0){
                    answer = answer + Number(arr[i + 1])
                }else{
                    if(i !== 1){
                        answer = answer + Number(arr[i + 1])
                    }else{
                        answer = Number(arr[i - 1]) + Number(arr[i + 1])
                    }
                }
            }else{
                if(answer !== 0){
                    answer = answer - Number(arr[i + 1])
                }else{
                    if(i !== 1){
                        answer = answer - Number(arr[i + 1])
                    }else{
                        answer = Number(arr[i -1]) - Number(arr[i + 1])
                    }                      
                }
            }
        }
    }
    return answer;
}