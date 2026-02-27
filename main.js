// 1. Data: Questions and Score Weights
const questions = [
    {
        question: "친구들과 여행을 갈 때 당신의 역할은?",
        options: [
            { text: "철저하게 계획을 짜고 앞장서서 리드한다", scores: { jng: 3, sup: 1 } },
            { text: "운전이나 짐 들기 등 묵묵히 궂은일을 도맡는다", scores: { top: 3, sup: 1 } },
            { text: "분위기를 띄우고 가장 신나게 즐긴다 (주인공 병)", scores: { adc: 3, mid: 1 } },
            { text: "친구들이 빠트린 건 없는지, 편안한지 세심하게 챙긴다", scores: { sup: 3, jng: 1 } },
            { text: "상황에 맞춰 유동적으로 필요한 역할을 메꾼다", scores: { mid: 3, jng: 1 } }
        ]
    },
    {
        question: "팀 프로젝트에서 문제가 발생했다! 당신의 대처는?",
        options: [
            { text: "문제의 원인을 빠르게 분석하고 즉각적인 해결책을 지시한다", scores: { mid: 3, jng: 2 } },
            { text: "내가 조금 더 고생하더라도 내 선에서 묵묵히 수습한다", scores: { top: 3 } },
            { text: "다른 팀원들에게 상황을 알리고 도움을 요청하여 함께 해결한다", scores: { sup: 2, adc: 1 } },
            { text: "일단 내가 맡은 파트라도 완벽하게 끝내서 피해를 줄인다", scores: { adc: 3, top: 1 } }
        ]
    },
    {
        question: "스포츠나 게임을 할 때 가장 짜릿함을 느끼는 순간은?",
        options: [
            { text: "1대1 상황에서 순수 실력으로 상대를 완벽하게 압도했을 때", scores: { top: 3, mid: 2 } },
            { text: "내 완벽한 큰 그림(판 짜기)으로 팀 전체가 승리했을 때", scores: { jng: 3, sup: 2 } },
            { text: "팀원들의 보호를 받으며 혼자서 적들을 다 쓸어버릴 때", scores: { adc: 4 } },
            { text: "위기에 빠진 팀원을 아슬아슬하게 구해냈을 때", scores: { sup: 4 } }
        ]
    },
    {
        question: "당신의 평소 성격과 가장 가까운 키워드는?",
        options: [
            { text: "묵묵함, 우직함, 독립적, 마이웨이", scores: { top: 3 } },
            { text: "날카로움, 주도적, 스피드, 지능적", scores: { mid: 2, jng: 2 } },
            { text: "화려함, 주인공, 집중력, 예민함", scores: { adc: 3 } },
            { text: "헌신, 이타적, 시야 넓음, 배려심", scores: { sup: 3 } }
        ]
    },
    {
        question: "누군가 당신을 화나게 했다면?",
        options: [
            { text: "그 자리에서 바로 맞붙어서 승부를 본다", scores: { top: 2, mid: 2, adc: 1 } },
            { text: "기회를 엿보다가 가장 치명적인 타이밍에 복수한다", scores: { jng: 3 } },
            { text: "주변 사람들을 내 편으로 만들어서 사회적으로 고립시킨다", scores: { sup: 2, jng: 1 } },
            { text: "무시하고 내 할 일에 집중해서 실력으로 증명한다", scores: { adc: 2, top: 1 } }
        ]
    }
];

// 2. Data: Champion DB based on Role
const championsDB = {
    top: {
        name: "가렌",
        role: "탑 (Top)",
        img: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Garen.png",
        reason: "당신은 묵묵히 제 할 일을 하는 든든한 국밥 같은 스타일이군요! 탑 라인의 지배자가 되어보세요.",
        playstyle: "조작이 매우 쉽고 단단합니다. 상대방을 귀찮게 하면서 끈질기게 살아남아 팀의 든든한 방패가 되어주세요.",
        streamers: "가렌 장인: 쓰리컨드 (유튜브 검색 추천)"
    },
    jng: {
        name: "리 신",
        role: "정글 (Jungle)",
        img: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Leesin.png",
        reason: "상황 판단력이 뛰어나고 판을 짜는 능력이 탁월하시네요! 협곡 전체를 지휘하는 정글러가 제격입니다.",
        playstyle: "초반부터 맵 곳곳을 누비며 팀원들을 돕고, 변수를 창출하세요. 당신의 판단이 게임의 승패를 가릅니다.",
        streamers: "리신 장인: Oner(오너), Canyon(캐니언)"
    },
    mid: {
        name: "아리",
        role: "미드 (Mid)",
        img: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Ahri.png",
        reason: "주도적이고 다재다능한 당신! 게임의 중심인 미드 라인에서 화려하게 활약할 스타일입니다.",
        playstyle: "기동성이 뛰어나고 공격과 수비 밸런스가 좋습니다. 상대방을 매혹시켜 끊어먹고 팀파이트를 이끄세요.",
        streamers: "아리 장인: Faker(페이커), Chovy(쵸비)"
    },
    adc: {
        name: "징크스",
        role: "원거리 딜러 (ADC)",
        img: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Jinx.png",
        reason: "내가 주인공이 되어야 직성이 풀리는 스타일! 팀의 핵심 화력을 담당하는 원딜이 딱입니다.",
        playstyle: "초반엔 약하지만, 팀원들의 보호를 받으며 성장하면 후반에 혼자서 게임을 파괴할 수 있습니다. 거리 조절이 핵심!",
        streamers: "징크스 장인: Gumayusi(구마유시), Ruler(룰러)"
    },
    sup: {
        name: "룰루",
        role: "서포터 (Support)",
        img: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Lulu.png",
        reason: "이타적이고 세심한 배려심을 가진 당신! 팀원들을 지키고 성장시키는 서포터 역할이 완벽합니다.",
        playstyle: "아군을 보호하는 보호막과 적을 방해하는 스킬로 무장했습니다. 우리 팀의 에이스(원딜)가 날뛸 수 있게 보좌해주세요.",
        streamers: "룰루 장인: Keria(케리아), BeryL(베릴)"
    }
};

const roleNames = {
    top: "탑",
    jng: "정글",
    mid: "미드",
    adc: "원딜",
    sup: "서포터"
};

// 3. State Management
let currentQuestionIndex = 0;
let scores = { top: 0, jng: 0, mid: 0, adc: 0, sup: 0 };

// 4. DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const loadingScreen = document.getElementById('loading-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const shareBtn = document.getElementById('share-btn');

const questionNumberEl = document.getElementById('question-number');
const questionTextEl = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressEl = document.getElementById('progress');

// 5. Event Listeners
startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', resetQuiz);
shareBtn.addEventListener('click', () => {
    alert("결과 공유 기능은 준비 중입니다! 스크린샷을 찍어 친구들에게 자랑해보세요.");
});

// 6. Functions
function showScreen(screenEl) {
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
        s.classList.add('hidden');
    });
    screenEl.classList.remove('hidden');
    // Allow display:none to apply before adding active for transition
    setTimeout(() => {
        screenEl.classList.add('active');
    }, 10);
}

function startQuiz() {
    currentQuestionIndex = 0;
    scores = { top: 0, jng: 0, mid: 0, adc: 0, sup: 0 };
    showScreen(quizScreen);
    renderQuestion();
}

function renderQuestion() {
    const q = questions[currentQuestionIndex];
    questionNumberEl.textContent = `Q${currentQuestionIndex + 1}.`;
    questionTextEl.textContent = q.question;
    
    // Update Progress
    const progressPercent = ((currentQuestionIndex) / questions.length) * 100;
    progressEl.style.width = `${progressPercent}%`;

    // Render Options
    optionsContainer.innerHTML = '';
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt.text;
        btn.onclick = () => handleOptionClick(opt.scores);
        optionsContainer.appendChild(btn);
    });
}

function handleOptionClick(optionScores) {
    // Add scores
    for (const [role, score] of Object.entries(optionScores)) {
        scores[role] += score;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        renderQuestion();
    } else {
        progressEl.style.width = `100%`;
        calculateAndShowResult();
    }
}

function calculateAndShowResult() {
    showScreen(loadingScreen);

    // Fake loading for dramatic effect
    setTimeout(() => {
        renderResults();
        showScreen(resultScreen);
    }, 2000);
}

function renderResults() {
    // 1. Calculate max score and percentages
    const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
    let bestRole = 'top';
    let maxScore = -1;

    const percentages = {};
    for (const role in scores) {
        const percent = totalScore > 0 ? Math.round((scores[role] / totalScore) * 100) : 0;
        percentages[role] = percent;
        
        if (scores[role] > maxScore) {
            maxScore = scores[role];
            bestRole = role;
        }
    }

    // Sort roles by score descending for the bars
    const sortedRoles = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);

    // 2. Render Role Bars
    const roleBarsContainer = document.getElementById('role-bars');
    roleBarsContainer.innerHTML = '';
    
    sortedRoles.forEach(role => {
        const wrapper = document.createElement('div');
        wrapper.className = 'role-bar-wrapper';
        
        const labelDiv = document.createElement('div');
        labelDiv.className = 'role-label';
        labelDiv.innerHTML = `<span>${roleNames[role]}</span><span>${percentages[role]}%</span>`;
        
        const bgDiv = document.createElement('div');
        bgDiv.className = 'role-progress-bg';
        
        const fillDiv = document.createElement('div');
        fillDiv.className = 'role-progress-fill';
        // Delay width setting for animation
        setTimeout(() => {
            fillDiv.style.width = `${percentages[role]}%`;
        }, 100);

        bgDiv.appendChild(fillDiv);
        wrapper.appendChild(labelDiv);
        wrapper.appendChild(bgDiv);
        roleBarsContainer.appendChild(wrapper);
    });

    // 3. Render Champion Data
    const champData = championsDB[bestRole];
    document.getElementById('champ-img').src = champData.img;
    document.getElementById('champ-role').textContent = champData.role;
    document.getElementById('champ-name').textContent = champData.name;
    document.getElementById('champ-reason').textContent = `"${champData.reason}"`;
    document.getElementById('champ-playstyle').textContent = champData.playstyle;
    document.getElementById('champ-streamers').textContent = champData.streamers;
}

function resetQuiz() {
    showScreen(welcomeScreen);
}
