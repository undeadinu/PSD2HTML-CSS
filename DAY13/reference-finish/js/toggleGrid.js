(function(global){
	var page = document.querySelector('#page');
	document.onkeydown = function(event) {
		var key = event.keyCode;
		// console.log(event);
		// 사용자가 입력한 키가 'G'키라면...
		// g === 71
		// d === 68 (Windows, Chrome 사용자)
		if (key === 71 && event.shiftKey === true) {
			page.classList.toggle('grid');
		}
	}
})(window);