import type {Chat,Person,Photo,Email,CalEvent,Note,Reminder,FileItem,Alarm,PhoneSettings} from './types';
import {offsetDate} from './types';
const msg=(from:'me'|'them',text:string,at:string,kind?:'text'|'voice'|'image')=>({id:`${from}-${at}-${text.slice(0,9)}`,from,text,at,kind});
export const seededChats:Chat[]=[
{id:'freya',name:'Freya',subtitle:'last seen today at 16:24',avatar:'F',accent:'#a98588',pinned:true,unread:1,messages:[
msg('them','Noah tadi nyariin dinosaurusnya. Katanya ketinggalan di mobil kamu.','09:12'),msg('me','Ada di kursi belakang. Nanti aku anter.','09:14'),msg('them','Nggak usah repot, Li. Aku bisa ambil besok.','09:16'),msg('me','Sekalian mau ambil berkas di daerah sana.','09:17'),msg('them','Kamu selalu punya alasan, ya.','09:19'),msg('me','Kebetulan yang cukup meyakinkan.','09:20'),msg('them','Haha. Oke. Tapi jangan malam-malam. Noah harus tidur cepat.','09:22'),msg('me','I know. Kamu juga jangan lupa makan.','09:23'),msg('them','Kamu masih suka ngingetin itu.','09:26'),msg('me','Some habits stay.','09:28'),msg('them','Anyway, makasih udah jagain Noah weekend kemarin.','16:24')]},
{id:'mama',name:'Mama',subtitle:'online',avatar:'M',accent:'#927c69',pinned:true,unread:2,messages:[msg('them','Liam, Noah sudah makan belum?','08:11'),msg('me','Sudah, Ma. Sandwich sama buah.','08:13'),msg('them','Jangan cuma sandwich. Anak kecil butuh makan yang benar.','08:14'),msg('me','Noted, boss.','08:14'),msg('them','Mama bukan boss kamu 😒','08:15'),msg('them','Oh iya, Minggu makan malam di rumah. Jangan lupa ajak Freya kalau dia sempat.','12:09')]},
{id:'aiden',name:'Aiden',subtitle:'last seen today at 13:10',avatar:'A',accent:'#688597',pinned:true,messages:[msg('them','Meeting jam 10. Jangan jadi CEO yang telat.','08:32'),msg('me','Says the man who was late yesterday.','08:33'),msg('them','Traffic.','08:34'),msg('me','Sure.','08:34'),msg('them','Btw Noah tadi ngomong “Tante Fey cantik”. Turunan siapa sih bocah itu.','13:10')]},
{id:'catherine',name:'Catherine',subtitle:'last seen recently',avatar:'C',accent:'#a08eac',unread:1,messages:[msg('them','Noah lagi bikin gambar keluarga. Dia gambar kamu gede banget 😭','11:07'),msg('me','That sounds accurate.','11:08'),msg('them','Terus Freya di sebelah dia. Kamu di ujung. HAHAHA','11:09'),msg('me','Thanks for the update, Catherine.','11:10'),msg('them','Sama-sama, dear brother. Beliin susu Noah nanti ya!','15:42')]},
{id:'noah',name:'Noah 🦕',subtitle:'managed by Mama & Catherine',avatar:'🦕',accent:'#86a4a1',unread:1,messages:[msg('them','DADDD NOAH MAU KE TAMANNN','07:42'),msg('me','Weekend, buddy. Promise.','07:44'),msg('them','🦖🦕🦖🦕','07:45'),msg('them','Voice note from Noah (0:09)','08:00','voice'),msg('me','Love you, little man.','08:02'),msg('them','Foto Noah sama gambar dinosaurusnya','14:22','image')]},
{id:'client',name:'Daniel • Hartono Group',subtitle:'business account',avatar:'D',accent:'#7f8eaa',unread:1,messages:[msg('them','Good morning, Liam. Revised proposal looks solid.','09:41'),msg('me','Glad to hear that. The financial appendix is updated as well.','09:44'),msg('them','Can we move the call to Thursday at 2 PM?','10:05'),msg('me','Thursday works. I’ll ask my team to update the invite.','10:08'),msg('them','Perfect. Thank you.','11:58')]},
{id:'gym',name:'06:00 CLUB 🏋️',subtitle:'You, Aiden, Rafa + 5',avatar:'🏋️',accent:'#786f68',group:true,messages:[msg('them','Rafa: Leg day besok. No excuses.','19:44'),msg('me','6 sharp.','19:50'),msg('them','Aiden: Ada yang ngaku busy tiap leg day.','20:01'),msg('me','Tag me next time.','20:02'),msg('them','Rafa: Besok siapa telat traktir kopi.','20:10')]},
{id:'maya',name:'Maya • Office',subtitle:'operations team',avatar:'M',accent:'#72958b',messages:[msg('them','Pak Liam, kontrak vendor sudah saya taruh di folder shared.','14:23'),msg('me','Thanks, Maya. Tolong follow up legal sebelum Jumat.','14:25'),msg('them','Siap, Pak.','14:26')]},
{id:'rafa',name:'Rafa',subtitle:'gym buddy',avatar:'R',accent:'#947467',messages:[msg('them','Bro, jam 6 besok?','21:00'),msg('me','See you there.','21:03')]}
];
export const seededContacts:Person[]=[
{id:'freya',name:'Freya',number:'+62 812 9000 1001',email:'freya@example.test',avatar:'F',accent:'#a98588',role:'Personal',favorite:true},
{id:'noah',name:'Noah',number:'—',email:'—',avatar:'🦕',accent:'#86a4a1',role:'My son',favorite:true},
{id:'mama',name:'Mama',number:'+62 812 9000 1002',email:'mama@example.test',avatar:'M',accent:'#927c69',role:'Family',favorite:true},
{id:'aiden',name:'Aiden',number:'+62 812 9000 1003',email:'aiden@example.test',avatar:'A',accent:'#688597',role:'Family',favorite:true},
{id:'catherine',name:'Catherine',number:'+62 812 9000 1004',email:'catherine@example.test',avatar:'C',accent:'#a08eac',role:'Family'},
{id:'client',name:'Daniel Hartono',number:'+62 812 9000 2011',email:'daniel@example.test',avatar:'D',accent:'#7f8eaa',role:'Client'},
{id:'maya',name:'Maya Putri',number:'+62 812 9000 2020',email:'maya@example.test',avatar:'M',accent:'#72958b',role:'Operations'},
{id:'rafa',name:'Rafa',number:'+62 812 9000 1085',email:'rafa@example.test',avatar:'R',accent:'#947467',role:'Gym friend'}
];
// Optional remote photography with self-contained gradient fallbacks; the UI works without network access.
export const seededPhotos:Photo[]=[
{id:'p1',title:'Sunday with Noah',album:'Family',date:offsetDate(-2),url:'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=700&q=78',colors:'#cdb69b,#536e75',emoji:'🦕',favorite:true},
{id:'p2',title:'A quiet morning',album:'Recents',date:offsetDate(-1),url:'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=700&q=78',colors:'#6b5548,#dac1a2',emoji:'☕'},
{id:'p3',title:'The drive home',album:'Recents',date:offsetDate(-4),url:'https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=700&q=78',colors:'#29364d,#c3a37c',emoji:'🌙'},
{id:'p4',title:'Boardroom, 18th floor',album:'Work',date:offsetDate(-6),url:'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=700&q=78',colors:'#8a8986,#494c4d',emoji:'🏙️'},
{id:'p5',title:'Coffee between meetings',album:'Work',date:offsetDate(-7),url:'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=700&q=78',colors:'#87674d,#ddae82',emoji:'☕'},
{id:'p6',title:'Saturday workout',album:'Gym',date:offsetDate(-9),url:'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=700&q=78',colors:'#373f44,#a2998c',emoji:'🏋️'},
{id:'p7',title:'Little sneakers',album:'Family',date:offsetDate(-10),url:'https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=700&q=78',colors:'#9ab1a4,#cec6b4',emoji:'🧸',favorite:true},
{id:'p8',title:'Back to work',album:'Work',date:offsetDate(-12),url:'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=700&q=78',colors:'#a59c8d,#404747',emoji:'📊'},
{id:'p9',title:'Morning run',album:'Gym',date:offsetDate(-13),url:'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=700&q=78',colors:'#4d5f67,#928975',emoji:'👟'},
{id:'p10',title:'Weekend sky',album:'Recents',date:offsetDate(-14),url:'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=700&q=78',colors:'#677d79,#e3c7a3',emoji:'🌤️'},
{id:'p11',title:'Dinner at Mama’s',album:'Family',date:offsetDate(-16),url:'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&q=78',colors:'#766653,#d4a679',emoji:'🍽️'},
{id:'p12',title:'After hours',album:'Work',date:offsetDate(-18),url:'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=78',colors:'#354450,#a0abae',emoji:'🏢'}
];
export const seededEmails:Email[]=[
{id:'e1',sender:'Daniel Hartono',to:'liam@liamgroup.example',subject:'Re: Q4 Strategic Partnership',body:'Hi Liam,\n\nThe latest deck looks excellent. Could you please share the revised financial projections before our Thursday discussion?\n\nLooking forward to getting this across the line.\n\nBest,\nDaniel',date:'10:42',folder:'inbox',starred:true},
{id:'e2',sender:'Maya Putri',to:'liam@liamgroup.example',subject:'Monday Executive Briefing',body:'Selamat pagi Pak Liam,\n\nTerlampir ringkasan operasional minggu ini. Ada tiga hal yang butuh approval Bapak, terutama untuk vendor baru.\n\nTerima kasih,\nMaya',date:'09:06',folder:'inbox'},
{id:'e3',sender:'Finance Department',to:'liam@liamgroup.example',subject:'Monthly Financial Review — October',body:'Dear Mr. Liam,\n\nThe October management reports are ready for review. All numbers are preliminary pending sign-off.\n\nFinance Team',date:'Yesterday',folder:'inbox'},
{id:'e4',sender:'Liam',to:'legal@liamgroup.example',subject:'Vendor agreement — follow up',body:'Please prioritize the final redline and send me a summary of outstanding issues.\n\nRegards,\nLiam',date:'Tuesday',folder:'sent'},
{id:'e5',sender:'Liam',to:'daniel@example.test',subject:'Thursday schedule',body:'Hi Daniel,\n\nFollowing up on our proposed 2 PM call...',date:'Draft',folder:'drafts'}
];
export const seededEvents:CalEvent[]=[
{id:'ev1',date:offsetDate(0),time:'09:30',title:'Executive stand-up',place:'Liam Group • Floor 18',kind:'work'},
{id:'ev2',date:offsetDate(0),time:'18:00',title:'Pick up Noah',place:'Mama’s house',kind:'family'},
{id:'ev3',date:offsetDate(1),time:'06:00',title:'Training with Rafa',place:'Altitude Fitness',kind:'gym'},
{id:'ev4',date:offsetDate(1),time:'14:00',title:'Daniel • Partner review',place:'Conference Room A',kind:'work'},
{id:'ev5',date:offsetDate(2),time:'12:30',title:'Client lunch',place:'The Oak Bistro',kind:'work'},
{id:'ev6',date:offsetDate(3),time:'10:00',title:'Noah’s little adventure',place:'City Aquarium',kind:'family'},
{id:'ev7',date:offsetDate(4),time:'19:00',title:'Dinner at Mama’s',place:'Family house',kind:'family'},
{id:'ev8',date:offsetDate(-1),time:'16:00',title:'Legal contract review',place:'Office',kind:'work'}
];
export const seededNotes:Note[]=[
{id:'n1',title:'Things Noah said 🦕',body:'“Daddy, why does the moon follow our car?”\n\n“Can Tante Freya come to the dinosaurs too?”\n\nRemember to buy the green T-Rex he liked.',updated:Date.now()-10000},
{id:'n2',title:'Monday priorities',body:'• Daniel partnership deck\n• Sign vendor agreement\n• Talk to Maya about new hires\n• 4 PM: review investment memo',updated:Date.now()-600000},
{id:'n3',title:'Groceries',body:'Oat milk\nEggs\nStrawberries for Noah\nWhole-wheat bread\nCoffee beans\nDish soap',updated:Date.now()-1700000},
{id:'n4',title:'Unsent thoughts',body:'It’s strange how the house feels less quiet when Freya is around.\n\nNot everything needs to be said right away.',updated:Date.now()-86400000},
{id:'n5',title:'Gym plan',body:'MON – Push\nTUE – Legs\nTHU – Pull\nSAT – Cardio + core\n\nGoal: consistency, not numbers.',updated:Date.now()-200000000}
];
export const seededReminders:Reminder[]=[
{id:'r1',title:'Buy Noah’s favorite strawberry milk',date:offsetDate(0),time:'17:00',done:false},
{id:'r2',title:'Call legal team',date:offsetDate(1),time:'10:30',done:false},
{id:'r3',title:'Bring dinosaur toy to Freya',date:offsetDate(1),time:'18:00',done:false},
{id:'r4',title:'Book weekend activity',date:offsetDate(2),time:'',done:false},
{id:'r5',title:'Approve quarterly budget',date:offsetDate(-1),time:'14:00',done:true}
];
export const seededFiles:FileItem[]=[
{id:'f1',name:'Business',folder:'root',type:'folder',content:''},
{id:'f2',name:'Personal',folder:'root',type:'folder',content:''},
{id:'f3',name:'Q4_Partnership_Overview.pdf',folder:'f1',type:'pdf',content:'LIAM GROUP\nQ4 PARTNERSHIP OVERVIEW\n\nStrategic priorities\n1. Expand long-term client partnerships\n2. Improve operational efficiency\n3. Build a sustainable team culture\n\nConfidential • Fictional demo document'},
{id:'f4',name:'October_financials.pdf',folder:'f1',type:'pdf',content:'LIAM GROUP — OCTOBER FINANCIAL REPORT\n\nRevenue: Simulated\nOperating Expenses: Simulated\nOutlook: Stable\n\nThis is a fictional document for the story.'},
{id:'f5',name:'Team_meeting_notes.txt',folder:'f1',type:'txt',content:'Monday executive briefing\n- Client proposals\n- Quarterly objectives\n- Operations update'},
{id:'f6',name:'Noah_weekend_ideas.txt',folder:'f2',type:'txt',content:'Aquarium\nDinosaur exhibit\nPicnic\nLibrary story time'},
{id:'f7',name:'Gym_schedule.txt',folder:'f2',type:'txt',content:'Monday: Push\nTuesday: Legs\nThursday: Pull\nSaturday: Run'}
];
export const seededAlarms:Alarm[]=[{id:'a1',time:'05:30',label:'Gym mornings',enabled:true},{id:'a2',time:'07:00',label:'Workdays',enabled:true},{id:'a3',time:'09:00',label:'Sunday slow start',enabled:false}];
export const defaultSettings:PhoneSettings={name:'Liam’s iPhone',wallpaper:0,appearance:'light',notifications:true,sounds:true,haptics:true,brightness:90,showPreviews:true};
export const songs=[
{id:'s1',title:'Somewhere Between',artist:'The Midnight Letters',album:'After Hours',duration:224,color:'#6c6172'},
{id:'s2',title:'Under The Same Sky',artist:'Elliot Vale',album:'Homebound',duration:198,color:'#6d8b8d'},
{id:'s3',title:'For The Little Things',artist:'Adrian North',album:'Small Worlds',duration:241,color:'#b58d80'},
{id:'s4',title:'Nothing Left Unsaid',artist:'Velvet Sunday',album:'Blue Hours',duration:206,color:'#525a76'},
{id:'s5',title:'Drive Home Slowly',artist:'June & August',album:'Ordinary Days',duration:189,color:'#9f8770'},
{id:'s6',title:'Still, Somehow',artist:'The Quiet Rooms',album:'Quiet Weather',duration:212,color:'#7c9182'}
];
export const instaPosts=[
{id:'i1',owner:'liam.w',caption:'Between meetings. A little quiet helps.',likes:428,photo:'p2',comments:[{name:'aiden.w',text:'another coffee? seriously?'},{name:'rafa',text:'☕'}]},
{id:'i2',owner:'liam.w',caption:'Small moments, big memories. The dinosaur phase continues. 🦕',likes:1167,photo:'p7',comments:[{name:'catherine',text:'favorite uncle says hi'},{name:'freya',text:'the tiny shoes 🥹'}]},
{id:'i3',owner:'liam.w',caption:'Early mornings.',likes:379,photo:'p6',comments:[{name:'rafa',text:'06.00 club never sleeps'}]},
{id:'i4',owner:'liam.w',caption:'Always something worth building.',likes:711,photo:'p4',comments:[{name:'daniel.h',text:'Congrats team!'}]}
];
