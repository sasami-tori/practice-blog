//nav fixed
/*
$(function(){
	var navPos = $("nav").offset().top;
	
	$(window).scroll(function(){
		if($(window).scrollTop() > navPos){
			$("nav").css("position", "fixed");
		}else{
			$("nav").css("position", "static");
		}
	});
});

*/

//アコーディオン

$(function(){
	$(".log p").click(function(){
		$(this).next("ul").slideToggle();
	});
});


//スムーススクロール
$(function(){
	$("#scrol").click(function(){
		var target = $($(this).atter("href")).offset().top;
		$("html, body").animate({scrollTop: target}, 500);
		
		return false;
	});
});


//フォトギャラリーs
$(function(){
	$(".gallery a").click(function(){
		
		$("body").append('<div id="bg">');
		$("body").append('<div id="photo">');
		
		//それぞれ非表示
		$("#bg").hide();
		$("#photo").hide();
		
		$("#photo").html("<img>");
		
		$("#photo img").attr("src", $(this).attr("href"));
		
		$("#photo img").attr("width", "auto" );
		$("#photo img").attr("height", 500 );
		$("#photo img").attr("alt", "photo" );
		
		$("#bg").fadeIn();
		$("#photo").fadeIn();
		
		
		
		$("#bg").click(function(){
			$(this).fadeOut(function(){
				$(this).remove();
			});
			
			$("#photo").fadeOut(function(){
				$(this).remove();
			});
		});
		
		
		return false;
	});
});

