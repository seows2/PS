function solution(s, n) {
    const sArr = s.split("")
    let result = []
    let remain = n
    let min = 9999999
    let op = 0

    for (const al of sArr) {
        const idx = result.findIndex((el) => el.al === al);
        if(idx !== -1 ){
            //알파벳 있
            result[idx].cnt++
        } else {
            //알파벳 없
            result.push({al, cnt: 1});
        }
    }
    result.sort((a, b) => b.cnt - a.cnt);

    if(result[result.length-1].cnt <= remain){
        remain -=result[result.length-1].cnt
        op = result[0].cnt-result[1].cnt
        min = min > op ? op : min
        result.pop()
    }
    //console.log(result, remain);
    while (remain !== 0) {
       result[0].cnt--
       remain--
       result.sort((a, b) => b.cnt - a.cnt);
       op = result[0].cnt-result[1].cnt
       min = min > op ? op : min
    }

    let answer = min
    console.log(answer);
    return answer
}

solution("aaaabbbbc", 5)