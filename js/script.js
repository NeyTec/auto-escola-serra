function iniciaSlider(){
	max=6;
	min=1;
	
	carregaFoto("f1.jpg")
}


function carregaFoto(foto){
	document.getElementbyId("banner").style.backgroundImage="URL("+foto+")";	
}