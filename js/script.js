var current_href = "?page=2222";
var winHeight = 0;
var pageCounts = 1;

function Test() {
    alert("TEST");
}

// Jquery with no conflict
$(document).ready(function() {
});

$(window).resize(function () {
    winHeight = $(window).height();
    setModalHeight();
});

$(window).scroll(function() {
    var position = $(window).scrollTop();

    $('#fixedMenu').css('top', position+50);
});

window.onload = function() {
    winHeight = $(window).height();
    setPagerWidth();
}

/*---------- Board Event ----------*/

function loadNoticeContent() {
    $('#notice-board .notice-main').show();
}
function loadNoticeList() {
    $('#notice-board .notice-main').hide();
}

function changeNoticeBoard(type, obj) {
    initNoticeType();
    $('#notice-board .notice-type > span').removeAttr("class");
    obj.className = 'active';
    obj.innerHTML = type + ' <b class="caret"></b>';

    var contentList = $('.notice-content .type').get();

    if( type === "전체" ) {
        for( var i=0; i<contentList.length ; i++ ) {
            contentList[i].parentElement.style.display = 'block';
        }
    } else {
        for( var i=0; i<contentList.length ; i++ ) {
            if( contentList[i].children[0].innerHTML !== type ) {
                contentList[i].parentElement.style.display = 'none';
            } else {
                contentList[i].parentElement.style.display = 'block';
            }
        }
    }
}

function initNoticeType() {
    $('#notice-board .notice-type > span:nth-child(1)').text("전체");
    $('#notice-board .notice-type > span:nth-child(2)').text("공지");
    $('#notice-board .notice-type > span:nth-child(3)').text("업데이트");
    $('#notice-board .notice-type > span:nth-child(4)').text("이벤트");
}

function initNoticeBoard() {
    $('#notice-board .notice-type > span').removeAttr("class");

    var initText = $('#notice-board .notice-type').children().first().text();
    $('#notice-board .notice-type').children().first().addClass('active');
    $('#notice-board .notice-type').children().first().html(initText + ' <b class="caret"></b>');
}

/*---------- Parts Detail Initialization ----------*/
function initDetailModal() {
    setModalHeight();
}

function changeImage(img) {
    $('#pImage-list li').removeAttr("class");
    img.parentNode.className = "pImage-active";
    $("#pImage-main").attr("src", img.src);
}

function initImage() {
    $('#pImage-list li').removeAttr("class");

    var init = $('#pImage-list').children().first().children().attr("src");
    $('#pImage-list').children().first().addClass('pImage-active');
    $("#pImage-main").attr("src", init);
}

function prevImage() {
    if( $('#pImage-list li').first().attr("class") !== "pImage-active" ) {
        var imgSrc = $('#pImage-list .pImage-active').prev().children().attr("src");
        var obj = $('#pImage-list .pImage-active').prev();
        $('#pImage-list .pImage-active').removeAttr("class");
        obj.attr("class", "pImage-active");
        $("#pImage-main").attr("src", imgSrc);
    }
}

function nextImage() {
    if( $('#pImage-list li').last().attr("class") !== "pImage-active" ) {
        var imgSrc = $('#pImage-list .pImage-active').next().children().attr("src");
        var obj = $('#pImage-list .pImage-active').next();
        $('#pImage-list .pImage-active').removeAttr("class");
        obj.attr("class", "pImage-active");
        $("#pImage-main").attr("src", imgSrc);
    }
}
/* --------------------------------- */
function inputSearchPrice() {
    alert("SDF");
}

function setSearchResult() {
    var priceMin = parseInt($('#price-min').val());
    var priceMax = parseInt($('#price-max').val());

    if( $('#price-min').val() === '' ) {
        priceMin = 0;
        $('#price-min').val(0);
    }
    if( $('#price-max').val() === '' ) {
        priceMax = 0;
        $('#price-max').val(0);
    }

    if( isNaN(priceMin) || isNaN(priceMax) ) {
        alert("입력값이 올바르지 않습니다.");
        return;
    } else if( priceMin < 0 || priceMax < 0 ) {
        alert("입력 금액이 0 보다 작습니다.");
        return;
    } else if( priceMin > priceMax ) {
        alert("최대 금액이 최저 금액보다 작습니다.");
        return;
    }

    $('#price-min').val(priceMin);
    $('#price-max').val(priceMax);
    $('#search-result-list').show();
}

function setCartPage() {
    if($('#parts-cart').attr("value") !== '0') {
        $('#cart-emptyMessage').hide();
        $('#cart-total').show();
    }
}

function setCheckBoxAll() {
    $('.partsCheck > input').prop("checked", true);
}

function setCheckBoxHead() {
    if($('.table-head .partsCheck > input').is(':checked')) {
        $('.partsCheck > input').prop("checked", true);
    } else {
        $('.partsCheck > input').prop("checked", false);
    }
}

function categorySelect(code) {
    $("#category-middle option").remove();

    $("#category-middle").append("<option value=1001>" + code + "</option>");
    $("#category-middle").append("<option value=1002>" + code + "</option>");
    $("#category-middle").append("<option value=1003>" + code + "</option>");
    $("#category-middle").append("<option value=1004>" + code + "</option>");
    $("#category-middle").append("<option value=1004>" + code + "</option>");
}

function setPurchaseBank() {
    $('#paymentPage-bank').show();
}

function changeClassName() {
    jQuery(this).attr("class", "SSS");
}

function setModalHeight() {
    var pTop = (winHeight - 703) / 2 + "px";
    $('#detail-modal').css("padding-top", pTop);
}

function setPagerWidth() {
    var obj = document.getElementById('pager');
    if( pageCounts > 7 ) {
        obj.style.width = 11*34+"px";
    } else {
        obj.style.width  = (pageCounts + 4) * 34 + "px";
    }
}

function inputOnlyPhone(obj){
    var leng = obj.value.length;

    if( leng > 3 ) {
        event.returnValue=false;
    } else if ((event.keyCode> 47) && (event.keyCode < 58)){
        event.returnValue=true;
    } else {
        event.returnValue=false;
    }
}

function returnOnlyNum(){
    if ((event.keyCode> 47) && (event.keyCode < 58)){
        event.returnValue=true;
    } else {
        event.returnValue=false;
    }
}

function inputOnlyNum(obj)
{
    //좌우 방향키, 백스페이스, 딜리트, 탭키에 대한 예외
    if(event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46 ) return;

    obj.value = obj.value.replace(/[-=,.<>/?{}`~!@#$%^&*()_+\|;:'""["\ㄱ-ㅎㅏ-ㅣ가-힣]/g, '');
}

function pageReload() {
    location.reload();
}

function initMypageTab() {
    $('#recently-buy').show();
    $('#payWait-buy').hide();
    $('#deliveryProgress-buy').hide();
    $('#cancelProgress-buy').hide();
    $('#payWait-sell').hide();
    $('#recently-sell').show();
    $('#payComplete-sell').hide();
    $('#deliveryProgress-sell').hide();
    $('#cancelRequest-sell').hide();
}

function setPartsList(obj) {
    if( obj.className === 'payWait-buy-status' ) {
        $('#payWait-buy').show();
        $('#recently-buy').hide();
        $('#deliveryProgress-buy').hide();
        $('#cancelProgress-buy').hide();
    } else if( obj.className === 'deliveryProgress-buy-status' ) {
        $('#payWait-buy').hide();
        $('#recently-buy').hide();
        $('#deliveryProgress-buy').show();
        $('#cancelProgress-buy').hide();
    } else if( obj.className === 'cancelProgress-buy-status' ) {
        $('#payWait-buy').hide();
        $('#recently-buy').hide();
        $('#deliveryProgress-buy').hide();
        $('#cancelProgress-buy').show();
    } else if( obj.className === 'payWait-sell-status' ) {
        $('#payWait-sell').show();
        $('#recently-sell').hide();
        $('#payComplete-sell').hide();
        $('#deliveryProgress-sell').hide();
        $('#cancelRequest-sell').hide();
    } else if( obj.className === 'payComplete-sell-status' ) {
        $('#payWait-sell').hide();
        $('#recently-sell').hide();
        $('#payComplete-sell').show();
        $('#deliveryProgress-sell').hide();
        $('#cancelRequest-sell').hide();
    } else if( obj.className === 'deliveryProgress-sell-status' ) {
        $('#payWait-sell').hide();
        $('#recently-sell').hide();
        $('#payComplete-sell').hide();
        $('#deliveryProgress-sell').show();
        $('#cancelRequest-sell').hide();
    } else if( obj.className === 'cancelRequest-sell-status' ) {
        $('#payWait-sell').hide();
        $('#recently-sell').hide();
        $('#payComplete-sell').hide();
        $('#deliveryProgress-sell').hide();
        $('#cancelRequest-sell').show();
    }
}

function changeParentPage(link) {
    window.top.location.href = link;
}

/* 상품 등록 이미지 미리보기 */
function previewImage(targetObj, previewId) {
    var preview = document.getElementById(previewId); //div id
    var ua = window.navigator.userAgent;

    if (ua.indexOf("MSIE") > -1) {//ie일때

        targetObj.select();

        try {
            var src = document.selection.createRange().text; // get file full path
            var ie_preview_error = document.getElementById("ie_preview_error_" + previewId);

            if (ie_preview_error) {
                preview.removeChild(ie_preview_error); //error가 있으면 delete
            }

            var img = document.getElementById(previewId); //이미지가 뿌려질 곳

            img.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + src + "', sizingMethod='scale')";  //이미지 로딩, sizingMethod는 div에 맞춰서 사이즈를 자동조절 하는 역할
        } catch (e) {
            if (!document.getElementById("ie_preview_error_" + previewId)) {
                var info = document.createElement("<p>");
                info.id = "ie_preview_error_" + previewId;
                info.innerHTML = "a";
                preview.insertBefore(info, null);
            }
        }
    } else { //ie가 아닐때
        var files = targetObj.files;
        for ( var i = 0; i < files.length; i++) {

            var file = files[i];

            var imageType = /image.*/; //이미지 파일일경우만.. 뿌려준다.
            if (!file.type.match(imageType))
                continue;

            var prevImg = document.getElementById("prev_" + previewId); //이전에 미리보기가 있다면 삭제
            if (prevImg) {
                preview.removeChild(prevImg);
            }

            var img = document.createElement("img"); // 크롬은 div에 이미지가 뿌려지지 않는다. 그래서 자식Element를 만든다.
            img.id = "prev_" + previewId;
            img.classList.add("obj");
            img.file = file;
            img.style.width = preview.offsetWidth + 'px'; //기본설정된 div의 안에 뿌려지는 효과를 주기 위해서 div크기와 같은 크기를 지정해준다.
            img.style.height = preview.offsetHeight + 'px';

            preview.appendChild(img);

            if (window.FileReader) { // FireFox, Chrome, Opera 확인.
                var reader = new FileReader();
                reader.onloadend = (function(aImg) {
                    return function(e) {
                        aImg.src = e.target.result;
                    };
                })(img);
                reader.readAsDataURL(file);
            } else { // safari is not supported FileReader
                //alert('not supported FileReader');
                if (!document.getElementById("sfr_preview_error_"
                        + previewId)) {
                    var info = document.createElement("p");
                    info.id = "sfr_preview_error_" + previewId;
                    info.innerHTML = "not supported FileReader";
                    preview.insertBefore(info, null);
                }
            }
        }
    }
}

(function($) {
    $.QueryString = (function(a) {
        if (a == "") return {};
        var b = {};
        for (var i = 0; i < a.length; i++)
        {
            var p=a[i].split('=');
            if (p.length != 2) continue;
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " ")); //공백으로 변환 후 디코딩
        }
        return b;
    })(window.location.search.substr(1).split('&')) //파라미터 정보만 분리
})(jQuery);
