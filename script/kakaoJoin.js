//한글자라도 쓰면 x표시 나타나게 하기 시작
blockXBtn();

function blockXBtn() {
    let numOfChar = 0;
    let xBtn = document.querySelectorAll(".xBtn");
    let selectInput = document.querySelectorAll(".selectInput");
    for (let i = 0; i < selectInput.length; i++) {
        selectInput[i].addEventListener("keyup", function() {
            if (this.value.length !== 0) {
                xBtn[i].style.display = "block";
            } else if (this.value.length == 0) {
                xBtn[i].style.display = "none";
            }
        })
    }
}
//한글자라도 쓰면 x표시 나타나게 하기 끝

//x 누르면 input value값 삭제 시작
deleteContent();

function deleteContent() {
    let xBtn = document.querySelectorAll(".xBtn");
    let selectInput = document.querySelectorAll(".selectInput");
    for (let i = 0; i < xBtn.length; i++) {
        xBtn[i].addEventListener("click", function() {
            selectInput[i].value = "";
            xBtn[i].style.display = "none";
        })
    }
}
//x 누르면 input value값 삭제 끝


//focus일 때, fieldset border-bottom 색 변경 끝
ChangeFieldsetBorderColor();

function ChangeFieldsetBorderColor() {
    let selectInput = document.querySelectorAll(".selectInput");
    let fieldSet = document.querySelectorAll(".selectFieldset");

    //while (i < 4) {
    for (let i = 0; i < selectInput.length; i++) {
        selectInput[i].addEventListener("focus", function() {
            fieldSet[i].style.borderBottom = "2px solid #666";
        })
        selectInput[i].addEventListener("blur", function() {
            fieldSet[i].style.borderBottom = "";
        })
    }
    //}
}
//focus일 때, fieldset border-bottom 색 변경 끝


//닉네임 글자수에 따른 CntNumber 변동 시작
document.querySelector("#uName").addEventListener("keyup", fnLength);

numOfChar = 20;
document.querySelector("#numOfChar").innerHTML = numOfChar;

function fnLength() {
    let cntNumOfWords = document.querySelector("#uName").value;
    let length = cntNumOfWords.length;
    if (length > numOfChar) {
        cntNumOfWords = cntNumOfWords.substring(0, numOfChar);
        document.querySelector("#uName").value = cntNumOfWords;
        length = cntNumOfWords.length;
    }
    document.querySelector("#numOfWord").innerHTML = length;
}
//닉네임 글자수에 따른 CntNumber 변동 끝


// 생년월일 옵션(select) 시작
//출생년도 표시 시작
let day = document.querySelector("#day");
let month = document.querySelector("#month");
let year = document.querySelector("#year");

fnBirthInit();

function fnBirthInit() {
    var now = new Date();
    var yearStart = now.getFullYear();
    var yearOptTag = "";
    for (var i = yearStart; i >= 1940; i--) {
        if (i == 1970) {
            yearOptTag += `<option selected>${i}</option>`;
        } else {
            yearOptTag += `<option>${i}</option>`;
        }
    }
    year.innerHTML = yearOptTag;
}
//출생년도 표시 끝
month.addEventListener("click", fnDelMonthOpt);

function fnDelMonthOpt() {
    var monthDelOpt = document.querySelector("#monthDelOpt");
    //console.log(monthDelOpt);
    if (monthDelOpt != null) {
        monthDelOpt.style.display = "none";
    }
}


day.addEventListener("click", fnDelDateOpt);

function fnDelDateOpt() {
    var dateDelOpt = document.querySelector("#dateDelOpt");
    //console.log(dateDelOpt);
    if (dateDelOpt != null) {
        dateDelOpt.style.display = "none";
    }
}

month.addEventListener("change", fnEndDate);

function fnEndDate() {

    var yearVal = document.querySelector("#year").value;
    yearVal = parseInt(yearVal);

    var febEndDate = 28; //평년일때

    if (yearVal % 4 == 0) {
        if (!(yearVal % 100 == 0 && yearVal % 400 !== 0)) {
            febEndDate = 29;
        } //console.log(febEndDate);
    }

    var monthVal = document.querySelector("#month").value;
    var endDateArray = [31, febEndDate, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var endDate = endDateArray[monthVal - 1];

    var dateOptTag = "";
    for (var i = 1; i <= endDate; i++) {
        dateOptTag += `<option>${i}</option>`;
    }
    day.innerHTML = dateOptTag;
}


//출생월 표시 시작
var monthOptTag = `<option id="monthDelOpt">월</option>`;
for (var i = 1; i <= 12; i++) {
    monthOptTag += `<option>${i}</option>`;
}
month.innerHTML = monthOptTag;
//출생월 표시 끝

//출생일 표시 시작
var dateOptTag = `<option id="dateDelOpt">일</option>`;
for (var i = 1; i <= 31; i++) {
    dateOptTag += `<option>${i}</option>`;
}
day.innerHTML = dateOptTag;
//월별 마지막 날짜 표시 끝

//년도 변경시 월, 일 초기화
year.addEventListener("change", fnReset);

function fnReset() {
    var monthOptTag = `<option id="monthDelOpt">월</option>`;
    for (var i = 1; i <= 12; i++) {
        monthOptTag += `<option>${i}</option>`;
    }
    month.innerHTML = monthOptTag;
}

// 생년월일 옵션(select) 끝


//유효성검사 시작
function submitFrm() {

    let errorMessage = document.querySelectorAll(".errorMessage");

    let uEmail = document.querySelector("#uEmail");
    let uEmail_val = uEmail.value;

    let uPw = document.querySelector("#uPw");
    let uPw_val = uPw.value;

    let uPw_Re = document.querySelector("#uPw_Re");
    let uPw_Re_val = uPw_Re.value;

    let uName = document.querySelector("#uName");
    let uName_val = uName.value;

    let uNum = document.querySelector("#uNum");
    let uNum_val = uNum.value;

    if (uEmail_val == "") {
        errorMessage[0].innerHTML = "카카오계정 이메일을 입력해주세요.";
        errorMessage[0].style.display = "block";
        uEmail.focus();
    } else if (uPw_val == "") {
        errorMessage[0].style.display = "none";
        errorMessage[1].innerHTML = "카카오계정 비밀번호를 입력해주세요.(영문자/숫자/특수문자)";
        errorMessage[1].style.display = "block";
        uPw.focus();
    } else if (uPw_Re_val == "") {
        errorMessage[1].style.display = "none";
        errorMessage[2].innerHTML = "카카오계정 비밀번호를 입력해주세요.(영문자/숫자/특수문자)";
        errorMessage[2].style.display = "block";
        uPw_Re.focus();
    } else if (uPw_val !== uPw_Re_val) {
        errorMessage[2].innerHTML = "입력한 비밀번호와 재입력한 비밀번호가 일치하지 않습니다. 다시 확인해 주세요.";
        uPw_Re.focus();
    } else if (uName_val == "") {
        errorMessage[2].style.display = "none";
        errorMessage[3].innerHTML = "닉네임이 등록되지 않았습니다. 닉네임을 입력해주세요.";
        errorMessage[3].style.display = "block";
        uName.focus();
    } else if (uNum_val == "") {
        errorMessage[3].style.display = "none";
        errorMessage[4].innerHTML = "전화번호가 등록되지 않았습니다. 전화번호를 입력해주세요.";
        errorMessage[4].style.display = "block";
        uNum.focus();
    } else {
        frm.action = "https://daum.net";
        frm.method = "get";
        frm.submit();
    }
}

//유효성검사 끝