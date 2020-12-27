function solution(files) {
    const reg = /(\d+)/g
    const map = []
    
    for(let i = 0; i < files.length; i++){
        map.push(files[i].split(reg))
    }
    map.sort((a,b) => {
        const aHead = a[0].toLowerCase()
        const bHead = b[0].toLowerCase()
        const aNumber = Number(a[1])
        const bNumber = Number(b[1])
        
        if(aHead < bHead){
            return -1
        } else if(aHead > bHead){
            return 1
        } else {
            if(aNumber < bNumber){
                return -1
            } else {
                return 1
            }
        }
    })
    const sortedMap = map.map(e => e.join(""))
    return sortedMap
}