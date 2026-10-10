/* ===== PokéAtlas — Application Logic ===== */
(function() {
'use strict';

/* ---------- I18N ---------- */
const I18N = {
  ko: {
    nav_home: '홈', nav_pokedex: '포켓몬스터 도감', nav_cards: '카드 아카이브',
    nav_market: '글로벌 카드 마켓', nav_academy: '포켓몬 아카데미',
    nav_assistant: 'AI 지식 어시스턴트', nav_collection: '내 컬렉션',
    home_title: 'PokéAtlas', home_subtitle: '글로벌 포켓몬 지식 & 카드 마켓 아카이브',
    home_search_ph: '포켓몬 이름 또는 도감 번호로 검색', home_search_btn: '검색',
    home_quick_nav: '빠른 이동', home_featured: '추천 포켓몬', home_recent: '최근 본 포켓몬',
    home_no_recent: '최근 본 포켓몬이 없습니다.', home_market_overview: '카드 마켓 개요',
    home_country: '국가', home_learning: '학습 추천', home_data_source: '데이터 출처 및 업데이트',
    home_ds_pokemon: '포켓몬 데이터:', home_ds_cards: '카드 데이터:',
    home_ds_market: '마켓 가격:', home_ds_market_unavailable: '연결된 실시간 마켓 데이터 소스 없음',
    home_last_update: '최종 업데이트:', market_no_data_home: '실제 마켓 가격 데이터가 아직 연결되지 않았습니다. 실시간 데이터가 연결되면 이 영역에 표시됩니다.',
    country_kr: '한국', country_us: '미국', country_jp: '일본',
    pokedex_title: '포켓몬스터 도감', pokedex_subtitle: 'PokéAPI 기반 실시간 포켓몬 데이터',
    pokedex_search_ph: '이름 또는 도감 번호', search_btn: '검색', load_more: '더 보기',
    filter_all_types: '모든 타입', filter_all_gens: '모든 세대', filter_all_sets: '모든 세트', filter_all_rarities: '모든 레어도',
    loading: '불러오는 중...', pokedex_no_results: '검색 결과가 없습니다.', cards_no_results: '검색 결과가 없습니다.',
    cards_title: '트레이딩 카드 아카이브', cards_subtitle: 'Pokémon TCG API 기반 카드 데이터',
    cards_search_ph: '카드 이름 검색',
    cards_api_error: '카드 데이터를 불러오지 못했습니다. 잠시 후 다시 시도해주세요.',
    pokedex_api_error: '포켓몬 데이터를 불러오지 못했습니다. 잠시 후 다시 시도해주세요.',
    market_title: '글로벌 카드 마켓 분석', market_subtitle: '한국 · 미국 · 일본 카드 시장 동향',
    market_country: '국가', market_currency: '통화', market_card: '카드 검색', market_card_ph: '카드 이름 입력',
    market_empty_title: '실제 마켓 데이터를 사용할 수 없습니다',
    market_empty_desc: '현재 무료로 사용 가능한 신뢰할 수 있는 카드 마켓 가격 히스토리 API가 연결되어 있지 않습니다. 실제 거래 가격, 거래량, 시장 평균 데이터를 임의로 생성하여 표시하지 않습니다. 호환 가능한 마켓 데이터 API가 연결되면 이 영역에 실제 차트와 거래 데이터가 표시됩니다.',
    market_info_title: '데이터 연결 안내',
    market_info_1: '국가별 선택 및 통화 변환 인터페이스가 준비되어 있습니다.',
    market_info_2: '7일 / 30일 / 90일 / 1년 / 전체 기간 선택 기능이 준비되어 있습니다.',
    market_info_3: '송부가 대 언도가, 카드 상태 및 등급 정보 표시 영역이 준비되어 있습니다.',
    market_info_4: '국가 비교 기능은 실제 비교 가능한 데이터가 있을 때 활성화됩니다.',
    range_7d: '7일', range_30d: '30일', range_90d: '90일', range_1y: '1년', range_all: '전체',
    market_attribution: '데이터 소스: 연결된 실시간 마켓 데이터 소스 없음 · ',
    market_last_update: '최종 업데이트: —',
    academy_title: '포켓몬 아카데미', academy_subtitle: '초보자부터 숙련자까지를 위한 학습 공간',
    academy_types_title: '포켓몬 타입과 타입 상성', academy_evolution_title: '진화와 진화 방법',
    academy_abilities_title: '특성과 기술', academy_stats_title: '기본 스탯 이해하기',
    academy_generations_title: '세대와 지역', academy_mechanics_title: '포켓몬 게임 메커니즘',
    academy_competitive_title: '대전 기초 개념', academy_tcg_rules_title: '포켓몬 TCG 규칙',
    academy_rarity_title: '카드 레어도 용어', academy_grading_title: '레어도와 등급의 차이',
    academy_progress_title: '학습 진행도', academy_take_quiz: '퀴즈 풀기',
    academy_explore_pokedex: '도감에서 보기',
    assistant_title: 'AI 지식 어시스턴트', assistant_subtitle: '로컬 지식 기반 FAQ & 가이드',
    assistant_disclaimer: '이 기능은 로컬 지식 기반 검색 시스템이며, 실시간 생성형 AI 모델이 연결된 것이 아닙니다. 향후 실제 AI 백엔드 연결을 위한 인터페이스가 준비되어 있습니다.',
    assistant_input_ph: '포켓몬 관련 질문을 입력하세요...', assistant_send: '질문하기',
    assistant_suggestions: '추천 질문',
    assistant_greeting: '안녕하세요! 포켓몬 지식 어시스턴트입니다. 타입 상성, 진화, 스탯, TCG 규칙 등에 대해 질문해주세요.',
    assistant_no_match: '죄송합니다. 해당 질문에 대한 정보를 찾을 수 없습니다. 다른 키워드로 시도해보세요.',
    collection_title: '내 컬렉션', collection_subtitle: '브라우저 로컬 저장 기반 컬렉션',
    collection_disclaimer: '컬렉션 데이터는 브라우저 localStorage에 저장되며, 기기 간 자동 동기화되지 않습니다. 브라우저 저장소를 삭제하면 데이터가 손실될 수 있습니다.',
    collection_pokemon_tab: '포켓몬', collection_cards_tab: '카드', collection_progress_tab: '학습 진행도',
    collection_empty_pokemon: '저장된 포켓몬이 없습니다. 도감에서 하트 아이콘을 눌러 추가하세요.',
    collection_empty_cards: '저장된 카드가 없습니다. 카드 아카이브에서 북마크 아이콘을 눌러 추가하세요.',
    collection_empty_progress: '아직 학습을 시작하지 않았습니다. 포켓몬 아카데미에서 첫 번째 레슨을 시작해보세요!',
    fav_added: '컬렉션에 추가되었습니다.', fav_removed: '컬렉션에서 제거되었습니다.',
    footer_brand: 'PokéAtlas — 비공식 팬 프로젝트',
    footer_disclaimer: 'Pokémon 및 관련 상표는 Nintendo·Game Freak·The Pokémon Company의 등록 상표입니다.',
    footer_data: '데이터: PokéAPI · Pokémon TCG API',
    detail_stats: '기본 스탯', detail_abilities: '특성', detail_moves: '기술 (일부)',
    detail_evolution: '진화 체인', detail_types: '타입', detail_height: '키',
    detail_weight: '무게', detail_gen: '세대',
    detail_no_evolution: '이 포켓몬은 진화하지 않습니다.',
    detail_fav_add: '컬렉션에 추가', detail_fav_remove: '컬렉션에서 제거',
    card_detail_name: '카드 이름', card_detail_number: '카드 번호', card_detail_set: '세트',
    card_detail_rarity: '레어도', card_detail_types: '타입', card_detail_hp: 'HP',
    card_detail_artist: '일러스트', card_detail_supertype: '분류', card_detail_subtype: '서브타입',
    card_detail_set_series: '시리즈', card_detail_set_count: '세트 카드 수', card_detail_release: '발매일',
    card_no_image: '이미지 없음',
    back: '뒤로', close: '닫기',
  },
  en: {
    nav_home: 'Home', nav_pokedex: 'Pokédex', nav_cards: 'Card Archive',
    nav_market: 'Global Card Market', nav_academy: 'Pokémon Academy',
    nav_assistant: 'AI Knowledge Assistant', nav_collection: 'My Collection',
    home_title: 'PokéAtlas', home_subtitle: 'Global Pokémon Knowledge & Card Market Archive',
    home_search_ph: 'Search by Pokémon name or Pokédex number', home_search_btn: 'Search',
    home_quick_nav: 'Quick Navigation', home_featured: 'Featured Pokémon', home_recent: 'Recently Viewed',
    home_no_recent: 'No recently viewed Pokémon.', home_market_overview: 'Card Market Overview',
    home_country: 'Country', home_learning: 'Learning Recommendations', home_data_source: 'Data Sources & Updates',
    home_ds_pokemon: 'Pokémon Data:', home_ds_cards: 'Card Data:',
    home_ds_market: 'Market Prices:', home_ds_market_unavailable: 'No real-time market data source connected',
    home_last_update: 'Last Updated:', market_no_data_home: 'Real market price data is not yet connected. When real-time data is available, it will appear here.',
    country_kr: 'South Korea', country_us: 'United States', country_jp: 'Japan',
    pokedex_title: 'Pokédex', pokedex_subtitle: 'Real-time Pokémon data powered by PokéAPI',
    pokedex_search_ph: 'Name or Pokédex number', search_btn: 'Search', load_more: 'Load More',
    filter_all_types: 'All Types', filter_all_gens: 'All Generations', filter_all_sets: 'All Sets', filter_all_rarities: 'All Rarities',
    loading: 'Loading...', pokedex_no_results: 'No results found.', cards_no_results: 'No results found.',
    cards_title: 'Trading Card Archive', cards_subtitle: 'Card data powered by Pokémon TCG API',
    cards_search_ph: 'Search card name',
    cards_api_error: 'Failed to load card data. Please try again later.',
    pokedex_api_error: 'Failed to load Pokémon data. Please try again later.',
    market_title: 'Global Card Market Analysis', market_subtitle: 'South Korea · United States · Japan card market trends',
    market_country: 'Country', market_currency: 'Currency', market_card: 'Card Search', market_card_ph: 'Enter card name',
    market_empty_title: 'No Real Market Data Available',
    market_empty_desc: 'No reliable free card market price history API is currently connected. We do not fabricate transaction prices, volumes, or market averages. When a compatible market data API is connected, real charts and trading data will appear here.',
    market_info_title: 'Data Connection Info',
    market_info_1: 'Country selection and currency conversion interface is ready.',
    market_info_2: '7-day / 30-day / 90-day / 1-year / all-time range selectors are ready.',
    market_info_3: 'Sold vs listing price, card condition, and grading display areas are ready.',
    market_info_4: 'Country comparison will activate when comparable real data exists.',
    range_7d: '7D', range_30d: '30D', range_90d: '90D', range_1y: '1Y', range_all: 'All',
    market_attribution: 'Data Source: No real-time market data source connected · ',
    market_last_update: 'Last Updated: —',
    academy_title: 'Pokémon Academy', academy_subtitle: 'A learning space for beginners and experts alike',
    academy_types_title: 'Pokémon Types & Type Effectiveness', academy_evolution_title: 'Evolution & Evolution Methods',
    academy_abilities_title: 'Abilities & Moves', academy_stats_title: 'Understanding Base Stats',
    academy_generations_title: 'Generations & Regions', academy_mechanics_title: 'Pokémon Game Mechanics',
    academy_competitive_title: 'Competitive Battle Basics', academy_tcg_rules_title: 'Pokémon TCG Rules',
    academy_rarity_title: 'Card Rarity Terminology', academy_grading_title: 'Rarity vs Grading Differences',
    academy_progress_title: 'Learning Progress', academy_take_quiz: 'Take Quiz',
    academy_explore_pokedex: 'Explore in Pokédex',
    assistant_title: 'AI Knowledge Assistant', assistant_subtitle: 'Local knowledge-based FAQ & guide',
    assistant_disclaimer: 'This is a local knowledge-based search system, not a live generative AI model. An interface for connecting a real AI backend is prepared for future phases.',
    assistant_input_ph: 'Ask a Pokémon question...', assistant_send: 'Ask',
    assistant_suggestions: 'Suggested Questions',
    assistant_greeting: 'Hello! I am the Pokémon Knowledge Assistant. Ask me about type matchups, evolution, stats, TCG rules, and more.',
    assistant_no_match: 'Sorry, I could not find information on that question. Try different keywords.',
    collection_title: 'My Collection', collection_subtitle: 'Browser-local storage collection',
    collection_disclaimer: 'Collection data is stored in browser localStorage and does not sync across devices. Data may be lost if browser storage is cleared.',
    collection_pokemon_tab: 'Pokémon', collection_cards_tab: 'Cards', collection_progress_tab: 'Learning Progress',
    collection_empty_pokemon: 'No saved Pokémon. Tap the heart icon in the Pokédex to add.',
    collection_empty_cards: 'No saved cards. Tap the bookmark icon in the Card Archive to add.',
    collection_empty_progress: 'You have not started learning yet. Begin your first lesson in Pokémon Academy!',
    fav_added: 'Added to collection.', fav_removed: 'Removed from collection.',
    footer_brand: 'PokéAtlas — Unofficial fan project',
    footer_disclaimer: 'Pokémon and related trademarks are registered by Nintendo·Game Freak·The Pokémon Company.',
    footer_data: 'Data: PokéAPI · Pokémon TCG API',
    detail_stats: 'Base Stats', detail_abilities: 'Abilities', detail_moves: 'Moves (sample)',
    detail_evolution: 'Evolution Chain', detail_types: 'Types', detail_height: 'Height',
    detail_weight: 'Weight', detail_gen: 'Generation',
    detail_no_evolution: 'This Pokémon does not evolve.',
    detail_fav_add: 'Add to Collection', detail_fav_remove: 'Remove from Collection',
    card_detail_name: 'Card Name', card_detail_number: 'Card Number', card_detail_set: 'Set',
    card_detail_rarity: 'Rarity', card_detail_types: 'Types', card_detail_hp: 'HP',
    card_detail_artist: 'Artist', card_detail_supertype: 'Supertype', card_detail_subtype: 'Subtype',
    card_detail_set_series: 'Series', card_detail_set_count: 'Set Card Count', card_detail_release: 'Release Date',
    card_no_image: 'No image',
    back: 'Back', close: 'Close',
  }
};

let currentLang = localStorage.getItem('pokeatlas_lang') || 'ko';
function t(key) { return (I18N[currentLang] && I18N[currentLang][key]) || (I18N.en[key]) || key; }

/* ---------- STORAGE HELPERS ---------- */
const STORE = {
  get: function(key, fallback) {
    try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
    catch(e) { return fallback; }
  },
  set: function(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch(e) {}
  }
};

/* ---------- POKEMON SPECIES NAME CACHE ---------- */
const speciesNameCache = {};

/* ---------- TYPE COLORS ---------- */
const TYPE_COLORS = {
  normal:'#A8A878', fire:'#F08030', water:'#6890F0', electric:'#F8D030', grass:'#78C850',
  ice:'#98D8D8', fighting:'#C03028', poison:'#A040A0', ground:'#E0C068', flying:'#A890F0',
  psychic:'#F85888', bug:'#A8B820', rock:'#B8A038', ghost:'#705898', dragon:'#7038F8',
  dark:'#705848', steel:'#B8B8D0', fairy:'#EE99AC'
};

/* ---------- API CACHE ---------- */
const apiCache = {};
function cachedFetch(url) {
  if (apiCache[url]) return Promise.resolve(apiCache[url]);
  return fetch(url).then(function(r) {
    if (!r.ok) throw new Error('HTTP ' + r.status);
    return r.json();
  }).then(function(data) {
    apiCache[url] = data;
    return data;
  });
}

/* ---------- POKEMON KOREAN NAME MAP (common Gen 1-9) ---------- */
/* We fetch species data for Korean names on-demand; this is a small fallback for search */
const KR_NAME_FALLBACK = {
  '이상해씨':1,'이상해풀':2,'이상해꽃':3,'꼬부기':4,'어니부기':5,'거북왕':6,
  '피카츄':25,'라이츄':26,'파이리':4,'리자드':5,'리자몽':6,
  '블바키':1,'꼬북이':4,'피츄':172
};

/* ---------- NAVIGATION ---------- */
function navigateTo(page) {
  document.querySelectorAll('.page').forEach(function(p) { p.classList.remove('active'); });
  var target = document.getElementById('page-' + page);
  if (target) target.classList.add('active');
  document.querySelectorAll('.nav-link').forEach(function(l) {
    l.classList.toggle('active', l.dataset.nav === page);
  });
  document.getElementById('navMenu').classList.remove('open');
  window.scrollTo(0, 0);
  if (page === 'pokedex' && !pokedexState.loaded) loadPokedexPage();
  if (page === 'cards' && !cardsState.loaded) loadCardsPage();
  if (page === 'academy') renderAcademyLesson();
  if (page === 'assistant') initAssistant();
  if (page === 'collection') renderCollection();
  if (page === 'home') { renderFeatured(); renderRecent(); }
}

/* ---------- LANGUAGE ---------- */
function setLang(lang) {
  currentLang = lang;
  STORE.set('pokeatlas_lang', lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.dataset.i18n;
    if (I18N[lang][key]) el.textContent = I18N[lang][key];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(function(el) {
    var key = el.dataset.i18nPh;
    if (I18N[lang][key]) el.placeholder = I18N[lang][key];
  });
  document.querySelectorAll('.lang-btn').forEach(function(b) {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  // Reset dynamic content flags so re-renders use the new language
  featuredLoaded = false;
  assistantInitialized = false;
  if (document.getElementById('page-academy').classList.contains('active')) renderAcademyLesson();
  if (document.getElementById('page-collection').classList.contains('active')) renderCollection();
  if (document.getElementById('page-assistant').classList.contains('active')) initAssistant();
  if (document.getElementById('page-home').classList.contains('active')) { renderFeatured(); renderRecent(); }
}

/* ---------- TOAST ---------- */
function toast(msg, type) {
  var container = document.getElementById('toastContainer');
  var el = document.createElement('div');
  el.className = 'toast' + (type ? ' ' + type : '');
  el.textContent = msg;
  container.appendChild(el);
  setTimeout(function() { el.remove(); }, 2800);
}

/* ---------- HOME: FEATURED POKEMON ---------- */
var featuredLoaded = false;
function renderFeatured() {
  if (featuredLoaded && document.getElementById('featuredGrid').children.length > 0) return;
  var grid = document.getElementById('featuredGrid');
  if (!grid) return;
  grid.innerHTML = '<div class="loading-text">' + t('loading') + '</div>';
  var featuredIds = [25, 6, 150, 94, 1, 130, 143, 448, 384, 658];
  featuredLoaded = true;
  Promise.all(featuredIds.map(function(id) {
    return cachedFetch('https://pokeapi.co/api/v2/pokemon/' + id).then(function(d) {
      return { id: d.id, name: d.name, sprite: d.sprites.front_default || d.sprites.other['official-artwork'].front_default, types: d.types };
    }).catch(function() { return null; });
  })).then(function(pokemons) {
    grid.innerHTML = '';
    pokemons.filter(Boolean).forEach(function(p) {
      var card = document.createElement('div');
      card.className = 'pokemon-mini-card';
      card.innerHTML = '<img src="' + p.sprite + '" alt="' + p.name + '" loading="lazy"><div class="pm-name">' + capitalize(p.name) + '</div><div class="pm-id">#' + String(p.id).padStart(3, '0') + '</div>';
      card.addEventListener('click', function() { openPokemonDetail(p.id); });
      grid.appendChild(card);
    });
  }).catch(function() {
    grid.innerHTML = '<div class="error-text">' + t('pokedex_api_error') + '</div>';
    featuredLoaded = false;
  });
}

/* ---------- HOME: RECENTLY VIEWED ---------- */
function renderRecent() {
  var grid = document.getElementById('recentGrid');
  if (!grid) return;
  var recent = STORE.get('pokeatlas_recent', []);
  if (recent.length === 0) {
    grid.innerHTML = '<div class="empty-text">' + t('home_no_recent') + '</div>';
    return;
  }
  grid.innerHTML = '';
  recent.slice(0, 6).forEach(function(item) {
    var card = document.createElement('div');
    card.className = 'pokemon-mini-card';
    card.innerHTML = '<img src="' + item.sprite + '" alt="' + item.name + '"><div class="pm-name">' + capitalize(item.name) + '</div><div class="pm-id">#' + String(item.id).padStart(3, '0') + '</div>';
    card.addEventListener('click', function() { openPokemonDetail(item.id); });
    grid.appendChild(card);
  });
}

function addToRecent(pokemon) {
  var recent = STORE.get('pokeatlas_recent', []);
  recent = recent.filter(function(r) { return r.id !== pokemon.id; });
  recent.unshift(pokemon);
  recent = recent.slice(0, 12);
  STORE.set('pokeatlas_recent', recent);
}

/* ---------- POKEDEX ---------- */
var pokedexState = {
  loaded: false, offset: 0, limit: 24, allPokemon: [], filtered: [], typeNames: []
};

function loadPokedexPage() {
  pokedexState.loaded = true;
  loadTypeFilterOptions();
  loadPokedexList();
}

function loadTypeFilterOptions() {
  cachedFetch('https://pokeapi.co/api/v2/type').then(function(data) {
    var select = document.getElementById('typeFilter');
    data.results.forEach(function(type) {
      if (type.name !== 'unknown' && type.name !== 'shadow') {
        var opt = document.createElement('option');
        opt.value = type.name;
        opt.textContent = capitalize(type.name);
        select.appendChild(opt);
      }
    });
  }).catch(function() {});
}

function loadPokedexList() {
  var grid = document.getElementById('pokedexGrid');
  var loading = document.getElementById('pokedexLoading');
  var empty = document.getElementById('pokedexEmpty');
  var error = document.getElementById('pokedexError');
  var loadMoreBtn = document.getElementById('loadMoreBtn');

  loading.style.display = 'block';
  error.style.display = 'none';
  empty.style.display = 'none';

  var url = 'https://pokeapi.co/api/v2/pokemon?limit=' + pokedexState.limit + '&offset=' + pokedexState.offset;
  fetch(url).then(function(r) { if (!r.ok) throw new Error('HTTP'); return r.json(); }).then(function(data) {
    loading.style.display = 'none';
    pokedexState.allPokemon = pokedexState.allPokemon.concat(data.results);
    data.results.forEach(function(p) {
      var id = extractIdFromUrl(p.url);
      cachedFetch('https://pokeapi.co/api/v2/pokemon/' + id).then(function(d) {
        renderPokemonCard(d, grid);
      }).catch(function() {});
    });
    loadMoreBtn.style.display = data.next ? 'block' : 'none';
  }).catch(function() {
    loading.style.display = 'none';
    error.style.display = 'block';
    error.textContent = t('pokedex_api_error');
  });
}

function extractIdFromUrl(url) {
  var parts = url.replace(/\/$/, '').split('/');
  return parseInt(parts[parts.length - 1], 10);
}

function renderPokemonCard(d, grid) {
  if (document.getElementById('pokemon-card-' + d.id)) return;
  var card = document.createElement('div');
  card.className = 'pokemon-card';
  card.id = 'pokemon-card-' + d.id;

  var sprite = d.sprites.other['official-artwork'].front_default || d.sprites.front_default;
  var typesHtml = d.types.map(function(tp) {
    return '<span class="type-badge type-' + tp.type.name + '">' + capitalize(tp.type.name) + '</span>';
  }).join('');

  var favList = STORE.get('pokeatlas_favs', []);
  var isFav = favList.some(function(f) { return f.id === d.id; });

  card.innerHTML =
    '<button class="fav-btn' + (isFav ? ' favorited' : '') + '" data-id="' + d.id + '">' + (isFav ? '♥' : '♡') + '</button>' +
    '<img src="' + sprite + '" alt="' + d.name + '" loading="lazy">' +
    '<div class="pc-name">' + capitalize(d.name) + '</div>' +
    '<div class="pc-id">#' + String(d.id).padStart(3, '0') + '</div>' +
    '<div class="type-badges">' + typesHtml + '</div>';

  card.addEventListener('click', function(e) {
    if (e.target.classList.contains('fav-btn')) {
      e.stopPropagation();
      toggleFavPokemon(d, e.target);
    } else {
      openPokemonDetail(d.id);
    }
  });
  grid.appendChild(card);
}

function toggleFavPokemon(d, btn) {
  var favs = STORE.get('pokeatlas_favs', []);
  var idx = favs.findIndex(function(f) { return f.id === d.id; });
  if (idx >= 0) {
    favs.splice(idx, 1);
    btn.classList.remove('favorited');
    btn.textContent = '♡';
    toast(t('fav_removed'), 'success');
  } else {
    var sprite = d.sprites.other['official-artwork'].front_default || d.sprites.front_default;
    favs.push({ id: d.id, name: d.name, sprite: sprite, types: d.types.map(function(tp) { return tp.type.name; }) });
    btn.classList.add('favorited');
    btn.textContent = '♥';
    toast(t('fav_added'), 'success');
  }
  STORE.set('pokeatlas_favs', favs);
}

function searchPokedex(query) {
  var grid = document.getElementById('pokedexGrid');
  var loading = document.getElementById('pokedexLoading');
  var empty = document.getElementById('pokedexEmpty');
  var error = document.getElementById('pokedexError');
  var loadMoreBtn = document.getElementById('loadMoreBtn');

  query = query.trim().toLowerCase();
  if (!query) {
    // Reset to default list
    grid.innerHTML = '';
    pokedexState.offset = 0;
    pokedexState.allPokemon = [];
    loadPokedexList();
    return;
  }

  // If numeric, fetch directly
  if (/^\d+$/.test(query)) {
    loading.style.display = 'block';
    error.style.display = 'none';
    empty.style.display = 'none';
    grid.innerHTML = '';
    fetch('https://pokeapi.co/api/v2/pokemon/' + parseInt(query, 10)).then(function(r) {
      if (!r.ok) throw new Error('HTTP');
      return r.json();
    }).then(function(d) {
      loading.style.display = 'none';
      renderPokemonCard(d, grid);
      openPokemonDetail(d.id);
    }).catch(function() {
      loading.style.display = 'none';
      empty.style.display = 'block';
      empty.textContent = t('pokedex_no_results');
    });
    loadMoreBtn.style.display = 'none';
    return;
  }

  // Name search — fetch from the full list (up to 1025+ entries)
  loading.style.display = 'block';
  error.style.display = 'none';
  empty.style.display = 'none';
  grid.innerHTML = '';
  loadMoreBtn.style.display = 'none';

  // Use the API search by name endpoint
  fetch('https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0').then(function(r) {
    if (!r.ok) throw new Error('HTTP');
    return r.json();
  }).then(function(data) {
    var matches = data.results.filter(function(p) {
      return p.name.toLowerCase().includes(query) || String(extractIdFromUrl(p.url)).includes(query);
    });
    loading.style.display = 'none';
    if (matches.length === 0) {
      empty.style.display = 'block';
      return;
    }
    matches.slice(0, 48).forEach(function(p) {
      var id = extractIdFromUrl(p.url);
      cachedFetch('https://pokeapi.co/api/v2/pokemon/' + id).then(function(d) {
        renderPokemonCard(d, grid);
      }).catch(function() {});
    });
  }).catch(function() {
    loading.style.display = 'none';
    error.style.display = 'block';
    error.textContent = t('pokedex_api_error');
  });
}

/* ---------- POKEMON DETAIL ---------- */
function openPokemonDetail(id) {
  var modal = document.getElementById('pokemonDetailModal');
  var body = document.getElementById('pokemonDetailBody');
  modal.style.display = 'flex';
  body.innerHTML = '<div class="loading-text">' + t('loading') + '</div>';

  var pkmUrl = 'https://pokeapi.co/api/v2/pokemon/' + id;
  var speciesUrl = 'https://pokeapi.co/api/v2/pokemon-species/' + id;

  cachedFetch(pkmUrl).then(function(d) {
    var sprite = d.sprites.other['official-artwork'].front_default || d.sprites.front_default;
    addToRecent({ id: d.id, name: d.name, sprite: sprite });
    // Fetch species for Korean name and evolution chain
    cachedFetch(speciesUrl).then(function(species) {
      // Find Korean name
      var krName = null;
      if (species.names) {
        var krEntry = species.names.find(function(n) { return n.language.name === 'ko'; });
        if (krEntry) krName = krEntry.name;
      }
      // Fetch evolution chain
      if (species.evolution_chain) {
        cachedFetch(species.evolution_chain.url).then(function(evoData) {
          renderPokemonDetail(d, species, evoData, krName);
        }).catch(function() {
          renderPokemonDetail(d, species, null, krName);
        });
      } else {
        renderPokemonDetail(d, species, null, krName);
      }
    }).catch(function() {
      renderPokemonDetail(d, null, null, null);
    });
  }).catch(function() {
    body.innerHTML = '<div class="error-text">' + t('pokedex_api_error') + '</div>';
  });
}

function krNameFromSpecies(d) {
  // This is called before species fetch; returns null
  return null;
}

function renderPokemonDetail(d, species, evoData, krName) {
  var body = document.getElementById('pokemonDetailBody');
  var sprite = d.sprites.other['official-artwork'].front_default || d.sprites.front_default;
  var displayName = krName ? krName + ' (' + capitalize(d.name) + ')' : capitalize(d.name);

  var typesHtml = d.types.map(function(tp) {
    return '<span class="type-badge type-' + tp.type.name + '">' + capitalize(tp.type.name) + '</span>';
  }).join('');

  var statsHtml = d.stats.map(function(s) {
    var pct = Math.min(100, (s.base_stat / 255) * 100);
    var color = s.base_stat > 100 ? 'var(--success)' : s.base_stat > 60 ? 'var(--accent)' : 'var(--warning)';
    return '<div class="stat-row"><span class="stat-name">' + capitalize(s.stat.name.replace(/-/g, ' ')) + '</span>' +
      '<div class="stat-bar-bg"><div class="stat-bar" style="width:' + pct + '%;background:' + color + '"></div></div>' +
      '<span class="stat-val">' + s.base_stat + '</span></div>';
  }).join('');

  var abilitiesHtml = d.abilities.map(function(a) {
    var text = capitalize(a.ability.name.replace(/-/g, ' '));
    if (a.is_hidden) text += ' (Hidden)';
    return '<span class="ability-chip">' + text + '</span>';
  }).join('');

  // Fetch a sample of moves (limit to first 8 for display)
  var movesHtml = d.moves.slice(0, 10).map(function(m) {
    return '<span class="move-chip">' + capitalize(m.move.name.replace(/-/g, ' ')) + '</span>';
  }).join('');
  if (d.moves.length === 0) movesHtml = '—';

  // Evolution chain
  var evoHtml = '';
  if (evoData && evoData.chain) {
    var chain = evoData.chain;
    var evoItems = [];
    function traverseEvo(node) {
      var pid = node.species ? extractIdFromUrl(node.species.url) : null;
      evoItems.push({ name: node.species.name, id: pid });
      if (node.evolves_to && node.evolves_to.length > 0) {
        node.evolves_to.forEach(function(ev) { traverseEvo(ev); });
      }
    }
    traverseEvo(chain);
    if (evoItems.length > 1) {
      evoHtml = '<div class="evolution-chain">';
      evoItems.forEach(function(item, i) {
        if (i > 0) evoHtml += '<span class="evo-arrow">→</span>';
        evoHtml += '<div class="evo-item" data-id="' + item.id + '">' +
          '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + item.id + '.png" alt="' + item.name + '">' +
          '<div class="evo-name">' + capitalize(item.name) + '</div></div>';
      });
      evoHtml += '</div>';
    } else {
      evoHtml = '<p>' + t('detail_no_evolution') + '</p>';
    }
  }

  var gen = species && species.generation ? capitalize(species.generation.name.replace(/generation-/, 'Gen ')) : '—';
  var heightM = (d.height / 10).toFixed(1);
  var weightKg = (d.weight / 10).toFixed(1);

  var favList = STORE.get('pokeatlas_favs', []);
  var isFav = favList.some(function(f) { return f.id === d.id; });

  body.innerHTML =
    '<div class="detail-header">' +
      '<img src="' + sprite + '" alt="' + d.name + '">' +
      '<div class="dh-info">' +
        '<div class="dh-name">' + displayName + '</div>' +
        '<div class="dh-id">#' + String(d.id).padStart(3, '0') + '</div>' +
        '<div class="detail-types">' + typesHtml + '</div>' +
        '<button class="fav-btn' + (isFav ? ' favorited' : '') + '" style="position:static;opacity:1;font-size:1rem;margin-top:8px;background:none;border:1px solid var(--border);border-radius:var(--r-sm);padding:4px 12px">' + (isFav ? '♥ ' + t('detail_fav_remove') : '♡ ' + t('detail_fav_add')) + '</button>' +
      '</div>' +
    '</div>' +
    '<div style="display:flex;gap:var(--sp-2);flex-wrap:wrap;margin-bottom:var(--sp-1);font-size:0.8125rem;color:var(--text-secondary)">' +
      '<span>' + t('detail_height') + ': ' + heightM + 'm</span>' +
      '<span>' + t('detail_weight') + ': ' + weightKg + 'kg</span>' +
      '<span>' + t('detail_gen') + ': ' + gen + '</span>' +
    '</div>' +
    '<div class="detail-section"><h3>' + t('detail_stats') + '</h3>' + statsHtml + '</div>' +
    '<div class="detail-section"><h3>' + t('detail_abilities') + '</h3><div>' + abilitiesHtml + '</div></div>' +
    '<div class="detail-section"><h3>' + t('detail_moves') + '</h3><div>' + movesHtml + '</div></div>' +
    '<div class="detail-section"><h3>' + t('detail_evolution') + '</h3>' + evoHtml + '</div>';

  // Bind events
  body.querySelectorAll('.evo-item').forEach(function(el) {
    el.addEventListener('click', function() { openPokemonDetail(parseInt(el.dataset.id, 10)); });
  });
  body.querySelector('.fav-btn').addEventListener('click', function() {
    var favs = STORE.get('pokeatlas_favs', []);
    var idx = favs.findIndex(function(f) { return f.id === d.id; });
    if (idx >= 0) {
      favs.splice(idx, 1);
      toast(t('fav_removed'), 'success');
    } else {
      favs.push({ id: d.id, name: d.name, sprite: sprite, types: d.types.map(function(tp) { return tp.type.name; }) });
      toast(t('fav_added'), 'success');
    }
    STORE.set('pokeatlas_favs', favs);
    renderPokemonDetail(d, species, evoData, krName);
  });
}

/* ---------- TRADING CARDS ---------- */
var cardsState = { loaded: false, page: 1, query: '', setId: '', rarity: '' };

function loadCardsPage() {
  cardsState.loaded = true;
  loadCardFilters();
  loadCardList();
}

function loadCardFilters() {
  // Load sets
  fetch('https://api.pokemontcg.io/v2/sets?pageSize=50&orderBy=-releaseDate').then(function(r) {
    if (!r.ok) throw new Error('HTTP');
    return r.json();
  }).then(function(data) {
    var select = document.getElementById('cardSetFilter');
    data.data.forEach(function(set) {
      var opt = document.createElement('option');
      opt.value = set.id;
      opt.textContent = set.name;
      select.appendChild(opt);
    });
  }).catch(function() {});
  // Load rarities
  fetch('https://api.pokemontcg.io/v2/rarities').then(function(r) {
    if (!r.ok) throw new Error('HTTP');
    return r.json();
  }).then(function(data) {
    var select = document.getElementById('cardRarityFilter');
    data.data.forEach(function(rarity) {
      var opt = document.createElement('option');
      opt.value = rarity;
      opt.textContent = rarity;
      select.appendChild(opt);
    });
  }).catch(function() {});
}

function loadCardList() {
  var grid = document.getElementById('cardGrid');
  var loading = document.getElementById('cardLoading');
  var empty = document.getElementById('cardEmpty');
  var error = document.getElementById('cardError');
  var loadMoreBtn = document.getElementById('cardLoadMoreBtn');

  loading.style.display = 'block';
  error.style.display = 'none';
  empty.style.display = 'none';

  var params = [];
  params.push('pageSize=24');
  params.push('page=' + cardsState.page);
  if (cardsState.query) params.push('q=' + encodeURIComponent('name:' + cardsState.query + '*'));
  var url = 'https://api.pokemontcg.io/v2/cards?' + params.join('&');

  fetch(url).then(function(r) {
    if (!r.ok) throw new Error('HTTP');
    return r.json();
  }).then(function(data) {
    loading.style.display = 'none';
    if (data.data.length === 0 && cardsState.page === 1) {
      empty.style.display = 'block';
      loadMoreBtn.style.display = 'none';
      return;
    }
    data.data.forEach(function(card) { renderCardItem(card, grid); });
    loadMoreBtn.style.display = data.page < Math.ceil(data.totalCount / 24) ? 'block' : 'none';
  }).catch(function() {
    loading.style.display = 'none';
    error.style.display = 'block';
    error.textContent = t('cards_api_error');
  });
}

function renderCardItem(card, grid) {
  if (document.getElementById('tcg-card-' + card.id)) return;
  var el = document.createElement('div');
  el.className = 'tcg-card';
  el.id = 'tcg-card-' + card.id;
  var img = card.images && card.images.small ? card.images.small : '';
  var rarityBadge = card.rarity ? '<div class="tcg-rarity-badge">' + card.rarity + '</div>' : '';
  el.innerHTML =
    rarityBadge +
    (img ? '<img src="' + img + '" alt="' + card.name + '" loading="lazy">' : '<div style="aspect-ratio:2.5/3.5;display:flex;align-items:center;justify-content:center;background:var(--surface-alt);border-radius:var(--r-md);color:var(--text-muted)">' + t('card_no_image') + '</div>') +
    '<div class="tcg-name">' + card.name + '</div>' +
    '<div class="tcg-set">' + (card.set ? card.set.name : '') + '</div>';
  el.addEventListener('click', function() { openCardDetail(card.id); });
  grid.appendChild(el);
}

function openCardDetail(cardId) {
  var modal = document.getElementById('cardDetailModal');
  var body = document.getElementById('cardDetailBody');
  modal.style.display = 'flex';
  body.innerHTML = '<div class="loading-text">' + t('loading') + '</div>';

  fetch('https://api.pokemontcg.io/v2/cards/' + cardId).then(function(r) {
    if (!r.ok) throw new Error('HTTP');
    return r.json();
  }).then(function(data) {
    var card = data.data;
    var img = card.images && card.images.large ? card.images.large : (card.images && card.images.small ? card.images.small : '');
    var types = card.types ? card.types.join(', ') : '—';
    var setName = card.set ? card.set.name : '—';
    var setSeries = card.set && card.set.series ? card.set.series : '—';
    var setTotal = card.set && card.set.total ? card.set.total : '—';
    var releaseDate = card.set && card.set.releaseDate ? card.set.releaseDate : '—';

    var favCards = STORE.get('pokeatlas_cardfavs', []);
    var isFav = favCards.some(function(f) { return f.id === cardId; });

    body.innerHTML =
      '<div class="card-detail-body">' +
        '<div class="card-detail-img">' +
          (img ? '<img src="' + img + '" alt="' + card.name + '">' : '<div style="color:var(--text-muted)">' + t('card_no_image') + '</div>') +
        '</div>' +
        '<div class="card-detail-info">' +
          '<h2>' + card.name + '</h2>' +
          '<button class="fav-btn' + (isFav ? ' favorited' : '') + '" style="position:static;opacity:1;font-size:0.875rem;background:none;border:1px solid var(--border);border-radius:var(--r-sm);padding:4px 12px;margin-bottom:var(--sp-1)">' + (isFav ? '♥' : '♡') + ' ' + (isFav ? t('detail_fav_remove') : t('detail_fav_add')) + '</button>' +
          '<div class="card-info-row"><span class="card-info-label">' + t('card_detail_number') + '</span><span>' + (card.number || '—') + '</span></div>' +
          '<div class="card-info-row"><span class="card-info-label">' + t('card_detail_set') + '</span><span>' + setName + '</span></div>' +
          '<div class="card-info-row"><span class="card-info-label">' + t('card_detail_rarity') + '</span><span>' + (card.rarity || '—') + '</span></div>' +
          '<div class="card-info-row"><span class="card-info-label">' + t('card_detail_types') + '</span><span>' + types + '</span></div>' +
          '<div class="card-info-row"><span class="card-info-label">' + t('card_detail_hp') + '</span><span>' + (card.hp || '—') + '</span></div>' +
          '<div class="card-info-row"><span class="card-info-label">' + t('card_detail_supertype') + '</span><span>' + (card.supertype || '—') + '</span></div>' +
          '<div class="card-info-row"><span class="card-info-label">' + t('card_detail_subtype') + '</span><span>' + (card.subtypes ? card.subtypes.join(', ') : '—') + '</span></div>' +
          '<div class="card-info-row"><span class="card-info-label">' + t('card_detail_artist') + '</span><span>' + (card.artist || '—') + '</span></div>' +
          '<div class="card-info-row"><span class="card-info-label">' + t('card_detail_set_series') + '</span><span>' + setSeries + '</span></div>' +
          '<div class="card-info-row"><span class="card-info-label">' + t('card_detail_set_count') + '</span><span>' + setTotal + '</span></div>' +
          '<div class="card-info-row"><span class="card-info-label">' + t('card_detail_release') + '</span><span>' + releaseDate + '</span></div>' +
        '</div>' +
      '</div>';

    body.querySelector('.fav-btn').addEventListener('click', function() {
      var favs = STORE.get('pokeatlas_cardfavs', []);
      var idx = favs.findIndex(function(f) { return f.id === cardId; });
      if (idx >= 0) {
        favs.splice(idx, 1);
        toast(t('fav_removed'), 'success');
      } else {
        favs.push({ id: card.id, name: card.name, img: card.images && card.images.small ? card.images.small : '', set: setName });
        toast(t('fav_added'), 'success');
      }
      STORE.set('pokeatlas_cardfavs', favs);
      openCardDetail(cardId);
    });
  }).catch(function() {
    body.innerHTML = '<div class="error-text">' + t('cards_api_error') + '</div>';
  });
}

/* ---------- ACADEMY ---------- */
var academyProgress = STORE.get('pokeatlas_academy_progress', []);
var currentLesson = 'types';

var LESSONS = {
  types: {
    render: function() { return getTypeLesson(); }
  },
  evolution: { render: function() { return getEvolutionLesson(); } },
  abilities: { render: function() { return getAbilitiesLesson(); } },
  stats: { render: function() { return getStatsLesson(); } },
  generations: { render: function() { return getGenerationsLesson(); } },
  mechanics: { render: function() { return getMechanicsLesson(); } },
  competitive: { render: function() { return getCompetitiveLesson(); } },
  tcg_rules: { render: function() { return getTCGRulesLesson(); } },
  rarity: { render: function() { return getRarityLesson(); } },
  grading: { render: function() { return getGradingLesson(); } }
};

function renderAcademyLesson() {
  var content = document.getElementById('academyContent');
  if (!content) return;
  var lesson = LESSONS[currentLesson];
  if (!lesson) return;
  content.innerHTML = lesson.render();
  // Bind quiz buttons
  var quizBtn = content.querySelector('.quiz-btn');
  if (quizBtn) quizBtn.addEventListener('click', function() { startQuiz(currentLesson); });
  // Bind pokedex links
  content.querySelectorAll('.lesson-cta').forEach(function(btn) {
    btn.addEventListener('click', function() { navigateTo('pokedex'); });
  });
  // Mark lesson as visited
  if (!academyProgress.includes(currentLesson)) {
    academyProgress.push(currentLesson);
    STORE.set('pokeatlas_academy_progress', academyProgress);
  }
  updateAcademyProgress();
  // Update sidebar
  document.querySelectorAll('.lesson-item').forEach(function(item) {
    item.classList.toggle('active', item.dataset.lesson === currentLesson);
  });
}

function updateAcademyProgress() {
  var total = Object.keys(LESSONS).length;
  var done = academyProgress.length;
  var pct = (done / total) * 100;
  var bar = document.getElementById('academyProgressBar');
  var text = document.getElementById('academyProgressText');
  if (bar) bar.style.width = pct + '%';
  if (text) text.textContent = done + ' / ' + total;
}

/* Lesson content functions */
function getTypeLesson() {
  var typeChart = '';
  var offensiveTypes = ['normal','fire','water','electric','grass','ice','fighting','poison','ground','flying','psychic','bug','rock','ghost','dragon','dark','steel','fairy'];
  var effectiveness = {
    fire: { grass: 2, water: 0.5, fire: 0.5, ice: 2, bug: 2, steel: 2, dragon: 0.5 },
    water: { fire: 2, water: 0.5, grass: 0.5, ground: 2, rock: 2, dragon: 0.5 },
    electric: { water: 2, electric: 0.5, grass: 0.5, ground: 0, flying: 2, dragon: 0.5 },
    grass: { fire: 0.5, water: 2, grass: 0.5, poison: 0.5, ground: 2, flying: 0.5, bug: 0.5, rock: 2, dragon: 0.5, steel: 0.5 },
    ice: { fire: 0.5, water: 0.5, grass: 2, ice: 0.5, ground: 2, flying: 2, dragon: 2, steel: 0.5 },
    normal: { rock: 0.5, ghost: 0, steel: 0.5 },
    fighting: { normal: 2, ice: 2, poison: 0.5, flying: 0.5, psychic: 0.5, bug: 0.5, rock: 2, ghost: 0, dark: 2, steel: 2, fairy: 0.5 },
    poison: { grass: 2, poison: 0.5, ground: 0.5, rock: 0.5, ghost: 0.5, steel: 0, fairy: 2 },
    ground: { fire: 2, electric: 2, grass: 0.5, poison: 2, flying: 0, bug: 0.5, rock: 2, steel: 2 },
    flying: { electric: 0.5, grass: 2, fighting: 2, bug: 2, rock: 0.5, steel: 0.5 },
    psychic: { fighting: 2, poison: 2, psychic: 0.5, dark: 0, steel: 0.5 },
    bug: { fire: 0.5, grass: 2, fighting: 0.5, poison: 0.5, flying: 0.5, psychic: 2, ghost: 0.5, dark: 2, steel: 0.5, fairy: 0.5 },
    rock: { fire: 2, ice: 2, fighting: 0.5, ground: 0.5, flying: 2, bug: 2, steel: 0.5 },
    ghost: { normal: 0, psychic: 2, ghost: 2, dark: 0.5 },
    dragon: { dragon: 2, steel: 0.5, fairy: 0 },
    dark: { fighting: 0.5, psychic: 2, ghost: 2, dark: 0.5, fairy: 0.5 },
    steel: { fire: 0.5, water: 0.5, electric: 0.5, ice: 2, rock: 2, steel: 0.5, fairy: 2 },
    fairy: { fire: 0.5, fighting: 2, poison: 0.5, dragon: 2, dark: 2, steel: 0.5 }
  };

  var content = currentLang === 'ko' ?
    '<h2>' + t('academy_types_title') + '</h2>' +
    '<p>포켓몬은 18가지 타입을 가질 수 있으며, 각 포켓몬은 1~2개의 타입을 가집니다. 타입 간의 상성은 공격 시 얼마나 효과적인지를 결정합니다.</p>' +
    '<div class="fact-box"><strong>핵심 개념:</strong> 공격 타입이 상대 타입에 "효과적"이면 2배 데미지, "효과가 없으면" 0.5배 데미지, "효과가 없다"면 0배 데미지를 줍니다.</p></div>' +
    '<h3>주요 타입 상성 예시</h3>' +
    '<ul>' +
      '<li>불 → 풀: 2배 (효과적)</li>' +
      '<li>물 → 불: 2배 (효과적)</li>' +
      '<li>전기 → 물: 2배 (효과적)</li>' +
      '<li>전기 → 땅: 0배 (무효)</li>' +
      '<li>불 → 물: 0.5배 (효과가 적음)</li>' +
      '<li>풀 → 불: 0.5배 (효과가 적음)</li>' +
    '</ul>' +
    '<div class="fact-box">쌍 타입 포켓몬의 경우, 두 타입의 상성이 곱해집니다. 예: 물/땅 타입 포켓몬에게 전기 공격 → 물에 2배 × 땅에 0배 = 0배 (무효)</div>' +
    '<p><em>이 내용은 공식 게임 메커니즘에 기반한 확립된 사실입니다.</em></p>' +
    '<button class="quiz-btn">' + t('academy_take_quiz') + '</button>' +
    '<button class="lesson-cta">' + t('academy_explore_pokedex') + '</button>'
  :
    '<h2>' + t('academy_types_title') + '</h2>' +
    '<p>Pokémon can have one of 18 types, and each Pokémon has 1-2 types. Type effectiveness determines how much damage an attack does.</p>' +
    '<div class="fact-box"><strong>Core concept:</strong> If the attack type is "super effective" against the opponent type, it does 2x damage. "Not very effective" does 0.5x. "No effect" does 0x.</div>' +
    '<h3>Key Type Matchup Examples</h3>' +
    '<ul>' +
      '<li>Fire → Grass: 2x (super effective)</li>' +
      '<li>Water → Fire: 2x (super effective)</li>' +
      '<li>Electric → Water: 2x (super effective)</li>' +
      '<li>Electric → Ground: 0x (no effect)</li>' +
      '<li>Fire → Water: 0.5x (not very effective)</li>' +
      '<li>Grass → Fire: 0.5x (not very effective)</li>' +
    '</ul>' +
    '<div class="fact-box">For dual-type Pokémon, effectiveness is multiplied. Example: Electric attack on Water/Ground type → 2x (Water) × 0x (Ground) = 0x (no effect)</div>' +
    '<p><em>This content is based on official game mechanics.</em></p>' +
    '<button class="quiz-btn">' + t('academy_take_quiz') + '</button>' +
    '<button class="lesson-cta">' + t('academy_explore_pokedex') + '</button>';
  return content;
}

function getEvolutionLesson() {
  return currentLang === 'ko' ?
    '<h2>' + t('academy_evolution_title') + '</h2>' +
    '<p>진화는 포켓몬이 더 강한 형태로 변하는 과정입니다. 대부분의 포켓몬은 레벨업을 통해 진화하지만, 다양한 진화 방법이 존재합니다.</p>' +
    '<h3>주요 진화 방법</h3>' +
    '<ul>' +
      '<li><strong>레벨업:</strong> 특정 레벨에 도달하면 진화 (예: 피카츄 → 레벨 22 → 라이츄)</li>' +
      '<li><strong>아이템 사용:</strong> 진화의 돌 등 특정 아이템 사용 (예: 파이리 → 불의 돌 → 리자몽이 아닌 윈디 등)</li>' +
      '<li><strong>교환:</strong> 포켓몬을 다른 플레이어와 교환하면 진화 (예: 야돈 → 교환 → 야도란)</li>' +
      '<li><strong>특정 조건:</strong> 시간대, 장소, 친밀도, 특정 기술 보유 등 (예: 이브이 → 낮에 친밀도 → 에피이으)</li>' +
      '<li><strong>메가진화 / 테라스탈:</strong> 전투 중 일시적 변신 (게임 버전에 따라 다름)</li>' +
    '</ul>' +
    '<div class="fact-box">모든 포켓몬이 진화하는 것은 아닙니다. 전설의 포켓몬 등 일부는 진화하지 않습니다.</div>' +
    '<p><em>진화 방법은 게임 버전에 따라 일부 차이가 있을 수 있습니다.</em></p>' +
    '<button class="quiz-btn">' + t('academy_take_quiz') + '</button>'
  :
    '<h2>' + t('academy_evolution_title') + '</h2>' +
    '<p>Evolution is the process where a Pokémon transforms into a stronger form. Most evolve by leveling up, but many methods exist.</p>' +
    '<h3>Main Evolution Methods</h3>' +
    '<ul>' +
      '<li><strong>Leveling up:</strong> Evolves at a specific level (e.g., Pikachu → Lv. 22 → Raichu)</li>' +
      '<li><strong>Item use:</strong> Using evolution stones (e.g., Fire Stone on certain Pokémon)</li>' +
      '<li><strong>Trading:</strong> Evolves when traded to another player (e.g., Machoke → trade → Machamp)</li>' +
      '<li><strong>Special conditions:</strong> Time of day, location, friendship, holding a specific move</li>' +
      '<li><strong>Mega Evolution / Terastallize:</strong> Temporary in-battle transformations (version-dependent)</li>' +
    '</ul>' +
    '<div class="fact-box">Not all Pokémon evolve. Legendary Pokémon and others may not have evolution chains.</div>' +
    '<p><em>Evolution methods may vary slightly by game version.</em></p>' +
    '<button class="quiz-btn">' + t('academy_take_quiz') + '</button>';
}

function getAbilitiesLesson() {
  return currentLang === 'ko' ?
    '<h2>' + t('academy_abilities_title') + '</h2>' +
    '<p>특성(Ability)은 포켓몬이 가진 고유한 능력으로, 전투에 다양한 영향을 줍니다. 기술(Move)은 전투에서 사용하는 공격/보조 기술입니다.</p>' +
    '<h3>특성 예시</h3>' +
    '<ul>' +
      '<li><strong>정전기(Static):</strong> 접촉 공격을 한 상대를 30% 확률로 마비시킴</li>' +
      '<li><strong>위험예지(Protean):</strong> 사용하는 기술의 타입으로 자신의 타입이 변함</li>' +
      '<li><strong>선행(Prankster):</strong> 변화 기술의 우선도가 +1</li>' +
    '</ul>' +
    '<h3>기술 분류</h3>' +
    '<ul>' +
      '<li><strong>물리 기술:</strong> 공격 스탯으로 데미지 계산</li>' +
      '<li><strong>특수 기술:</strong> 특수공격 스탯으로 데미지 계산</li>' +
      '<li><strong>변화 기술:</strong> 데미지 없이 상태 변화 등을 일으킴</li>' +
    '</ul>' +
    '<div class="fact-box">각 포켓몬은 보통 1~3개의 특성을 가질 수 있으며, 숨겨진 특성(Hidden Ability)은 일반적인 방법으로는 얻기 어려운 특성입니다.</div>' +
    '<button class="quiz-btn">' + t('academy_take_quiz') + '</button>'
  :
    '<h2>' + t('academy_abilities_title') + '</h2>' +
    '<p>Abilities are unique passive traits that affect battles. Moves are the attacks and support techniques used in battle.</p>' +
    '<h3>Ability Examples</h3>' +
    '<ul>' +
      '<li><strong>Static:</strong> 30% chance to paralyze on contact</li>' +
      '<li><strong>Protean:</strong> Changes own type to match the move used</li>' +
      '<li><strong>Prankster:</strong> Status moves get +1 priority</li>' +
    '</ul>' +
    '<h3>Move Categories</h3>' +
    '<ul>' +
      '<li><strong>Physical:</strong> Damage calculated from Attack stat</li>' +
      '<li><strong>Special:</strong> Damage calculated from Special Attack stat</li>' +
      '<li><strong>Status:</strong> No direct damage; causes status changes</li>' +
    '</ul>' +
    '<div class="fact-box">Each Pokémon typically has 1-3 possible abilities. Hidden Abilities are rarer variants.</div>' +
    '<button class="quiz-btn">' + t('academy_take_quiz') + '</button>';
}

function getStatsLesson() {
  return currentLang === 'ko' ?
    '<h2>' + t('academy_stats_title') + '</h2>' +
    '<p>모든 포켓몬은 6가지 기본 스탯(Base Stat)을 가집니다. 이 스탯은 포켓몬의 강함을 결정하는 기준이 됩니다.</p>' +
    '<h3>6가지 스탯</h3>' +
    '<ul>' +
      '<li><strong>HP:</strong> 체력. 전투에서 버틸 수 있는 정도</li>' +
      '<li><strong>공격(Attack):</strong> 물리 기술의 위력</li>' +
      '<li><strong>방어(Defense):</strong> 물리 기술에 대한 내성</li>' +
      '<li><strong>특수공격(Sp. Atk):</strong> 특수 기술의 위력</li>' +
      '<li><strong>특수방어(Sp. Def):</strong> 특수 기술에 대한 내성</li>' +
      '<li><strong>스피드(Speed):</strong> 행동 순서 결정</li>' +
    '</ul>' +
    '<div class="fact-box">기본 스탯은 1~255 사이의 값입니다. 종족값이라고도 부릅니다. 실제 전투에서의 스탯은 레벨, 개체값(IV), 노력치(EV)에 의해 결정됩니다.</div>' +
    '<div class="strategy-box"><strong>전략 팁:</strong> 스피드가 높으면 먼저 공격할 수 있어 대전에서 유리합니다. 하지만 우선도 기술이나 선행 특성으로 순서를 바꿀 수 있습니다.</div>' +
    '<button class="quiz-btn">' + t('academy_take_quiz') + '</button>'
  :
    '<h2>' + t('academy_stats_title') + '</h2>' +
    '<p>Every Pokémon has 6 base stats that determine its overall strength.</p>' +
    '<h3>The 6 Stats</h3>' +
    '<ul>' +
      '<li><strong>HP:</strong> Health Points — how much damage it can take</li>' +
      '<li><strong>Attack:</strong> Power of physical moves</li>' +
      '<li><strong>Defense:</strong> Resistance to physical moves</li>' +
      '<li><strong>Sp. Atk:</strong> Power of special moves</li>' +
      '<li><strong>Sp. Def:</strong> Resistance to special moves</li>' +
      '<li><strong>Speed:</strong> Determines turn order</li>' +
    '</ul>' +
    '<div class="fact-box">Base stats range from 1 to 255. Actual battle stats also depend on level, IVs, and EVs.</div>' +
    '<div class="strategy-box"><strong>Strategy tip:</strong> Higher Speed means acting first, which is a major advantage. Priority moves and certain abilities can override turn order.</div>' +
    '<button class="quiz-btn">' + t('academy_take_quiz') + '</button>';
}

function getGenerationsLesson() {
  return currentLang === 'ko' ?
    '<h2>' + t('academy_generations_title') + '</h2>' +
    '<p>포켓몬은 세대(Generation)로 구분됩니다. 각 세대는 새로운 게임, 새로운 포켓몬, 새로운 지역을 도입합니다.</p>' +
    '<h3>세대 목록</h3>' +
    '<ul>' +
      '<li><strong>I세대:</strong> 관동 지역 · 151종 (적/녹/청/피카츄 버전)</li>' +
      '<li><strong>II세대:</strong> 성도 지역 · 100종 (금/은/크리스탈)</li>' +
      '<li><strong>III세대:</strong> 호연 지역 · 135종 (루비/사파이어/에메랄드)</li>' +
      '<li><strong>IV세대:</strong> 신오 지역 · 107종 (디아루가/펄기아/플라티나)</li>' +
      '<li><strong>V세대:</strong> 하나 지역 · 156종 (블랙/화이트)</li>' +
      '<li><strong>VI세대:</strong> 칼로스 지역 · 72종 (X/Y)</li>' +
      '<li><strong>VII세대:</strong> 알로라 지역 · 88종 (썬/문)</li>' +
      '<li><strong>VIII세대:</strong> 가라르 지역 · 89종 (소드/실드)</li>' +
      '<li><strong>IX세대:</strong> 팔데아 지역 · 110종+ (스칼렛/바이올렛)</li>' +
    '</ul>' +
    '<div class="fact-box">전국 도감 번호(National Pokédex Number)는 모든 세대를 통틀어 고유한 번호입니다. 현재 1000번 이상의 포켓몬이 등록되어 있습니다.</div>' +
    '<button class="quiz-btn">' + t('academy_take_quiz') + '</button>'
  :
    '<h2>' + t('academy_generations_title') + '</h2>' +
    '<p>Pokémon are categorized by generations. Each generation introduces new games, Pokémon, and regions.</p>' +
    '<h3>Generation List</h3>' +
    '<ul>' +
      '<li><strong>Gen I:</strong> Kanto · 151 species (Red/Blue/Yellow)</li>' +
      '<li><strong>Gen II:</strong> Johto · 100 species (Gold/Silver/Crystal)</li>' +
      '<li><strong>Gen III:</strong> Hoenn · 135 species (Ruby/Sapphire/Emerald)</li>' +
      '<li><strong>Gen IV:</strong> Sinnoh · 107 species (Diamond/Pearl/Platinum)</li>' +
      '<li><strong>Gen V:</strong> Unova · 156 species (Black/White)</li>' +
      '<li><strong>Gen VI:</strong> Kalos · 72 species (X/Y)</li>' +
      '<li><strong>Gen VII:</strong> Alola · 88 species (Sun/Moon)</li>' +
      '<li><strong>Gen VIII:</strong> Galar · 89 species (Sword/Shield)</li>' +
      '<li><strong>Gen IX:</strong> Paldea · 110+ species (Scarlet/Violet)</li>' +
    '</ul>' +
    '<div class="fact-box">The National Pokédex Number is a unique ID across all generations. Over 1000 Pokémon are registered.</div>' +
    '<button class="quiz-btn">' + t('academy_take_quiz') + '</button>';
}

function getMechanicsLesson() {
  return currentLang === 'ko' ?
    '<h2>' + t('academy_mechanics_title') + '</h2>' +
    '<p>포켓몬 게임의 주요 메커니즘을 이해하면 게임을 더 쉽게 즐길 수 있습니다.</p>' +
    '<h3>주요 메커니즘</h3>' +
    '<ul>' +
      '<li><strong>포획(Catching):</strong> 포켓볼을 던져 야생 포켓몬을 잡습니다. HP가 낮을수록, 상태이상이 있을수록 잡기 쉽습니다.</li>' +
      '<li><strong>경험치와 레벨:</strong> 전투로 경험치를 얻어 레벨이 오르고, 스탯이 증가하며 새로운 기술을 배웁니다.</li>' +
      '<li><strong>상태이상:</strong> 독, 마비, 화상, 얼음, 잠듦, 혼란 등이 있으며 전투에 큰 영향을 줍니다.</li>' +
      '<li><strong>날씨:</strong> 비, 햇빛, 모래바람 등은 특정 타입의 기술 위력이나 특성에 영향을 줍니다.</li>' +
      '<li><strong>노력치(EV):</strong> 특정 포켓몬을 쓰러뜨려 얻는 보너스 스탯. 원하는 스탯을 강화할 수 있습니다.</li>' +
      '<li><strong>개체값(IV):</strong> 포켓몬마다 태어날 때 정해지는 고유한 스탯 잠재력 (0~31).</li>' +
    '</ul>' +
    '<div class="fact-box">EV와 IV는 대전에서 매우 중요하지만, 스토리 진행에서는 크게 신경 쓰지 않아도 됩니다.</div>' +
    '<button class="quiz-btn">' + t('academy_take_quiz') + '</button>'
  :
    '<h2>' + t('academy_mechanics_title') + '</h2>' +
    '<p>Understanding core game mechanics will help you enjoy the game more.</p>' +
    '<h3>Key Mechanics</h3>' +
    '<ul>' +
      '<li><strong>Catching:</strong> Throw Poké Balls to catch wild Pokémon. Lower HP and status effects make catching easier.</li>' +
      '<li><strong>EXP & Leveling:</strong> Battles give experience. Leveling up increases stats and unlocks new moves.</li>' +
      '<li><strong>Status Conditions:</strong> Poison, paralysis, burn, freeze, sleep, confusion — each affects battles differently.</li>' +
      '<li><strong>Weather:</strong> Rain, sun, sandstorm, etc. affect certain move types and abilities.</li>' +
      '<li><strong>Effort Values (EVs):</strong> Bonus stats gained by defeating specific Pokémon. Train specific stats.</li>' +
      '<li><strong>Individual Values (IVs):</strong> Innate stat potential (0-31) set at birth.</li>' +
    '</ul>' +
    '<div class="fact-box">EVs and IVs are crucial for competitive play but not essential for story progression.</div>' +
    '<button class="quiz-btn">' + t('academy_take_quiz') + '</button>';
}

function getCompetitiveLesson() {
  return currentLang === 'ko' ?
    '<h2>' + t('academy_competitive_title') + '</h2>' +
    '<p>대전(Competitive Battle)은 다른 플레이어와 포켓몬 전투를 하는 것을 말합니다. 공식 룰과 커뮤니티 룰이 있습니다.</p>' +
    '<h3>기본 개념</h3>' +
    '<ul>' +
      '<li><strong>포맷:</strong> 싱글배틀(3vs3), 더블배틀(4vs4) 등 공식 대회는 주로 더블배틀</li>' +
      '<li><strong>티어링:</strong> 포켓몬의 강함에 따라 사용 가능한 티어가 나뉨 (Smogon 커뮤니티 기준)</li>' +
      '<li><strong>역할:</strong> 어태커(물리/특수), 디펜더, 서포터, 스피드 컨트롤 등</li>' +
      '<li><strong>타입 커버리지:</strong> 파티 전체가 다양한 타입에 대응할 수 있도록 구성</li>' +
    '</ul>' +
    '<div class="strategy-box"><strong>전략:</strong> 상대의 파티를 보고 선두 포켓몬을 선택하고, 타입 상성과 기술을 예측하여 전투를 진행합니다. 이것은 전략이며 의견이 포함되어 있습니다.</div>' +
    '<p><em>대전 메타는 게임 버전과 패치에 따라 변합니다.</em></p>' +
    '<button class="quiz-btn">' + t('academy_take_quiz') + '</button>'
  :
    '<h2>' + t('academy_competitive_title') + '</h2>' +
    '<p>Competitive battling involves battling other players. There are official and community formats.</p>' +
    '<h3>Basic Concepts</h3>' +
    '<ul>' +
      '<li><strong>Formats:</strong> Singles (3v3), Doubles (4v4) — official competitions use Doubles</li>' +
      '<li><strong>Tiers:</strong> Pokémon are categorized by strength (Smogon community tiers)</li>' +
      '<li><strong>Roles:</strong> Physical/Special attackers, tanks, supporters, speed control</li>' +
      '<li><strong>Type Coverage:</strong> Team should cover various type matchups</li>' +
    '</ul>' +
    '<div class="strategy-box"><strong>Strategy:</strong> Preview opponent team, choose leads, predict moves based on type matchups. This is strategy and includes opinions.</div>' +
    '<p><em>Competitive meta changes with game versions and patches.</em></p>' +
    '<button class="quiz-btn">' + t('academy_take_quiz') + '</button>';
}

function getTCGRulesLesson() {
  return currentLang === 'ko' ?
    '<h2>' + t('academy_tcg_rules_title') + '</h2>' +
    '<p>포켓몬 트레이딩 카드 게임(TCG)은 카드로 포켓몬 대전을 하는 게임입니다.</p>' +
    '<h3>기본 규칙</h3>' +
    '<ul>' +
      '<li><strong>덱 구성:</strong> 60장의 카드로 구성</li>' +
      '<li><strong>승리 조건:</strong> 상대의 포켓몬 6마리를 쓰러뜨리거나, 상대가 덱이 소진되거나, 상대가 Prize 카드를 모두 가져가면 승리</li>' +
      '<li><strong>카드 종류:</strong> 포켓몬 카드, 에너지 카드, 트레이너 카드(지원자/물건/스타디움)</li>' +
      '<li><strong>에너지:</strong> 기술을 사용하기 위해 필요. 기본 에너지와 특수 에너지가 있음</li>' +
      '<li><strong>Prize 카드:</strong> 상대 포켓몬을 쓰러뜨릴 때마다 1장씩 가져오는 카드</li>' +
    '</ul>' +
    '<div class="fact-box">포켓몬 카드는 기본(Basic), 1진화(Stage 1), 2진화(Stage 2)로 나뉩니다. 진화 카드는 해당 포켓몬이 필드에 있을 때만 사용할 수 있습니다.</div>' +
    '<button class="quiz-btn">' + t('academy_take_quiz') + '</button>'
  :
    '<h2>' + t('academy_tcg_rules_title') + '</h2>' +
    '<p>The Pokémon Trading Card Game (TCG) is a card game based on Pokémon battles.</p>' +
    '<h3>Basic Rules</h3>' +
    '<ul>' +
      '<li><strong>Deck:</strong> 60 cards total</li>' +
      '<li><strong>Win condition:</strong> Knock out 6 opponent Pokémon, or opponent runs out of cards, or you collect all Prize cards</li>' +
      '<li><strong>Card types:</strong> Pokémon cards, Energy cards, Trainer cards (Supporters/Items/Stadiums)</li>' +
      '<li><strong>Energy:</strong> Required to use moves. Basic and Special energy exist.</li>' +
      '<li><strong>Prize cards:</strong> Take one each time you knock out an opponent Pokémon.</li>' +
    '</ul>' +
    '<div class="fact-box">Pokémon cards are divided into Basic, Stage 1, and Stage 2. Evolution cards can only be played on the matching Pokémon.</div>' +
    '<button class="quiz-btn">' + t('academy_take_quiz') + '</button>';
}

function getRarityLesson() {
  return currentLang === 'ko' ?
    '<h2>' + t('academy_rarity_title') + '</h2>' +
    '<p>카드 레어도는 카드 팩에서 얻기 어려운 정도를 나타내는 기호입니다.</p>' +
    '<h3>주요 레어도 기호</h3>' +
    '<ul>' +
      '<li><strong>C (Common):</strong> 흔함 — 가장 흔한 카드</li>' +
      '<li><strong>U (Uncommon):</strong> 약간 희귀 — ◆ 마크</li>' +
      '<li><strong>R (Rare):</strong> 희귀 — ★ 마크</li>' +
      '<li><strong>HR / UR (Hyper/Secret Rare):</strong> 초희귀 — ★★★ 이상, 특수 디자인</li>' +
      '<li><strong>SAR (Special Art Rare):</strong> 특수 아트 레어 — 풀아트 디자인</li>' +
      '<li><strong>Promo:</strong> 프로모 카드 — 특별 이벤트/제품에서만 배포</li>' +
    '</ul>' +
    '<div class="fact-box">레어도는 카드의 "희소성"을 나타낼 뿐, 카드의 대전 성능이나 수집 가치와 직접 비례하지는 않습니다.</div>' +
    '<button class="quiz-btn">' + t('academy_take_quiz') + '</button>'
  :
    '<h2>' + t('academy_rarity_title') + '</h2>' +
    '<p>Card rarity indicates how difficult it is to pull from a pack.</p>' +
    '<h3>Main Rarity Symbols</h3>' +
    '<ul>' +
      '<li><strong>C (Common):</strong> Most common cards</li>' +
      '<li><strong>U (Uncommon):</strong> Slightly rarer — ◆ mark</li>' +
      '<li><strong>R (Rare):</strong> Rare — ★ mark</li>' +
      '<li><strong>HR / UR (Hyper/Secret Rare):</strong> Very rare — ★★★ or more, special designs</li>' +
      '<li><strong>SAR (Special Art Rare):</strong> Full-art special designs</li>' +
      '<li><strong>Promo:</strong> Event/product-exclusive promotional cards</li>' +
    '</ul>' +
    '<div class="fact-box">Rarity indicates scarcity, not necessarily battle performance or collector value.</div>' +
    '<button class="quiz-btn">' + t('academy_take_quiz') + '</button>';
}

function getGradingLesson() {
  return currentLang === 'ko' ?
    '<h2>' + t('academy_grading_title') + '</h2>' +
    '<p>카드 레어도와 제3자 등급(Grading)은 다른 개념입니다. 혼동하기 쉬우므로 명확히 구분해야 합니다.</p>' +
    '<h3>레어도 vs 등급</h3>' +
    '<ul>' +
      '<li><strong>레어도(Rarity):</strong> 제조사가 정한 카드의 희소성. 카드 자체의 속성.</li>' +
      '<li><strong>등급(Grading):</strong> 제3자 기관(PGA, PSA, SGC 등)이 카드의 보존 상태를 평가한 점수.</li>' +
    '</ul>' +
    '<h3>등급 평가 기준</h3>' +
    '<ul>' +
      '<li>코너 상태 (Corners)</li>' +
      '<li>모서리 상태 (Edges)</li>' +
      '<li>표면 상태 (Surface)</li>' +
      '<li>중앙 정렬 (Centering)</li>' +
    '</ul>' +
    '<div class="fact-box">일반적인 등급 점수: 1~10점 (10점이 최고). 높은 등급의 카드는 수집가들 사이에서 더 높은 가치를 가질 수 있습니다.</div>' +
    '<div class="strategy-box">등급 서비스는 유료이며, 등급 받기 전 카드의 상태를 잘 보존하는 것이 중요합니다.</div>' +
    '<button class="quiz-btn">' + t('academy_take_quiz') + '</button>'
  :
    '<h2>' + t('academy_grading_title') + '</h2>' +
    '<p>Card rarity and third-party grading are different concepts. Its important to distinguish them.</p>' +
    '<h3>Rarity vs Grading</h3>' +
    '<ul>' +
      '<li><strong>Rarity:</strong> Manufacturer-defined scarcity. A property of the card itself.</li>' +
      '<li><strong>Grading:</strong> A score from a third-party company (PSA, SGC, etc.) evaluating the cards physical condition.</li>' +
    '</ul>' +
    '<h3>Grading Criteria</h3>' +
    '<ul>' +
      '<li>Corners</li>' +
      '<li>Edges</li>' +
      '<li>Surface</li>' +
      '<li>Centering</li>' +
    '</ul>' +
    '<div class="fact-box">Typical grades: 1-10 (10 is highest). Higher-graded cards may command higher collector value.</div>' +
    '<div class="strategy-box">Grading services are paid. Preserving card condition before grading is crucial.</div>' +
    '<button class="quiz-btn">' + t('academy_take_quiz') + '</button>';
}

/* ---------- QUIZZES ---------- */
var QUIZZES = {
  types: [
    { q_ko: '불 타입이 풀 타입에게 주는 데미지 배수는?', q_en: 'What is Fire vs Grass damage multiplier?', options_ko: ['0.5배', '1배', '2배', '0배'], options_en: ['0.5x', '1x', '2x', '0x'], answer: 2 },
    { q_ko: '전기 타입이 땅 타입에게 주는 데미지는?', q_en: 'What is Electric vs Ground damage?', options_ko: ['2배', '0.5배', '1배', '0배'], options_en: ['2x', '0.5x', '1x', '0x'], answer: 3 },
    { q_ko: '포켓몬의 타입은 최대 몇 개까지 가질 수 있나요?', q_en: 'How many types can a Pokémon have at most?', options_ko: ['1개', '2개', '3개', '4개'], options_en: ['1', '2', '3', '4'], answer: 1 },
  ],
  evolution: [
    { q_ko: '피카츄가 라이츄로 진화하는 방법은?', q_en: 'How does Pikachu evolve into Raichu?', options_ko: ['레벨업', '교환', '천둥의 돌 사용', '전투 중'], options_en: ['Leveling up', 'Trading', 'Thunder Stone', 'In battle'], answer: 2 },
    { q_ko: '모든 포켓몬이 진화하나요?', q_en: 'Do all Pokémon evolve?', options_ko: ['예', '아니오'], options_en: ['Yes', 'No'], answer: 1 },
  ],
  abilities: [
    { q_ko: '포켓몬의 특성(Ability)은 전투에 영향을 주나요?', q_en: 'Do Abilities affect battles?', options_ko: ['예', '아니오'], options_en: ['Yes', 'No'], answer: 0 },
    { q_ko: '변화 기술(Status Move)은 데미지를 주나요?', q_en: 'Do Status moves deal direct damage?', options_ko: ['예', '아니오'], options_en: ['Yes', 'No'], answer: 1 },
  ],
  stats: [
    { q_ko: '스피드(Speed) 스탯이 결정하는 것은?', q_en: 'What does the Speed stat determine?', options_ko: ['공격력', '행동 순서', '체력', '방어력'], options_en: ['Attack power', 'Turn order', 'HP', 'Defense'], answer: 1 },
    { q_ko: '포켓몬의 기본 스탯은 몇 종류인가요?', q_en: 'How many base stats does a Pokémon have?', options_ko: ['4', '5', '6', '7'], options_en: ['4', '5', '6', '7'], answer: 2 },
  ],
  generations: [
    { q_ko: 'I세대의 지역은 어디인가요?', q_en: 'What region is Gen I?', options_ko: ['성도', '관동', '호연', '신오'], options_en: ['Johto', 'Kanto', 'Hoenn', 'Sinnoh'], answer: 1 },
    { q_ko: 'IX세대의 게임은?', q_en: 'What are the Gen IX games?', options_ko: ['소드/실드', '썬/문', '스칼렛/바이올렛', 'X/Y'], options_en: ['Sword/Shield', 'Sun/Moon', 'Scarlet/Violet', 'X/Y'], answer: 2 },
  ],
  mechanics: [
    { q_ko: '포켓몬을 잡기 쉽게 하려면?', q_en: 'What makes Pokémon easier to catch?', options_ko: ['HP를 높이기', 'HP를 낮추고 상태이상 걸기', '도망가기', '레벨 올리기'], options_en: ['Raise HP', 'Lower HP and inflict status', 'Run away', 'Level up'], answer: 1 },
    { q_ko: 'IV(개체값)의 범위는?', q_en: 'What is the IV range?', options_ko: ['0~10', '0~31', '0~50', '0~100'], options_en: ['0-10', '0-31', '0-50', '0-100'], answer: 1 },
  ],
  competitive: [
    { q_ko: '공식 대회의 주요 포맷은?', q_en: 'What is the main official format?', options_ko: ['싱글배틀', '더블배틀', '트리플배틀', '로테이션'], options_en: ['Singles', 'Doubles', 'Triples', 'Rotation'], answer: 1 },
    { q_ko: '티어링의 기준은?', q_en: 'What determines tiers?', options_ko: ['포켓몬의 크기', '포켓몬의 강함과 사용률', '포켓몬의 타입', '포켓몬의 세대'], options_en: ['Pokémon size', 'Strength and usage', 'Pokémon type', 'Generation'], answer: 1 },
  ],
  tcg_rules: [
    { q_ko: '덱은 몇 장으로 구성되나요?', q_en: 'How many cards in a deck?', options_ko: ['40장', '50장', '60장', '80장'], options_en: ['40', '50', '60', '80'], answer: 2 },
    { q_ko: '포켓몬 카드의 진화 단계는?', q_en: 'What are the evolution stages in TCG?', options_ko: ['기본/1진화/2진화', '1단계/2단계/3단계', '초급/중급/고급', '노멀/레어/슈퍼레어'], options_en: ['Basic/Stage 1/Stage 2', 'Stage 1/2/3', 'Beginner/Intermediate/Advanced', 'Normal/Rare/Super Rare'], answer: 0 },
  ],
  rarity: [
    { q_ko: 'C(Common)의 의미는?', q_en: 'What does C (Common) mean?', options_ko: ['초희귀', '흔함', '희귀', '프로모'], options_en: ['Very rare', 'Common', 'Rare', 'Promo'], answer: 1 },
    { q_ko: '레어도와 수집 가치는 항상 비례하나요?', q_en: 'Does rarity always correlate with collector value?', options_ko: ['예', '아니오'], options_en: ['Yes', 'No'], answer: 1 },
  ],
  grading: [
    { q_ko: '등급(Grading)을 평가하는 기관은?', q_en: 'Who provides grading scores?', options_ko: ['포켓몬 회사', '제3자 기관', '카드 상점', '팬 커뮤니티'], options_en: ['The Pokémon Company', 'Third-party companies', 'Card shops', 'Fan communities'], answer: 1 },
    { q_ko: '최고 등급 점수는?', q_en: 'What is the highest grade?', options_ko: ['5', '7', '10', '100'], options_en: ['5', '7', '10', '100'], answer: 2 },
  ],
};

var quizState = { lesson: null, index: 0, score: 0, answered: false };

function startQuiz(lesson) {
  if (!QUIZZES[lesson] || QUIZZES[lesson].length === 0) return;
  quizState = { lesson: lesson, index: 0, score: 0, answered: false };
  document.getElementById('quizModal').style.display = 'flex';
  renderQuizQuestion();
}

function renderQuizQuestion() {
  var body = document.getElementById('quizBody');
  var quiz = QUIZZES[quizState.lesson];
  var q = quiz[quizState.index];
  var lang = currentLang;
  var question = lang === 'ko' ? q.q_ko : q.q_en;
  var options = lang === 'ko' ? q.options_ko : q.options_en;

  body.innerHTML =
    '<div class="quiz-score">' + (quizState.index + 1) + ' / ' + quiz.length + '</div>' +
    '<div class="quiz-question">' + question + '</div>' +
    '<div class="quiz-options">' + options.map(function(opt, i) {
      return '<button class="quiz-option" data-idx="' + i + '">' + opt + '</button>';
    }).join('') + '</div>' +
    '<div id="quizFeedback"></div>';

  body.querySelectorAll('.quiz-option').forEach(function(btn) {
    btn.addEventListener('click', function() {
      if (quizState.answered) return;
      quizState.answered = true;
      var idx = parseInt(btn.dataset.idx, 10);
      var isCorrect = idx === q.answer;
      if (isCorrect) quizState.score++;
      body.querySelectorAll('.quiz-option').forEach(function(b, i) {
        b.disabled = true;
        if (i === q.answer) b.classList.add('correct');
        else if (i === idx) b.classList.add('wrong');
      });
      var feedback = document.getElementById('quizFeedback');
      feedback.className = 'quiz-feedback ' + (isCorrect ? 'correct' : 'wrong');
      feedback.innerHTML = isCorrect
        ? (lang === 'ko' ? '정답입니다!' : 'Correct!')
        : (lang === 'ko' ? '틀렸습니다. 정답: ' + options[q.answer] : 'Wrong. Answer: ' + options[q.answer]);

      var nextBtn = document.createElement('button');
      nextBtn.className = 'quiz-next-btn';
      nextBtn.textContent = quizState.index + 1 < quiz.length ? (lang === 'ko' ? '다음 문제' : 'Next') : (lang === 'ko' ? '결과 보기' : 'See Results');
      nextBtn.addEventListener('click', function() {
        if (quizState.index + 1 < quiz.length) {
          quizState.index++;
          quizState.answered = false;
          renderQuizQuestion();
        } else {
          renderQuizResult();
        }
      });
      feedback.appendChild(nextBtn);
    });
  });
}

function renderQuizResult() {
  var body = document.getElementById('quizBody');
  var quiz = QUIZZES[quizState.lesson];
  var total = quiz.length;
  var score = quizState.score;
  var lang = currentLang;
  body.innerHTML =
    '<div class="quiz-score">' + (lang === 'ko' ? '퀴즈 완료!' : 'Quiz Complete!') + '</div>' +
    '<div class="quiz-question" style="text-align:center">' + score + ' / ' + total + '</div>' +
    '<div class="quiz-feedback correct" style="text-align:center">' +
      (score === total
        ? (lang === 'ko' ? '완벽합니다! 모든 문제를 맞혔습니다.' : 'Perfect! You got all questions right.')
        : score >= total / 2
          ? (lang === 'ko' ? '잘 했셨어요! 더 공부해보세요.' : 'Good job! Keep studying.')
          : (lang === 'ko' ? '다시 도전해보세요!' : 'Try again!')) +
    '</div>' +
    '<button class="quiz-next-btn" style="width:100%">' + (lang === 'ko' ? '다시 풀기' : 'Retry') + '</button>';

  body.querySelector('.quiz-next-btn').addEventListener('click', function() {
    startQuiz(quizState.lesson);
  });
}

/* ---------- AI ASSISTANT (LOCAL KNOWLEDGE) ---------- */
var assistantInitialized = false;
function initAssistant() {
  if (assistantInitialized) {
    // Re-render greeting if language changed
    return;
  }
  assistantInitialized = true;
  var messages = document.getElementById('assistantMessages');
  messages.innerHTML = '';
  addAssistantMessage('bot', t('assistant_greeting'));

  // Suggestion chips
  var chips = document.getElementById('suggestionChips');
  var suggestions = currentLang === 'ko' ? [
    '불 타입이 풀 타입에게 얼마나 효과적?', '포켓몬은 어떻게 진화하나요?', '기본 스탯이 뭔가요?',
    'TCG 덱은 몇 장인가요?', '카드 레어도와 등급의 차이는?'
  ] : [
    'How effective is Fire vs Grass?', 'How do Pokémon evolve?', 'What are base stats?',
    'How many cards in a TCG deck?', 'Difference between rarity and grading?'
  ];
  chips.innerHTML = '';
  suggestions.forEach(function(s) {
    var chip = document.createElement('div');
    chip.className = 'suggestion-chip';
    chip.textContent = s;
    chip.addEventListener('click', function() {
      document.getElementById('assistantInput').value = s;
      sendAssistantMessage();
    });
    chips.appendChild(chip);
  });
}

function addAssistantMessage(role, text) {
  var messages = document.getElementById('assistantMessages');
  var msg = document.createElement('div');
  msg.className = 'msg ' + role;
  msg.innerHTML = text;
  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}

function sendAssistantMessage() {
  var input = document.getElementById('assistantInput');
  var question = input.value.trim();
  if (!question) return;
  addAssistantMessage('user', question);
  input.value = '';
  var answer = searchLocalKnowledge(question);
  setTimeout(function() {
    addAssistantMessage('bot', answer);
  }, 300);
}

function searchLocalKnowledge(question) {
  var q = question.toLowerCase();
  var lang = currentLang;
  var ko = lang === 'ko';

  // Type effectiveness
  if (q.includes('타입') || q.includes('상성') || q.includes('type') || q.includes('effective') || q.includes('matchup')) {
    if (q.includes('불') && q.includes('풀') || q.includes('fire') && q.includes('grass'))
      return ko ? '불 타입은 풀 타입에게 2배의 데미지를 줍니다 (효과적). <a href="#" onclick="navTo(\'academy\');return false">타입 상성 레슨 보기</a>' : 'Fire is 2x effective against Grass (super effective). <a href="#" onclick="navTo(\'academy\');return false">View Type Lesson</a>';
    if (q.includes('전기') && q.includes('땅') || q.includes('electric') && q.includes('ground'))
      return ko ? '전기 타입은 땅 타입에게 0배의 데미지를 줍니다 (무효).' : 'Electric does 0x damage to Ground (no effect).';
    return ko
      ? '포켓몬에는 18가지 타입이 있으며, 타입 간 상성에 따라 데미지 배율이 2배/0.5배/0배로 변합니다. 자세한 내용은 아카데미의 타입 상성 레슨을 참고하세요. <a href="#" onclick="navTo(\'academy\');return false">레슨 보기</a>'
      : 'There are 18 Pokémon types. Type effectiveness multiplies damage by 2x, 0.5x, or 0x. See the Academy type lesson for details. <a href="#" onclick="navTo(\'academy\');return false">View Lesson</a>';
  }

  // Evolution
  if (q.includes('진화') || q.includes('evolution') || q.includes('evolve')) {
    return ko
      ? '포켓몬은 레벨업, 아이템 사용, 교환, 특정 조건(시간대, 친밀도 등)을 통해 진화합니다. 모든 포켓몬이 진화하는 것은 아닙니다. <a href="#" onclick="navTo(\'academy\');return false">진화 레슨 보기</a>'
      : 'Pokémon evolve via leveling, items, trading, or special conditions (time, friendship, etc.). Not all Pokémon evolve. <a href="#" onclick="navTo(\'academy\');return false">View Evolution Lesson</a>';
  }

  // Stats
  if (q.includes('스탯') || q.includes('stat') || q.includes('base stat')) {
    return ko
      ? '포켓몬은 HP, 공격, 방어, 특수공격, 특수방어, 스피드의 6가지 기본 스탯을 가집니다. <a href="#" onclick="navTo(\'academy\');return false">스탯 레슨 보기</a>'
      : 'Pokémon have 6 base stats: HP, Attack, Defense, Sp. Atk, Sp. Def, and Speed. <a href="#" onclick="navTo(\'academy\');return false">View Stats Lesson</a>';
  }

  // TCG
  if (q.includes('tcg') || q.includes('덱') || q.includes('deck') || q.includes('카드 게임') || q.includes('card game') || q.includes('규칙') || q.includes('rule')) {
    if (q.includes('덱') || q.includes('deck'))
      return ko ? 'TCG 덱은 60장으로 구성됩니다.' : 'A TCG deck consists of 60 cards.';
    return ko
      ? '포켓몬 TCG는 60장 덱으로 대전하며, 포켓몬/에너지/트레이너 카드로 구성됩니다. 상대 포켓몬 6마리를 쓰러뜨리면 승리. <a href="#" onclick="navTo(\'academy\');return false">TCG 규칙 레슨 보기</a>'
      : 'Pokémon TCG uses 60-card decks with Pokémon/Energy/Trainer cards. Knock out 6 opponent Pokémon to win. <a href="#" onclick="navTo(\'academy\');return false">View TCG Rules Lesson</a>';
  }

  // Rarity & Grading
  if (q.includes('레어도') || q.includes('rarity') || q.includes('등급') || q.includes('grading') || q.includes('grade')) {
    if (q.includes('차이') || q.includes('difference') || (q.includes('레어도') && q.includes('등급')) || (q.includes('rarity') && q.includes('grading')))
      return ko
        ? '레어도는 제조사가 정한 카드의 희소성이고, 등급은 제3자 기관이 카드 보존 상태를 평가한 점수입니다. <a href="#" onclick="navTo(\'academy\');return false">레슨 보기</a>'
        : 'Rarity is manufacturer-defined scarcity, while grading is a third-party score of card condition. <a href="#" onclick="navTo(\'academy\');return false">View Lesson</a>';
    return ko
      ? '카드 레어도에는 Common, Uncommon, Rare, Hyper Rare, Secret Rare 등이 있습니다. <a href="#" onclick="navTo(\'academy\');return false">레어도 레슨 보기</a>'
      : 'Card rarities include Common, Uncommon, Rare, Hyper Rare, Secret Rare, and more. <a href="#" onclick="navTo(\'academy\');return false">View Rarity Lesson</a>';
  }

  // Generations
  if (q.includes('세대') || q.includes('generation') || q.includes('지역') || q.includes('region')) {
    return ko
      ? '포켓몬은 I~IX세대로 구분되며, 각 세대마다 새로운 지역과 포켓몬이 도입됩니다. <a href="#" onclick="navTo(\'academy\');return false">세대 레슨 보기</a>'
      : 'Pokémon are divided into Generations I-IX, each introducing new regions and species. <a href="#" onclick="navTo(\'academy\');return false">View Generations Lesson</a>';
  }

  // Market
  if (q.includes('마켓') || q.includes('market') || q.includes('가격') || q.includes('price')) {
    return ko
      ? '현재 실시간 마켓 가격 데이터가 연결되어 있지 않습니다. 가격 데이터를 임의로 생성하지 않습니다. 호환 가능한 마켓 API가 연결되면 실제 데이터가 표시됩니다.'
      : 'No real-time market price data is currently connected. We do not fabricate price data. When a compatible market API is connected, real data will be displayed.';
  }

  // Abilities
  if (q.includes('특성') || q.includes('ability') || q.includes('abilities')) {
    return ko
      ? '특성은 포켓몬의 고유한 능력으로 전투에 다양한 영향을 줍니다. 숨겨진 특성(Hidden Ability)도 존재합니다. <a href="#" onclick="navTo(\'academy\');return false">특성 레슨 보기</a>'
      : 'Abilities are unique passive traits that affect battles. Hidden Abilities also exist. <a href="#" onclick="navTo(\'academy\');return false">View Abilities Lesson</a>';
  }

  // Competitive
  if (q.includes('대전') || q.includes('competitive') || q.includes('배틀') || q.includes('battle')) {
    return ko
      ? '대전은 싱글/더블 배틀 포맷이 있으며, 공식 대회는 주로 더블배틀입니다. 타입 커버리지와 역할 분담이 중요합니다. <a href="#" onclick="navTo(\'academy\');return false">대전 레슨 보기</a>'
      : 'Competitive battles include Singles and Doubles formats. Official competitions mainly use Doubles. Type coverage and role distribution are key. <a href="#" onclick="navTo(\'academy\');return false">View Competitive Lesson</a>';
  }

  return t('assistant_no_match');
}

/* ---------- COLLECTION ---------- */
var collectionTab = 'pokemon';
function renderCollection() {
  var content = document.getElementById('collectionContent');
  if (!content) return;

  // Update tab states
  document.querySelectorAll('.collection-tab').forEach(function(tab) {
    tab.classList.toggle('active', tab.dataset.tab === collectionTab);
  });

  if (collectionTab === 'pokemon') {
    var favs = STORE.get('pokeatlas_favs', []);
    if (favs.length === 0) {
      content.innerHTML = '<div class="collection-empty">' + t('collection_empty_pokemon') + '</div>';
      return;
    }
    var html = '<div class="collection-grid">';
    favs.forEach(function(f) {
      var types = f.types || [];
      var typesHtml = types.map(function(tp) {
        return '<span class="type-badge type-' + tp + '">' + capitalize(tp) + '</span>';
      }).join('');
      html += '<div class="collection-item" data-id="' + f.id + '">' +
        '<button class="remove-btn" data-id="' + f.id + '" data-type="pokemon">&times;</button>' +
        '<img src="' + f.sprite + '" alt="' + f.name + '">' +
        '<div class="ci-name">' + capitalize(f.name) + '</div>' +
        '<div class="type-badges">' + typesHtml + '</div>' +
      '</div>';
    });
    html += '</div>';
    content.innerHTML = html;
    content.querySelectorAll('.collection-item').forEach(function(item) {
      item.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove-btn')) {
          e.stopPropagation();
          removeCollectionItem('pokemon', parseInt(e.target.dataset.id, 10));
        } else {
          openPokemonDetail(parseInt(item.dataset.id, 10));
        }
      });
    });
  } else if (collectionTab === 'cards') {
    var cardFavs = STORE.get('pokeatlas_cardfavs', []);
    if (cardFavs.length === 0) {
      content.innerHTML = '<div class="collection-empty">' + t('collection_empty_cards') + '</div>';
      return;
    }
    var html = '<div class="collection-grid">';
    cardFavs.forEach(function(c) {
      html += '<div class="collection-item" data-id="' + c.id + '">' +
        '<button class="remove-btn" data-id="' + c.id + '" data-type="card">&times;</button>' +
        (c.img ? '<img src="' + c.img + '" alt="' + c.name + '" style="object-fit:cover">' : '<div style="width:72px;height:72px;background:var(--surface-alt);border-radius:var(--r-sm)"></div>') +
        '<div class="ci-name">' + c.name + '</div>' +
        '<div class="pm-id">' + (c.set || '') + '</div>' +
      '</div>';
    });
    html += '</div>';
    content.innerHTML = html;
    content.querySelectorAll('.collection-item').forEach(function(item) {
      item.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove-btn')) {
          e.stopPropagation();
          removeCollectionItem('card', e.target.dataset.id);
        } else {
          openCardDetail(item.dataset.id);
        }
      });
    });
  } else if (collectionTab === 'progress') {
    var progress = STORE.get('pokeatlas_academy_progress', []);
    if (progress.length === 0) {
      content.innerHTML = '<div class="collection-empty">' + t('collection_empty_progress') + '</div>';
      return;
    }
    var lessonKeys = Object.keys(LESSONS);
    var html = '<div class="collection-progress-list">';
    lessonKeys.forEach(function(key) {
      var done = progress.includes(key);
      var lessonTitle = t('academy_' + key + '_title');
      html += '<div class="progress-list-item ' + (done ? 'done' : 'undone') + '">' + lessonTitle + '</div>';
    });
    html += '</div>';
    var total = lessonKeys.length;
    var done = progress.length;
    html += '<div style="margin-top:var(--sp-2);font-size:0.875rem;font-weight:600;color:var(--text-secondary)">' + done + ' / ' + total + ' ' + (currentLang === 'ko' ? '완료' : 'completed') + '</div>';
    content.innerHTML = html;
  }
}

function removeCollectionItem(type, id) {
  if (type === 'pokemon') {
    var favs = STORE.get('pokeatlas_favs', []);
    favs = favs.filter(function(f) { return f.id !== id; });
    STORE.set('pokeatlas_favs', favs);
    toast(t('fav_removed'), 'success');
  } else if (type === 'card') {
    var cardFavs = STORE.get('pokeatlas_cardfavs', []);
    cardFavs = cardFavs.filter(function(f) { return f.id !== id; });
    STORE.set('pokeatlas_cardfavs', cardFavs);
    toast(t('fav_removed'), 'success');
  }
  renderCollection();
}

/* ---------- UTILS ---------- */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/* Expose navTo for inline onclick */
window.navTo = navigateTo;

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded', function() {
  // Set initial language
  setLang(currentLang);

  // Navigation
  document.querySelectorAll('[data-nav]').forEach(function(el) {
    el.addEventListener('click', function(e) {
      e.preventDefault();
      var target = el.dataset.nav;
      navigateTo(target);
    });
  });

  // Menu toggle
  document.getElementById('menuToggle').addEventListener('click', function() {
    document.getElementById('navMenu').classList.toggle('open');
  });

  // Language switcher
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.addEventListener('click', function() { setLang(btn.dataset.lang); });
  });

  // Global search
  document.getElementById('globalSearchBtn').addEventListener('click', function() {
    var q = document.getElementById('globalSearchInput').value.trim();
    if (q) {
      navigateTo('pokedex');
      document.getElementById('pokedexSearch').value = q;
      searchPokedex(q);
    }
  });
  document.getElementById('globalSearchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') document.getElementById('globalSearchBtn').click();
  });

  // Pokédex search
  document.getElementById('pokedexSearchBtn').addEventListener('click', function() {
    searchPokedex(document.getElementById('pokedexSearch').value);
  });
  document.getElementById('pokedexSearch').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') document.getElementById('pokedexSearchBtn').click();
  });

  // Load more
  document.getElementById('loadMoreBtn').addEventListener('click', function() {
    pokedexState.offset += pokedexState.limit;
    loadPokedexList();
  });

  // Type & Gen filters
  document.getElementById('typeFilter').addEventListener('change', function() {
    applyPokedexFilters();
  });
  document.getElementById('genFilter').addEventListener('change', function() {
    applyPokedexFilters();
  });

  // Card search
  document.getElementById('cardSearchBtn').addEventListener('click', function() {
    cardsState.query = document.getElementById('cardSearch').value.trim();
    cardsState.page = 1;
    document.getElementById('cardGrid').innerHTML = '';
    loadCardList();
  });
  document.getElementById('cardSearch').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') document.getElementById('cardSearchBtn').click();
  });
  document.getElementById('cardLoadMoreBtn').addEventListener('click', function() {
    cardsState.page++;
    loadCardList();
  });
  document.getElementById('cardSetFilter').addEventListener('change', function() {
    // For simplicity, reload with set filter
    cardsState.setId = this.value;
    cardsState.page = 1;
    document.getElementById('cardGrid').innerHTML = '';
    if (cardsState.setId) {
      // Search by set
      var grid = document.getElementById('cardGrid');
      fetch('https://api.pokemontcg.io/v2/cards?q=' + encodeURIComponent('set.id:' + cardsState.setId) + '&pageSize=24&page=1').then(function(r) {
        if (!r.ok) throw new Error('HTTP');
        return r.json();
      }).then(function(data) {
        data.data.forEach(function(card) { renderCardItem(card, grid); });
      }).catch(function() {});
    } else {
      loadCardList();
    }
  });

  // Modal close
  document.getElementById('pokemonDetailClose').addEventListener('click', function() {
    document.getElementById('pokemonDetailModal').style.display = 'none';
  });
  document.getElementById('cardDetailClose').addEventListener('click', function() {
    document.getElementById('cardDetailModal').style.display = 'none';
  });
  document.getElementById('quizClose').addEventListener('click', function() {
    document.getElementById('quizModal').style.display = 'none';
  });

  // Close modal on overlay click
  document.getElementById('pokemonDetailModal').addEventListener('click', function(e) {
    if (e.target === this) this.style.display = 'none';
  });
  document.getElementById('cardDetailModal').addEventListener('click', function(e) {
    if (e.target === this) this.style.display = 'none';
  });
  document.getElementById('quizModal').addEventListener('click', function(e) {
    if (e.target === this) this.style.display = 'none';
  });

  // Academy sidebar
  document.querySelectorAll('.lesson-item').forEach(function(item) {
    item.addEventListener('click', function() {
      currentLesson = item.dataset.lesson;
      renderAcademyLesson();
    });
  });

  // Home lesson recommendations
  document.querySelectorAll('.lesson-rec-item').forEach(function(item) {
    item.addEventListener('click', function() {
      currentLesson = item.dataset.lesson || 'types';
      navigateTo('academy');
    });
  });

  // Home country selector
  document.getElementById('homeCountrySelect').addEventListener('change', function() {
    var marketSelect = document.getElementById('marketCountry');
    if (marketSelect) marketSelect.value = this.value;
  });

  // Assistant
  document.getElementById('assistantSendBtn').addEventListener('click', sendAssistantMessage);
  document.getElementById('assistantInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') sendAssistantMessage();
  });

  // Collection tabs
  document.querySelectorAll('.collection-tab').forEach(function(tab) {
    tab.addEventListener('click', function() {
      collectionTab = tab.dataset.tab;
      renderCollection();
    });
  });

  // Last update time
  var now = new Date();
  document.getElementById('lastUpdateTime').textContent = now.toLocaleString(currentLang === 'ko' ? 'ko-KR' : 'en-US');

  // Render initial home content
  renderFeatured();
  renderRecent();
});

function applyPokedexFilters() {
  var typeVal = document.getElementById('typeFilter').value;
  var genVal = document.getElementById('genFilter').value;
  var grid = document.getElementById('pokedexGrid');

  if (!typeVal && !genVal) {
    // Reset
    grid.innerHTML = '';
    pokedexState.offset = 0;
    pokedexState.allPokemon = [];
    loadPokedexList();
    return;
  }

  // Filter from loaded pokemon or fetch by type
  grid.innerHTML = '';
  document.getElementById('pokedexLoading').style.display = 'block';
  document.getElementById('pokedexEmpty').style.display = 'none';
  document.getElementById('pokedexError').style.display = 'none';
  document.getElementById('loadMoreBtn').style.display = 'none';

  if (typeVal) {
    // Fetch pokemon by type
    fetch('https://pokeapi.co/api/v2/type/' + typeVal).then(function(r) {
      if (!r.ok) throw new Error('HTTP');
      return r.json();
    }).then(function(data) {
      document.getElementById('pokedexLoading').style.display = 'none';
      var pokemon = data.pokemon.map(function(p) { return p.pokemon; });
      // Filter by generation if also selected
      pokemon.forEach(function(p) {
        var id = extractIdFromUrl(p.url);
        if (genVal) {
          var genRanges = { '1': [1,151], '2': [152,251], '3': [252,386], '4': [387,493], '5': [494,649], '6': [650,721], '7': [722,809], '8': [810,905], '9': [906,1025] };
          var range = genRanges[genVal];
          if (range && (id < range[0] || id > range[1])) return;
        }
        cachedFetch('https://pokeapi.co/api/v2/pokemon/' + id).then(function(d) {
          renderPokemonCard(d, grid);
        }).catch(function() {});
      });
    }).catch(function() {
      document.getElementById('pokedexLoading').style.display = 'none';
      document.getElementById('pokedexError').style.display = 'block';
      document.getElementById('pokedexError').textContent = t('pokedex_api_error');
    });
  } else if (genVal) {
    // Filter by generation range
    var genRanges = { '1': [1,151], '2': [152,251], '3': [252,386], '4': [387,493], '5': [494,649], '6': [650,721], '7': [722,809], '8': [810,905], '9': [906,1025] };
    var range = genRanges[genVal];
    if (range) {
      var count = 0;
      document.getElementById('pokedexLoading').style.display = 'none';
      for (var id = range[0]; id <= range[1] && count < 48; id++) {
        (function(pid) {
          cachedFetch('https://pokeapi.co/api/v2/pokemon/' + pid).then(function(d) {
            renderPokemonCard(d, grid);
          }).catch(function() {});
        })(id);
        count++;
      }
    }
  }
}

})();
