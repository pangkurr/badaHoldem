const gameSeries = document.querySelector(".gameSeries");
const seriesBtn = gameSeries.querySelectorAll(".mode");
const playerUI = document.querySelectorAll(".playerui");
//변수 
let type=0;
seriesBtn.forEach((btn,index)=>{
	btn.addEventListener("click",()=>{
		type = index;
		console.log(type);
		playerUI[0].style.display = type == 0 ? "block" : "none";
        playerUI[1].style.display = type == 0 ? "none" : "block";


		//유저 손패 카드 크기
var ucardWidth = "1.4rem";
var ucardHeight = "2rem";

//내 손패 카드 크기
var mcardWidth = "4rem";
var mcardHeight = "5.5rem";

//테이블 카드 크기
var tcardWidth = "3rem";
var tcardHeight = "4rem";
var tcardTop = "37%";
var tcardLeft = ["11.2%","26.5%","41.6%","56.6%","71.6%"];//딜러카드가 테이블 카드로 가는 위치

//테이블 카드 애니
var tcardAniWidth = ["3rem"];
var tcardAniHeight = ["4rem"];

//딜러 카드 & 딜러 칩 
var dcardWidth = "1.4rem";
var dcardHeight = "2rem"
var dcardTop = "40%";
var dcardLeft = "48%";
var dchipWidth = "0.8rem";
var dchipHeight ="0.5rem";
var dChipBottom = "55%";
var dChipLeft = "48%";

//시작 카드(2장) 뿌리기
var scardWidth = "1.4rem";
var scardHeight = "2rem";
var myScardWidth = "4rem";
var myScardHeight = "5.5rem";
var startScardTop = [];
var startScardLeft = [];

//핸디 애니에 사용될거
var hcardWidth = ["1.4rem","2rem"]; //유저 손패 카드 가로길이
var hcardHeight = ["2rem","2.8rem"];
var myHcardWidth = "4rem"; // 내 손패 카드 가로 길이

//chip 유저 -> 딜러쪽
var chipBottom = [];
var chipLeft = [] ;

//chip 딜러 -> 유저쪽
var wChipBottom = [];
var wChipLeft = [] ;

//userbox
var userbox;

//칩 스택 쌓는 애니
var chipStackLeft = ["30%","50%","70%"];
var chipStackBottom = ["14%"];
var tChipStackLeft = ["0%","20%","40%"];
var tChipStackBottom = ["8%"];
if(type==0){//6인
	startScardTop = ["-3.8%","20%","69.1%","92.3%","69.1%","20%"];
	startScardLeft = ["34.7%","-15.1%","-20.2%","47.6%","108.8%","103.7%"];
	chipBottom = ["-865%","-360%","1140%","1910%","2255%","1910%","1140%","-360%","-865%"];
	chipLeft = ["-4.2%","84%","114%","150%","-96%","-330%","-293%","-263%","-173%"] ;
	wChipBottom = ["223%","120%","-441%","-575%","-441%","120%"];
	wChipLeft = ["195%","27%","6%","186%","389%","366%"];
	
	userbox = $(".userbox6");
}else{//9인
	startScardTop = ["-3.8%","20%","49.2%","74.2%","92.3%","74.2%","49.2%","20%","-3.8%"];
	startScardLeft = ["4.8%","-15.1%","-23.4%","-26.5%","47.6%","114.7%","111.9%","103.7%","83.5%"];
	chipBottom = ["-865%","-360%","1140%","1910%","2255%","1910%","1140%","-360%","-865%"];
	chipLeft = ["-4.2%","84%","114%","150%","-96%","-330%","-293%","-263%","-173%"] ;
	wChipBottom = ["89%","121%","-280%","-484%","-577%","-484%","-280%","121%","89%"];
	wChipLeft = ["114%","25%","-3%","-41%","202%","431%","397%","366%","280%"];
	
	userbox = $(".userbox9");
}
$(document).ready(function(){
	if($(document).width()>1024){//pc
		//유저 손패 카드 크기
		ucardWidth = "1.4rem";
		ucardHeight = "2rem";

		//내 손패 카드 크기
		mcardWidth = "4rem";
		mcardHeight = "5.5rem";

		//테이블 카드 크기
		tcardWidth = "3rem";
		tcardHeight = "4rem";
		tcardTop = "37%";

		//테이블 카드 애니
		tcardAniWidth = ["3rem"];
		tcardAniHeight = ["4rem"];

		//딜러 카드 & 딜러 칩 
		dcardWidth = "1.4rem";
		dcardHeight = "2rem"
		dchipWidth = "0.8rem";
		dchipHeight ="0.5rem";

		//시작 카드(2장) 뿌리기
		scardWidth = "1.4rem";
		scardHeight = "2rem";
		myScardWidth = "4rem";
		myScardHeight = "5.5rem";

		//핸디 애니에 사용될거
		hcardWidth = ["1.4rem","2rem"]; //유저 손패 카드 가로길이
		hcardHeight = ["2rem","2.8rem"]; //유저 손패 카드 세로길이
		myHcardWidth = "4rem"; // 내 손패 카드 가로 길이

		if(type==0){//6인
			startScardTop = ["-3.8%","20%","69.1%","92.3%","69.1%","20%"];
			startScardLeft = ["34.7%","-15.1%","-20.2%","47.6%","108.8%","103.7%"];
			chipBottom = ["-865%","-360%","1140%","1910%","2255%","1910%","1140%","-360%","-865%"];
			chipLeft = ["-4.2%","84%","114%","150%","-96%","-330%","-293%","-263%","-173%"] ;
			wChipBottom = ["223%","120%","-441%","-575%","-441%","120%"];
			wChipLeft = ["195%","27%","6%","186%","389%","366%"];
			
			userbox = $(".userbox6");
		}else{//9인
			startScardTop = ["-3.8%","20%","49.2%","74.2%","92.3%","74.2%","49.2%","20%","-3.8%"];
			startScardLeft = ["4.8%","-15.1%","-23.4%","-26.5%","47.6%","114.7%","111.9%","103.7%","83.5%"];
			chipBottom = ["-865%","-360%","1140%","1910%","2255%","1910%","1140%","-360%","-865%"];
			chipLeft = ["-4.2%","84%","114%","150%","-96%","-330%","-293%","-263%","-173%"] ;
			wChipBottom = ["89%","121%","-280%","-484%","-577%","-484%","-280%","121%","89%"];
			wChipLeft = ["114%","25%","-3%","-41%","202%","431%","397%","366%","280%"];
			
			userbox = $(".userbox9");
		}
	}else{		//mobile
		//유저 손패 카드 크기
		ucardWidth = "4.8vw";
		ucardHeight = "6.8vw";

		//내 손패 카드 크기
		mcardWidth = "10vw";
		mcardHeight = "14vw";

		//테이블 카드 크기
		tcardWidth = "11vw";
		tcardHeight = "14vw";
		tcardTop = "37%";

		//테이블 카드 애니
		tcardAniWidth = ["11vw"];
		tcardAniHeight = ["14vw"];

		//딜러 카드 & 딜러 칩 
		dcardWidth = "3vw";
		dcardHeight = "4vw"
		dchipWidth = "3.5vw";
		dchipHeight ="2vw";

		//시작 카드(2장) 뿌리기
		scardWidth = "4.8vw";
		scardHeight = "6.8vw";
		myScardWidth = "10vw";
		myScardHeight = "14vw";
		
		//핸디 애니에 사용될거
		hcardWidth = ["4.8vw","5.5vw"]; //유저 손패 카드 가로길이
		hcardHeight = ["6.8vw","8vw"]; //유저 손패 카드 세로길이
		myHcardWidth = "10vw"; // 내 손패 카드 가로 길이

		if(type==0){//6인
			startScardTop = ["-3.2%","17.8%","66.9%","94%","66.9%","17.8%"];
			startScardLeft = ["34.8%","-11.2%","-19.4%","54.8%","106.8%","98.8%"];
			chipBottom = ["-642%","-378%","1647%","2255%","1647%","-378%"];
			chipLeft = ["-140%","20%","67%","-81%","-345%","-297%"];
			wChipBottom = ["250%","85%","-500%","-700%","-500%","85%"];
			wChipLeft = ["225%","5%","-70%","200%","530%","465%"];
			
			userbox = $(".userbox6");
		}else{//9인
			startScardTop = ["-3.2%","17.8%","46.7%","71.8%","94%","71.8%","46.7%","17.8%","-3.2%"];
			startScardLeft = ["10.7%","-13.07%","-19.4%","-17.3%","55%","104.9%","107%","100.8%","77%"];
			chipBottom = ["-697%","-370%","1080%","1825%","2339%","1825%","1080%","-370%","-697%"];
			chipLeft = ["-62%","37%","83%","53%","-142%","-331%","-361%","-312%","-213%"] ;
			wChipBottom = ["255%","100%","-275%","-520%","-680%","-520%","-275%","100%","255%"];
			wChipLeft = ["45%","30%","-20%","-50%","220%","520%","520%","440%","400%"];
			
			userbox = $(".userbox9");
		}
	}	
});

window.addEventListener("resize",function(){
	if(window.innerWidth >1024 ){//pc
		//유저 손패 카드 크기
		ucardWidth = "1.4rem";
		ucardHeight = "2rem";

		//내 손패 카드 크기
		mcardWidth = "4rem";
		mcardHeight = "5.5rem";

		//테이블 카드 크기
		tcardWidth = "3rem";
		tcardHeight = "4rem";
		tcardTop = "37%";

		//테이블 카드 애니
		tcardAniWidth = ["3rem"];
		tcardAniHeight = ["4rem"];

		//딜러 카드 & 딜러 칩 
		dcardWidth = "1.4rem";
		dcardHeight = "2rem"
		dchipWidth = "0.8rem";
		dchipHeight ="0.5rem";

		//시작 카드(2장) 뿌리기
		scardWidth = "1.4rem";
		scardHeight = "2rem";
		myScardWidth = "4rem";
		myScardHeight = "5.5rem";

		//핸디 애니에 사용될거
		hcardWidth = ["1.4rem","2rem"]; //유저 손패 카드 가로길이
		hcardHeight = ["2rem","2.8rem"]; //유저 손패 카드 세로길이
		myHcardWidth = "4rem"; // 내 손패 카드 가로 길이

		if(type==0){//6인
			startScardTop = ["-3.8%","20%","69.1%","92.3%","69.1%","20%"];
			startScardLeft = ["34.7%","-15.1%","-20.2%","47.6%","108.8%","103.7%"];
			chipBottom = ["-740%","-360%","1752%","2255%","1752%","-360%"];
			chipLeft = ["-110%","61%","83%","-101%","-308%","-285%"];
			wChipBottom = ["223%","120%","-441%","-575%","-441%","120%"];
			wChipLeft = ["195%","27%","6%","186%","389%","366%"];
			
			userbox = $(".userbox6");
		}else{//9인
			startScardTop = ["-3.8%","20%","49.2%","74.2%","92.3%","74.2%","49.2%","20%","-3.8%"];
			startScardLeft = ["4.8%","-15.1%","-23.4%","-26.5%","47.6%","114.7%","111.9%","103.7%","83.5%"];
			chipBottom = ["-575%","-267%","875%","1477%","1773%","1478%","879%","-265%","-575%"];
			chipLeft = ["1%","55%","103%","102%","-100%","-208%","-210%","-164%","-111%"] ;
			wChipBottom = ["89%","121%","-280%","-484%","-577%","-484%","-280%","121%","89%"];
			wChipLeft = ["114%","25%","-3%","-41%","202%","431%","397%","366%","280%"];
			
			userbox = $(".userbox9");
		}
	}else{	//mobile
		//유저 손패 카드 크기
		ucardWidth = "4.8vw";
		ucardHeight = "6.8vw";

		//내 손패 카드 크기
		mcardWidth = "10vw";
		mcardHeight = "14vw";

		//테이블 카드 크기
		tcardWidth = "11vw";
		tcardHeight = "14vw";
		tcardTop = "37%";

		//테이블 카드 애니
		tcardAniWidth = ["11vw"];
		tcardAniHeight = ["14vw"];

		//딜러 카드 & 딜러 칩 
		dcardWidth = "3vw";
		dcardHeight = "4vw"
		dchipWidth = "3.5vw";
		dchipHeight ="2vw";

		//시작 카드(2장) 뿌리기
		scardWidth = "4.8vw";
		scardHeight = "6.8vw";
		myScardWidth = "10vw";
		myScardHeight = "14vw";
		//핸디 애니에 사용될거
		hcardWidth = ["4.8vw","5.5vw"]; //유저 손패 카드 가로길이
		hcardHeight = ["6.8vw","8vw"]; //유저 손패 카드 세로길이
		myHcardWidth = "10vw"; // 내 손패 카드 가로 길이
		
		if(type==0){//6인
			startScardTop = ["-3.2%","17.8%","66.9%","94%","66.9%","17.8%"];
			startScardLeft = ["34.8%","-11.2%","-19.4%","54.8%","106.8%","98.8%"];
			chipBottom = ["-642%","-378%","1647%","2255%","1647%","-378%"];
			chipLeft = ["-140%","20%","67%","-81%","-345%","-297%"];
			wChipBottom = ["250%","85%","-500%","-700%","-500%","85%"];
			wChipLeft = ["225%","5%","-70%","200%","530%","465%"];
			
			userbox = $(".userbox6");
		}else{//9인
			startScardTop = ["-3.2%","17.8%","46.7%","71.8%","94%","71.8%","46.7%","17.8%","-3.2%"];
			startScardLeft = ["10.7%","-13.07%","-19.4%","-17.3%","55%","104.9%","107%","100.8%","77%"];
			chipBottom = ["-697%","-370%","1080%","1825%","2339%","1825%","1080%","-370%","-697%"];
			chipLeft = ["-62%","37%","83%","53%","-142%","-331%","-361%","-312%","-213%"] ;
			wChipBottom = ["255%","100%","-275%","-520%","-680%","-520%","-275%","100%","255%"];
			wChipLeft = ["45%","30%","-20%","-50%","220%","520%","520%","440%","400%"];
			
			userbox = $(".userbox9");
		}
	}	
});
function test(){
	deleteGameSetting();
	setTimeout(startGameSetting,2000);
	setTimeout(giveTwoCard,3000);
	setTimeout(function(){userHcard(4,"u_heart03","u_heart06");},5000)
	setTimeout(function(){userTimer(4)},5500)
	setTimeout(theFlop,7500);
	setTimeout(theTurn,8000);
	setTimeout(theRiver,9000);
	setTimeout(function(){userHcard(3,"u_heart06","u_heart09");},10000);
	setTimeout(showResult,10500);
}
function deleteGameSetting(){
	setTimeout(function(){
		//결과화면 지우기
		$(".gameframe").find(".effect").removeClass("effect"); //모든 effect 제거
		$(".gameresult, .d_card,.card,.potbox, .action, .speechbubble, .tablecardwrap, .bb, .sb, .d, .winnercrown, .waitscreen, .chip, .betchipimg").css("display","none"); //display:none 모아둔거
		$(".chipamount").css("visibility","hidden");
		//pot 박스 내용 초기화
		$('.totalmoney').html('POT<br>0');
		$(".betmoney").text(0);

		//베팅 클래스 삭제
		$(".action").removeClass("call, raise, check, fold, allin");

		$(".card, .tablecard").each(function(){//카드 이미지 back으로 변경
			var src = $(this).attr("src");
			var backSrc = src.replace(/[^/]+$/, 'back.png');
			$(this).attr("src",backSrc);
		});
		
		//userHcard에서 설정된 카드 크기 초기화
		$(".cardwrap.left").css({left:"-30%"}); //게임 셋팅시 다시 50% 로 설정
		$(".cardwrap.right").css({right:"30%"});
		$(".card").not(".my").css({height:hcardHeight[0]});
		$(".cardwrap").not(".my").css({width:hcardWidth[0]});
		//기권했던 유저들 반투명화 취소
		userbox.css("opacity",1);
	},2000)
}

function startGameSetting(){//인자에 obj 들어감

	//결과화면 지우기
	$(".gameframe").find(".effect").removeClass("effect"); //모든 effect 제거
	$(".gameresult, .d_card, .card, .potbox, .action, .speechbubble, .tablecardwrap, .bb, .sb, .d, .winnercrown, .waitscreen, .chip, .betchipimg").css("display","none"); //display:none 모아둔거
	$(".chipamount").css("visibility","hidden");
	//pot 박스 내용 초기화
	$('.totalmoney').html('POT<br>0');
	$(".betmoney").text(0);

	//베팅 클래스 삭제
	$(".action").removeClass("call, raise, check, fold, allin");

	$(".card, .tablecard").each(function(){//카드 이미지 back으로 변경
		var src = $(this).attr("src");
		var backSrc = src.replace(/[^/]+$/, 'back.png');
		$(this).attr("src",backSrc);
	});
	
	//userHcard에서 설정된 카드 크기 초기화
	$(".cardwrap.left").css({left:"-30%"}); //게임 셋팅시 다시 50% 로 설정
	$(".cardwrap.right").css({right:"30%"});
	$(".card").not(".my").css({height:hcardHeight[0]});
	$(".cardwrap").not(".my").css({width:hcardWidth[0]});
	
	//기권했던 유저들 반투명화 취소
	userbox.css("opacity",1);
	
	$(".potbox").css("display","flex");
	
	//엔티애니
	let dSeat = 0;
	let sbSeat = 1;
	let bbSeat = 2;
	// let dSeat = findClientSeat(parseInt(obj.dealer));
	// let sbSeat = findClientSeat(parseInt(obj.sb));
	// let bbSeat = findClientSeat(parseInt(obj.bb));
	$(".d , .sb, .bb").css("display","none");
	userbox.eq(dSeat).find(".d").css("display","flex");
	userbox.eq(sbSeat).find(".sb").css("display","flex");
	userbox.eq(bbSeat).find(".bb").css("display","flex");

	startCoin(1);
	startCoin(2);
	setTimeout(function(){
		tStartCoin(1);
		tStartCoin(2);
		setTimeout(function(){
			totalCoinStack(0)
		},1500);
	},800)
	
}

function bet(num){
	var box = userbox.filter(".my");
	box.find(".imgbubble, .sa-text").removeClass("call, check, fold, allin, raise");

	switch(num){
	case 0:
		box.find(".speechaction").css("display","flex")
		box.find(".imgbubble, .sa-text").addClass("check");
		break;
	case 1:
		box.find(".speechaction").css("display","flex")
		box.find(".imgbubble, .sa-text").addClass("raise");
		break;
	}
	
	setTimeout(function(){
		box.find(".speechaction").css("display","none")
		box.find(".action").css("display","flex").removeClass("call, check, fold, allin, raise").addClass("check");
		userbox.each(function() {
		    clearInterval(timerProgress);
		    $(this).find('.timerprofile').css('background', 'transparent');
		});
		userTimer(3);
	},1000)
}

//타이머
var timerProgress; //timer 상태 저장 변수
function userTimer(num) {
	userbox.each(function() {
	    clearInterval(timerProgress);
	    $(this).find('.timerprofile').css('background', 'transparent');
	});
    var timerProfile = userbox[num].querySelector('.timerprofile'); //background 입힐 곳
    var sValue = 0; // 회전 시작 값
    var dValue = 360; // 회전 끝 값
    var speed = 41.6; // 회전 속도  , 1초=1000 ,진행시간/dValue, 15초(15000)/360 = 41.6 

    // 이전 타이머 중지 및 초기화
    if (timerProfile.hasAttribute('data-timer-id')) { //현재 있는 data-timer-id 속성이 있는지 판별
        clearInterval(timerProfile.getAttribute('data-timer-id')); //timerProgress값 초기화
        timerProfile.removeAttribute('data-timer-id'); //데이터 값 있으면 제거
        timerProfile.style.background = 'transparent'; //진행중인 timerProfile 배경색을 투명색으로 감추기.
    }

    timerProgress = setInterval(() => {
        sValue++; // 3.6 곱하기 sValue 값 = 0도부터 360도
		timerProfile.style.background = 'conic-gradient(hsl(' + sValue + ', 100%, 50%) ' + sValue + 'deg, #fff3f3 0deg)';


        if (sValue == dValue) { //3.6도 ~ 360도가 완료되면 제거
            clearInterval(timerProgress);
            clearInterval(timerProfile.getAttribute('data-timer-id')); //timerProgress값 초기화
            timerProfile.removeAttribute('data-timer-id'); //데이터 값 있으면 제거
            timerProfile.style.background = 'transparent'; //진행중인 timerProfile 배경색을 투명색으로 감추기.
        }
    }, speed);

    // 현재 타이머 ID를 데이터 속성에 저장
    timerProfile.setAttribute('data-timer-id', timerProgress);
}

function giveTwoCard(){
	console.log(type)
	let delay = 0;
	let userLength;
	if(type==0){//6인
		console.log("ture")
		userLength = 6; 
		for(var i=0; i<userLength;i++){
			// let cSeat = findClientSeat(parseInt(obj.userList[i].seat));
			let card1 = $(".d_card").not(".scard").clone();
			let card2 = $(".d_card").not(".scard").clone();
			card1.add(card2).addClass("scard");
			card1.add(card2).css({width:0,height:0,zIndex:1,display:"block"})
			$(".gameui").append(card1,card2);
			switch(i){
				case 0:
					card1.delay(delay+=100).animate({width:scardWidth,height:scardHeight,top:startScardTop[0],left:(parseFloat(startScardLeft[0])+0*3.7)+"%"},350,function(){
						card2.animate({width:scardWidth,height:scardHeight,top:startScardTop[0],left:(parseFloat(startScardLeft[0])+1*3.7)+"%"},350,function(){
							card1.remove();
							card2.remove();
							$(".userbox6:eq("+0+")").find(".cardbox .card").css({display:"block"});
						})
					});
					break;
				case 1:
					card1.delay(delay+=100).animate({width:scardWidth,height:scardHeight,top:startScardTop[1],left:(parseFloat(startScardLeft[1])+0*3.7)+"%"},350,function(){
						card2.animate({width:scardWidth,height:scardHeight,top:startScardTop[1],left:(parseFloat(startScardLeft[1])+1*3.7)+"%"},350,function(){
							card1.remove();
							card2.remove();
							$(".userbox6:eq("+1+")").find(".cardbox .card").css({display:"block"});
						})
					});
					break;
				case 2:
					card1.delay(delay+=100).animate({width:scardWidth,height:scardHeight,top:startScardTop[2],left:(parseFloat(startScardLeft[2])+0*3.7)+"%"},350,function(){
						card2.animate({width:scardWidth,height:scardHeight,top:startScardTop[2],left:(parseFloat(startScardLeft[2])+1*3.7)+"%"},350,function(){
							card1.remove();
							card2.remove();
							$(".userbox6:eq("+2+")").find(".cardbox .card").css({display:"block"});
						})
					});
					break;
				case 3: //my
					card1.delay(delay+=100).animate({width:myScardWidth,height:myScardHeight,top:startScardTop[3],left:(parseFloat(startScardLeft[3])+0*15.6)+"%"},350,function(){
						card2.animate({width:myScardWidth,height:myScardHeight,top:startScardTop[3],left:(parseFloat(startScardLeft[3])+1*23.4)+"%"},350,function(){
							card1.remove();
							card2.remove();
							$(".userbox6:eq("+3+")").find(".cardbox .card").css({display:"block"});
						})
					});
					break;
				case 4:
					card1.delay(delay+=100).animate({width:scardWidth,height:scardHeight,top:startScardTop[4],left:(parseFloat(startScardLeft[4])+0*3.7)+"%"},350,function(){
						card2.animate({width:scardWidth,height:scardHeight,top:startScardTop[4],left:(parseFloat(startScardLeft[4])+1*3.7)+"%"},350,function(){
							card1.remove();
							card2.remove();
							$(".userbox6:eq("+4+")").find(".cardbox .card").css({display:"block"});
						})
					});
					break;
				case 5:
					card1.delay(delay+=100).animate({width:scardWidth,height:scardHeight,top:startScardTop[5],left:(parseFloat(startScardLeft[5])+0*3.7)+"%"},350,function(){
						card2.animate({width:scardWidth,height:scardHeight,top:startScardTop[5],left:(parseFloat(startScardLeft[5])+1*3.7)+"%"},350,function(){
							card1.remove();
							card2.remove();
							$(".userbox6:eq("+5+")").find(".card").css({display:"block"});
						})
					});
					break;
			}
		}
	}else{
		userLength = 9;
		for(var i=0; i<userLength;i++){
			// let cSeat = findClientSeat(parseInt(obj.userList[i].seat));
			let card1 = $(".d_card").not(".scard").clone();
			let card2 = $(".d_card").not(".scard").clone();
			card1.add(card2).addClass("scard");
			card1.add(card2).css({width:0,height:0,zIndex:1,display:"block"})
			$(".gameui").append(card1,card2);
			switch(i){
			case 0:
				card1.delay(delay+=100).animate({width:scardWidth,height:scardHeight,top:startScardTop[0],left:(parseFloat(startScardLeft[0])+0*3.7)+"%"},350,function(){
					card2.animate({width:scardWidth,height:scardHeight,top:startScardTop[0],left:(parseFloat(startScardLeft[0])+1*3.7)+"%"},350,function(){
						card1.remove();
						card2.remove();
						$(".userbox9:eq("+0+")").find(".card").css({display:"block"});
					})
				});
				break;
			case 1:
				card1.delay(delay+=100).animate({width:scardWidth,height:scardHeight,top:startScardTop[1],left:(parseFloat(startScardLeft[1])+0*3.7)+"%"},350,function(){
					card2.animate({width:scardWidth,height:scardHeight,top:startScardTop[1],left:(parseFloat(startScardLeft[1])+1*3.7)+"%"},350,function(){
						card1.remove();
						card2.remove();
						$(".userbox9:eq("+1+")").find(".card").css({display:"block"});
					})
				});
				break;
			case 2:
				card1.delay(delay+=100).animate({width:scardWidth,height:scardHeight,top:startScardTop[2],left:(parseFloat(startScardLeft[2])+0*3.7)+"%"},350,function(){
					card2.animate({width:scardWidth,height:scardHeight,top:startScardTop[2],left:(parseFloat(startScardLeft[2])+1*3.7)+"%"},350,function(){
						card1.remove();
						card2.remove();
						$(".userbox9:eq("+2+")").find(".card").css({display:"block"});
					})
				});
				break;
			case 3:
				card1.delay(delay+=100).animate({width:scardWidth,height:scardHeight,top:startScardTop[3],left:(parseFloat(startScardLeft[3])+0*3.7)+"%"},350,function(){
					card2.animate({width:scardWidth,height:scardHeight,top:startScardTop[3],left:(parseFloat(startScardLeft[3])+1*3.7)+"%"},350,function(){
						card1.remove();
						card2.remove();
						$(".userbox9:eq("+3+")").find(".card").css({display:"block"});
					})
				});
				break;
			case 4: //MY
				card1.delay(delay+=100).animate({width:myScardWidth,height:myScardHeight,top:startScardTop[4],left:(parseFloat(startScardLeft[4])+0*15.6)+"%"},350,function(){
					card2.animate({width:myScardWidth,height:myScardHeight,top:startScardTop[4],left:(parseFloat(startScardLeft[4])+1*23.4)+"%"},350,function(){
						card1.remove();
						card2.remove();
						$(".userbox9:eq("+4+")").find(".card").css({display:"block"});
					})
				});
				break;
			case 5:
				card1.delay(delay+=100).animate({width:scardWidth,height:scardHeight,top:startScardTop[5],left:(parseFloat(startScardLeft[5])+0*3.7)+"%"},350,function(){
					card2.animate({width:scardWidth,height:scardHeight,top:startScardTop[5],left:(parseFloat(startScardLeft[5])+1*3.7)+"%"},350,function(){
						card1.remove();
						card2.remove();
						$(".userbox9:eq("+5+")").find(".card").css({display:"block"});
					})
				});
				break;
			case 6:
				card1.delay(delay+=100).animate({width:scardWidth,height:scardHeight,top:startScardTop[6],left:(parseFloat(startScardLeft[6])+0*3.7)+"%"},350,function(){
					card2.animate({width:scardWidth,height:scardHeight,top:startScardTop[6],left:(parseFloat(startScardLeft[6])+1*3.7)+"%"},350,function(){
						card1.remove();
						card2.remove();
						$(".userbox9:eq("+6+")").find(".card").css({display:"block"});
					})
				});
				break;
			case 7:
				card1.delay(delay+=100).animate({width:scardWidth,height:scardHeight,top:startScardTop[7],left:(parseFloat(startScardLeft[7])+0*3.7)+"%"},350,function(){
					card2.animate({width:scardWidth,height:scardHeight,top:startScardTop[7],left:(parseFloat(startScardLeft[7])+1*3.7)+"%"},350,function(){
						card1.remove();
						card2.remove();
						$(".userbox9:eq("+7+")").find(".card").css({display:"block"});
					})
				});
				break;
			case 8:
				card1.delay(delay+=100).animate({width:scardWidth,height:scardHeight,top:startScardTop[8],left:(parseFloat(startScardLeft[8])+0*3.7)+"%"},350,function(){
					card2.animate({width:scardWidth,height:scardHeight,top:startScardTop[8],left:(parseFloat(startScardLeft[8])+1*3.7)+"%"},350,function(){
						card1.remove();
						card2.remove();
						$(".userbox9:eq("+8+")").find(".card").css({display:"block"});
					})
				});
				break;
			}
		}
	}
}

function theFlop(){//인자 obj obj.cardList[1]
	$(".action").removeClass("call, raise, check, fold, allin");
	userbox.each(function() {
	    clearInterval(timerProgress);
	    $(this).find('.timerprofile').css('background', 'transparent');
	});
	setTimeout(tcardAni, 350); // 테이블 카드 뿌리기
	setTimeout(function(){
		tableCardAni(0 , "1_diamond01");
		tableCardAni(1 , "2_space01");
		tableCardAni(2 , "3_space12");
	},450)
}

function theTurn(){//인자 obj
	$(".action").removeClass("call, raise, check, fold, allin");
	userbox.each(function() {
	    clearInterval(timerProgress);
	    $(this).find('.timerprofile').css('background', 'transparent');
	});
	setTimeout(function(){tcardAni2(0)}, 350); // 테이블 카드 뿌리기
	setTimeout(function(){tableCardAni(3 , "4_heart01")},450);
}

function theRiver(){//인자 obj
	$(".action").removeClass("call, raise, check, fold, allin");
	userbox.each(function() {
	    clearInterval(timerProgress);
	    $(this).find('.timerprofile').css('background', 'transparent');
	});
	setTimeout(tcardAni2(1), 350); // 테이블 카드 뿌리기
	setTimeout(function(){tableCardAni(4 , "5_space05")},350);
}



function tcardAni(){ // flop
	for(var i=0; i<3; i++){
		let dcard = $(".d_card").not(".tcard").clone();
		dcard.addClass("tcard");
		$(".gameui").append(dcard);
		switch(i){
		case 0 :
			dcard.attr("src","images/back.png").css("display","flex").animate({width:tcardWidth,height:tcardHeight,top:tcardTop,left:tcardLeft[0]},250,'linear',function(){
				$(".tablecardbox").find(".tablecardwrap:eq(0)").css("display","flex");
			});
			break;
		case 1 :
			dcard.attr("src","images/back.png").css("display","flex").animate({width:tcardWidth,height:tcardHeight,top:tcardTop,left:tcardLeft[1]},250,'linear',function(){
				$(".tablecardbox").find(".tablecardwrap:eq(1)").css("display","flex");
			});
			break;
		case 2 :
			dcard.attr("src","images/back.png").css("display","flex").animate({width:tcardWidth,height:tcardHeight,top:tcardTop,left:tcardLeft[2]},250,'linear',function(){
				$(".tablecardbox").find(".tablecardwrap:eq(2)").css("display","flex");
				$(".d_card.tcard").remove();
			});
			break;
		}
	}
};
function tcardAni2(man){ //turn , river
		let dcard = $(".d_card").not(".tcard").clone();
		dcard.addClass("tcard");
		$(".gameui").append(dcard);
		switch(man){
		case 0: //turn
			dcard.attr("src","images/back.png").animate({width:tcardWidth,height:tcardHeight,top:tcardTop,left:tcardLeft[3]},250,'linear',function(){
				$(".tablecardbox").find(".tablecardwrap:eq(3)").css("display","flex");
				dcard.remove();
			});
			break;
		case 1: //river
			dcard.attr("src","images/back.png").animate({width:tcardWidth,height:tcardHeight,top:tcardTop,left:tcardLeft[4]},250,'linear',function(){
				$(".tablecardbox").find(".tablecardwrap:eq(4)").css("display","flex");
				dcard.remove();
			});
			break;
		}
}

function tableCardAni(man,card){ //0~2 :flop , 3:turn , 4:river
	man = Number(man);
	switch(man){
	case 0:
		$(".tablecardbox").find(".tablecard:eq("+man+")").delay(120).css({display:"flex"}).animate({width:tcardWidth,height:tcardHeight},70,function(){
			$(".tablecard:eq("+man+")").animate({width:0},300,"linear",function(){
				$(".tablecardwrap:eq("+man+")").find(".tablecard").attr("src","images/"+card+".png").animate({width:tcardWidth,height:tcardHeight},150,"linear");
			});
		});
		break;
	case 1:
		$(".tablecardbox").find(".tablecard:eq("+man+")").delay(120).css({display:"flex"}).animate({width:tcardWidth,height:tcardHeight},70,function(){
			$(".tablecard:eq("+man+")").animate({width:0},300,"linear",function(){
				$(".tablecardwrap:eq("+man+")").find(".tablecard").attr("src","images/"+card+".png").animate({width:tcardWidth,height:tcardHeight},150,"linear");
			});
		});
		break;
	case 2:
		$(".tablecardbox").find(".tablecard:eq("+man+")").delay(120).css({display:"flex"}).animate({width:tcardWidth,height:tcardHeight},70,function(){
			$(".tablecard:eq("+man+")").animate({width:0},300,"linear",function(){
				$(".tablecardwrap:eq("+man+")").find(".tablecard").attr("src","images/"+card+".png").animate({width:tcardWidth,height:tcardHeight},150,"linear");
			});
		});
		break;
	case 3://turn
		$(".tablecardbox").find(".tablecard:eq("+man+")").delay(120).css({display:"flex"}).animate({width:tcardWidth,height:tcardHeight},70,function(){
			$(".tablecard:eq("+man+")").animate({width:0},120,"linear",function(){
				$(".tablecardwrap:eq("+man+")").find(".tablecard").attr("src","images/"+card+".png").animate({width:tcardWidth,height:tcardHeight},300,"swing");
			});
		});
		break;
	case 4://river
		$(".tablecardbox").find(".tablecard:eq("+man+")").delay(120).css({display:"flex"}).animate({width:tcardWidth,height:tcardHeight},70,function(){
			$(".tablecard:eq("+man+")").animate({width:0},120,"linear",function(){
				$(".tablecardwrap:eq("+man+")").find(".tablecard").attr("src","images/"+card+".png").animate({width:tcardWidth,height:tcardHeight},300,"swing");
			});
		});
		break;
	}
}
function startCoin(man){
	userbox.eq(man).find(".chipamount").css("visibility","visible");
	
	for(var i=0;i<3; i++){
		let obj =userbox.eq(man).find(".chip").not(".scoin").clone();
		obj.addClass("scoin");
		userbox.eq(man).find(".chipbox").append(obj);
		obj.delay(90*i).css("display","block").animate({bottom:100+(14*i)+"%"},90);
	}
}
function tStartCoin(man){
	userbox.eq(man).find(".chipamount").css("visibility","hidden");
	userbox.eq(man).find(".scoin").animate({bottom:chipBottom[man],left:chipLeft[man]},300,"linear",function(){
		userbox.eq(man).find(".scoin").remove();
	});
}
function betCoinStack(man,test){//베팅시 chip 쌓는 애니 / 인자 cnum,man,num / cnum = obj.gubetMoney , num = obj.clientBbMoney
	// cnum = Number(cnum);//베팅값
	// man = Number(man); //cSeat
	// num = Number(num); //bbMoney 값
	var numCoins;
	const MAX_COIN = 13;//코인 최대개수값
	numCoins = (test == 0) ? 6 : (test == 1) ? 10 : MAX_COIN;

	for(var i=0; i<numCoins;i++){
		let obj =userbox.eq(man).find(".chip").not(".scoin").clone();
		obj.addClass("scoin");
		userbox.eq(man).find(".chipbox").append(obj);

		if(i<=5){
			obj.delay(90*i).css({left:chipStackLeft[1],display:"flex"}).animate({bottom:(100+(14*i)+"%")},150);
		}else if(i>5 && i<=9){
			let num = i-5;
			obj.delay(90*num).css({left:chipStackLeft[0],display:"flex"}).animate({bottom:(86+(14*num)+"%")},150);
		}else{
			let num = i-9;
			obj.delay(90*num).css({left:chipStackLeft[2],display:"flex"}).animate({bottom:(86+(14*num)+"%")},150);
		}
	}
}
function totalCoinStack(test){
	$(".tcoin").remove(); //갱신하기 위해 기존 코인 삭제
	var numCoins;
	const MAX_COIN = 13;//코인 최대개수값
	numCoins = (test == 0) ? 6 : (test == 1) ? 10 : MAX_COIN;

	for(var i=0; i<numCoins;i++){
		let obj =$(".potbox").find(".betchipimg").not(".tcoin,.scoin").clone();
		obj.addClass("tcoin");
		$(".betchipwrap").append(obj);

		if(i<=5){
			obj.delay(90*i).css({left:tChipStackLeft[1],display:"flex"}).animate({bottom:(0+(8*i)+"%")},150);
		}else if(i>5 && i<=9){
			let num = i-5;
			obj.delay(90*i).css({left:tChipStackLeft[0],display:"flex"}).animate({bottom:(-16+(8*num)+"%")},150);
		}else{
			let num = i-9;
			obj.delay(90*i).css({left:tChipStackLeft[2],display:"flex"}).animate({bottom:(-16+(8*num)+"%")},150);
		}
	}
}
function collectCoin(){ //유저 코인 모으기
	
	for(var i=0; i<userbox.length;i++){
		userbox.eq(i).find(".chip").animate({bottom:chipBottom[i],left:chipLeft[i]},300,"linear",function(){
			userbox.eq(i).find(".chip").css({display:"none"});
			userbox.eq(i).find(".chipamount").css({visibility:"hidden"});//칩 아래 금액 말풍선 제거
		});
	}
}
function winCoinAni(man){
	let obj = $(".betchipwrap").find(".tcoin");
	obj.animate({bottom:wChipBottom[man],left:wChipLeft[man]},300,function(){
		$(this).remove();
	})
}
function showResult(){
	$(".card.my, .tablacard:eq(4)").addClass("effect");
	$(".gameresult.win").css("display","flex");
	winCoinAni(4);
	var box = userbox.filter(".my")
	box.find(".winnercrown").css({display:"flex"});
	box.find(".profilebox").addClass("effect");
	setTimeout(deleteGameSetting,5000);
}
function userHcard(man , c1, c2){ // 유저 핸디카드 애니    // userHcard(cSeat, obj.userList[i].card1, obj.userList[i].card2)
	man = Number(man);
	if(userbox.eq(man).hasClass("my")){
		userbox.eq(man).find(".card.my:eq(0)").animate({width:0},150,function(){
			userbox.eq(man).find(".card.my:eq(0)").attr("src","images/"+c1+".png").animate({width:myHcardWidth},150,function(){
				userbox.eq(man).find(".card.my:eq(1)").animate({width:0},150,function(){
					userbox.eq(man).find(".card.my:eq(1)").attr("src","images/"+c2+".png").animate({width:myHcardWidth},150);
				});
			});
		});
	}else{ // 그 외 유저 false = 0;
		$(".card").css({position:"relative"});
		$(".cardwrap.left").animate({left:"0%"},90); //게임 셋팅시 다시 50% 로 설정
		$(".cardwrap.right").animate({right:"0%"},90);
		$(".card").not(".my").animate({height:hcardHeight[1]},120);
		$(".cardwrap").not(".my").animate({width:hcardWidth[1]},120);
		setTimeout(function(){
			userbox.eq(man).find(".card:eq(1)").animate({right:"90%"}, 350, function(){
				userbox.eq(man).find('.card:eq(0)').attr("src","images/"+c1+".png");
				userbox.eq(man).find('.card:eq(1)').attr("src","images/"+c2+".png").animate({right:"0%"} , 120);
			});
		},120);
	}
}
function showdownAni(){
	const popupShowdown = $(".gameresult.showdown");
	const showdownLogo = popupShowdown.find(".img.showdown");

	popupShowdown.css("display","flex");
	showdownLogo.css({left:"100%"}).animate({left:"15%"},350);

	setTimeout(function(){
		popupShowdown.css("display","none");
	},1000)
}
	test()
	})
})

