
const tableData = [
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""]
];
let score = 0
let best = 0


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
const canMoveDown = (tableData) => {//아래쪽으로 움직일 수 있는지 체크하는 함수
    for (let y = 0; y < 3; y++) {
      for (let x = 0; x < 4; x++) {
        if (tableData[y][x]){
            if(tableData[y][x] === tableData[y + 1][x])
            {
                return true;
            }
            if (tableData.slice(y).some(row => row[x] === "")) {
                    return true;
            }
        }
      }
    }
    return false;
  };


const randomLocation = () => { //위치 뽑는 함수 
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

const randomNumber = () => { //0.125퍼의 확률로 4뽑는 함수 
    return (Math.floor(Math.random() * 8) ===1) ? 4 : 2
  };


const resetConfirm = (tableData) => {
    var confirmflag = confirm("Are you sure you want to start a new game? All progress will be lost.");
    if(confirmflag){
        score = 0
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
const renderTable = (tableData) => {//gametable을 다시 그려주는 함수
    const table = document.getElementById('gameTable');
    table.innerHTML = '';
    tableData.forEach(rowData => {
        const tr = createTr(rowData);
        table.appendChild(tr);
    });
};

const createTd = (cellData)  => { //칸을 그려주는 함수 
    const td = document.createElement('td');
    const div = document.createElement('div');
    div.className = 'grid-cell';
    div.textContent = cellData;
    if(cellData>=8){
        div.style.color = 'white';
    }

    if (cellData < 10) {
        div.style.fontSize = '55px'; // 예시: 길이가 1일 때
    } else if (cellData < 100) {
        div.style.fontSize = '52px'; // 예시: 길이가 2일 때
    } else if (cellData < 1000) {
        div.style.fontSize = '49px'; // 예시: 길이가 3일 때
    } else if (cellData < 10000) {
        div.style.fontSize = '46px'; // 예시: 길이가 4 이상일 때
    } else if(cellData < 100000){
        div.style.fontSize = '43px';
    }


    if (cellData === 2) {
        div.style.backgroundColor = '#eee4da';
    } else if (cellData === 4) {
        div.style.backgroundColor = '#eee1c9';
    } 
    else if(cellData === 8 ){
        div.style.backgroundColor = '#f3b27a';
    }
    else if(cellData === 16) {
        div.style.backgroundColor = '#f69664';
    }
    else if(cellData == 32) {
        div.style.backgroundColor = '#f77c5f';
    }
    else if(cellData == 64) {
        div.style.backgroundColor = '#f75f3b';

    }
    else if(cellData == 128) {
        div.style.backgroundColor = '#edd073';
        div.style.boxShadow = '0 0 30px 10px rgba(243, 215, 116, 0.2380952381), inset 0 0 0 1px rgba(255, 255, 255, 0.1428571429)';
    }
    else if(cellData ==256) {
        div.style.backgroundColor = '#edcc62';
        div.style.boxShadow = '0 0 30px 10px rgba(243, 215, 116, 0.2380952381), inset 0 0 0 1px rgba(255, 255, 255, 0.1428571429)';
    }
    else if(cellData == 512){
        div.style.backgroundColor = '#edc950';
        div.style.boxShadow = '0 0 30px 10px rgba(243, 215, 116, 0.3968253968), inset 0 0 0 1px rgba(255, 255, 255, 0.2380952381)';
    }
    else if(cellData == 1024) {
        div.style.backgroundColor = '#edc53f';
        div.style.boxShadow = '0 0 30px 10px rgba(243, 215, 116, 0.4761904762), inset 0 0 0 1px rgba(255, 255, 255, 0.2857142857)';
    }
    else if(cellData == 2048) {
        div.style.backgroundColor = 'edc22e';
        div.style.boxShadow = '0 0 30px 10px rgba(243, 215, 116, 0.5555555556), inset 0 0 0 1px rgba(255, 255, 255, 0.3333333333)';
    }

    td.appendChild(div);
    return td;
}


const createTr = (rowData) => {//쥴을 그려주는 함수 
    const tr = document.createElement('tr');
    tr.className = 'grid-row';
    rowData.forEach(cellData => {
        const td = createTd(cellData);
        tr.appendChild(td);
    });
    return tr;
}

const createTable = (data) => {
    const table = document.getElementById('gameTable');
    // existLocation(tableData)
    // existLocation(tableData) //보통 게임 시작할 때 두개씩 나오드라..
    data.forEach(rowData => {
        const tr = createTr(rowData);
        table.appendChild(tr);
    });
}



const clickLeft = (tableData) => {
    if(canMoveLeft(tableData)){
        for(let y = 0; y<4; y++){ //빈칸 있으면 당기는 용도
            let newRow = tableData[y].filter(value => value); 
            for (let x = 0; x < newRow.length - 1; x++) { // 타일 합치기 
                if (newRow[x] === newRow[x + 1]) {
                    score += (newRow[x] * 2)
                    newRow[x] *= 2;
                    newRow.splice(x + 1, 1);
                    newRow.push("")
                }
            }
            tableData[y] = newRow.concat(new Array(4 - newRow.length).fill("")); //빈칸만큼 빈 배열 넣어주고 tableDateY 값에 넣어주기
        }
        existLocation(tableData)
        renderTable(tableData)
    }
}

const clickRight = (tableData) => {
    if(canMoveRight(tableData)){
        for(let y = 0; y<4; y++){
            let newRow = tableData[y].filter(value => value); 
            for(let x=newRow.length-1; x > 0; x--){
                if (newRow[x] === newRow[x - 1]) {
                    score += (newRow[x]  * 2)
                    newRow[x] *= 2;
                    newRow.splice(x - 1, 1);
                    newRow.unshift("")
                }
            }
            tableData[y] = new Array(4 - newRow.length).fill("").concat(newRow); //빈칸만큼 빈 배열 넣어주고 tableDateY 값에 넣어주기
        }
        existLocation(tableData)
        renderTable(tableData)
    }
}

const clickDown = (tableData) => {
    if(canMoveDown(tableData)){
        for (let x = 0; x < 4; x++) {
            let column = [];
            for (let y = 0; y < 4; y++) {
                if (tableData[y][x]) {
                    column.push(tableData[y][x]);
                }
            }
            for (let i = column.length - 1; i > 0; i--) {
                if (column[i] === column[i - 1]) { 
                    score += (column[i] * 2)
                    column[i] *= 2; 
                    column.splice(i - 1, 1); 
                    column.unshift("")
                }
            }
            column = new Array(4 - column.length).fill("").concat(column);
            for (let y = 0; y < 4; y++) {
                tableData[y][x] = column[y]; 
            }
            
        }
        existLocation(tableData)
        renderTable(tableData)
    }
}

const clickUp = (tableData) => {
    changeCheck = [false,false,false,false]
    if(canMoveUp(tableData)){
        for(let x = 0; x<4; x++){
            let column = [];
            for (let y = 0; y < 4; y++) {
                if (tableData[y][x]) {
                    column.push(tableData[y][x]);
                }
            }
            for (let i = 0; i < column.length - 1; i++) {
                if (column[i] === column[i + 1]) { 
                    score += (column[i] * 2)
                    column[i] *= 2; 
                    column.splice(i + 1, 1); 
                    column.push("")
                }
            }    
            column = column.concat(new Array(4 - column.length).fill(""));
            for (let y = 0; y < 4; y++) {
                tableData[y][x] = column[y]; 
            }          
        }
        existLocation(tableData)
        renderTable(tableData)
    }
}

const bestCal = () => {
    if(score>=best){
        best = score;
    }
    return best
}

const gameWin = () => {
    div.style.backgroundColor = 'rgba(237, 194, 46, 0.5)'
}

const gameOver = () => {
    if (!canMoveUp(tableData) && !canMoveDown(tableData) && !canMoveRight(tableData) && !canMoveLeft(tableData)) {
        console.log("game over");
        const gameContainer = document.getElementById('gameContainer');
        const gameOverMessage = document.getElementById('gameOverMessage');

        gameContainer.style.backgroundColor = 'rgba(238, 228, 218, 0.73)'; // gameContainer 색상 변경

        if (!gameOverMessage) {
            createGameOverMessage(gameContainer); // gameOverMessage가 없으면 생성
        } else {
            gameOverMessage.style.display = 'block'; // gameOverMessage가 있으면 보이게 설정
        }
    } else {
        hideGameOverMessage(); // 게임이 진행 중이면 gameOverMessage를 숨김
    }
}

const createGameOverMessage = (parentElement) => {
    const gameOverMessage = document.createElement('div');
    gameOverMessage.id = 'gameOverMessage';
    gameOverMessage.className = 'game-over-message';
    gameOverMessage.innerText = 'Game Over!';
    parentElement.appendChild(gameOverMessage);
}

const hideGameOverMessage = () => {
    const gameOverMessage = document.getElementById('gameOverMessage');
    if (gameOverMessage) {
        gameOverMessage.style.display = 'none'; // gameOverMessage 숨김
    }
}

document.addEventListener('DOMContentLoaded', (event) => { //클릭 이벤트 발생시 동작
    document.getElementById('resetButton').addEventListener('click', function() {
        resetConfirm(tableData);
        hideGameOverMessage(); 
    });
});

window.addEventListener("keydown", (e) => {
    if (e.key==="ArrowRight" || e.key=="d"){
        e.preventDefault();
        clickRight(tableData);
        document.getElementById('user_score').textContent = score
        bestCal()
        document.getElementById('user_best').textContent = best
        gameOver()
    }
    else if(e.key=="ArrowLeft" || e.key=="a"){
        e.preventDefault();
        clickLeft(tableData);
        document.getElementById('user_score').textContent = score

        bestCal()
        gameOver()
        document.getElementById('user_best').textContent = best
    }
    else if(e.key=="ArrowDown" || e.key=="s"){
        e.preventDefault();
        clickDown(tableData);
        document.getElementById('user_score').textContent = score

        bestCal()
        gameOver()
        document.getElementById('user_best').textContent = best
    }
    else if(e.key=="ArrowUp" || e.key=="w"){
        e.preventDefault();
        clickUp(tableData);
        document.getElementById('user_score').textContent = score

        bestCal()
        gameOver()
        document.getElementById('user_best').textContent = best
    }
    
  });



createTable(tableData);
