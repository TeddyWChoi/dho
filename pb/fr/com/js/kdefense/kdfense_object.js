var var_kLicense;
var kdfv_domain = window.location.hostname;
// var request_os = window.navigator.appVersion;

var_kLicense = "7060f33b5208d0a644a57be7817690cc87f8640e9ddca0d1b94ec827c4f4fc6241";
//201412 Demo-Key



if(kdfv_domain.search("\\.happyloan.co.kr") != -1)
{	//var_kLicense = "751b4ea5f1761da90e0c1ce1475a74e1a20b6b720d563c8ef94e53b51375914961";
}
else if(kdfv_domain.search("happylaon.co.kr") != -1)
{	
	//var_kLicense = "be18ab273ad2dbd5d1c1a132effc605250c51c6bda715ec70857e673f98ba56550";
}

//라이센스 추가 
if(kdfv_domain.search("www.welcomeloan.co.kr") != -1)

{

           var_kLicense = "75f903ef2d8b414fd1ca9a29d92e4ae634157217504701e1101b450358b8bc8131";

}
else if(kdfv_domain.search("testwww2.welcomeloan.co.kr") != -1)

{
           var_kLicense = "7060f33b5208d0a644a57be7817690cc87f8640e9ddca0d1b94ec827c4f4fc6241";

}  
else if(kdfv_domain.search("testwww1.welcomeloan.co.kr") != -1)

{  			
			var_kLicense = "b4d1257c081e4ebca4233b8d1979ad85e7b1e702971078dbcf7466c8655821e130";

} 
else if(kdfv_domain.search("welcomeloan.co.kr") != -1)

{

           var_kLicense = "f983c56c70343abc51e293b58937859089187a04637f14d6fc58f632fe2c54ae30";

} 
 

var site_noption="00000002";   // 멀티브라우저 noption
var site_TitleList="웰컴론|" // 멀티브라우저 titlename

var bTrident=navigator.userAgent.toUpperCase().indexOf('TRIDENT');
var bWindows=navigator.userAgent.toUpperCase().indexOf('WINDOWS');

var thisUrl = document.location.href;
var urlResult = null;

if( window.ActiveXObject || (bTrident != -1 && bWindows != -1))
{	 
	
	//현재 접속 중이 페이지 체크
	urlResult = thisUrl.indexOf("ie_kdefense_install.html");

 	document.write('<object id=kdefense classid="CLSID:A4508A45-F1C4-40f3-99B4-0CA08AC77E3B"');
	//document.write('	codebase="http://kings.nefficient.co.kr/kings/kdfx/kdfx376/kdfense8.cab#Version=8,3,7,6"'); 
	//document.write(' codebase="/js/kdefense/kdfense8.cab#Version=8,3,7,6"'); 
	document.write('	height=0 width=0 align=left size=0>');

	document.write('	<PARAM name="nOption"  value=', parseInt("0x02000006",16), '>'); 
	document.write(' 	<PARAM name="nOptionEx2" value=', parseInt("0x00008088",16), '>');


	document.write('	<PARAM name="nModuleVersion" value="414043001">');  									
	document.write('	<PARAM name="szModulePath" value="http://kings.nefficient.co.kr/kings/kdfinj6x/414043001_6139/kdfinj.dll">'); // kdfcert.dll, k_cert.dll 설치 위치 변경, 드라이버 변경 (삼성 아티브 )
	document.write('	<PARAM name="szModuleHash" value="266E289EB30CCEC64DAFABAFC4C82D2A">');	 
	
	document.write(' 	<PARAM name="nExModuleVersion" value="714051501">');  
	document.write(' 	<PARAM name="szExModulePath" value="http://kings.nefficient.co.kr/kings/kdfmod3x/714051501_1043/kdfmod.dll">');
	document.write(' 	<PARAM name="szExModuleHash" value="EF9F94466FEC72BB2D7D23D673033155">');   
	
	document.write('	<PARAM name="szGKey" value="58c705643199c2ff067850db4181dff9f0d63edeecde16ab33ac57c24703d22ff0">');

	document.write('	<PARAM name="nINI7CustomCode" value="163">');

	document.write('	<PARAM name="szINI7SeedURL" value="http://'+location.host+'/shttp/handshake/e2e/req_cseed">');			
	document.write('	<PARAM name="szINI7RevokeSeedURL" value="http://'+location.host+'/shttp/handshake/e2e/revoke_seed">');		
	document.write('	<PARAM name="szINI7ExtReqExtURL" value="http://'+location.host+'/shttp/handshake/e2e/req_ext">');

	document.write('	<PARAM name="kLicense" value=', var_kLicense, '>');

	document.write('</object>');
}
else
{
	//현재 접속 중이 페이지 체크
	urlResult = thisUrl.indexOf("cw_kdefense_install.html");

	lsslmimeType = navigator.mimeTypes["application/lssl-plugin"]; 
	if(true)
	{
		if( lsslmimeType == null || lsslmimeType == "undefined"){
			if(urlResult < 0){
				document.location.href="/js/kdefense/cw_kdefense_install.html";
			}
		}else{
			if(fnChkPluginUpdate() ==true){
				if(urlResult < 0){
					document.location.href="/js/kdefense/cw_kdefense_install.html";							
				}		
			}
		}
	}
	
	document.write('	<embed id=lssl-plugin type="application/lssl-plugin" width=0 height=0 size=100');
	document.write('		nOption="20000002"');
	document.write('		nOptionEx= "00010001"');
	document.write('		nOptionEx2="00000004"');
	
	// kdfinj.dll
	document.write('		nModuleVersion="413111901"');
	document.write('		szModulePath="http://kings.nefficient.co.kr/kings/lotteIns_test/kdfinj/kdfinj.dll"');
	document.write('		szModuleHash="3B9A6D86DBA197674194C541F6DF2860"');
	
	// kdfmbr.dll
	document.write('		nMbrModuleVersion="613091601"');
	document.write('		szMbrModulePath="http://kings.nefficient.co.kr/kings/kdfmbr6x/613091601_1007_test/kdfmbr.dll"');
	document.write('		szMbrModuleHash="3A957E1A6CE88ADE58868C3FE7E11E3C"');
	
	document.write('		nPluginVersion="13061801"');
	document.write('		TitleChk="on"');
	//document.write('		PLUGINSPAGE="http://kings.nefficient.co.kr/kings/plugins/Lastest/K-Plugin.exe"');

	document.write('		szProtocol="', window.location.protocol, '"');
	document.write('		szHostname="', window.location.hostname, '"');
	document.write('		szTitleList="', site_TitleList,  '"');

	document.write('		szGKey="58c705643199c2ff067850db4181dff9f0d63edeecde16ab33ac57c24703d22ff0"');
	document.write('		kLicense="', var_kLicense, '">');

}

function OnKdfenseError(nError) // 이와 같은 함수를 만들어 놓으면 키보드보안 모듈에서 함수 호출
{
	if(nError == '0')
	{
//		alert("정상동작");
	}
	else
	{
		alert(nError+" : 에러가 발생하였습니다1");
		window.open('http://www.kings.co.kr/k/help/KError.php?ErrorCode='+nError,'팝업','width=1000,height=520,toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=no,left=150,top=100');
//		window.opener = "nothing";
//		window.open('', '_parent', '');
//		window.close();

		//비 정상 
		// nError에 에러 코드가 들어옴

		// 1 : kdfmgr.exe가 실행되어 있지 않은 경우
		// 2 : 일반모드인 경우
		// 3 : 보안 서비스를 할 수 없는 OS임
		// 4 : kdfinj.dll(키보드보안 모듈)이 정상적으로 로드 되지 않음
		// 5 : 타사의 키보드보안과 충돌
		// 10001 : 변조된 kdfmgr.exe가 동작중임
		// 10002 : 키보드보안 프로그램이 정상적으로 설치되어 있지 않음
		// 10003 : 키보드보안 프로그램이 비정상 종료되고 있음
		// 10004 : 키보드보안 프로그램을 업데이트 할 수 없어 정상 실행되지 않음
		// 10005 : 사용자가 권한 상승에 동의하지 않고 취소하여 키보드보안 프로그램이 실행되지 않음
		// 10006 : kdfmod가 값을 제대로 가져가지 못했을때, 대표값이 나올 수 있다는 에러 메시지 
		// 10007 : ActiveX로 전달되는 Param이 정상적이지 않은 경우 

		// 10008 : 웹 보안 모듈이 정상적으로 동작 하지 않음

		// 20001 : Kdfinj.dll 무결성에 문제
		// 20002 : Kdfmod.dll 무결성에 문제
				
		// 30001 : 정상적인 IE가 아님
		// 30002 : Debug Tool 탐지
		// 30003 : 최소 Driver 버전이 낮아서 재부팅 필요
	}
}


//플러그인 업데이트 필요 여부 회신 (false : 업데이트 필요, true : 업데이트 불필요)
function fnChkPluginUpdate()
{
	if (navigator.appName != "Microsoft Internet Explorer")
	{
		mime=navigator.mimeTypes["application/lssl-plugin"];
		var KVer=mime.enabledPlugin.description;
		
		var KreturnVal = KVer.substr(21,8);
		if (KreturnVal < 14051501){
			// 업데이트 필요함
			return true;
		}else{
			// 업데이트 필요하지 않음
			return false;
		}
	}
}

//DHTML 사용시 페이지 리로딩이 아닌 인풋Object동적 생성시 꼭 호출해 주어야 함.
//폼안의 input요소 초기화 기능.....
function KPluginEventInit()
{  
	KPluginEvent();	
}

function KPluginEvent()
{
	var ele = document.getElementsByTagName("input");	
	var formCount = document.forms.length;

	for(var l=0; l < ele.length; l++){
		if(ele[l].type=="password"||  ele[l].type=="text"){
			kdfSetEleHandler(ele[l]);
		}
	}	
}
	
function kdfSetEleHandler(e)
{
	if(e.type=="password"|| e.type=="text")
	{	
		var elementid=e.id;	
		var Ret=elementid.indexOf("xwup_");
					
		if(navigator.userAgent.toUpperCase().indexOf('TRIDENT/7.0')!=-1 && Ret == 0)
		{
			e.addEventListener("focus",kdfCertFocusIn,false);
			e.addEventListener("blur",kdfCertFocusOut,false);
		}
		else if(( window.ActiveXObject || (bTrident != -1 && bWindows != -1)) && Ret == 0 )
		{
			e.attachEvent("onfocus",kdfCertFocusIn);
			e.attachEvent("onblur",kdfCertFocusOut);
		}
		else if((navigator.appName != "Microsoft Internet Explorer" ) && Ret == 0)
		{
			e.addEventListener("focus",kdfCertFocusIn,false);
			e.addEventListener("keypress",K_Plugin_Key,false);  
			e.addEventListener("keydown",K_Plugin_KeyDownEvent,false);  	
			e.addEventListener("click",K_Plugin_clickEvent,false);  
			e.addEventListener("blur",K_Plugin_BlurEvent,false);
		}	
		else if(navigator.appName != "Microsoft Internet Explorer" )
		{
			//e.addEventListener("blur",K_Plugin_FocusOut,false);
			e.addEventListener("focus",K_Plugin_Focus,false);
			e.addEventListener("keypress",K_Plugin_Key,false);  
			e.addEventListener("keydown",K_Plugin_KeyDownEvent,false);  	
			e.addEventListener("click",K_Plugin_clickEvent,false);  
			e.addEventListener("blur",K_Plugin_BlurEvent,false);
		}	
	}
}

function K_Plugin_KeyDownEvent(e)
{
	var ffkeycode;
	var keycode;
	
	var embed2 = document.getElementById('lssl-plugin');
	
	if(!e) e = window.event;
	
	keycode = e.keyCode;
	ffkeycode=e.which;
	
	if(keycode==0x08){
		if(this.form==null){
			if(this.name){
				param= this.name;
			}else{
				param="";
			}	
		}else{
			if(this.form.name==""){
				if(this.name){
					param= this.name;
				}else{
					param="";
				}
			}else{
				param = this.form.name+ "."+ this.name;
			}
		}
		embed2.KKeydown(param,this.type,site_noption,site_TitleList);	
	}

	
	if(navigator.userAgent.indexOf("Firefox") != -1){
		if(ffkeycode){
			e.returnValue=false;
			return false;
		}	
	}
	
	return true;
}

function K_Plugin_BlurEvent(e)
{
	var embed2 = document.getElementById('lssl-plugin');
	
	if(embed2){
		if(this.type=='password'){
			embed2.KBlurUnHook();
		}else{
			embed2.KBlurUnHook();
		}
	}
}

function K_Plugin_clickEvent(e)
{

	var orgdata = this.value;
	this.value = orgdata+" ";
	this.value = orgdata;
	return true;
}

function K_Plugin_Key(e)
{
	var keycode;
	var charcode;
	var ffkeycode;
	
	if(!e) e = window.event;
		
	keycode = e.keyCode;
	ffkeycode=e.which;	
	
	if(navigator.userAgent.indexOf("Firefox") != -1){
		if(keycode!=0){
			return false;
		}
	}
	 
	charcode= String.fromCharCode(keycode);
	
	var param; 
	var embed2 = document.getElementById('lssl-plugin');
	
	if(this.form==null){
		if(this.name){
			param= this.name;
		}else{
			param="";
		}	
	}else{
		if(this.form.name==""){
			if(this.name){
				param= this.name;
			}else{
				param="";
			}
		}else{
			param = this.form.name+ "."+ this.name;
		}
	}
	
	//alert("this.form.name : "+this.form.name);

	var strlen=this.value.length;
	var strMaxLen=this.maxLength;

	if(strlen >= strMaxLen && strMaxLen != -1){
		return false;
	}

	
	var ClearRet;
	
	if(strlen==0){
		ClearRet="1";
	}else{
		ClearRet="0";
	}

	var realkey=embed2.KKeyPress(param,this.type,site_noption,site_TitleList,ClearRet);	
	var realkeycode=String.fromCharCode(realkey);
	
	var orgdata=this.value;
	this.value=orgdata+realkeycode;		
		
	return true;
}

function K_Plugin_Focus()
{
	var param; 
	var embed2 = document.getElementById('lssl-plugin');
		
	if(this.form==null){
		if(this.name){
			param= this.name;
		}else{
			param="";
		}	
	}else{
		if(this.form.name==""){
			if(this.name){
				param= this.name;
			}else{
				param="";
			}
		}else{
			param = this.form.name+ "."+ this.name;
		}	
	}
		
	var ClearRet;
	var strlen=this.value.length;
	if(strlen==0){
		ClearRet="1";
	}else{
		ClearRet="0";
	}

	embed2.KFocusE2E(param,this.type,site_noption,site_TitleList,ClearRet);	
	lastfocus=this;	
}

function K_Plugin_FocusOut()
{
	if(this.type =="password" ||this.type =="text"){
	}else{
	}
}


if(true)
{
	if( window.ActiveXObject =="undefined" || (bTrident == -1 && bWindows != -1))
	{
		setInterval(KPluginEventInit,2000);
	}
}



function kdfGetParentsName() 
{
	var objKDefense = fnGetKDefenseObject();
	if( objKDefense != null ){

		var GetName=objKDefense.GetParObj()
		alert(GetName);
		return GetName;
	}
	return null;
}



function getInternetExplorerVersion()
// Returns the version of Windows Internet Explorer or a -1
// (indicating the use of another browser).
{
   var rv = -1; // Return value assumes failure.
   if (navigator.appName == 'Microsoft Internet Explorer')
   {
      var ua = navigator.userAgent;
      var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");

	  if (re.exec(ua) != null) 
	   {
         rv = parseFloat( RegExp.$1 );
	   }
   }
   return rv;
}

// 키보드 보안 설치 유무 판단 
function fnGetKDefenseObject()
{		
	if( window.ActiveXObject || (bTrident != -1 && bWindows != -1)){
		var objKDefense = null;

		if(document.getElementById)	{
			objKDefense = document.getElementById("kdefense");
		}else {
			objKDefense = document.kdefense;
		}

		try{
			if(objKDefense.GetOCXVersion() == "") {
				return null;
			}else {
				return objKDefense;
			}
		}catch(e){
			//키보드 보안 미설치시 IE 설치 페이지로 이동
			if(urlResult < 0){	//현재 접속 중이 페이지 체크
				document.location.href="/js/kdefense/ie_kdefense_install.html";
			}
			return null;
		}
	}else{
		
		lsslmimeType = navigator.mimeTypes["application/lssl-plugin"];   
	
		if( lsslmimeType == null || lsslmimeType == "undefined"){
			return null;
		}else {
			return lsslmimeType;
		}
	}
}

function regFormEle_K(kFormEleString, caseOption)
{
	if( window.ActiveXObject || (bTrident != -1 && bWindows != -1)) 
	{
		var objKDefense = fnGetKDefenseObject();
		var szFormEle;

		
		if( objKDefense != null ){
			if(caseOption == "toUpperCase"){
				objKDefense.RegFormEle(kFormEleString, 1);
			}else if(caseOption == "toLowerCase"){
				objKDefense.RegFormEle(kFormEleString, 2);
			}else if(caseOption == "onlyNumber"){
				objKDefense.RegFormEle(kFormEleString, 3);
			}else if(caseOption == "none"){
				
				objKDefense.RegFormEle(kFormEleString, 0);
			}
		}
		/*
		else{
			alert("regForm kdefense NULL");
		}
		*/
	}
	else return 0;
}

function Get_Ini6_var()
{

   return SCert;
}

function SetIni6Seed()
{
	var objKDefense = fnGetKDefenseObject();
	var Ini6Seed;

	if( objKDefense != null )
	{
		
		Ini6Seed = objKDefense.Ini6SetSeed();		
		return Ini6Seed;
	}
	else 
	{
		return NULL;
	}
}
