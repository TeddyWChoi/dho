var atchFileMaxCnt = 3;
var imgFileMaxCnt = 3;

$(document).ready(function () {
	/* 버튼 이벤트 컨트롤 */
	$("#btn_write").click(function(){fncGoInsert();return false;});					//등록화면으로 이동
	$("#btn_save").click(function(){fncProc();return false;});						//저장 및 수정 처리
	$("#btn_modify").click(function(){fncGoUpdate();return false;});				//수정화면으로 이동
	$("#btn_delete").click(function(){fncDelete();return false;});					//삭제 처리
	$("#btn_delete_form").click(function(){fncDeleteForm();return false;});					//삭제 처리
	$("#btn_search").click(function(){fncSearch();return false;});					//검색
	$("#btn_list").click(function(){fncGoList();return false;});					//목록으로 이동
	$("#btn_sel_delete").click(function(){fncSelectDelete();return false;});		//선택 삭제 처리
	$("#btn_atch_file_add").click(function(){fncAddFile('atch');return false;});		//첨부 파일 추가
	$("#btn_img_file_add").click(function(){fncAddFile('img');return false;});		//이미지 첨부 파일 추가
	$("#emailAddr3").change(function(){
		if($("#emailAddr3").val() == ""){				
			$("#emailAddr2").removeAttr('readonly');
			$("#emailAddr2").val("");
			$("#emailAddr2").focus();
		} else {
			$("#emailAddr2").attr('readonly', 'readonly');
			$("#emailAddr2").val($("#emailAddr3").val());
		}
	});
	$("#btn_reload").click(function(){													//새로고침 및 초기화
		$("#inpPageIndex").val(1);
		$("#frmDefault").find("input").each(function(index){
			if($(this).attr("type").toLowerCase() == "text" || $(this).attr("type").toLowerCase() == "select") $(this).val("");
		});
		$("#frmDefault").find("select").each(function(index){
			$(this).val("");
		});
		fncGoList();return false;
	});
	$("#schKeyword").keypress(function(e) {
	    var code = (e.keyCode?e.keyCode:e.which);
	    if(code==13) $("#btn_search").trigger("click");
	});
});	
var fncGoPage= function (intPage) {	/* 페이지 이동 */
	$("#inpPageIndex").val(intPage);
	$("#frmDefault").attr({"action": "main.do", "target": "_self", "method": "get"}).submit();
};
var fncGoList = function () {	/* 목록으로 이동 */
	$("#inpSelectNtcob").val(0);
	$("#frmDefault").attr({"action": "main.do", "target": "_self", "method": "post"}).submit();
};	
var fncSearch = function () {	/* 검색 */
	if($("#schStartDate").val() != "" && $("#schEndDate").val() != ""){
		if($("#schStartDate").val() > $("#schEndDate").val()){
			alert("종료일자를 시작일자 이후로 선택해 주세요.");
			$("#schEndDate").focus();
			return false;
		}
	}
	$("#inpPageIndex").val(1);
	$("#frmDefault").attr({"action": "main.do", "target": "_self", "method": "get"}).submit();
};	
var fncGoInsert = function () {	/* 글쓰기로 이동 */
	$("#inpSelectNtcob").val(0);
	$("#frmDefault").attr({"action": "insertForm.do", "target": "_self", "method": "get"}).submit();
};
var fncGoUpdate = function () {	/* 글수정으로 이동 */
	$("#frmDefault").attr({"action": "updateForm.do", "target": "_self", "method": "get"}).submit();
};
var fncGoView = function (strIndex) {	/* 상세 글 보기로 이동 */
	$("#inpSelectNtcob").val(strIndex);
	$("#frmDefault").attr({"action": "view.do", "target": "_self", "method": "get"}).submit();
};
var fncSelectDelete = function(){	/* 선택 삭제 처리*/
	if($(".ntcobChk:checked").size() > 0){
		if(confirm("선택한 게시글을 삭제하시겠습니까?")){
			$("#frmDefault").attr({"action": "deleteAll.action", "target": "_self", "method": "post"}).submit();
		}
	}else{
		alert("선택된 게시글이 없습니다.");
	}
};
var fncDelete = function(){
	if(confirm("이 게시글을 삭제하시겠습니까?")){
		$("#frmDefault").attr({"action":"delete.action", "target": "_self", "method": "post"});
		$("#frmDefault").submit();
	}
};
var fncDeleteForm = function(){
	if(confirm("이 게시글을 삭제하시겠습니까?")){
		$("#frmDefault").attr({"action":"delete.action", "target": "_self", "method": "post"});
		$("#frmDefault").submit();
	}
};
function fnDeleteFile(atchFileId, fileSn, fileIndex, fileType) {
	if(confirm("선택한 파일을 삭제하시겠습니까?")) {
		$. getJSON("/cm/fms/deleteFileInfs.do", {
			atchFileId: atchFileId,
			fileSn: fileSn
		}, function (returnJson) {
			$("#"+fileType+"fileList_" + fileIndex).remove();
			fileIndex = Number(fileIndex) + Number(1);
			for (var i = fileIndex; i <= imgFileMaxCnt; i++) {
				var j = i+1;
				$("#imgalt"+i).val($("#imgalt"+j).val());
			}
			$("#imgalt"+imgFileMaxCnt).val("");
			$("#"+fileType+"FileCnt").val(eval($("#"+fileType+"FileCnt").val())-1);
		});
	};
}
var fnDownFile = function(atchFileId, fileSn){
	fncFrame.location.href = "/cm/fms/FileDown.do?atchFileId="+atchFileId+"&fileSn="+fileSn;
};
var fncAddFile = function(strVal){
	if(strVal == "atch"){
		var currCnt = eval($("#atchFileList li").length)+eval($("#atchFileCnt").val());
		if(atchFileMaxCnt > currCnt){
			currCnt = currCnt+1;
			$("#atchFileList").append("<li id=\"atchFile"+currCnt+"\"><label for=\"atchFile"+currCnt+"\">File</label><input name=\"atchFile"+currCnt+"\" id=\"atchFile"+currCnt+"\" type=\"file\" style=\"width:70%;\"/></li>");	
		}else{
			alert("이 게시판은 최대 "+atchFileMaxCnt+"개의 첨부파일을 등록 할 수 있습니다.");
		}
	}else if(strVal == "img"){
//		var currCnt = eval($("#imgFileList li").length)+eval($("#imgFileCnt").val());
		
		var currCnt = eval($("#imgFileList li").length)+eval($("#imgFileCnt").val()*2);
		currCnt = currCnt / 2;		
		if(imgFileMaxCnt > currCnt){
			currCnt = currCnt+1;
			$("#imgFileList").append("<li id=\"imgFile"+currCnt+"\"><label for=\"imgFile"+currCnt+"\">File</label><input name=\"imgFile"+currCnt+"\" id=\"imgFile"+currCnt+"\" type=\"file\" style=\"width:70%;\"/></li>");
			$("#imgFileList").append("<li id=\"imgalt"+currCnt+"\"><label for=\"imgalt"+currCnt+"\">ALT</label><input name=\"imgalt"+currCnt+"\" id=\"imgalt"+currCnt+"\" type=\"text\" style=\"width:70%;\"/></li>");	
		}else{
			alert("이 게시판은 최대 "+imgFileMaxCnt+"개의 이미지를 등록 할 수 있습니다.");
		}
	}
};
var checkFile = function(){
	var atchFileCnt = eval($("#atchFileCnt").val());
	$("#atchFileList li").find("input").each(function(index){
		if($(this).attr("type").toLowerCase() == "file"){
			if($(this).val() != ""){
				atchFileCnt = atchFileCnt+1;
			}
		}
	});
	if(atchFileMaxCnt < atchFileCnt){
		alert("이 게시판은 최대 "+atchFileMaxCnt+"개의 첨부파일을 등록 할 수 있습니다.");
		$("#atchFileList li").find("input").each(function(index){
			if($(this).attr("type").toLowerCase() == "file") $(this).val("");
		});
		return false;
	}
	var imgFileCnt = eval($("#imgFileCnt").val());
	$("#imgFileList li").find("input").each(function(index){
		if($(this).attr("type").toLowerCase() == "file"){
			if($(this).val() != ""){
				imgFileCnt = imgFileCnt+1;
			}
		}
	});
	if(imgFileMaxCnt < imgFileCnt){
		alert("이 게시판은 최대 "+imgFileMaxCnt+"개의 이미지를 등록 할 수 있습니다.");
		$("#imgFileList li").find("input").each(function(index){
			if($(this).attr("type").toLowerCase() == "file") $(this).val("");
		});
		return false;
	}
	return true;
};

//Tree
var setTree = function (strTreeClass, fncToggleClick) {
	var tree = $(strTreeClass);
	var togglePlus = '\<button type=\"button\" class=\"toggle plus\"\>+\<\/button\>';
	var toggleMinus = '\<button type=\"button\" class=\"toggle minus\"\>-\<\/button\>';
	
	// default
	tree.find('ul>li:last-child').addClass('last');
	tree.find('li>ul:hidden').parent('li').prepend(togglePlus);
	tree.find('li>ul:visible').parent('li').prepend(toggleMinus);
	
	// active
	tree.find('li.active').parents('li').addClass('open');
	tree.find('li.open').parents('li').addClass('open');
	tree.find('li.open>.toggle').text('-').removeClass('plus').addClass('minus');
	tree.find('li.open>ul').slideDown(100);
};

function uiRefresh(i){
	var docHeightOrign = ($(document).height());
	var docHeight = ($(document).height()) - 95;
	var docHeightF = ($(document).height()) - 30; 
	
	var wrap = $("#wrap");
	var container = $("#container");
	if($("#btnFullView").hasClass("full")){
		wrap.height(docHeightF);
		container.height(docHeightOrign);
	}else{
		wrap.height(docHeight);
		container.height(docHeightOrign);
	}
}

function loadCookie(name){
	var cname = name + "=";
	var dc = document.cookie;
	var val = "";
	if (dc.length > 0) {
		begin = dc.indexOf(cname);
		if (begin != -1) {
			begin += cname.length;
			end = dc.indexOf(";", begin);
			if (end == -1) end = dc.length;
			val += unescape(dc.substring(begin, end));
		}
	}
	return val;
}

function setCookie( name, value, expiredays ){
	var todayDate = new Date();
	todayDate.setDate( todayDate.getDate() + expiredays ); 
	document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";";
}

function msCheck() { // msie 버전 check
	var vs = navigator.appVersion;
	vs = vs.toLowerCase();

	var ieVersion = '';
	if( vs.indexOf("msie 6.0") != -1 ) { ieVersion = "6"; }
	if( vs.indexOf("msie 7.0") != -1 ) { ieVersion = "7"; }
	if( vs.indexOf("msie 8.0") != -1 ) { ieVersion = "8"; }
	if( vs.indexOf("msie 9.0") != -1 ) { ieVersion = "9"; }

	return ieVersion;
}

function browserNameCheck() { // browser check
	var vs = navigator.userAgent;
	vs = vs.toLowerCase();

	var browserName = '';

	if( vs.indexOf("firefox") != -1 ) { browserName = "firefox"; }
	else if( vs.indexOf("safari") != -1 ) { browserName = vs.indexOf("chrome") != -1 ? "chrome" : "safari"; }
	else if( vs.indexOf("msie") != -1 ) { browserName = "msie"; }
	else if( vs.indexOf("opera") != -1 ) { browserName = "opera"; }

	return browserName;
}


function jsMailVal(item)
{	
    var posAt;
	var fChk = 0;
    var mailAddr = item;	    

    posAt = mailAddr.indexOf("@");
	var mailID = mailAddr.substring(0, posAt);
	var mailHost = mailAddr.substring(posAt+1);
    
    if (posAt == -1) 
		fChk = 1;								/* @가 없으면 오류 */
	else 
	{
    	if ((mailID.toUpperCase() == "HTTP") ||(mailID.toUpperCase() == "WWW") ||(mailID == "/") ) 
			fChk = 1;
		else if (mailHost.indexOf("@") != -1) 
			fChk = 1;							/* @ 한번 이상 있으면 오류 */ 
		if (mailHost.indexOf(".") == -1)
			fChk = 1;							/* . 없으면 오류 */ 
		if (mailHost.indexOf(".") == mailHost.length-1) 
			fChk = 1;							/* . 뒤에 값이 없으면 오류 */ 
		if (mailAddr.indexOf("'") > -1 ) 
			fChk = 1;							/* . 뒤에 값이 없으면 오류 */ 
		if (mailHost.indexOf('"') > -1) 
			fChk = 1;							/* . 뒤에 값이 없으면 오류 */ 
		if (mailHost.indexOf('!') > -1) 
			fChk = 1;							/* . 뒤에 값이 없으면 오류 */ 
		if (mailHost.indexOf('`') > -1) 
			fChk = 1;							/* . 뒤에 값이 없으면 오류 */ 
		if (mailHost.indexOf(';') > -1) 
			fChk = 1;							/* . 뒤에 값이 없으면 오류 */ 
		if (mailHost.indexOf(':') > -1) 
			fChk = 1;							/* . 뒤에 값이 없으면 오류 */ 
		if (mailHost.indexOf('?') > -1) 
			fChk = 1;							/* . 뒤에 값이 없으면 오류 */ 
		if (mailHost.indexOf('/') > -1) 
			fChk = 1;							/* . 뒤에 값이 없으면 오류 */ 
	}

	if (fChk == 1) 				
		return false;
	if(fChk == 0)
		return true;
}