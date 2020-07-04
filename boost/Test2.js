/*
기본 내장된 Hash 나 Set 라이브러리를 사용하지 않고,
배열(혹은 List, Vector)만으로 집합Set을 구현합니다.
세부적인 동작으로 다음과 같은 함수를 구현해야 합니다.
sum(base, other) : Base Set에 other Set 원소들을 더해서 합집합을 리턴합니다.
이미 같은 값이 있으면 추가하지 않습니다. 
complement(base, other) : Base Set에서 other Set 원소를 빼서 차집합을 리턴합니다.
공통 값이 포함되어 있지 않으면 Base Set 원소를 그대로 리턴합니다.
intersect(base, other) : Base Set와 other Set 값과 비교해서,
두 집합에 모두 있는 원소들만 리턴합니다.
Solution 함수의 매개변수는 집합 Set을 생성하기 위한 배열 A 와 B를 받습니다.

출력은 각 함수의 결과를 
[ A로 생성한 Set 원소 개수, 
B로 생성한 Set 원소 개수, 
sum() 결과 집합 원소 개수, 
complement() 결과 집합 원소 개수, 
intersect() 결과 집합 원소 개수] 형태 배열로 만들어서 리턴합니다.

제한 사항
입력하는 값 크기는 0이상 1,000,000 이하입니다.
배열에 값이 있을 수도 있고, 없을 수도 있습니다.
Array, List나 Vector 만 사용 가능하며, Object, Hash, Dictionary, Map, Set 등은 사용하지 않고 구현합니다.
만약 Object, Hash, Dictionary, Map, Set 등을 사용하면 감점 사유가 됩니다.

입출력 예시
예시 1
매개변수 A = [1,2,3,2] 
매개변수 B = [1,3] 
A 집합 = [1,2,3]
B 집합 = [1,3]
합집합sum = [1,2,3] 
차집합complement = [2]
교집합intersect = [1,3]

리턴값 [3, 2, 3, 1, 2]  //A로 만든 집합 원소 개수는 3개, B로 만든 집합 원소 개수는 2개, 합집합 원소 개수는 3, 차집합 원소 개수는 1, 교집합 원소 개수는 2

예시 2
매개변수 A = [2,3,4,3,5] 
매개변수 B = [1,6,7]  
A 집합 = [2,3,4,5]
B 집합 = [1,6,7]
합집합sum = [1,2,3,4,5,6,7] 
차집합complement = [2,3,4,5]
교집합intersect = []

리턴값 [4, 3, 7, 4, 0]   //A로 만든 집합 원소 개수는 4개, B로 만든 집합 원소 개수는 3개, 합집합 원소 개수는 7, 차집합 원소 개수는 4, 공통 원소 개수는 0
*/

function solution(arrayA, arrayB) {
  console.log(arrayA, arrayB);
}

solution([2, 3, 4, 3, 5], [1, 6, 7]);
