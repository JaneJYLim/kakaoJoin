//한글자라도 쓰면 x표시 나타나게 하기 시작
function blockXBtn() {
    let numOfChar = 0;
    let xBtn = document.querySelectorAll(".xBtn");
    let selectInput = document.querySelectorAll(".selectInput");
    for (let i = 0; i < selectInput.length; i++) {
        selectInput[i].addEventListener("keyup", function(){
            if (this.value.length !== 0)  {
                xBtn[i].style.display="block";     
            }
            else if (this.value.length == 0)  {
                xBtn[i].style.display="none";     
            }
        })
    }
}
blockXBtn();
//한글자라도 쓰면 x표시 나타나게 하기 끝

//x 누르면 input value값 삭제 시작
function deleteContent() {
    let xBtn = document.querySelectorAll(".xBtn");
    let selectInput = document.querySelectorAll(".selectInput");
    for (let i = 0; i < xBtn.length; i++) {
        xBtn[i].addEventListener("click", function(){
            selectInput[i].value = "";
            xBtn[i].style.display="none";
        })
    } 
}
deleteContent();
//x 누르면 input value값 삭제 끝


//focus일 때, fieldset border-bottom 색 변경 끝
function ChangeFieldsetBorderColor() {
    let selectInput = document.querySelectorAll(".selectInput");
    let fieldSet = document.querySelectorAll(".selectFieldset");

    //while (i < 4) {
        for(let i = 0; i < selectInput.length; i++) {
            selectInput[i].addEventListener("focus", function(){
                fieldSet[i].style.borderBottom = "2px solid #666";
            })
            selectInput[i].addEventListener("blur", function(){
                fieldSet[i].style.borderBottom = "";
            })
        }
    //}
}
ChangeFieldsetBorderColor();

//focus일 때, fieldset border-bottom 색 변경 끝


//닉네임 글자수에 따른 CntNumber 변동 시작
numOfChar = 20;
document.querySelector("#numOfChar").innerHTML = numOfChar;

function fnLength() {
    let cntNumOfWords = document.querySelector("#putName").value;
    let length = cntNumOfWords.length;
    if (length > numOfChar) {
        cntNumOfWords = cntNumOfWords.substring(0, numOfChar);
        document.querySelector("#putName").value = cntNumOfWords;
        length = cntNumOfWords.length;
    }
    document.querySelector("#numOfWord").innerHTML = length;
}
document.querySelector("#putName").addEventListener("keyup", fnLength);
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

function fnDelMonthOpt() {
    var monthDelOpt = document.querySelector("#monthDelOpt");
    //console.log(monthDelOpt);
    if (monthDelOpt != null) {
        monthDelOpt.style.display = "none";
    }
}

month.addEventListener("click", fnDelMonthOpt);


function fnDelDateOpt() {
    var dateDelOpt = document.querySelector("#dateDelOpt");
    //console.log(dateDelOpt);
    if (dateDelOpt != null) {
        dateDelOpt.style.display = "none";
    }
}

day.addEventListener("click", fnDelDateOpt);

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

month.addEventListener("change", fnEndDate);

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
function fnReset() {
    var monthOptTag = `<option id="monthDelOpt">월</option>`;
    for (var i = 1; i <= 12; i++) {
        monthOptTag += `<option>${i}</option>`;
    }
    month.innerHTML = monthOptTag;
}

year.addEventListener("change", fnReset);
// 생년월일 옵션(select) 끝