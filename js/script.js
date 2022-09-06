function MovingDot( nav ){
	let navMovingDotBar = document.querySelector(" .menuList "),
	 	 btnMenu = navMovingDotBar.querySelectorAll('a'),
		 bar = document.createElement('span'),
		 width, left; 

   

	bar.classList.add('dot');
	navMovingDotBar.appendChild( bar );

	for( let i=0; i < btnMenu.length;  i++ ){
		btnMenu[i].addEventListener('mouseenter', function(){
			width = this.offsetWidth,
			left = this.offsetLeft;
     
			barMovingCurrentMenu( width, left );
		});
	}
 
	function barMovingCurrentMenu( width, left ) {
		bar.style.left = left + ( width / 2 ) + 'px';
		bar.style.opacity = 1;
	}
 let xx =  document.querySelector('.drop');
  
}
MovingDot('.navspan');