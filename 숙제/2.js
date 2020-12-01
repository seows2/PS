function solution(page, broken) {
    if(page === 100) return 0
    const pm = Math.abs(100-page)
    let notBroken = [0,1,2,3,4,5,6,7,8,9]
    broken.forEach(e => {
        const idx = notBroken.indexOf(e)
        notBroken.splice(idx,1)
    });

    //console.log(notBroken,"not","\n",broken,"bro");


    const minusOne = (notBroken, pageArr) => {
        let minusStr = ""
        const max = Math.max.apply(null, notBroken)
        for (let i = 0; i < pageArr.length-1; i++) {
            minusStr +=max
        }
        return Number(minusStr)
    }

    const plusOne = (notBroken, pageArr) => {
        let plusStr = ""
        const min = Math.min.apply(null, notBroken)
        for (let i = 0; i < pageArr.length+1; i++) {
            if(min === 0 && i === 0) plusStr+=notBroken[1]
            plusStr +=min
        }
        return Number(plusStr)
    }

    const equal = (notBroken, pageArr) => {
        let equalStr = ""
        for (let i = 0; i < pageArr.length; i++) {
            if(notBroken.includes(Number(pageArr[i]))){
                equalStr+=pageArr[i]
            } else {
                let tempArr = notBroken.slice()
                tempArr = tempArr.map(e => Math.abs(e-pageArr[i]))
                const min = Math.min.apply(null, tempArr)
                const idx = tempArr.indexOf(min)
                equalStr+=notBroken[idx]
            }
        }
        return Number(equalStr)
    }

    const pageArr = [...String(page)]

    const equalNum = equal(notBroken, pageArr)
    const minusNum = minusOne(notBroken, pageArr)
    const plusNum = plusOne(notBroken, pageArr)

    let eq =  Math.abs(equalNum-page)
    let mi = Math.abs(minusNum-page)
    let pl = Math.abs(plusNum-page)

    let answer = Math.min.apply(null, [eq, mi, pl, pm])

    if(answer === eq){
        answer +=pageArr.length
    } else if(answer === mi){
        answer +=pageArr.length-1
    } else if(answer === pl){
        answer +=pageArr.length+1
    }
    console.log(answer);
    return answer
}

solution(151241, [0,1,2,3,4,7,8,9])