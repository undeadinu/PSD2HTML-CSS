(function(){

	document.body.insertAdjacentHTML('afterbegin', '<i tabindex="0" id="toggle-grid-button" class="fa fa-reorder"></i><div class="overlay-grid"></div>');
	var toggleBtn = document.querySelector('#toggle-grid-button');

	toggleBtn.style.cssText = 'position: fixed; z-index: 10001; right: 10px; top: 15px; cursor: pointer; font-size: 24px; color: #fff; background: #0b1919; padding: 4px 6px; border-radius: 3px;';

	toggleBtn.onclick = document.onkeydown = function(e) {
		var key = e.keyCode || e.which;
		if (key === 71 || e.type === 'click') {
			toggleGrid();
		}
	};

	toggleBtn.onkeydown = function(e) {
		var key = e.keyCode || e.which;
		if (key === 13)
			toggleGrid();
	};

	function toggleGrid() {
		document.body.classList.toggle('grid');
	}
})();