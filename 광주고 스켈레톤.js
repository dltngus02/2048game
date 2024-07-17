
const tableData = [
/* 빈칸 채우기 **/
];
let score = 0
let best = 0

/**  왼쪽으로 움직일 수 있는지 확인하는 함수 */ 
const canMoveLeft = (tableData) => {
    /* 빈칸 채우기 **/
  return false;
}

/**  오른쪽으로 움직일 수 있는지 확인하는 함수 */ 
const canMoveRight = (tableData) => {
    /* 빈칸 채우기 **/ 
      return false;
    };

/**  위쪽으로 움직일 수 있는지 확인하는 함수 */ 
const canMoveUp = (tableData) => {
    /* 빈칸 채우기 **/ 
    return false;
};
/**  아래쪽으로 움직일 수 있는지 확인하는 함수 */ 
const canMoveDown = (tableData) => {
    /* 빈칸 채우기 **/ 
    return false;
  };

/**  위치 뽑는 함수 */ 
const randomLocation = () => { 
    var x, y 
    /* 빈칸 채우기 **/
    return [x, y];
  };

/**  중복확인하고 나온값을 테이블에 집어 넣기 */ 
const existLocation = (tableData) => {  
    var [x,y] = randomLocation()
    /* 중복 확인 **/
        return [x,y];
    }

const addAnimationToNewCell = (location) => {
    const [x, y] = location;
    const table = document.getElementById('gameTable');
    const row = table.rows[y];
    if (row) {
        const cell = row.cells[x];
        if (cell) {
            const div = cell.firstChild;
            if (div) {
                div.classList.add('grow');
                setTimeout(() => {
                    div.classList.remove('grow');
                }, 1000); // 애니메이션 지속 시간 (예: 0.5초)
            }
        }
    }
};    

/**  0.125퍼의 확률로 4뽑는 함수  */ 
const randomNumber = () => { 
    /* 빈칸 채우기 **/
  };


const resetConfirm = (tableData) => { //리셋 확인창 띄워주는 함수 
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
    const firstLocation = existLocation(tableData)
    const secondLocation =  existLocation(tableData)
    renderTable(tableData)
    addAnimationToNewCell(firstLocation)
    addAnimationToNewCell(secondLocation)

}
const renderTable = (tableData) => {//gametable을 다시 그려주는 함수
    const table = document.getElementById('gameTable');
    table.innerHTML = '';
    tableData.forEach(rowData => {
        const tr = createTr(rowData);
        table.appendChild(tr);
    });
};

/** 칸을 그려주는 함수  */
const createTd = (cellData)  => { 
/* 빈칸 채우기 **/


    if(cellData>=8){
        div.style.color = 'white';
    }
    if (cellData === 0) {
        div.style.display = 'none';
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

/** 줄을 그려주는 함수  */
const createTr = (rowData) => {
    /* 빈칸 채우기 **/
    return tr;
}

/** 테이블을 그려주는 함수 */
const createTable = (data) => {
    /* 빈칸 채우기 **/
    addAnimationToNewCell(firstLocation);
    addAnimationToNewCell(secondLocation);
}


/** 왼쪽으로 당기는 함수 */
const clickLeft = (tableData) => { 
    if(canMoveLeft(tableData)){
        /* 빈칸 채우기 **/
        renderTable(tableData)
        addAnimationToNewCell(cellData)
    }
}

const clickRight = (tableData) => { //오른쪽으로 당기는 함수 
    if(canMoveRight(tableData)){
        /* 빈칸 채우기 **/
        renderTable(tableData)
        addAnimationToNewCell(cellData)
    }
}

const clickDown = (tableData) => { // 아래로 당기는 함수 
    if(canMoveDown(tableData)){
        /* 빈칸 채우기 **/
        renderTable(tableData)
        addAnimationToNewCell(cellData)
    }
}

const clickUp = (tableData) => { // 위로 당기는 함수
    changeCheck = [false,false,false,false]
    if(canMoveUp(tableData)){
        /* 빈칸 채우기 **/
        renderTable(tableData)
        addAnimationToNewCell(cellData)
    }
}

const bestCal = () => { // best 점수 업데이트  
    if(score>=best){
        best = score;
    }
    return best
}

const gameWin = () => {
    div.style.backgroundColor = 'rgba(237, 194, 46, 0.5)'
}

const gameOver = () => { //게임 오버 창 띄우기
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

const createGameOverMessage = (parentElement) => { //gameover 창 띄우기 
    const gameOverMessage = document.createElement('div');
    gameOverMessage.id = 'gameOverMessage';
    gameOverMessage.className = 'game-over-message';
    gameOverMessage.innerText = 'Game Over!';
    parentElement.appendChild(gameOverMessage);
}

const hideGameOverMessage = () => { // 게임오버 창 숨기기 
    const gameOverMessage = document.getElementById('gameOverMessage');
    if (gameOverMessage) {
        gameOverMessage.style.display = 'none'; // gameOverMessage 숨김
    }
}


const main = () => { // 이벤트 감지 
    document.addEventListener('DOMContentLoaded', (event) => { //클릭 이벤트 발생시 동작
        document.getElementById('resetButton').addEventListener('click', function() {
            resetConfirm(tableData);
            hideGameOverMessage(); 
        });
    });
    /** 키눌림 이벤트 감지 */
    window.addEventListener("keydown", (e) => {
        if (){ //조건문 작성 
            e.preventDefault();
            clickRight(tableData);
            document.getElementById('user_score').textContent = score
            bestCal()
            document.getElementById('user_best').textContent = best
            gameOver()
        }
        else if(){ //조건문 작성 
            e.preventDefault();
            clickLeft(tableData);
            document.getElementById('user_score').textContent = score
    
            bestCal()
            gameOver()
            document.getElementById('user_best').textContent = best
        }
        else if(){ //조건문 작성 
            e.preventDefault();
            clickDown(tableData);
            document.getElementById('user_score').textContent = score
    
            bestCal()
            gameOver()
            document.getElementById('user_best').textContent = best
        }
        else if(){ //조건문 작성 
            e.preventDefault();
            clickUp(tableData);
            document.getElementById('user_score').textContent = score
    
            bestCal()
            gameOver()
            document.getElementById('user_best').textContent = best
        }
        
      });
    
    
    
    createTable(tableData); 
}

main()