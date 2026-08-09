// ── SVG icon builder ──────────────────────────────────────────────────────────
function svgUri(content) {
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56">' + content + '</svg>';
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

// ── Card data (inline SVG icons — works offline, no CDN needed) ───────────────
const CARDS = [
  { name: 'Python', img: svgUri(`<rect width="56" height="56" rx="8" fill="#3776AB"/>
    <path d="M28 8c-6 0-10 2.5-10 7v4h10v2H14c-5 0-8 3-8 9s3 9 8 9h3v-5c0-5 3-8 9-8h10c5 0 8-2.5 8-7V15c0-5-3-7-10-7h-6zm-2 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" fill="white" opacity=".9"/>
    <path d="M28 48c6 0 10-2.5 10-7v-4H28v-2h14c5 0 8-3 8-9s-3-9-8-9h-3v5c0 5-3 8-9 8H20c-5 0-8 2.5-8 7v7c0 5 3 7 10 7h6zm2-4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="#FFD343" opacity=".95"/>`) },
  { name: 'Java', img: svgUri(`<rect width="56" height="56" rx="8" fill="#E76F00"/>
    <text x="28" y="22" text-anchor="middle" font-family="serif" font-weight="900" font-size="11" fill="white">JAVA</text>
    <path d="M20 26c0 0 8-3 16 0c0 0-4 3-8 3s-8-3-8-3z" fill="white" opacity=".8"/>
    <path d="M22 32c0 0 7-2 13 0l-2 4H24z" fill="white" opacity=".7"/>
    <path d="M26 38h5l-1 4h-3z" fill="white" opacity=".9"/>
    <ellipse cx="28" cy="15" rx="6" ry="4" fill="none" stroke="white" stroke-width="1.5" opacity=".6"/>`) },
  { name: 'C++', img: svgUri(`<rect width="56" height="56" rx="8" fill="#00599C"/>
    <text x="14" y="36" font-family="Arial" font-weight="900" font-size="22" fill="white">C</text>
    <text x="30" y="28" font-family="Arial" font-weight="900" font-size="14" fill="white">+</text>
    <text x="41" y="28" font-family="Arial" font-weight="900" font-size="14" fill="white">+</text>`) },
  { name: 'C', img: svgUri(`<rect width="56" height="56" rx="8" fill="#5C6BC0"/>
    <text x="28" y="38" text-anchor="middle" font-family="Arial" font-weight="900" font-size="30" fill="white">C</text>`) },
  { name: 'JavaScript', img: svgUri(`<rect width="56" height="56" rx="8" fill="#F7DF1E"/>
    <text x="6" y="50" font-family="Arial" font-weight="900" font-size="11" fill="#323330">JS</text>
    <path d="M36 38c0 4 2 6 6 6s6-2 6-6V24h-5v14c0 1.5-.5 2-1.5 2s-1.5-.5-1.5-2z" fill="#323330"/>
    <path d="M22 38c0 4 2 6 6 6 3 0 5-1 6-3l-4-2c-.5 1-1 1.5-2 1.5S26 40 26 38V24h-4z" fill="#323330"/>`) },
  { name: 'TypeScript', img: svgUri(`<rect width="56" height="56" rx="8" fill="#3178C6"/>
    <text x="6" y="50" font-family="Arial" font-weight="900" font-size="11" fill="white">TS</text>
    <rect x="24" y="26" width="20" height="4" rx="2" fill="white" opacity=".9"/>
    <rect x="31" y="26" width="4" height="18" rx="2" fill="white" opacity=".9"/>`) },
  { name: 'React', img: svgUri(`<rect width="56" height="56" rx="8" fill="#20232A"/>
    <ellipse cx="28" cy="28" rx="5" ry="5" fill="#61DAFB"/>
    <ellipse cx="28" cy="28" rx="18" ry="7" fill="none" stroke="#61DAFB" stroke-width="2"/>
    <ellipse cx="28" cy="28" rx="18" ry="7" fill="none" stroke="#61DAFB" stroke-width="2" transform="rotate(60 28 28)"/>
    <ellipse cx="28" cy="28" rx="18" ry="7" fill="none" stroke="#61DAFB" stroke-width="2" transform="rotate(120 28 28)"/>`) },
  { name: 'Node.js', img: svgUri(`<rect width="56" height="56" rx="8" fill="#215732"/>
    <polygon points="28,10 44,20 44,36 28,46 12,36 12,20" fill="none" stroke="#8CC84B" stroke-width="2.5"/>
    <text x="28" y="32" text-anchor="middle" font-family="Arial" font-weight="900" font-size="9" fill="#8CC84B">NODE</text>`) },
  { name: 'HTML5', img: svgUri(`<rect width="56" height="56" rx="8" fill="#E44D26"/>
    <text x="28" y="18" text-anchor="middle" font-family="Arial" font-weight="900" font-size="10" fill="white">HTML</text>
    <polygon points="12,22 14,44 28,48 42,44 44,22" fill="none" stroke="white" stroke-width="2"/>
    <text x="28" y="38" text-anchor="middle" font-family="Arial" font-weight="900" font-size="10" fill="white">5</text>`) },
  { name: 'CSS3', img: svgUri(`<rect width="56" height="56" rx="8" fill="#1572B6"/>
    <text x="28" y="18" text-anchor="middle" font-family="Arial" font-weight="900" font-size="10" fill="white">CSS</text>
    <polygon points="12,22 14,44 28,48 42,44 44,22" fill="none" stroke="white" stroke-width="2"/>
    <text x="28" y="38" text-anchor="middle" font-family="Arial" font-weight="900" font-size="10" fill="white">3</text>`) },
  { name: 'Git', img: svgUri(`<rect width="56" height="56" rx="8" fill="#F05032"/>
    <rect x="25" y="8" width="4" height="40" rx="2" fill="white"/>
    <circle cx="27" cy="12" r="5" fill="white"/>
    <circle cx="27" cy="44" r="5" fill="white"/>
    <path d="M27 22 Q42 22 42 32 Q42 42 27 42" fill="none" stroke="white" stroke-width="3.5"/>
    <circle cx="42" cy="32" r="5" fill="white"/>`) },
  { name: 'Docker', img: svgUri(`<rect width="56" height="56" rx="8" fill="#0db7ed"/>
    <rect x="8"  y="26" width="8" height="7" rx="1" fill="white"/>
    <rect x="18" y="26" width="8" height="7" rx="1" fill="white"/>
    <rect x="28" y="26" width="8" height="7" rx="1" fill="white"/>
    <rect x="18" y="18" width="8" height="7" rx="1" fill="white"/>
    <rect x="28" y="18" width="8" height="7" rx="1" fill="white"/>
    <rect x="28" y="10" width="8" height="7" rx="1" fill="white"/>
    <path d="M8 34 Q28 42 48 34" fill="none" stroke="white" stroke-width="2"/>`) },
  { name: 'MySQL', img: svgUri(`<rect width="56" height="56" rx="8" fill="#00618A"/>
    <ellipse cx="28" cy="16" rx="16" ry="6" fill="#E48E00"/>
    <path d="M12 16 v8 q0 6 16 6 16 0 16-6 v-8" fill="#E48E00" opacity=".85"/>
    <path d="M12 24 v8 q0 6 16 6 16 0 16-6 v-8" fill="#E48E00" opacity=".7"/>
    <path d="M12 32 v8 q0 6 16 6 16 0 16-6 v-8" fill="#E48E00" opacity=".55"/>`) },
  { name: 'MongoDB', img: svgUri(`<rect width="56" height="56" rx="8" fill="#13AA52"/>
    <path d="M28 8 C28 8 40 20 40 32 C40 42 28 50 28 50 C28 50 16 42 16 32 C16 20 28 8 28 8z" fill="white"/>
    <path d="M28 50 L28 30" stroke="#13AA52" stroke-width="3"/>`) },
  { name: 'Linux', img: svgUri(`<rect width="56" height="56" rx="8" fill="#1A1A2E"/>
    <ellipse cx="28" cy="22" rx="12" ry="14" fill="#FFD700"/>
    <circle cx="24" cy="19" r="2" fill="#1A1A2E"/>
    <circle cx="32" cy="19" r="2" fill="#1A1A2E"/>
    <path d="M23 26 Q28 30 33 26" fill="none" stroke="#1A1A2E" stroke-width="1.5"/>
    <path d="M16 36 L20 28 M40 36 L36 28 M20 36 L36 36" stroke="#FFD700" stroke-width="2" fill="none"/>`) },
  { name: 'Rust', img: svgUri(`<rect width="56" height="56" rx="8" fill="#CE412B"/>
    <circle cx="28" cy="28" r="16" fill="none" stroke="white" stroke-width="2.5"/>
    <circle cx="28" cy="28" r="5" fill="white"/>
    <line x1="28" y1="12" x2="28" y2="18" stroke="white" stroke-width="3"/>
    <line x1="28" y1="38" x2="28" y2="44" stroke="white" stroke-width="3"/>
    <line x1="12" y1="28" x2="18" y2="28" stroke="white" stroke-width="3"/>
    <line x1="38" y1="28" x2="44" y2="28" stroke="white" stroke-width="3"/>`) },
  { name: 'Go', img: svgUri(`<rect width="56" height="56" rx="8" fill="#00ACD7"/>
    <text x="28" y="34" text-anchor="middle" font-family="Arial" font-weight="900" font-size="22" fill="white">Go</text>
    <circle cx="36" cy="23" r="2.5" fill="white"/>`) },
  { name: 'Kotlin', img: svgUri(`<rect width="56" height="56" rx="8" fill="#7F52FF"/>
    <polygon points="8,8 32,8 8,32" fill="white" opacity=".9"/>
    <polygon points="8,32 32,8 56,32 32,56" fill="white" opacity=".7"/>
    <polygon points="32,56 56,32 56,56" fill="white" opacity=".85"/>`) },
  { name: 'Swift', img: svgUri(`<rect width="56" height="56" rx="8" fill="#FA7343"/>
    <path d="M44 38 C44 38 46 28 34 18 C34 18 42 28 36 36 C36 36 30 28 18 24 C18 24 30 34 26 44 C26 44 22 38 16 36 C16 36 22 46 32 48 C38 50 46 46 44 38z" fill="white"/>`) },
  { name: 'PHP', img: svgUri(`<rect width="56" height="56" rx="8" fill="#777BB4"/>
    <ellipse cx="28" cy="28" rx="22" ry="12" fill="none" stroke="white" stroke-width="2"/>
    <text x="28" y="32" text-anchor="middle" font-family="Arial" font-weight="900" font-size="13" fill="white">php</text>`) }
];

// ── Card color palette ────────────────────────────────────────────────────────
const CARD_COLORS = {
  'Python':     '#3d6b9e',
  'Java':       '#e07b39',
  'C++':        '#4a7ebf',
  'C':          '#5c6bc0',
  'JavaScript': '#c9a227',
  'TypeScript': '#2d6db5',
  'React':      '#2b7a8e',
  'Node.js':    '#3a7d44',
  'HTML5':      '#c0522a',
  'CSS3':       '#2563a8',
  'Git':        '#b8391e',
  'Docker':     '#1a85b0',
  'MySQL':      '#1a6e8a',
  'MongoDB':    '#2e7d50',
  'Linux':      '#4a4a6a',
  'Rust':       '#a0402a',
  'Go':         '#2196a0',
  'Kotlin':     '#6b44c4',
  'Swift':      '#c4622a',
  'PHP':        '#6655a8'
};

function getCardColor(name) {
  return CARD_COLORS[name] || '#4a6080';
}

// ── DOM references ────────────────────────────────────────────────────────────
const gridEl        = document.getElementById('grid');
const timerEl       = document.getElementById('timer');
const movesEl       = document.getElementById('moves');
const overlay       = document.getElementById('overlay');
const progressFill  = document.getElementById('progressFill');
const progressLabel = document.getElementById('progressLabel');
const diffSel       = document.getElementById('difficulty');
const finalTimeEl   = document.getElementById('finalTime');
const finalMovesEl  = document.getElementById('finalMoves');
const ratingBadge   = document.getElementById('ratingBadge');

// ── Game state ────────────────────────────────────────────────────────────────
let firstCard  = null;
let secondCard = null;
let lockBoard  = false;
let moves      = 0;
let matches    = 0;
let totalPairs = 0;
let timerSec   = 0;
let interval   = null;

// ── Helpers ───────────────────────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getColumns(pairs) {
  if (pairs <= 6) return 4;
  if (pairs <= 8) return 4;
  return 6;
}

function getRating(m, pairs) {
  if (m <= pairs)           return '⭐⭐⭐ Perfect';
  if (m <= pairs * 1.5)     return '⭐⭐ Great';
  return '⭐ Good job';
}

function updateProgress() {
  const pct = totalPairs === 0 ? 0 : Math.round((matches / totalPairs) * 100);
  progressFill.style.width = pct + '%';
  progressLabel.textContent = matches + ' / ' + totalPairs;
}

// ── Start game ────────────────────────────────────────────────────────────────
function startGame() {
  gridEl.innerHTML = '';
  overlay.classList.remove('show');
  clearInterval(interval);

  firstCard  = null;
  secondCard = null;
  lockBoard  = false;
  moves      = 0;
  matches    = 0;
  timerSec   = 0;
  totalPairs = parseInt(diffSel.value, 10);

  timerEl.textContent = '0s';
  movesEl.textContent = '0';
  updateProgress();

  const cols = getColumns(totalPairs);
  gridEl.style.gridTemplateColumns = 'repeat(' + cols + ', 1fr)';

  const selected = shuffle(CARDS).slice(0, totalPairs);
  const deck     = shuffle([...selected, ...selected]);

  deck.forEach(function(item) {
    const card  = document.createElement('div');
    card.className    = 'card';
    card.dataset.name = item.name;

    const inner = document.createElement('div');
    inner.className = 'card-inner';

    // Hidden face
    const front = document.createElement('div');
    front.className = 'card-face card-front';
    const pid = 'p' + Math.random().toString(36).slice(2);
    front.innerHTML = `<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;position:absolute;inset:0;">
      <defs>
        <pattern id="${pid}" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
          <circle cx="6" cy="6" r="1.5" fill="rgba(180,165,148,0.45)"/>
        </pattern>
      </defs>
      <rect width="100" height="140" fill="#e8e0d5"/>
      <rect width="100" height="140" fill="url(#${pid})"/>
      <rect x="10" y="10" width="80" height="120" rx="8" fill="none" stroke="rgba(180,165,148,0.5)" stroke-width="1.5"/>
    </svg>`;

    // Revealed face
    const back = document.createElement('div');
    back.className = 'card-face card-back';
    back.style.setProperty('--card-color', getCardColor(item.name));

    const img = document.createElement('img');
    img.src     = item.img;
    img.alt     = item.name;
    img.loading = 'lazy';

    const lbl = document.createElement('div');
    lbl.className   = 'card-label';
    lbl.textContent = item.name;

    back.appendChild(img);
    back.appendChild(lbl);
    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);
    gridEl.appendChild(card);

    card.addEventListener('click', function() { flipCard(card); });
  });

  interval = setInterval(function() {
    timerSec++;
    timerEl.textContent = timerSec + 's';
  }, 1000);
}

// ── Flip card ─────────────────────────────────────────────────────────────────
function flipCard(card) {
  if (lockBoard)                          return;
  if (card === firstCard)                 return;
  if (card.classList.contains('matched')) return;

  card.classList.add('flipped');

  if (!firstCard) {
    firstCard = card;
    return;
  }

  secondCard = card;
  moves++;
  movesEl.textContent = moves;
  lockBoard = true;

  if (firstCard.dataset.name === secondCard.dataset.name) {
    // Match!
    firstCard.classList.add('matched');
    secondCard.classList.add('matched');
    firstCard.classList.remove('flipped');
    secondCard.classList.remove('flipped');
    matches++;
    updateProgress();
    resetTurn();
    if (matches === totalPairs) {
      setTimeout(endGame, 500);
    }
  } else {
    // No match
    var a = firstCard;
    var b = secondCard;
    resetTurn();
    setTimeout(function() {
      a.classList.add('shake');
      b.classList.add('shake');
      a.classList.remove('flipped');
      b.classList.remove('flipped');
      setTimeout(function() {
        a.classList.remove('shake');
        b.classList.remove('shake');
      }, 420);
    }, 750);
  }
}

function resetTurn() {
  firstCard  = null;
  secondCard = null;
  lockBoard  = false;
}

// ── End game ──────────────────────────────────────────────────────────────────
function endGame() {
  clearInterval(interval);
  finalTimeEl.textContent  = timerSec + 's';
  finalMovesEl.textContent = moves;
  ratingBadge.textContent  = getRating(moves, totalPairs);
  overlay.classList.add('show');
}

// ── Event listeners ───────────────────────────────────────────────────────────
document.getElementById('restartBtn').addEventListener('click', startGame);
document.getElementById('playAgainBtn').addEventListener('click', startGame);
diffSel.addEventListener('change', startGame);

// ── Init ──────────────────────────────────────────────────────────────────────
startGame();
