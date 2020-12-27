function solution(s) {
    let cnt = 0
    let zeroCnt = 0
    let newNumber = s
    while(true){
        if(newNumber === "1"){
            break
        }
        cnt++
        const trans = [...newNumber].filter(e => {
            if(e === "0"){
                zeroCnt++
                return false
            }
            return true
        })
        newNumber = (trans.length).toString(2)
    }
    return [cnt, zeroCnt]
}