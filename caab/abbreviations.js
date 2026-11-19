/* CAAB shared abbreviation glossary · linked from every CAAB subject */
(() => {
  "use strict";
  const terms = {
    "AAPP":"Assistance Association for Political Prisoners (রাজনৈতিক বন্দিদের সহায়তা সমিতি)",
    "ACM":"Association for Computing Machinery",
    "ADB":"Asian Development Bank (এশীয় উন্নয়ন ব্যাংক)",
    "ADP":"Annual Development Programme (বার্ষিক উন্নয়ন কর্মসূচি)",
    "AFC":"Asian Football Confederation; conflict context: Alliance Fleuve Congo",
    "AIIB":"Asian Infrastructure Investment Bank (এশীয় অবকাঠামো বিনিয়োগ ব্যাংক)",
    "AMPAS":"Academy of Motion Picture Arts and Sciences",
    "AP":"Associated Press (মার্কিন সংবাদ সংস্থা)",
    "APEC":"Asia-Pacific Economic Cooperation",
    "ASEAN":"Association of Southeast Asian Nations",
    "ATC":"Air Traffic Control (বিমান চলাচল নিয়ন্ত্রণ)",
    "ATS":"Air Traffic Services (বিমান চলাচল সেবা)",
    "AU":"African Union (আফ্রিকান ইউনিয়ন)",
    "BARI":"Bangladesh Agricultural Research Institute",
    "BANBEIS":"Bangladesh Bureau of Educational Information and Statistics",
    "BB":"Bangladesh Bank",
    "BCB":"Bangladesh Cricket Board",
    "BCC":"Bangladesh Computer Council",
    "BCS":"Bangladesh Civil Service",
    "BEPZA":"Bangladesh Export Processing Zones Authority",
    "BEZA":"Bangladesh Economic Zones Authority",
    "BIDA":"Bangladesh Investment Development Authority",
    "BIMSTEC":"Bay of Bengal Initiative for Multi-Sectoral Technical and Economic Cooperation",
    "BIST-EC":"Bangladesh–India–Sri Lanka–Thailand Economic Cooperation (BIMSTEC-এর প্রাথমিক নাম)",
    "BMD":"Bangladesh Meteorological Department",
    "BOP":"Balance of Payments (বৈদেশিক লেনদেনের ভারসাম্য)",
    "BPM6":"Balance of Payments and International Investment Position Manual, Sixth Edition",
    "BRAC":"BRAC (প্রতিষ্ঠানটির বর্তমান নাম; ঐতিহাসিক বিস্তার Bangladesh Rural Advancement Committee)",
    "BRDB":"Bangladesh Rural Development Board",
    "BRIC":"Brazil, Russia, India and China",
    "BRICS":"Brazil, Russia, India, China and South Africa (নামটি সম্প্রসারিত সদস্যপদেও বহাল)",
    "BSEC":"Bangladesh Securities and Exchange Commission",
    "BSS":"Bangladesh Sangbad Sangstha (বাংলাদেশ সংবাদ সংস্থা)",
    "BWDB":"Bangladesh Water Development Board",
    "CAG":"Comptroller and Auditor General (মহা হিসাব-নিরীক্ষক ও নিয়ন্ত্রক)",
    "CAA":"Civil Aviation Authority (সাধারণ বর্ণনা; বাংলাদেশে CAAB)",
    "CAAB":"Civil Aviation Authority of Bangladesh (বাংলাদেশ বেসামরিক বিমান চলাচল কর্তৃপক্ষ)",
    "CBD":"Convention on Biological Diversity (জীববৈচিত্র্য সনদ)",
    "CCI&E":"Chief Controller of Imports and Exports",
    "CENTCOM":"United States Central Command",
    "CIF":"Climate Investment Funds",
    "COP":"Conference of the Parties (পক্ষসমূহের সম্মেলন)",
    "COP31":"31st Conference of the Parties",
    "CPI":"Consumer Price Index (ভোক্তা মূল্যসূচক)",
    "CRR":"Cash Reserve Ratio (নগদ জমা সংরক্ষণ অনুপাত)",
    "CSTO":"Collective Security Treaty Organization",
    "CV":"Coefficient of Variation (পরিসংখ্যানে); Curriculum Vitae (জীবনবৃত্তান্তে)",
    "D-8":"Developing Eight (উন্নয়নশীল আট দেশের জোট)",
    "DBBL":"Dutch-Bangla Bank PLC",
    "DCA":"Directorate of Civil Aviation",
    "DMZ":"Demilitarized Zone (অসামরিকীকৃত এলাকা)",
    "DRC":"Democratic Republic of the Congo (গণতান্ত্রিক কঙ্গো প্রজাতন্ত্র)",
    "ECA":"Environmentally Critical Area (পরিবেশগত সংকটাপন্ন এলাকা); UN context: Economic Commission for Africa",
    "ECJ":"European Court of Justice (Court of Justice of the European Union)",
    "ECOSOC":"United Nations Economic and Social Council",
    "EEZ":"Exclusive Economic Zone (একচ্ছত্র অর্থনৈতিক অঞ্চল)",
    "EIA":"Energy Information Administration (U.S. Department of Energy)",
    "EPB":"Export Promotion Bureau (রপ্তানি উন্নয়ন ব্যুরো)",
    "EPZ":"Export Processing Zone (রপ্তানি প্রক্রিয়াকরণ অঞ্চল)",
    "ERD":"Economic Relations Division (অর্থনৈতিক সম্পর্ক বিভাগ, বাংলাদেশ)",
    "EU":"European Union (ইউরোপীয় ইউনিয়ন)",
    "FAO":"Food and Agriculture Organization of the United Nations",
    "FID":"Financial Institutions Division (আর্থিক প্রতিষ্ঠান বিভাগ, বাংলাদেশ)",
    "FY":"Financial Year (অর্থবছর)",
    "G7":"Group of Seven",
    "G20":"Group of Twenty",
    "G77":"Group of 77 (উন্নয়নশীল দেশের জোট; বর্তমান সদস্য ৭৭-এর বেশি)",
    "GA":"United Nations General Assembly (জাতিসংঘ সাধারণ পরিষদ)",
    "GATT":"General Agreement on Tariffs and Trade",
    "GBM":"Ganges–Brahmaputra–Meghna (গঙ্গা–ব্রহ্মপুত্র–মেঘনা নদী অববাহিকা)",
    "GDP":"Gross Domestic Product (মোট দেশজ উৎপাদন)",
    "GED":"General Economics Division (সাধারণ অর্থনীতি বিভাগ, বাংলাদেশ পরিকল্পনা কমিশন)",
    "GNI":"Gross National Income (মোট জাতীয় আয়)",
    "GNP":"Gross National Product (মোট জাতীয় উৎপাদন)",
    "GST":"Gross State Product (প্রাসঙ্গিক রাজ্য-অর্থনীতির ক্ষেত্রে); সাধারণ ব্যবহারে Goods and Services Tax",
    "GVA":"Gross Value Added (মোট মূল্য সংযোজন)",
    "HDI":"Human Development Index (মানব উন্নয়ন সূচক)",
    "HQ":"Headquarters (সদর দপ্তর)",
    "IATA":"International Air Transport Association",
    "IAEA":"International Atomic Energy Agency",
    "ITC":"International Trade Centre (joint UNCTAD–WTO agency)",
    "IMU":"International Mathematical Union",
    "OPCW":"Organisation for the Prohibition of Chemical Weapons",
    "UNCDF":"United Nations Capital Development Fund",
    "UNITAR":"United Nations Institute for Training and Research",
    "IBRD":"International Bank for Reconstruction and Development",
    "ICAO":"International Civil Aviation Organization",
    "ICC":"International Criminal Court (আইন প্রসঙ্গে); International Cricket Council (ক্রিকেট প্রসঙ্গে)",
    "ICJ":"International Court of Justice",
    "ICRC":"International Committee of the Red Cross",
    "ICSID":"International Centre for Settlement of Investment Disputes",
    "IDA":"International Development Association",
    "IDF":"Israel Defense Forces",
    "IDRA":"Insurance Development and Regulatory Authority, Bangladesh",
    "IFAD":"International Fund for Agricultural Development",
    "IFC":"International Finance Corporation",
    "IFIC":"International Finance Investment and Commerce Bank PLC",
    "ILO":"International Labour Organization",
    "IMF":"International Monetary Fund",
    "IMO":"International Maritime Organization",
    "IMED":"Implementation Monitoring and Evaluation Division (বাস্তবায়ন পরিবীক্ষণ ও মূল্যায়ন বিভাগ)",
    "IOM":"International Organization for Migration",
    "IORA":"Indian Ocean Rim Association",
    "IRGC":"Islamic Revolutionary Guard Corps",
    "IRD":"Internal Resources Division (অভ্যন্তরীণ সম্পদ বিভাগ, বাংলাদেশ)",
    "ISSP":"Islamic State–Sahel Province",
    "ITU":"International Telecommunication Union",
    "JNIM":"Jama'at Nusrat al-Islam wal-Muslimin",
    "LNG":"Liquefied Natural Gas (তরলীকৃত প্রাকৃতিক গ্যাস)",
    "M23":"March 23 Movement (মার্চ ২৩ আন্দোলন)",
    "MCQ":"Multiple-Choice Question (বহুনির্বাচনি প্রশ্ন)",
    "MIGA":"Multilateral Investment Guarantee Agency",
    "MONUSCO":"United Nations Organization Stabilization Mission in the Democratic Republic of the Congo",
    "MRA":"Microcredit Regulatory Authority, Bangladesh",
    "MTO":"Management Trainee Officer",
    "NAC":"North Atlantic Council (NATO-র প্রধান রাজনৈতিক সিদ্ধান্তগ্রহণকারী সংস্থা)",
    "NAM":"Non-Aligned Movement (জোটনিরপেক্ষ আন্দোলন)",
    "NASA":"National Aeronautics and Space Administration",
    "NATO":"North Atlantic Treaty Organization",
    "NBR":"National Board of Revenue (জাতীয় রাজস্ব বোর্ড)",
    "NDC":"Nationally Determined Contribution (জাতীয়ভাবে নির্ধারিত অবদান)",
    "NDB":"New Development Bank (BRICS-এর উন্নয়ন ব্যাংক)",
    "NLP":"Natural Language Processing (প্রাকৃতিক ভাষা প্রক্রিয়াকরণ)",
    "NNP":"Net National Product (নিট জাতীয় উৎপাদন)",
    "NPT":"Treaty on the Non-Proliferation of Nuclear Weapons (পারমাণবিক অস্ত্র বিস্তার রোধ চুক্তি)",
    "OEC":"Organisation for Economic Co-operation and Development? (OEC শব্দটি সাধারণত ভুল; OECD দেখুন)",
    "OECD":"Organisation for Economic Co-operation and Development",
    "OHCHR":"Office of the United Nations High Commissioner for Human Rights",
    "OIC":"Organisation of Islamic Cooperation",
    "OPEC":"Organization of the Petroleum Exporting Countries",
    "P5":"Permanent Five (জাতিসংঘ নিরাপত্তা পরিষদের পাঁচ স্থায়ী সদস্য)",
    "PCA":"Permanent Court of Arbitration",
    "PICAO":"Provisional International Civil Aviation Organization",
    "PKSF":"Palli Karma-Sahayak Foundation",
    "PRIS":"Power Reactor Information System (IAEA)",
    "RAF":"Royal Air Force (যুক্তরাজ্যের বিমানবাহিনী)",
    "RCEP":"Regional Comprehensive Economic Partnership",
    "RMAF":"Ramon Magsaysay Award Foundation",
    "RSF":"Rapid Support Forces (সুদানের সশস্ত্র বাহিনী)",
    "SAARC":"South Asian Association for Regional Cooperation",
    "SAF":"Sudanese Armed Forces",
    "SD":"Standard Deviation (পরিসংখ্যানে); Sustainable Development (উন্নয়ন প্রসঙ্গে)",
    "SDG":"Sustainable Development Goal (টেকসই উন্নয়ন অভীষ্ট)",
    "SID":"Statistics and Informatics Division (পরিসংখ্যান ও তথ্য ব্যবস্থাপনা বিভাগ, বাংলাদেশ)",
    "SLR":"Statutory Liquidity Ratio (বিধিবদ্ধ তারল্য অনুপাত)",
    "SME":"Small and Medium-sized Enterprise (ক্ষুদ্র ও মাঝারি উদ্যোগ)",
    "SRO":"Statutory Regulatory Order (সংবিধিবদ্ধ নিয়ন্ত্রক আদেশ)",
    "STC":"Southern Transitional Council (ইয়েমেন)",
    "UN":"United Nations (জাতিসংঘ)",
    "UNAMID":"African Union–United Nations Hybrid Operation in Darfur",
    "UNCTAD":"United Nations Conference on Trade and Development",
    "UNDP":"United Nations Development Programme",
    "UNEP":"United Nations Environment Programme",
    "UNESCO":"United Nations Educational, Scientific and Cultural Organization",
    "UNFCCC":"United Nations Framework Convention on Climate Change",
    "UNFPA":"United Nations Population Fund",
    "UNGA":"United Nations General Assembly",
    "UNHCR":"United Nations High Commissioner for Refugees",
    "UNICEF":"United Nations Children’s Fund (ঐতিহাসিক নাম: United Nations International Children’s Emergency Fund)",
    "UNIDO":"United Nations Industrial Development Organization",
    "UNODC":"United Nations Office on Drugs and Crime",
    "UNOPS":"United Nations Office for Project Services",
    "UNRWA":"United Nations Relief and Works Agency for Palestine Refugees in the Near East",
    "UNSC":"United Nations Security Council",
    "UN Tourism":"United Nations World Tourism Organization (বর্তমান ব্র্যান্ড: UN Tourism; পূর্বে UNWTO)",
    "UNWTO":"United Nations World Tourism Organization (বর্তমান ব্র্যান্ড: UN Tourism)",
    "UPU":"Universal Postal Union",
    "UAE":"United Arab Emirates (সংযুক্ত আরব আমিরাত)",
    "UK":"United Kingdom (যুক্তরাজ্য)",
    "UN-Women":"United Nations Entity for Gender Equality and the Empowerment of Women",
    "US":"United States (যুক্তরাষ্ট্র)",
    "USA":"United States of America (যুক্তরাষ্ট্র)",
    "USS":"United States Ship (মার্কিন নৌবাহিনীর জাহাজের পূর্বপদ)",
    "VAT":"Value Added Tax (মূল্য সংযোজন কর)",
    "WFP":"World Food Programme",
    "WHO":"World Health Organization",
    "WIPO":"World Intellectual Property Organization",
    "WMO":"World Meteorological Organization",
    "WTO":"World Trade Organization",
    "UN-Habitat":"United Nations Human Settlements Programme",
    "UN Women":"United Nations Entity for Gender Equality and the Empowerment of Women",
    "ACLED":"Armed Conflict Location & Event Data Project",
    "BBC":"British Broadcasting Corporation",
    "BBS":"Bangladesh Bureau of Statistics",
    "BTTC":"Bangladesh Trade and Tariff Commission",
    "CHCP":"Community Health Care Provider",
    "DPHE":"Department of Public Health Engineering",
    "ECHR":"European Court of Human Rights",
    "IATA":"International Air Transport Association",
    "ITLOS":"International Tribunal for the Law of the Sea",
    "OCAG":"Office of the Comptroller and Auditor General of Bangladesh",
    "PEC":"Primary Education Completion (পরীক্ষা/সনদ প্রসঙ্গে)",
    "PSC":"Public Service Commission (প্রসঙ্গভেদে; Bangladesh Public Service Commission = BPSC)",
    "USD":"United States Dollar",
    "FY2024":"Financial Year 2024",
    "FY2025":"Financial Year 2025",
    "FY2026":"Financial Year 2026",
    "FY2027":"Financial Year 2027",
    "FY25":"Financial Year 2025",
    "FY26":"Financial Year 2026",
    "ইউএন":"United Nations (জাতিসংঘ)",
    "ইউএনএইচসিআর":"United Nations High Commissioner for Refugees",
    "ইউনিসেফ":"United Nations Children’s Fund",
    "ডব্লিউএইচও":"World Health Organization",
    "ডব্লিউএফপি":"World Food Programme",
    "ডব্লিউটিও":"World Trade Organization",
    "আইএমএফ":"International Monetary Fund",
    "আইসিএও":"International Civil Aviation Organization",
    "আইএলও":"International Labour Organization",
    "আইএমও":"International Maritime Organization",
    "ইউনেস্কো":"United Nations Educational, Scientific and Cultural Organization",
    "ন্যাটো":"North Atlantic Treaty Organization",
    "ওপেক":"Organization of the Petroleum Exporting Countries",
    "ব্রিকস":"Brazil, Russia, India, China and South Africa (BRICS)",
    "এপেক":"Asia-Pacific Economic Cooperation",
    "আসিয়ান":"Association of Southeast Asian Nations",
    "সার্ক":"South Asian Association for Regional Cooperation",
    "বিমসটেক":"Bay of Bengal Initiative for Multi-Sectoral Technical and Economic Cooperation",
    "জিডিপি":"Gross Domestic Product",
    "ভ্যাট":"Value Added Tax",
    "ইইউ":"European Union"
  };
  const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const keys = Object.keys(terms).sort((a,b)=>b.length-a.length);
  const pattern = new RegExp("(^|[^\\p{L}\\p{N}])(" + keys.map(esc).join("|") + ")(?=$|[^\\p{L}\\p{N}])", "gu");
  const seen = new WeakMap();
  const ignore = el => !el || el.id === "caabAbbrWidget" ||
    /^(SCRIPT|STYLE|TEXTAREA|INPUT|SELECT|OPTION|BUTTON|ABBR)$/i.test(el.tagName) ||
    el.closest("#caabAbbrWidget,script,style,textarea,input,select,option,nav,button,abbr");
  function wrapText(node) {
    if (!node.parentElement || ignore(node.parentElement) || !pattern.test(node.nodeValue)) { pattern.lastIndex=0; return; }
    pattern.lastIndex=0;
    const text=node.nodeValue, frag=document.createDocumentFragment();
    let last=0, match, count=0;
    const group=node.parentElement.closest(".chapter,.lesson,.notes,.subject,.subject-card,[data-subject]") || document.querySelector("main") || document.body;
    let set=seen.get(group); if(!set){set=new Set();seen.set(group,set)}
    while((match=pattern.exec(text))){
      const start=match.index, token=match[2], tokenStart=start+match[1].length;
      if(start>last)frag.append(document.createTextNode(text.slice(last,start)));
      if(match[1])frag.append(document.createTextNode(match[1]));
      const tag=document.createElement("abbr");
      tag.className="caab-abbr";tag.textContent=token;tag.title=terms[token];
      const full=document.createElement("span");full.className="caab-abbr-full";full.textContent=" — "+terms[token];
      if(!set.has(token)){full.classList.add("first-use");set.add(token)}
      tag.append(full);frag.append(tag);
      last=tokenStart+token.length;count++;
    }
    if(count){if(last<text.length)frag.append(document.createTextNode(text.slice(last)));node.replaceWith(frag)}
  }
  function scan(root=document.body){
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
    nodes.forEach(wrapText);
  }
  function start(){
    const style=document.createElement("style");
    style.textContent="#caabAbbrWidget{position:fixed;right:16px;bottom:16px;z-index:99999;font-family:inherit;color:#14283b}#caabAbbrWidget *{box-sizing:border-box}#caabAbbrToggle{border:1px solid #087f78;background:#087f78;color:#fff;border-radius:999px;padding:10px 15px;font:700 14px/1.3 system-ui,sans-serif;box-shadow:0 5px 18px #0002;cursor:pointer}#caabAbbrPanel{position:absolute;right:0;bottom:54px;width:min(390px,calc(100vw - 28px));max-height:min(72vh,650px);overflow:auto;border:1px solid #d5e1ea;border-radius:16px;background:#fff;color:#14283b;box-shadow:0 14px 42px #061a2c33;padding:15px}#caabAbbrPanel[hidden]{display:none}.caab-abbr{font-weight:700;text-decoration:underline dotted;text-decoration-thickness:1px;text-underline-offset:3px;cursor:help;color:inherit}.caab-abbr-full{display:none;font-weight:500;font-size:.88em;color:#087a4b}.caab-abbr-full.first-use{display:inline}body[data-caab-expand-all=\"true\"] .caab-abbr-full{display:inline!important}.caab-abbr-heading{font-size:18px;margin:0 0 8px}.caab-abbr-controls{display:flex;gap:7px;flex-wrap:wrap;margin:10px 0}.caab-abbr-controls button{border:1px solid #d5e1ea;background:#f4f7fb;color:#14283b;border-radius:9px;padding:7px 9px;font:600 13px system-ui,sans-serif;cursor:pointer}.caab-abbr-search{width:100%;padding:9px 10px;border:1px solid #cbd7e1;border-radius:9px;font:inherit;color:#14283b;background:#fff}.caab-abbr-list{margin-top:9px}.caab-abbr-row{padding:8px 0;border-bottom:1px solid #e5ebf0;font-size:14px;line-height:1.45}.caab-abbr-row b{color:#087a4b}.caab-abbr-note{color:#536579;font-size:12px;margin:7px 0}.caab-abbr-close{float:right;border:0;background:transparent;color:#14283b;font-size:20px;cursor:pointer}body[data-theme=\"dark\"] #caabAbbrWidget{color:#f3f7fb}body[data-theme=\"dark\"] #caabAbbrPanel{background:#102b42;color:#f3f7fb;border-color:#2b4b61}body[data-theme=\"dark\"] .caab-abbr-controls button,body[data-theme=\"dark\"] .caab-abbr-search{background:#15364e;color:#f3f7fb;border-color:#2b4b61}body[data-theme=\"dark\"] .caab-abbr-row{border-color:#2b4b61}body[data-theme=\"dark\"] .caab-abbr-full{color:#80e4ad}body[data-theme=\"dark\"] .caab-abbr-note{color:#b6c7d3}@media(max-width:600px){#caabAbbrWidget{right:10px;bottom:10px}#caabAbbrToggle{padding:9px 12px;font-size:13px}}";
    document.head.append(style);
    const widget=document.createElement("div");widget.id="caabAbbrWidget";
    widget.innerHTML='<button id="caabAbbrToggle" type="button" aria-expanded="false">🔤 পূর্ণরূপ</button><section id="caabAbbrPanel" hidden role="dialog" aria-label="সংক্ষিপ্ত রূপের পূর্ণরূপ"><button class="caab-abbr-close" type="button" aria-label="বন্ধ করুন">×</button><h2 class="caab-abbr-heading">CAAB সংক্ষিপ্ত রূপ অভিধান</h2><p class="caab-abbr-note">প্রথম উল্লেখে পূর্ণরূপ দেখা যায়। চাইলে সব উল্লেখ দেখান; সংক্ষিপ্ত রূপে ক্লিক/হোভার করলেও পূর্ণরূপ পড়তে পারবেন।</p><div class="caab-abbr-controls"><button id="caabExpandAll" type="button">সব পূর্ণরূপ দেখান</button><button id="caabCollapseAll" type="button">সংক্ষিপ্ত দেখান</button></div><input id="caabAbbrSearch" class="caab-abbr-search" type="search" placeholder="সংক্ষিপ্ত রূপ বা পূর্ণরূপ খুঁজুন…" aria-label="অভিধানে খুঁজুন"><div id="caabAbbrList" class="caab-abbr-list"></div></section>';
    document.body.append(widget);
    const toggle=widget.querySelector("#caabAbbrToggle"),panel=widget.querySelector("#caabAbbrPanel");
    const list=widget.querySelector("#caabAbbrList"),search=widget.querySelector("#caabAbbrSearch");
    const pairs=Object.entries(terms).sort((a,b)=>a[0].localeCompare(b[0]));
    function paint(q=""){list.replaceChildren();const f=q.trim().toLowerCase();const filtered=pairs.filter(([k,v])=>!f||(k+" "+v).toLowerCase().includes(f));filtered.forEach(([k,v])=>{const row=document.createElement("div");row.className="caab-abbr-row";const b=document.createElement("b");b.textContent=k;row.append(b,document.createTextNode(" — "+v));list.append(row)});if(!filtered.length)list.textContent="মিল পাওয়া যায়নি।"}
    paint();
    toggle.onclick=()=>{panel.hidden=!panel.hidden;toggle.setAttribute("aria-expanded",String(!panel.hidden));if(!panel.hidden)search.focus()};
    widget.querySelector(".caab-abbr-close").onclick=()=>{panel.hidden=true;toggle.setAttribute("aria-expanded","false");toggle.focus()};
    search.oninput=()=>paint(search.value);
    widget.querySelector("#caabExpandAll").onclick=()=>document.body.dataset.caabExpandAll="true";
    widget.querySelector("#caabCollapseAll").onclick=()=>document.body.dataset.caabExpandAll="false";
    document.body.dataset.caabExpandAll="false";
    scan();
    const observer=new MutationObserver(records=>records.forEach(r=>r.addedNodes.forEach(n=>{if(n.nodeType===Node.TEXT_NODE)wrapText(n);else if(n.nodeType===Node.ELEMENT_NODE&&n.id!=="caabAbbrWidget")scan(n)})));
    observer.observe(document.body,{childList:true,subtree:true});
    document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!panel.hidden){panel.hidden=true;toggle.setAttribute("aria-expanded","false")}});
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start,{once:true});else start();
})();