/**
 * ------------------------------------------------------------------
 * toggleGridLayers.jsx @ yamoo9.net 2015
 * ------------------------------------------------------------------
 */
#target photoshop

var activeDocument = app.activeDocument;

// 그리드 토글 레이어(그룹) 이름 설정
var gridLayerName = 'GRID';

/* ------------------------------------------------------------------
 * gridLayerName, toggleType 미설정 시, 사용자에게 확인 처리
 * ------------------------------------------------------------------ */
if (typeof gridLayerName == 'undefined') {
	gridLayerName = prompt('토글하고자 하는 레이어 이름을 입력해주세요.', 'GRID');
}

/* ------------------------------------------------------------------
 * 그룹 레이어 토글 함수 실행
 * ------------------------------------------------------------------ */
toggleGridGroup(activeDocument, gridLayerName);

/* ------------------------------------------------------------------
 * 그룹 레이어 토글 함수
 * ------------------------------------------------------------------ */
var origin_layer;

function toggleGridGroup(ref, name) {
	var layers = ref.layers;
	if (!origin_layer) {
		origin_layer = activeDocument.activeLayer;
		if (origin_layer.name === name) {
			activeDocument.activeLayer = layers[0];
		} else {
			activeDocument.activeLayer = layers.getByName('Background') || layers[layers.length-1];
		}
	}
	for ( var i=0, l=layers.length; i<l; i++ ) {
		var layer = layers[i];
		if(layer.typename === 'LayerSet') {
			if ( layer.name.toLowerCase() === name.toLowerCase() ) {
				layer.visible = !layer.visible;
				activeDocument.activeLayer = origin_layer;
				break;
			}
			toggleGridGroup(layer, gridLayerName);
		}
	}
}