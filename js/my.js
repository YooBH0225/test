// 버튼 프리셋

// $(function(){//load, ready
function setButton(btn){
    //외부스타일시트를 쓸 .htm파일에 쓸때 둘다 function으로 onload하면 충돌나서 망함!
    //그래서 클래스명으로 특정하지않고 매개변수로 받는다.
    $(btn).css({
        border: "1px solid #ccc",
        "background-color": "white",
        padding: "3px 10px",
        "border-radius": "4px"
    });
    $(btn).on({
        mouseover: function(){
            //mouseenter도 가능
            $(this).fadeOut(200).fadeIn(200)
                .fadeOut(200).fadeIn(200)
                .fadeOut(200).fadeIn(200);
        }
    });

// });
}
