function countNumString(str) {
    const stat = {}; 
    
    for (const num of str){
           
         stat[num] = (stat[num] ?? 0) +1;

    }
    return stat;
}
countNumString("dddffffds");

