/*
문제 설명

조이스틱으로 알파벳 이름을 완성하세요. 맨 처음엔 A로만 이루어져 있습니다.
ex) 완성해야 하는 이름이 세 글자면 AAA, 네 글자면 AAAA
조이스틱을 각 방향으로 움직이면 아래와 같습니다.
▲ - 다음 알파벳
▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
▶ - 커서를 오른쪽으로 이동
예를 들어 아래의 방법으로 JAZ를 만들 수 있습니다.
- 첫 번째 위치에서 조이스틱을 위로 9번 조작하여 J를 완성합니다.
- 조이스틱을 왼쪽으로 1번 조작하여 커서를 마지막 문자 위치로 이동시킵니다.
- 마지막 위치에서 조이스틱을 아래로 1번 조작하여 Z를 완성합니다.
따라서 11번 이동시켜 "JAZ"를 만들 수 있고, 이때가 최소 이동입니다.
만들고자 하는 이름 name이 매개변수로 주어질 때, 이름에 대해 조이스틱 조작 횟수의 최솟값을 return 하도록 solution 함수를 만드세요.

제한 사항
name은 알파벳 대문자로만 이루어져 있습니다.
name의 길이는 1 이상 20 이하입니다.
입출력 예

name	return
JEROEN	56
JAN	    23
출처
※ 공지 - 2019년 2월 28일 테스트케이스가 추가되었습니다.
*/

function solution(name) {
    const nameArr = [...name]

    const getUD = (name_alpah) => {
        const alpha = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
        const idx = alpha.indexOf(name_alpah)
        const min = Math.min(idx, alpha.length- idx)
        return min
    }

    const getLR = () => {
        let tempArr = nameArr.slice()
        tempArr.splice(0, 1, "A")
        let left = 0
        let right = 0
        let curPos = 0
        let count = 0
        let fin = 0
        let LR = 0

        tempArr.forEach(e =>{
            if(e !== "A") fin++
        })
        while (fin !== 0) {
            fin--
            count = 0
            left = curPos
            right = curPos
            
            while (true) {
                if(--left < 0) left += nameArr.length
                if(++right > nameArr.length-1) right -= nameArr.length
                count++
                //console.log(left, right)
                if(tempArr[right] !== "A"){
                    //console.log("right", right, count);
                    curPos=right
                    tempArr.splice(curPos, 1, "A")
                    //console.log(tempArr);
                    break
                }
                if(tempArr[left] !== "A"){
                    //console.log("left", left, count);
                    curPos=left
                    tempArr.splice(curPos, 1, "A")
                    //console.log(tempArr);
                    break
                }
                
            }
            LR+=count
        }
       
        return LR
    }

    // A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
    let UD = 0
    for (const name_alpah of nameArr) {
        UD += getUD(name_alpah)
    }
    const LR = getLR()

    //console.log(UD,LR);
    return UD+LR
}

solution("BBAABB")