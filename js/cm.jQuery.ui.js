/****************************************/
/*	Name: 웰컴론
/*	PART: java script
/*	Version: 1.0
/*	Author: [애드캡슐 퍼블리싱팀] 최웅, 윤정환
/****************************************/

$(function(){
	

	/*
		PART :  약관동의 접힘펼침
		Author : 윤정환
	*/
		
	$('.btn_agree').on('click',function(){
		$(this).parent().prev().slideToggle(300, function(){
			
			if($(this).attr('class') != "termbox_box on"){
				$(this).addClass('on')
				$(this).next().children().html('');
				$(this).next().children().html('<span class="arrow">접기</span>');
				$(this).next().find('.arrow').css({'background-position':'0 -22px'});
				tf=false;

			}else{
				$(this).removeClass('on')
				$(this).next().children().html('');
				$(this).next().children().html('<span class="arrow">펼쳐보기</span>');
				$(this).next().find('.arrow').css({'background-position':'0 2px'});
				tf=true;
			}
		});
		return false;
	});//end click


	/*
		PART :  약관동의 동의함 선택텍스트 
		Author : 윤정환
	*/
	var $agreeboxInput = $('.agreebox input');
	var $agreeboxTxt = $agreeboxInput.next();
	
	/** 01.06 수정 **/ /** 텍스트 선택시 볼드 처리 **/
	/*$('.agree_no_cont1').addClass('on');
	$('.agree_no_cont3').addClass('on');*/	
	$('.agreebox').find('input[type=radio]').next('label:last-child').addClass('on');
	$agreeboxInput.on('click',function(){
		$(this).parent().find('label').removeClass('on');
		$(this).next('label').addClass('on');	
	});//end click
	/** 01.06 수정 **/

	/*
		PART : 대출안내 전체선택
		Author : 최웅
	*/


	$("#allCheck").on("click",function(){//전체선택
		if($("#allCheck").is(":checked")){
			$("#allCheck1").prop("checked","checked");
			$(".agree_ok").prop("checked","checked");
			$(".agree_ok").next().addClass('on');
		}else{
			$("#allCheck1").prop("checked","");
			$(".agree_ok").prop("checked","");
			$(".agree_ok").next().removeClass('on');
		}
	});

	$("#allCheck1").on("click",function(){//전체선택
		if($("#allCheck1").is(":checked")){
			$("#allCheck").prop("checked","checked");
			$(".agree_ok").prop("checked","checked");
			$(".agree_ok").next().addClass('on');
		}else{
			$("#allCheck").prop("checked","");
			$(".agree_ok").prop("checked","");
			$(".agree_ok").next().removeClass('on');
		}
	});

	$('#allCheck_cont1').on("click",function(){
		if($("#allCheck_cont1").is(":checked")){
			$(".agree_no_cont1").removeAttr("checked");
			$("#allCheck_cont1").prop("checked","checked");
			$(".agree_ok_cont1").prop("checked","checked");
			$(".agree_ok_cont1").next().addClass('on');
			$(".agree_no_cont1").next().removeClass('on');
		};
	});
	$('#allCheck_cont3').on("click",function(){
		if($("#allCheck_cont3").is(":checked")){
			$(".agree_no_cont3").removeAttr("checked");
			$("#allCheck_cont3").prop("checked","checked");
			$(".agree_ok_cont3").prop("checked","checked");
			$(".agree_ok_cont3").next().addClass('on');
			$(".agree_no_cont3").next().removeClass('on');
		};
	});
	

	$(".goTop").on("click",function(){//전체선택
		$("html, body").animate({scrollTop:'1100'}, 'swing');
	});

	/*
		PART :  라디오버튼 텍스트 활성화
		Author : 윤정환
	*/
	$('.tbl_point li').eq(0).children().next().addClass('on');
	$('.tbl_point input').on('click',function(){
		$('.tbl_point label').removeClass('on');
		$(this).next().addClass('on');
	});//end click

	/*
		PART :  FAQ
		Author : 윤정환
	*/

	var $listFag = $('.list_faq'),
		$listFagLi = $listFag.find('li'),
		$listFagA = $listFagLi.find('a'),
		$answer = $('.answer'),
		$arrow = $listFag.find('.arrow');

	$listFagA.on('click', function(){
		var $thisParents = $(this).parent().parent(),
			$thisAnswer = $(this).parent().next();
		
		var thisAnswerH = $thisAnswer.find('.cont_answer').outerHeight();
		thisParentsH = $thisParents.outerHeight();


		if($thisParents.is('.on')){
			$listFagLi.removeClass('on');
			$listFagA.attr('title', '답변 열기');
			$arrow.text('펼쳐보기');
			$arrow.css('background','url(./images/ico_arrow01.png) 0 12px no-repeat');
			$answer.css('border-top','none');
			$answer.stop().animate({'height': '0',
				'padding-top': '0'
			});
			

			return false;
		}else{
			
			$listFagLi.removeClass('on');
			$thisParents.addClass('on');
			$arrow.text('펼쳐보기');
			$arrow.css('background','url(./images/ico_arrow01.png) 0 12px no-repeat');
			$listFagA.attr('title', '답변 열기');
			$(this).attr('title', '답변 닫기');
			$(this).find('.arrow').text('닫기');
			$(this).find('.arrow').css('background','url(./images/ico_arrow01.png) 0 -12px no-repeat');
			$answer.stop().animate({
				'height': '0',
				'padding-top': '0'
			});
			$answer.css('border-top','none');

			$thisAnswer.stop().animate({
				'height': thisAnswerH,
				'padding-top': '0'
			}, function(){
				$('html, body').animate({scrollTop: $thisParents.position().top - (thisParentsH * 2)});
			});
			$thisAnswer.css('border-top','1px solid #e6e6e6');
		}

		return false;

	}); //end $listFagA click


	/*
		PART :  우측 안내 드롭다운
		Author : 윤정환
	*/

	var $dropTit = $('.tit_drop').find('h3'),
		$dropA = $dropTit.find('a');
	
	$dropA.on('click',function(){
		$(this).parent().next().slideToggle(300,function(){
			if($(this).attr('class') != "on"){
				$(this).addClass('on')
				$(this).prev().css({'background-position':'238px 13px'});
				tf=false;
				
			}else{
				$(this).removeClass('on')
				$(this).prev().css({'background-position':'238px -24px'});
				tf=true;
			}
			
		});
		return false;
	});//end click

	/*
		PART :  레이어 팝업
		Author : 윤정환
	*/
	$(document).on("click",".layer_open",function(event){
		event.preventDefault ? event.preventDefault() : event.returnValue = false;

		$('#container').append('<div class="layer_pop_wrap"></div>')
		
		//**팝업 로드 스크립트
		var href = $(this).attr('href')+ ' #layer';
		
		$('.layer_pop_wrap').load(href,function(){
			$('.overlayerBg').css({'width':$(window).width(),'height':$(document).height(),'opacity':"0.6"})
			

			var layerContH = $('.layer_pop').outerHeight();
			var layerContW = $('.layer_pop').outerWidth();

			if(layerContH > 600)
			{
				$(this).find('.wrap_table').css({'height': '367px','overflow-y':'scroll'});					
				$('.layer_body').css({'overflow-y':'auto'});
			}
			
			var marginT = $(window).scrollTop() + ($(window).height() - layerContH) / 2;
			var offsetL = ($(window).width()/2) - (layerContW/2);
			
			$(this).offset({left: offsetL, top:marginT});
			
			
			if($('.layer_pop_wrap').html()==''){
				$('.layer_pop_wrap').remove();
				$('.overlayerBg').remove();
			}

		})//end load
		$('#container').append('<div class="overlayerBg"></div>');
		
		
	}); //end layer_open

			


	//레이어 팝업 클로즈 이벤트
	$(document).on("click",".layer_close, .close",function(){	

		$('.layer_pop_wrap').remove()
		$('.overlayerBg').remove()
		setTimeout(function(){$(".layer_open").focus()},50);
		return false;
	});//end click

	/*
		PART :  푸터 드롭다운
		Author : 윤정환
	*/
/** 01.07 수정 **/
	$('.main').find('.siteMap span').css({'background-position':'0 -27px','color':'#444'});
	$('.main').find('.site_wrap').show();
	$('.main .siteMap').on('click',function(){//메인 사이트맵 조정
		$(this).parent().next().slideToggle(300,function(){
			if($(this).attr('class') != "site_wrap on"){
				$(this).addClass('on')
				$(this).parent().find('.siteMap span').css({'background-position':'0 0','color':'#fff'});
				tf=false;
			}else{
				
				$(this).removeClass('on')
				$(this).parent().find('.siteMap span').css({'background-position':'0 -27px','color':'#444'});
				tf=true;
			}
		});
		return false;
	});//end click
	$('.sub').find('.siteMap span').css({'color':'#fff'});
	$('.sub .siteMap').on('click',function(){//서브 사이트맵 조정
		$(this).parent().next().slideToggle(300,function(){
			if($(this).attr('class') != "site_wrap on"){
				$(this).addClass('on')
				$(this).parent().find('.siteMap span').css({'background-position':'0 -27px','color':'#444'});
				tf=false;
			}else{
				
				$(this).removeClass('on')
				$(this).parent().find('.siteMap span').css({'background-position':'0 0','color':'#fff'});
				tf=true;
			}
		});
		return false;
	});//end click
/** 01.07 수정 **/

	// 셀렉트 메뉴
	var $familySite = $('.wrap_select strong a'),
	$familySiteUl = $('.wrap_select>.select_click'),
	$familyFootUl = $('.wrap_select_02>.select_click'),
	$familySiteUlLi = $familySiteUl.find('>ul>li'),
	$familySiteLi = $familySiteUl.find('li'),
	$familySiteA = $familySiteLi.find('a');


	var familySiteUlH = $familyFootUl.outerHeight()-1;

	//$familyFootUl.css('top', -familySiteUlH);
	$familySiteUl.hide();

	$familySite.on('click', function(event){
		event.preventDefault ? event.preventDefault() : event.returnValue = false;
		if($(this).is('.on')){
			$(this).parent().parent().find('.select_click').hide();
			$(this).removeClass('on');	
		}else{
			$(this).parent().parent().find('.select_click').show();
			$(this).addClass('on');	
		}
	});//end click

	$familySiteA.on('click', function(event){
		event.preventDefault ? event.preventDefault() : event.returnValue = false;
		var listText = $(this).html();
		var listSrc = $(this).attr('href');

		$familySiteUl.hide();
		//$familySite.removeClass('on').focus();
		$(this).parent().parent().parent().prev().children().removeClass('on').focus();
		$(this).parent().parent().parent().parent().find('strong a').text(listText);

	});

	/*메인에서 셀렉트 박스 아무곳이나 클릭시 닫기*/
	$('.main').on('click', function(event){

		if($familySite.is('.on')){
			
		}
		else
		{
			$familySite.parent().parent().find('.select_click').hide();
			
		}
		
		$familySite.removeClass('on');	
	});


	/*라벨 삭제*/
	$('.main .main_input').val('')
	$('.cont01_name2 input').on('click, focusin', function(event){
		$(this).addClass('on')
		$(this).parent().prev().children().addClass('on')

	});
	$('.cont01_name2 input').on('focusout', function(event){
		if($(this).val() == '')
		{
			$(this).removeClass('on')
			$(this).parent().prev().children().removeClass('on')
		}
	});
	$('.cont03_name2 input').on('click, focusin', function(event){
		$(this).addClass('on')
		$(this).parent().prev().children().addClass('on')

	});
	$('.cont03_name2 input').on('focusout', function(event){
		if($(this).val() == '')
		{
			$(this).removeClass('on')
			$(this).parent().prev().children().removeClass('on')
		}
	});

	$('.cont03_money2 input').on('click, focusin', function(event){
		
		$(this).addClass('on')
		$(this).parent().prev().children().addClass('on')

	});
	$('.cont03_money2 input').on('focusout', function(event){
		if($(this).val() == '')
		{
			$(this).removeClass('on')
			$(this).parent().prev().children().removeClass('on')
		}
	});

	
	/*메인 이벤트 열고닫기

	$('.btn_banner a').on('click', function(event){
		
			
		bannerClose()	
		
		return false;
	});//end click
	
	if($('.btn_banner').attr('class') != "btn_banner on"){
		var bb = setTimeout(bannerClose, 60000) 
	}
	
	function bannerClose()
	{
		if($('.btn_banner').attr('class') != "btn_banner on"){
				$('.pop_area_in').slideUp(300)
				$('.btn_banner').addClass('on')
				$('.btn_banner a').html('<span class="hide">열기</span></a>');
				$.ajax({
				    type : "POST" 
				    , url : "/cm/popClink.do?popFlag=Y" //Request URL
				    , dataType : "html" //전송받을 데이터의 타입
				    , timeout : 1000 //제한시간 지정
				    , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
				    , error : function(request, status, error) {
				     //통신 에러 발생시 처리
				    }
				    , success : function(response, status, request) {
				    	
				    }
				});		
			}else{
				$('.pop_area_in').slideDown(300)
				$('.btn_banner').removeClass('on')
				$('.btn_banner a').html('<span class="hide">닫기</span></a>');
				$.ajax({
				    type : "POST" 
				    , url : "/cm/popClink.do?popFlag=N" //Request URL
				    , dataType : "html" //전송받을 데이터의 타입
				    , timeout : 1000 //제한시간 지정
				    , contentType: "application/x-www-form-urlencoded; charset=UTF-8"
				    , error : function(request, status, error) {
				     //통신 에러 발생시 처리
				    }
				    , success : function(response, status, request) {
				    }
				});						
			}
	}*/

	/* 베너 시작시 on이 있을경우 베너 닫아주기
	bannerStart()
	function bannerStart()
	{
		if($('.btn_banner').attr('class') == "btn_banner on"){
			$('.pop_area_in').slideUp(0)
			$('.btn_banner').addClass('on')
			$('.btn_banner a').html('<span class="hide">열기</span></a>');
			
			
		}
		else
		{
			
			$('.pop_area_in').slideDown(0)
			$('.btn_banner').removeClass('on')
			$('.btn_banner a').html('<span class="hide">닫기</span></a>');
			
			
		}
	}*/
	

	/*스킵네비*/
		
	$(".skipMenu > a").click(function(){
		$($(this).attr("href")).attr("tabindex","0").css("outline","0").focus();
		return false;
	});
	

	/*서브메뉴 넓이계산*/
	var tabLength = $('.sub_menu li').length

	$('.sub_menu li').css({'width':(100 / tabLength)+ '%'})
	 
	
	
	
	/*동영상 레이어 팝업*/
	var $btnVideo;
	$(this).on('click', '.mov_box a', function(event){
		event.preventDefault ? event.preventDefault() : event.returnValue = false;
		$btnVideo = $(this);
		$('#container').append('<div class="overlayerBg"></div>');
		$('#container').append('<div class="layer_pop_wrap"><div class="layer_header"><p>웰컴론 광고영상</p>	</div><iframe name="ifrMovie" title="웰컴론 유투브 영상" width="720" height="480" src="//www.youtube.com/embed/GRarlVm6F0U" frameborder="0" allowfullscreen="true"></iframe><a href="#" class="layer_close"><span class="hide">레이어팝업 닫기</span></a></div>');
		$('.overlayerBg').css({'width':$(window).width(),'height':$(document).height(),'opacity':"0.6"});
	
		var href = '/layerPopup_video.html #layer';
		$('.layer_pop_wrap').load(href, function(){
			var layerContH = $('.layer_pop_wrap').outerHeight();
			var layerContW = $('.layer_pop_wrap').outerWidth();
			var marginT = $(window).scrollTop() + ($(window).height() - layerContH) / 2;
			var offsetL = ($(window).width()/2) - (layerContW/2);
			
			$('.layer_pop_wrap').offset({left: offsetL, top:marginT}).attr('tabindex', '0').focus();
		});

		
	});

	$(this).on("click",".video_close",function(){	
				
		$('.layer_pop_wrap').remove();
		$('.overlayerBg').remove();
		setTimeout(function(){$(".layer_pop_wrap").focus()},50);
		$btnVideo.focus();
		return false;
	});

	$(this).on('keydown', '.layer_pop_wrap', function(event){
	
		var totalPopALen = $('.layer_pop_wrap a').length-1;
		var isShift = window.event.shiftKey ? true : false;

		if((isShift && event.keyCode == 9)){

			if($(event.target).is('.layer_pop_wrap')){
				
				setTimeout(function(){
					$('.layer_pop_wrap a:last').focus();
				}, 100);

				return false

			}
			
		}
		//return false
	});
	


	/*배너롤링*/
	var bannerArry = [
		{src:'./images/img_pkg.jpg', alt:'1', dataLink: '#'},
		{src:'./images/img_pkg.jpg', alt:'2', dataLink: '#'},
		{src:'./images/img_pkg.jpg', alt:'1', dataLink: '#'},
		{src:'./images/img_pkg.jpg', alt:'2', dataLink: '#'}

	];
	$.fn.slideCol1 = function(data){


		

		var aniTime = 0 // 이미지 움직임 속도
		var speed = 4000 // 이미지 슬라이드 넘어가는 속도
		var n = 0;
		var n2 = 1;
		

		// 슬라이드할 이미지의 크기를 설정하세요

		var widthNum = 790 // 이미지 가로 값
		var heightNum = 270 // 이미지 세로 값

		// 페이징 버튼의 height와 위치, 버튼간의 간격을 설정하세요

		var contHeight = 15 // 페이징버튼 이미지의 높이(height)
		var topNum = 250 // 페이징버튼 top값
		var btnLeft // 페이징 버튼 전체 right 값
		var btnMargin = 15 // 페이징버튼 간격



		// 플레이스탑 버튼의 위치를 설정하세요

		var ps_btn_top = 250 //플레이 스탑버튼 top 값
		var ps_btn_right = 0 // 플레이 스탑버튼 left 값


		//고정 변수값(전체적으로 js를 수정할 게 아니라면 건드리지 않으시기를 바랍니다.)

		var leftNum1 = '-100%' // 현재 이미지가 animate될 위치, -100%일 경우 왼쪽으로 이동함을 의미한다.
		var leftNum2 = '100%' //  현재 이미지(.on)가 아닌 이미지들의 css 위치, 100%일 경우 오른쪽에 몰려있음을 의미한다.
		var topNum1 = '0' // 현재 이미지가 animate될 위치, -100%일 경우 왼쪽으로 이동함을 의미한다.
		var topNum2 = '0' //  현재 이미지(.on)가 아닌 이미지들의 css 위치, 100%일 경우 오른쪽에 몰려있음을 의미한다.
		var alphaNum = '1' // 알파값을 조정하는 고정 슬라이드 일 경우
		var psNum = true; // 스탑, 플레이 구분자
			
		var btn_tf = true; // 버튼 연속클릭 방지. true일 경우에만 돌아감
		
		
		
		

		var dataLen = data.length;
		var $wrapList = $('.pop_area_in.banner_wrap_01.col1');		
		var	dataLi ='';

		var rolling=setInterval(autoBn,speed);
		
		
		dataLi += '<div class="bn_area">'
		dataLi += '<p class="ctrl_btn"><a href="#" class="ps_btn"><span class="hide">일시정지</span></a></p>'
		dataLi += '<dl class="auto_bn">'
		
		for(i=0; i<dataLen; i++){
		
		dataLi += '	<dt><a href="#"><span class="hide">'+data[i].alt+' 바로가기</span></a></dt>'
		dataLi += '	<dd><a href="'+data[i].dataLink+'"><img src="'+data[i].src+'" alt="'+data[i].alt+'" /></a></dd>'
		
		}	
		
		dataLi += '</dl>'		
		dataLi += '<a href="#" class="layer_close"><span class="hide">배너 닫기</span></a>'
		dataLi += '</div>'

		//.wrap_list에 ul을 동적으로 생성
		$wrapList.append(dataLi);

		
		

		function autoBn(){
		
			
		
		if(dataLen != 1) // 1일 경우 롤링 중단
		{
			
			n++;
			if(n>=$wrapList.find(".bn_area dt").length){
			n=0;
			
			}
			
			
			 cfFunc(n)
			
			
		}
		
		
	}	

		// 페이징 버튼, 플레이스탑 버튼 위치잡기
		ps_btn_right = dataLen * (btnMargin)+20
		btnLeft = (widthNum - ps_btn_right)+10

		
		$wrapList.find('dt:first').children().addClass('on')
		

		$wrapList.find(".ps_btn").css({'position':'absolute','top':ps_btn_top,'right':ps_btn_right})
		

		
		
		//  페이징버튼 클릭할 경우
		$wrapList.find(".bn_area dt a").on("click",function(){
			
			cfFunc($wrapList.find(".bn_area dt a").index(this))
			

			
			return false;
		}).on("mouseout focusout",function(){
			if(psNum != false)
			{
			clearInterval(rolling);
			
			rolling=setInterval(autoBn,speed);
			}
		});
		// 페이징버튼 포커스될 경우
		$wrapList.find(".bn_area dt a").on("focusin",function(){
			
			cfFunc($wrapList.find(".bn_area dt a").index(this))
		});
		
		cfFunc(0)
		function cfFunc(thisVar)
		{
			
			//clearInterval(rolling);
			if(n2 != thisVar)
			{
				
				if(btn_tf == true) // 연속클릭방지
				{

					btn_tf = false;	
					leftNum1 = '-100%'
					leftNum2 = '100%'
						
	
					n = thisVar
					n2 = n
					
					$wrapList.find(".bn_area dt a").not(".on").parent().next().css({"opacity":"0", 'z-index':'0'}); //초기 셋팅 
					$wrapList.find(".bn_area .on").parent().next().stop().animate({"opacity":"0"}, aniTime ,function(){ 
					$wrapList.find(".bn_area .on").parent().next().css({'z-index':'1'}); //초기 셋팅
					});
					

					// 이전 on클래스 삭제하고 누른 페이징버튼에 on클래스 주기
					$wrapList.find(".bn_area .on").removeClass("on");
					$wrapList.find(".bn_area dt").eq(thisVar).find('a').addClass("on");
					
					//$wrapList.find(".bn_area dt").eq(thisVar).next().css({'left':leftNum2})

					$wrapList.find(".bn_area dt").eq(thisVar).next().stop().animate({"opacity":"1",'top':'0'}, aniTime ,function(){
						
						btn_tf = true;
					});
				}
			}
			//rolling=setInterval(autoBn,speed);
			aniTime= 500

		}
		


		// 이미지 영역에 포커스인 될 경우,
		$wrapList.find(".bn_area dd a").on("focusin",function(){

			clearInterval(rolling);
			$wrapList.find(".bn_area dd").css("left",'0'); //초기 셋팅
			
				
			this2 = $wrapList.find(this).parent().prev().children()
			n = $wrapList.find(".bn_area dt a").index(this2)
			n2 = n

			

			$wrapList.find(".bn_area .on").removeClass("on");
			$wrapList.find(this2).addClass("on");
		}).on("mouseout focusout",function(){
			if(psNum == true)
			{
			clearInterval(rolling);
	
			rolling=setInterval(autoBn,speed);
			}


		}).on("mouseover",function(){

			clearInterval(rolling);
			
		})

		


		// 스탑플레이버튼 누를경우
		$wrapList.find(".ctrl_btn .ps_btn").on("click",function(){
			if(psNum == true)
			{
				clearInterval(rolling);
				psNum = false;
				
				$wrapList.find('.ps_btn').css({'background':'url(./images/imgSlider_zip.png) 0px -34px no-repeat'})/*09.28 최웅 수정*/
				$wrapList.find('.ps_btn').html('<span class="hide">재생</span>')
					
			}
			else if(psNum == false)
			{
				clearInterval(rolling);
				
				autoBn()
				
				psNum = true;
				$wrapList.find('.ps_btn').css({'background':'url(./images/imgSlider_zip.png) 0px -53px no-repeat'})/*09.28 최웅 수정*/
				$wrapList.find('.ps_btn').html('<span class="hide">일시정지</span>')
			}
			return false;
		});
		

		

		
		// 페이징 버튼 위치값 설정
		for(var i = 0 ; i < ($wrapList.find(".bn_area dt").length) ; i ++)
		{
			leftPx = (i * btnMargin)

			$wrapList.find(".bn_area dt").eq(i).css('left', leftPx + btnLeft )

		}

		
		$wrapList.find(".bn_area").css({'width': widthNum, 'height':heightNum})
		$wrapList.find(".bn_area dt").css('top', topNum )


		if($wrapList.find(".bn_area dt").length == 1) // 1일 경우 컨트롤러 삭제
		{
			$wrapList.find(".auto_bn dt").addClass('hide')
			$wrapList.find(".ctrl_btn").css('display', 'none' )
			
		}

		};//end slideCol1



		$('.banner_wrap_01.col1').slideCol1(bannerArry);


	/** focusin제거 01.02 **/
	$('.pop_area_in .layer_close').on('click',function(){
	/** focusin제거 01.02 **/
		$('.pop_area_in').css({'display':'none'});
	});

});



