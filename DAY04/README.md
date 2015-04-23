### CSS 레이아웃

#### HTML의 모든 요소(Elements)는 박스 모델(사각형)을 가진다.

`박스모델`
- content box (내용: 텍스트를 포함하는 박스)
- padding box (안쪽 공간: 여백 설정)
- border box (테두리: cotent padding box를 포함하는 선을 처리)
- margin box (배경색이 처리되지 않습니다. 투명)
- offset box .... (position 설정)

#### HTML의 요소는 크게 아래와 같은 display 속성을 가집니다.

- display: block (가로 폭은 부모 요소의 영향권, 세로 폭은 자식의 영향 \<div\> \<p\> \<h1\> \<h6\>)
- display: inline (내부에 포함된 텍스트만큼 공간을 가집니다 \<em\> \<strong\> \<span\>)
- display: inline-block (인라인 요소인데 블록처럼 처리할 수 있어요. \<img\>)
- display: none (화면에서 존재하지 않게 됩니다.)

#### 페이지(#page) 요소를 화면 가운데 배치하는 패턴
1. width를 설정한다.
2. margin-left: auto; 설정하면 화면 오른쪽으로 이동한다.
3. margin-right: auto; 설정하면 화면에서 width 값을 뺀 나머지 공간을 양분해서 화면 가운데 배치된다.

#### 요소의 수직 공간에 텍스트를 가운데 배치하는 패턴
1. height 설정한다.
2. line-height 값을 height 값과 동일하게 설정한다.
