/*********************************************************************************************************
전화번호 체크. 같은숫자 중복일 시 접수되지 않도록. 
**********************************************************************************************************/
// 전화번호 중복 체크 함수 
// Ex) 1111-2222 > return false; , 1212-0000 > return true; , 1231-1231 > return true;
function stck( str, limit ) { 
 
    var nBefore, nBeforeDiff, nDiff, cntSame = 0;
 
   ( limit ) || ( limit = str.length );
 
   for( var idx = 0, nMax = str.length; idx < nMax; idx++ ) { 
      var nCurrent = str.charCodeAt(idx); 
       if( idx > 0 && ( nDiff = nBefore - nCurrent ) > -2 && nDiff < 2 && ( cntSame = nDiff == nBeforeDiff ? cntSame + 1 : 0 ) > limit - 3 ) {
          return false; 
      }
      nBeforeDiff = nDiff, nBefore = nCurrent; 
   } 
   return true; 
} 


/*********************************************************************************************************
입력필드 한글 체크 
**********************************************************************************************************/
// 한글체크
function isKorean(checkStr) {
	for (i=0; i<checkStr.length; i++){
		var krCheck = checkStr.charCodeAt(i);
		if (krCheck < 0xac00 || krCheck > 0xd7a3){ 
			alert('한글만 입력할 수 있습니다.');
			checkStr.value = "";
			checkStr.focus();
			return false;
			}
	}
	return true;
}

//공백제거
function trim( str ) {
	for( ; str.indexOf(" ")!= -1; ) {
		str = str.replace(" ","" );
	}
	return str;
} 

/*********************************************************************************************************
입력필드 숫자 체크 
**********************************************************************************************************/
function is_Num(temp){
 for(var i=0; i<temp.value.length; i++){
  if(temp.value.charAt(i) >= '0' && temp.value.charAt(i) <= '9'){
   continue;
  }else{
   alert('숫자만 입력할 수 있습니다.');
   temp.value = "";
   temp.focus();
   return false;
  }
 }
 return true;
}


/*********************************************************************************************************
NextField 
**********************************************************************************************************/
function NextField(fr, tt, sz){
	var p_size = document.getElementById(fr).value.length 
	
	if(p_size == sz){
		return document.getElementById(tt).focus();
	} else {
		return false; 
	}   
}



/*********************************************************************************************************
click2call 영업일 / 휴일 구분 함수
**********************************************************************************************************/
function leadingZeros(n, digits) {
var zero = '';
n = n.toString();

if (n.length < digits) {
for (i = 0; i < digits - n.length; i++)
  zero += '0';
}
return zero + n;
}


function getTimeStatus() {

 var d = new Date();
 var day = d.getDay();
 var mon = d.getMonth()+1;
 var date = d.getDate();
 var hh =  leadingZeros(d.getHours(), 2) ;
 var mm =  leadingZeros(d.getMinutes(), 2);
 var hol = mon + ":" + date; 

/* 1년에 하루만 고생하자 젠장. 2014년 간다.*/
if(hol == "8:15" || hol == "9:8" || hol == "9:9" || hol == "10:3" || hol == "10:9" || hol == "12:25") {
//if(hol == "8:15" || hol == "9:8" || hol == "9:9" || hol == "9:10" || hol == "10:3" || hol == "10:9" || hol == "12:25") {
	return 'pm'
} else if(day==0){ // getDay() == 0 : 일요일, 6 : 토요일
	return 'pm'
 }else if(day==6 &&( Number(hh+mm)<900||Number(hh+mm)>1900)){
	return 'pm'
 }else if(Number(hh+mm)<900||Number(hh+mm)>2100){
	return 'pm'
 }else{
	return 'am'
 } 

/*
return 'pm'
*/
}

//예약시스템
function getTimeStatus_res() {

 var d = new Date();
 var day = d.getDay();
 var mon = d.getMonth()+1;
 var date = d.getDate();
 var hh =  leadingZeros(d.getHours(), 2) ;
 var mm =  leadingZeros(d.getMinutes(), 2);
 var hol = mon + ":" + date; 

/* 1년에 하루만 고생하자 젠장. 2014년 간다.*/
/*
if(hol == "8:15" || hol == "9:8" || hol == "9:9" || hol == "10:3" || hol == "10:9" || hol == "12:25") {
//if(hol == "8:15" || hol == "9:8" || hol == "9:9" || hol == "9:10" || hol == "10:3" || hol == "10:9" || hol == "12:25") {
	return 'pm'
} else if(day == 0 || day == 6){ // getDay() == 0 : 일요일, 6 : 토요일
	return 'pm'
}else if(Number(hh+mm)<900||Number(hh+mm)>1900){
	return 'pm'
 }else{
	return 'am'
 } 
// pm 일 경우 레이어팝업 띄워야 함
*/
return 'am'

}

/*********************************************************************************************************
동의체크
**********************************************************************************************************/
$(document).ready( function() {
	$("input[name=chk_A]").click( function(e) {
		if( $(this).val() == "N" || this.checked == false ) {
			checkAlertMsg( "essential" );
		}
	});
	
	
	//U_agree : 개인(신용)정보 수집.이용에 관한 사항(선택)
	$('input[name=agree_A]').click( function() {
		if( $(this).val() == "N" || this.checked == false ) {
			checkAlertMsg( "notEssential" );
		}
	});

	$("input[name=chk_B]").click( function(e) {
		if( $(this).val() == "N" || this.checked == false ) {
			checkAlertMsg( "essential" );
		}
	});

	//U_agree : 개인(신용)정보 수집.이용에 관한 사항(선택)
	$('input[name=agree_B]').click( function() {
		if( $(this).val() == "N" || this.checked == false ) {
			checkAlertMsg( "notEssential" );
		}
	});
});

function checkAlertMsg( flag ) {
	if( flag == "essential" ) {
		alert( '필수적인 수집·이용에 동의하셔야 대출신청이 진행됩니다.' );
	} else {
		alert( '선택적 수집·이용에 동의하시면, 추가대출, 한도증액을 지원해 드립니다.' );
	}
	return;
}

function zipCode(t_post,post_no1,post_no2, seq) { //v2.0
	features = " width=1050,height=790 , scrollbars=yes "
	winName = "";
	theURL = "/cm/post/post.do?seq="+seq;
//	alert(theURL);
	window.open(theURL,winName,features);
}
