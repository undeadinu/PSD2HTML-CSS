### CSS 레이아웃 테크닉 총정리

- Floating 레이아웃 `그리드 시스템, 일반흐름을 벗어나서 부유(Float)`
- Floating 레이아웃: isolate `격리 레이아웃 방식 (margin-right: -100%)`
- Positioning 레이아웃
	- static `기본 값`
	- relative `상대 위치(자신의 원래 위치를 기준으로 해서 이동), 일반 흐름 유지`
	- absolute `절대 위치(부모요소(자신을 포함하는 상위요소 중에 position 설정 값을 가진 요소)를 기준으로 해서 이동), 일반 흐름 벗어남`
	- fixed `고정 위치(화면(viewport)을 기준으로 해서 고정됨)`
