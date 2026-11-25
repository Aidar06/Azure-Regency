const API_BASE = 'https://x8ki-letl-twmt.n7.xano.io/api:X8-e2j1w/priglosi';
const $ = (selector) => document.querySelector(selector);
const previewMode = location.pathname.split('/').filter(Boolean).includes('preview');
const routeParts = location.pathname.split('/').filter(Boolean);
const publicId = previewMode ? 'preview' : (routeParts[0] || '12');

const UI = {
  ru: {
    code: 'RU', loader: 'Готовим приглашение', heroKicker: 'В этот прекрасный день', scroll: 'Листайте вниз', signature: 'С любовью,',
    saveDate: 'Сохраните эту дату', countdownEyebrow: 'До нашей свадьбы', countdownTitle: 'Осталось совсем немного',
    days: 'дней', hours: 'часов', minutes: 'минут', seconds: 'секунд', venue: 'Место торжества', timelineEyebrow: 'Садовая симфония',
    timeline: 'Программа дня', wishesEyebrow: 'Несколько слов от нас', rsvpEyebrow: 'Будете ли вы с нами?', rsvp: 'Ответ гостя',
    name: 'Ваше имя', namePlaceholder: 'Введите имя', attendance: 'Сможете присутствовать?', yes: 'С радостью приду', no: 'К сожалению, не смогу',
    guests: 'Количество гостей', wish: 'Пожелание молодожёнам', wishPlaceholder: 'Напишите несколько тёплых слов', submit: 'Отправить ответ',
    sending: 'Отправляем…', success: 'Спасибо! Ваш ответ отправлен.', error: 'Не удалось отправить ответ. Попробуйте ещё раз.',
    waiting: 'С нетерпением ждём встречи!', weekdays: ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'],
    months: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    calendarNote: (weekday, time) => `${weekday} · начало в ${time}`
  },
  ky: {
    code: 'KG', loader: 'Чакыруу даярдалууда', heroKicker: 'Ушул кооз күнү', scroll: 'Төмөн жылдырыңыз', signature: 'Сүйүү менен,',
    saveDate: 'Бул күндү сактап коюңуз', countdownEyebrow: 'Тойго чейин', countdownTitle: 'Аз гана убакыт калды',
    days: 'күн', hours: 'саат', minutes: 'мүнөт', seconds: 'секунд', venue: 'Той өтүүчү жер', timelineEyebrow: 'Бактагы симфония',
    timeline: 'Күндүн программасы', wishesEyebrow: 'Бизден бир нече сөз', rsvpEyebrow: 'Биз менен болосузбу?', rsvp: 'Коноктун жообу',
    name: 'Сиздин атыңыз', namePlaceholder: 'Атыңызды жазыңыз', attendance: 'Тойго келе аласызбы?', yes: 'Кубануу менен келем', no: 'Тилекке каршы, келе албайм',
    guests: 'Коноктордун саны', wish: 'Жаштарга каалоо', wishPlaceholder: 'Жылуу сөздөрүңүздү жазыңыз', submit: 'Жоопту жөнөтүү',
    sending: 'Жөнөтүлүүдө…', success: 'Рахмат! Жообуңуз жөнөтүлдү.', error: 'Жооп жөнөтүлгөн жок. Кайра аракет кылыңыз.',
    waiting: 'Сиздерди чыдамсыздык менен күтөбүз!', weekdays: ['Дш','Шш','Шр','Бш','Жм','Иш','Жк'],
    months: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    calendarNote: (weekday, time) => `${weekday} · башталышы ${time}`
  },
  kk: {
    code: 'KZ', loader: 'Шақыру дайындалуда', heroKicker: 'Осы тамаша күні', scroll: 'Төмен жылжытыңыз', signature: 'Сүйіспеншілікпен,',
    saveDate: 'Бұл күнді сақтаңыз', countdownEyebrow: 'Тойымызға дейін', countdownTitle: 'Аз ғана уақыт қалды',
    days: 'күн', hours: 'сағат', minutes: 'минут', seconds: 'секунд', venue: 'Той өтетін орын', timelineEyebrow: 'Бақ симфониясы',
    timeline: 'Күн бағдарламасы', wishesEyebrow: 'Бізден бірнеше сөз', rsvpEyebrow: 'Бізбен бірге боласыз ба?', rsvp: 'Қонақ жауабы',
    name: 'Сіздің атыңыз', namePlaceholder: 'Атыңызды енгізіңіз', attendance: 'Тойға келе аласыз ба?', yes: 'Қуана келемін', no: 'Өкінішке қарай, келе алмаймын',
    guests: 'Қонақтар саны', wish: 'Жас жұбайларға тілек', wishPlaceholder: 'Жылы лебізіңізді жазыңыз', submit: 'Жауапты жіберу',
    sending: 'Жіберілуде…', success: 'Рақмет! Жауабыңыз жіберілді.', error: 'Жауап жіберілмеді. Қайта көріңіз.',
    waiting: 'Сіздерді асыға күтеміз!', weekdays: ['Дс','Сс','Ср','Бс','Жм','Сб','Жс'],
    months: ['Қаңтар','Ақпан','Наурыз','Сәуір','Мамыр','Маусым','Шілде','Тамыз','Қыркүйек','Қазан','Қараша','Желтоқсан'],
    calendarNote: (weekday, time) => `${weekday} · басталуы ${time}`
  }
};

const FALLBACK = {
  public_id: '12', languages: { enabled: ['ru','ky','kk'], default: 'ru' },
  names: { groom: 'Бекзат', bride: 'Алина' }, date: '2027-06-12T16:30:00',
  invitation: {
    ru: { title: 'Дорогие родные и друзья!', text: 'Мы будем счастливы разделить с вами этот особенный день. Приглашаем вас стать частью нашего свадебного торжества!' },
    ky: { title: 'Урматтуу туугандар жана достор!', text: 'Бул өзгөчө күндү сиздер менен бирге өткөрүүгө кубанычтабыз. Сиздерди үйлөнүү тоюбузга чакырабыз!' },
    kk: { title: 'Құрметті туыстар мен достар!', text: 'Осы ерекше күнді сіздермен бірге өткізуге қуаныштымыз. Сіздерді үйлену тойымызға шақырамыз!' }
  },
  wish_block: { enabled: true, content: {
    ru: { title: 'Наши пожелания', text: 'Самый ценный подарок для нас — ваше присутствие, улыбки и хорошее настроение!' },
    ky: { title: 'Биздин каалообуз', text: 'Биз үчүн эң баалуу белек — сиздердин катышууңуздар, жылмаюуңуздар жана жакшы маанайыңыздар!' },
    kk: { title: 'Біздің тілегіміз', text: 'Біз үшін ең қымбат сыйлық — сіздердің қатысуларыңыз, күлкілеріңіз және жақсы көңіл күйлеріңіз!' }
  }},
  ceremonies: [
    { time:'16:30',sort_order:1,content:{ru:{title:'Встреча гостей',text:'Приветственные напитки и памятные фотографии.'},ky:{title:'Конокторду тосуп алуу',text:'Суусундуктар жана эстелик сүрөттөр.'},kk:{title:'Қонақтарды қарсы алу',text:'Сусындар мен естелік суреттер.'}}},
    { time:'17:00',sort_order:2,content:{ru:{title:'Свадебная церемония',text:'Трогательный момент рождения нашей семьи.'},ky:{title:'Үйлөнүү үлпөтү',text:'Үй-бүлөбүздүн түптөлгөн көз ирмеми.'},kk:{title:'Неке қию рәсімі',text:'Отбасымыздың құрылу сәті.'}}},
    { time:'18:00',sort_order:3,content:{ru:{title:'Праздничный ужин',text:'Вкусные блюда и искренние поздравления.'},ky:{title:'Майрамдык кечки тамак',text:'Даамдуу тамактар жана куттуктоолор.'},kk:{title:'Мерекелік кешкі ас',text:'Дәмді тағамдар мен құттықтаулар.'}}},
    { time:'20:00',sort_order:4,content:{ru:{title:'Танцы и веселье',text:'Музыка, улыбки и незабываемые моменты.'},ky:{title:'Бий жана көңүл ачуу',text:'Музыка, жылмаюу жана эстеликтер.'},kk:{title:'Би және көңіл көтеру',text:'Музыка, күлкі және естеліктер.'}}},
    { time:'23:00',sort_order:5,content:{ru:{title:'Завершение вечера',text:'Спасибо, что разделили этот день с нами.'},ky:{title:'Кеченин аякташы',text:'Бул күндү биз менен бөлүшкөнүңүздөргө рахмат.'},kk:{title:'Кештің аяқталуы',text:'Бұл күнді бізбен бөліскендеріңізге рақмет.'}}}
  ],
  venue: { content: {
    ru:{name:'Изумруд',type:'Банкетный зал',address:'г. Бишкек, ул. Чуй, 123'},
    ky:{name:'Изумруд',type:'Банкеттик зал',address:'Бишкек ш., Чүй көч., 123'},
    kk:{name:'Изумруд',type:'Банкет залы',address:'Бішкек қ., Чүй көш., 123'}
  }, map:{enabled:true,google_url:'',two_gis_url:''}},
  rsvp:{enabled:true,allow_guest_wish:true,max_guests:10}
};

const state = { record: FALLBACK, lang: 'ru', weddingDate: new Date(FALLBACK.date), timer: null };
const ids = ['loaderText','heroKicker','scrollLabel','heroGroom','heroBride','heroDate','invitationTitle','invitationText','signatureLabel','signatureNames','saveDateLabel','calendarMonth','calendarYear','calendarNote','countdownEyebrow','countdownHeading','daysLabel','hoursLabel','minutesLabel','secondsLabel','venueEyebrow','venueHeading','venueType','venueAddress','timelineEyebrow','timelineHeading','wishesEyebrow','wishesHeading','wishesText','rsvpEyebrow','rsvpHeading','nameLabel','guestName','attendanceLegend','attendYes','attendNo','guestCountLabel','wishField','wishLabel','guestWish','submitButton','formStatus','footerWaiting','footerLove','footerNames','groomInitial','brideInitial'];
const el = Object.fromEntries(ids.map(id => [id, document.getElementById(id)]));
Object.assign(el, {
  siteLoader: $('#siteLoader'), languageMenu: $('#languageMenu'),
  languageToggle: $('#languageToggle'), currentLanguage: $('#currentLanguage'), languageOptions: $('#languageOptions'), calendarGrid: $('#calendarGrid'),
  timelineList: $('#timelineList'), wishesSection: $('#wishesSection'), rsvpForm: $('#rsvpForm'), guestCount: $('#guestCount'),
  guestCountPicker: $('#guestCountPicker'), guestCountButton: $('#guestCountButton'), guestCountValue: $('#guestCountValue'), guestCountOptions: $('#guestCountOptions'),
  googleMapLink: $('#googleMapLink'), twoGisLink: $('#twoGisLink')
});

function normalizeLang(code){ if(code === 'kg') return 'ky'; if(code === 'kz') return 'kk'; return UI[code] ? code : 'ru'; }
function normalizeCeremonies(value){
  if(Array.isArray(value)) return value;
  if(!value || typeof value !== 'object') return [];
  for(const key of ['items','records','data','ceremonies','results']){
    if(Array.isArray(value[key])) return value[key];
  }
  if('time' in value || 'content' in value) return [value];
  return Object.values(value).filter(item => item && typeof item === 'object' && ('time' in item || 'content' in item));
}
function enabledLanguages(){ const raw = state.record?.languages?.enabled; const list = Array.isArray(raw) ? raw.map(normalizeLang) : ['ru']; return [...new Set(list.filter(code => UI[code]))]; }
function localized(source = {}){ const def = normalizeLang(state.record?.languages?.default); return source[state.lang] || source[state.lang === 'ky' ? 'kg' : state.lang] || source[def] || source.ru || Object.values(source)[0] || {}; }
function mergeRecord(data){
  const ceremonies = normalizeCeremonies(data.ceremonies);
  return {...FALLBACK,...data,ceremonies:ceremonies.length?ceremonies:FALLBACK.ceremonies,names:{...FALLBACK.names,...(data.names||{})},languages:{...FALLBACK.languages,...(data.languages||{})},venue:{...FALLBACK.venue,...(data.venue||{}),map:{...FALLBACK.venue.map,...(data.venue?.map||{})}},rsvp:{...FALLBACK.rsvp,...(data.rsvp||{})}};
}
function setText(node, value){ if(node && value !== undefined && value !== null) node.textContent = value; }
function parseDate(value){ const date = new Date(value); return Number.isNaN(date.getTime()) ? new Date(FALLBACK.date) : date; }
function names(){ return `${state.record.names.groom} & ${state.record.names.bride}`; }

function renderStaticLabels(){
  const t=UI[state.lang]; document.documentElement.lang=state.lang==='ky'?'ky':state.lang;
  setText(el.loaderText,t.loader);
  setText(el.heroKicker,t.heroKicker); setText(el.scrollLabel,t.scroll); setText(el.signatureLabel,t.signature); setText(el.saveDateLabel,t.saveDate);
  setText(el.countdownEyebrow,t.countdownEyebrow); setText(el.countdownHeading,t.countdownTitle); setText(el.daysLabel,t.days); setText(el.hoursLabel,t.hours); setText(el.minutesLabel,t.minutes); setText(el.secondsLabel,t.seconds);
  setText(el.venueEyebrow,t.venue); setText(el.timelineEyebrow,t.timelineEyebrow); setText(el.timelineHeading,t.timeline); setText(el.wishesEyebrow,t.wishesEyebrow);
  setText(el.rsvpEyebrow,t.rsvpEyebrow); setText(el.rsvpHeading,t.rsvp); setText(el.nameLabel,t.name); el.guestName.placeholder=t.namePlaceholder;
  setText(el.attendanceLegend,t.attendance); setText(el.attendYes,t.yes); setText(el.attendNo,t.no); setText(el.guestCountLabel,t.guests); setText(el.wishLabel,t.wish); el.guestWish.placeholder=t.wishPlaceholder; setText(el.submitButton,t.submit);
  setText(el.footerWaiting,t.waiting); setText(el.footerLove,t.signature);
}

function renderNamesAndDate(){
  const {groom,bride}=state.record.names; setText(el.heroGroom,groom); setText(el.heroBride,bride); setText(el.groomInitial,groom?.[0]||'Б'); setText(el.brideInitial,bride?.[0]||'А');
  setText(el.signatureNames,names()); setText(el.footerNames,names());
  const d=state.weddingDate; setText(el.heroDate,`${String(d.getDate()).padStart(2,'0')} · ${String(d.getMonth()+1).padStart(2,'0')} · ${d.getFullYear()}`);
  document.title=`${groom} & ${bride} — свадебное приглашение`;
}

function renderInvitation(){ const invite=localized(state.record.invitation); setText(el.invitationTitle,invite.title); setText(el.invitationText,invite.text); }

function renderCalendar(){
  const t=UI[state.lang],d=state.weddingDate,year=d.getFullYear(),month=d.getMonth(),day=d.getDate();
  setText(el.calendarMonth,t.months[month]); setText(el.calendarYear,year);
  const nodes=t.weekdays.map(x=>{const s=document.createElement('span');s.className='weekday';s.textContent=x;return s});
  const first=(new Date(year,month,1).getDay()+6)%7; for(let i=0;i<first;i++)nodes.push(document.createElement('span'));
  const total=new Date(year,month+1,0).getDate(); for(let n=1;n<=total;n++){const s=document.createElement('span');s.textContent=n;if(n===day)s.className='is-wedding';nodes.push(s)}
  el.calendarGrid.replaceChildren(...nodes); const weekday=new Intl.DateTimeFormat(state.lang==='ky'?'ky-KG':state.lang==='kk'?'kk-KZ':'ru-RU',{weekday:'long'}).format(d); setText(el.calendarNote,t.calendarNote(weekday,d.toLocaleTimeString('ru-RU',{hour:'2-digit',minute:'2-digit'})));
}

function renderVenue(){
  const venue=localized(state.record.venue?.content); setText(el.venueHeading,venue.name); setText(el.venueType,venue.type); setText(el.venueAddress,venue.address);
  const encoded=encodeURIComponent(venue.address||venue.name||''); const map=state.record.venue?.map||{};
  el.googleMapLink.href=map.google_url||`https://www.google.com/maps/search/?api=1&query=${encoded}`; el.twoGisLink.href=map.two_gis_url||`https://2gis.kg/search/${encoded}`;
  const show=map.enabled!==false; el.googleMapLink.hidden=!show; el.twoGisLink.hidden=!show;
}

function renderTimeline(){
  const items=normalizeCeremonies(state.record.ceremonies).sort((a,b)=>(a.sort_order||0)-(b.sort_order||0)).slice(0,5).map(item=>{const c=localized(item.content);const li=document.createElement('li');li.className='reveal';li.innerHTML=`<time>${item.time||''}</time><div><h3></h3><p></p></div>`;li.querySelector('h3').textContent=c.title||'';li.querySelector('p').textContent=c.text||'';return li});
  el.timelineList.replaceChildren(...items); observeReveals();
}

function renderWishes(){ const enabled=state.record.wish_block?.enabled!==false; el.wishesSection.hidden=!enabled;if(!enabled)return;const w=localized(state.record.wish_block?.content);setText(el.wishesHeading,w.title);setText(el.wishesText,w.text); }
function setGuestCount(value){
  const next=String(value||'1');el.guestCount.value=next;setText(el.guestCountValue,next);
  el.guestCountOptions.querySelectorAll('[data-count]').forEach(button=>{const selected=button.dataset.count===next;button.classList.toggle('is-selected',selected);button.setAttribute('aria-selected',String(selected))});
}
function closeGuestCount(){el.guestCountPicker.classList.remove('is-open');el.guestCountButton.setAttribute('aria-expanded','false')}
function renderRsvp(){
  const r=state.record.rsvp||{};$('.rsvp-section').hidden=r.enabled===false;el.wishField.hidden=r.allow_guest_wish===false;
  const max=Math.max(1,Math.min(20,Number(r.max_guests)||10)),current=Math.min(max,Math.max(1,Number(el.guestCount.value)||1));
  el.guestCount.replaceChildren(...Array.from({length:max},(_,i)=>{const o=document.createElement('option');o.value=i+1;o.textContent=i+1;return o}));
  el.guestCountOptions.replaceChildren(...Array.from({length:max},(_,i)=>{const value=String(i+1),button=document.createElement('button');button.type='button';button.dataset.count=value;button.setAttribute('role','option');button.textContent=value;return button}));
  setGuestCount(current);
}
function renderLanguageMenu(){ const langs=enabledLanguages();el.languageMenu.hidden=previewMode||langs.length<2;if(el.languageMenu.hidden)return;const labels={ru:'RU',ky:'KG',kk:'KZ'};setText(el.currentLanguage,labels[state.lang]);el.languageOptions.replaceChildren(...langs.map(code=>{const b=document.createElement('button');b.type='button';b.dataset.lang=code;b.textContent=labels[code];b.className=code===state.lang?'is-active':'';return b})); }

function render(){ renderStaticLabels();renderNamesAndDate();renderInvitation();renderCalendar();renderVenue();renderTimeline();renderWishes();renderRsvp();renderLanguageMenu();updateCountdown(); }

function updateCountdown(){
  let diff=Math.max(0,state.weddingDate.getTime()-Date.now());const days=Math.floor(diff/86400000);diff%=86400000;const hours=Math.floor(diff/3600000);diff%=3600000;const minutes=Math.floor(diff/60000);const seconds=Math.floor((diff%60000)/1000);
  $('[data-countdown-days]').textContent=String(days).padStart(3,'0');$('[data-countdown-hours]').textContent=String(hours).padStart(2,'0');$('[data-countdown-minutes]').textContent=String(minutes).padStart(2,'0');$('[data-countdown-seconds]').textContent=String(seconds).padStart(2,'0');
}
function startCountdown(){ clearInterval(state.timer);updateCountdown();state.timer=setInterval(updateCountdown,1000); }

let revealObserver;
function observeReveals(){ revealObserver ||= new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target)}}),{threshold:.18});document.querySelectorAll('.reveal:not(.is-visible)').forEach(node=>revealObserver.observe(node)); }

async function loadInvitation(){
  if(previewMode){document.body.classList.add('preview-mode');document.body.classList.remove('is-loading');state.record=FALLBACK;state.weddingDate=parseDate(FALLBACK.date);render();$('.hero-copy').classList.add('is-visible');return}
  try{const response=await fetch(`${API_BASE}/${encodeURIComponent(publicId)}`,{headers:{Accept:'application/json'}});if(!response.ok)throw new Error(`HTTP ${response.status}`);state.record=mergeRecord(await response.json())}
  catch(error){console.warn('Invitation fallback:',error);state.record=FALLBACK}
  const langs=enabledLanguages(),stored=normalizeLang(localStorage.getItem('blue-conservatory-language'));const preferred=normalizeLang(state.record.languages?.default);state.lang=langs.includes(stored)?stored:(langs.includes(preferred)?preferred:langs[0]||'ru');state.weddingDate=parseDate(state.record.date);render();startCountdown();observeReveals();document.body.classList.remove('is-loading');el.siteLoader.classList.add('is-hidden');
}

el.languageToggle.addEventListener('click',()=>{const open=el.languageMenu.classList.toggle('is-open');el.languageToggle.setAttribute('aria-expanded',String(open))});
el.languageOptions.addEventListener('click',event=>{const code=event.target.dataset.lang;if(!code)return;state.lang=normalizeLang(code);localStorage.setItem('blue-conservatory-language',state.lang);render();el.languageMenu.classList.remove('is-open');el.languageToggle.setAttribute('aria-expanded','false')});
el.guestCountButton.addEventListener('click',()=>{const open=!el.guestCountPicker.classList.contains('is-open');closeGuestCount();if(open){el.guestCountPicker.classList.add('is-open');el.guestCountButton.setAttribute('aria-expanded','true')}});
el.guestCountOptions.addEventListener('click',event=>{const button=event.target.closest('[data-count]');if(!button)return;setGuestCount(button.dataset.count);closeGuestCount();el.guestCountButton.focus()});
document.addEventListener('click',event=>{if(!el.languageMenu.hidden&&!el.languageMenu.contains(event.target)){el.languageMenu.classList.remove('is-open');el.languageToggle.setAttribute('aria-expanded','false')}if(!el.guestCountPicker.contains(event.target))closeGuestCount()});
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeGuestCount()});
el.rsvpForm.addEventListener('submit',async event=>{
  event.preventDefault();if(previewMode)return;const t=UI[state.lang],data=new FormData(el.rsvpForm),payload={name:String(data.get('name')||'').trim(),attendance:data.get('attendance')==='true',count:Number(data.get('count')||1),wish:String(data.get('wish')||'').trim()};if(!payload.name)return;
  el.submitButton.disabled=true;setText(el.submitButton,t.sending);setText(el.formStatus,'');
  try{const response=await fetch(`${API_BASE}/${encodeURIComponent(state.record.public_id||publicId)}/rsvp`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});if(!response.ok)throw new Error(`HTTP ${response.status}`);setText(el.formStatus,t.success);el.rsvpForm.reset();setGuestCount('1')}catch(error){console.error(error);setText(el.formStatus,t.error)}finally{el.submitButton.disabled=false;setText(el.submitButton,t.submit)}
});

loadInvitation();
