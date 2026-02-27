// 1. Data: Questions and Score Weights (Role + Playstyle Traits)
const questions = [
    {
        question: "새로운 모임에 나갔을 때 당신의 포지션은?",
        options: [
            { text: "분위기를 주도하며 사람들을 이끈다", scores: { jng: 2, mid: 2, aggressive: 2, team: 1 } },
            { text: "말하기보단 듣는 편, 묵묵히 내 할 일을 한다", scores: { top: 3, safe: 2, solo: 2 } },
            { text: "어색해하는 사람들을 챙겨주고 말을 걸어준다", scores: { sup: 3, safe: 1, team: 3 } },
            { text: "재밌는 이야기를 주도하며 주인공이 된다", scores: { adc: 3, aggressive: 2, solo: 1 } }
        ]
    },
    {
        question: "팀 프로젝트에서 심각한 문제가 터졌다! 당신의 대처는?",
        options: [
            { text: "원인을 빠르게 분석하고 냉철하게 해결책을 지시한다", scores: { mid: 3, jng: 2, safe: 1, solo: 1 } },
            { text: "내가 조금 더 밤을 새우더라도 내 선에서 수습한다", scores: { top: 3, safe: 2, solo: 2 } },
            { text: "다른 팀원들을 다독이며 함께 도우라고 요청한다", scores: { sup: 3, team: 3, safe: 1 } },
            { text: "일단 내 파트라도 완벽하게 끝내서 캐리할 준비를 한다", scores: { adc: 3, aggressive: 1, solo: 2 } }
        ]
    },
    {
        question: "스포츠나 게임을 할 때 가장 짜릿함을 느끼는 순간은?",
        options: [
            { text: "1대1 상황에서 순수 실력으로 상대를 완벽히 압도했을 때", scores: { top: 2, mid: 2, aggressive: 3, solo: 3 } },
            { text: "나의 완벽한 설계와 큰 그림으로 팀이 승리했을 때", scores: { jng: 3, sup: 1, safe: 2, team: 3 } },
            { text: "팀원들의 지원을 받으며 혼자서 적들을 다 쓸어버릴 때", scores: { adc: 4, aggressive: 3, team: 1 } },
            { text: "절체절명의 위기에 빠진 팀원을 극적으로 구해냈을 때", scores: { sup: 4, safe: 3, team: 3 } }
        ]
    },
    {
        question: "당신의 평소 업무/공부 스타일은?",
        options: [
            { text: "미리미리 철저하게 계획을 세워 안정적으로 처리한다", scores: { safe: 4, jng: 1, sup: 1 } },
            { text: "벼락치기의 스릴! 마감 직전에 엄청난 집중력을 발휘한다", scores: { aggressive: 4, adc: 2, mid: 1 } },
            { text: "독고다이. 남들과 엮이지 않고 혼자만의 페이스로 달린다", scores: { solo: 4, top: 2 } },
            { text: "스터디 그룹이나 팀원들과 정보를 교환하며 함께 시너지를 낸다", scores: { team: 4, sup: 2, jng: 1 } }
        ]
    },
    {
        question: "누군가 당신을 이유 없이 화나게 했다면?",
        options: [
            { text: "그 자리에서 바로 맞붙어서 박살 낸다", scores: { top: 2, aggressive: 4, solo: 1 } },
            { text: "기회를 엿보다가 가장 치명적인 타이밍에 약점을 찌른다", scores: { jng: 2, mid: 2, aggressive: 2, safe: 1 } },
            { text: "주변 사람들을 내 편으로 만들어서 사회적으로 고립시킨다", scores: { sup: 2, jng: 1, team: 3, safe: 1 } },
            { text: "무시하고 내 실력과 성과로 콧대를 꺾어버린다", scores: { adc: 2, top: 1, solo: 3, safe: 2 } }
        ]
    },
    {
        question: "여행을 갈 때 선호하는 숙소 스타일은?",
        options: [
            { text: "모든 것이 완비된 최고급 호캉스, 대접받는 기분!", scores: { adc: 3, safe: 2, team: 1 } },
            { text: "자연 속에서 혼자 조용히 힐링하는 캠핑이나 산장", scores: { top: 3, safe: 3, solo: 3 } },
            { text: "발길 닿는 대로, 현지인들과 부딪히는 액티비티 위주의 게스트하우스", scores: { jng: 3, aggressive: 3, solo: 1 } },
            { text: "모두가 편안하게 쉴 수 있도록 넓고 쾌적한 독채 펜션", scores: { sup: 3, safe: 2, team: 3 } }
        ]
    },
    {
        question: "좋아하는 영화나 드라마 장르는?",
        options: [
            { text: "주인공이 다 때려부수는 화려하고 통쾌한 액션/히어로물", scores: { aggressive: 3, solo: 2, top: 1, adc: 1 } },
            { text: "반전에 반전을 거듭하는 치밀한 두뇌싸움/스릴러", scores: { safe: 2, solo: 1, mid: 2, jng: 2 } },
            { text: "서로 돕고 의지하며 성장하는 따뜻한 힐링/가족물", scores: { safe: 3, team: 3, sup: 2 } },
            { text: "스펙타클한 전쟁이나 거대한 스케일의 서사시", scores: { aggressive: 2, team: 2, adc: 1, jng: 1 } }
        ]
    },
    {
        question: "친구들과 식당에 갔을 때 메뉴판을 보면?",
        options: [
            { text: "가장 먹고 싶은 것 하나를 단호하게 고른다", scores: { mid: 2, solo: 3, aggressive: 1 } },
            { text: "남들이 뭘 고르든 상관없이 '난 국밥' (항상 먹는 것)", scores: { top: 3, safe: 3, solo: 2 } },
            { text: "다른 사람들이 고르는 걸 보고 겹치지 않게 밸런스를 맞춘다", scores: { jng: 2, sup: 2, team: 3, safe: 2 } },
            { text: "가장 비싸고 화려한 시그니처 메뉴를 시켜서 사진부터 찍는다", scores: { adc: 3, aggressive: 2, solo: 1 } }
        ]
    },
    {
        question: "길을 가다가 예상치 못한 골목(지름길)을 발견했다면?",
        options: [
            { text: "내 감각을 믿어! 망설임 없이 새로운 길로 모험을 떠난다", scores: { jng: 3, aggressive: 3, solo: 1 } },
            { text: "스마트폰 지도를 켜서 정확히 어디로 이어지는지 분석한다", scores: { mid: 2, safe: 4, solo: 1 } },
            { text: "원래 알던 안전하고 확실한 큰길로 그냥 간다", scores: { top: 2, adc: 1, safe: 3, team: 1 } },
            { text: "일행에게 '저쪽으로 가볼래?'하고 의견을 물어본다", scores: { sup: 3, team: 3, safe: 1 } }
        ]
    },
    {
        question: "친구가 당신에게 진지한 고민 상담을 해올 때 당신은?",
        options: [
            { text: "문제의 핵심을 짚어주고 지극히 현실적인 해결책을 제시한다", scores: { mid: 3, solo: 2, aggressive: 1 } },
            { text: "묵묵히 이야기를 끝까지 다 들어준다 (리액션은 약함)", scores: { top: 3, safe: 2, solo: 1 } },
            { text: "내 일처럼 100% 공감해주며 같이 욕해주고 위로해준다", scores: { sup: 4, team: 3, safe: 1 } },
            { text: "기분 풀게 맛있는 거나 먹으러 가자며 데리고 나간다", scores: { jng: 2, adc: 2, aggressive: 1, team: 2 } }
        ]
    }
];

// 2. Data: Champion DB with Tags/Traits for detailed matching
// Tags used for matching: [isAggressive, isTeam]
// isAggressive: true (aggressive), false (safe)
// isTeam: true (team-focused), false (solo/independent)
const championsDB = {
    top: [
        {
            name: "다리우스", role: "탑 (Top)", isAggressive: true, isTeam: false,
            img: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Darius.png",
            reason: "당신은 상대방을 힘으로 찍어 누르는 무자비한 파이터 스타일이군요!",
            playstyle: "강력한 근접 전투력을 바탕으로 1대1 싸움에서 적을 압도하고 공포를 심어주세요.",
            streamers: "다리우스 장인: 스맵(Smeb), 아담(Adam)"
        },
        {
            name: "오른", role: "탑 (Top)", isAggressive: false, isTeam: true,
            img: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Ornn.png",
            reason: "묵묵히 팀의 방패가 되어주는 든든한 대장장이! 팀워크를 중시하는 당신에게 딱입니다.",
            playstyle: "단단한 방어력으로 적의 공격을 버티고, 아군의 아이템을 업그레이드해주며 한타(팀파이트)를 지배하세요.",
            streamers: "오른 장인: Letme(렛미), 기인(Kiin)"
        },
        {
            name: "가렌", role: "탑 (Top)", isAggressive: false, isTeam: false,
            img: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Garen.png",
            reason: "정직하고 우직하게 마이웨이를 걷는 기사! 기본기에 충실한 국밥 챔피언이 제격입니다.",
            playstyle: "단순하지만 강력합니다. 끈질긴 생명력으로 상대방을 귀찮게 하며 라인을 묵묵히 밀어붙이세요.",
            streamers: "가렌 장인: 쓰리컨드"
        },
        {
            name: "티모", role: "탑 (Top)", isAggressive: true, isTeam: false, // Teemo gets selected if aggressive and not team focused
            img: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Teemo.png",
            reason: "얄밉지만 매력적인 장난꾸러기! 상대를 끊임없이 괴롭히는 걸 즐기시는군요.",
            playstyle: "투명 상태로 숨어있다가 독침을 쏘고 도망치세요! 곳곳에 버섯(지뢰)을 심어 적의 혈압을 올리는 것이 핵심입니다.",
            streamers: "티모 장인: 항심"
        }
    ],
    jng: [
        {
            name: "리 신", role: "정글 (Jungle)", isAggressive: true, isTeam: true,
            img: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Leesin.png",
            reason: "화려한 피지컬로 전장을 지휘하는 무술가! 주도적으로 판을 짜는 능력이 탁월하시네요.",
            playstyle: "초반부터 맵 곳곳을 누비며 적재적소에 개입하여 팀원들을 돕고 변수를 창출하세요.",
            streamers: "리신 장인: Oner(오너), Canyon(캐니언)"
        },
        {
            name: "아무무", role: "정글 (Jungle)", isAggressive: false, isTeam: true,
            img: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Amumu.png",
            reason: "친구를 돕기 위해 위험 속으로 뛰어드는 슬픈 미라! 당신의 이타심이 빛을 발할 챔피언입니다.",
            playstyle: "초반엔 조용히 성장하다가, 팀이 싸울 때 적진 한가운데로 뛰어들어 넓은 범위의 적들을 꽁꽁 묶어버리세요.",
            streamers: "아무무 장인: (다양한 정글 유저들의 사랑받는 픽)"
        },
        {
            name: "마스터 이", role: "정글 (Jungle)", isAggressive: true, isTeam: false,
            img: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/MasterYi.png",
            reason: "혼자서 적들을 모두 베어버리는 암살자! 팀의 승리보다 '내가 다 잡는다'는 마인드의 소유자군요.",
            playstyle: "팀원들이 고통받든 말든 묵묵히 정글 몬스터를 먹으며 성장한 뒤, 후반에 번개처럼 나타나 적들을 쓸어 담으세요.",
            streamers: "마이 장인: Cowsep(카우셉)"
        }
    ],
    mid: [
        {
            name: "제드", role: "미드 (Mid)", isAggressive: true, isTeam: false,
            img: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Zed.png",
            reason: "어둠 속에서 적의 핵심을 단숨에 암살하는 닌자! 빠르고 날카로운 당신에게 어울립니다.",
            playstyle: "그림자를 활용해 화려하게 적을 속이고, 가장 강한 적을 순식간에 암살한 뒤 유유히 빠져나오세요.",
            streamers: "제드 장인: 율천고 최현우"
        },
        {
            name: "오리아나", role: "미드 (Mid)", isAggressive: false, isTeam: true,
            img: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Orianna.png",
            reason: "정교한 컨트롤과 설계로 거대한 파도를 만드는 태엽인형! 신중하고 뇌지컬이 뛰어난 스타일입니다.",
            playstyle: "구체를 섬세하게 조종하며 안전한 거리에서 적을 공격하고, 결정적인 순간에 구체를 폭발시켜 팀 파이트를 승리로 이끄세요.",
            streamers: "오리아나 장인: Faker(페이커), Rookie(루키)"
        },
        {
            name: "아리", role: "미드 (Mid)", isAggressive: true, isTeam: true,
            img: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Ahri.png",
            reason: "빠른 기동력으로 이리저리 뛰어다니며 적을 홀리는 구미호! 다재다능하고 팀파이트를 즐기시는군요.",
            playstyle: "날렵하게 이동하며 매혹(하트)을 날려 적 한 명을 바보로 만들고 끊어먹는 플레이에 최적화되어 있습니다.",
            streamers: "아리 장인: Chovy(쵸비)"
        }
    ],
    adc: [
        {
            name: "징크스", role: "원거리 딜러 (ADC)", isAggressive: true, isTeam: true,
            img: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Jinx.png",
            reason: "신나게 총을 쏘며 전장을 난장판으로 만드는 미치광이! 팀원들의 호위를 받으며 주인공이 되세요.",
            playstyle: "적을 한 명 처치하면 폭주하여 엄청나게 빨라집니다. 거리를 유지하며 쉴 새 없이 미사일과 총알을 퍼부으세요.",
            streamers: "징크스 장인: Gumayusi(구마유시)"
        },
        {
            name: "이즈리얼", role: "원거리 딜러 (ADC)", isAggressive: false, isTeam: false,
            img: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Ezreal.png",
            reason: "매우 안전한 거리에서 얄밉게 툭툭 치고 빠지는 탐험가! 생존을 최우선으로 하는 스타일입니다.",
            playstyle: "순간이동 기술을 활용해 절대 죽지 않으면서, 멀리서 포물선을 그리는 마법 화살로 적을 끊임없이 괴롭히세요.",
            streamers: "이즈리얼 장인: Ruler(룰러), Deft(데프트)"
        },
        {
            name: "베인", role: "원거리 딜러 (ADC)", isAggressive: true, isTeam: false,
            img: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Vayne.png",
            reason: "어둠 속에서 구르며 거인들을 사냥하는 피지컬 끝판왕! 극강의 컨트롤로 1대 다수를 이겨내는 짜릿함을 즐기시네요.",
            playstyle: "사거리가 짧아 초반엔 고통스럽지만, 버티고 성장하면 은신과 회피를 반복하며 적들을 무자비하게 학살할 수 있습니다.",
            streamers: "베인 장인: Uzi(우지)"
        }
    ],
    sup: [
        {
            name: "레오나", role: "서포터 (Support)", isAggressive: true, isTeam: true,
            img: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Leona.png",
            reason: "선봉에 서서 적을 모조리 기절시켜버리는 태양의 기사! 주도적이고 공격적인 팀 리더 스타일입니다.",
            playstyle: "망설임 없이 적진 한가운데로 검을 찔러 넣고 돌진하세요. 당신이 물면 팀원들이 알아서 처리해 줄 것입니다.",
            streamers: "레오나 장인: Keria(케리아), CoreJJ(코어장전)"
        },
        {
            name: "룰루", role: "서포터 (Support)", isAggressive: false, isTeam: true,
            img: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Lulu.png",
            reason: "아군을 지키고 거대하게 만들어버리는 요정! 남을 돕는 것에 진심인 헌신적인 천사군요.",
            playstyle: "항상 아군 에이스 옆에 붙어다니며 보호막을 주고, 적이 다가오면 귀여운 동물로 변이시켜 바보로 만드세요.",
            streamers: "룰루 장인: BeryL(베릴)"
        },
        {
            name: "파이크", role: "서포터 (Support)", isAggressive: true, isTeam: false,
            img: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Pyke.png",
            reason: "'서포터지만 킬은 내가 먹겠다!' 팀의 돈을 불려주며 적을 직접 암살하는 핏빛 살인귀.",
            playstyle: "은신하여 돌아다니다가 작살로 적을 끌어오고, X자 모양으로 적들을 처형하며 화려하게 킬을 쓸어 담으세요.",
            streamers: "파이크 장인: Davemon(데이브몬)"
        }
    ]
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
// Track primary roles and secondary traits
let scores = { top: 0, jng: 0, mid: 0, adc: 0, sup: 0, aggressive: 0, safe: 0, team: 0, solo: 0 };

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
    scores = { top: 0, jng: 0, mid: 0, adc: 0, sup: 0, aggressive: 0, safe: 0, team: 0, solo: 0 };
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
    for (const [key, score] of Object.entries(optionScores)) {
        if(scores[key] !== undefined) {
            scores[key] += score;
        }
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
    // 1. Calculate best Role
    const roleScores = {
        top: scores.top,
        jng: scores.jng,
        mid: scores.mid,
        adc: scores.adc,
        sup: scores.sup
    };
    
    const totalRoleScore = Object.values(roleScores).reduce((a, b) => a + b, 0);
    let bestRole = 'top';
    let maxRoleScore = -1;

    const percentages = {};
    for (const role in roleScores) {
        const percent = totalRoleScore > 0 ? Math.round((roleScores[role] / totalRoleScore) * 100) : 0;
        percentages[role] = percent;
        
        if (roleScores[role] > maxRoleScore) {
            maxRoleScore = roleScores[role];
            bestRole = role;
        }
    }

    // Sort roles by score descending for the bars
    const sortedRoles = Object.keys(roleScores).sort((a, b) => roleScores[b] - roleScores[a]);

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

    // 3. Select best Champion within the Best Role based on Secondary Traits
    const userIsAggressive = scores.aggressive >= scores.safe;
    const userIsTeam = scores.team >= scores.solo;

    // Generate Role Reason Text
    let traitText = "";
    if (userIsAggressive && userIsTeam) {
        traitText = "적극적으로 나서면서도 팀원들과 함께 시너지를 내는 것을 좋아하시는군요!";
    } else if (userIsAggressive && !userIsTeam) {
        traitText = "누구의 눈치도 보지 않고 자신의 실력으로 상황을 주도하는 과감한 독고다이 스타일이시네요!";
    } else if (!userIsAggressive && userIsTeam) {
        traitText = "안정적이고 신중하게 행동하며, 남을 배려하고 팀워크를 최우선으로 생각하는 든든한 조력자 스타일입니다!";
    } else {
        traitText = "위험을 감수하기보단 안전을 추구하며, 묵묵히 자신의 페이스를 유지하는 마이웨이 성향을 가지셨군요!";
    }

    const roleReasonEl = document.getElementById('role-reason-text');
    roleReasonEl.innerHTML = `${traitText}<br><br>이러한 당신의 성향을 분석했을 때, <strong>${roleNames[bestRole]}</strong> 포지션이 당신의 능력을 100% 발휘할 수 있는 최고의 자리입니다.`;

    const roleChampions = championsDB[bestRole];
    let bestChamp = roleChampions[0];
    let highestMatchScore = -999;

    roleChampions.forEach(champ => {
        let matchScore = 0;
        if (champ.isAggressive === userIsAggressive) matchScore += 1;
        if (champ.isTeam === userIsTeam) matchScore += 1;

        if (matchScore > highestMatchScore) {
            highestMatchScore = matchScore;
            bestChamp = champ;
        }
    });

    // 4. Render Champion Data
    document.getElementById('champ-img').src = bestChamp.img;
    document.getElementById('champ-role').textContent = bestChamp.role;
    document.getElementById('champ-name').textContent = bestChamp.name;
    document.getElementById('champ-reason').textContent = `"${bestChamp.reason}"`;
    document.getElementById('champ-playstyle').textContent = bestChamp.playstyle;
    document.getElementById('champ-streamers').textContent = bestChamp.streamers;
}

function resetQuiz() {
    showScreen(welcomeScreen);
}