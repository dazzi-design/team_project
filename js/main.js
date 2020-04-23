// main.js

// num: 버튼번호(이미지 번호)
// function visual_change(num) {

//     // 비주얼 이미지 모두 비표시
//     $('.img img').css('display', 'none');
//     // 해당 이미지만 표시
//     $('.img img')
//     .eq(num - 1) // *eq 순서를 따짐 (eq는 0부터 순서를따짐 그래서 -1 넣어준다)
//     .css('display','block');

// }


$(function(){
    $(function(){

        // 비주얼 버튼 클릭
        $('#gnb > a').click(function(){
            // 클래스 제거 (상태 초기화)
            $('#gnb > a').removeClass('selected');

            // 클래스 추가
            $(this).addClass('selected');

            // a태그 하이퍼링크 기본 이벤트 해제
            return false;
        })
    })
});