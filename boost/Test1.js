/*
문제 설명

반려동물 이름을 지어주려고 여러 사람에게 제안을 받아서 목록을 만들었습니다. 
전체 목록에서 어떤 이름이 다른 이름에 일부 포함되거나 중복되는 게 있는지 확인하려고 합니다.
후보 이름을 담은 배열 name_list가 solution 함수에 매개변수로 주어질 때, 
어떤 이름이 다른 이름에 일부라도 포함되거나 중복되는 경우가 있으면 true, 그렇지 않으면 false를 리턴하도록 solution 함수를 작성해주세요.
제한 사항
name_list의 길이는 0 이상 10,000 이하입니다.
각 이름은 길이가 1 이상 16 이하인 문자열입니다.

입출력 예시
name_list                    return
["가을", "우주", "너굴"]        false
["봄","여울","봄봄"]            true
["너굴", "너울", "여울", "서울"]  false
입출력 예 #1
다른 이름에 포함한 경우가 없으니까 답은 false입니다.
입출력 예 #2
봄 글자가 다른 이름에 포함한 경우가 있으므로 답은 true입니다.
입출력 예 #3
다른 이름에 포함한 경우가 없으니까 답은 false입니다.
*/

function solution(name_list) {
  let tempArr = name_list.filter((name, index) => {
    return name_list.indexOf(name) === index;
  });
}
console.log(solution(["가을", "우주", "너굴"]));
