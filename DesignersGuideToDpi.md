## Designer's Guide to DPI
크로스 DPI, 크로스 플랫폼 디자인을 구현하기 위한 디자이너를 위한 기초 가이드! 복잡하지 않고, 쉽게 이해 가능한 내용을 토대로 디자인 프로세스에 도움이 될 가이드입니다.

- 작성자 [Sebastien Gabriel](http://sebastien-gabriel.com/)
- 원본 문서 [온라인](http://sebastien-gabriel.com/designers-guide-to-dpi/home) | [오프라인(EPub, Mobi)](http://liber.io/bLT)
- 역자 [yamoo9(지훈)](http://yamoo9.net)

=

### DPI와 PPI의 개념
DPI(Dots Per Inch)는 원래 인쇄(Print) 상에서 사용되던 용어로 1인치당 점(Dot)의 개수를 말하는 것으로 공간을 구성하는 점의 밀도를 나타내는 척도입니다. 인쇄 상에서 1인치 영역에 떨어뜨리는 잉크(점)의 개수를 말하는 겁니다. 쉽게 말해 DPI 수치가 작으면 이미지의 해상도가 떨어집니다.

이 개념은 컴퓨터 스크린에 적용되어 1인치 당 픽셀(Pixel)의 개수를 나타내는 용어인 PPI(Pixels Per Inch)로 불려집니다. 인쇄 상의 DPI 개념과 같습니다. 1인치 안 픽셀의 개수만큼 사용자 컴퓨터 스크린에서 표시되는 겁니다. 스크린 상에서 사용되는 DPI 용어 또한 PPI와 동일하게 해석할 수 있습니다.

#### 운영체제마다 다른 PPI, 표준 디스플레이에서의 화면 처리

Windows 운영체제에서의 기본 PPI 수치는 96인데 반해 Mac 운영체제에서는 72가 사용되며, 일반적으로 Windows, Mac 데스크톱 표준 스크린(Retina Display 아님)은 최소 72에서 최대 120 PPI로 처리됩니다. 72 ~ 120 사이의 PPI로 디자인 된 결과물은 거의 동일한 크기 비율로 모든 환경의 스크린에서 처리됨이 보장됩니다.

<strong>예시를 통해 이해해 봅시다.</strong>

27인치 Mac 시네마 디스플레이는 109 PPI를 사용합니다. 이는 스크린 1인치에 109개의 픽셀로 구성된 화면으로 표시됨을 말합니다. 시네마 디스플레이의 실제 경사(Bevel)와 폭(Width)에 따른 크기는 25.7인치(65cm)입니다. 스크린의 실제 폭은 대략 23.5 인치(23.5 x 109 ≒ 2560px)로, 이는 기기(Device)의 기본(Native) 화면 해상도를 2560 x 1440px로 처리합니다.

> [참고] 23.5 x 109 값이 정확하게 2560px로 떨어지지는 않습니다. 실제로는 23.486238532 인치로 계산되는데.. 이는 센티미터 당 픽셀 개수로 계산되는 것으로 보입니다.

![27인치 Mac 시네마 디스플레이는 109 PPI를 사용](http://sebastien-gabriel.com/designers-guide-to-dpi/images/dpi-01.png)

=

### 당신의 디자인에 미치는 영향

위에서 이야기한 내용을 이해하기 위해 109 x 109px 크기의 파란 정사각형을 그려본다고 합시다.

이미지의 정사각형은 물리적으로 스크린 1 x 1인치 영역을 나타냅니다. 눈여겨볼 점은 72 PPI 스크린 해상도에서 볼 때의 파란 정사각형 크기가 물리적으로 109 PPI 스크린 해상도보다 크게 보인다는 사실입니다.

72 PPI의 파란 사각형이 보다 크게 보이는 이유는 109px 파란 정사각형을 화면에 표시하기 위해 필요한 영역이 1인치 + 대략 0.5인치 만큼이기 때문입니다. 요컨대 72 PPI 해상도 화면에서는 109px 크기의 파란 정사각형을 그리기 위해 약 1.5인치 가량 영역이 필요합니다. 아래 시뮬레이션 된 결과 이미지를 참고하세요. (109 PPI에서 109px 파란 사각형 박스는 물리적인 1인치 만큼의 영역이 필요)

![PPI에 따른 사각형 크기](http://sebastien-gabriel.com/designers-guide-to-dpi/images/blue-square-01.png)

> [참고] 컬러 & 해상도의 차이를 떠나, 당신의 디자인은 누구에게나 다르게 보일 수 있음을 명심하세요! 최대한 많은 사용자가 포함된 그룹의 환경과 타협하는 것을 목표로 디자인 포인트를 잡아야 합니다. 모든 사용자가 디자이너인 당신과 유사한 화면에서 디자인을 볼 것이라고 단정하지 마세요.

=

### 스크린 해상도 (& 기본(Native) 해상도)

스크린 해상도(Screen Resolution)는 디자인을 사용자가 인식하는데 큰 영향을 미칩니다. 감사하게도 오늘날 스크린 환경(CRT 스크린 → LCD 스크린)은 정확한 화면 크기/PPI 비율의 기본 스크린 해상도를 사용자에게 보장해줍니다. 해상도(Resolution)란? 스크린에 표시되는 픽셀의 개수(예: 27인치 Cinema Display 기기의 스크린 해상도는 2560 x 1440px)를 말합니다. 스크린 가로 픽셀의 개수 2560, 높이 픽셀의 개수 1440이 그것입니다.

물론 우리는 PPI의 개념에 대해 이해하고 그것이 실질적인 크기를 나타내는 것이 아니라는 것을 앞에서 공부했으니, 2560 x 1440px 크기가 스크린 상에 표시된 영역의 크기라는 것을 잘 이해할 수 있을 겁니다. 요컨대 2560 x 1440px는 물리적인 크기가 아니라는 것이죠.

오늘날 LCD 모니터는 기본적으로 화면에 표시할 수 있는 픽셀의 정확한 개수를 처리하는 기본 해상도(Native Resolution)를 가집니다. 이는 기존 세대의 CRT 모니터와 약간 다르게 동작하는 것이지만, CRT 모니터는 이미 시장에서 고려 대상이 아니니 무시해도 무방합니다.
앞서 살펴본 27인치 Cinema Display의 경우, 109 PPI로 스크린에 표시되며 기본 해상도 2560 x 1440px를 가집니다.

![Screen Resolution](http://sebastien-gabriel.com/designers-guide-to-dpi/images/resolution-01.png)

> [참고] 만약 이미지 해상도가 떨어지더라도 픽셀 개수는 109 PPI로 유지됩니다. 해상도가 떨어져 부족한 부분이 생기면 운영체제(OS)에 따라 부족한 부분을 자동으로 메우게 됩니다. 이 과정에서 컴퓨터의 CPU/GPU는 모든 픽셀을 토대로 새로운 비율을 계산하여 처리합니다.

예를 들어 1280 x 720px(절반 크기의 가로/세로 폭)의 이미지를 27인치 Cinema Display 바탕화면 이미지로 처리하려면, 컴퓨터의 GPU가 화면을 가득 채우기 위해 두 배(x2) 큰 픽셀로 시뮬레이션 하게 됩니다. 이 과정을 통한 결과는 이미지가 뿌옇게 보여지게 됩니다.

절반의 경우라면 소수점 없이 정수로 나눠지기 때문에 스크린 상에서 큰 무리 없이 표시되지만, 1/3 또는 3/4로 나눠지는 경우는 소수점으로 나눠지기 때문에 스크린 상에서 보기 좋게 표시되지 않습니다. 아래 예시를 참고하세요. 왼쪽 이미지는 레티나 디스플레이에서 봤을 때 깨끗하게 보이고, 오른쪽 이미지는 뿌옇게 보입니다. 이유는 픽셀 개수를 나눴을 때, 정수로 떨어지느냐 아니냐에 따른 결과로 볼 수 있습니다.

![정수로 나눠 떨어지는 해상도와 그렇지 않은 해상도 차이](http://sebastien-gabriel.com/designers-guide-to-dpi/images/resolution-02.png)

아래의 다른 예로 생각해볼까요? 기본 해상도의 스크린 상에서 1px 가는 선을 화면에 렌더링할 때, 해상도를 50% 작은 절반의 해상도로 변경하면... CPU에 의해 화면은 1.5배 가량 크게 계산되어 표시될 것입니다. 결과적으로 확대된 주변 픽셀 일부를 채우기 위해 뿌옇게 되거나, 색상이 변질되는 현상이 발생하게 됩니다.

![이미지 업/다운 샘플링](http://sebastien-gabriel.com/designers-guide-to-dpi/images/resolution-03.png)

Apple사의 Retina MacBook Pro 제품에서 해상도를 변경할 경우, 아래 이미지에서처럼 "1280 x 800처럼 보임"과 같은 안내 메시지로 사용자에게 알려주는데.. 이것은 조정될 사용자의 해상도 크기 비율을 나타냅니다.

![Mac 이미지 업/다운 샘플링 설정 화면](http://sebastien-gabriel.com/designers-guide-to-dpi/images/resolution-04.png)

이는 물리적 크기의 단위를 픽셀 해상도로 변경하여 사용하고 있기 때문에 매우 주관적인 표현이지만, 사용자의 관점에서 보면 거짓이라고 볼 수는 없습니다.

> [참고] 당신의 디자인을 항상 완벽한 픽셀(Pixel Perfect)로 구현하고 싶다면, 디스플레이의 기본 해상도와 다르게 설정하지 않는 것이 좋습니다. 물론 작은 비율의 해상도로 설정하여 보다 편한 환경에서 작업하고 싶을 수도 있겠지만, 가능한 한 정확한 작업을 위해서는 기본 해상도를 사용하는 것을 권장합니다. 불행히도 몇몇 사람들은 접근성 설정을 통해 스크린의 해상도 설정을 변경하여 디자인된 결과물을 보기 좋지 않게 바꿀 수도 있겠으나, 그것은 그 사용자의 가독성을 향상시키기도 합니다.

=

### 4K란?

최근 들어 4K 용어에 대해 많이 들어보셨을 겁니다. 실제로 4K는 꽤나 트렌디한 주제입니다. 4K에 대한 이해를 위해서는 먼저 "HD"에 대해 이해할 필요가 있습니다. 저는 이 주제(HD의 다양한 카테고리)에 대해서 조심스럽게 매우 단순화해서 가장 일반적인 해상도에 대해 이야기하려 합니다.

- HD
- Full HD
- WQHD
- 4K, Quad HD, Ultra HD

HD는 수평 라인이 720에서 시작하는 모든 해상도에 적용됩니다.(1280 x 720px 또는 720p) 일부는 이를 SD 표준 정의로 부르기도 합니다.
Full HD는 1920 x 1080px에 적용되는 해상도를 말합니다. 대부분의 TV와 고급 모바일 폰(Galaxy SIV, HTC one, Sony Xperia Z, Nexus 5, iPhone 6+ ...)이 해당됩니다.

4K는 3840 x 2160px로 시작되는 해상도를 말하며 Quad HD로 불리거나, UHD(Ultra HD)로 지칭되기도 합니다. '왜 4K인가?'에 대해 단순하게 이야기하면 4K 영역에 Full HD(1080p)크기를 4개 넣을 수 있어 그렇게 불립니다. 4K의 또 다른 해상도는 4096 x 2160px로 조금 크기가 더 큽니다.(프로젝터 또는 전문 카메라에 사용)

![HD vs Full HD vs Quad HD](http://sebastien-gabriel.com/designers-guide-to-dpi/images/4k-01.png)

#### 내 컴퓨터에 4K를 연결하여 사용하면 어떤 일이 일어날까요?

현존하는 운영체제(OS)는 아직 4K 사이즈로 조정할 수 없습니다. 여러분의 컴퓨터에 4K 디스플레이를 연결하면 비율을 유지한 2배(200%, @2x) 큰 이미지를 사용하려 합니다. 이로 인해 이미지는 배율이 50%로 줄어 보기는 좋더라도 매우 작게 화면에 표시됩니다. 쉽게 말해 12인치 고해상도 4K 스크린을 컴퓨터에 연결하면 모든 것이 2배 작게 화면에 보여지게 됩니다.

> [참고]
- 4k 크기는 Full HD(1080p) x 4 입니다.
- 운영체제가 4k를 지원하더라도 크기를 조정할 수 있는 것은 아닙니다. 즉, 아직 4K 이미지는 시기상조.
- 오늘날 어떤 폰/태블릿도 아직 4K를 지원하지 않습니다. ([Samsung Galaxy S5는 WQHD(2560 x 1440px)](http://gadgets.ndtv.com/mobiles/news/samsung-reveals-plans-for-560-ppi-and-uhd-display-smartphones-custom-arm-cpu-442425))

=

### 모니터 헤르츠(Hertz)

PPI, 스크린 해상도 이야기를 뒤로하고, 약간 쉬어가는 측면에서 모니터 헤르츠에 대한 이야기 해보죠. 여러분은 아마 모니터 설정 화면에서 헤르츠(Hz)를 조정해본 경험이 있을 겁니다. 헤르츠 설정은 초당 스크린의 이미지를 몇 번 바꿔 표시(FPS, Frame Per Second)하는가에 대한 척도로 PPI와는 아무런 관련이 없습니다. 60Hz가 설정된 모니터는 초당 60개의 프레임을 변경하며, 120Hz 모니터는 120fps를 지원합니다.

UI 관점에서 모니터 헤르츠(Hz)는 애니메이션을 얼마나 부드럽고 세밀하게 볼 수 있는지를 말하는 겁니다. 대부분의 모니터 스크린은 60Hz입니다. 초당 표시되는 프레임의 수는 사용자 컴퓨터의 프로세서와 그래픽 처리 능력에 의존합니다. [Atari 2600 게임기](http://ko.wikipedia.org/wiki/%EC%95%84%ED%83%80%EB%A6%AC_2600)에 120Hz 모니터를 연결해 사용하면 매우 쓸만할 것입니다. (역자 주: 아타리 2600은 오래된 게임기인데 120Hz 스크린을 연결하면 보다 부드럽게 움직여 보기 좋을 거라고 설명하는 듯 하네요)

보다 쉽게 이해하기 위해 아래 예시를 보도록 하죠. T렉스 그래픽은 60Hz와 120Hz 모두 A에서 B 지점으로 빠르고 정확하게 동일한 속도로 이동합니다. 60Hz에서는 애니메이션이 진행되는 동안 9개 프레임이 변경되어 표시되는 반면 동일한 시간 동안 120Hz는 2배 이상의 프레임이 변경되어 표시됩니다. 요컨대 120Hz 모니터 스크린에서 애니메이션이 훨씬 부드럽게 보입니다.

![모니터 헤르츠](http://sebastien-gabriel.com/designers-guide-to-dpi/images/hertz-01.png)

> [참고] 어떤 이들은 인간의 눈이 위에서 이야기한 60fps를 볼 수 없다고 말하지만, 잘못 알고 있는 겁니다. 그렇게 말하는 사람 이야기는 귀를 막고 가능한 한 기분 나쁘게 웃으며 그를 지나쳐가세요!

=

### 레티나 디스플레이란?

"레티나 디스플레이(Retina Display)"는 Apple사가 iPhone 4를 출시할 때 붙인 이름입니다. 망막(Retina)으로 불린 이유는 기기의 PPI가 높아 스크린 상의 픽셀을 인간의 망막이 분간할 수 있는 최대치라고 발표했기 때문입니다.

이 발표에서 거론된 기기 화면의 크기 범위에 대한 내용은 사실이지만, 스크린 기술이 발전에 발전을 거듭하면서 우리의 눈은 자연스레 보다 세밀한 픽셀을 구분할 수 있을 정도로 충분히 훈련 되었습니다. - 특히 둥근 UI 요소

기술적인 관점에서 그들이 한 일은 물리적으로 동일한 크기의 가로/세로 폭에 2배 큰 픽셀을 채운 것입니다.

iPhone 3G/S는 3.5인치(대각선 길이) 크기, 480 x 320px 해상도 163 PPI로 만들어진 반면, iPhone 4G/S는 3.5인치(대각선 길이) 크기, 960 x 640px 해상도 326 PPI로 만들어졌습니다.

![표준 디스플레이 vs 레티나 디스플레이](http://sebastien-gabriel.com/designers-guide-to-dpi/images/retina-01.png)

정확히 2배, 쉽게 말해 승수(乘數, Multiplier)입니다. 그래서 물리적으로 동일한 크기에 픽셀 개수가 증가했기 때문에 화면에서 보다 선명하게 보이게 됩니다. (일반 픽셀 1개 = 레티나 픽셀 4개)

아래 UI 디자인 사례를 통해 좀 더 생각해보도록 합시다.

> [참고]: 2개의 기기에서 서로 다른 이미지 품질을 시뮬레이션 한 것입니다. 동일한 물리적 공간에서 오른쪽 레티나 뮤직 플레이어 UI는 iPhone 4에서 보다 세밀하고 깔끔하게 보여집니다. 앞에서 이야기 한 것처럼 픽셀 개수가 보다 많기 때문입니다. 직접 UI 디자인 [소스 파일(무료)](http://sebastien-gabriel.com/freebies/Grey-UI.zip)을 내려 받아 확인해보세요.)

![일반 UI vs 레티나 UI](http://sebastien-gabriel.com/designers-guide-to-dpi/images/retina-02.png)

"레티나 디스플레이"란 이름의 소유권자는 Apple로 다른 회사는 이 이름을 사용할 권한이 없습니다. 대신 "HI-DPI", "Super power pixel maximum sp33d display" 등으로 사용해야 합니다. 재미있군요~ ^^

> [참고] Apple 제품은 DPI 변환, 해상도 차이, PPI와 물리적 크기 비율 등을 이해하는데 훌륭한 길을 제시해줍니다. 디자인 시에 배수 비율(x2, x3)만 신경 쓰면 되기 때문이죠.

=

### 승수(乘數, Multiplier)란?

승수는 여러분의 디자인을 각기 다른 PPI에 따라 변경 적용할 때 수학적 구원이 됩니다. 승수에 대해 공부하면 기기의 세부사양에 대해 고민하지 않아도 됩니다. iPhone 3GS, 4 예를 들어봅시다. 앞에서 다룬 것처럼 동일한 물리적 크기 안에 픽셀의 농도(x2, Density)를 2배로 해서 처리했습니다. 그것은 여러분의 디자인 파일을 만들 때 사이즈 x2 크게 디자인 해야 한다는 것을 말합니다.

iOS 디자인 가이드에서 요구하는 데로 44px 크기의 버튼을 만든다고 생각해봅시다. 버튼 내부에는 텍스트 "Jim"을 가운데 배치합니다. 이 버튼 디자인을 iPhone 4에서도 깨끗하게 보여지게 하려면 44 x 2 = 88px로 2배 키운 크기의 버튼을 만들어야 합니다. 아래 예를 확인해보세요.

![2배 큰 이미지](http://sebastien-gabriel.com/designers-guide-to-dpi/images/multiplier-01.png)

구현은 아주 간단합니다. iPhone 3GS에는 btn-jim.png(100% PPI)를, iPhone 4에는 btn-jim@2x.png(200% PPI)를 만들어 적용하면 됩니다.

"끔찍하군요! 이건 악몽이에요"라고 말할지도 모르겠네요. 하지만 여러분이 생각하는 것처럼 그리 끔찍한 일은 아니에요. 뒤에서 방법을 알아볼겁니다.

먼저 단위(Units)에 대해 알아봐야 해요. 다양한 DPI에 적합한 디자인을 하려면 px 이외의 단위가 필요로 하기 때문이죠. DP, PT 단위에 대한 이야기를 뒤에서 진행할 겁니다.

> [참고] 승수는 여러분이 디자인하는데 있어 알아두어야 합니다. 다양한 PPI, 화면 크기로 혼돈의 세상이 된 오늘날 디자인을 헤쳐나갈 방법이기 때문입니다.

=

### DP, PT 그리고 SP 단위

DP 또는 PT는 다양한 기기, DPI에 적용 가능한 측정 단위입니다. DP 또는 Dip이라고 불리는 단위는 기기에 독립적으로 사용되는 픽셀(stands for Device independent Pixel)을 의미합니다. DP는 Android에서 PT는 Apple이 사용하는 단위입니다만, 본질적으로는 동일한 개념입니다.

쉽게 말해 기기에 한해 독립적으로 승수(Multiplier)가 적용되어 크기가 정의됩니다. 디자이너, 개발자는 이에 대해 많은 논의를 합니다. 개념이 이해되면 협업에 도움이 됩니다.

이전에 다뤘던 "Jim" 버튼 디자인 예시를 다시 봅시다. Jim 버튼은 일반 디스플레이(100% PPI)에서는 44px, 레티나 디스플레이(200% PPI)에서는 88px의 폭으로 처리했습니다. 여기에 20px 만큼 사방에 내부공간(padding)을 추가한다고 하면, 레티나 디스플레이는 x2 해서 40px만큼 값을 변경해 설정해줘야 합니다. 하지만 실제로 매번 일반 디스플레이 대비 레티나 디스플레이 크기를 계산해 디자인 하는 것은 의미가 없습니다. 그렇기에 우리는 레티나 디스플레이가 아닌 일반 디스플레이 크기를 토대로 디자인 해야 합니다.

![DP](http://sebastien-gabriel.com/designers-guide-to-dpi/images/dp-01.png)

이런 경우 Jim 버튼 디자인 시에 버튼 크기는 44 x 44 dp(pt), 내부공간(padding)은 20 dp(pt)로 설정해야 합니다. 이렇게 설정하면 기기의 PPI 값이 어떠한 경우라도 Jim 버튼은 수치 단위적으로는 항상 44 x 44 dp(pt)를 유지합니다. Android, iOS는 화면 크기, 승수(x2, x3)에 적응하여 변경됩니다. 이것이 일반 디스플레이(100% PPI)에 맞춰 디자인하는 이유입니다.

SP는 용도에 따라 DP, PT와 분류되지만 동일한 방식으로 작동됩니다. SP란? 스케일 독립적 픽셀(stands for Scale-independent Pixels)의 약자로 글꼴 크기를 정의할 때 사용됩니다. SP는 Android 기기에서 사용자 정의 글꼴 설정에 영향을 미칩니다. 디자이너가 SP를 정의하는 것은 다른 용도로 DP를 정의하는 것과 같습니다. 읽기 쉬운 x1 기준으로 글꼴 크기 SP를 설정하는 것이 좋습니다. (예를 들어 16sp는 가독성이 뛰어난 글꼴 크기입니다)

> [참고] 항상 디자인 할 때 해상도/크기(독립적) 값을 사용하도록 합니다. 다양하고 변화무쌍한 화면 크기/해상도에 젹합합니다.

=

### PPI 설정

여러분은 PPI, Retina Display, 승수(Multiplier)에 대해 알게 되었습니다만 아직 꽤 혼란스러울 것입니다. 이제 많은 것을 질문하여 혼란스러움을 해결할 수 있는 것에 대해 이야기를 나눠보는 것이 중요합니다.

"디자인 도구에서 PPI 설정을 변경하면 어떤 일이 일어나나요?"

만약 여러분 스스로에게 질문을 하고 있다면, 디자인 도구에 대해 꽤나 해박한 사람일 것입니다. 이 시점에서 디자인 도구의 설정에 대해 이야기 해보고 이해하는 것은 매우 중요한 일입니다.

인쇄(Print)를 제외한 환경은 초기 PPI 설정의 픽셀(px)을 사용합니다. 디자인 도구의 PPI 설정은 인쇄 매체의 설정을 물려 받았습니다. 만약 여러분이 오직 웹(Web)을 위한 디자인을 한다면 PPI는 비트맵 이미지에 그 어떤 영향도 미치지 않습니다.

그 이유는 직접적으로 PPI 값을 승수(Multiplier) 처리하여 사용하지 않기 때문입니다. 디자인 문서(Canvas)와 그래픽(Graphics)은 항상 디자인 도구를 통해 픽셀(Pixels)로 변경 처리됩니다.

아래 예시를 통해 확인해봅시다. 여러분은 PPI 설정이 가능한 Adobe Photoshop과 유사한 디자인 도구를 사용하여 실습해볼 수 있을 겁니다. 먼저 72 PPI 설정된 문서에 80 x 80px 크기의 파란 정사각형과 16pt 크기의 텍스트를 그려 배치합니다. 그리고 144 PPI 설정의 문서를 새로 만든 후, 동일한 파란 정사각형과 텍스트를 그려 배치시킵니다.

![PPI 설정에 따른 변화 - 72 PPI](http://sebastien-gabriel.com/designers-guide-to-dpi/images/ppi-influence-01.png)
![PPI 설정에 따른 변화 - 144 PPI](http://sebastien-gabriel.com/designers-guide-to-dpi/images/ppi-influence-02.png)

위 이미지를 통해 확인한 것처럼 파란 사각형의 크기에는 변화가 없지만, 텍스트 크기는 정확히 2배 커졌습니다. 이유는 디자인 도구(예시는 Photoshop 사용)에서 포인트(pt) 수치 값을 PPI 설정에 따라 크기를 변경하기 때문입니다. 결과적으로 144 PPI의 텍스트는 72 PPI의 x2에 해당되는 PPI 설정에 따라 크기가 2배만큼 크게 그려진 것입니다. 반면 픽셀(px) 값을 사용하여 화면에 그려진 파란 사각형은 정확하게 동일한 크기를 유지합니다. 픽셀의 경우 PPI 설정이 변경되더라도 픽셀은 px로 유지되기 때문에 변화가 없는 것입니다. 즉, 화면을 다르게 디스플레이 한 요인은 PPI 설정인 것입니다.

여러분이 디지털 디자인을 할 때 기억해야 할 중요한 사항은 PPI 설정에 따라 디자인 소스파일(그래픽/텍스트) 크기에 영향을 끼치는 것은 포인트(pt)로 설정한 값이라는 사실입니다. 만약 여러분의 디자인 소스파일이 다양한 PPI 설정에 따라 작업되었다면 디자인 도구는 설정된 가지각색의 PPI 설정에 따라 크기가 변경될 것이기에 문제가 될 것입니다.

해결책은 무엇일까요? 기본 PPI 설정(가급적 72-120 PPI 영역의 1x 디자인 설정)을 사용하는 것이 좋습니다. Photoshop의 기본 PPI 설정 값은 72이기 때문에 저는 팀원들과 동일한 설정 내에서 작업을 합니다. 웹 브라우저에서 처리되는 PPI 값은 96이므로 웹 디자인 작업 시에는 96 PPI로 설정하고 작업하는 것이 좋습니다.)

> [참고]
- 웹에 내보내는 디자인은 PPI 설정에 영향을 받지 않습니다.
- PPI 설정은 오직 포인트(PT) 같은 PPI 독립적인 단위로 설정되어 생성된 그래픽에만 영향을 미칩니다.
- Pixel은 디지털 기기의 측정 단위입니다.
- 디자인 할 때 PPI 설정이 아닌 승수(Multiplier)를 기억하세요.
- 디지털 디자인을 할 때, 실제 기기의 PPI 설정을 사용해야 합니다.(예를들어 72~120 PPI 1x 웹/데스크톱)
- PPI 설정은 일관되게 유지합니다.

[StackExchange 게시글](http://graphicdesign.stackexchange.com/questions/13777/is-it-mandatory-to-keep-72-dpi-for-web-design-what-if-i-create-in-200dpi)을 통해 이 흥미로운 주제에 대한 토론을 추가적으로 읽어보세요.

=

### iOS에서의 PPI 핸들링

플랫폼 네이티브 디자인 속으로!

2014년 이후 iOS 플랫폼에 대해 짤막한 이야기를 해보겠습니다. iOS는 화면 크기와 DPI에 관련하여 모바일, 데스크톱/랩탑 스크린마다 각각 2종류를 가집니다. 모바일 기기는 이미 알고 있는 것처럼 iPhone, iPad 2종류입니다. 폰(Phone)의 범주에는 오래된 3GS(공식적으로 iOS 6까지 지원, 일반 디스플레이)도 포함되어 있습니다. iPhone 5는 iPhone 4/4S와 동일한 PPI와 조금 더 세로로 길어진 길이를 가집니다. 아래 이미지를 참고하세요.

![iPhone 비교](http://sebastien-gabriel.com/designers-guide-to-dpi/images/ios-01.png)

2014년 9월 Apple 키노트에서 발표된 내용에 따르면 iPhone 6/6+는 새로운 카테고리 2종류가 추가되었습니다. iPhone 6는 iPhone 5보다 0.7인치 이상 더 커졌지만, 동일한 PPI를 사용합니다. 반면 iPhone 6+는 5.5인치 크기로 커졌고 PPI 또한 상향되었으며, x3 승수 계산이 새롭게 추가되어 소개되었습니다. (역자 주: [iPhone 해상도에 따른 디자인 가이드](https://github.com/yamoo9/PSD2HTML-CSS/blob/master/RetinaDisplayHD.md)를 참고하세요)

![iPhone 6/6+](http://sebastien-gabriel.com/designers-guide-to-dpi/images/ios-01-1.png)

iPhone 6+는 다른 iPhone과 달리, 화면 그래픽을 특별하게 다운샘플링(Down-Sampling)하여 처리합니다. 예를 들어 여러분이 iPhone 6에 맞게 디자인하려면 1334 x 750px 크기의 문서에 디자인 해야 실제 폰에 출력된 물리적 크기와 같게 처리됩니다. iPhone 6+의 경우는 2208 x 1242px에 맞춰 디자인하더라도 폰에서 그 보다 작은 1920 x 1080px 크기로 다운샘플링 되어 렌더링됩니다. 아래 그림을 참고하세요.

![다운샘플링](http://sebastien-gabriel.com/designers-guide-to-dpi/images/ios-01-2.png)

렌더링되는 해상도 보다 15% 작게 렌더링되면 화면 처리에 있어 약간의 결함(Half-Pixels 생성)을 가지게 되어 흐릿하게 표시됩니다. 물론 여러분이 꼼꼼하게 보지 않으면 알기 힘들 정도로 미묘한 정도이긴 합니다. 그래서 2208 x 1242px 크기 캔버스에 디자인 하는 것은 정말 훌륭한 부분이라고 인식할 수 있습니다. 아래 시뮬레이션 이미지를 참고하세요.

![기기에서 다운샘플링 될 때 문제점](http://sebastien-gabriel.com/designers-guide-to-dpi/images/ios-01-3.png)

> [참고] [Paintcode](http://www.paintcodeapp.com/)의 멋진 설명이 깃든 키노트에 감사드립니다. [그들의 페이지](http://www.paintcodeapp.com/news/iphone-6-screens-demystified)를 통해 정리된 내용을 검토해보세요. 여기서 설명한 내용은 그들의 설계 내용을 기반으로 정리하였습니다.

그 밖에 여러분이 iPod Touch 카테고리를 고려해야 한다면, iPhone으로 고려하셔도 됩니다. iPod 4세대 이하는 iOS 6까지 지원되며 일반 디스플레이가 지원됩니다. iPod 5세대 이상은 iOS 7+, 레티나 디스플레이가 지원되며 iPhone 5와 동일한 화면 크기를 가집니다.

마지막으로 iPad가 있습니다. iPad 1세대는 예외(오늘날 고려하지 않음)로 하고, 그 외 iPad 2, iPad Mini 1세대는 iOS 7+ 지원하며 일반 디스플레이를 사용합니다. iPad Mini와 iPad는 디자인 관점에서 동일한 PPI를 사용하지만, 물리적인 크기는 Mini가 더 작습니다. 즉, Mini는 동일한 해상도를 9.7인치보다 작은 7.9인치에서 제공한다고 볼 수 있습니다. 같은 비율을 유지하되 그에 따라 픽셀 밀도가 증가됩니다. 여러분의 디자인 요소는 화면에서 약간 작게 보일 겁니다.

![iPad 제품군/세대별 차이](http://sebastien-gabriel.com/designers-guide-to-dpi/images/ios-02.png)
![iPad vs iPad Mini](http://sebastien-gabriel.com/designers-guide-to-dpi/images/ios-03.png)

데스크톱/랩탑 카테고리에 대해서는 Apple 제품(Macbook, Macbook Air, 구형 Macbook Pros)이 x1 승수로 제공됩니다. 레티나 디스플레이가 지원되는 기종은 Macbook Pro 13/15인치가 밖에 없으며 iPhone, iPad와 마찬가지로 정확하게 x2 승수 값을 가집니다. 모바일과 다르게 데스크톱 디자인 할 경우에는 2종류의 다른 스크린에 대응할 수 있도록 디자인 파일을 만들어야 합니다.

오직 하나의 승수(Multiplier)만을 사용해서 iOS, OSX 디자인 파일을 만드는 것은 매우 간단합니다. 먼저 x1 기준(기본 PPI, 100%)으로 디자인 파일을 생성한 후, 디자인 파일을 내보낼 때 레티나 디스플레이용으로 x2(200%)하여 @2x 파일을 생성하면 됩니다. 1x와 2x 사이 전환에 익숙해지면, 여러분은 바로 x2 기준으로 디자인할 수도 있습니다. 내보낼 때는 크기를 절반으로 줄여 x1 기준으로 만들면 됩니다. 특히 이 방법은 레티나 디스플레이(신형 Macbook Pro)에서 작업할 경우 유용할 겁니다.

#### 디자인 에셋(Design Assets) 예시 - 크롬(Chrome)

![크롬 웹 브라우저 디자인](http://sebastien-gabriel.com/designers-guide-to-dpi/images/ios-04.png)

위 이미지를 통해 확인할 수 있듯이 2개의 이미지를 만들 시간이 필요합니다. 일반 디스플레이용 이미지는 yamoo9.png 이름으로 저장하고, 레티나 디스플레이용 이미지는 '@2x'를 확장자 앞에 두는 yamoo9@2x.png로 저장합니다. 이것은 iOS 컨벤션(규약)이기에 따라야 합니다.

만약 iPad에서만 사용할 이미지를 만들어야 한다면 '@2x' 뒤에 '~iPad'를 붙여 사용해야 합니다. 이것은 단지 Chrome 컨벤션입니다. 여러분은 각기 다른 PPI에 대응하여 이미지를 만들어야 합니다. 절대 하나만 만들어서는 안됩니다.

> [참고: iOS 규칙]
- @2x 에셋은 반드시 x1 에셋의 2배여야 합니다.
- 레티나 디스플레이는 승수에 따라 @2x(200%), @3x(300%, iPhone 6+)를 붙여 사용해야 합니다.
- 항상 승수에 따른 이미지를 생성합니다. (x1, x2, x3)
- x1로 디자인을 시작해서 x2, x3 합니다.
- PNG 파일로 이미지를 제공합니다.
- 스펙(Spec)을 생성할 때는 px이 아닌 pt를 사용하여 디자인합니다.

=

### Android에서의 PPI 핸들링

Android 플랫폼은 iOS에 비해 고려해야할 제품의 폭이 넓습니다. 이유는 iOS와 달리 Android는 [OEM(Original Equipment Manufacturer, 위탁생산)](http://ko.wikipedia.org/wiki/OEM)이 가능해 몇 가지 제약사항을 제외하면 Android를 가져다 사용하는데 아무런 문제가 없기 때문입니다. 그 결과 Apple을 제외한 다수의 업체가 Android를 가져다 폰/태블릿 기기의 운영체제로 사용하다 보니, 거의 대부분의 기기가 Android를 사용하게 되었습니다. 문제는 스크린 크기 및 DPI가 Apple 제품만큼 규격화되어 있지 않아 디자인 시 고려해야 할 변수가 너무 많아졌다는 점입니다. 이 점이 디자이너 및 개발자를 난감하게 합니다.

고로 이번 섹션을 통해 우리는 iOS와 다른 방법으로 접근해야 합니다. 먼저 다뤄볼 이야기는 DPI의 승수(Multipliers)와 범주(Categories)에 대한 것입니다.

iOS와 마찬가지로 Android 역시 Phones과 Tablets, 2개의 큰 범주로 구분됩니다. 각각의 범주는 서로 다른 DPI를 가지는데 그 분류는 다음과 같습니다. (역자 주: 상당히 많습니다... OTL)

- LDPI
- MDPI
- TVDPI
- HDPI
- XHDPI
- XXHDPI
- XXXHDPI

다행히도 DPI중 일부는 거의 사용이 되지 않습니다. 고려해야 할 범주를 줄일 수 있어 디자인/개발에 고려할 폭이 줄어들 수 있습니다. 우리가 먼저 생각해봐야 할 문제는 iOS의 x1(100%)에 해당되는 Android의 DPI 값이 무엇인가 찾는 것입니다. 정답은 'MDPI'입니다. 아래 승수(Multipliers)를 그래픽으로 표현한 이미지를 참고하세요.

![Android DPI 카테고리](http://sebastien-gabriel.com/designers-guide-to-dpi/images/android-01.png)

뭔가 이상하네요..... 아!!!하나를 빠트렸네요! XXXHDPI!!!

![XXXHDPI](http://sebastien-gabriel.com/designers-guide-to-dpi/images/android-02.png)

다시 정리하면 Android에서 자주 사용되는 DPI는 아래 4가지입니다.

- MDPI
- HDPI
- XHDPI
- XXHDPI

LDPI는 더이상 사용되지 않는 오래된 DPI이고, TVDPI는 TV UI용 스펙(Spec)으로 Nexus7(2012 Edition)에 사용된 적이 있지만 Phones/Tablets에는 불필요한 것으로 간주되고 있습니다. 참고로 TVDPI의 승수(1.33x)는 일부 [LG G 워치(Watch)](http://www.lg.com/global/gwatch/one/index.html#herstyle2) 같은 [착용 가능한 기기(Wear's devices)](http://www.android.com/wear/)에 사용되지만, 그것에 대해서는 나중에 이야기해봅시다.

아래 Android 각 DPI에 해당되는 Phones & Tablets를 연상지어 살펴보세요.

![LDPI](http://sebastien-gabriel.com/designers-guide-to-dpi/images/android-03.png)
![MDPI](http://sebastien-gabriel.com/designers-guide-to-dpi/images/android-04.png)
![TVDPI](http://sebastien-gabriel.com/designers-guide-to-dpi/images/android-05.png)
![HDPI](http://sebastien-gabriel.com/designers-guide-to-dpi/images/android-06.png)
![XHDPI](http://sebastien-gabriel.com/designers-guide-to-dpi/images/android-07.png)
![XXHDPI](http://sebastien-gabriel.com/designers-guide-to-dpi/images/android-08.png)

XXXHDPI를 실제 애플리케이션에 적용하는 경우도 있지만 매우 드문 일입니다. 하지만 미래 지향적인 애플리케이션 디자인을 고려한다면 XXXHDPI를 고려한 디자인 에셋(Assets) 또한 포함시킬 수 있을 겁니다.

#### 데모 Chrome - 에셋(Assets)

가장 많이 사용되는 MDPI에서 XXHDPI까지 고려한다면 총 4세트의 디자인 에셋을 만들어야 합니다. (LDPI는 제외하세요) 아래 Chrome 모바일 웹 브라우저의 디자인 에셋 데모를 참고하세요. 특별히 TVDPI를 고려해야 한다면 총 5세트를 준비해야 합니다.

다만 iOS용으로 제작할 경우는 x1(100%) 승수(Multiplier)로 만들길 권합니다. 이유는 Android(x1.33, x1.5)를 포함한 다른 승수를 적용한 디자인 구현이 손쉽기 때문입니다. 아래 Android Chrome 뒤로가기 버튼 예시를 참고하세요.

![Android Google Assets Demo](http://sebastien-gabriel.com/designers-guide-to-dpi/images/android-09.png)

예시에 사용된 에셋 이름(DPI 포함)은 Android 공식 문서에서 권장하는 바와 다릅니다. DPI 범주마다 수백개의 디자인 에셋을 관리해야 하는 것을 고려하면 각 DPI 폴더를 생성한 후, 내부에 디자인 에셋 파일을 묶는 것이 보다 효율적입니다. 그런 이유로 우리는 디자인 도구에서 디자인 에셋을 내보낼 때 각 DPI 폴더마다 내보냅니다.

![Android Assets Exports](/images/android-assets-exports.png)

- drawable-mdpi/asset.png
- drawable-hdpi/asset.png
- drawable-xhdpi/asset.png
- drawable-xxhdpi/asset.png

