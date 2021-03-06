/*
문제 설명

막대와 실, 물체를 이용해 모빌1을 만들려 합니다. 막대의 양 끝에 실을 이용해 물체나 다른 막대를 연결할 수 있습니다. 막대를 다른 막대의 끝에 매달 때는 매달리는 막대의 중앙에 실을 연결해야 합니다. 또, 막대 끝에는 한 번에 하나의 실만 연결해야 합니다.
모든 막대가 어느 한쪽으로 기울지 않고 바닥과 수평을 이루고 있으면 균형 잡힌 모빌이라고 합니다. 다양한 무게의 물체가 주어질 때, 최대한 많은 물체를 매달은 균형 잡힌 모빌 하나를 만들려 합니다. 단, 실과 막대의 무게는 무시한다고 가정합니다.
예를 들어 다음과 같은 물체가 있는 경우(숫자는 무게를 나타냅니다)
weight_1.png
균형 잡힌 모빌을 만드는 방법은 다음과 같이 3가지 입니다.
weight_2.png
weight_3.png
weight_4.png
이때, 가장 많은 물체를 매달은 모빌은 첫 번째 모빌이며, 사용한 물체의 무게는 [2, 2, 2, 2]입니다.
물체들의 무게가 담긴 배열 weights가 매개변수로 주어집니다. 물체를 최대한 많이 사용해서 균형잡힌 모빌 하나를 만들었을 때, 사용한 물체 개수의 최댓값을 return 하도록 solution 함수를 완성해주세요.
제한사항
weights 배열의 길이는 1 이상 100,000 이하입니다.
weights 배열의 원소는 1 이상 100,000 이하인 자연수입니다.
입출력 예
weights	result
[2, 2, 2, 2, 3, 3, 5, 6]	4
[3, 3, 3, 3, 3, 3, 12]	5
[16,16,16,16,16,16,16,16,1,1,2,4,4]	8
[1]	1
입출력 예 설명
입출력 예 #1
문제의 예시와 같습니다. 최대한 많은 물체를 사용해 균형 잡힌 모빌 하나를 만들고, 그때 사용한 물체의 개수를 return 하면 됩니다.
입출력 예 #2
다음과 같이 모빌을 구성하면 됩니다.
bobile_4.png
입출력 예 #3
무게가 16인 물체 8개를 이용해 모빌을 구성하면 됩니다.
입출력 예 #4
막대 없이 물체 하나만 실에 매달면 됩니다.
모빌(mobile)은 가느다란 실, 철사 등으로 여러 가지 모양의 쇳조각이나 나뭇조각을 매달아 미묘한 균형을 이루게 한 움직이는 조각을 말합니다. ↩ */

function solution(weight) {
  class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }

  class AVL {
    constructor() {
      this.root = null;
    }

    getRoot() {
      return this.root;
    }
    getHeight(node) {
      var h = 0;
      if (node != null) {
        var left = this.getHeight(node.left);
        var right = this.getHeight(node.right);
        var maxHeight = Math.max(left, right);
        h = maxHeight + 1;
      }
      return h;
    }
    getDiff(node) {
      var left = this.getHeight(node.left);
      var right = this.getHeight(node.right);
      return left - right;
    }
    rotateRR(node) {
      var temp = node.right;
      node.right = temp.left;
      temp.left = node;
      return temp;
    }
    rotateLL(node) {
      var temp = node.left;
      node.left = temp.right;
      temp.right = node;
      return temp;
    }
    rotateLR(node) {
      var temp = node.left;
      node.left = this.rotateRR(temp);
      return this.rotateLL(node);
    }
    rotateRL(node) {
      var temp = node.right;
      node.right = this.rotateLL(temp);
      return this.rotateRR(node);
    }
    balance(node) {
      var factor = this.getDiff(node);
      if (factor > 1) {
        if (this.getDiff(node.left) > 0) node = this.rotateLL(node);
        else node = this.rotateLR(node);
      } else if (factor < -1) {
        if (this.getDiff(node.right) > 0) node = this.rotateRL(node);
        else node = this.rotateRR(node);
      }
      return node;
    }
    insert(root, data) {
      if (root == null) {
        root = new Node(data);
        return root;
      } else if (data < root.data) {
        root.left = this.insert(root.left, data);
        root = this.balance(root);
      } else if (data >= root.data) {
        root.right = this.insert(root.right, data);
        root = this.balance(root);
      }
      return root;
    }
  }
  let myAVL = new AVL();
  let root = myAVL.root;
  if (weight.length === 1) {
    return 1;
  }
  weight.forEach((e) => {
    root = myAVL.insert(root, e);
  });
  console.log(root);
}
solution([16, 16, 16, 16, 16, 16, 16, 16, 1, 1, 2, 4, 4]);
