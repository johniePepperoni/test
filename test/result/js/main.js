$(document).ready(function(){
	//tab stream
	$('.modal-btn-participants_stream').click(function stream(){
		$(this).removeClass(this).addClass('selected')
		$('.modal-btn-friends').removeClass('selected')
		$('.modal-people-list-friends').hide(0);
        $('.modal-people-list-stream').show();})
	//tab friends
	$('.modal-btn-friends').click(function friends(){
		$(this).removeClass(this).addClass('selected')
		$('.modal-btn-participants_stream').removeClass('selected')
		$('.modal-people-list-stream').hide(0);
        $('.modal-people-list-friends').show();})
	var podlogka = $('#podlogka')
	var btn_friends = $('.modal-btn-add_friends')
	//Открытие модуля при нажатии кнопоки
		$(function addFriends(){
	$('.main-button').click(function(){
		podlogka.fadeIn(0)
		$('.modal-window').fadeIn(0)})
	podlogka.click(function(){
		podlogka.fadeOut(0)
		$('.modal-window').fadeOut(0)
					$('.modal-people-list-stream').hide(0);
        			$('.modal-people-list-friends').show();
        			$('.modal-people-list-added-item1').hide(0)
					$('.modal-people-list-stream-item-1').removeClass('opacity')
					$('.modal-people-list-added-item2').hide(0)
					$('.modal-people-list-stream-item-2').removeClass('opacity')
					$('.modal-people-list-added-item3').hide(0)
					$('.modal-people-list-stream-item-3').removeClass('opacity')
					$('.modal-people-list-added-item4').hide(0)
					$('.modal-people-list-stream-item-4').removeClass('opacity')
					$('.modal-people-list-added-item11').hide(0)
					$('.modal-people-list-friends-item-1').removeClass('opacity')
					$('.modal-people-list-added-item21').hide(0)
					$('.modal-people-list-friends-item-2').removeClass('opacity')
					$('.modal-people-list-added-item31').hide(0)
					$('.modal-people-list-friends-item-3').removeClass('opacity')
					$('.modal-people-list-added-item41').hide(0)
					$('.modal-people-list-friends-item-4').removeClass('opacity')
					$('.modal-people-list-added-item51').hide(0)
					$('.modal-people-list-friends-item-5').removeClass('opacity')
        		})
	btn_friends.click(function(){
		podlogka.fadeOut(0)
		$('.modal-window').fadeOut(0)
					$('.modal-people-list-stream').hide(0);
       			    $('.modal-people-list-friends').show();
					$('.modal-people-list-added-item1').hide(0)
					$('.modal-people-list-stream-item-1').removeClass('opacity')
					$('.modal-people-list-added-item2').hide(0)
					$('.modal-people-list-stream-item-2').removeClass('opacity')
					$('.modal-people-list-added-item3').hide(0)
					$('.modal-people-list-stream-item-3').removeClass('opacity')
					$('.modal-people-list-added-item4').hide(0)
					$('.modal-people-list-stream-item-4').removeClass('opacity')
					$('.modal-people-list-added-item11').hide(0)
					$('.modal-people-list-friends-item-1').removeClass('opacity')
					$('.modal-people-list-added-item21').hide(0)
					$('.modal-people-list-friends-item-2').removeClass('opacity')
					$('.modal-people-list-added-item31').hide(0)
					$('.modal-people-list-friends-item-3').removeClass('opacity')
					$('.modal-people-list-added-item41').hide(0)
					$('.modal-people-list-friends-item-4').removeClass('opacity')
					$('.modal-people-list-added-item51').hide(0)
					$('.modal-people-list-friends-item-5').removeClass('opacity')
       			})
})
	//Клонирование элементов в колонку добавленых
	$(".modal-people-list-stream-item-1").clone().removeClass().addClass('modal-people-list-added-item1').prependTo("div.modal-people-list-added")
	$(".modal-people-list-stream-item-2").clone().removeClass().addClass('modal-people-list-added-item2').prependTo("div.modal-people-list-added")
	$(".modal-people-list-stream-item-3").clone().removeClass().addClass('modal-people-list-added-item3').prependTo("div.modal-people-list-added")
	$(".modal-people-list-stream-item-4").clone().removeClass().addClass('modal-people-list-added-item4').prependTo("div.modal-people-list-added")
	$(".modal-people-list-friends-item-1").clone().removeClass().addClass('modal-people-list-added-item11').prependTo("div.modal-people-list-added")
	$(".modal-people-list-friends-item-2").clone().removeClass().addClass('modal-people-list-added-item21').prependTo("div.modal-people-list-added")
	$(".modal-people-list-friends-item-3").clone().removeClass().addClass('modal-people-list-added-item31').prependTo("div.modal-people-list-added")
	$(".modal-people-list-friends-item-4").clone().removeClass().addClass('modal-people-list-added-item41').prependTo("div.modal-people-list-added")
	$(".modal-people-list-friends-item-5").clone().removeClass().addClass('modal-people-list-added-item51').prependTo("div.modal-people-list-added")
		//STREAM************************************************************************************************************************************
	//1 item-stream
	$(".modal-people-list-added-item1").hover(function() {$( this ).append( $( '<div class="test1_1"><img src="../images/close.png"/></div>' ) )
	$('.test1_1').click(function(){
		$('.modal-people-list-added-item1').hide(0)
		$('.modal-people-list-stream-item-1').removeClass('opacity')})
		;}, function() {$( this ).find( "div:last" ).remove();});
	$(".modal-people-list-stream-item-1").hover(function(){$( this ).append( $( '<div class="arrow-1"><img src="../images/arrow.png"/></div>' ) )
	$(".arrow-1").click(function(){
		$('.modal-people-list-stream-item-1').addClass('opacity')
		$('.modal-people-list-added-item1').show()})
		}, function() {$( this ).find( "div:last" ).remove();})
	
	//2 item-stream
	$(".modal-people-list-added-item2").hover(function() {$( this ).append( $( '<div class="test1_2"><img src="../images/close.png"/></div>' ) )
	$('.test1_2').click(function(){
		$('.modal-people-list-added-item2').hide(0)
		$('.modal-people-list-stream-item-2').removeClass('opacity')})
		;}, function() {$( this ).find( "div:last" ).remove();});
	$(".modal-people-list-stream-item-2").hover(function(){$( this ).append( $( '<div class="arrow-2"><img src="../images/arrow.png"/></div>' ) )
	$(".arrow-2").click(function(){
		$('.modal-people-list-stream-item-2').addClass('opacity')
		$('.modal-people-list-added-item2').show()})
		}, function() {$( this ).find( "div:last" ).remove();})
	
	//3 item-stream
	$(".modal-people-list-added-item3").hover(function() {$( this ).append( $( '<div class="test1_3"><img src="../images/close.png"/></div>' ) )
	$('.test1_3').click(function(){
		$('.modal-people-list-added-item3').hide(0)
		$('.modal-people-list-stream-item-3').removeClass('opacity')})
		;}, function() {$( this ).find( "div:last" ).remove();});
	$(".modal-people-list-stream-item-3").hover(function(){$( this ).append( $( '<div class="arrow-3"><img src="../images/arrow.png"/></div>' ) )
	$(".arrow-3").click(function(){
		$('.modal-people-list-stream-item-3').addClass('opacity')
		$('.modal-people-list-added-item3').show()})
		}, function() {$( this ).find( "div:last" ).remove();})
	
	//4 item-stream
	$(".modal-people-list-added-item4").hover(function() {$( this ).append( $( '<div class="test1_4"><img src="../images/close.png"/></div>' ) )
	$('.test1_4').click(function(){
		$('.modal-people-list-added-item4').hide(0)
		$('.modal-people-list-stream-item-4').removeClass('opacity')})
		;}, function() {$( this ).find( "div:last" ).remove();});
	$(".modal-people-list-stream-item-4").hover(function(){$( this ).append( $( '<div class="arrow-4"><img src="../images/arrow.png"/></div>' ) )
	$(".arrow-4").click(function(){
		$('.modal-people-list-stream-item-4').addClass('opacity')
		$('.modal-people-list-added-item4').show()})
		}, function() {$( this ).find( "div:last" ).remove();})
		
		//FRIENDS**********************************************************************************************************************************
	//1 item-friends
	$(".modal-people-list-added-item11").hover(function() {$( this ).append( $( '<div class="test1_1"><img src="../images/close.png"/></div>' ) )
	$('.test1_1').click(function(){
		$('.modal-people-list-added-item11').hide(0)
		$('.modal-people-list-friends-item-1').removeClass('opacity')})
		;}, function() {$( this ).find( "div:last" ).remove();});
	$(".modal-people-list-friends-item-1").hover(function(){$( this ).append( $( '<div class="arrow-1"><img src="../images/arrow.png"/></div>' ) )
	$(".arrow-1").click(function(){
		$('.modal-people-list-friends-item-1').addClass('opacity')
		$('.modal-people-list-added-item11').show()})
		}, function() {$( this ).find( "div:last" ).remove();})
	
	//2 item-friends
	$(".modal-people-list-added-item21").hover(function() {$( this ).append( $( '<div class="test1_2"><img src="../images/close.png"/></div>' ) )
	$('.test1_2').click(function(){
		$('.modal-people-list-added-item21').hide(0)
		$('.modal-people-list-friends-item-2').removeClass('opacity')})
		;}, function() {$( this ).find( "div:last" ).remove();});
	$(".modal-people-list-friends-item-2").hover(function(){$( this ).append( $( '<div class="arrow-2"><img src="../images/arrow.png"/></div>' ) )
	$(".arrow-2").click(function(){
		$('.modal-people-list-friends-item-2').addClass('opacity')
		$('.modal-people-list-added-item21').show()})
		}, function() {$( this ).find( "div:last" ).remove();})
	
	//3 item-friends
	$(".modal-people-list-added-item31").hover(function() {$( this ).append( $( '<div class="test1_3"><img src="../images/close.png"/></div>' ) )
	$('.test1_3').click(function(){
		$('.modal-people-list-added-item31').hide(0)
		$('.modal-people-list-friends-item-3').removeClass('opacity')})
		;}, function() {$( this ).find( "div:last" ).remove();});
	$(".modal-people-list-friends-item-3").hover(function(){$( this ).append( $( '<div class="arrow-3"><img src="../images/arrow.png"/></div>' ) )
	$(".arrow-3").click(function(){
		$('.modal-people-list-friends-item-3').addClass('opacity')
		$('.modal-people-list-added-item31').show()})
		}, function() {$( this ).find( "div:last" ).remove();})
	
	//4 item-friends
	$(".modal-people-list-added-item41").hover(function() {$( this ).append( $( '<div class="test1_4"><img src="../images/close.png"/></div>' ) )
	$('.test1_4').click(function(){
		$('.modal-people-list-added-item41').hide(0)
		$('.modal-people-list-friends-item-4').removeClass('opacity')})
		;}, function() {$( this ).find( "div:last" ).remove();});
	$(".modal-people-list-friends-item-4").hover(function(){$( this ).append( $( '<div class="arrow-4"><img src="../images/arrow.png"/></div>' ) )
	$(".arrow-4").click(function(){
		$('.modal-people-list-friends-item-4').addClass('opacity')
		$('.modal-people-list-added-item41').show()})
		}, function() {$( this ).find( "div:last" ).remove();})
	
	//5 item friends
	$(".modal-people-list-added-item51").hover(function() {$( this ).append( $( '<div class="test1_5"><img src="../images/close.png"/></div>' ) )
	$('.test1_5').click(function(){
		$('.modal-people-list-added-item51').hide(0)
		$('.modal-people-list-friends-item-5').removeClass('opacity')})
		;}, function() {$( this ).find( "div:last" ).remove();});
	$(".modal-people-list-friends-item-5").hover(function(){$( this ).append( $( '<div class="arrow-5"><img src="../images/arrow.png"/></div>' ) )
	$(".arrow-5").click(function(){
		$('.modal-people-list-friends-item-5').addClass('opacity')
		$('.modal-people-list-added-item51').show()})
		}, function() {$( this ).find( "div:last" ).remove();})

	//tooltip
	$(function() {
    $( document ).tooltip({
      position: {
        my: "left+20 bottom-8",
        at: "left-20 top",
        using: function( position, feedback ) {
          $( this ).css( position );
          $( "<div>" )
            .addClass( "arrow" )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
      }
    });
  });
	//end tooltip
	//scroll
	(function($){
        $(window).load(function(){
            $(".modal-people-list-added").mCustomScrollbar({
            	theme:"minimal-dark"
            });
            $(".modal-people-list-stream").mCustomScrollbar({
            	theme:"minimal-dark"
            });
            $(".modal-people-list-friends").mCustomScrollbar({
            	theme:"minimal-dark"
            });
        });
    })(jQuery);
})
