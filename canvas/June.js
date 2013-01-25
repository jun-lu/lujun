
/**
  
  JUNE
    //-- class
    .Vector2(x, y),
        .setXY(x, y);
        .length();
		.addSelf( v );
		.subSelf( v );
		.multiplyScalar( s )
		.clone();
		
    .Vector3(x, y, z),
		.setXYZ(x, y, z)
		.addSelf();
    .Stage(canvas, width, height);
    
        .addChild( child );
        .removeChild( child );
        .removeChindIndex( index );
    
    //--interface
    .Event
        addEvent(type, handle)
        removeEvent(type, headle)
        
*/

/**
	Scene ��̨����
		
	PerspectiveCamera �����
		
	CanvasRenderer ��Ⱦ
	
	CanvasRenderer.reader(Scene, PerspectiveCamera)
 */
June = {
	mix:function(a, b){
		for(var i in b){
			a[i] = b[i];
		}
		return a;
	}
};


( function () {

	var lastTime = 0;
	var vendors = [ 'ms', 'moz', 'webkit', 'o' ];

	for ( var x = 0; x < vendors.length && !window.requestAnimationFrame; ++ x ) {

		window.requestAnimationFrame = window[ vendors[ x ] + 'RequestAnimationFrame' ];
		window.cancelAnimationFrame = window[ vendors[ x ] + 'CancelAnimationFrame' ] || window[ vendors[ x ] + 'CancelRequestAnimationFrame' ];

	}

	if ( window.requestAnimationFrame === undefined ) {

		window.requestAnimationFrame = function ( callback, element ) {

			var currTime = Date.now(), timeToCall = Math.max( 0, 16 - ( currTime - lastTime ) );
			var id = window.setTimeout( function() { callback( currTime + timeToCall ); }, timeToCall );
			lastTime = currTime + timeToCall;
			return id;

		};

	}


	if ( window.cancelAnimationFrame === undefined ) {

		window.cancelAnimationFrame = function ( id ) { clearTimeout( id ); };

	}

}() );

