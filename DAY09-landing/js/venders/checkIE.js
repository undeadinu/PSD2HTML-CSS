/**
 * IE 브라우저 감지 스크립트 (버전 체크 후, class 속성 설정)
 * https://gist.github.com/adamculpepper/10d3897c8e0f378a6d75
 */
function detectIE() {
	var msie,
		dom_element = document.documentElement || document.body;
	// IE 6-10 체크
	msie = parseInt((/msie (\d+)/.exec((navigator.userAgent).toLowerCase()) || [])[1]);
	if (isNaN(msie)) {
	  // IE 11 체크
	  msie = parseInt((/trident\/.*; rv:(\d+)/.exec((navigator.userAgent).toLowerCase()) || [])[1]);
	}

	// IE 체크 후, DOM 루트 요소에 class 속성 설정
	if (msie) {
	  dom_element.className += ' ie ie' + msie;
	  console.log('ie' + msie);
	}
}

detectIE();