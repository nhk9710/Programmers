function solution(s) {
    let count = 0; 
    let removedZeros = 0; 
    
    while (s !== "1") {
        count++;
        
        const originalLength = s.length;
        s = s.replace(/0/g, "");
        const zeroCount = originalLength - s.length; 
        removedZeros += zeroCount;  
        
        const binaryString = (s.length).toString(2);
        s = binaryString;
    }
    
    return [count, removedZeros];
}