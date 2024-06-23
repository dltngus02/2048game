let tableData = [
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""]
];
const randomLocation = () => {
    var x = Math.floor(Math.random() * 4);
    var y = Math.floor(Math.random() * 4);
    return [x, y];
  };

const existLocation = (tableData) => {  //중복확인하고 나온값을 테이블에 집어 넣기
    var [x,y] = randomLocation()
        while(tableData[y][x]){
            [x,y] = randomLocation();
        }
        tableData[y][x] = randomNumber();
        return [x,y];
    }

const randomNumber = () => {
    return (Math.floor(Math.random() * 8) ===1) ? 4 : 2
  };

// 왼쪽으로 움직일 수 있는지 확인하는 함수
const canMoveLeft = (tableData) => {
    for (let y = 0; y < 4; y++) {
      for (let x = 1; x < 4; x++) {
        if (tableData[y][x]){ //문자열은 참값
            if (tableData[y][x] === tableData[y][x - 1]){ //한칸 전에 합칠 수 있는 블럭 있는지 확인
                return true;
            };
            if(tableData[y].slice(0,x).includes("")){ //x값 이전에 빈 문자열이 있는지 확인
                return true;
            };
        };
    };
  };
  return false;
}

// 오른쪽으로 움직일 수 있는지 확인하는 함수
const canMoveRight = (tableData) => {
    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 3; x++) {
        if (tableData[y][x]){
            if(tableData[y][x] === tableData[y][x + 1]) {
                return true;
            };
            if(tableData[y].slice(x).includes("")){ //x값 이후에 빈 문자열이 있는지 확인
                return true;
            };
          };
        };
      };
      return false;
    };

//위쪽으로 움직일 수 있는지 확인하는 함수
const canMoveUp = (tableData) => {
    for (let y = 1; y < 4; y++) {
        for (let x = 0; x < 4; x++) {
            if (tableData[y][x]){
                if(tableData[y][x] === tableData[y - 1][x]){
                    return true;
                };
                if (tableData.slice(0, y).some(row => row[x] === "")) {
                    return true;
                }
            }
        }
    }
    return false;
};
const canMoveDown = (tableData) => {
    //아래쪽으로 움직일 수 있는지 체크하는 함수
  
    for (let y = 0; y < 3; y++) {
      for (let x = 0; x < 4; x++) {
        if (tableData[y][x]){
            if(tableData[y][x] === tableData[y + 1][x])
            {
                return true;
            }
            if (tableData.slice(y).some(row => row[x] === "")) {
                if (tableData[downy][x] === "") {
                    return true;
                }
            }
        }
      }
    }
    return false;
  };

const resetConfirm = (tableData) => {
    var confirmflag = confirm("Are you sure you want to start a new game? All progress will be lost.");
    if(confirmflag){
        resetGame(tableData)
  }
}
const resetGame = (tableData) => { //resetbutton 눌렀을 시 동작하는 함수
    for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 4; x++) {
            tableData[y][x] = "";
        }
    }
    existLocation(tableData)
    existLocation(tableData)
    renderTable(tableData)

}
const renderTable = (data) => {//gametable을 다시 그려주는 함수
    const table = document.getElementById('gameTable');
    table.innerHTML = '';
    data.forEach(rowData => {
        const tr = createTr(rowData);
        table.appendChild(tr);
    });
};

function createTd(cellData) { //칸을 그려주는 함수 
    const td = document.createElement('td');
    const div = document.createElement('div');
    div.className = 'grid-cell';
    div.textContent = cellData;
    td.appendChild(div);
    return td;
}


function createTr(rowData) {//쥴을 그려주는 함수 
    const tr = document.createElement('tr');
    tr.className = 'grid-row';
    rowData.forEach(cellData => {
        const td = createTd(cellData);
        tr.appendChild(td);
    });
    return tr;
}


function createTable(data) {
    const table = document.getElementById('gameTable');
    existLocation(tableData)
    existLocation(tableData) //보통 게임 시작할 때 두개씩 나오드라..
    data.forEach(rowData => {
        const tr = createTr(rowData);
        table.appendChild(tr);
    });
}


function getCookie(name) { 
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }



function setCookie(name, value, options = {}) {

    options = {
      path: '/', // 경로 지정
      ...options // 아규먼트로 옵션을 넘겨줬을경우 전개연산자로 추가 갱신
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString(); // 생 Date 객체라면 형식에 맞게 인코딩
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) { // 밸류가 없다면
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie; // 새로 갱신
  }



document.addEventListener('DOMContentLoaded', (event) => { //클릭 이벤트 발생시 동작
    document.getElementById('resetButton').addEventListener('click', function() {
        resetConfirm(tableData);
    });
});


createTable(tableData);