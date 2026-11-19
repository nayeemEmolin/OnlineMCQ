/* Banking ICT 50-question mock test for the CAAB interactive notebook */
(() => {
  "use strict";
  const rows = [
["AI, ML ও Deep Learning-এর সঠিক সম্পর্ক কোনটি?","ML হলো AI-এর অংশ; Deep Learning হলো ML-এর অংশ","AI হলো ML-এর অংশ, ML হলো Deep Learning-এর অংশ","তিনটি সম্পূর্ণ সম্পর্কহীন","Deep Learning হলো AI-এর বাইরে","অন্তর্ভুক্তির ক্রম: AI ⊃ ML ⊃ Deep Learning।"],
["Deep Learning সাধারণত কোন প্রযুক্তির ওপর নির্ভর করে?","বহুস্তর neural network","শুধু spreadsheet formula","শুধু relational table","শুধু firewall rule","Deep Learning বহু স্তরের neural network ব্যবহার করে।"],
["Generative AI-এর একটি সীমাবদ্ধতা কী?","ভুল তথ্যও আত্মবিশ্বাসের সঙ্গে তৈরি করতে পারে","কোনো input data দরকার হয় না","শুধু bank transfer করে","কখনো bias থাকে না","Generated answer যাচাই না করলে hallucination বা ভুল তথ্য ছড়াতে পারে।"],
["ব্যাংকে credit scoring-এ ML ব্যবহারের ক্ষেত্রে কোনটি জরুরি?","ডেটার মান, bias ও সিদ্ধান্ত যাচাই","শুধু বেশি data সংগ্রহ","সব সিদ্ধান্ত ব্যাখ্যা ছাড়া স্বয়ংক্রিয় করা","গ্রাহকের সম্মতি উপেক্ষা","Credit scoring-এ data bias ও ভুল সিদ্ধান্তের প্রভাব বেশি; governance দরকার।"],
["IaaS-এ সাধারণত কী service দেওয়া হয়?","Virtual server, storage ও network","ব্যবহার-প্রস্তুত email app মাত্র","শুধু programming language","শুধু customer support","IaaS হলো Infrastructure as a Service।"],
["PaaS-এর মূল সুবিধা কী?","Application তৈরির platform পাওয়া","প্রতিটি server নিজে বানানো","শুধু bank card issue","শুধু public website দেখা","PaaS development platform/runtime দেয়; infrastructure management কমায়।"],
["SaaS-এর উদাহরণ কোনটি?","Provider-hosted software browser/app দিয়ে ব্যবহার","নিজস্ব CPU তৈরি","network cable স্থাপন","শুধু database normalization","SaaS-এ প্রস্তুত software service হিসেবে ব্যবহার করা হয়।"],
["Hybrid cloud বলতে কী বোঝায়?","একাধিক ধরনের cloud environment সমন্বয়","সব data এক public website-এ রাখা","কোনো internet ছাড়া এক PC","শুধু mobile banking","Hybrid deployment একাধিক cloud environment যুক্ত করতে পারে।"],
["Blockchain সম্পর্কে সঠিক বক্তব্য কোনটি?","Shared ledger; record alteration শনাক্ত করা কঠিন","এটি সবসময় গোপনীয়তা নিশ্চিত করে","এটি অবশ্যই cryptocurrency","এটি একটি antivirus","Blockchain ledger design; এটি নিজে currency বা সম্পূর্ণ security guarantee নয়।"],
["সব digital payment কি cryptocurrency?","না; bank/card/MFS payment-ও digital payment","হ্যাঁ, সবই cryptocurrency","শুধু QR payment cryptocurrency","শুধু online banking cryptocurrency","Digital transaction ও crypto asset সমার্থক নয়।"],
["IoT-এর উদাহরণ কোনটি?","Internet-সংযুক্ত sensor-সহ smart meter","Offline কাগজের হিসাবখাতা","শুধু keyboard","একটি data warehouse","IoT device sensor/actuator দিয়ে data network-এ আদান-প্রদান করে।"],
["IoT device-এ কোন নিরাপত্তা কাজটি আগে করা উচিত?","Default password বদলানো ও update করা","এক password সব device-এ রাখা","সব port public করা","firmware update বন্ধ করা","Unique credential ও patch দুর্বল IoT device-কে সুরক্ষিত করতে সহায়তা করে।"],
["Big Data-র প্রচলিত 3V কোনটি?","Volume, Velocity, Variety","Value, Voltage, Version","Visual, Voice, Video","Virtual, Verified, Variable","3V হলো data-এর পরিমাণ, প্রবাহের গতি ও বৈচিত্র্য।"],
["Data Mining-এর কাজ কী?","ডেটা থেকে pattern বা সম্পর্ক খুঁজে বের করা","ডেটা কেবল encrypt করা","hardware install","email পাঠানো","Data mining লুকানো pattern ও relationship শনাক্ত করে।"],
["Data Warehouse কেন ব্যবহৃত হয়?","বিশ্লেষণের জন্য বিভিন্ন উৎসের data সংগঠিত রাখা","virus scan","network cable route","password reset","Warehouse reporting ও analysis-এর জন্য integrated data রাখে।"],
["FinTech বলতে কী বোঝায়?","Financial Technology","Financial Terminal","Final Technology Transfer","Finance Token","FinTech হলো technology-enabled financial service/innovation।"],
["RegTech-এর প্রধান ব্যবহার কোনটি?","Regulatory compliance ও reporting-এ প্রযুক্তি ব্যবহার","শুধু loan বিতরণ","cash গণনা","ATM cash refill","RegTech compliance, monitoring ও reporting সহজ করতে পারে।"],
["MFS-এর পূর্ণরূপ কী?","Mobile Financial Services","Money Funding System","Mobile File Storage","Merchant Finance Switch","MFS হলো মোবাইলভিত্তিক আর্থিক সেবা।"],
["Mobile banking, MFS ও agent banking সম্পর্কে সঠিকটি কোনটি?","সম্পর্কিত হলেও delivery model এক নয়","তিনটিই একই সংজ্ঞা","Agent banking-এ অনুমোদিত agent লাগে না","MFS কেবল ATM service","এগুলো ভিন্ন channel/service model।"],
["API-এর পূর্ণরূপ কী?","Application Programming Interface","Applied Payment Identity","Aviation Program Internet","Automatic Processing Input","API software system-এর মধ্যে নির্ধারিত যোগাযোগ interface দেয়।"],
["Open Banking-এ তৃতীয় পক্ষের সঙ্গে তথ্য/সেবা যুক্ত করার আগে কী জরুরি?","গ্রাহকের সম্মতি ও নিরাপদ access","সব গ্রাহকের data public করা","একটি shared password","কোনো access log না রাখা","Open banking consent ও secure authorization-নির্ভর।"],
["Tokenization-এর উদ্দেশ্য কী?","আসল account/card number-এর বদলে token ব্যবহার","OTP-কে public করা","PIN plain text-এ রাখা","QR code delete করা","Tokenization sensitive identifier exposure কমাতে substitute token দেয়।"],
["NFC সাধারণত কোন কাজে ব্যবহৃত হয়?","কাছাকাছি device-এর wireless communication/contactless payment","দূরপাল্লার satellite navigation","চেকের অক্ষর পড়া","email encryption","Near Field Communication কাছের device-এ contactless data exchange করে।"],
["QR payment ও NFC-এর পার্থক্য কী?","QR-এ code scan; NFC-তে নিকট-দূরত্বের wireless link","দুটিই একই radio protocol","QR-এর জন্য camera কখনো লাগে না","NFC হলো printed barcode","QR optical code; NFC near-field radio communication।"],
["Bangla QR merchant payment কোন payment infrastructure-এর মাধ্যমে route হতে পারে?","NPSB","শুধু SWIFT","শুধু DNS","শুধু MICR","Bangladesh Bank-এর guideline-এ NPSB-র মাধ্যমে Bangla QR merchant payment route-এর উল্লেখ আছে।"],
["TakaPay কী?","বাংলাদেশের card scheme/কার্ড পেমেন্ট উদ্যোগ","একটি antivirus","একটি database language","একটি email protocol","TakaPay বাংলাদেশের card scheme; চালু সেবার সর্বশেষ তথ্য Bangladesh Bank থেকে মিলিয়ে নিন।"],
["e-KYC কী?","ডিজিটালভাবে গ্রাহকের পরিচয় যাচাই","শুধু email notification","ATM cash counting","ফাইল backup","Electronic Know Your Customer digital identity verification process।"],
["Biometric authentication-এর উদাহরণ কোনটি?","Fingerprint দিয়ে পরিচয় যাচাই","Password","OTP","Security question","Fingerprint শারীরিক বৈশিষ্ট্যভিত্তিক biometric factor।"],
["OTP সম্পর্কে সঠিক নিরাপত্তা নিয়ম কোনটি?","OTP কাউকে জানানো যাবে না","OTP-কে permanent password বানাতে হবে","ব্যাংক কর্মী চাইলে share করতে হবে","OTP public notice-এ লিখতে হবে","One-Time Password কাউকে দিলে account compromise হতে পারে।"],
["CIA Triad-এ Confidentiality কী?","শুধু অনুমোদিত ব্যক্তি তথ্য দেখতে পারবে","তথ্য যেকেউ বদলাতে পারবে","সেবা সবসময় বন্ধ থাকবে","backup না রাখা","Confidentiality অননুমোদিত disclosure রোধ করে।"],
["Integrity কী নিশ্চিত করতে চায়?","অননুমোদিত পরিবর্তন থেকে তথ্যের সুরক্ষা","সবাইকে তথ্য দেখানো","সেবা সবসময় অনুপলব্ধ","শুধু encryption key রাখা","Integrity তথ্যের যথার্থতা ও অননুমোদিত পরিবর্তন নিয়ন্ত্রণ করে।"],
["Availability-এর অর্থ কী?","প্রয়োজনে অনুমোদিত ব্যবহারকারীর system/data পাওয়া","তথ্য গোপন রাখা মাত্র","সব file hash করা","ব্যবহারকারী মুছে ফেলা","Availability হলো প্রয়োজনের সময় সেবা সচল ও ব্যবহারযোগ্য থাকা।"],
["Encryption ও Hashing-এর সঠিক পার্থক্য কোনটি?","Encryption key দিয়ে decrypt করা যায়; hash digest সাধারণত উল্টানো যায় না","দুটিই একই reversible process","Hashing-এ private key দিয়ে decrypt হয়","Encryption কেবল file size কমায়","Encryption গোপন করে এবং key দিয়ে ফেরত খোলা যায়; hashing digest দেয়।"],
["Firewall-এর প্রধান কাজ কী?","নিয়ম অনুসারে network traffic allow/block","শুধু file থেকে virus মুছে ফেলা","cheque scan করা","cloud storage বিক্রি","Firewall inbound/outbound network traffic filter করে।"],
["Antivirus কী করে?","Malware শনাক্ত/প্রতিরোধে সাহায্য করে","NPSB transaction settle","domain name resolve","শুধু internet speed বাড়ায়","Antivirus malicious file/activity শনাক্তে সহায়তা করে, তবে পূর্ণ নিশ্চয়তা নয়।"],
["IDS সাধারণত কী করে?","সন্দেহজনক activity শনাক্ত করে alert দেয়","শুধু transaction settle","data warehouse বানায়","সব network cable বিচ্ছিন্ন করে","Intrusion Detection System event detect ও alert করে।"],
["IPS-এর অতিরিক্ত কাজ কী হতে পারে?","সন্দেহজনক traffic block/প্রতিরোধ","শুধু log report দেখা","QR code print","biometric enroll","Intrusion Prevention System inline অবস্থায় traffic block করতে পারে।"],
["MFA-তে কোনটি প্রকৃত multi-factor?","Password এবং আলাদা security key","একই password দুবার","দুটি security question","দুটি PIN","MFA-তে ভিন্ন ধরনের factor দরকার—knowledge ও possession-এর মতো।"],
["Deepfake থেকে banking fraud ঠেকাতে কোন অভ্যাসটি সহায়ক?","অস্বাভাবিক payment request আলাদা channel-এ যাচাই","শুধু voice শুনে বড় transfer করা","OTP কলারের সঙ্গে ভাগ","video call দেখলেই identity নিশ্চিত ধরা","Deepfake voice/video নকল হতে পারে; independent verification জরুরি।"],
["PKI কী পরিচালনা করে?","Digital certificate ও public/private key-এর কাঠামো","শুধু ATM cash","মোবাইল signal","Data mining report","PKI certificate, identity binding ও cryptographic key management-এর framework।"],
["Digital signature কী সমর্থন করে?","Document-এর authenticity ও integrity যাচাই","গোপনীয়তা একাই নিশ্চিত","network bandwidth বাড়ানো","payment settlement","Signature authenticity ও integrity যাচাইয়ে সহায়তা করে; secrecy-র জন্য encryption আলাদা।"],
["5G কী?","Mobile network-এর পঞ্চম প্রজন্ম","পাঁচটি network cable","পঞ্চম generation firewall","একটি cloud deployment","5G হলো mobile telecommunications-এর পঞ্চম প্রজন্মের প্রযুক্তি।"],
["Edge computing-এর মূল বৈশিষ্ট্য কী?","Data তৈরির কাছাকাছি processing করা","সব data দূরবর্তী cloud-এ পাঠানো বাধ্যতামূলক","শুধু archive রাখা","Internet বন্ধ করা","Edge processing latency ও bandwidth কমাতে পারে।"],
["Green computing-এর লক্ষ্য কোনটি?","কম শক্তি ও পরিবেশগত প্রভাব নিয়ে ICT ব্যবহার","সব device দ্রুত বদলানো","data center cooling বন্ধ","e-waste বাড়ানো","Green computing energy efficiency ও lifecycle impact কমাতে চায়।"],
["Disaster Recovery ও Business Continuity-এর সঠিক পার্থক্য কোনটি?","DR system/data restore করে; BCP জরুরি service চালু রাখে","দুটিই একই antivirus","BCP কেবল data encrypt","DR হলো payment switch","DR recovery-কেন্দ্রিক; BCP disruption চলাকালে critical operation সচল রাখে।"],
["CBS-এর কাজ কোনটি?","শাখাগুলোকে কেন্দ্রীয় core banking system-এ যুক্ত করা","ATM-এ cash refill করা","SWIFT message পাঠানো মাত্র","চেকে magnetic ink ছাপা","Core banking system শাখা/চ্যানেলের account ও transaction management centralize করে।"],
["ATM ও POS-এর সঠিক মিল কোনটি?","ATM self-service cash/banking; POS merchant payment terminal","ATM payment terminal; POS cheque reader","দুটিই antivirus","ATM network; POS cloud model","ATM হলো automated teller machine; POS হলো point-of-sale device/service point।"],
["BEFTN ও RTGS-এর সঠিক পার্থক্য কোনটি?","BEFTN electronic funds transfer network; RTGS real-time gross settlement","দুটিই financial messaging service","BEFTN card scheme; RTGS barcode","RTGS হলো cheque-reading technology","BEFTN electronic inter-bank transfer network; RTGS individual transaction gross basis-এ real time settlement করে।"],
["SWIFT সম্পর্কে সঠিক বক্তব্য কোনটি?","Financial messaging network; নিজে customer fund ধরে বা settle করে না","একটি দেশের ATM network","একটি antivirus","সব crypto transaction-এর regulator","SWIFT financial institution-গুলোর secure standardized message বহন করে; funds রাখে বা settlement করে না।"],
["MICR কোন কাজে ব্যবহৃত হয়?","Cheque-এ magnetic ink character পড়তে","face recognition","QR payment scan","cloud backup","Magnetic Ink Character Recognition cheque processing-এ machine-readable character পড়ে।"]
  ];
  const questions = rows.map((r,i) => {
    const source = r.slice(1,5), shift = (i*3+1)%4;
    const options = source.map((_,j) => source[(j+shift)%4]);
    return {q:r[0], options, answer:options.indexOf(r[1]), explanation:r[5]};
  });
  const $ = id => document.getElementById(id);
  const start=$('bankMockStart'), submit=$('bankMockSubmit');
  if(!start||!submit) return;
  const reset=$('bankMockReset'), stage=$('bankMockStage'), card=$('bankMockCard'), nav=$('bankMockNav'), clock=$('bankMockClock'), progress=$('bankMockProgress'), result=$('bankMockResult');
  const labels=['ক','খ','গ','ঘ'], duration=30*60;
  let answers=Array(50).fill(null), current=0, finished=false, startedAt=0, interval=null;
  const timeText=s=>String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0');
  function updateNav(){
    nav.innerHTML=questions.map((_,i)=>'<button type="button" class="'+(answers[i]!==null?'answered ':'')+(i===current?'current':'')+'" data-jump="'+i+'" aria-label="প্রশ্ন '+(i+1)+'">'+(i+1)+'</button>').join('');
    nav.querySelectorAll('[data-jump]').forEach(b=>b.onclick=()=>{current=Number(b.dataset.jump);draw()});
    progress.textContent='উত্তর দেওয়া '+answers.filter(x=>x!==null).length+' / ৫০';
  }
  function draw(){
    const q=questions[current];
    card.innerHTML='<div class="bank-mock-q">প্রশ্ন '+(current+1)+' / ৫০ · '+q.q+'</div><div class="bank-mock-options">'+q.options.map((o,i)=>'<button type="button" class="opt '+(answers[current]===i?'selected':'')+'" data-option data-answer="'+i+'"><span class="letter">'+labels[i]+'.</span><span>'+o+'</span></button>').join('')+'</div>';
    card.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>{if(finished)return;answers[current]=Number(b.dataset.answer);draw();updateNav()});
    $('bankMockPrev').disabled=current===0;$('bankMockNext').disabled=current===49;updateNav();
  }
  function finish(timeout=false){
    if(finished)return;
    finished=true;clearInterval(interval);submit.disabled=true;reset.hidden=false;
    $('bankMockPrev').disabled=true;$('bankMockNext').disabled=true;
    const elapsed=Math.min(duration,Math.floor((Date.now()-startedAt)/1000));
    const correct=answers.reduce((n,a,i)=>n+(a===questions[i].answer?1:0),0);
    const attempted=answers.filter(a=>a!==null).length;
    clock.textContent=timeText(Math.max(0,duration-elapsed));
    result.hidden=false;
    result.innerHTML='<h4>'+(timeout?'সময় শেষ · ':'')+'ফলাফল: '+correct+' / ৫০</h4><p>সঠিক '+correct+' · ভুল '+(attempted-correct)+' · উত্তর দেননি '+(50-attempted)+' · সময় '+timeText(elapsed)+'</p>'+questions.map((q,i)=>'<div class="bank-mock-review"><b>'+String(i+1).padStart(2,'0')+'. '+q.q+'</b><span>আপনার উত্তর: '+(answers[i]===null?'উত্তর দেননি':labels[answers[i]]+'. '+q.options[answers[i]])+' · সঠিক: '+labels[q.answer]+'. '+q.options[q.answer]+'</span><div>'+q.explanation+'</div></div>').join('');
    result.scrollIntoView({behavior:'smooth',block:'start'});
  }
  start.onclick=()=>{answers=Array(50).fill(null);current=0;finished=false;startedAt=Date.now();stage.hidden=false;result.hidden=true;result.innerHTML='';start.disabled=true;submit.disabled=false;reset.hidden=true;draw();interval=setInterval(()=>{const left=Math.max(0,duration-Math.floor((Date.now()-startedAt)/1000));clock.textContent=timeText(left);if(left<=0)finish(true)},500)};
  submit.onclick=()=>finish(false);
  reset.onclick=()=>{clearInterval(interval);start.disabled=false;submit.disabled=true;reset.hidden=true;stage.hidden=true;result.hidden=true;clock.textContent='৩০:০০';progress.textContent='পরীক্ষা শুরু হয়নি';answers=Array(50).fill(null);current=0;finished=false};
  $('bankMockPrev').onclick=()=>{if(current>0){current--;draw()}};
  $('bankMockNext').onclick=()=>{if(current<49){current++;draw()}};
})();
