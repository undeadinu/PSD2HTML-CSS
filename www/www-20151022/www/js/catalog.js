(function(){
	'use strict';

	/**
	 * <토글 그리드>
	 * toggleGrid.js 요구.
	 * --------------------------------
	 */
	toggleGrid('body', 'grid');

	/**
	 * catalog.js 코드
	 * --------------------------------
	 */
	var catalogProduct = document.querySelectorAll('.catalog-product');

	each(catalogProduct, function(item, index) {
		item.onmouseenter = item.onfocus = activeProduct;
		item.onmouseleave = deactiveProducts;
		item.querySelector('.wishlist').onblur = deactiveProducts;
	});

	function activeProduct() {
		var preActive = this.parentNode.querySelector('.on');
		if (preActive) { preActive.classList.remove('on'); }
		this.classList.add('on');
	}

	function deactiveProducts() {
		var activeProduct = catalogProduct[0].parentNode.querySelector('.on');
		activeProduct.classList.remove('on');
	}

	/**
	 * --------------------------------
	 * 헬퍼 함수
	 * --------------------------------
	 */
	function each(list, fn) {
		[].forEach.call(list, fn);
	}
})();
