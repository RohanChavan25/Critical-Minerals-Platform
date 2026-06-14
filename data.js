// ── CRITICAL MINERALS PLATFORM — CONTENT DATABASE ──
// Version: 1.0 | Date: June 2026
// Rule: No HTML. No CSS. No JS logic. Content only.
// Language switch touches ONLY this file.

const DB = {

  meta: {
    version: '1.0',
    date: 'June 2026',
    title: { en: 'Critical Minerals', mr: 'महत्त्वाची खनिजे' },
    subtitle: { en: 'The Elements Shaping the Modern World', mr: 'आधुनिक जगाला आकार देणारे घटक' },
    tagline: { en: 'From definitions to geopolitics — a policy primer for the curious', mr: 'व्याख्यांपासून भू-राजकारणापर्यंत — एक धोरण प्राइमर' },
    footer: { en: 'Critical Minerals: A One-Stop Platform · Beta · June 2026', mr: 'महत्त्वाची खनिजे: एक संपूर्ण माहितीस्थान · बीटा · जून २०२६' },
    credit: { en: 'Built with Claude (Anthropic)', mr: 'Claude (Anthropic) च्या सहाय्याने बांधले' }
  },

  // ── SOURCE REGISTRY ──
  sources: {
    iea_outlook_2025: { title: 'IEA Global Critical Minerals Outlook 2025', url: 'https://www.iea.org/reports/global-critical-minerals-outlook-2025', year: 2025 },
    iea_topic_page: { title: 'IEA Critical Minerals Topic Page', url: 'https://www.iea.org/topics/critical-minerals', year: 2025 },
    iea_oct_2025: { title: 'IEA Commentary: Export Controls Oct 2025', url: 'https://www.iea.org/commentaries/with-new-export-controls-on-critical-minerals-supply-concentration-risks-become-reality', year: 2025 },
    iea_ncmm_2026: { title: 'IEA Policy Profile: NCMM April 2026', url: 'https://www.iea.org/policies/25735-national-critical-mineral-mission', year: 2026 },
    iea_ai_2026: { title: 'IEA Key Questions on Energy and AI', url: 'https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary', year: 2026 },
    iea_cet_2021: { title: 'IEA Role of Critical Minerals in Clean Energy Transitions', url: 'https://www.iea.org/reports/the-role-of-critical-minerals-in-clean-energy-transitions', year: 2021 },
    usgs_mcs_2026: { title: 'USGS Mineral Commodity Summaries 2026', url: 'https://pubs.usgs.gov/periodicals/mcs2026/mcs2026.pdf', year: 2026 },
    usgs_mcs_2026_cobalt: { title: 'USGS MCS 2026 — Cobalt', url: 'https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-cobalt.pdf', year: 2026 },
    usgs_mcs_2026_ree: { title: 'USGS MCS 2026 — Rare Earths', url: 'https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-rare-earths.pdf', year: 2026 },
    usgs_mcs_2025_lithium: { title: 'USGS MCS 2025 — Lithium', url: 'https://pubs.usgs.gov/periodicals/mcs2025/mcs2025-lithium.pdf', year: 2025 },
    india_mom_2023: { title: 'India Ministry of Mines — Critical Minerals June 2023', url: 'https://mines.gov.in/admin/download/649d4212cceb01688027666.pdf', year: 2023 },
    ncmm_2026: { title: 'National Critical Mineral Mission January 2026', url: 'https://mines.gov.in/webportal/content/ongoing-nits-critical-minerals', year: 2026 },
    kotasthane_mercatus: { title: 'Kotasthane — Mercatus/Ideas of India, Feb 26 2026', url: 'https://www.mercatus.org/ideasofindia/pranay-kotasthane-political-economy-rare-earths-and-critical-minerals', year: 2026 },
    reddy_kotasthane_ht: { title: 'Reddy & Kotasthane — Hindustan Times, June 4 2026', url: 'https://www.hindustantimes.com/opinion/lets-make-critical-minerals-deal-work-101780587561378.html', year: 2026 },
    sp_global_2024: { title: 'S&P Global Mine Development Times, July 2024', url: 'https://www.spglobal.com/marketintelligence/en/media-center/press-release/united-states-ranks-next-to-last-in-development-time-for-new-mines-that-produce-critical-minerals-for-energy-transition-sp-globa', year: 2024 },
    mea_india_us_2026: { title: 'MEA India-US Critical Minerals Framework, May 2026', url: 'https://www.mea.gov.in/press-releases.htm?dtl/41236', year: 2026 },
    state_dept_quad_2026: { title: 'US State Dept — Quad Critical Minerals Initiative, May 2026', url: 'https://www.state.gov/releases/office-of-the-spokesperson/2026/05/quad-critical-minerals-initiative-framework-among-the-united-states-japan-australia-and-india', year: 2026 },
    eu_crm: { title: 'EU Critical Raw Materials Act 2024', url: 'https://single-market-economy.ec.europa.eu/sectors/raw-materials/areas-specific-interest/critical-raw-materials_en#fifth-list-2023-of-critical-raw-materials-for-the-eu', year: 2024 },
    federal_register_2025: { title: 'US Federal Register — Final 2025 Critical Minerals List', url: 'https://www.usgs.gov/news/science-snippet/interior-department-releases-final-2025-list-critical-minerals', year: 2025 },
    canada_2024: { title: 'Canada Critical Minerals List 2024', url: 'https://www.canada.ca/en/campaign/critical-minerals-in-canada/critical-minerals-an-opportunity-for-canada.html', year: 2024 },
    geoscience_aus: { title: 'Geoscience Australia Critical Minerals', url: 'https://www.industry.gov.au/publications/australias-critical-minerals-list-and-strategic-materials-list', year: 2023 },
    west_point_2025: { title: 'West Point MWI — Minerals, Magnets and Military, July 2025', url: 'https://mwi.westpoint.edu/minerals-magnets-and-military-capability-chinas-rare-earth-weaponization-should-be-a-wake-up-call/', year: 2025 },
    global_witness_2024: { title: 'Global Witness — Myanmar REE, 2024', url: 'https://globalwitness.org/en/campaigns/transition-minerals/fuelling-the-future-poisoning-the-present-myanmars-rare-earth-boom', year: 2024 },
    wef_2025: { title: 'WEF Data Centres and Critical Minerals, Dec 2025', url: 'https://www.weforum.org/stories/2025/12/securing-data-centre-materials/', year: 2025 },
    ica_2022: { title: 'International Copper Association 2022', url: 'https://internationalcopper.org/wp-content/uploads/2022/02/ICA-IR-Transportation-202202-R3.pdf', year: 2022 },
    takshashila_gage: { title: 'Takshashila GAGE Paper 2026', url: 'https://takshashila.org.in/pages/publications/', year: 2026 }
  },

  // ── UI STRINGS ──
  ui: {
    langToggle:    { en: 'मराठी', mr: 'English' },
    enterModal:    { en: 'Enter the platform ↗', mr: 'माहितीस्थानात प्रवेश करा ↗' },
    nextLens:      { en: 'Next lens →', mr: 'पुढील दृष्टिकोन →' },
    triviaLabel:   { en: 'Did you know', mr: 'तुम्हाला माहीत आहे का' },
    factLabel:     { en: 'Fact', mr: 'तथ्य' },
    implLabel:     { en: 'Strategic Implication', mr: 'धोरणात्मक अनुमान' },
    sourcesLabel:  { en: 'Sources', mr: 'स्रोत' },
    inferenceLbl:  { en: '[Our inference]', mr: '[आमचे अनुमान]' },
    seeMore:       { en: 'Go deeper ↓', mr: 'अधिक पाहा ↓' },
    seeLess:       { en: 'Close ↑', mr: 'बंद करा ↑' },
    backToTop:     { en: '↑', mr: '↑' },
    loading:       { en: 'Loading...', mr: 'लोड होत आहे...' },
    getUpdates:    { en: 'Get Latest Updates ↗', mr: 'ताज्या बातम्या मिळवा ↗' },
    liveLabel:     { en: 'Latest Developments', mr: 'ताज्या घडामोडी' },
    liveGlobal:    { en: 'Global', mr: 'जागतिक' },
    liveIndia:     { en: 'India', mr: 'भारत' },
    liveWhy:       { en: 'Why It Matters', mr: 'हे का महत्त्वाचे' },
    disclaimer:    { en: '⚠ Directional analytical model. Not a forecast.', mr: '⚠ दिशात्मक विश्लेषणात्मक मॉडेल. अंदाज नाही.' }
  },

  // ── TAB NAVIGATION ──
  // Sequence: Basics → Why It Matters → Minerals → Players → Value Chain
  //           → Human Cost → Toolkit → India's Move → The Next Decade
  // Rationale: Minerals tab contextualises Players and Value Chain.
  //            User understands what is at stake before understanding who controls it
  //            and how material flows. Human Cost follows the full supply-chain picture.
  tabs: [
    { id: 'basics',    label: { en: '01 · The Basics',       mr: '०१ · मूलभूत संकल्पना' } },
    { id: 'why',       label: { en: '02 · Why It Matters',   mr: '०२ · हे का महत्त्वाचे' } },
    { id: 'minerals',  label: { en: '03 · The Minerals',     mr: '०३ · खनिजे' } },
    { id: 'players',   label: { en: '04 · The Players',      mr: '०४ · खेळाडू' } },
    { id: 'chain',     label: { en: '05 · Value Chain',      mr: '०५ · मूल्य साखळी' } },
    { id: 'human',     label: { en: '06 · The Human Cost',   mr: '०६ · मानवी किंमत' } },
    { id: 'toolkit',   label: { en: '07 · The Toolkit',      mr: '०७ · साधन संच' } },
    { id: 'india',     label: { en: "08 · India's Move",     mr: '०८ · भारताची चाल' } },
    { id: 'scenarios', label: { en: '09 · The Next Decade',  mr: '०९ · पुढील दशक' } }
  ],

  // ── MODAL: VIEWPOINTS ──
  viewpoints: [
    {
      label: { en: 'These minerals are everywhere', mr: 'ही खनिजे सर्वत्र आहेत' },
      body:  { en: 'The phone in your hand contains over 50 elements from the periodic table. The electricity powering your screen flows through copper mined in Chile, refined in China, transmitted through infrastructure built with minerals from six continents. We depend on these materials for everything modern — and most of us have never thought about where they come from.',
               mr: 'तुमच्या हातातील फोनमध्ये नियतकालिक सारणीतील ५०पेक्षा जास्त घटक आहेत. तुमच्या स्क्रीनला वीज देणारे तांबे चिलीत खोदले गेले, चीनमध्ये प्रक्रिया केली गेली, आणि सहा खंडांतील खनिजांनी बांधलेल्या पायाभूत सुविधांमधून पाठवले गेले.' }
    },
    {
      label: { en: 'Progress for some comes at a price paid by others', mr: 'काहींची प्रगती इतरांच्या किंमतीवर होते' },
      body:  { en: "The clean energy transition promises to save the planet. But it runs on supply chains that are dirty, fragile, and concentrated. The rare earth magnets in your electric vehicle may contain minerals extracted from Myanmar's Kachin State, where rivers run acidic and workers face serious health risks — invisible to the consumer driving quietly past.",
               mr: 'स्वच्छ ऊर्जेचे संक्रमण पृथ्वी वाचवण्याचे वचन देते. पण ते अशा पुरवठा साखळ्यांवर चालते ज्या घाणेरड्या, ठिसूळ आणि एकवटलेल्या आहेत. तुमच्या इलेक्ट्रिक वाहनातील रेअर अर्थ चुंबकांमध्ये म्यानमारच्या काचीन प्रदेशातून काढलेली खनिजे असू शकतात.' }
    },
    {
      label: { en: "India's paradox", mr: 'भारताचा विरोधाभास' },
      body:  { en: "India holds 25% of the world's thorium, embedded in some of the planet's largest rare earth deposits along its southern coastline. At the same time, India imports 100% of its lithium, cobalt, and nickel. The gap between them is not geological. It is a policy choice made in 1962 that has never been revisited.",
               mr: 'भारताकडे जगातील २५% थोरियम साठे आहेत. त्याच वेळी, भारत त्याच्या १००% लिथियम, कोबाल्ट आणि निकेलची आयात करतो. हे अंतर भूगर्भशास्त्रीय नाही — ते एका धोरणात्मक निवडीमुळे आहे जी १९६२ मध्ये घेतली गेली.' }
    },
    {
      label: { en: 'Governments are treating minerals like weapons', mr: 'सरकारे खनिजांना शस्त्रे म्हणून वापरत आहेत' },
      body:  { en: 'The US signed a minerals deal with Ukraine. China banned rare earth exports to America. The EU set legally binding targets for domestic processing. India and Japan signed supply chain frameworks. All of this happened in the last three years. The global scramble for critical minerals is one of the most consequential stories of our time.',
               mr: 'अमेरिकेने युक्रेनशी खनिज करार केला. चीनने अमेरिकेला रेअर अर्थ निर्यातीवर बंदी घातली. EU ने देशांतर्गत प्रक्रियेसाठी कायदेशीर बंधनकारक उद्दिष्टे ठरवली.' }
    },
    {
      label: { en: 'How one country built a 30-year strategic advantage', mr: 'एका देशाने ३० वर्षांत धोरणात्मक फायदा कसा मिळवला' },
      body:  { en: 'In 1992, Deng Xiaoping said "The Middle East has oil; China has rare earths." The world didn\'t listen. Over 30 years, China invested in processing infrastructure, accepted environmental costs others wouldn\'t, and undercut every competitor until they closed. Today, China processes the overwhelming majority of the world\'s rare earths.',
               mr: '१९९२ मध्ये डेंग झियाओपिंग यांनी सांगितले: "मध्यपूर्वेकडे तेल आहे; चीनकडे रेअर अर्थ आहेत." जगाने ऐकले नाही. ३० वर्षांत चीनने प्रक्रिया पायाभूत सुविधांमध्ये गुंतवणूक केली.' }
    }
  ],

  // ── MODAL: TRIVIA ──
  trivia: [
    { en: 'About 75% of all stable elements in the periodic table can be found inside your smartphone.', mr: 'तुमच्या स्मार्टफोनमध्ये नियतकालिक सारणीतील सुमारे ७५% स्थिर घटक आढळतात.', src: 'usgs_mcs_2026' },
    { en: 'A tonne of discarded mobile phones contains more gold than a tonne of gold ore.', mr: 'एक टन टाकून दिलेल्या मोबाइल फोनमध्ये एक टन सोन्याच्या खनिजापेक्षा जास्त सोने असते.', src: null },
    { en: 'A battery electric vehicle contains approximately 83 kg of copper — nearly four times more than a petrol car.', mr: 'बॅटरी इलेक्ट्रिक वाहनात सुमारे ८३ किलो तांबे असते — पेट्रोल कारपेक्षा जवळजवळ चारपट जास्त.', src: 'ica_2022' },
    { en: 'Recycled energy transition minerals produce 80% less greenhouse gas emissions than primary mining.', mr: 'पुनर्वापरलेली ऊर्जा संक्रमण खनिजे प्राथमिक खाणकामापेक्षा ८०% कमी हरितगृह वायू उत्सर्जन करतात.', src: 'iea_outlook_2025' },
    { en: 'Between 2020 and 2024, critical mineral supply chains became more concentrated, not less.', mr: '२०२० ते २०२४ दरम्यान, महत्त्वाच्या खनिजांच्या पुरवठा साखळ्या अधिक केंद्रित झाल्या, कमी नाही.', src: 'iea_outlook_2025' },
    { en: 'In the United States, the average time from mineral discovery to first production is 29 years — the second slowest in the world.', mr: 'अमेरिकेत, खनिज शोधापासून पहिल्या उत्पादनापर्यंत सरासरी वेळ २९ वर्षे आहे — जगात दुसरा सर्वात मंद.', src: 'sp_global_2024' },
    { en: 'Cerium — one of the 17 rare earth elements — is more abundant in Earth\'s crust than copper.', mr: 'सेरियम — १७ रेअर अर्थ घटकांपैकी एक — पृथ्वीच्या कवचात तांब्यापेक्षा जास्त विपुल आहे.', src: 'usgs_mcs_2026' },
    { en: 'India holds approximately 25% of the world\'s thorium reserves, embedded in its coastal rare earth deposits.', mr: 'भारताकडे जगातील सुमारे २५% थोरियम साठे आहेत, जे किनारपट्टीवरील रेअर अर्थ निक्षेपांत सामावलेले आहेत.', src: 'india_mom_2023' },
    { en: 'In April 2025, China restricted 7 heavy REE exports. Manufacturers tried holmium as a substitute. China restricted holmium in October 2025.', mr: 'एप्रिल २०२५ मध्ये चीनने ७ जड REE निर्यातीवर बंधने घातली. उत्पादकांनी होल्मियमचा पर्याय वापरण्याचा प्रयत्न केला. चीनने ऑक्टोबर २०२५ मध्ये होल्मियमवरही बंधने घातली.', src: 'iea_oct_2025' },
    { en: '"The Middle East has oil; China has rare earths." — Deng Xiaoping, 1992', mr: '"मध्यपूर्वेकडे तेल आहे; चीनकडे रेअर अर्थ आहेत." — डेंग झियाओपिंग, १९९२', src: null },
    { en: 'A typical EV battery pack weighs 300-700 kg, making the vehicle heavier but eliminating tailpipe emissions entirely.', mr: 'एक सामान्य EV बॅटरी पॅकचे वजन ३००-७०० किलो आहे, वाहन जड बनवते पण एक्झॉस्ट उत्सर्जन काढून टाकते.', src: null },
    { en: 'India holds approximately 25% of global thorium reserves, embedded in the same coastal monazite deposits that contain its rare earth resources.', mr: 'भारताकडे जागतिक थोरियम साठ्यांपैकी सुमारे २५% आहे — तेच किनारपट्टी मोनझाइट निक्षेपांमध्ये ज्यात रेअर अर्थ संसाधने आहेत.', src: 'india_mom_2023' },
    { en: 'Global critical mineral markets could exceed $770 billion by 2040 under net-zero scenarios — larger than the entire current coal market.', mr: 'नेट-झीरो परिस्थितीत २०४० पर्यंत जागतिक महत्त्वाची खनिज बाजारपेठ $७७० अब्जपेक्षा जास्त होऊ शकते.', src: 'iea_outlook_2025' },
    { en: 'Every modern touchscreen depends on indium. Indium Tin Oxide (ITO) provides transparency and conductivity — without it, smartphones as we know them would not exist.', mr: 'प्रत्येक आधुनिक टचस्क्रीन इंडियमवर अवलंबून आहे. ITO पारदर्शकता आणि वाहकता प्रदान करते.', src: 'usgs_mcs_2026' },
    { en: 'The US once led global rare earth production at Mountain Pass, California. China displaced it through three decades of investment in processing, scale, and willingness to absorb environmental costs.', mr: 'अमेरिका एकेकाळी Mountain Pass येथे जागतिक REE उत्पादनात आघाडीवर होता. चीनने प्रक्रियेतील गुंतवणुकीद्वारे त्यास मागे टाकले.', src: null },
    { en: 'India is 100% import dependent for lithium, cobalt, and nickel despite holding the 4th or 5th largest rare earth reserves globally. The gap is policy, not geology.', mr: 'जगातील ४थे/५वे सर्वात मोठे REE साठे असूनही भारत लिथियम, कोबाल्ट आणि निकेलसाठी १००% आयात अवलंबित आहे.', src: 'india_mom_2023' },
    { en: 'India exports titanium mineral concentrates but imports titanium metal — one of the clearest examples of the mine-but-not-process trap.', mr: 'भारत टायटॅनियम खनिज केंद्रित निर्यात करतो पण टायटॅनियम धातू आयात करतो — खाण-पण-प्रक्रिया-नाही सापळ्याचे स्पष्ट उदाहरण.', src: 'india_mom_2023' },
    { en: 'Attempts to weaponise mineral supply chains often accelerate the diversification they are meant to prevent — as China discovered after its 2010 Japan rare earth embargo triggered a global de-risking response.', mr: 'खनिज पुरवठा साखळ्यांना शस्त्र म्हणून वापरण्याचे प्रयत्न अनेकदा विविधीकरण गती देतात — जसे चीनने २०१० जपान निर्बंधानंतर अनुभवले.', src: 'iea_oct_2025' },
    { en: '"35% of our rare earth oxide needs can be met by recycling alone." — Pranay Kotasthane, Mercatus February 2026', mr: '"एका दशकात, आपल्या REE ऑक्साइड गरजांपैकी सुमारे ३५% पुनर्वापराद्वारे पूर्ण करता येते." — प्रणय कोतस्थाने, Mercatus २०२६', src: 'kotasthane_mercatus' },
    { en: '"At the heart of the energy transition is a singular, uncomfortable reality — the supply chains are dirty, fragile, and concentrated." — Shobhankita Reddy, Takshashila 2026', mr: '"ऊर्जा संक्रमणाच्या केंद्रस्थानी एक अस्वस्थ वास्तव आहे — पुरवठा साखळ्या घाणेरड्या, ठिसूळ आणि केंद्रित आहेत." — शोभांकिता रेड्डी', src: 'reddy_kotasthane_ht' },
    { en: 'Reddy + Kotasthane (HT June 2026): Stockpiling without value-added manufacturing will not achieve de-risking.', mr: 'रेड्डी + कोतस्थाने (HT जून २०२६): मूल्यवर्धित उत्पादनाशिवाय साठेबाजी डी-रिस्किंग साध्य करणार नाही.', src: 'reddy_kotasthane_ht' },
    { en: 'Reddy + Kotasthane (HT June 2026): China monopoly lies in the processing stage of the value chain, not in mining.', mr: 'रेड्डी + कोतस्थाने (HT जून २०२६): चीनची मक्तेदारी मूल्य साखळीच्या प्रक्रिया टप्प्यात आहे.', src: 'reddy_kotasthane_ht' }
  ],

  // ══════════════════════════════════════════════
  // TAB 1 — THE BASICS
  // ══════════════════════════════════════════════
  tab_basics: {
    nav: { en: '01 · The Basics', mr: '०१ · मूलभूत संकल्पना' },

    sections: [
      {
        id: 'basics_11',
        label: { en: '1.1 — What Are Critical Minerals?', mr: '१.१ — महत्त्वाची खनिजे म्हणजे काय?' },

        title: { en: 'Start with the concept, not the jargon', mr: 'शब्दजालापासून नाही — संकल्पनेपासून सुरुवात करा' },
        intro: { en: 'Some minerals are so important to modern life — and so difficult to replace if supplies are disrupted — that governments treat them as strategic resources. These are known as critical minerals. They power technologies ranging from smartphones and data centres to electric vehicles, wind turbines, missiles, satellites, and advanced manufacturing.',
                 mr: 'काही खनिजे आधुनिक जीवनासाठी इतकी महत्त्वाची आहेत — आणि पुरवठा विस्कळीत झाल्यास बदलणे इतके कठीण आहे — की सरकारे त्यांना धोरणात्मक संसाधने म्हणून मानतात. यांना महत्त्वाची खनिजे म्हणतात.' },
        framework: {
          label: { en: 'The Two-Parameter Framework', mr: 'दोन-मापदंड चौकट' },
          intro: { en: 'A mineral is "critical" when it scores high on both parameters simultaneously:', mr: 'जेव्हा खनिज दोन्ही मापदंडांवर उच्च गुण मिळवते तेव्हा ते "महत्त्वाचे" असते:' },
          params: [
            { name: { en: 'Economic Importance', mr: 'आर्थिक महत्त्व' }, desc: { en: 'How many industries depend on it; strategic and defence roles; substitutability; economic value created.', mr: 'किती उद्योग यावर अवलंबून आहेत; धोरणात्मक आणि संरक्षण भूमिका; पर्यायाची उपलब्धता.' } },
            { name: { en: 'Supply Risk', mr: 'पुरवठा धोका' }, desc: { en: 'Geographic concentration of mining and refining; political stability of producers; import reliance; export control exposure.', mr: 'खाणकाम आणि शुद्धीकरणाची भौगोलिक एकाग्रता; उत्पादकांची राजकीय स्थिरता; आयात अवलंबित्व.' } }
          ],
          formula: { en: 'Criticality = Economic & Strategic Importance × Supply Risk', mr: 'महत्त्व = आर्थिक आणि सामरिक महत्त्व × पुरवठा धोका' },
          src: ['iea_topic_page']
        },
        nationalSecurity: {
          title: { en: 'Why governments treat this as a security issue, not just an economic one', mr: 'सरकारे याला केवळ आर्थिक नसून सुरक्षेचा मुद्दा का मानतात' },
          body: { en: 'Critical minerals sit at the intersection of national security and economic competitiveness. They are inputs to defence systems (missile guidance, fighter jet engines, submarines, night-vision equipment), to the technologies that determine future economic leadership (semiconductors, AI infrastructure, batteries), and to the energy transition that governments have committed to by treaty and domestic law. A supply disruption is therefore not merely a price shock — it can halt defence production lines, stall manufacturing investment decisions, and undermine climate commitments simultaneously. This is why critical minerals strategy sits with national security councils and trade ministries as much as with mining ministries.', mr: 'महत्त्वाची खनिजे राष्ट्रीय सुरक्षा आणि आर्थिक स्पर्धात्मकतेच्या छेदनबिंदूवर आहेत. ती संरक्षण प्रणाली, भविष्यातील आर्थिक नेतृत्व ठरवणारी तंत्रज्ञाने आणि ऊर्जा संक्रमणासाठी आवश्यक आहेत. पुरवठा व्यत्यय म्हणजे केवळ किंमत धक्का नाही — ते संरक्षण उत्पादन रेषा थांबवू शकते, उत्पादन गुंतवणूक निर्णय रोखू शकते आणि हवामान बंधने एकाच वेळी कमकुवत करू शकते.' },
          src: 'iea_topic_page'
        },
        matrix: {
          label: { en: 'The Criticality Matrix', mr: 'महत्त्व मॅट्रिक्स' },
          cells: [
            { ei: 'high', sr: 'high', label: { en: '★ CRITICAL', mr: '★ महत्त्वाचे' }, example: 'Dysprosium', style: 'critical' },
            { ei: 'high', sr: 'low',  label: { en: 'Monitor', mr: 'निरीक्षण' },          example: 'Iron ore',   style: 'monitor' },
            { ei: 'low',  sr: 'high', label: { en: 'Strategic Watch', mr: 'धोरणात्मक निरीक्षण' }, example: 'Bismuth', style: 'watch' },
            { ei: 'low',  sr: 'low',  label: { en: 'Not Critical', mr: 'महत्त्वाचे नाही' }, example: '', style: 'none' }
          ],
          note: { en: 'Iron ore is indispensable but produced by many countries — High EI, Low SR → not critical. Dysprosium is essential for EV motors and produced in very few facilities — High EI, High SR → critical.',
                  mr: 'लोखंड खनिज अपरिहार्य आहे पण अनेक देश उत्पादन करतात — उच्च EI, कमी SR → महत्त्वाचे नाही. डिस्प्रोसियम EV मोटरसाठी आवश्यक आहे पण खूप कमी सुविधांमध्ये उत्पादित होते — उच्च EI, उच्च SR → महत्त्वाचे.' }
        },
        insights: [
          { type: 'fact', text: { en: 'Critical does not mean rare. Cerium is more abundant in Earth\'s crust than copper. Criticality is about processing concentration and supply chain vulnerability — not geological scarcity.', mr: 'महत्त्वाचे म्हणजे दुर्मिळ नाही. सेरियम पृथ्वीच्या कवचात तांब्यापेक्षा जास्त विपुल आहे. महत्त्व म्हणजे प्रक्रिया एकाग्रता आणि पुरवठा साखळी असुरक्षितता — भूगर्भीय दुर्मिळता नाही.' } },
          { type: 'inference', text: { en: 'Criticality is ultimately a policy judgment, not a scientific threshold. It reflects a country\'s economic structure, technological ambitions, security concerns, and risk tolerance at a given moment in time.', mr: 'महत्त्व हे शेवटी धोरणात्मक निर्णय आहे, वैज्ञानिक उंबरठा नाही.' } }
        ],
        sources: ['iea_topic_page', 'india_mom_2023', 'kotasthane_mercatus']
      },
      {
        id: 'basics_12',
        label: { en: '1.2 — The Official Definitions', mr: '१.२ — अधिकृत व्याख्या' },
        title: { en: 'How different governments define it', mr: 'विविध सरकारे त्याची व्याख्या कशी करतात' },
        intro: { en: 'There is no single global definition. Each government\'s list reflects its own industrial strategy, resource endowment, and security priorities. The differences matter — they reveal what each government is actually worried about.',
                 mr: 'कोणतीही एकच जागतिक व्याख्या नाही. प्रत्येक सरकारची यादी त्याची स्वतःची औद्योगिक रणनीती, संसाधन उपलब्धता आणि सुरक्षा प्राधान्यक्रम दर्शवते.' },
        definitions: [
          ,
          { flag: '🇮🇳', jurisdiction: 'India', count: { en: '30 minerals (June 2023)', mr: '३० खनिजे (जून २०२३)' }, text: { en: 'Minerals essential for economic development and national security — the lack of availability, or concentration of existence, extraction or processing in few locations, may lead to supply chain vulnerability.', mr: 'आर्थिक विकास आणि राष्ट्रीय सुरक्षेसाठी आवश्यक खनिजे — काही ठिकाणी अस्तित्व, उत्खनन किंवा प्रक्रियेची एकाग्रता पुरवठा साखळी असुरक्षिततेस कारणीभूत ठरू शकते.' }, key: { en: 'Explicitly includes processing concentration as supply risk — not just mining. Three-stage methodology.', mr: 'स्पष्टपणे प्रक्रिया एकाग्रतेचा पुरवठा जोखीम म्हणून समावेश करते — केवळ खाणकाम नाही.' }, src: 'india_mom_2023' },
          { flag: '🇺🇸', jurisdiction: 'United States', count: { en: '60 minerals (Nov 2025)', mr: '६० खनिजे (नोव्हेंबर २०२५)' }, text: { en: 'Essential to economic or national security, serving an essential manufacturing function, with supply chain vulnerable to disruption. Fuel minerals excluded.', mr: 'आर्थिक किंवा राष्ट्रीय सुरक्षेसाठी आवश्यक, आवश्यक उत्पादन कार्य पार पाडणारे, पुरवठा साखळी व्यत्ययास असुरक्षित.' }, key: { en: 'Updated Nov 2025 from 50 to 60 minerals. Three-part test under Energy Act 2020. Quantitative model across 230+ economic sectors.', mr: 'नोव्हेंबर २०२५ मध्ये ५० वरून ६० खनिजांमध्ये अद्यतनित. ऊर्जा कायदा २०२० अंतर्गत तीन-भाग चाचणी.' }, src: 'federal_register_2025' },
          ,
          { flag: '🇪🇺', jurisdiction: 'European Union', count: { en: '34 CRMs, of which 17 are Strategic Raw Materials', mr: '३४ CRM, त्यापैकी १७ धोरणात्मक कच्चा माल' }, text: { en: 'Raw materials of high economic importance for the EU, with a high risk of supply disruption due to concentration of sources and lack of affordable substitutes.', mr: 'EU साठी उच्च आर्थिक महत्त्वाचा कच्चा माल, स्रोतांच्या एकाग्रतेमुळे आणि परवडणाऱ्या पर्यायांच्या अभावामुळे पुरवठा व्यत्ययाचा उच्च धोका.' }, key: { en: '17 SRMs are a subset of 34 CRMs — NOT a separate list. CRMA in force May 2024. No single country may supply >65% of any SRM.', mr: '१७ SRM हे ३४ CRM चा उपसंच आहेत — स्वतंत्र यादी नाही. CRMA मे २०२४ पासून लागू.' }, src: 'eu_crm' },
          { flag: '🇦🇺', jurisdiction: 'Australia', count: { en: '31 Critical Minerals + 5 Strategic Materials (Feb 2024)', mr: '३१ महत्त्वाची खनिजे + ५ धोरणात्मक सामग्री (फेब्रुवारी २०२४)' }, text: { en: 'Essential to modern technologies, economies or national security; for which Australia has geological potential; in demand from strategic international partners; and vulnerable to supply chain disruption.', mr: 'आधुनिक तंत्रज्ञान, अर्थव्यवस्था किंवा राष्ट्रीय सुरक्षेसाठी आवश्यक; ज्यासाठी ऑस्ट्रेलियाकडे भूगर्भीय संभाव्यता आहे; धोरणात्मक आंतरराष्ट्रीय भागीदारांकडून मागणी; आणि पुरवठा साखळी व्यत्ययास असुरक्षित.' }, key: { en: 'Updated 20 Feb 2024 — Critical Minerals List and a new, separate Strategic Materials List were introduced together. Ties criticality to Australia\'s own resource endowment and to demand from strategic partners.', mr: '२० फेब्रुवारी २०२४ रोजी अद्यतनित — महत्त्वाची खनिजे यादी आणि नवीन, स्वतंत्र धोरणात्मक सामग्री यादी एकत्र सुरू.' }, src: 'geoscience_aus' },
          ,
          { flag: '🇨🇦', jurisdiction: 'Canada', count: { en: '34 minerals (2024 update)', mr: '३४ खनिजे (२०२४ अद्यतन)' }, text: { en: 'A mineral must have a threatened supply chain and a reasonable chance of being produced by Canada, and must be essential to economic or national security.', mr: 'खनिजाला धोकादायक पुरवठा साखळी असणे आवश्यक आहे आणि कॅनडाद्वारे उत्पादित होण्याची वाजवी शक्यता असणे आवश्यक आहे.' }, key: { en: '2024 additions: high-purity iron ore, phosphorus, silicon metal. Six priority minerals: lithium, graphite, nickel, cobalt, copper, REEs.', mr: '२०२४ समावेश: उच्च-शुद्धता लोखंड धातुक, फॉस्फरस, सिलिकॉन धातू.' }, src: 'canada_2024' }
        ],
        tableNote: { en: 'List size ≠ importance or sophistication. A larger list reflects a broader definition, not a more vulnerable supply chain.', mr: 'यादीचा आकार ≠ महत्त्व किंवा परिष्कार. मोठी यादी व्यापक व्याख्या दर्शवते, अधिक असुरक्षित पुरवठा साखळी नाही.' },
        sources: ['federal_register_2025', 'eu_crm', 'geoscience_aus', 'india_mom_2023', 'canada_2024']
      },
      {
        id: 'basics_13',
        label: { en: '1.3 — Rare Earth Elements', mr: '१.३ — रेअर अर्थ घटक' },
        title: { en: '17 metals, one persistent misnomer', mr: '१७ धातू, एक चिरस्थायी चुकीचे नाव' },
        intro: { en: 'Rare Earth Elements are 17 metals that are chemically similar and often found together. They are not geologically rare — cerium is more abundant than copper. The "rare" refers to how difficult they are to separate from each other, not their geological abundance.',
                 mr: 'रेअर अर्थ घटक हे १७ धातू आहेत जे रासायनिकदृष्ट्या समान आहेत आणि अनेकदा एकत्र आढळतात. ते भूगर्भीयदृष्ट्या दुर्मिळ नाहीत — सेरियम तांब्यापेक्षा जास्त विपुल आहे.' },
        etymology: { en: 'The term "rare earth" was coined when an unusual black rock was unearthed by a miner in Ytterby, Sweden, in 1788. The ore was called "rare" because it had never been seen before, and "earth" because that was the 18th-century geological term for rocks that could be dissolved in acids. Over the following century, chemists discovered that this single ore contained multiple chemically near-identical elements — the lanthanide series — which are so similar that separating them requires hundreds of solvent-extraction stages even with modern techniques. Several REEs carry names derived directly from Ytterby: yttrium, ytterbium, terbium, and erbium.', mr: '"रेअर अर्थ" हा शब्द १७८८ मध्ये स्वीडनमधील Ytterby येथे एका खाण कामगाराला सापडलेल्या एका असामान्य काळ्या खडकामुळे तयार झाला. हा धातुक "दुर्मिळ" म्हटला गेला कारण तो आधी कधीही दिसला नव्हता, आणि "अर्थ" म्हणजे १८ व्या शतकातील भूगर्भीय संज्ञा — आम्लात विरघळणारे खडक. पुढील शतकात रसायनशास्त्रज्ञांना आढळले की या एकाच धातुकात अनेक रासायनिकदृष्ट्या जवळजवळ एकसारखे घटक — लॅन्थनाइड श्रेणी — आहेत, जे इतके समान आहेत की त्यांचे विभाजन करण्यासाठी आधुनिक तंत्रांसहही शेकडो विद्रावक-निष्कर्षण टप्पे आवश्यक असतात. अनेक REE ची नावे Ytterby वरून आली आहेत: यिट्रियम, यटरबियम, टर्बियम आणि एर्बियम.', src: 'sciencehistory_ree' },

        globalProd: { stat: '390,000 MT REO (2025)', label: { en: 'World REE production', mr: 'जागतिक REE उत्पादन' }, src: 'usgs_mcs_2026_ree' },
        chinaShare: { stat: '~70%', label: { en: 'China\'s share of global REE mining', mr: 'जागतिक REE खाणकामात चीनचा वाटा' }, src: 'usgs_mcs_2026_ree' },
        keyInsight: { en: 'In rare earths, the strategic bottleneck is usually not the mine — it is the refinery.', mr: 'रेअर अर्थमध्ये, धोरणात्मक अडथळा सहसा खाण नसतो — ते शुद्धीकरण संयंत्र असते.' },
        sources: ['usgs_mcs_2026_ree', 'kotasthane_mercatus', 'iea_oct_2025', 'sciencehistory_ree']
      },
      {
        id: 'basics_14',
        label: { en: '1.4 — The Value Chain Anatomy', mr: '१.४ — मूल्य साखळीची शरीररचना' },
        title: { en: 'Five stages, three zones — and the chokepoint sits in the middle', mr: 'पाच टप्पे, तीन क्षेत्रे — आणि अडथळा मध्यभागी आहे' },
        intro: { en: 'Every critical mineral passes through five stages before it reaches a finished product. These five stages group into three broader zones — upstream, midstream, and downstream. Strategic power does not sit at the mine (upstream) or in the factory (downstream). It sits in the middle — at processing and refining (midstream).',
                 mr: 'प्रत्येक महत्त्वाचे खनिज तयार उत्पादनात पोहोचण्यापूर्वी पाच टप्प्यांतून जाते. हे पाच टप्पे तीन व्यापक क्षेत्रांमध्ये विभागले जातात — अपस्ट्रीम, मिडस्ट्रीम आणि डाउनस्ट्रीम. धोरणात्मक शक्ती खाणीत (अपस्ट्रीम) किंवा कारखान्यात (डाउनस्ट्रीम) नाही. ती मध्यभागी आहे — प्रक्रिया आणि शुद्धीकरणात (मिडस्ट्रीम).' },
        zones: [
          { zone: { en: 'Upstream', mr: 'अपस्ट्रीम' }, stages: '01–02', desc: { en: 'Finding and extracting the raw material', mr: 'कच्चा माल शोधणे आणि काढणे' } },
          { zone: { en: 'Midstream', mr: 'मिडस्ट्रीम' }, stages: '03–04', desc: { en: 'Converting ore into usable industrial inputs — the chokepoint zone', mr: 'धातुकाचे उपयुक्त औद्योगिक निविष्ठांमध्ये रूपांतर — अडथळा क्षेत्र' } },
          { zone: { en: 'Downstream', mr: 'डाउनस्ट्रीम' }, stages: '05', desc: { en: 'Building the final components and products', mr: 'अंतिम घटक आणि उत्पादने तयार करणे' } }
        ],
        stages: [
          { num: '01', name: { en: 'Exploration', mr: 'शोध' }, zone: 'upstream', desc: { en: 'Geological surveys and resource estimation. Least geopolitically sensitive stage.', mr: 'भूवैज्ञानिक सर्वेक्षण आणि संसाधन अंदाज. भू-राजकीयदृष्ट्या कमी संवेदनशील टप्पा.' }, stat: { en: 'Exploration to production: 17.8 years on average globally; 29 years in the US — among the slowest', mr: 'शोधापासून उत्पादनापर्यंत: जागतिक सरासरी १७.८ वर्षे; अमेरिकेत २९ वर्षे — सर्वात मंद देशांपैकी' }, chokepoint: false, src: 'sp_global_2024' },
          { num: '02', name: { en: 'Mining', mr: 'खाणकाम' }, zone: 'upstream', desc: { en: 'Physical extraction of ore. More geographically distributed than refining. Possessing resources ≠ supply chain control.', mr: 'धातुकाचे भौतिक उत्खनन. शुद्धीकरणापेक्षा अधिक भौगोलिकदृष्ट्या विभागलेले. संसाधने असणे ≠ पुरवठा साखळीवर नियंत्रण.' }, chokepoint: false },
          { num: '03', name: { en: 'Processing & Separation ★', mr: 'प्रक्रिया आणि विभाजन ★' }, zone: 'midstream', desc: { en: 'Converting ore into concentrated material. For REEs: hundreds of chemical extraction stages. China leads refining for 19 of the 20 strategic minerals analysed by the IEA, holding an average market share of around 70% across them.', mr: 'धातुकाचे केंद्रित सामग्रीत रूपांतर. REE साठी: रासायनिक निष्कर्षणाचे शेकडो टप्पे. IEA ने विश्लेषण केलेल्या २० पैकी १९ धोरणात्मक खनिजांच्या शुद्धीकरणात चीन आघाडीवर आहे, सरासरी सुमारे ७०% बाजार वाट्यासह.' }, stat: { en: 'Top-3 refining nations: 86% of global capacity (2024), up from 82% in 2020 — driven almost entirely by China (cobalt, graphite, rare earths) and Indonesia (nickel)', mr: 'शीर्ष-३ शुद्धीकरण देश: जागतिक क्षमतेच्या ८६% (२०२४), २०२० मधील ८२% वरून वाढ — मुख्यतः चीन (कोबाल्ट, ग्रॅफाइट, रेअर अर्थ) आणि इंडोनेशिया (निकेल) यांच्यामुळे' }, chokepoint: true, src: 'iea_outlook_2025' },
          { num: '04', name: { en: 'Refining & Materials', mr: 'शुद्धीकरण आणि सामग्री' }, zone: 'midstream', desc: { en: 'Battery-grade chemicals, REE metals, magnet alloys. China dominates for all battery minerals and REEs.', mr: 'बॅटरी-ग्रेड रसायने, REE धातू, मॅग्नेट मिश्रधातू. चीन सर्व बॅटरी खनिजे आणि REE साठी वर्चस्व राखते.' }, chokepoint: false },
          { num: '05', name: { en: 'Manufacturing', mr: 'उत्पादन' }, zone: 'downstream', desc: { en: 'Permanent magnets, battery cells, semiconductors, defence components. Most economic value is captured here.', mr: 'स्थायी चुंबक, बॅटरी सेल, अर्धवाहक, संरक्षण घटक. येथे सर्वाधिक आर्थिक मूल्य मिळते.' }, chokepoint: false }
        ],
        namingNote: { en: '[OUR INFERENCE] The "top 3 refining nations" figure (86%) is an average market share across copper, lithium, nickel, cobalt, graphite and rare earths — it is not three fixed countries holding 86% jointly. The pattern instead is mineral-specific: China is the dominant refiner for nearly every mineral in this group, while Indonesia has emerged as the dominant refiner for nickel specifically. The "top 3" framing describes a concentration level, not a stable coalition of three nations.', mr: '[आपला अनुमान] "शीर्ष ३ शुद्धीकरण देश" आकडा (८६%) तांबे, लिथियम, निकेल, कोबाल्ट, ग्रॅफाइट आणि रेअर अर्थ यांमधील सरासरी बाजार वाटा आहे — हे तीन निश्चित देश संयुक्तपणे ८६% धारण करतात असे नाही. नमुना खनिज-विशिष्ट आहे: चीन जवळजवळ प्रत्येक खनिजासाठी प्रमुख शुद्धीकरण करणारा आहे, तर इंडोनेशिया विशेषतः निकेलसाठी प्रमुख शुद्धीकरण करणारा बनला आहे.' },
        keyInsight: { en: 'A country can develop new mines, secure overseas resources, and sign supply agreements with allies. But if those materials must still be sent elsewhere for processing and refining, strategic dependence remains.', mr: 'एखादा देश नवीन खाणी विकसित करू शकतो, परदेशी संसाधने सुरक्षित करू शकतो आणि सहयोगींशी पुरवठा करार करू शकतो. पण जर ते साहित्य प्रक्रिया आणि शुद्धीकरणासाठी इतरत्र पाठवावे लागत असेल, तर धोरणात्मक अवलंबित्व कायम राहते.' },
        sources: ['iea_outlook_2025', 'sp_global_2024']
      }
    ]
  },

  // ══════════════════════════════════════════════
  // TAB 8 — THE NEXT DECADE (Scenario Engine)
  // ══════════════════════════════════════════════
  tab_scenarios: {
    nav: { en: '09 · The Next Decade', mr: '०९ · पुढील दशक' },
    intro: {
      label: { en: '9 — The Next Decade', mr: '९ — पुढील दशक' },
      title: { en: 'What does the global critical minerals order look like in 2035?', mr: '२०३५ मध्ये जागतिक महत्त्वाच्या खनिजांची व्यवस्था कशी दिसेल?' },
      body:  { en: 'Everything in this platform -- the chokepoints, the human costs, the toolkit, India\'s scorecard -- compresses into one question: is the world moving toward a more open, multipolar critical minerals order, or toward one where Chinese leverage hardens further? This section is built to let you explore that question rather than be told the answer.\n\nSection 9.1 is a scenario engine: six drivers, each weighted by how much it plausibly shapes the 2035 outcome, combine into a single 0-100 score that maps to one of five possible worlds -- from Chinese Strategic Dominance to Accelerated Decoupling. The drivers are pre-set to a 2026 starting position. Move any slider and watch the world change.\n\nThat starting position is not arbitrary. The single highest-weighted driver -- Chinese Leverage, at 25% -- is set high (7/10) precisely because of the escalation documented in 9.2: from the 2010 Japan embargo through five rounds of export controls to October 2025\'s extraterritorial rules, the trend line for a decade and a half has pointed in one direction. The other five drivers are set to reflect where allied execution, technological substitution, India\'s own execution, demand growth, and geopolitical stability stand today -- each of them tracked by one or more of the ten indicators in 9.3.\n\nRead the three sections as one instrument, not three separate ones. 9.1 is the model. 9.2 is the evidence behind its most heavily-weighted input. 9.3 is the dashboard that tells you, as 2026 unfolds, which direction every other input is moving -- and therefore which of the five worlds in 9.1 the evidence is currently pointing toward.', mr: 'या व्यासपीठातील सर्व काही -- अडथळा बिंदू, मानवी खर्च, साधन संच, भारताचे स्कोअरकार्ड -- एका प्रश्नात संकुचित होते: जग अधिक खुल्या, बहुध्रुवीय महत्त्वाच्या खनिज व्यवस्थेकडे जात आहे, की चीनी ताकद अधिक कठोर होत असलेल्या व्यवस्थेकडे? हा विभाग तुम्हाला उत्तर सांगण्याऐवजी हा प्रश्न शोधण्यासाठी बनवला आहे.\n\nविभाग ९.१ हे एक परिस्थिती इंजिन आहे: सहा चालक, प्रत्येकाला २०३५ च्या निकालावर किती परिणाम होतो यानुसार भारांकित केलेले, एकत्र येऊन एक ०-१०० गुण तयार करतात जो पाच संभाव्य जगांपैकी एकाशी जुळतो -- चीनी धोरणात्मक वर्चस्वापासून त्वरित विलगीकरणापर्यंत. चालक २०२६ च्या प्रारंभिक स्थितीवर पूर्व-निश्चित आहेत. कोणताही स्लायडर हलवा आणि जग कसे बदलते ते पाहा.\n\nती प्रारंभिक स्थिती अनियंत्रित नाही. सर्वाधिक भारांकित चालक -- चीनी ताकद, २५% वर -- उच्च (७/१०) सेट केला आहे कारण ९.२ मध्ये दस्तऐवजीकरण केलेली वाढ: २०१० च्या जपान निर्बंधापासून ऑक्टोबर २०२५ च्या बाह्यप्रादेशिक नियमांपर्यंत पाच फेऱ्या निर्यात नियंत्रणांद्वारे, दीड दशकाची दिशा एकाच दिशेने आहे. इतर पाच चालक मित्र-राष्ट्र अंमलबजावणी, तांत्रिक प्रतिस्थापन, भारताची स्वतःची अंमलबजावणी, मागणी वाढ आणि भू-राजकीय स्थिरता आज कुठे आहेत हे प्रतिबिंबित करण्यासाठी सेट केले आहेत -- यापैकी प्रत्येक ९.३ मधील दहा निर्देशकांपैकी एक किंवा अधिकाद्वारे ट्रॅक केले जाते.\n\nतीन विभागांना एक साधन म्हणून वाचा, तीन वेगळे नाही. ९.१ हे मॉडेल आहे. ९.२ हे त्याच्या सर्वाधिक भारांकित इनपुटमागील पुरावा आहे. ९.३ हे डॅशबोर्ड आहे जे २०२६ उलगडत असताना, इतर प्रत्येक इनपुट कोणत्या दिशेने जात आहे हे सांगते -- आणि म्हणून पुरावा सध्या ९.१ मधील पाच जगांपैकी कोणत्या जगाकडे निर्देश करत आहे.' }
    },
    engine: {
      label: { en: '9.1 — Scenario Engine', mr: '९.१ — परिस्थिती इंजिन' },
      title: { en: 'Adjust the drivers — see which world emerges', mr: 'चालक समायोजित करा — कोणते जग उदयास येते ते पाहा' },
      drivers: [
        { id: 'leverage', weight: 0.25, invert: true, default: 7,
          label: { en: 'Chinese Leverage', mr: 'चीनी ताकद' },
          low:   { en: 'Low — controls/pricing weak', mr: 'कमी — नियंत्रणे/किंमत कमकुवत' },
          high:  { en: 'High — dominant + weaponised', mr: 'उच्च — वर्चस्वशाली + शस्त्रीकृत' },
          tip:   { en: 'Export controls, processing dominance, pricing power.', mr: 'निर्यात नियंत्रणे, प्रक्रिया वर्चस्व, किंमत शक्ती.' }
        },
        { id: 'allied', weight: 0.20, invert: false, default: 3,
          label: { en: 'Allied Execution', mr: 'मित्र-राष्ट्र अंमलबजावणी' },
          low:   { en: 'Weak — announcements only', mr: 'कमकुवत — केवळ घोषणा' },
          high:  { en: 'Strong — facilities built', mr: 'मजबूत — सुविधा बांधल्या' },
          tip:   { en: 'Actual processing and refining facilities built outside China.', mr: 'चीनबाहेर वास्तविक प्रक्रिया आणि शुद्धीकरण सुविधा बांधल्या.' }
        },
        { id: 'tech', weight: 0.15, invert: false, default: 4,
          label: { en: 'Technology Progress', mr: 'तंत्रज्ञान प्रगती' },
          low:   { en: 'Slow — little substitution', mr: 'मंद — कमी पर्याय' },
          high:  { en: 'Fast — major substitution', mr: 'वेगवान — मोठे पर्याय' },
          tip:   { en: 'Recycling rates, magnet alternatives, new battery chemistries.', mr: 'पुनर्वापर दर, चुंबक पर्याय, नवीन बॅटरी रसायनशास्त्र.' }
        },
        { id: 'india', weight: 0.15, invert: false, default: 3,
          label: { en: 'India Execution', mr: 'भारत अंमलबजावणी' },
          low:   { en: 'Weak — constraints persist', mr: 'कमकुवत — अडसर कायम' },
          high:  { en: 'Strong — AEA reformed + parks built', mr: 'मजबूत — AEA सुधारित + उद्याने बांधली' },
          tip:   { en: 'NCMM processing parks, Atomic Energy Act reform, KABIL operational.', mr: 'NCMM प्रक्रिया उद्याने, अणुऊर्जा कायदा सुधारणा, KABIL कार्यरत.' }
        },
        { id: 'demand', weight: 0.15, invert: false, default: 6,
          label: { en: 'Global Demand Growth', mr: 'जागतिक मागणी वाढ' },
          low:   { en: 'Slow — EV/AI decelerates', mr: 'मंद — EV/AI मंदावते' },
          high:  { en: 'Explosive — faster than forecast', mr: 'स्फोटक — अंदाजापेक्षा वेगवान' },
          tip:   { en: 'EV penetration, AI data centres, defence buildout, grid expansion.', mr: 'EV प्रवेश, AI डेटा केंद्रे, संरक्षण बांधणी, ग्रिड विस्तार.' }
        },
        { id: 'stability', weight: 0.10, invert: false, default: 4,
          label: { en: 'Geopolitical Stability', mr: 'भू-राजकीय स्थिरता' },
          low:   { en: 'Low — escalating tensions', mr: 'कमी — वाढती तणाव' },
          high:  { en: 'High — frameworks hold', mr: 'उच्च — चौकटी टिकतात' },
          tip:   { en: 'Whether allied frameworks survive election cycles, export controls escalate or de-escalate.', mr: 'मित्र-राष्ट्र चौकटी निवडणूक चक्र टिकतात की नाही, निर्यात नियंत्रणे वाढतात की कमी होतात.' }
        }
      ],
      bands: [
        { min: 0,  max: 20,  color: '#C62828', icon: '🔒',
          label:    { en: 'Chinese Strategic Dominance', mr: 'चीनी धोरणात्मक वर्चस्व' },
          prob:     { en: 'Possible if diversification stalls (~25%)', mr: 'विविधीकरण थांबल्यास शक्य (~२५%)' },
          premise:  { en: 'Chinese export controls prove durable. IP restrictions prevent new entrants. Allied processing remains at announcement stage through 2030.', mr: 'चीनी निर्यात नियंत्रणे टिकाऊ ठरतात. IP निर्बंध नवीन प्रवेशकर्त्यांना रोखतात.' },
          what:     { en: ['Chinese IP restrictions prevent new entrants from reaching commercial scale', 'Mineral price manipulation continues to undercut investment economics', "China's share of REE refining remains above 85% through 2035", 'Supply disruptions 2027–2029 cause major economic costs (battery packs +40–50%)'], mr: ['चीनी IP निर्बंध नवीन प्रवेशकर्त्यांना व्यावसायिक स्केलपर्यंत पोहोचण्यापासून रोखतात', 'खनिज किंमत हेरफेर गुंतवणूक अर्थशास्त्र कमजोर करत राहते'] },
          indiaBase: { en: 'India remains heavily import-dependent. NCMM produces exploration data but no operational processing. Alliance frameworks remain diplomatic documents.', mr: 'भारत मोठ्या प्रमाणात आयात-अवलंबित राहतो. NCMM शोध डेटा तयार करते पण ऑपरेशनल प्रक्रिया नाही.' },
          indiaGood: { en: 'Even in this adverse scenario, AEA reform + processing parks creates relative advantage — India becomes one of few non-Chinese processing options.', mr: 'या प्रतिकूल परिस्थितीतही, AEA सुधारणा + प्रक्रिया उद्याने सापेक्ष फायदा निर्माण करतात.' },
          indiaBad:  { en: 'Exposed to Chinese leverage with no domestic fallback and no credible allied alternative.', mr: 'कोणताही देशांतर्गत पर्याय आणि कोणताही विश्वसनीय मित्र-राष्ट्र पर्याय नसताना चीनी दबावास सामोरे जावे लागते.' },
          watch:     { en: 'China extends Oct 2025 controls beyond Nov 2026; No Lynas Texas by 2028; India AEA reform stalls.', mr: 'चीन ऑक्टोबर २०२५ नियंत्रणे नोव्हेंबर २०२६ नंतर वाढवते; २०२८ पर्यंत Lynas Texas नाही; भारत AEA सुधारणा थांबते.' }
        },
        { min: 21, max: 40,  color: '#D4A017', icon: '⚖️',
          label:    { en: 'Managed Dependence', mr: 'व्यवस्थापित अवलंबित्व' },
          prob:     { en: 'Plausible base case (~20%)', mr: 'वाजवी आधारभूत परिस्थिती (~२०%)' },
          premise:  { en: 'China retains structural dominance but cannot fully weaponise it. Stockpiles, LFP adoption, and partial allied production absorb disruptions without crisis.', mr: 'चीन संरचनात्मक वर्चस्व राखते पण ते पूर्णपणे शस्त्र म्हणून वापरू शकत नाही.' },
          what:     { en: ['China retains dominance but disruption is absorbed by stockpiles and LFP adoption', 'Permanent price premium for non-Chinese supply accepted by consuming nations', 'Two parallel supply chains emerge at different price points'], mr: ['चीन वर्चस्व राखते पण व्यत्यय साठ्यांनी आणि LFP स्वीकाराने शोषला जातो'] },
          indiaBase: { en: 'Incremental progress — KABIL operational, some processing — but no strategic breakthrough. Minor player in allied architecture.', mr: 'वाढीव प्रगती — KABIL कार्यरत, काही प्रक्रिया — पण कोणताही धोरणात्मक सफलता नाही.' },
          indiaGood: { en: 'Strong Indian execution moves India into Allied Diversification outcomes even within globally constrained conditions.', mr: 'मजबूत भारतीय अंमलबजावणी जागतिक मर्यादित परिस्थितीतही भारताला मित्र-राष्ट्र विविधीकरण परिणामांकडे नेते.' },
          indiaBad:  { en: 'Perpetual dependency — importing from China at premium with no leverage.', mr: 'कायमस्वरूपी अवलंबित्व — कोणत्याही दबावाशिवाय प्रीमियमवर चीनकडून आयात.' },
          watch:     { en: 'LFP >50% of new EVs globally; Lynas Texas partial operation; India Exploration Licence fast-track demonstrated.', mr: 'जागतिक स्तरावर नवीन EV पैकी LFP >५०%; Lynas Texas आंशिक ऑपरेशन.' }
        },
        { min: 41, max: 60,  color: '#2D6A4F', icon: '🌐',
          label:    { en: 'Fragmented Multipolar', mr: 'विखुरलेले बहुध्रुवीय' },
          prob:     { en: 'Most likely under current trajectory (~35%)', mr: 'सध्याच्या मार्गावर सर्वात शक्यता (~३५%)' },
          premise:  { en: 'Allied diversification partially succeeds. China retains >60% of refined lithium/cobalt, ~80% graphite/REEs. Two parallel supply chains: Chinese (cheap) and allied (premium).', mr: 'मित्र-राष्ट्र विविधीकरण अंशतः यशस्वी होते. दोन समांतर पुरवठा साखळ्या उदयास येतात.' },
          what:     { en: ['Lynas Texas + MP Materials + 2-3 new entrants provide alternatives for sensitive applications', 'China retains >60% refined lithium/cobalt, ~80% battery-grade graphite/REEs', 'LFP batteries reduce cobalt dependence; two parallel supply chains emerge', 'Price volatility high but not catastrophic'], mr: ['Lynas Texas + MP Materials + २-३ नवीन प्रवेशकर्ते संवेदनशील अनुप्रयोगांसाठी पर्याय प्रदान करतात'] },
          indiaBase: { en: 'KABIL lithium comes online 2029. Some REE processing begins if AEA reformed. Alliance architecture provides resilience but not self-sufficiency.', mr: 'KABIL लिथियम २०२९ मध्ये ऑनलाइन येते. AEA सुधारल्यास काही REE प्रक्रिया सुरू होते.' },
          indiaGood: { en: 'India becomes a meaningful supplier in the allied architecture. First commercial REE separation operational. Quad commits capital to specific Indian projects.', mr: 'भारत मित्र-राष्ट्र आर्किटेक्चरमध्ये महत्त्वाचा पुरवठादार बनतो.' },
          indiaBad:  { en: 'India signs frameworks but does not execute. Allied partners shift focus to Australia and North America.', mr: 'भारत चौकटींवर स्वाक्षरी करतो पण अंमलबजावणी करत नाही.' },
          watch:     { en: 'Lynas Texas at commercial scale; first non-Chinese NdFeB magnet manufacturer at volume; India NCMM processing parks operational.', mr: 'Lynas Texas व्यावसायिक स्केलवर; पहिला गैर-चीनी NdFeB चुंबक उत्पादक.' }
        },
        { min: 61, max: 80,  color: '#1565C0', icon: '🤝',
          label:    { en: 'Allied Diversification', mr: 'मित्र-राष्ट्र विविधीकरण' },
          prob:     { en: 'Optimistic but plausible (~15%)', mr: 'आशावादी पण वाजवी (~१५%)' },
          premise:  { en: 'Significant non-Chinese processing capacity built. Major consuming nations achieve 30–40% non-Chinese supply by 2035. Kotasthane\'s December 2028 wager partially validated.', mr: 'लक्षणीय गैर-चीनी प्रक्रिया क्षमता बांधली. कोतस्थाने यांचा डिसेंबर २०२८ पैज अंशतः प्रमाणित.' },
          what:     { en: ['Major nations achieve 30-40% non-Chinese supply for most minerals by 2035', "Kotasthane's December 2028 wager partially validated", 'Price premium for allied supply narrows as scale increases', 'India positioned as key Quad supplier'], mr: ['प्रमुख देश 2035 पर्यंत बहुतांश खनिजांसाठी ३०-४०% गैर-चीनी पुरवठा साध्य करतात'] },
          indiaBase: { en: 'Meaningful player. Monazite processing begun. KABIL feeding domestic processing. Positioned as key Quad supplier.', mr: 'महत्त्वाचा खेळाडू. मोनझाइट प्रक्रिया सुरू. KABIL देशांतर्गत प्रक्रियेला आहार देते.' },
          indiaGood: { en: 'One of top 3 non-Chinese critical minerals processors globally. REE separation attracts Japanese technology investment and Korean battery offtake.', mr: 'जागतिक स्तरावर शीर्ष ३ गैर-चीनी महत्त्वाच्या खनिज प्रक्रियाकारांपैकी एक.' },
          indiaBad:  { en: 'Contributes ore but not processing — a mining economy in the allied architecture, not an industrial one.', mr: 'धातुक योगदान देते पण प्रक्रिया नाही — मित्र-राष्ट्र आर्किटेक्चरमध्ये खाण अर्थव्यवस्था.' },
          watch:     { en: "Kotasthane 2028 wager validation; India AEA reform operational; multiple MSP projects commissioning.", mr: 'कोतस्थाने २०२८ पैज प्रमाणीकरण; भारत AEA सुधारणा कार्यरत.' }
        },
        { min: 81, max: 100, color: '#185FA5', icon: '⚡',
          label:    { en: 'Accelerated Decoupling', mr: 'त्वरित विलगीकरण' },
          prob:     { en: 'High-execution scenario (~5%)', mr: 'उच्च-अंमलबजावणी परिस्थिती (~५%)' },
          premise:  { en: 'Chinese export controls trigger a non-linear response at wartime industrial scale. $200B+ committed to processing capacity by 2027. Kotasthane\'s December 2028 wager fully validated.',  mr: 'चीनी निर्यात नियंत्रणे युद्धकाळातील औद्योगिक स्केलवर गैर-रेखीय प्रतिसाद चालवतात.' },
          what:     { en: ['US, EU, and Japan commit $200B+ to processing and manufacturing capacity by 2027', "Kotasthane's December 2028 wager fully validated", 'NdFeB alternatives reach commercial viability by 2032', "India's Atomic Energy Act reformed by 2027; first commercial REE processing by 2030"], mr: ['अमेरिका, EU आणि जपान 2027 पर्यंत $200B+ प्रक्रिया आणि उत्पादन क्षमतेसाठी वचनबद्ध'] },
          indiaBase: { en: 'Significant player. Monazite processing operational by 2030. KABIL lithium feeding domestic processing. Primary supplier in allied architecture.', mr: 'महत्त्वपूर्ण खेळाडू. मोनझाइट प्रक्रिया २०३० पर्यंत कार्यरत.' },
          indiaGood: { en: 'Largest non-Chinese REE processor globally — entirely plausible given the resource endowment, now realised through policy execution.', mr: 'जागतिक स्तरावर सर्वात मोठा गैर-चीनी REE प्रक्रियाकार.' },
          indiaBad:  { en: 'Even in this globally positive scenario, benefit accrues to Australia, North America, and Malaysia instead of India.', mr: 'या जागतिक सकारात्मक परिस्थितीतही, फायदा भारताऐवजी ऑस्ट्रेलिया, उत्तर अमेरिका आणि मलेशियाकडे जातो.' },
          watch:     { en: "India's AEA reform in Parliament by 2026; Quad committing capital to specific projects; Chinese export controls causing visible political responses.", mr: 'भारताची AEA सुधारणा २०२६ पर्यंत संसदेत; Quad विशिष्ट प्रकल्पांसाठी भांडवल वचनबद्ध.' }
        }
      ]
    },
    timeline: {
      label: { en: '9.2 — Export Controls Timeline', mr: '९.२ — निर्यात नियंत्रण कालरेषा' },
      title: { en: 'How mineral weaponisation escalated: 2010–2026', mr: 'खनिज शस्त्रीकरण कसे वाढले: २०१०–२०२६' },
      intro: { en: "China's use of critical mineral supply chains as a geopolitical instrument has escalated in three distinct phases.", mr: 'भू-राजकीय साधन म्हणून महत्त्वाच्या खनिज पुरवठा साखळ्यांचा चीनचा वापर तीन वेगळ्या टप्प्यांत वाढला.' },
      events: [
        { year: '2010', label: { en: 'Japan Embargo', mr: 'जपान निर्बंध' }, color: '#D4A017', text: { en: "China halted REE exports to Japan during the Senkaku Islands dispute — the first explicit weaponisation of mineral supply chains. Japan's response became the global playbook: diversify, stockpile, fund overseas alternatives.", mr: 'सेनकाकू बेटांच्या वादादरम्यान चीनने जपानला REE निर्यात थांबवली — खनिज पुरवठा साखळ्यांचे पहिले स्पष्ट शस्त्रीकरण.' } },
        { year: '2023', label: { en: 'Graphite Export Controls', mr: 'ग्रेफाइट निर्यात नियंत्रणे' }, color: '#EF9F27', text: { en: 'China imposed export licensing requirements on natural graphite, affecting battery-grade graphite supply chains globally.', mr: 'चीनने नैसर्गिक ग्रेफाइटवर निर्यात परवाना आवश्यकता लागू केली.' } },
        { year: 'Dec 2024', label: { en: 'Gallium, Germanium, Antimony', mr: 'गॅलियम, जर्मेनियम, अँटिमनी' }, color: '#C62828', text: { en: 'China restricted exports of gallium (~99% Chinese production), germanium (~60%), and antimony to the United States. Prices surged 25–106%.', mr: 'चीनने गॅलियम (~९९% चीनी उत्पादन), जर्मेनियम (~६०%) आणि अँटिमनी निर्यात प्रतिबंधित केली.' } },
        { year: 'Feb 2025', label: { en: 'Expanded Controls', mr: 'विस्तारित नियंत्रणे' }, color: '#C62828', text: { en: 'China added tungsten, tellurium, bismuth, indium, and molybdenum to export restrictions. Defence and semiconductor supply chains affected simultaneously.', mr: 'चीनने टंगस्टन, टेल्युरियम, बिस्मथ, इंडियम आणि मोलिब्डेनम निर्यात प्रतिबंधांमध्ये जोडले.' } },
        { year: 'Apr 2025', label: { en: '7 Heavy REEs + Magnets', mr: '७ जड REE + चुंबक' }, color: '#B71C1C', text: { en: 'China imposed export controls on 7 heavy rare earth elements (including dysprosium and terbium) and permanent magnets. Direct impact on EV motors, wind turbines, and defence manufacturing.', mr: 'चीनने ७ जड रेअर अर्थ घटकांवर (डिस्प्रोसियम आणि टर्बियमसह) आणि स्थायी चुंबकांवर निर्यात नियंत्रणे लागू केली.' } },
        { year: 'Oct 2025', label: { en: 'Processing Equipment + Extraterritorial IP Controls', mr: 'प्रक्रिया उपकरणे + बाह्यप्रादेशिक IP नियंत्रणे' }, color: '#B71C1C', text: { en: 'Most significant escalation: five additional medium/heavy REEs (holmium, erbium, thulium, europium, ytterbium) added to the April 2025 list of seven, bringing the total to twelve. China also restricted milling, separation, refining, and magnet-manufacturing machinery and technology, plus LFP cathode and lithium refining technology. Most consequentially, an extraterritorial \'0.1% rule\' asserted Chinese jurisdiction over any foreign-made product containing even trace amounts of Chinese-origin rare earth content -- meaning countries building new REE processing capacity could now need Chinese export licences for the equipment itself, or for their own finished products if any Chinese-origin material was used anywhere in the chain.', mr: 'सर्वात महत्त्वाची वाढ: एप्रिल २०२५ च्या सात घटकांच्या यादीत आणखी पाच मध्यम/जड REE (होल्मियम, एर्बियम, थुलियम, युरोपियम, इटरबियम) जोडले, एकूण बारा झाले. चीनने REE साठी मिलिंग, विभाजन, शुद्धीकरण आणि चुंबक-उत्पादन यंत्रसामग्री आणि तंत्रज्ञान, तसेच LFP कॅथोड आणि लिथियम शुद्धीकरण तंत्रज्ञान प्रतिबंधित केले. सर्वात महत्त्वाचे, एका बाह्यप्रादेशिक \'०.१% नियमा\'ने चीनी-उत्पत्तीच्या रेअर अर्थ सामग्रीचा अल्प अंशही असलेल्या कोणत्याही परदेशी-निर्मित उत्पादनावर चीनी अधिकारक्षेत्र दावा केला.' } },
        { year: 'Nov 10, 2026', label: { en: 'Suspension expiry — the decisive date', mr: 'स्थगिती समाप्ती — निर्णायक तारीख' }, color: '#6B7280', text: { en: 'On November 7, 2025, following a high-level US-China meeting, China suspended the October 2025 extraterritorial and five-element controls for one year, until November 10, 2026 (the April 2025 controls on the original seven heavy REEs remain in force throughout). The critical question for this entire scenario model: does China extend the suspension, let it lapse and reimpose the full October package, or expand it further? This single decision is the most important near-term input to the Chinese Leverage driver in 9.1.', mr: '७ नोव्हेंबर २०२५ रोजी, उच्च-स्तरीय US-चीन बैठकीनंतर, चीनने ऑक्टोबर २०२५ च्या बाह्यप्रादेशिक आणि पाच-घटक नियंत्रणांना एक वर्षासाठी, १० नोव्हेंबर २०२६ पर्यंत स्थगित केले. या संपूर्ण परिस्थिती मॉडेलसाठी महत्त्वाचा प्रश्न: चीन स्थगिती वाढवते, ती संपू देऊन संपूर्ण ऑक्टोबर पॅकेज पुन्हा लागू करते, की आणखी विस्तारते? हा एकमेव निर्णय ९.१ मधील चीनी ताकद चलासाठी सर्वात महत्त्वाचा जवळचा इनपुट आहे.' } }
      ],
      sources: ['iea_oct_2025', 'kotasthane_mercatus', 'china_export_suspension_2025']
    },
    watch: {
      label: { en: '9.3 — What to Watch', mr: '९.३ — काय पाहायचे' },
      title: { en: '10 indicators that will tell you which scenario is emerging', mr: '१० निर्देशक जे सांगतील कोणती परिस्थिती उदयास येत आहे' },
      intro: { en: 'These indicators update the scenario probabilities. When several move green simultaneously, the world is moving toward Allied Diversification or Accelerated Decoupling. When several turn red, Managed Dependence or Chinese Dominance is hardening.', mr: 'हे निर्देशक परिस्थिती संभाव्यता अद्यतनित करतात. जेव्हा अनेक एकाच वेळी हिरवे होतात, जग मित्र-राष्ट्र विविधीकरण किंवा त्वरित विलगीकरणाकडे जात असते.' },
      items: [
        { num: 1, category: 'india', indicator: { en: 'Atomic Energy Act reform', mr: 'अणुऊर्जा कायदा सुधारणा' }, status: 'red', statusLabel: { en: 'No movement', mr: 'कोणतीही हालचाल नाही' }, detail: { en: 'No parliamentary or executive action to create carve-out for commercial REE processing.', mr: 'व्यावसायिक REE प्रक्रियेसाठी कार्व्ह-आउट तयार करण्यासाठी कोणतीही संसदीय किंवा कार्यकारी कृती नाही.' }, scenario: { en: 'Critical for scenarios 4–5', mr: 'परिस्थिती ४-५ साठी महत्त्वाचे' }, src: 'india_mom_2023' },
        { num: 2, category: 'india', indicator: { en: 'NCMM processing parks operational', mr: 'NCMM प्रक्रिया उद्याने कार्यरत' }, status: 'red', statusLabel: { en: 'Planned only', mr: 'केवळ नियोजित' }, detail: { en: '4 parks announced (AP, Gujarat, Maharashtra, Odisha). None operational as of June 2026.', mr: '४ उद्याने जाहीर (AP, गुजरात, महाराष्ट्र, ओडिशा). जून २०२६ पर्यंत कोणतेही कार्यरत नाही.' }, scenario: { en: 'Required for any scenario above Managed Dependence', mr: 'व्यवस्थापित अवलंबित्वाच्या वरील कोणत्याही परिस्थितीसाठी आवश्यक' }, src: 'ncmm_2026' },
        { num: 3, category: 'india', indicator: { en: 'KABIL Argentina progress', mr: 'KABIL अर्जेंटिना प्रगती' }, status: 'amber', statusLabel: { en: 'Exploration complete', mr: 'शोध पूर्ण' }, detail: { en: 'Phase 1 non-invasive exploration complete. Feasibility study targeted December 2027. Production end-2029.', mr: 'टप्पा १ गैर-आक्रमक शोध पूर्ण. व्यवहार्यता अभ्यास डिसेंबर २०२७ लक्ष्य. उत्पादन २०२९ च्या शेवटी.' }, scenario: { en: 'Operational signal for Indian execution variable', mr: 'भारतीय अंमलबजावणी चलासाठी ऑपरेशनल संकेत' }, src: 'ncmm_2026' },
        { num: 4, category: 'global', indicator: { en: 'Lynas Texas status', mr: 'Lynas Texas स्थिती' }, status: 'amber', statusLabel: { en: 'Under construction', mr: 'बांधकाम सुरू' }, detail: { en: 'US-backed Lynas Texas REE separation facility under construction. Timeline and commercial scale pending.', mr: 'US-समर्थित Lynas Texas REE विभाजन सुविधा बांधकामाधीन. कालरेषा आणि व्यावसायिक स्केल प्रलंबित.' }, scenario: { en: 'Global bellwether for allied processing variable', mr: 'मित्र-राष्ट्र प्रक्रिया चलासाठी जागतिक बेलवेदर' }, src: null },
        { num: 5, category: 'india', indicator: { en: 'Gallium recovery restart (NALCO commercial pathway)', mr: 'गॅलियम पुनर्प्राप्ती पुनरारंभ (NALCO व्यावसायिक मार्ग)' }, status: 'amber', statusLabel: { en: 'Reviving — pre-commercial', mr: 'पुनरुज्जीवन — व्यावसायिकपूर्व' }, detail: { en: 'India has 1,13,100 KT gallium resources at bauxite processing operations. NALCO announced (Aug 2025) it is advancing toward commercial gallium production within roughly two years using indigenous BARC/Heavy Water Board technology; Hindalco has no active programme.', mr: 'भारताकडे बॉक्साइट प्रक्रिया कार्यांमध्ये १,१३,१०० KT गॅलियम संसाधने आहेत. NALCO ने (ऑगस्ट २०२५) सुमारे दोन वर्षांत व्यावसायिक गॅलियम उत्पादनाकडे वाटचाल जाहीर केली; हिंडाल्कोचा कोणताही सक्रिय कार्यक्रम नाही.' }, scenario: { en: 'High-tractability India execution indicator', mr: 'उच्च-ट्रॅक्टेबिलिटी भारत अंमलबजावणी निर्देशक' }, src: 'india_mom_2023' },
        { num: 6, category: 'india', indicator: { en: "India's stockpile buildout", mr: 'भारताचे साठेबाजी बांधकाम' }, status: 'red', statusLabel: { en: '₹500 Cr allocated, not operational', mr: '₹५०० कोटी वाटप, कार्यरत नाही' }, detail: { en: '₹500 crore allocated under NCMM for strategic stockpiling. No operational stockpile as of June 2026.', mr: 'NCMM अंतर्गत धोरणात्मक साठेबाजीसाठी ₹५०० कोटी वाटप. जून २०२६ पर्यंत कोणताही ऑपरेशनल साठा नाही.' }, scenario: { en: 'Fastest deployable tool', mr: 'सर्वात वेगाने तैनात करण्यायोग्य साधन' }, src: 'ncmm_2026' },
        { num: 7, category: 'india', indicator: { en: 'REE processing capacity (India)', mr: 'REE प्रक्रिया क्षमता (भारत)' }, status: 'red', statusLabel: { en: '~2,345 t/yr IREL only', mr: '~२,३४५ t/yr केवळ IREL' }, detail: { en: 'IREL produces ~2,345 tonnes REE oxide/year — not commercial scale. No private sector REE processing.', mr: 'IREL ~२,३४५ टन REE ऑक्साइड/वर्ष उत्पादन करते — व्यावसायिक स्केल नाही.' }, scenario: { en: 'Core capability gap — most consequential single indicator', mr: 'मुख्य क्षमता अंतर — सर्वात परिणामकारक एकल निर्देशक' }, src: 'india_mom_2023' },
        { num: 8, category: 'global', indicator: { en: 'MSP projects commissioned', mr: 'MSP प्रकल्प चालू' }, status: 'red', statusLabel: { en: '0 operational midstream', mr: '० ऑपरेशनल मिडस्ट्रीम' }, detail: { en: 'Minerals Security Partnership has 19+ projects in pipeline. No operational midstream processing produced by any MSP project as of June 2026.', mr: 'खनिज सुरक्षा भागीदारीमध्ये १९+ प्रकल्प पाइपलाइनमध्ये. जून २०२६ पर्यंत कोणत्याही MSP प्रकल्पाद्वारे कोणतीही ऑपरेशनल मिडस्ट्रीम प्रक्रिया उत्पादित नाही.' }, scenario: { en: 'Framework-to-execution test', mr: 'चौकट-ते-अंमलबजावणी चाचणी' }, src: null },
        { num: 9, category: 'global', indicator: { en: "China's refining share (IEA annual)", mr: 'चीनचा शुद्धीकरण वाटा (IEA वार्षिक)' }, status: 'red', statusLabel: { en: '86% top-3, concentration increasing', mr: '८६% शीर्ष-३, एकाग्रता वाढत आहे' }, detail: { en: 'Top 3 refining nations averaged 86% share in 2024, up from 82% in 2020. Direction: concentration is increasing.', mr: 'शीर्ष ३ शुद्धीकरण देशांनी २०२४ मध्ये सरासरी ८६% वाटा, २०२० मध्ये ८२% वरून वाढला.' }, scenario: { en: 'Primary global benchmark — if this falls to <80%, Chinese leverage variable decreases', mr: 'प्राथमिक जागतिक बेंचमार्क — हे <८०% वर आल्यास, चीनी ताकद चल कमी होते' }, src: 'iea_outlook_2025' },
        { num: 10, category: 'global', indicator: { en: 'China November 2026 export control decision', mr: 'चीन नोव्हेंबर २०२६ निर्यात नियंत्रण निर्णय' }, status: 'amber', statusLabel: { en: 'Critical date approaching', mr: 'महत्त्वाची तारीख जवळ येत आहे' }, detail: { en: 'October 2025 controls announced with one-year duration. Decision to extend, expand, or lapse is the single most important near-term indicator.', mr: 'ऑक्टोबर २०२५ नियंत्रणे एक वर्षाच्या कालावधीसह जाहीर. वाढवणे, विस्तारणे किंवा समाप्त होऊ देण्याचा निर्णय सर्वात महत्त्वाचा जवळच्या काळातील निर्देशक.' }, scenario: { en: 'Direct input to Chinese leverage variable', mr: 'चीनी ताकद चलासाठी थेट इनपुट' }, src: 'iea_oct_2025' }
      ]
    }
  }

}; // end DB

// ══════════════════════════════════════════════
// TAB 2 — WHY IT MATTERS
// ══════════════════════════════════════════════
DB.tab_why = {
  nav: { en: '02 · Why It Matters', mr: '०२ · हे का महत्त्वाचे' },
  sections: [
    {
      id: 'why_21',
      label: { en: '2.1 — The Demand Surge', mr: '२.१ — मागणी वाढ' },
      title: { en: 'A demand wave unlike anything these supply chains have seen', mr: 'या पुरवठा साखळ्यांनी कधीही न पाहिलेली मागणी लाट' },
      intro: { en: 'For most of industrial history, demand for metals grew slowly and predictably. What is happening now is different. The simultaneous scale-up of electric vehicles, renewable energy, AI infrastructure, and advanced defence systems is creating demand growth that is faster, more simultaneous, and more concentrated than anything these supply chains have previously handled.',
               mr: 'बहुतेक औद्योगिक इतिहासात, धातूंची मागणी हळूहळू आणि अंदाज करण्यायोग्य रीतीने वाढली. आता जे घडत आहे ते वेगळे आहे. इलेक्ट्रिक वाहने, अक्षय ऊर्जा, AI पायाभूत सुविधा आणि प्रगत संरक्षण प्रणालींचे एकाच वेळी स्केल-अप मागणी वाढ निर्माण करत आहे जी वेगवान, अधिक एकाच वेळी आणि या पुरवठा साखळ्यांनी आधी हाताळलेल्या कोणत्याही गोष्टीपेक्षा अधिक केंद्रित आहे.' },
      demandTable: {
        caption: { en: '2024 actual demand growth — key minerals', mr: '२०२४ प्रत्यक्ष मागणी वाढ — प्रमुख खनिजे' },
        src: 'iea_outlook_2025',
        rows: [
          { mineral: { en: 'Lithium', mr: 'लिथियम' },    growth: '~30%',  driver: { en: 'EV batteries, grid storage',      mr: 'EV बॅटऱ्या, ग्रिड साठवण' },    note: { en: 'Fastest-growing critical mineral', mr: 'सर्वात वेगाने वाढणारे महत्त्वाचे खनिज' } },
          { mineral: { en: 'Nickel',   mr: 'निकेल' },    growth: '6–8%',  driver: { en: 'High-nickel EV cathodes',           mr: 'हाय-निकेल EV कॅथोड' },            note: { en: 'Indonesia leads at ~61% production', mr: 'इंडोनेशिया ~६१% उत्पादनात आघाडीवर' } },
          { mineral: { en: 'Cobalt',   mr: 'कोबाल्ट' },  growth: '6–8%',  driver: { en: 'EV battery cathodes, aerospace',    mr: 'EV बॅटरी कॅथोड, एरोस्पेस' },      note: { en: 'DRC: 73% of world production',       mr: 'DRC: ७३% जागतिक उत्पादन' } },
          { mineral: { en: 'Graphite', mr: 'ग्रॅफाइट' }, growth: '6–8%',  driver: { en: 'EV battery anodes',                mr: 'EV बॅटरी अॅनोड' },                note: { en: 'China ~95% battery-grade',           mr: 'चीन ~९५% बॅटरी-ग्रेड' } },
          { mineral: { en: 'REEs',     mr: 'REE' },       growth: '6–8%',  driver: { en: 'EV motors, wind turbines',          mr: 'EV मोटर, पवन टर्बाइन' },          note: { en: 'China ~90% of refining',             mr: 'चीन ~९०% शुद्धीकरण' } },
          { mineral: { en: 'Copper',   mr: 'तांबे' },     growth: '~3.2%',  driver: { en: 'All electrification',               mr: 'सर्व विद्युतीकरण' },               note: { en: 'China ~60% of global refined copper demand', mr: 'जागतिक शुद्ध तांबे मागणीत चीनचा वाटा ~६०%' } }
        ]
      },
      forecastTable: {
        caption: { en: 'IEA STEPS demand forecast — to 2040', mr: 'IEA STEPS मागणी अंदाज — २०४० पर्यंत' },
        src: 'iea_outlook_2025',
        rows: [
          { mineral: { en: 'Lithium',  mr: 'लिथियम' },  growth: { en: '~5×', mr: '~५ पट' }, driver: { en: 'EV batteries, grid storage',   mr: 'EV बॅटऱ्या, ग्रिड साठवण' },   note: { en: 'Most dramatic growth projection', mr: 'सर्वात नाटकीय वाढ अंदाज' } },
          { mineral: { en: 'Graphite', mr: 'ग्रॅफाइट' }, growth: { en: '~2×', mr: '~२ पट' }, driver: { en: 'EV battery anodes',            mr: 'EV बॅटरी अॅनोड' },            note: { en: 'India has deposits; zero battery-grade processing', mr: 'भारतात साठे; शून्य बॅटरी-ग्रेड प्रक्रिया' } },
          { mineral: { en: 'Nickel',   mr: 'निकेल' },   growth: { en: '~2×', mr: '~२ पट' }, driver: { en: 'High-nickel EV cathodes',       mr: 'हाय-निकेल EV कॅथोड' },        note: { en: 'Indonesia model — export ban succeeded', mr: 'इंडोनेशिया मॉडेल — निर्यात बंदी यशस्वी' } },
          { mineral: { en: 'Cobalt',   mr: 'कोबाल्ट' },  growth: { en: '+50–60%', mr: '+५०–६०%' }, driver: { en: 'Battery cathodes', mr: 'बॅटरी कॅथोड' }, note: { en: 'LFP adoption moderating growth', mr: 'LFP स्वीकाराने वाढ मंदावली' } },
          { mineral: { en: 'REEs',     mr: 'REE' },      growth: { en: '+50–60%', mr: '+५०–६०%' }, driver: { en: 'EV motors, wind turbines', mr: 'EV मोटर, पवन टर्बाइन' }, note: { en: 'No substitute for Nd, Dy', mr: 'Nd, Dy साठी कोणताही पर्याय नाही' } }
        ]
      },
      callout: {
        stat:   '290,000 MT',
        label:  { en: 'World lithium production 2025 — up 31% from 2024', mr: 'जागतिक लिथियम उत्पादन २०२५ — २०२४ पेक्षा ३१% वाढ' },
        context: { en: 'Why this number matters: the table above shows demand-side growth (~30% in 2024). This figure is the supply-side response one year later — actual mined production rising 31% in 2025. The two move together so far, but the 2.5 — Supply Response Problem section below explains why this pace cannot be assumed to continue.', mr: 'हा आकडा का महत्त्वाचा आहे: वरील तक्त्यात मागणी-बाजूची वाढ (२०२४ मध्ये ~३०%) दर्शविली आहे. हा आकडा एक वर्षानंतरचा पुरवठा-बाजूचा प्रतिसाद आहे — २०२५ मध्ये प्रत्यक्ष उत्खनन उत्पादन ३१% वाढले. आतापर्यंत हे दोन्ही एकत्र वाढत आहेत, पण खालील विभाग २.५ स्पष्ट करतो की हा वेग कायम राहील असे गृहीत धरता येत नाही.' },
        src:    'usgs_mcs_2026'
      },
      copperBox: {
        title: { en: 'Why Copper Is a Different Kind of Problem', mr: 'तांबे ही वेगळ्या प्रकारची समस्या का आहे' },
        framingNote: { en: 'Copper does not fit the China-concentration story that dominates this tab. It is geographically diverse, geopolitically unremarkable, and faces no major refining chokepoint. Its constraint is structural and physical: depleting ore grades, a multi-decade mine pipeline, and zero substitutability in wiring — at the exact moment electrification multiplies demand. This is why copper gets its own box rather than a row in the table above.', mr: 'तांबे या टॅबवर वर्चस्व असलेल्या चीन-एकाग्रता कथेत बसत नाही. ते भौगोलिकदृष्ट्या विविधतापूर्ण आहे आणि कोणताही मोठा शुद्धीकरण अडथळा नाही. त्याची अडचण संरचनात्मक आणि भौतिक आहे: कमी होत जाणारे धातुक दर्जे, अनेक दशकांची खाण पाइपलाइन, आणि वायरिंगमध्ये शून्य पर्याय — नेमक्या त्याच क्षणी जेव्हा विद्युतीकरण मागणी अनेक पटीने वाढवते.' },
        points: [
          { en: 'No practical substitute exists for electrical wiring and conductivity applications', mr: 'विद्युत वायरिंग आणि वाहकता उपयोगांसाठी कोणताही व्यावहारिक पर्याय नाही' },
          { en: 'IEA STEPS projects ~30% demand growth to 2040 — even this conservative estimate implies a widening gap against a declining mine pipeline', mr: 'IEA STEPS नुसार २०४० पर्यंत मागणीत ~३०% वाढ — हा सावध अंदाजही घटत्या खाण पाइपलाइनसमोर वाढती तफावत दर्शवतो' },
          { en: 'Global mined copper supply is projected to peak in the late 2020s at just over 24 Mt, then decline to under 19 Mt by 2035 due to declining ore grades and reserve depletion', mr: 'जागतिक उत्खनित तांबे पुरवठा २०२० च्या उत्तरार्धात सुमारे २४ Mt वर शिखरावर पोहोचेल, नंतर घटत्या धातुक दर्जामुळे २०३५ पर्यंत १९ Mt पेक्षा कमी होईल' },
          { en: 'To meet Net Zero goals, recycled (secondary) supply must rise to meet 35% of demand by 2050 — up from a much smaller share today', mr: 'नेट झिरो उद्दिष्टे पूर्ण करण्यासाठी, पुनर्वापरित (दुय्यम) पुरवठा २०५० पर्यंत मागणीच्या ३५% पर्यंत वाढणे आवश्यक आहे' },
          { en: 'Each EV contains roughly 83 kg of copper — around 23 kg more than a comparable petrol car', mr: 'प्रत्येक EV मध्ये अंदाजे ८३ kg तांबे असते — तुलनीय पेट्रोल कारपेक्षा सुमारे २३ kg जास्त' }
        ],
        src: 'ica_2022',
        additionalSrc: 'iea_outlook_2025'
      },
      investmentParadox: {
        title: { en: 'Investment Paradox', mr: 'गुंतवणूक विरोधाभास' },
        body:  { en: 'In 2024, investment in critical mineral supply chains grew only ~5%, far below what projections require. When prices are high, investors rush in — but the mine takes roughly 18 years to come online on average, and 29 years in the US. When prices fall (as with lithium in 2023-24, down 80%), projects are cancelled long before that horizon is reached. A capital cycle measured in quarters cannot supply an industry whose lead times are measured in decades.',
                 mr: '२०२४ मध्ये, महत्त्वाच्या खनिज पुरवठा साखळ्यांमधील गुंतवणूक केवळ ~५% वाढली, अंदाजांपेक्षा खूप कमी. जेव्हा किंमती जास्त असतात, गुंतवणूकदार धावतात — पण खाण सरासरी सुमारे १८ वर्षांत ऑनलाइन येते, आणि अमेरिकेत २९ वर्षे. जेव्हा किंमती घसरतात (लिथियम २०२३-२४ मध्ये ८०% घसरला), प्रकल्प त्या आधीच रद्द होतात.' }
      },
      defenceSection: {
        title: { en: 'The Defence Dimension', mr: 'संरक्षण आयाम' },
        intro: { en: 'Modern defence systems are mineral-intensive in ways that are rarely acknowledged publicly. High-performance permanent magnets are required in radar systems, missile guidance, drone propulsion, submarine sonar, and electronic warfare. These magnets require neodymium, dysprosium, samarium, and terbium — almost entirely controlled by China at the processing stage.',
                 mr: 'आधुनिक संरक्षण प्रणाली खनिज-सघन आहेत अशा प्रकारे ज्या क्वचितच सार्वजनिकपणे मान्य केल्या जातात. रडार प्रणाली, क्षेपणास्त्र मार्गदर्शन, ड्रोन प्रणोदन, पाणबुडी सोनार आणि इलेक्ट्रॉनिक युद्धात उच्च-कार्यक्षमतेचे स्थायी चुंबक आवश्यक आहेत. या चुंबकांसाठी निओडायमियम, डिस्प्रोसियम, सॅमेरियम आणि टर्बियम आवश्यक — प्रक्रिया टप्प्यावर जवळजवळ संपूर्णपणे चीनच्या नियंत्रणात.' },
        stats: [
          { label: { en: 'Virginia-class submarine (REE content)', mr: 'Virginia-class पाणबुडी (REE सामग्री)' }, value: '~4,200 kg' },
          { label: { en: 'Arleigh Burke-class destroyer (REE content)', mr: 'Arleigh Burke-class विनाशिका (REE सामग्री)' }, value: '~2,600 kg' },
          { label: { en: 'F-35 fighter jet (REE content)', mr: 'F-३५ लढाऊ विमान (REE सामग्री)' }, value: '~418 kg' },
          { label: { en: 'NATO Dec 2024: heavy REEs declared critical', mr: 'NATO डिसेंबर २०२४: जड REE महत्त्वाचे घोषित' }, value: '7 elements' }
        ],
        droneNote: { en: 'Drones and uncrewed systems are a large, fast-growing demand source that platform-level figures understate. Each drone motor uses multiple NdFeB permanent magnets — a single multi-rotor UAV can contain hundreds of them — and military-grade drones require N48-N52 magnet grades with heavy rare earth (dysprosium/terbium) additions for thermal stability, well above the grades used in consumer drones. The scale is illustrated by Ukraine\'s 2024 drone programme, reported at around 1.2 million units produced for the year — at even modest per-unit magnet content, aggregate demand from uncrewed systems can rival that of large crewed platforms.', mr: 'ड्रोन आणि मानवरहित प्रणाली ही मोठी, वेगाने वाढणारी मागणी स्रोत आहे जी प्लॅटफॉर्म-स्तरीय आकडे कमी लेखतात. प्रत्येक ड्रोन मोटरमध्ये अनेक NdFeB स्थायी चुंबक वापरले जातात — एक मल्टी-रोटर UAV मध्ये शेकडो असू शकतात — आणि लष्करी-दर्जाच्या ड्रोनसाठी थर्मल स्थिरतेसाठी जड रेअर अर्थसह N48-N52 चुंबक श्रेणी आवश्यक.' },
        src: 'west_point_2025',
        droneSrc: 'rare_earth_exchanges_2025',
        indiaAngle: { en: 'In FY 2024-25, India imported nearly 54,000 tonnes of rare earth magnets, with 93% sourced from China, valued at roughly Rs 1,744 crore. India\'s flagship indigenous defence platforms — BrahMos missiles, Tejas fighter jets, and Akash air defence systems — rely on subsystems incorporating these imported magnets. India\'s own REE production (around 2,900 tonnes in 2024) is concentrated in light rare earths; heavy rare earths such as dysprosium and terbium, essential for high-performance magnets, are effectively 100% imported as domestic deposits lack them.', mr: '२०२४-२५ या आर्थिक वर्षात, भारताने जवळपास ५४,००० टन रेअर अर्थ चुंबक आयात केले, त्यापैकी ९३% चीनकडून, अंदाजे १,७४४ कोटी रुपये किंमतीचे. भारताचे प्रमुख स्वदेशी संरक्षण प्लॅटफॉर्म — ब्रह्मोस क्षेपणास्त्रे, तेजस लढाऊ विमाने आणि आकाश हवाई संरक्षण प्रणाली — या आयातित चुंबकांवर अवलंबून आहेत. भारताचे स्वतःचे REE उत्पादन (२०२४ मध्ये सुमारे २,९०० टन) हलक्या रेअर अर्थमध्ये केंद्रित आहे; जड रेअर अर्थ प्रभावीपणे १००% आयात केले जातात.', src: 'vif_ree_2025' }
      },
      sources: ['iea_outlook_2025', 'usgs_mcs_2026', 'ica_2022', 'west_point_2025', 'rare_earth_exchanges_2025', 'vif_ree_2025']
    },
    {
      id: 'why_22',
      label: { en: '2.2 — The Green Paradox', mr: '२.२ — हरित विरोधाभास' },
      title: { en: 'Solving climate change requires more mining', mr: 'हवामान बदल सोडवण्यासाठी अधिक खाणकाम आवश्यक आहे' },
      intro: { en: 'The clean energy transition is not a shift away from resource extraction. It is a shift in which resources we extract. Every technology replacing fossil fuels — solar panels, wind turbines, electric vehicles, battery storage — is more mineral-intensive than the technology it replaces.',
               mr: 'स्वच्छ ऊर्जा संक्रमण संसाधन उत्खननापासून दूर जाणे नाही. हे आपण कोणते संसाधने काढतो यात बदल आहे. जीवाश्म इंधन बदलणारे प्रत्येक तंत्रज्ञान — सौर पॅनेल, पवन टर्बाइन, इलेक्ट्रिक वाहने, बॅटरी साठवण — ते बदलत असलेल्या तंत्रज्ञानापेक्षा अधिक खनिज-सघन आहे.' },
      comparisonStats: [
        { tech: { en: 'Electric vehicle', mr: 'इलेक्ट्रिक वाहन' }, stat: { en: '6× more minerals than a conventional petrol car', mr: 'पारंपरिक पेट्रोल कारपेक्षा ६ पट जास्त खनिजे' }, src: 'iea_cet_2021' },
        { tech: { en: 'Offshore wind turbine', mr: 'अपतटीय पवन टर्बाइन' }, stat: { en: '9× more minerals than a gas plant for equivalent energy', mr: 'समान उर्जेसाठी गॅस प्रकल्पापेक्षा ९ पट जास्त खनिजे' }, src: 'iea_cet_2021' }
      ],
      keyInsight: { en: 'The energy transition does not reduce our dependence on extraction. It redirects it.', mr: 'ऊर्जा संक्रमण उत्खननावरील आपले अवलंबित्व कमी करत नाही. ते पुनर्निर्देशित करते.' },
      hiddenCost: {
        title: { en: 'The hidden environmental cost', mr: 'लपलेला पर्यावरणीय खर्च' },
        body:  { en: "The energy transition has not eliminated extraction costs. It has relocated them. The minerals required for clean technology are often sourced from regions with weaker environmental governance — where costs fall on communities far from the consumers who benefit. Tab 6 examines this in detail.",
                 mr: 'ऊर्जा संक्रमणाने उत्खनन खर्च संपवला नाही. त्याने ते स्थलांतरित केले. स्वच्छ तंत्रज्ञानासाठी आवश्यक खनिजे अनेकदा कमकुवत पर्यावरणीय प्रशासन असलेल्या प्रदेशांमधून मिळवली जातात. टॅब ६ हे तपशीलवार तपासते.' }
      },
      sources: ['iea_cet_2021', 'global_witness_2024']
    },
    {
      id: 'why_23',
      label: { en: '2.3 — New Demand Drivers', mr: '२.३ — नवीन मागणी चालक' },
      title: { en: 'AI infrastructure and defence: the demand the energy transition numbers miss', mr: 'AI पायाभूत सुविधा आणि संरक्षण: ऊर्जा संक्रमणाच्या आकड्यांमध्ये न दिसणारी मागणी' },
      intro: { en: 'Most critical minerals analyses focus on EVs and clean energy. Two large and growing demand drivers are underappreciated in public discussion: the buildout of AI infrastructure, and the deepening mineral dependency of modern defence systems. Both matter acutely for India.',
               mr: 'बहुतेक महत्त्वाच्या खनिज विश्लेषणे EV आणि स्वच्छ ऊर्जेवर लक्ष केंद्रित करतात. दोन मोठे आणि वाढणारे मागणी चालक सार्वजनिक चर्चेत कमी लेखले जातात: AI पायाभूत सुविधांचे बांधकाम, आणि आधुनिक संरक्षण प्रणालींचे वाढते खनिज अवलंबित्व.' },
      aiSection: {
        title: { en: 'The AI Dimension', mr: 'AI आयाम' },
        intro: { en: 'AI runs in the cloud, but its foundations lie underground. Every data centre embeds critical minerals in its servers, cooling systems, power electronics, and networking.',
                 mr: 'AI क्लाउडमध्ये चालते, पण त्याचा पाया जमिनीखाली आहे. प्रत्येक डेटा सेंटर त्याच्या सर्व्हर, कूलिंग सिस्टम, पॉवर इलेक्ट्रॉनिक्स आणि नेटवर्किंगमध्ये महत्त्वाची खनिजे एम्बेड करते.' },
        stats: [
          { label: { en: 'Global data centre investment 2025', mr: 'जागतिक डेटा सेंटर गुंतवणूक २०२५' }, value: '>$400B', src: 'iea_ai_2026' },
          { label: { en: 'Expected growth in 2026', mr: '२०२६ मध्ये अपेक्षित वाढ' }, value: '+75%', src: 'iea_ai_2026' },
          { label: { en: 'Data centre load growth 2014–2024', mr: 'डेटा सेंटर लोड वाढ २०१४-२०२४' }, value: '3×', src: 'iea_ai_2026' },
          { label: { en: 'Minerals per MW of data centre capacity', mr: 'प्रति MW डेटा सेंटर क्षमतेत खनिजे' }, value: '60–75 tonnes', src: 'wef_2025' },
          { label: { en: 'Gallium/germanium price spike after 2023–24 controls', mr: 'गॅलियम/जर्मेनियम किंमत वाढ २०२३-२४ नंतर' }, value: '25–30%', src: 'wef_2025' }
        ],
        indiaAngle: { en: "India's semiconductor mission (ISM, Dholera fab) requires gallium for GaN chips. India holds 1,13,100 KT of gallium resources at bauxite processing operations (Odisha, Jharkhand, Gujarat). As of August 2025, NALCO announced it is advancing toward becoming India's first commercial gallium producer within roughly two years, using indigenous technology developed with BARC and the Heavy Water Board, backed by a wider Rs 35,000 crore expansion plan including the Pottangi bauxite mine. Hindalco recovered some gallium in the past but currently has no active programme. The mineral-to-chip link is being rebuilt, but remains pre-commercial.",
                      mr: "भारताच्या सेमीकंडक्टर मिशनला (ISM, धोलेरा फॅब) GaN चिप्ससाठी गॅलियम लागतो. भारताकडे बॉक्साइट प्रक्रिया कार्यांमध्ये (ओडिशा, झारखंड, गुजरात) १,१३,१०० KT गॅलियम संसाधने आहेत. ऑगस्ट २०२५ पासून, NALCO सुमारे दोन वर्षांत भारताचा पहिला व्यावसायिक गॅलियम उत्पादक बनण्याच्या दिशेने वाटचाल करत असल्याचे जाहीर केले. हिंडाल्कोने भूतकाळात काही गॅलियम पुनर्प्राप्त केले पण सध्या कोणताही सक्रिय कार्यक्रम नाही. खनिज-ते-चिप दुवा पुन्हा बांधला जात आहे, पण तो अद्याप व्यावसायिकपूर्व आहे.", src: 'alcircle_nalco_2025' }
      }
      ,
      sources: ['iea_ai_2026', 'wef_2025', 'alcircle_nalco_2025']
    },
    {
      id: 'why_24',
      label: { en: '2.4 — The Supply Concentration Problem', mr: '२.४ — पुरवठा एकाग्रतेची समस्या' },
      title: { en: 'Abundance does not equal security', mr: 'विपुलता म्हणजे सुरक्षितता नाही' },
      intro: { en: 'There is enough of most critical minerals in the ground to meet projected demand. The problem is not geological scarcity. The problem is that the mining, processing, and refining of these minerals is concentrated in a very small number of countries — in some cases, effectively one.',
               mr: 'अंदाजित मागणी पूर्ण करण्यासाठी जमिनीत बहुतेक महत्त्वाच्या खनिजांचे पुरेसे साठे आहेत. समस्या भूगर्भीय दुर्मिळता नाही. समस्या ही आहे की या खनिजांचे खाणकाम, प्रक्रिया आणि शुद्धीकरण खूप कमी देशांमध्ये केंद्रित आहे — काही प्रकरणांमध्ये, प्रभावीपणे एकाच ठिकाणी.' },
      concStats: {
        caption: { en: 'Processing concentration — IEA 2025 data', mr: 'प्रक्रिया एकाग्रता — IEA २०२५ आकडेवारी' },
        src: 'iea_outlook_2025',
        rows: [
          { label: { en: 'Top 3 refining nations market share (2024)', mr: 'शीर्ष ३ शुद्धीकरण देशांचा बाजार वाटा (२०२४)' }, value: '86%', note: { en: 'Up from 82% in 2020 — concentration is increasing', mr: '२०२० मध्ये ८२% वरून — एकाग्रता वाढत आहे' } },
          { label: { en: 'Minerals where China leads refining (of 20)', mr: 'China आघाडीवर असलेली खनिजे शुद्धीकरणात (२० पैकी)' }, value: '19/20', note: { en: 'Leads in all but one strategic mineral', mr: 'एक वगळता सर्व धोरणात्मक खनिजांमध्ये आघाडी' } },
          { label: { en: "China's average refining share", mr: 'चीनचा सरासरी शुद्धीकरण वाटा' }, value: '~70%', note: { en: 'Across 20 strategic minerals', mr: '२० धोरणात्मक खनिजांवर' } },
          { label: { en: 'Supply growth from single supplier 2020–24', mr: '२०२०-२४ मध्ये एकाच पुरवठादाराकडून पुरवठा वाढ' }, value: '~90%', note: { en: 'Most new supply came from one source', mr: 'बहुतेक नवीन पुरवठा एकाच स्रोताकडून' } }
        ]
      },
      nMinus1: {
        title: { en: 'The N−1 test', mr: 'N−१ चाचणी' },
        body:  { en: "Remove the single largest supplier from any critical mineral supply chain. For most minerals, that means removing China from refining. Under the IEA's N-1 test, approximately 50% of demand would go unmet. Battery pack costs would rise 40–50%. This single thought experiment reveals why supply concentration — not geological scarcity — is the central strategic problem.",
                 mr: "कोणत्याही महत्त्वाच्या खनिज पुरवठा साखळीतून एकमेव सर्वात मोठा पुरवठादार काढून टाका. बहुतेक खनिजांसाठी, याचा अर्थ चीनला शुद्धीकरणातून काढणे. IEA च्या N-१ चाचणी अंतर्गत, अंदाजे ५०% मागणी अपूर्ण राहील. बॅटरी पॅक खर्च ४०-५०% वाढेल." },
        src: 'iea_outlook_2025'
      },
      exportControlsNote: {
        body: { en: 'Export controls transform economic concentration into geopolitical leverage. More than half of energy-related minerals are now subject to some form of export controls, covering not just raw materials but processing technologies and equipment. A country that controls the refinery also controls the knowledge of how to build the next one.',
                mr: 'निर्यात नियंत्रणे आर्थिक एकाग्रतेला भू-राजकीय ताकदीत रूपांतरित करतात. उर्जा-संबंधित खनिजांच्या अर्ध्याहून अधिक खनिजांवर आता काही प्रकारच्या निर्यात नियंत्रणांचा विषय आहे, केवळ कच्चा माल नाही तर प्रक्रिया तंत्रज्ञान आणि उपकरणे देखील.' }
      },
      indiaPreview: {
        title: { en: 'India and the concentration problem', mr: 'भारत आणि एकाग्रता समस्या' },
        body: { en: 'India illustrates the abundance-versus-security gap directly: it ranks among the world\'s larger holders of several mineral resources (including REE-bearing monazite sands and bauxite-associated gallium), yet remains heavily import-dependent for processed and refined materials — importing roughly 93% of its rare earth magnets from China in FY 2024-25. Resource endowment alone does not translate into supply security without midstream processing capacity. A fuller assessment of India\'s position — its capability scorecard and the conditions needed to close this gap — is in Tab 8 (India\'s Move).', mr: 'भारत विपुलता-विरुद्ध-सुरक्षा तफावत प्रत्यक्षपणे दर्शवतो: तो अनेक खनिज संसाधनांच्या (REE-युक्त मोनाझाइट वाळू आणि बॉक्साइट-संलग्न गॅलियमसह) जगातील मोठ्या धारकांमध्ये गणला जातो, तरीही प्रक्रिया केलेल्या आणि शुद्ध केलेल्या सामग्रीसाठी मोठ्या प्रमाणात आयातीवर अवलंबून आहे — २०२४-२५ या आर्थिक वर्षात त्याच्या रेअर अर्थ चुंबकांपैकी सुमारे ९३% चीनकडून आयात केले. संसाधन उपलब्धता एकट्याने मिडस्ट्रीम प्रक्रिया क्षमतेशिवाय पुरवठा सुरक्षेत रूपांतरित होत नाही. भारताच्या स्थितीचे संपूर्ण मूल्यांकन — त्याचे क्षमता स्कोरकार्ड आणि ही तफावत भरून काढण्यासाठी आवश्यक परिस्थिती — टॅब ८ (भारताची वाटचाल) मध्ये आहे.', src: 'vif_ree_2025' }
      },
      sources: ['iea_outlook_2025', 'iea_topic_page', 'iea_oct_2025', 'vif_ree_2025']
    },
    {
      id: 'why_25',
      label: { en: '2.5 — The Supply Response Problem', mr: '२.५ — पुरवठा प्रतिसादाची समस्या' },
      title: { en: 'Why the market cannot simply respond to demand', mr: 'बाजार फक्त मागणीला प्रतिसाद का देऊ शकत नाही' },
      intro: { en: 'If demand is rising, why doesn\'t supply just increase to meet it? The answer is that mineral supply chains are structurally slow to respond — in ways that make them fundamentally different from most other commodity markets.',
               mr: 'मागणी वाढत असल्यास, पुरवठा फक्त ते पूर्ण करण्यासाठी का वाढत नाही? उत्तर असे आहे की खनिज पुरवठा साखळ्या संरचनात्मकदृष्ट्या प्रतिसाद देण्यास हळू आहेत.' },
      leadTimeBox: {
        stat:    '17.8 years',
        label:   { en: 'Average mine development time globally (mines started 2020–23)', mr: 'जागतिक सरासरी खाण विकास वेळ (२०२०-२३ मध्ये सुरू झालेल्या खाणी)' },
        substat: '29 years',
        sublabel: { en: 'In the United States — second slowest, after Zambia (34 years)', mr: 'अमेरिकेत — झांबिया (३४ वर्षे) नंतर दुसरा सर्वात मंद' },
        src: 'sp_global_2024'
      },
      benchmarkMines: {
        stat: '293',
        label: { en: 'New mines needed by 2030 to meet battery demand for the energy transition (Benchmark Mineral Intelligence)', mr: 'ऊर्जा संक्रमणासाठी बॅटरी मागणी पूर्ण करण्यासाठी २०३० पर्यंत आवश्यक नवीन खाणी (Benchmark Mineral Intelligence)' },
        breakdown: { en: '52 lithium mines alone required by end of decade. Each new mine represents years of permitting, large-scale capital expenditure, environmental assessment, and construction — before a single tonne of battery-grade material reaches market.', mr: 'एकट्या लिथियमसाठी दशकाच्या अखेरीस ५२ खाणी आवश्यक. प्रत्येक नवीन खाण परवाना, मोठ्या प्रमाणात भांडवली खर्च, पर्यावरण मूल्यांकन आणि बांधकाम दर्शवते.' },
        inference: { en: '[OUR INFERENCE] The mine count problem reframes recycling and demand reduction not merely as environmental choices but as capital allocation necessities. Deploying 293 new mines by 2030 requires capital on a scale that must flow into politically contested, environmentally sensitive, and operationally complex environments — against a 17.8-year average development timeline that makes the 2030 deadline arithmetically impossible to meet through new mining alone.', mr: '[आपला अनुमान] खाण संख्येची समस्या पुनर्वापर आणि मागणी कपात केवळ पर्यावरणीय निवडी म्हणून नव्हे तर भांडवल वाटप आवश्यकता म्हणून पुनर्परिभाषित करते.' },
        src: 'benchmark_minerals_2022'
      },
      barriers: [
        { icon: '💰', name: { en: 'Capital', mr: 'भांडवल' }, body: { en: "The valley of death: the gap between exploration and commercial production that private capital won't bridge without government guarantees. Low Chinese prices further undermine the investment case.", mr: "मृत्यूची दरी: शोध आणि व्यावसायिक उत्पादन यांच्यातील अंतर जे खाजगी भांडवल सरकारी हमींशिवाय पूर्ण करणार नाही. कमी चीनी किंमती गुंतवणूक प्रकरण आणखी कमजोर करतात." } },
        { icon: '📋', name: { en: 'Permits', mr: 'परवानगी' }, body: { en: 'New mines require environmental clearances, community consultations, indigenous land agreements, and multi-agency approvals. In democracies these are legitimate — but they add years. In India, the auction-for-exploration model adds further delays.', mr: 'नवीन खाणींना पर्यावरणीय मंजुरी, समुदाय सल्लामसलत, आदिवासी जमीन करार आणि बहु-एजन्सी मंजुरी आवश्यक आहे. भारतात, शोध-साठी-लिलाव मॉडेल अतिरिक्त विलंब जोडते.' } },
        { icon: '⚗️', name: { en: 'Process', mr: 'प्रक्रिया' }, body: { en: 'Building processing and refining capacity is a separate challenge from mining. Rare earth separation technology took China three decades to master. Replicating it elsewhere requires not just investment but knowledge transfer, engineering expertise, and years of operational experience.', mr: 'प्रक्रिया आणि शुद्धीकरण क्षमता बांधणे खाणकामापेक्षा वेगळे आव्हान आहे. रेअर अर्थ विभाजन तंत्रज्ञानात प्रभुत्व मिळवण्यासाठी चीनला तीन दशके लागली.' } }
      ],
      asymmetry: { en: 'Demand can surge in a few years — driven by policy decisions, technology adoption, or a single large market. Supply often requires decades to respond. Governments that recognise this are not waiting for the market.', mr: 'मागणी काही वर्षांत वाढू शकते — धोरणात्मक निर्णय, तंत्रज्ञान स्वीकार, किंवा एकाच मोठ्या बाजाराने चालवलेली. पुरवठ्याला अनेकदा दशके लागतात प्रतिसाद देण्यासाठी.' },
      sources: ['sp_global_2024', 'iea_outlook_2025']
    }
  ]
};

// ══════════════════════════════════════════════
// TAB 3 — THE PLAYERS
// Raw player data preserved from verified source
// ══════════════════════════════════════════════
DB._rawPlayers = [
  {
    id:'china', flag:'🇨🇳', name:'China',
    role:'The Dominant Processor',
    position:'Processor (mining + midstream + downstream)',
    color:'#C62828',
    overview:'China is not merely a producer of critical minerals — it is the processor for the world. Three decades of deliberate industrial policy, state subsidies, willingness to absorb environmental costs, and relentless scale have given China a structural position in the midstream that no other country comes close to matching. Its strategic posture has shifted: from cheap supplier to active wielder of export controls.',
    stats:[
      {label:'REE mining share (2024)',value:'~70%',src:'USGS MCS 2025'},
      {label:'REE refining share',value:'~90%',src:'IEA / GQG 2025'},
      {label:'NdFeB permanent magnets',value:'around 90%',src:'IEA 2025'},
      {label:'Natural graphite (battery-grade)',value:'~95%',src:'IEA 2025'},
    ],
    strength:'Midstream dominance across 19 of 20 strategic minerals tracked by the IEA. State ownership of all REEs declared October 2024. (Note: China also holds a large share of REE-related patents globally, though patent counts vary by methodology and source.) Integrated supply chains from mine to magnet to EV. Chinese firms own a large share of DRC cobalt mines, ensuring upstream feed for downstream processing.',
    vulnerability:'China\'s dominance remains unmatched — but the first credible alternatives are now emerging in Australia, the United States, Malaysia, Vietnam, and parts of the Middle East. Export controls have accelerated global diversification: a card that loses value each time it is played. Market-based dominance (gallium, germanium) proved more fragile than expected — the US diversified gallium imports within 18 months. Diversification is difficult. It is not impossible.',
    recent:'April 2025: Export controls on 7 heavy REEs and permanent magnets. October 2025: FDPR-style rules requiring export licences for products globally containing Chinese-origin REEs. Holmium restricted October 2025 when manufacturers tried to substitute dysprosium.',
    india:'China is the lens through which India must read its entire critical minerals strategy. India imports REE products, cobalt, nickel, gallium, and germanium from Chinese supply chains — directly or indirectly. The question is not whether India depends on China. It does. The question is whether India can build alternatives before the window closes.',
    randPlaybook: {
      title: { en: "The 50-year playbook: how China built its REE dominance (RAND Europe, Feb 2026)", mr: "५०-वर्षांचा खेळाचा प्लॅन: चीनने REE वर्चस्व कसे बनवले (RAND Europe, फेब्रुवारी २०२६)" },
      phases: [
        { period: "1950s–1970s", label: { en: "Geological identification and state designation", mr: "भूगर्भीय ओळख आणि राज्य नियुक्ती" }, body: { en: "REE mining at Bayan Obo (Inner Mongolia) began in the 1950s — a deposit that still accounts for ~40% of known global REE reserves. In 1975 the State Council established the National Rare Earth Development and Application Leading Group. Strategic awareness preceded Deng Xiaoping's 1992 declaration by nearly two decades.", mr: "Bayan Obo मध्ये REE खाणकाम १९५० च्या दशकात सुरू झाले. १९७५ मध्ये राज्य परिषदेने राष्ट्रीय दुर्मिळ पृथ्वी विकास आणि अनुप्रयोग प्रमुख गट स्थापन केला." } },
        { period: "1980s–1990s", label: { en: "Controlled technology acquisition, then market flooding", mr: "नियंत्रित तंत्रज्ञान संपादन, नंतर बाजार पूर" }, body: { en: "China selectively acquired foreign know-how (Japan, US, Canada) through JVs in downstream magnet manufacturing — never in upstream extraction or midstream separation. It then flooded global markets with cheap REEs, driving shutdowns of Western producers — most prominently Mountain Pass (US). Countries willingly traded domestic production for cheap Chinese supply.", mr: "चीनने JVs द्वारे परदेशी तंत्रज्ञान निवडकपणे मिळवले — नंतर स्वस्त REE ने जागतिक बाजारपेठ भरून टाकली, Mountain Pass (US) आणि इतरांना बंद केले." } },
        { period: "2014–2025", label: { en: "Consolidation and export control weaponisation", mr: "एकत्रीकरण आणि निर्यात नियंत्रण शस्त्रीकरण" }, body: { en: "Six major REE groups (formed 2014–16) were further consolidated from December 2021, when three of them merged into China Rare Earth Group; by 2025, production quotas were allocated almost exclusively to two national champions — China Rare Earth Group and China Northern Rare Earth Group. In April 2025 MOFCOM introduced export licensing for 7 REEs and related magnets. In October 2025 five more elements were added, plus an unprecedented extraterritorial provision: approval required for products made outside China if they incorporate China-origin REEs or Chinese technology. Yttrium shortages followed. Following US-China talks, enforcement was delayed to November 2026 — but the legal framework remains in place.", mr: "डिसेंबर २०२१ मध्ये तीन गटांचे China Rare Earth Group मध्ये विलीनीकरण; २०२५ पर्यंत उत्पादन कोटा जवळजवळ केवळ दोन राष्ट्रीय चॅम्पियन्सना वाटप. एप्रिल २०२५ मध्ये MOFCOM ने ७ REE साठी निर्यात परवाना सुरू केला. ऑक्टोबर २०२५ मध्ये ५ अधिक घटक जोडले." } }
      ],
      keyLesson: { en: "China's dominance is not primarily geological — it is the result of 50 years of consistent industrial policy combining state-directed mining, technology acquisition, market flooding, environmental standard absorption, consolidation, and finally export control weaponisation. The window for foreign participation in China's REE ecosystem closed much earlier than in other sectors. No comparable competitor built the equivalent infrastructure in the intervening decades.", mr: "चीनचे वर्चस्व प्राथमिकतः भूगर्भीय नाही — हे ५० वर्षांच्या सातत्यपूर्ण औद्योगिक धोरणाचा परिणाम आहे." },
      src: "rand_europe_2026"
    },
    chinaDeepDive: {
      title: { en: "Beyond Rare Earths: China's Broader Critical Minerals Strategy", mr: "रेअर अर्थच्या पलीकडे: चीनची व्यापक महत्त्वाची खनिजे रणनीती" },
      sections: [
        {
          heading: { en: "A. Multisectoral Midstream Dominance", mr: "अ. बहुक्षेत्रीय मिडस्ट्रीम वर्चस्व" },
          body: { en: "While REEs are the most visible, China is the leading refiner for 19 of the 20 energy-related strategic minerals analysed by the IEA, holding an average market share of around 70% across them. This extends well beyond rare earths: China processes approximately 98% of global battery-grade graphite, around 99% of primary low-purity gallium, roughly 70% of refined lithium and a majority share of cobalt refining, and around 94% of global LFP (lithium iron phosphate) cathode production capacity.", mr: "REE सर्वात दृश्यमान असले तरी, IEA ने विश्लेषण केलेल्या २० पैकी १९ ऊर्जा-संबंधित धोरणात्मक खनिजांसाठी चीन आघाडीचा शुद्धीकरण करणारा आहे, सरासरी सुमारे ७०% बाजार वाट्यासह." },
          src: "iea_outlook_2025",
          src2: "csis_semiconductor_2024"
        },
        {
          heading: { en: 'B. The "Limited Recourse" Investment Model', mr: 'ब. "मर्यादित आश्रय" गुंतवणूक मॉडेल' },
          body: { en: "Chinese overseas mineral investment has shifted from policy banks toward state-owned commercial banks (ICBC, Bank of China, CITIC), using limited-recourse project finance for joint ventures in developing economies. AidData research covering 2000-2021 found roughly USD 57 billion in such lending, with about 25% of loans backed by Chinese guarantors -- far above the ~4% guarantee rate on general Belt and Road projects -- and around 81% of loans now flowing to private firms and joint ventures rather than direct state-to-state arrangements. These arrangements often include offtake agreements requiring raw or processed ore produced overseas (such as cobalt from the DRC or lithium from Argentina) to be directed back to mainland China for final refining.", mr: "चिनी परदेशी खनिज गुंतवणूक धोरण बँकांकडून राज्य-मालकीच्या व्यावसायिक बँकांकडे वळली आहे." },
          src: "aiddata_2025"
        },
        {
          heading: { en: "C. Recycling as a New Strategic Frontier", mr: "क. पुनर्वापर: नवीन धोरणात्मक आघाडी" },
          body: { en: "China is moving to dominate the circular economy alongside primary supply. The IEA estimates China accounts for roughly two-thirds of global battery recycling capacity growth since 2020. In October 2024, China established the China Resources Recycling Group (CRRG, also called China Zihuan Group) -- a centrally administered state-owned enterprise with registered capital of CNY 10 billion, backed by SASAC, Baowu Steel, Sinopec, China Resources, Chalco, and China Minmetals -- tasked with building a national platform for recycling end-of-life batteries, e-waste, and decommissioned wind and solar equipment.", mr: "चीन वर्तुळाकार अर्थव्यवस्थेवरही वर्चस्व मिळवत आहे. ऑक्टोबर २०२४ मध्ये, चीनने China Resources Recycling Group (CRRG) ची स्थापना केली." },
          inference: { en: "[OUR INFERENCE] Reports of a target to refine 75% of global battery materials through recycling by 2030 circulate widely but we could not independently verify this specific figure against a primary CRRG or government document; it should be treated as directional rather than confirmed.", mr: "[आपला अनुमान] २०३० पर्यंत जागतिक बॅटरी सामग्रीच्या ७५% पुनर्वापराद्वारे शुद्धीकरण करण्याचे लक्ष्य असल्याचे वृत्त मोठ्या प्रमाणात फिरते, परंतु आम्ही हा आकडा स्वतंत्रपणे सत्यापित करू शकलो नाही." },
          src: "iea_crrg_2024"
        },
        {
          heading: { en: "D. Technology as a Chokepoint", mr: "ड. अडथळा म्हणून तंत्रज्ञान" },
          body: { en: "China is increasingly restricting intellectual property and processing know-how, not just raw materials. Reports widely cite a 21 December 2023 ban on rare earth extraction, separation, and magnet-manufacturing technology exports, though the precise framing of this date is disputed -- some technology-export restrictions on rare earth know-how date back to 1998/2001, with 2023-25 changes mainly shifting items between restricted and dual-use control categories. What is well-documented: on 15 July 2025, China formalised export-licensing requirements for lithium carbonate/hydroxide production technologies (from spodumene and brine) and fourth-generation LFP/LMFP cathode preparation technologies. On 9 October 2025, China announced sweeping new controls covering the entire rare earth production chain (mining through magnet manufacturing) plus lithium battery and graphite anode technology, with extraterritorial reach -- but on 7 November 2025, all of these October controls were suspended for one year (until 10 November 2026) as part of a US-China agreement following the Xi-Trump meeting. China has also developed national traceability systems for rare earths to monitor downstream product flows and strengthen export-control enforcement.", mr: "चीन कच्च्या मालावरच नाही तर बौद्धिक संपत्ती आणि प्रक्रिया ज्ञानावरही नियंत्रण वाढवत आहे. २१ डिसेंबर २०२३ रोजी, रेअर अर्थ निष्कर्षण आणि स्थायी चुंबक उत्पादन तंत्रज्ञानाच्या निर्यातीवर बंदी." },
          src: "csis_ree_tech_2024",
          src2: "china_export_suspension_2025"
        },
        {
          heading: { en: "E. Strategic Pricing Power", mr: "इ. धोरणात्मक किंमत शक्ती" },
          body: { en: "China's dominance is often a function of price competitiveness sustained by subsidised credit rather than unique technical capability alone. This pricing power can be used to discourage Western substitution efforts: when alternative producers attempt to scale up, China can flood the global market with cheap supply, collapsing prices and the commercial viability of emerging non-Chinese projects. East Asia Forum analysis notes that roughly 94 of China's 100 largest mining companies are at least partly state-owned (averaging close to 80% government stakes), with subsidised loans enabling these firms to tolerate thinner margins and price volatility that would bankrupt purely commercial competitors. This pattern has discouraged market-based mining investment outside China for roughly two decades.", mr: "चीनचे वर्चस्व बहुधा अनुदानित कर्जाद्वारे टिकवलेल्या किंमत स्पर्धात्मकतेचे कार्य आहे. ही किंमत शक्ती पाश्चिमात्य प्रतिस्थापन प्रयत्नांना परावृत्त करण्यासाठी वापरली जाऊ शकते." },
          src: "east_asia_forum_2026"
        }
      ]
    },
    sources:[
      {label:'USGS MCS 2025',url:'https://pubs.usgs.gov/periodicals/mcs2025/mcs2025.pdf'},
      {label:'IEA Critical Minerals 2025',url:'https://www.iea.org/reports/global-critical-minerals-outlook-2025'},
      {label:'China Briefing',url:'https://www.china-briefing.com/news/chinas-rare-earth-elements-dominance-in-global-supply-chains/'},
      {label:'Visual Capitalist 2025',url:'https://www.visualcapitalist.com/visualizing-30-years-of-rare-earth-production-by-country/'},
      {label:'RAND Europe REE Policy Feb 2026',url:'https://www.rand.org/content/dam/rand/pubs/perspectives/PEA4700/PEA4756-1/RAND_PEA4756-1.pdf'},
      {label:'AidData Overseas Mineral Financing 2025',url:'https://www.business-humanrights.org/en/latest-news/report-china-heavily-finances-global-transition-minerals-through-state-banks-to-secure-control-research-shows/'},
      {label:'IEA — China Resources Recycling Group',url:'https://www.iea.org/policies/25207-establishment-of-the-china-resources-recycling-group'},
      {label:'CSIS — REE Processing Tech Export Ban',url:'https://www.csis.org/analysis/what-chinas-ban-rare-earths-processing-technology-exports-means'},
      {label:'East Asia Forum — China Mining Policy Edge',url:'https://eastasiaforum.org/2026/03/12/policies-that-enable-chinas-critical-minerals-edge/'},
    ]
  },
  {
    id:'usa', flag:'🇺🇸', name:'United States',
    role:'The Consumer Rebuilding',
    position:'Consumer + downstream manufacturer (rebuilding upstream)',
    color:'#1565C0',
    overview:'The US is the world\'s largest economy and one of the most exposed on primary mineral supply chains. It has significant geological endowments — but mine development averages 29 years. Critically, the US is not only a consumer. It remains the world\'s most important high-value downstream producer — the country where defence systems, advanced semiconductors, aerospace equipment, and AI infrastructure are designed and built. That downstream position makes upstream vulnerability strategically dangerous.',
    stats:[
      {label:'Critical minerals list (2025)',value:'60 minerals',src:'Federal Register, Nov 2025'},
      {label:'Mine development avg (US)',value:'29 years',src:'S&P Global, July 2024'},
      {label:'REE mining share (2024)',value:'~12%',src:'USGS MCS 2025'},
      {label:'Import dependent for',value:'12 minerals at 100%',src:'USGS MCS 2025'},
    ],
    strength:'Mountain Pass REE mine (MP Materials) — only significant REE mine outside China in North America. MP Materials\' Independence facility in Fort Worth, Texas began commercial NdPr metal production in January 2025 and trial NdFeB magnet production the same year. In February 2026 MP announced a second campus (\"10X\", Northlake, Texas, $1.25bn) to scale magnet output toward 10,000 tonnes/year. IRA domestic content rules forcing supply chain reshoring. MP Materials has a 10-year offtake deal with Apple plus a DoD price-floor partnership. World\'s leading defence, semiconductor, and AI manufacturing base creates strong demand pull for supply chain investment.',
    vulnerability:'29-year mine development average is structural — the exploration-to-feasibility stage alone averages around 12.5 years, driven by NEPA Environmental Impact Statement requirements and litigation (the \"permitting valley of death\"). US direct consumption of cobalt, nickel, and REEs is less than 5% of global demand. The US produces less than 5% of its own battery-grade graphite needs. Lynas\'s planned Texas heavy rare earths facility (Seadrift) faced \"significant uncertainty\" as of August 2025 amid funding gaps and a US policy shift favouring MP Materials, with December 2025 reports suggesting possible cancellation. The National Defense Stockpile has shrunk from a peak of $9.6 billion in 1989 (~$22-24 billion in 2024 dollars) to under $900 million today -- though a 2025 OBBA-funded programme aims to add up to $1 billion across cobalt, antimony, tantalum, and scandium.',
    recent:'December 2025: US launched Pax Silica, an international initiative for a resilient silicon/semiconductor-and-critical-minerals supply chain among trusted partners. Executive Order 14285 advances US seabed mineral development policy to access marine deposits of nickel, cobalt, and copper. The DFC has stood up a $5 billion revolving fund using direct equity stakes and warrants (in companies including MP Materials and Lithium Americas) rather than only loans -- treating materials as a tool of economic statecraft. \"Urban mining\" is an emerging US priority: Nuton (Rio Tinto) recovers copper from old mine waste using microorganisms, and Alta Resources Technologies uses bioengineered proteins to separate REEs from industrial waste streams; Standard Lithium has achieved >99% recovery via direct lithium extraction (DLE) from Arkansas brines. January 2026: Executive Order on adjusting imports of processed critical minerals. February 2026: Critical Minerals Ministerial — Rubio: \"We were blinded by the potential of the technologies, but neglected their importance.\" May 2026: India-US bilateral critical minerals framework signed.',
    india:'The US is India\'s most important partner in the current framework architecture: iCET, Pax Silica, FORGE, TRUST, SMRI, and the May 2026 bilateral deal. The US needs non-Chinese supply; India needs capital, technology transfer, and offtake guarantees. The alignment of interest is genuine — the question is execution speed.',
    sources:[
      {label:'USGS MCS 2025',url:'https://pubs.usgs.gov/periodicals/mcs2025/mcs2025.pdf'},
      {label:'Federal Register Nov 2025',url:'https://www.federalregister.gov/documents/2025/11/07/2025-19813/final-2025-list-of-critical-minerals'},
      {label:'S&P Global July 2024',url:'https://www.spglobal.com/marketintelligence/en/media-center/press-release/united-states-ranks-next-to-last-in-development-time-for-new-mines-that-produce-critical-minerals-for-energy-transition-sp-globa'},
      {label:'Rubio — State Dept Feb 2026',url:'https://www.state.gov/releases/office-of-the-spokesperson/2026/02/opening-remarks-of-the-critical-minerals-ministerial'},
      {label:'MP Materials Independence Facility',url:'https://investors.mpmaterials.com/investor-news/news-details/2025/MP-Materials-Restores-U.S.-Rare-Earth-Magnet-Production/default.aspx'},
      {label:'Lynas Texas Uncertainty 2025',url:'https://northernminer.com/news/lynas-flags-texas-rare-earths-plant-uncertainty/1003882176/'},
      {label:'CSIS Semiconductor Minerals 2024',url:'https://www.csis.org/analysis/mineral-demands-resilient-semiconductor-supply-chains'},
      {label:'National Defense Stockpile Decline 2026',url:'https://www.geopoliticalmonitor.com/the-rise-and-fall-of-the-us-strategic-mineral-stockpile/'},
    ]
  },
  {
    id:'eu', flag:'🇪🇺', name:'European Union',
    role:'The Regulatory Architect',
    position:'Importer → using regulation as primary policy tool',
    color:'#283593',
    overview:'The EU is the most legally ambitious actor in critical minerals — but almost entirely dependent on imports for the minerals that ambition requires. What makes the EU distinctive is its approach: where China uses industrial policy, the US uses state investment and incentives, and Japan uses strategic stockpiling, the EU\'s primary instrument is law. The Critical Raw Materials Act creates binding targets, fast-track permitting, and diversification requirements. Whether regulation alone can transform a supply chain that took 30 years to build remains an open question.',
    stats:[
      {label:'Critical Raw Materials',value:'34 CRMs, 17 Strategic',src:'EU CRMA, May 2024'},
      {label:'Chinese share of global sintered REE magnet production',value:'~94%',src:'IEA Outlook 2025'},
      {label:'Domestic extraction target 2030',value:'10% of annual consumption',src:'EU CRMA'},
      {label:'Single country supply limit (SRMs)',value:'Max 65%',src:'EU CRMA'},
    ],
    strength:'CRMA creates legal architecture — binding benchmarks (10% extraction, 40% processing, 25% recycling of annual consumption by 2030), fast-track permitting for Strategic Projects targeting under 24 months for mining (down from decade-long timelines), and diversification targets. Significant lithium potential in Portugal (Mina do Barroso), Spain, France, and the Czech Republic. The EU already sources over 50% of its base metals from recycled materials, and the EU Batteries Regulation (2023) mandates minimum recycled content (12% cobalt, 4% lithium by 2030). Partnership agreements with Argentina, DRC, Zambia, Namibia.',
    vulnerability:'Almost entirely import-dependent today, including being \"almost entirely reliant\" on external supplies for lithium, cobalt, and rare earths. Domestic public opposition to new mines is significant -- Rio Tinto\'s Jadar lithium project in Serbia was cancelled in 2022 after major protests, and Savannah Resources\' Portuguese projects have also faced sustained opposition. The EU lacks the centralised fiscal authority of the US -- no IRA-style tax credits -- and must coordinate 27 different national permitting regimes. The 2030 targets require a transformation in mining and processing not yet begun at scale. Relying on regulation rather than direct investment creates a lag between policy intent and operational output.',
    recent:'CRMA in force May 2024. In March 2025 the European Commission adopted its first list of 47 Strategic Projects across 13 member states, covering mining, processing, and recycling. The same month, the EIB adopted a EUR 2 billion critical minerals financing initiative, and the EC disbursed EUR 1.8 billion for a \"Battery Booster\" package. The EU is building a joint purchasing platform for critical minerals modelled on its gas-aggregation scheme, and from 2026 will require mandatory environmental footprint declarations for critical minerals -- a non-tariff mechanism favouring cleaner producers. No antimony has reached the EU since October 2024 due to Chinese restrictions, causing shortages in defence and automotive sectors. Post-April 2025 Chinese controls further disrupted automotive and wind sectors.',
    india:'EU is a growing secondary partner for India. India-EU Trade and Technology Council includes a minerals dimension. The EU\'s legally mandated 65% single-country supply cap creates a predictable market signal: because the EU is contractually and legally obligated to source no more than 65% of any Strategic Raw Material from one supplier (China) by 2030, a guaranteed market vacancy of at least 35% is opening for \"friend-shored\" partners. If India develops processing capacity by 2028-2030, it enters this market at exactly the moment the EU is obligated to diversify. The EU is also a member of the Minerals Security Partnership alongside the US and India, which seeks to align project finance and offtake for non-Chinese projects, and Draghi\'s 2024 competitiveness report names critical raw materials as the primary enabler of the EU\'s future wealth creation -- prioritising security and sovereignty over pure market efficiency, a framing that opens space for partnerships prioritising reliability over lowest cost.',
    sources:[
      {label:'EU CRMA Official',url:'https://single-market-economy.ec.europa.eu/sectors/raw-materials/areas-specific-interest/critical-raw-materials_en'},
      {label:'EU Council CRM',url:'https://www.consilium.europa.eu/en/infographics/critical-raw-materials/'},
      {label:'European Parliament Jan 2026',url:'https://epthinktank.eu/2025/11/24/chinas-rare-earth-export-restrictions/'},
      {label:'CRMA Strategic Projects & Financing 2025',url:'https://single-market-economy.ec.europa.eu/sectors/raw-materials/areas-specific-interest/critical-raw-materials_en'},
      {label:'Draghi Report on EU Competitiveness 2024',url:'https://commission.europa.eu/topics/competitiveness/draghi-report_en'},
    ]
  },
  {
    id:'aus', flag:'🇦🇺', name:'Australia',
    role:'The Miner Becoming a Processor',
    position:'Miner (attempting transition to processor)',
    color:'#558B2F',
    overview:'Australia is arguably the world\'s most important non-Chinese player in critical minerals. It holds world-class deposits across lithium, REEs, cobalt, nickel, and copper — and hosts Lynas Rare Earths, the only significant non-Chinese rare earth processor operating at commercial scale globally. But Australia\'s strategic challenge is clear: it must convert geological advantage into industrial advantage. It remains primarily a miner trying to become a processor. That transition is still underway.',
    stats:[
      {label:'Critical minerals list',value:'31 + 5 Strategic Materials (Feb 2024)',src:'Dept of Industry, Australia'},
      {label:'Lithium production share (2024)',value:'~47% of global ore',src:'USGS MCS 2025'},
      {label:'Mine development (lithium projects)',value:'~8yr vs ~16.5yr global avg',src:'IEA / S&P Global 2024'},
      {label:'Quad initiative partner',value:'$20 billion (May 2026)',src:'DFAT / State Dept'},
    ],
    strength:'Lynas Rare Earths — largest non-Chinese REE processor globally. In November 2024, Lynas opened the Kalgoorlie Rare Earths Processing Facility (AUD 800m / ~USD 516-525m), built in under two and a half years from construction approval, creating around 115 direct jobs -- Australia\'s first REE processing facility and the largest outside China, converting Mt Weld concentrate into mixed rare earth carbonate. An August 2024 Mt Weld reserve update (106.6 Mt at 4.12% TREO, 4.39 Mt contained TREO) supports a mine life of over 35 years at 7,200 tpa NdPr or over 20 years at an expanded 12,000 tpa. World\'s largest lithium producer by ore volume. Significant cobalt, nickel, copper deposits. Part of Quad Critical Minerals Initiative. Strong bilateral partnerships with Japan, South Korea, US, EU, and India.',
    vulnerability:'Still primarily a miner — most ore is shipped elsewhere for processing; around 95% of lithium hard-rock ore refining currently takes place in China. Domestic processing capacity lags mining capacity significantly, and capital costs for Australian processing projects are typically around 50% higher than in China. NIMBY opposition growing. Lynas\'s Malaysia facility faces political uncertainty. In January 2024, three nickel mines in Western Australia were placed into care-and-maintenance due to low global prices -- even as the federal government added nickel to the Critical Minerals List that year, unlocking access to the AUD 4 billion Critical Minerals Facility. BHP also suspended Nickel West operations in 2024.',
    recent:'The Future Made in Australia Act 2025 establishes tax incentives for investment in critical minerals processing and low-emissions hydrogen. The government has deployed the AUD 2.5 billion Critical Minerals Facility and the AUD 15 billion National Reconstruction Fund for projects including Iluka\'s Eneabba REE refinery and Renascor\'s Siviour graphite project. A national Critical Minerals R&D Hub addresses processing barriers for lower-grade REE deposits. Part of Quad Critical Minerals Initiative (May 2026). India-Australia Critical Minerals Investment Partnership active. Lynas expanding Malaysian and Texas processing facilities, alongside its new Kalgoorlie facility.',
    india:'KABIL completed due diligence on 5 Australian lithium projects and submitted a non-binding offer. Australia holds lithium deposits India needs and has no domestic equivalent for. India\'s projected 6-8x increase in lithium demand by 2030 makes it a natural offtake partner for Australian lithium projects seeking to diversify beyond Chinese buyers. The India-Australia partnership is operational — not just aspirational.',
    sources:[
      {label:'Geoscience Australia',url:'https://www.ga.gov.au/scientific-topics/minerals/critical-minerals'},
      {label:'Dept Industry Australia',url:'https://www.industry.gov.au/publications/australias-critical-minerals-list-and-strategic-materials-list'},
      {label:'USGS MCS 2025',url:'https://pubs.usgs.gov/periodicals/mcs2025/mcs2025.pdf'},
      {label:'DFAT Australia Quad May 2026',url:'https://www.foreignminister.gov.au/minister/penny-wong/media-release/factsheet-quad-foreign-ministers-meeting-new-delhi-may-2026'},
      {label:'Lynas Kalgoorlie Opening / Mt Weld Reserve 2024',url:'https://www.mining-technology.com/news/lynas-opens-australias-first-rare/'},
    ]
  },
  {
    id:'india', flag:'🇮🇳', name:'India',
    role:'The Paradox Player',
    position:'Resource holder → aspirant processor (window open)',
    color:'#E65100',
    overview:'India\'s critical minerals position is the most paradoxical of any major economy. It holds world-class reserves of rare earths in coastal monazite deposits — yet is 100% import dependent for lithium, cobalt, nickel, and germanium. The gap between potential and reality stems from unresolved policy and institutional constraints, not geological limitation. A window of opportunity exists — it is not permanent.',
    stats:[
      {label:'Official critical minerals list',value:'30 minerals',src:'Ministry of Mines, June 2023'},
      {label:'Monazite REO resources',value:'11.93 Mt (55–65% REO)',src:'Ministry of Mines 2023'},
      {label:'100% import dependent for',value:'Li, Co, Ni, Ge + 6 more',src:'India MoM 2023'},
      {label:'NCMM mobilisation target',value:'₹34,300 crore (~$4.1B)',src:'NCMM Jan 2026'},
    ],
    strength:'World\'s 4th or 5th largest REE reserves. Beyond the 11.93 Mt monazite resource (containing ~7.23 Mt in-situ REO), GSI has separately augmented 482.6 Mt of broader REE ore resources at various cut-off grades across 34 exploration projects (as of mid-2025) -- a much larger but lower-grade resource base distinct from the monazite figure. 25% of global thorium embedded in monazite. Significant graphite, titanium, vanadium, niobium, gallium resources. Under NCMM, the government has identified Odisha, Gujarat, Andhra Pradesh, and Maharashtra for four Critical Mineral Processing Parks backed by Rs 500 crore, chosen partly for port access. Growing alliance architecture: India-US framework (May 2026), Quad initiative, KABIL overseas acquisitions, MSP membership.',
    vulnerability:'Monazite is classified under the Atomic Energy Act 1962 — regulatory constraints rooted in historical atomic-energy legislation not updated to reflect the changed strategic environment. Near-zero REE processing at commercial scale. No NdFeB magnet manufacturing. NCMM and India Semiconductor Mission operate as separate silos — the mineral-to-chip link is missing. The processing gap extends beyond REEs: despite being among the world\'s top producers of titanium mineral concentrates (ilmenite/rutile), India remains import-dependent for titanium metal itself, used in the Tejas fighter and naval systems -- exporting raw ore and re-importing the high-value metal. J&K lithium find (Reasi) has not yet progressed to extraction.',
    recent:'Union Cabinet approved NCMM January 29, 2025. KABIL secured 5 lithium blocks in Catamarca, Argentina, with feasibility studies targeted for 2027 and production by end-2029. On September 3, 2025, Cabinet approved a Rs 1,500 crore Critical Mineral Recycling Incentive Scheme (FY2025-26 to FY2030-31), targeting roughly 300,000 tonnes/year of recycling capacity from e-waste, spent lithium-ion batteries, and end-of-life vehicle scrap, working alongside the Extended Producer Responsibility (EPR) framework under the Battery Waste Management Rules 2022. Budget 2025-26 removed customs duties on lithium-ion battery scrap. India-US Critical Minerals Framework signed May 26, 2026. Quad Critical Minerals Initiative announced same day.',
    india:'This is India\'s own profile. The core question: does India convert its reserves into supply chain positioning before the global architectures are locked? Japan, South Korea, Australia, and the US are choosing partners now. India\'s window is real — and time-limited.',
    sources:[
      {label:'India Ministry of Mines 2023',url:'https://mines.gov.in/admin/download/649d4212cceb01688027666.pdf'},
      {label:'NCMM Jan 2026',url:'https://mines.gov.in/webportal/content/ongoing-nits-critical-minerals'},
      {label:'MEA India-US Framework',url:'https://www.mea.gov.in/press-releases.htm?dtl/41236'},
      {label:'ORF India Midstream',url:'https://www.orfonline.org/research/securing-india-s-midstream-capacity-by-processing-critical-minerals-overseas'},
      {label:'PIB — GSI 482.6 Mt REE Resource (Jul 2025)',url:'https://www.globalsecurity.org/wmd/library/news/india/2025/india-250723-india-pib02.htm'},
      {label:'NCMM Recycling Incentive Scheme (Sept 2025)',url:'https://www.pmindia.gov.in/en/news_updates/cabinet-approves-rs-1500-crore-incentive-scheme-to-promote-critical-mineral-recycling-in-the-country/'},
      {label:'NCMM Processing Parks (4 states)',url:'https://www.energywatch.in/critical-minerals/govt-identifies-4-states-for-critical-mineral-parks-pushes-processing-and-recycling-ecosystem'},
    ]
  },
  {
    id:'japan', flag:'🇯🇵', name:'Japan',
    role:'The Strategic Stockpiler',
    position:'Consumer → world\'s most successful diversifier',
    color:'#B71C1C',
    overview:'Japan has been thinking about critical mineral vulnerability longer than any other major economy — and acting on it. Its rare metals stockpiling programme dates to 1983, a government-private partnership now run by JOGMEC. The 2010 Chinese REE embargo was directed at Japan and triggered a systematic acceleration of this existing machinery -- arguably the world\'s most successful case study in supply-chain diversification. Every strategy other governments announced after 2022 — diversify sources, build strategic stockpiles, fund overseas acquisition, invest in substitution — Japan had already been implementing in some form for nearly three decades.',
    stats:[
      {label:'Critical minerals list',value:'31 minerals',src:'Japan METI'},
      {label:'REE import from China (2023)',value:'~58% (down from ~90% in 2010)',src:'JOGMEC / industry reports'},
      {label:'Quad initiative partner',value:'$20 billion (May 2026)',src:'MOFA Japan'},
      {label:'Stockpile programme',value:'Active since 1983 (REE-specific expansion from 2010)',src:'JOGMEC'},
    ],
    strength:'Largest strategic stockpile of critical minerals of any consuming nation — built since 1983 and substantially expanded for rare earths from 2010. Japan\'s post-2010 response follows the \"ABCD+R\" framework: Actively secure overseas mines, Boost recycling, Create substitute materials, Develop material efficiency, and Reserves (stockpiling). JOGMEC provides a full financing suite -- equity and loans, liability guarantees for offtake security, and direct technical/exploration support -- distinguishing it from pure-grant models. In March 2025, JOGMEC and Iwatani invested EUR 110 million in the Caremag project in France to secure roughly 20% of Japan\'s future dysprosium and terbium demand, mirroring the earlier JOGMEC/Sojitz $250 million Lynas deal. Strong processing and materials technology. Deep auto and electronics industrial base creates captive demand. Reduced China REE dependence from ~90% (2010) to ~58% over roughly 15 years.',
    vulnerability:'Almost entirely import-dependent on primary minerals. Still significantly dependent on China for REE inputs despite 15 years of diversification -- Japan remains the world\'s largest single-country importer of rare earths. China\'s dominance has deepened at the highest-value stage: China\'s share of global sintered permanent magnet production rose from around 50% in 2005 to about 94% in 2024 (IEA), even as mining itself has diversified somewhat. China\'s April 2025 controls caused immediate disruptions to Japan\'s auto and electronics sectors. Island geography and limited land make domestic mining politically difficult -- partly why Japan pioneered deep-sea mineral exploration, conducting its first probe explorations from 2017 for nickel, cobalt, and copper-bearing marine deposits.',
    recent:'Actively seeking non-Chinese REE processing partners. Part of Quad Critical Minerals Initiative (May 2026). Long-standing backer of Lynas\'s Malaysia separation facility. New bilateral mineral deals with multiple resource-rich nations.',
    india:'One plausible pathway for India is a Japan-India REE partnership combining Japanese processing technology, financing, and downstream demand with Indian monazite resource endowments. Japan has the technology and JOGMEC frameworks; India has the reserves. This is not yet formally structured — and represents one of the more underexplored opportunities in India\'s current critical minerals architecture.',
    sources:[
      {label:'MOFA Japan — Quad May 2026',url:'https://www.mofa.go.jp/fp/nsp/pageite_000001_00005.html'},
      {label:'USGS MCS 2025',url:'https://pubs.usgs.gov/periodicals/mcs2025/mcs2025.pdf'},
      {label:'Japan METI',url:'https://www.meti.go.jp/english/policy/energy_environment/mineral_resources/index.html'},
      {label:'JOGMEC Stockpiling Programme (since 1983)',url:'https://www.jogmec.go.jp/english/stockpiling/stockpiling_10_000001.html'},
      {label:'The Diplomat — Japan Critical Minerals Resilience (Feb 2026)',url:'https://thediplomat.com/2026/02/japans-critical-minerals-resilience-didnt-start-in-2010-or-2026/'},
      {label:'Columbia CGEP — Caremag & Lynas (Oct 2025)',url:'https://www.energypolicy.columbia.edu/how-the-us-japan-critical-minerals-partnership-is-a-long-overdue-step-toward-real-supply-chain-security/'},
    ]
  },
  {
    id:'indonesia', flag:'🇮🇩', name:'Indonesia',
    role:'The Resource Nationalist',
    position:'Miner → processor (via export ban)',
    color:'#D32F2F',
    overview:'Indonesia\'s transformation from ore exporter to processing hub is the most significant supply-side development of the past decade. Its 2020 export ban on raw nickel ore forced global manufacturers to build processing capacity domestically. This "Indonesian model" is widely studied — but it succeeded under specific conditions: a dominant global resource position, a large base of Chinese processing investment already seeking Indonesian partnerships, an existing Asian EV manufacturing ecosystem, and strong global demand. These conditions do not automatically exist elsewhere.',
    stats:[
      {label:'Nickel production share (2024)',value:'~61% of global output',src:'Statista / S&P Global 2024'},
      {label:'Nickel production growth (2018–2023)',value:'+197%',src:'INSG Nickel Factbook 2024'},
      {label:'Raw nickel ore export ban',value:'In force since 2020',src:'Government of Indonesia'},
      {label:'Cobalt production share',value:'~7%+ (2023)',src:'USGS MCS 2024'},
    ],
    strength:'World\'s largest nickel producer by a significant margin. Export ban forced $30+ billion in downstream processing investment. Growing battery materials cluster with Chinese, South Korean, and Japanese partners. Strategic location for Asian EV supply chains.',
    vulnerability:'Most processing uses Chinese technology and capital — Indonesia climbed the value chain, but much of the value flows to Chinese partners. Environmental damage from smelting in Sulawesi and Halmahera is severe. Nickel price collapse has severely stressed producers. Single-commodity dependence creates macro volatility.',
    recent:'Continues negotiating processing requirements for other minerals. Bauxite raw export already banned. Nickel price pressures have not reversed the structural shift. Active in EV supply chain discussions with US, EU, Japan.',
    india:'The Indonesian model contains relevant lessons for India — but cannot be copied directly. India\'s manganese ore export pattern mirrors Indonesia\'s pre-2020 nickel situation. The lesson: an export restriction can force value addition, but only if combined with genuine openness to foreign processing investment and a resource position large enough to make the restriction credible. India\'s conditions are different and require a different design.',
    sources:[
      {label:'S&P Global Indonesia 2024',url:'https://www.spglobal.com/market-intelligence/en/news-insights/research/2026/01/indonesia-mining-by-the-numbers-2024'},
      {label:'USGS Nickel MCS 2025',url:'https://pubs.usgs.gov/periodicals/mcs2025/mcs2025-nickel.pdf'},
      {label:'INSG Nickel Factbook 2024',url:'https://insg.org/wp-content/uploads/2024/09/publist_The-World-Nickel-Factbook-2024.pdf'},
    ]
  },
  {
    id:'drc', flag:'🇨🇩', name:'DRC',
    role:'The Cobalt Giant',
    position:'Miner (cobalt dominant) — processing elsewhere',
    color:'#4A148C',
    overview:'The Democratic Republic of Congo is to cobalt what Australia is to lithium and Indonesia is to nickel — the indispensable upstream source. It mines over 70% of the world\'s cobalt, holds over 50% of global cobalt reserves, and is a growing source of lithium. Yet it processes almost none of it. The DRC illustrates the most extreme version of the upstream-without-midstream trap: extraordinary mineral wealth, with almost all processing value accruing elsewhere — primarily China.',
    stats:[
      {label:'Cobalt mine production share',value:'~73% of global',src:'USGS MCS 2026'},
      {label:'Cobalt reserves',value:'6 Mt of 11 Mt global total',src:'USGS MCS 2024'},
      {label:'Cobalt refining in DRC',value:'~3% (rest goes to China)',src:'AfDB Cobalt Factsheet 2025'},
      {label:'Chinese firms\' share of DRC mines',value:'Majority of large operations',src:'USGS / industry reports'},
    ],
    strength:'World\'s largest cobalt reserves and dominant producer. Growing lithium potential. Rising strategic importance as EV demand for cobalt grows. International attention — US, EU, Australia all signing agreements. Young, large population with significant mining labour force.',
    vulnerability:'Almost zero domestic refining — cobalt leaves as ore and concentrate, processed in China. Significant artisanal and small-scale mining (ASM) sector with documented child labour and safety violations. Political instability and governance challenges limit long-term investment. Chinese companies control the majority of large-scale mine operations and offtake agreements — limiting DRC\'s ability to redirect supply.',
    recent:'February 2025: DRC announced a 4-month cobalt export suspension to curb falling prices — signalling intent to assert more control over supply. US summit with DRC, Kenya, and Zambia to establish minerals cooperation (2026). EU signed Clean Trade and Investment Partnership with DRC. Chinese investment continues at scale.',
    india:'DRC cobalt is critical for India\'s EV battery ambitions — India is 100% import dependent for cobalt. India has no direct acquisition in DRC. India\'s KABIL mandate covers overseas mines but has focused on lithium (Argentina) rather than cobalt (DRC). Building a DRC presence — even a small one — would diversify India\'s cobalt supply chain away from pure Chinese intermediation.',
    sources:[
      {label:'USGS MCS 2024 — Cobalt',url:'https://pubs.usgs.gov/periodicals/mcs2024/mcs2024-cobalt.pdf'},
      {label:'AfDB Cobalt Factsheet 2025',url:'https://www.afdb.org/sites/default/files/documents/publications/cobalt_factsheet_1.pdf'},
      {label:'Visual Capitalist — Cobalt 2024',url:'https://elements.visualcapitalist.com/visualizing-cobalt-production-by-country-in-2023/'},
    ]
  },
  {
    id:'korea', flag:'🇰🇷', name:'South Korea',
    role:'The Battery Manufacturer',
    position:'Consumer + downstream manufacturer (batteries, electronics)',
    color:'#1A237E',
    overview:'South Korea occupies a critical but often underappreciated position in the global critical minerals value chain. It is neither a major miner nor a major refiner — but it is one of the world\'s most important downstream manufacturers of mineral-intensive products. South Korea\'s three major battery makers — LG Energy Solution, Samsung SDI, and SK On — together represent the largest non-Chinese EV battery manufacturing base globally, supplying Volkswagen, GM, Ford, Hyundai, and other major automakers. Samsung and SK Hynix together produce over 60% of global DRAM semiconductor memory. POSCO is building one of the world\'s largest battery materials supply chains. South Korea\'s strategic challenge mirrors Japan\'s: world-class downstream manufacturing capability with near-zero domestic mineral supply — creating a structural dependency on Chinese-controlled midstream supply chains for both battery materials and semiconductor inputs.',
    stats:[
      {label:'EV battery share (non-China)',value:'Major — LG, Samsung SDI, SK On',src:'IEA / industry 2024'},
      {label:'Semiconductor memory',value:'Samsung + SK Hynix: >60% DRAM global',src:'Industry reports 2024'},
      {label:'K-Chips Act 2025',value:'Investment tax credits raised to 20–30%',src:'Korea development reports'},
      {label:'Critical minerals strategy',value:'Active — KOMIR overseas acquisition',src:'Korean government'},
    ],
    strength:'World-class battery cell manufacturing expertise. Samsung SDI, LG Energy Solution, SK On are major global suppliers to European and US automakers. Deep semiconductor supply chain (Samsung, SK Hynix). Strong technology transfer capability. Active overseas mineral acquisition through KOMIR (Korea Mine Rehabilitation and Mineral Resources Corporation).',
    vulnerability:'Almost entirely import-dependent for primary critical minerals — Korea mines nothing of significance domestically. Highly exposed to Chinese REE restrictions given deep integration of Korean battery supply chains with Chinese upstream. Battery price competition from Chinese manufacturers (CATL) is intensifying.',
    recent:'K-Chips Act 2025: Investment tax credits raised to 20–30% for semiconductor fabs. $23.25 billion semiconductor support package 2025. KOMIR active in overseas mineral acquisitions. Active participant in Minerals Security Partnership. South Korean battery makers investing heavily in US and European gigafactories under IRA incentives.',
    india:'South Korea is an underappreciated potential partner for India in the battery value chain. Korean battery makers need non-Chinese mineral supply; India has the aspiration to become a battery manufacturing hub. An India-South Korea partnership combining Korean battery technology with Indian mineral resources (and Indian market scale) is structurally logical. The India-South Korea CEPA and technology partnerships provide the framework — mineral linkages are not yet formalised.',
    sources:[
      {label:'IEA Global Critical Minerals 2025',url:'https://www.iea.org/reports/global-critical-minerals-outlook-2025'},
      {label:'USGS MCS 2025',url:'https://pubs.usgs.gov/periodicals/mcs2025/mcs2025.pdf'},
      {label:'NITI Aayog Semiconductor Roadmap 2026',url:'https://www.niti.gov.in'},
    ]
  },
  {
    id:'latam', flag:'🌎', name:'South America',
    role:'The Lithium Heartland',
    position:'Resource holder (lithium dominant) — processing elsewhere',
    color:'#2E7D32',
    overview:'South America holds the world\'s largest lithium reserves — concentrated in the "Lithium Triangle" of Argentina, Chile, and Bolivia. Together these three nations control over 60% of global lithium reserves. Yet almost all processing happens elsewhere, primarily China. Three countries, three different approaches: Chile is market-friendly with state involvement in the key salars; Argentina is increasingly investment-open with multiple private players; Bolivia has enormous resources but nationalist policy has limited commercial development. The triangle is the upstream. The midstream is missing.',
    stats:[
      {label:'Lithium Triangle share of global reserves',value:'>60%',src:'USGS MCS 2025'},
      {label:'Chile — world\'s largest reserves',value:'9.2 Mt',src:'USGS MCS 2025'},
      {label:'Argentina + Bolivia resources each',value:'~23 Mt',src:'USGS MCS 2025'},
      {label:'KABIL Argentina blocks (India)',value:'5 brine-type, Catamarca',src:'NCMM Jan 2026'},
    ],
    strength:'Largest lithium reserves in the world. Low-cost brine extraction. Growing investment from US, China, EU, Australia, India. Argentina most open to foreign investment; Chile targeting 370,000 tonnes production by 2030.',
    vulnerability:'Processing happens elsewhere — the triangle is upstream-only today. Bolivia\'s nationalist approach has prevented commercial development despite world-class resources. Political instability in all three countries creates project risk. Chinese companies hold significant existing investment and offtake agreements.',
    recent:'Argentina expected to draw $10–20 billion in lithium investment by 2029. Chile targeting 370,000 tonnes production by 2030. Bolivia still struggling. KABIL (India): Phase 1 exploration on 5 Catamarca blocks complete; feasibility study by December 2027; production end-2029.',
    india:'KABIL\'s Argentina blocks are India\'s most concrete overseas mineral acquisition. India is 100% import dependent for lithium; South America holds the world\'s largest reserves. The missing link is midstream: India needs processing capacity to convert Argentine lithium ore into battery-grade lithium. Acquiring the ore without building the processing link is not a complete supply chain solution.',
    sources:[
      {label:'USGS MCS 2025 Lithium',url:'https://pubs.usgs.gov/periodicals/mcs2025/mcs2025-lithium.pdf'},
      {label:'NCMM Jan 2026',url:'https://mines.gov.in/webportal/content/ongoing-nits-critical-minerals'},
      {label:'INN Lithium Reserves 2026',url:'https://investingnews.com/daily/resource-investing/battery-metals-investing/lithium-investing/lithium-reserves-country/'},
    ]
  },
];

// Bilingual wrappers for player roles and key narratives
DB.tab_players = {
  nav: { en: "04 · The Players", mr: "०४ · खेळाडू" },
  label: { en: "4 — The Players", mr: "४ — खेळाडू" },
  intro: { en: "No country has a complete supply chain", mr: "कोणत्याही देशाकडे संपूर्ण पुरवठा साखळी नाही" },
  subIntro: { en: "Every player in the critical minerals system is either a miner without a processor, a processor without reserves, or a consumer without either.", mr: "महत्त्वाच्या खनिज प्रणालीतील प्रत्येक खेळाडू एकतर प्रक्रियाकाराशिवाय खाण करणारा, साठ्याशिवाय प्रक्रियाकार, किंवा दोन्हीशिवाय ग्राहक आहे." },
  roleMap: {
    china:     { en: "The Dominant Processor",         mr: "प्रबळ प्रक्रियाकार" },
    usa:       { en: "The Consumer Rebuilding",         mr: "पुनर्बांधणी करणारा ग्राहक" },
    eu:        { en: "The Regulatory Architect",        mr: "नियामक आर्किटेक्ट" },
    aus:       { en: "The Miner Becoming a Processor",  mr: "प्रक्रियाकार बनू पाहणारा खाणकार" },
    india:     { en: "The Paradox Player",              mr: "विरोधाभासी खेळाडू" },
    japan:     { en: "The Strategic Stockpiler",        mr: "धोरणात्मक साठेबाज" },
    indonesia: { en: "The Resource Nationalist",        mr: "साधन राष्ट्रवादी" },
    drc:       { en: "The Cobalt Giant",                mr: "कोबाल्ट महाशक्ती" },
    korea:     { en: "The Battery Manufacturer",        mr: "बॅटरी उत्पादक" },
    latam:     { en: "The Lithium Heartland",           mr: "लिथियम भूमी" }
  }
};

// ══════════════════════════════════════════════
// TAB 4 — THE VALUE CHAIN
// ══════════════════════════════════════════════
DB.tab_chain = {
  nav: { en: "05 · Value Chain", mr: "०५ · मूल्य साखळी" },
  label: { en: "5 — Value Chain", mr: "५ — मूल्य साखळी" },
  sections: [
    {
      id: "chain_51",
      label: { en: "5.1 — The Five Stages", mr: "४.१ — पाच टप्पे" },
      title: { en: "Where in the chain does strategic power actually sit?", mr: "साखळीत धोरणात्मक शक्ती नक्की कुठे आहे?" },
      intro: { en: "Every critical mineral passes through five stages before it reaches a finished product. Understanding this chain — and where concentration is worst — is the foundation for every policy choice that follows.", mr: "प्रत्येक महत्त्वाचे खनिज तयार उत्पादनात पोहोचण्यापूर्वी पाच टप्प्यांतून जाते. ही साखळी समजणे — आणि एकाग्रता कुठे सर्वात वाईट आहे — त्यानंतर येणाऱ्या प्रत्येक धोरणात्मक निवडीचा पाया आहे." },
      indiaMatrix: {
        caption: { en: "India's position at each chain stage — six key minerals", mr: "प्रत्येक साखळी टप्प्यावर भारताची स्थिती — सहा प्रमुख खनिजे" },
        stages: [
          { en: "Exploration", mr: "शोध" },
          { en: "Mining", mr: "खाणकाम" },
          { en: "Processing ★", mr: "प्रक्रिया ★" },
          { en: "Refining", mr: "शुद्धीकरण" },
          { en: "Manufacturing", mr: "उत्पादन" }
        ],
        minerals: [
          { name: "Lithium",  stages: ["partial","absent","absent","absent","absent"] },
          { name: "REEs",     stages: ["present","absent","absent","absent","absent"] },
          { name: "Graphite", stages: ["present","partial","absent","absent","absent"] },
          { name: "Cobalt",   stages: ["absent","absent","absent","absent","absent"] },
          { name: "Nickel",   stages: ["partial","partial","absent","absent","absent"] },
          { name: "Gallium",  stages: ["present","absent","absent","absent","absent"] }
        ],
        legend: [
          { key: "present", label: { en: "Present / operational", mr: "उपस्थित / कार्यरत" }, color: "#2D6A4F" },
          { key: "partial", label: { en: "Partial / limited", mr: "आंशिक / मर्यादित" }, color: "#D4A017" },
          { key: "absent",  label: { en: "Absent / 100% import dependent", mr: "अनुपस्थित / १००% आयात अवलंबित" }, color: "#C62828" }
        ],
        insight: { en: "The pattern is consistent: India has geological presence upstream. It is effectively absent from processing, refining, and manufacturing for almost all key minerals.", mr: "नमुना सातत्यपूर्ण आहे: भारताला वरच्या प्रवाहात भूगर्भीय उपस्थिती आहे. बहुतांश प्रमुख खनिजांसाठी ते प्रक्रिया, शुद्धीकरण आणि उत्पादनातून प्रभावीपणे अनुपस्थित आहे." }
      },
      sources: ["iea_outlook_2025", "india_mom_2023", "sp_global_2024"]
    },

    {
      id: "chain_52",
      label: { en: "5.2 — The Midstream in Detail", mr: "४.२ — मिडस्ट्रीम तपशीलात" },
      title: { en: "The chokepoint is getting tighter, not looser", mr: "अडथळा बिंदू सैल होत नाही, आणखी घट्ट होत आहे" },
      intro: { en: "The midstream — processing, separation, and refining — is where strategic vulnerability is most concentrated. Governments have announced diversification. The data shows the opposite is happening.", mr: "मिडस्ट्रीम — प्रक्रिया, विभाजन आणि शुद्धीकरण — जेथे धोरणात्मक असुरक्षितता सर्वाधिक केंद्रित आहे. सरकारांनी विविधीकरण जाहीर केले आहे. डेटा उलट दिसतो." },
      stats: [
        { value: "86%",  label: { en: "Average share of top 3 refining nations in 2024 — up from 82% in 2020", mr: "२०२४ मध्ये शीर्ष ३ शुद्धीकरण देशांचा सरासरी वाटा — २०२० मध्ये ८२% वरून वाढला" }, src: "iea_outlook_2025" },
        { value: "19/20", label: { en: "Minerals where China is the leading refiner (of 20 strategic minerals)", mr: "चीन आघाडीवर असलेली खनिजे शुद्धीकरणात (२० धोरणात्मक खनिजांपैकी)" }, src: "iea_outlook_2025" },
        { value: "~70%",  label: { en: "China's average refining market share across 20 strategic minerals", mr: "२० धोरणात्मक खनिजांवर चीनचा सरासरी शुद्धीकरण बाजार वाटा" }, src: "iea_outlook_2025" },
        { value: ">60%",  label: { en: "China's projected share of refined lithium and cobalt in 2035", mr: "२०३५ मध्ये शुद्ध लिथियम आणि कोबाल्टमध्ये चीनचा अंदाजित वाटा" }, src: "iea_outlook_2025" }
      ],
      n1test: {
        title: { en: "The N−1 resilience test", mr: "N−१ लवचिकता चाचणी" },
        body: { en: "Remove the single largest supplier from any critical mineral supply chain -- China for lithium, cobalt, graphite and rare earths, Indonesia for nickel -- and ask how much of remaining (\"N-1\") demand could still be met by 2035 from the rest of the world. The answer varies sharply by mineral: for graphite and rare earth elements, only 35-40% of N-1 demand would be covered -- a severe shortfall. For nickel, the figure is under 55%. For lithium and cobalt, it is a less alarming but still significant 65%. Supply concentration — not geological scarcity — is the central strategic problem, and it is most acute for exactly the minerals (REEs, graphite) where downstream demand for magnets and batteries is growing fastest.", mr: "कोणत्याही महत्त्वाच्या खनिज पुरवठा साखळीतून एकमेव सर्वात मोठा पुरवठादार काढा -- लिथियम, कोबाल्ट, ग्रेफाइट आणि रेअर अर्थसाठी चीन, निकेलसाठी इंडोनेशिया -- आणि विचारा की २०३५ पर्यंत उर्वरित (\"N-१\") मागणीपैकी किती जगाच्या बाकीच्या भागातून पूर्ण होऊ शकेल. उत्तर खनिजानुसार मोठ्या प्रमाणात बदलते: ग्रेफाइट आणि रेअर अर्थ घटकांसाठी, N-१ मागणीच्या केवळ ३५-४०% पूर्ण होईल -- एक गंभीर तूट. निकेलसाठी, हा आकडा ५५% पेक्षा कमी आहे. लिथियम आणि कोबाल्टसाठी, तो कमी चिंताजनक पण लक्षणीय ६५% आहे." },
        src: "iea_outlook_2025"
      },
      capexNote: {
        title: { en: "Why diversification is slow: the capital cost gap", mr: "विविधीकरण मंद का आहे: भांडवली खर्च तफावत" },
        body: { en: "The IEA is blunt on this point: market forces alone will not drive diversification. Capital expenditure for mining and refining projects outside the dominant producing country is typically around 50% higher than within it, and these projects often face higher ongoing operating costs too -- making them harder to sustain through commodity price downturns. Combined with the long lead times discussed in 5.0 and 5.4, this is why government co-investment and viability-gap funding (not just permitting reform) are necessary, not optional, tools.", mr: "IEA या मुद्द्यावर स्पष्ट आहे: केवळ बाजार शक्ती विविधीकरण आणणार नाहीत. प्रमुख उत्पादक देशाबाहेरील खाणकाम आणि शुद्धीकरण प्रकल्पांसाठी भांडवली खर्च त्या देशातील खर्चापेक्षा सुमारे ५०% जास्त असतो, आणि या प्रकल्पांना अनेकदा जास्त चालू कार्यान्वयन खर्चाचाही सामना करावा लागतो -- ज्यामुळे वस्तू किंमत मंदीच्या काळात त्यांना टिकवणे कठीण होते. ५.० आणि ५.४ मध्ये चर्चा केलेल्या दीर्घ कालमर्यादेसह, यामुळेच सरकारी सह-गुंतवणूक आणि व्यवहार्यता-तफावत वित्तपुरवठा (केवळ परवाना सुधारणा नाही) आवश्यक साधने आहेत, पर्यायी नाहीत." },
        src: "iea_outlook_2025"
      },
      sources: ["iea_outlook_2025"]
    },

    {
      id: "chain_53",
      label: { en: "5.3 — The De-risking Toolkit", mr: "५.३ — डी-रिस्किंग साधन संच" },
      title: { en: "What governments are actually doing — and what it means", mr: "सरकारे प्रत्यक्षात काय करत आहेत — आणि त्याचा अर्थ काय" },
      intro: { en: "Governments around the world have announced strategies to reduce dependence on concentrated critical mineral supply chains. Five distinct tools are being deployed. They differ in speed, cost, and effectiveness.", mr: "जगभरातील सरकारांनी केंद्रित महत्त्वाच्या खनिज पुरवठा साखळ्यांवरील अवलंबित्व कमी करण्यासाठी धोरणे जाहीर केली आहेत. पाच वेगळी साधने तैनात केली जात आहेत." },
      toolkitOverview: {
        title: { en: "The five tools, at a glance", mr: "पाच साधने, एका दृष्टीक्षेपात" },
        items: [
          { name: { en: "1. Reshoring mining & processing", mr: "१. खाणकाम आणि प्रक्रिया पुन्हा देशात आणणे" }, body: { en: "Building new domestic mines and refineries (e.g. MP Materials in the US, Lynas in Australia, KABIL/NCMM in India). Slowest tool -- constrained by the multi-year lead times covered in 5.0, 5.0.1, and 5.4.", mr: "नवीन देशांतर्गत खाणी आणि शुद्धीकरण सुविधा उभारणे. सर्वात संथ साधन -- ५.०, ५.०.१ आणि ५.४ मध्ये समाविष्ट बहु-वर्षीय कालमर्यादेमुळे मर्यादित." }, seeAlso: "5.0, 5.0.1, 5.4" },
          { name: { en: "2. Friend-shoring & overseas acquisition", mr: "२. मित्र-देशीकरण आणि परदेशी संपादन" }, body: { en: "Securing equity stakes or offtake in allied/partner countries (KABIL in Argentina/Australia, MSP, JOGMEC's model). Faster than building from scratch, but still subject to the same project-level lead times once the asset itself needs developing.", mr: "सहयोगी/भागीदार देशांमध्ये इक्विटी हिस्सेदारी किंवा ऑफटेक सुरक्षित करणे. सुरवातीपासून तयार करण्यापेक्षा वेगवान, पण मालमत्ता विकसित करताना त्याच प्रकल्प-स्तरीय कालमर्यादेच्या अधीन." }, seeAlso: "5.0.1, Tab 4 player cards" },
          { name: { en: "3. Stockpiling", mr: "३. साठा करणे" }, body: { en: "Holding strategic reserves to buy time during supply disruptions (Japan since 1983, US National Defense Stockpile). Does not add production -- it only delays the impact of a shock.", mr: "पुरवठा व्यत्ययादरम्यान वेळ मिळवण्यासाठी सामरिक साठा ठेवणे. उत्पादन वाढवत नाही -- केवळ धक्क्याचा परिणाम लांबवते." }, seeAlso: "Tab 4 — US, Japan player cards" },
          { name: { en: "4. Recycling (\"urban mining\")", mr: "४. पुनर्वापर (\"शहरी खाणकाम\")" }, body: { en: "Recovering materials from end-of-life batteries, electronics, and industrial scrap. India's Rs 1,500 crore recycling scheme targets ~300,000 t/year by FY2030-31 -- one of the few areas where India is building forward capability rather than starting from zero.", mr: "आयुष्य संपलेल्या बॅटरी, इलेक्ट्रॉनिक्स आणि औद्योगिक भंगारातून सामग्री पुनर्प्राप्त करणे. भारताची रु. १,५०० कोटी पुनर्वापर योजना FY2030-31 पर्यंत ~३००,००० टन/वर्षाचे लक्ष्य ठेवते." }, seeAlso: "5.0.4" },
          { name: { en: "5. Substitution & material efficiency", mr: "५. प्रतिस्थापन आणि सामग्री कार्यक्षमता" }, body: { en: "Redesigning products to use less of a scarce material, or substitute materials altogether (e.g. reducing dysprosium/terbium content in magnets, or sodium-ion as a lithium alternative). Slower to scale but reduces exposure structurally rather than just diversifying supply.", mr: "दुर्मिळ सामग्रीचा कमी वापर करण्यासाठी उत्पादनांची पुनर्रचना करणे, किंवा सामग्री पूर्णपणे बदलणे. वाढण्यास संथ पण केवळ पुरवठा विविधीकरणाऐवजी संरचनात्मकरित्या जोखीम कमी करते." }, seeAlso: "5.0.2, 5.0.3" }
        ]
      },
      honestNote: { en: "As of mid-2026, none of the five de-risking tools has yet produced operational midstream capacity outside China at the scale needed to significantly reduce vulnerability for rare earth elements or battery-grade graphite. Stockpiling buys time. Recycling is growing but starts from a near-zero base. Reshoring of mining has begun in a few countries.", mr: "मध्य-२०२६ पर्यंत, पाच डी-रिस्किंग साधनांपैकी कोणत्याहीने अद्याप रेअर अर्थ घटक किंवा बॅटरी-ग्रेड ग्रेफाइटसाठी असुरक्षितता लक्षणीयरित्या कमी करण्यासाठी आवश्यक स्केलवर चीनबाहेर ऑपरेशनल मिडस्ट्रीम क्षमता निर्माण केलेली नाही." },
      sources: ["iea_outlook_2025", "iea_oct_2025"]
    }
  ]
};

// ══════════════════════════════════════════════
// TAB 5 — STAGE-BY-STAGE DEEP DIVES (5.0, 5.0.1-5.0.4, 5.4)
// Rendered via buildStageList() (5.0-5.0.4) and
// renderInvestmentTimeline() (5.4) in app.js.
// ══════════════════════════════════════════════
DB._rawChainStages = [
    {
      id: "chain_50",
      label: { en: "5.0 — Exploration", mr: "५.० — शोध" },
      title: { en: "The least concentrated, least geopolitically sensitive stage", mr: "सर्वात कमी एकवटलेला, सर्वात कमी भू-राजकीयदृष्ट्या संवेदनशील टप्पा" },
      intro: { en: "Exploration is geologically distributed across a wide range of countries -- the US, Australia, Canada, Brazil, and India among them. Unlike midstream refining, where one country holds a near-monopoly, the upstream exploration phase is open to any nation with favourable geology and a functional permitting regime. This is also the stage dominated by junior exploration companies proving geological concepts, not state-owned giants -- which is precisely why it is the least geopolitically sensitive stage, and the one where India\'s participation faces the fewest external barriers.", mr: "शोध भौगोलिकदृष्ट्या अनेक देशांमध्ये विभागलेला आहे -- अमेरिका, ऑस्ट्रेलिया, कॅनडा, ब्राझील आणि भारत यांचा यात समावेश आहे. मिडस्ट्रीम शुद्धीकरणाप्रमाणे, जेथे एका देशाची जवळजवळ मक्तेदारी आहे, उर्ध्वप्रवाह शोध टप्पा अनुकूल भूगर्भशास्त्र आणि कार्यरत परवाना व्यवस्था असलेल्या कोणत्याही राष्ट्रासाठी खुला आहे. हा टप्पा कनिष्ठ शोध कंपन्यांचे वर्चस्व असलेला आहे, राज्य-मालकीच्या दिग्गजांचे नाही -- म्हणूनच हा सर्वात कमी भू-राजकीयदृष्ट्या संवेदनशील टप्पा आहे." },
      stats: [
        { value: "17-18 yrs", label: { en: "Global average time from discovery to production", mr: "शोधापासून उत्पादनापर्यंत जागतिक सरासरी वेळ" }, src: "sp_global_2024" },
        { value: "29 yrs", label: { en: "United States average -- extended by litigation, multi-agency permitting, and EIS requirements", mr: "अमेरिका सरासरी -- खटले, बहु-संस्था परवाना आणि EIS आवश्यकतांमुळे वाढलेली" }, src: "sp_global_2024" },
        { value: "523", label: { en: "India: exploration projects completed since April 2024 (against a 1,200 target by 2030-31)", mr: "भारत: एप्रिल २०२४ पासून पूर्ण झालेले शोध प्रकल्प (२०३०-३१ पर्यंत १,२०० च्या उद्दिष्टाविरुद्ध)" }, src: "ncmm_jan2026_pdf" },
        { value: "59", label: { en: "India: critical mineral blocks auctioned since April 2024 (against a 100-block target; 23 currently under auction)", mr: "भारत: एप्रिल २०२४ पासून लिलाव झालेले महत्त्वाचे खनिज ब्लॉक्स (१००-ब्लॉक उद्दिष्टाविरुद्ध; २३ सध्या लिलावात)" }, src: "ncmm_jan2026_pdf" }
      ],
      indiaSection: {
        title: { en: "India\'s exploration architecture", mr: "भारताची शोध संरचना" },
        body: { en: "Exploration in India is led by the Geological Survey of India (GSI) and Mineral Exploration and Consultancy Limited (MECL), with the National Mineral Exploration Development Trust (NMEDT) as a second channel. The NCMM\'s 523-project tally since April 2024 breaks down as: GSI 195 + NMEDT 62 in FY2024-25, and GSI 230 + NMEDT 36 in FY2025-26. The process moves from \"Obvious Geological Potential\" (OGP) areas through G4 (reconnaissance) to G3 (preliminary) to G2 (general) and G1 (detailed) exploration stages -- a sequence historically slowed by limited private-sector participation. The MMDR Amendment Act introduced a separate Exploration Licence (EL) to let private entities participate, backed by NMET funding -- though upfront capital support comparable to Australia\'s exploration subsidies is still being operationalised.", mr: "भारतातील शोधाचे नेतृत्व भूवैज्ञानिक सर्वेक्षण भारत (GSI) आणि खनिज शोध आणि सल्ला मर्यादित (MECL) करतात, राष्ट्रीय खनिज शोध विकास निधी (NMEDT) हे दुसरे माध्यम आहे. एप्रिल २०२४ पासूनची ५२३-प्रकल्प संख्या अशी आहे: FY2024-25 मध्ये GSI १९५ + NMEDT ६२, आणि FY2025-26 मध्ये GSI २३० + NMEDT ३६. प्रक्रिया \"स्पष्ट भूवैज्ञानिक संभाव्यता\" (OGP) क्षेत्रांपासून G4 (पुनर्निरीक्षण) ते G3 (प्राथमिक) ते G2 (सामान्य) आणि G1 (तपशीलवार) शोध टप्प्यांपर्यंत जाते." },
        src: "ncmm_jan2026_pdf"
      },
      caseStudy: {
        title: { en: "Case study: the Reasi (J&K) lithium find", mr: "उदाहरण: रियासी (जम्मू-काश्मीर) लिथियम शोध" },
        body: { en: "In February 2023, GSI announced a 5.9 million tonne inferred (G3-stage) lithium ore resource at Salal-Haimana in Reasi district, J&K -- India\'s first lithium discovery, reportedly placing India among the top global holders of lithium reserves. However, this is an early-stage inferred resource, not a confirmed reserve: subsequent auction attempts failed after private companies assessed the quantity and quality as commercially unviable, and the area\'s seismic sensitivity (Zone V) and ecological constraints add further complexity. As of mid-2026, Reasi remains a G3 resource with no confirmed extraction pathway -- illustrating the gap between a geological announcement and a bankable project.", mr: "फेब्रुवारी २०२३ मध्ये, GSI ने जम्मू-काश्मीरच्या रियासी जिल्ह्यातील सालाल-हैमना येथे ५.९ दशलक्ष टन अनुमानित (G3-टप्पा) लिथियम धातुक संसाधन जाहीर केले -- भारताचा पहिला लिथियम शोध. तथापि, हे एक प्रारंभिक-टप्प्यातील अनुमानित संसाधन आहे, पुष्टी झालेला साठा नाही: नंतरचे लिलाव प्रयत्न अयशस्वी झाले कारण खाजगी कंपन्यांनी प्रमाण आणि गुणवत्ता व्यावसायिकदृष्ट्या अव्यवहार्य मानली. मध्य-२०२६ पर्यंत, रियासी हे G3 संसाधन आहे ज्याला कोणताही पुष्टी झालेला उत्खनन मार्ग नाही -- भूवैज्ञानिक घोषणा आणि बँकयोग्य प्रकल्प यांमधील तफावत दर्शवते.", src: "gsi_reasi_lithium_2023", inference: { en: "[OUR INFERENCE] This case is a useful caution against treating resource announcements as equivalent to supply security -- a theme that recurs throughout India\'s critical minerals position (see Tab 2, 2.4).", mr: "[आपला अनुमान] संसाधन घोषणांना पुरवठा सुरक्षेच्या समतुल्य मानण्याविरुद्ध हे उदाहरण एक उपयुक्त सावधगिरी आहे." } }
      },
      bottleneckNote: {
        title: { en: "The bottleneck is commercial, not geological", mr: "अडथळा व्यावसायिक आहे, भूवैज्ञानिक नाही" },
        body: { en: "India\'s primary exploration constraint is not a shortage of minerals but what might be called a regulatory silo effect: minerals like gallium and germanium are routinely discarded as by-products at aluminium and zinc smelters because the policy link between resource identification (NCMM) and downstream demand (the India Semiconductor Mission) is not yet fully operationalised. This same disconnect -- promising geology without a clear path to a financeable project -- recurs in section 5.4\'s discussion of the \"orphan period\".", mr: "भारताची प्राथमिक शोध अडचण खनिजांची कमतरता नाही तर एक नियामक सायलो परिणाम आहे: गॅलियम आणि जर्मेनियम सारखी खनिजे अॅल्युमिनियम आणि झिंक स्मेल्टरमध्ये नियमितपणे टाकून दिली जातात कारण संसाधन ओळख (NCMM) आणि डाउनस्ट्रीम मागणी (भारत सेमीकंडक्टर मिशन) यांमधील धोरणात्मक दुवा अद्याप पूर्णपणे कार्यान्वित झालेला नाही." }
      },
      sources: ["sp_global_2024", "ncmm_jan2026_pdf", "gsi_reasi_lithium_2023"]
    },

    {
      id: "chain_501",
      label: { en: "5.0.1 — Mining", mr: "५.०.१ — खाणकाम" },
      title: { en: "More distributed than refining -- but concentration is rising and set to intensify", mr: "शुद्धीकरणापेक्षा अधिक विभागलेले -- पण एकाग्रता वाढत आहे आणि अधिक तीव्र होणार आहे" },
      intro: { en: "Mining -- the actual extraction of ore -- is less concentrated than midstream refining. But the gap is narrowing: the average share held by the top three producing countries for key energy minerals rose from 73% in 2020 to 77% in 2024. And for several minerals, the leading producer\'s share is already very high even at the mining stage, before any refining takes place.", mr: "खाणकाम -- धातुकाचे प्रत्यक्ष उत्खनन -- मिडस्ट्रीम शुद्धीकरणापेक्षा कमी एकवटलेले आहे. पण ही तफावत कमी होत आहे: प्रमुख ऊर्जा खनिजांसाठी आघाडीच्या तीन उत्पादक देशांचा सरासरी वाटा २०२० मधील ७३% वरून २०२४ मध्ये ७७% पर्यंत वाढला. आणि अनेक खनिजांसाठी, कोणत्याही शुद्धीकरणापूर्वीच खाणकाम टप्प्यावरही आघाडीच्या उत्पादकाचा वाटा आधीच खूप जास्त आहे." },
      stats: [
        { value: "~48%", label: { en: "Australia's share of global lithium ore production (2024) -- the world's largest producer", mr: "जागतिक लिथियम धातुक उत्पादनात ऑस्ट्रेलियाचा वाटा (२०२४) -- जगातील सर्वात मोठा उत्पादक" }, src: "iea_mining_concentration_2025" },
        { value: "~74%", label: { en: "DRC's share of global cobalt mine production (2024)", mr: "जागतिक कोबाल्ट खाण उत्पादनात DRC चा वाटा (२०२४)" }, src: "iea_mining_concentration_2025" },
        { value: "~60-67%", label: { en: "Indonesia's share of global mined nickel (2024) -- a roughly 16-fold increase since 2015", mr: "जागतिक उत्खनित निकेलमध्ये इंडोनेशियाचा वाटा (२०२४) -- २०१५ पासून सुमारे १६ पट वाढ" }, src: "iea_mining_concentration_2025" },
        { value: "~24%", label: { en: "Chile's share of global copper mine production (2024)", mr: "जागतिक तांबे खाण उत्पादनात चिलीचा वाटा (२०२४)" }, src: "iea_mining_concentration_2025" },
        { value: "~69% / ~87%", label: { en: "China's share of global rare earth mine production / natural graphite mining (2024)", mr: "जागतिक रेअर अर्थ खाण उत्पादन / नैसर्गिक ग्रेफाइट खाणकामात चीनचा वाटा (२०२४)" }, src: "iea_mining_concentration_2025" }
      ],
      leadTimeNote: {
        title: { en: "Lead times vary by mineral, but all are long relative to demand growth", mr: "खनिजानुसार वेळ बदलतो, पण मागणी वाढीच्या तुलनेत सर्व दीर्घ आहेत" },
        body: { en: "Newly announced projects average around eight years from announcement to production for rare earth elements, and over ten years for more complex mining and processing projects -- broadly consistent with the 17-18 year discovery-to-production figure in 5.0, which spans a longer window starting from initial exploration. Declining ore grades and rising project costs are making this worse for copper specifically, where the IEA describes the emerging supply gap as a particular concern.", mr: "नवीन घोषित प्रकल्पांना रेअर अर्थ घटकांसाठी घोषणेपासून उत्पादनापर्यंत सरासरी आठ वर्षे लागतात, आणि अधिक गुंतागुंतीच्या खाणकाम आणि प्रक्रिया प्रकल्पांसाठी दहा वर्षांपेक्षा जास्त -- हे ५.० मधील १७-१८ वर्षांच्या शोध-ते-उत्पादन आकड्याशी मोठ्या प्रमाणात सुसंगत आहे, जो सुरुवातीच्या शोधापासून सुरू होणारा दीर्घ कालावधी दर्शवतो. घटते धातुक दर्जे आणि वाढते प्रकल्प खर्च हे तांब्यासाठी विशेषतः ही समस्या वाढवत आहेत." },
        src: "iea_mining_concentration_2025"
      },
      caseStudy: {
        title: { en: "Case study: Rhyolite Ridge, Nevada", mr: "उदाहरण: रायोलाइट रिज, नेवाडा" },
        body: { en: "In October 2024, Ioneer\'s Rhyolite Ridge lithium-boron project became the first new lithium mine permit approved as part of the US government\'s accelerated critical-minerals push -- following a roughly four-year federal environmental review (Environmental Impact Statement) process that began around 2020. The project is expected to quadruple US lithium production once operational, with construction starting in 2025 and first production targeted for 2028. Even with explicit political priority and federal loan support, the gap between permit approval and first output is still several years -- illustrating, at the project level, the same lead-time dynamics discussed in 5.0 and 5.4.", mr: "ऑक्टोबर २०२४ मध्ये, Ioneer चा रायोलाइट रिज लिथियम-बोरॉन प्रकल्प अमेरिकेच्या सरकारच्या प्रवेगित महत्त्वाच्या खनिजे मोहिमेअंतर्गत मान्यता मिळालेला पहिला नवीन लिथियम खाण परवाना बनला -- सुमारे २०२० पासून सुरू झालेल्या चार वर्षांच्या संघीय पर्यावरणीय पुनरावलोकन प्रक्रियेनंतर. हा प्रकल्प कार्यान्वित झाल्यावर अमेरिकेचे लिथियम उत्पादन चौपट करेल अशी अपेक्षा आहे, बांधकाम २०२५ मध्ये सुरू होईल आणि पहिले उत्पादन २०२८ साठी निश्चित केले आहे." },
        src: "ioneer_rhyolite_2024"
      },
      indiaSection: {
        title: { en: "India\'s mining position: active in volume, absent in the minerals that matter most", mr: "भारताची खाणकाम स्थिती: प्रमाणात सक्रिय, सर्वाधिक महत्त्वाच्या खनिजांमध्ये अनुपस्थित" },
        body: { en: "India has substantial mining activity for several minerals -- provisional FY2024-25 figures show roughly 85,000 tonnes of graphite, around 4,34,000 tonnes of titanium-bearing minerals, about 15,000 tonnes of zirconium-bearing minerals, and over 1.8 million tonnes of phosphorite. But for the minerals at the centre of the energy transition -- lithium, cobalt, and nickel -- India has zero commercial primary mining and remains 100% import dependent. Small quantities of nickel and cobalt are recovered through recycling (roughly 300 and 1,100 tonnes respectively), but this is recovery, not mining.", mr: "भारतात अनेक खनिजांसाठी मोठ्या प्रमाणात खाणकाम क्रियाकलाप आहे -- FY2024-25 च्या प्राथमिक आकड्यांनुसार सुमारे ८५,००० टन ग्रेफाइट, सुमारे ४,३४,००० टन टायटॅनियम-युक्त खनिजे, सुमारे १५,००० टन झिर्कोनियम-युक्त खनिजे, आणि १.८ दशलक्ष टनांपेक्षा जास्त फॉस्फोराइट. पण ऊर्जा संक्रमणाच्या केंद्रस्थानी असलेल्या खनिजांसाठी -- लिथियम, कोबाल्ट आणि निकेल -- भारताकडे शून्य व्यावसायिक प्राथमिक खाणकाम आहे आणि तो १००% आयातीवर अवलंबून आहे." },
        src: "india_mom_2023"
      },
      sources: ["iea_mining_concentration_2025", "ioneer_rhyolite_2024", "india_mom_2023"]
    },

    {
      id: "chain_502",
      label: { en: "5.0.2 — Processing & Separation", mr: "५.०.२ — प्रक्रिया आणि विभाजन" },
      title: { en: "Ownership matters as much as geography", mr: "मालकी भूगोलाइतकीच महत्त्वाची आहे" },
      intro: { en: "Processing and separation -- converting mined ore into usable chemical forms -- is where China\'s advantage compounds. China is the leading refiner for 19 of 20 strategic minerals analysed by the IEA (see 5.2). But two further patterns matter at this stage specifically: separation of rare earths into individual elements is an even narrower chokepoint than refining in general, and in some minerals China\'s dominance comes through ownership of foreign processing capacity rather than processing within its own borders.", mr: "प्रक्रिया आणि विभाजन -- उत्खनित धातुकाचे वापरण्यायोग्य रासायनिक स्वरूपात रूपांतर -- येथे चीनचा फायदा वाढतो. IEA ने विश्लेषण केलेल्या २० पैकी १९ धोरणात्मक खनिजांसाठी चीन आघाडीचा शुद्धीकरण करणारा आहे (५.२ पहा). पण या टप्प्यावर विशेषतः दोन नमुने महत्त्वाचे आहेत: रेअर अर्थचे वैयक्तिक घटकांमध्ये विभाजन हे सामान्य शुद्धीकरणापेक्षाही अरुंद अडथळा बिंदू आहे, आणि काही खनिजांमध्ये चीनचे वर्चस्व स्वतःच्या सीमेतील प्रक्रियेपेक्षा परदेशी प्रक्रिया क्षमतेच्या मालकीद्वारे येते." },
      stats: [
        { value: "~91%", label: { en: "China's share of global rare earth refining and separation capacity (2024)", mr: "जागतिक रेअर अर्थ शुद्धीकरण आणि विभाजन क्षमतेत चीनचा वाटा (२०२४)" }, src: "iea_ree_2026" },
        { value: "~60% → ~94%", label: { en: "China's share of global rare earth mining vs. sintered permanent magnet production (2024) -- dominance compounds at each downstream step", mr: "जागतिक रेअर अर्थ खाणकाम वि. सिंटर्ड स्थायी चुंबक उत्पादनात चीनचा वाटा (२०२४) -- प्रत्येक डाउनस्ट्रीम टप्प्यावर वर्चस्व वाढते" }, src: "iea_ree_2026" },
        { value: "~60%", label: { en: "Chinese-owned share of global refined nickel production -- achieved primarily through ownership of Indonesian smelters, not refining within China", mr: "जागतिक शुद्ध निकेल उत्पादनातील चिनी-मालकीचा वाटा -- मुख्यतः इंडोनेशियन स्मेल्टरच्या मालकीद्वारे, चीनमधील शुद्धीकरणाद्वारे नाही" }, src: "aspi_indonesia_nickel_2026" },
        { value: "~75%", label: { en: "Share of Indonesia's nickel refining capacity controlled by two Chinese firms (Tsingshan, Jiangsu Delong) as of 2023", mr: "इंडोनेशियाच्या निकेल शुद्धीकरण क्षमतेपैकी दोन चिनी कंपन्यांच्या (Tsingshan, Jiangsu Delong) नियंत्रणाखालील वाटा (२०२३)" }, src: "aspi_indonesia_nickel_2026" }
      ],
      ownershipNote: {
        title: { en: "The Indonesia template: ownership without geography", mr: "इंडोनेशिया प्रारूप: भूगोलाशिवाय मालकी" },
        body: { en: "Indonesia banned exports of raw nickel ore, forcing processing onshore -- a deliberate industrial policy to capture more value domestically. China responded not by losing access, but by investing an estimated USD 60-65 billion in Indonesian processing infrastructure since 2010, building integrated industrial parks such as the Indonesia Morowali Industrial Park. The result: Indonesia became the world\'s largest refined nickel producer, but Chinese firms own roughly three-quarters of that capacity. For analysts focused only on where processing happens geographically, this looks like diversification away from China. Ownership tracing tells a different story -- and the same template (build the processing capacity inside the resource-rich country, then own it) is something China is expected to replicate for other minerals and other countries.", mr: "इंडोनेशियाने कच्च्या निकेल धातुकाच्या निर्यातीवर बंदी घातली, ज्यामुळे प्रक्रिया देशांतर्गत करणे भाग पडले. चीनने प्रवेश गमावण्याऐवजी, २०१० पासून इंडोनेशियन प्रक्रिया पायाभूत सुविधांमध्ये अंदाजे USD ६०-६५ अब्ज गुंतवणूक केली. परिणाम: इंडोनेशिया जगातील सर्वात मोठा शुद्ध निकेल उत्पादक बनला, पण चिनी कंपन्यांची त्या क्षमतेच्या सुमारे तीन-चतुर्थांश मालकी आहे. केवळ भौगोलिक स्थानावर लक्ष देणाऱ्या विश्लेषकांना हे चीनपासून विविधीकरण दिसते. मालकी शोधल्यास वेगळी कथा दिसते." },
        src: "aspi_indonesia_nickel_2026",
        inference: { en: "[OUR INFERENCE] This has a direct implication for how India and other partners assess \"diversification\": a processing facility built outside China is not automatically outside Chinese strategic influence if Chinese firms hold majority ownership or technology dependence. Equity structure, not just location, should be part of supply-chain risk assessment.", mr: "[आपला अनुमान] याचा भारत आणि इतर भागीदारांनी \"विविधीकरण\" कसे मूल्यांकन करावे यावर थेट परिणाम आहे: चीनच्या बाहेर बांधलेली प्रक्रिया सुविधा चिनी कंपन्यांची बहुसंख्य मालकी किंवा तंत्रज्ञान अवलंबित्व असल्यास स्वयंचलितपणे चिनी धोरणात्मक प्रभावाबाहेर नसते." }
      },
      indiaSection: {
        title: { en: "India\'s separation capability: present for light rare earths, absent for heavy", mr: "भारताची विभाजन क्षमता: हलक्या रेअर अर्थसाठी उपस्थित, जड साठी अनुपस्थित" },
        body: { en: "India produced approximately 2,345 tonnes of REE as oxide (REO) in FY2024-25 through IREL -- but this is overwhelmingly light rare earth element (LREE) separation. Processing capability for heavy rare earths (HREEs) such as dysprosium and terbium, which are essential for high-performance magnets, is negligible. This matches the broader pattern: India has upstream presence (monazite resources, some LREE separation) but the most strategically valuable separation steps -- HREE and magnet-grade material -- remain entirely dependent on imports.", mr: "भारताने FY2024-25 मध्ये IREL मार्फत अंदाजे २,३४५ टन REE ऑक्साइड (REO) स्वरूपात उत्पादित केले -- पण हे मुख्यतः हलके रेअर अर्थ घटक (LREE) विभाजन आहे. डिस्प्रोसियम आणि टर्बियम सारख्या जड रेअर अर्थ (HREE) साठी प्रक्रिया क्षमता, जी उच्च-कार्यक्षमता चुंबकांसाठी आवश्यक आहे, नगण्य आहे." },
        src: "india_mom_2023"
      },
      sources: ["iea_ree_2026", "aspi_indonesia_nickel_2026", "india_mom_2023"]
    },

    {
      id: "chain_503",
      label: { en: "5.0.3 — Refining & Material Production", mr: "५.०.३ — शुद्धीकरण आणि सामग्री उत्पादन" },
      title: { en: "The next chokepoints are not the ones everyone is watching", mr: "पुढील अडथळा बिंदू सर्वांचे लक्ष असलेले नाहीत" },
      intro: { en: "Most policy attention on battery materials focuses on lithium, cobalt, and nickel. But as battery chemistry shifts -- LFP\'s share of the global electric car market rose from under 10% in 2020 to nearly half by 2025 -- two precursor materials that few people track are emerging as the tightest chokepoints of all: purified phosphoric acid (PPA) and high-purity manganese sulphate.", mr: "बॅटरी सामग्रीवरील बहुतेक धोरणात्मक लक्ष लिथियम, कोबाल्ट आणि निकेलवर केंद्रित आहे. पण बॅटरी रसायनशास्त्र बदलत असताना -- LFP चा जागतिक इलेक्ट्रिक कार बाजारातील वाटा २०२० मधील १०% पेक्षा कमी वरून २०२५ पर्यंत जवळजवळ निम्म्यावर पोहोचला -- क्वचितच कोणी लक्ष ठेवत असलेली दोन पूर्वगामी सामग्री सर्वात अरुंद अडथळा बिंदू बनत आहेत: शुद्ध फॉस्फोरिक आम्ल (PPA) आणि उच्च-शुद्धता मँगनीज सल्फेट." },
      stats: [
        { value: "~75%", label: { en: "China's share of global purified phosphoric acid (PPA) production -- essential for LFP and LMFP cathodes", mr: "जागतिक शुद्ध फॉस्फोरिक आम्ल (PPA) उत्पादनात चीनचा वाटा -- LFP आणि LMFP कॅथोडसाठी आवश्यक" }, src: "iea_outlook_2025_precursors" },
        { value: "~95%", label: { en: "China's share of global high-purity manganese sulphate production -- key for manganese-rich and sodium-ion chemistries", mr: "जागतिक उच्च-शुद्धता मँगनीज सल्फेट उत्पादनात चीनचा वाटा -- मँगनीज-समृद्ध आणि सोडियम-आयन रसायनशास्त्रासाठी महत्त्वाचे" }, src: "iea_outlook_2025_precursors" },
        { value: "55%", label: { en: "Share of projected 2035 manganese sulphate demand covered by the announced project pipeline -- a structural deficit even before any disruption", mr: "घोषित प्रकल्प पाइपलाइनद्वारे समाविष्ट २०३५ मँगनीज सल्फेट मागणीचा अंदाजित वाटा -- कोणत्याही व्यत्ययाशिवायही संरचनात्मक तूट" }, src: "iea_outlook_2025_precursors" },
        { value: "~50% / ~20%", label: { en: "Korean firms' share of global EV battery cell market / Chinese (CATL+BYD) combined share, 2024", mr: "जागतिक EV बॅटरी सेल बाजारात कोरियन कंपन्यांचा वाटा / चिनी (CATL+BYD) एकत्रित वाटा, २०२४" }, src: "bruegel_eu_battery_2025" }
      ],
      ppaNote: {
        title: { en: "PPA and manganese sulphate: chokepoints hiding in plain sight", mr: "PPA आणि मँगनीज सल्फेट: उघड्यावर लपलेले अडथळा बिंदू" },
        body: { en: "A PPA supply deficit is projected to begin as early as 2030 -- before lithium or cobalt shortfalls become binding in most scenarios. Unlike lithium, where the policy conversation is mature, almost no diversification projects for PPA or battery-grade manganese sulphate exist outside China. For LFP-heavy battery strategies -- which India\'s domestic OEMs have largely adopted for cost and safety reasons -- this means the chokepoint India will hit first may not be lithium itself, but these two precursor chemicals.", mr: "PPA पुरवठा तूट २०३० पासून सुरू होण्याचा अंदाज आहे -- बहुतेक परिस्थितींमध्ये लिथियम किंवा कोबाल्ट तूट बंधनकारक होण्यापूर्वीच. लिथियमप्रमाणे, जेथे धोरणात्मक चर्चा प्रगत आहे, PPA किंवा बॅटरी-ग्रेड मँगनीज सल्फेटसाठी चीनबाहेर जवळजवळ कोणतेही विविधीकरण प्रकल्प अस्तित्वात नाहीत. भारताच्या देशांतर्गत OEMs नी किंमत आणि सुरक्षिततेसाठी मोठ्या प्रमाणात स्वीकारलेल्या LFP-जड बॅटरी रणनीतींसाठी, याचा अर्थ भारताला प्रथम सामोरे जाणारा अडथळा बिंदू लिथियम स्वतः नसून हे दोन पूर्वगामी रासायनिक पदार्थ असू शकतात." },
        src: "iea_outlook_2025_precursors",
        inference: { en: "[OUR INFERENCE] This is a forward-looking risk that does not yet appear in most India-specific critical minerals discussions, which remain focused on lithium/cobalt/nickel/REE. Given India\'s LFP-dominant EV strategy, PPA and manganese sulphate dependency deserves earlier attention than its current profile suggests.", mr: "[आपला अनुमान] हा एक भविष्यवादी धोका आहे जो अद्याप बहुतेक भारत-विशिष्ट महत्त्वाच्या खनिज चर्चांमध्ये दिसत नाही." }
      },
      batteryGeographyNote: {
        title: { en: "Battery cell manufacturing: Korea's capacity lead is real but narrowing", mr: "बॅटरी सेल उत्पादन: कोरियाचा क्षमता आघाडी खरी आहे पण कमी होत आहे" },
        body: { en: "Korean firms (LG Energy Solution, SK On, Samsung SDI) have historically held roughly four-fifths of operational battery cell manufacturing capacity in Europe, with LG\'s Wroclaw, Poland facility alone representing around 35% of European capacity. But the picture is shifting fast: combined, China\'s CATL and BYD held roughly 55% of the global EV battery market in 2024 (rising to around two-thirds including other Chinese makers), while the three Korean majors held under 20% and have seen utilisation rates fall toward 50% amid Chinese competition. In May 2025, CATL began construction of a major new facility in Hungary -- a sign that even Korea\'s European stronghold faces direct Chinese entry.", mr: "कोरियन कंपन्यांनी (LG Energy Solution, SK On, Samsung SDI) ऐतिहासिकदृष्ट्या युरोपमधील कार्यरत बॅटरी सेल उत्पादन क्षमतेपैकी सुमारे चार-पंचमांश ठेवली आहे. पण चित्र वेगाने बदलत आहे: CATL आणि BYD यांनी एकत्रितपणे २०२४ मध्ये जागतिक EV बॅटरी बाजारातील सुमारे ५५% वाटा ठेवला, तर तीन कोरियन प्रमुखांनी २०% पेक्षा कमी वाटा ठेवला." },
        src: "bruegel_eu_battery_2025"
      },
      indiaSection: {
        title: { en: "India\'s precursor gap", mr: "भारताची पूर्वगामी सामग्री तफावत" },
        body: { en: "India has zero active commercial primary refining for battery-grade lithium chemicals or battery-grade synthetic graphite. The Epsilon Vijayanagar project is one of the few large-scale facilities identified as a potential source of battery-grade graphite by 2035, but is not yet operational. For PPA and manganese sulphate specifically -- the precursor chokepoints highlighted above -- India has essentially no announced domestic capacity, despite having phosphate rock resources (Rajasthan) that could in principle support PPA production.", mr: "भारताकडे बॅटरी-ग्रेड लिथियम रसायने किंवा बॅटरी-ग्रेड सिंथेटिक ग्रेफाइटसाठी शून्य सक्रिय व्यावसायिक प्राथमिक शुद्धीकरण आहे. एप्सिलॉन विजयनगर प्रकल्प २०३५ पर्यंत बॅटरी-ग्रेड ग्रेफाइटचा संभाव्य स्रोत म्हणून ओळखल्या गेलेल्या काही मोठ्या प्रकल्पांपैकी एक आहे, पण अद्याप कार्यरत नाही. PPA आणि मँगनीज सल्फेटसाठी विशेषतः, भारताकडे अक्षरशः कोणतीही घोषित देशांतर्गत क्षमता नाही, जरी राजस्थानमध्ये फॉस्फेट रॉक संसाधने आहेत जी तत्त्वतः PPA उत्पादनास समर्थन देऊ शकतात." },
        src: "india_mom_2023"
      },
      sources: ["iea_outlook_2025_precursors", "bruegel_eu_battery_2025", "india_mom_2023"]
    },

    {
      id: "chain_504",
      label: { en: "5.0.4 — Manufacturing", mr: "५.०.४ — उत्पादन" },
      title: { en: "The compounding effect reaches its peak: design strength, manufacturing absence", mr: "वाढता परिणाम शिखरावर पोहोचतो: डिझाइन सामर्थ्य, उत्पादन अनुपस्थिती" },
      intro: { en: "Manufacturing -- turning processed materials into finished components like magnets, battery cells, and chips -- is where the concentration seen at every earlier stage compounds to its highest point. For rare earth magnets specifically, China\'s share rises from around 60% of mining to roughly 94% of sintered magnet production: each step downstream concentrates further rather than diversifying. For India, this stage also presents the starkest contrast in the entire value chain -- a globally significant design and engineering talent base sitting alongside near-total absence from physical manufacturing.", mr: "उत्पादन -- प्रक्रिया केलेल्या सामग्रीचे चुंबक, बॅटरी सेल आणि चिप्स सारख्या तयार घटकांमध्ये रूपांतर -- येथे प्रत्येक आधीच्या टप्प्यावर दिसलेली एकाग्रता सर्वोच्च बिंदूपर्यंत वाढते. रेअर अर्थ चुंबकांसाठी विशेषतः, चीनचा वाटा खाणकामातील सुमारे ६०% वरून सिंटर्ड चुंबक उत्पादनात सुमारे ९४% पर्यंत वाढतो. भारतासाठी, हा टप्पा संपूर्ण मूल्य साखळीतील सर्वात तीव्र विरोधाभास देखील दर्शवतो -- जागतिक स्तरावर महत्त्वाचा डिझाइन आणि अभियांत्रिकी प्रतिभा आधार भौतिक उत्पादनातील जवळजवळ संपूर्ण अनुपस्थितीसह." },
      stats: [
        { value: "~94%", label: { en: "China's share of global sintered NdFeB magnet production (2024) -- up from around 50% two decades ago", mr: "जागतिक सिंटर्ड NdFeB चुंबक उत्पादनात चीनचा वाटा (२०२४) -- दोन दशकांपूर्वी सुमारे ५०% वरून वाढले" }, src: "iea_magnets_2026" },
        { value: "270,000 t", label: { en: "China's 2024 rare earth mining quota (REO equivalent) -- the production base feeding its magnet manufacturing dominance", mr: "चीनचा २०२४ रेअर अर्थ खाणकाम कोटा (REO समतुल्य) -- त्याच्या चुंबक उत्पादन वर्चस्वाला पुरवठा करणारा उत्पादन आधार" }, src: "iea_magnets_2026" },
        { value: "58,000 t", label: { en: "China's record rare earth magnet exports in 2024 -- enough for millions of EV motors, industrial motors, or thousands of strategic military and wind-energy systems", mr: "२०२४ मध्ये चीनची विक्रमी रेअर अर्थ चुंबक निर्यात -- लाखो EV मोटर्स, औद्योगिक मोटर्स किंवा हजारो धोरणात्मक लष्करी आणि वारा-ऊर्जा प्रणालींसाठी पुरेशी" }, src: "iea_magnets_2026" },
        { value: "~20%", label: { en: "India's share of the global semiconductor design workforce", mr: "जागतिक सेमीकंडक्टर डिझाइन कार्यबलात भारताचा वाटा" }, src: "niti_semiconductor_roadmap_2026" }
      ],
      magnetChokepointNote: {
        title: { en: "NdFeB magnets: the GAO finding that should worry policymakers", mr: "NdFeB चुंबक: धोरणकर्त्यांना चिंतेत टाकणारा GAO निष्कर्ष" },
        body: { en: "The US Government Accountability Office has noted that China is the only country with processing capability at every single stage of the neodymium-iron-boron (NdFeB) magnet supply chain -- mining, separation, metal-making, alloying, and magnet manufacturing. Japan produces an estimated 4,500 tonnes of NdFeB magnets annually (via Proterial and Shin-Etsu Chemical, supplying Toyota and Honda) -- the bulk of non-Chinese supply, but a small fraction of China\'s 58,000-tonne export volume alone. This is the structural reality India\'s magnet ambitions must contend with: not a single missing link, but an entire chain that exists, end-to-end, in essentially one country.", mr: "अमेरिकेच्या गव्हर्नमेंट अकाउंटेबिलिटी ऑफिसने नोंदवले आहे की निओडायमियम-आयर्न-बोरॉन (NdFeB) चुंबक पुरवठा साखळीच्या प्रत्येक टप्प्यावर -- खाणकाम, विभाजन, धातू-निर्मिती, मिश्रधातू आणि चुंबक उत्पादन -- प्रक्रिया क्षमता असलेला चीन एकमेव देश आहे. जपान दरवर्षी अंदाजे ४,५०० टन NdFeB चुंबक उत्पादित करतो (Proterial आणि Shin-Etsu Chemical द्वारे, टोयोटा आणि होंडाला पुरवठा) -- बहुतांश चीन-बाह्य पुरवठा, पण चीनच्या एकट्या ५८,०००-टन निर्यातीच्या तुलनेत एक लहान भाग." },
        src: "iea_magnets_2026"
      },
      indiaSection: {
        title: { en: "India\'s manufacturing position: the \"More-than-Moore\" bet", mr: "भारताची उत्पादन स्थिती: \"More-than-Moore\" डाव" },
        body: { en: "India has no commercial-scale NdFeB magnet manufacturing today, despite the NFTDC having transferred rare-earth permanent magnet (REPM) manufacturing technology to the private sector. On semiconductors, India\'s position is defined by a stark asymmetry: it supplies roughly 20% of the world\'s semiconductor design workforce, yet meets the large majority of its own chip demand through imports. Rather than competing head-on in advanced-node fabrication (under 7nm) -- a capital-intensive race already dominated by a handful of players -- India\'s May 2026 NITI Aayog/KPMG Frontier Tech Hub roadmap proposes a \"More-than-Moore\" strategy: two to three mature-node logic fabs (28-65nm) for automotive and industrial use, dedicated speciality-analogue fabs, two compound-semiconductor fabs for silicon carbide (SiC) and gallium nitride (GaN), and just one selective advanced-node fab (7-14nm) to anchor strategic requirements rather than chase volume parity. Tata Electronics\' Dholera fab (with Taiwan\'s PSMC) is targeted to begin production by 2028. The roadmap targets a USD 120-150 billion semiconductor value chain and 10-13% of the global semiconductor market by 2035, requiring an estimated USD 135-180 billion in investment over the coming decade.", mr: "भारताकडे आज NdFeB चुंबकांचे कोणतेही व्यावसायिक-स्तरीय उत्पादन नाही, जरी NFTDC ने दुर्मिळ-पृथ्वी स्थायी चुंबक (REPM) उत्पादन तंत्रज्ञान खाजगी क्षेत्राकडे हस्तांतरित केले आहे. सेमीकंडक्टरवर, भारताची स्थिती एका तीव्र विषमतेने परिभाषित होते: ते जगातील सुमारे २०% सेमीकंडक्टर डिझाइन कार्यबल पुरवते, तरीही त्याच्या स्वतःच्या चिप मागणीचा मोठा भाग आयातीद्वारे पूर्ण करते. प्रगत-नोड फॅब्रिकेशनमध्ये (7nm पेक्षा कमी) -- आधीच काही खेळाडूंचे वर्चस्व असलेली भांडवल-केंद्रित स्पर्धा -- सरळ स्पर्धा करण्याऐवजी, भारताचा मे २०२६ चा NITI Aayog/KPMG Frontier Tech Hub रोडमॅप \"More-than-Moore\" रणनीती प्रस्तावित करतो: ऑटोमोटिव्ह आणि औद्योगिक वापरासाठी दोन ते तीन परिपक्व-नोड लॉजिक फॅब्स (२८-65nm), समर्पित विशेष-अॅनालॉग फॅब्स, सिलिकॉन कार्बाइड (SiC) आणि गॅलियम नायट्राइड (GaN) साठी दोन कंपाउंड-सेमीकंडक्टर फॅब्स, आणि धोरणात्मक गरजा भागवण्यासाठी केवळ एक निवडक प्रगत-नोड फॅब (७-14nm). टाटा इलेक्ट्रॉनिक्सचा ढोलेरा फॅब (तैवानच्या PSMC सोबत) २०२८ पर्यंत उत्पादन सुरू करण्याचे लक्ष्य आहे. रोडमॅप २०३५ पर्यंत USD १२०-१५० अब्ज सेमीकंडक्टर मूल्य साखळी आणि जागतिक सेमीकंडक्टर बाजारातील १०-१३% लक्ष्य ठेवतो, ज्यासाठी पुढील दशकात अंदाजे USD १३५-१८० अब्ज गुंतवणूकीची आवश्यकता आहे." },
        src: "niti_semiconductor_roadmap_2026"
      },
      recyclingNote: {
        title: { en: "Recycling target reconciliation", mr: "पुनर्वापर उद्दिष्ट सामंजस्य" },
        body: { en: "India\'s Critical Mineral Recycling Incentive Scheme (Rs 1,500 crore, approved September 2025) targets roughly 300,000 tonnes/year of recycling capacity by FY2030-31 -- see Tab 4\'s India player card for the verified figure and primary source. As secondary supply becomes more important globally (China\'s primary REE mining is projected by some analysts to plateau or decline after the early 2040s), this recycling capacity is one of the few links in the chain where India is building forward-looking capability rather than starting from zero.", mr: "भारताची क्रिटिकल मिनरल रिसायकलिंग इन्सेंटिव्ह योजना (रु. १,५०० कोटी, सप्टेंबर २०२५ मध्ये मंजूर) FY2030-31 पर्यंत सुमारे ३००,००० टन/वर्ष पुनर्वापर क्षमतेचे उद्दिष्ट ठेवते -- सत्यापित आकडा आणि प्राथमिक स्रोतासाठी टॅब ४ चे भारत खेळाडू कार्ड पहा." },
        src: "ncmm_recycling_scheme_2025"
      },
      sources: ["iea_magnets_2026", "niti_semiconductor_roadmap_2026", "ncmm_recycling_scheme_2025"]
    },

    {
      id: "chain_54",
      label: { en: "5.4 — The Investment Timeline", mr: "५.४ — गुंतवणूक कालरेखा" },
      title: { en: "Why \"just mine more\" takes a decade or more", mr: "\"फक्त अधिक खाणकाम करा\" ला एक दशकाहून अधिक का लागते" },
      intro: { en: "The de-risking toolkit in 5.3 includes reshoring mining and processing -- but mining projects follow a well-understood lifecycle, often called the \"snake curve\" in mining finance, that maps value and risk against time. Understanding this curve explains why the 17.8-year average mine development time (see Tab 2) is not a policy failure in itself, but a structural feature -- and where policy intervention actually has leverage.", mr: "५.३ मधील डी-रिस्किंग साधनसंचात खाणकाम आणि प्रक्रिया पुन्हा देशात आणणे समाविष्ट आहे -- पण खाण प्रकल्प एक सुपरिचित जीवनचक्र अनुसरतात, ज्याला खाण वित्तपुरवठ्यात \"साप वक्र\" म्हटले जाते, जे मूल्य आणि जोखीम वेळेच्या तुलनेत दाखवते. हे वक्र समजल्याने १७.८ वर्षांचा सरासरी खाण विकास वेळ (टॅब २ पहा) हे धोरणात्मक अपयश नसून संरचनात्मक वैशिष्ट्य आहे हे स्पष्ट होते -- आणि धोरणात्मक हस्तक्षेपाला प्रत्यक्षात कुठे प्रभाव आहे ते दाखवते." },
      snakeCurve: {
        caption: { en: "The mining project lifecycle: value, risk, and time", mr: "खाण प्रकल्प जीवनचक्र: मूल्य, जोखीम आणि वेळ" },
        stages: [
          {
            name: { en: "Concept / Pre-discovery", mr: "संकल्पना / शोध-पूर्व" },
            duration: { en: "4-5 years", mr: "४-५ वर्षे" },
            description: { en: "Low value, exploration risk dominant. Market strategy, prospecting rights, trenching, geophysics, geochemistry.", mr: "कमी मूल्य, शोध जोखीम प्रबळ. बाजार रणनीती, शोध हक्क, खंदक खोदणे, भूभौतिकी, भूरसायनशास्त्र." }
          },
          {
            name: { en: "Discovery", mr: "शोध" },
            duration: { en: "1-2 years", mr: "१-२ वर्षे" },
            description: { en: "The \"speculation\" peak -- initial drill results spike interest and value before in-fill drilling confirms a mineable deposit. High volatility, early speculator entry.", mr: "\"अनुमान\" शिखर -- सुरुवातीच्या ड्रिल परिणामांमुळे रुची आणि मूल्य वाढते, त्यानंतर इन-फिल ड्रिलिंगद्वारे खाण करण्यायोग्य साठा निश्चित होतो. उच्च अस्थिरता, सुरुवातीचे अनुमानकर्ते प्रवेश करतात." }
          },
          {
            name: { en: "Feasibility", mr: "व्यवहार्यता" },
            duration: { en: "2-3 years", mr: "२-३ वर्षे" },
            description: { en: "The \"orphan period\" -- a proven discovery exists but needs large capex for construction, with no cash flow yet. Funding risk is highest here. Engineering, cost estimates, reserve calculations.", mr: "\"अनाथ काळ\" -- सिद्ध शोध अस्तित्वात आहे पण बांधकामासाठी मोठ्या भांडवली खर्चाची आवश्यकता आहे, अद्याप कोणताही रोख प्रवाह नाही. वित्तपुरवठा जोखीम येथे सर्वाधिक आहे. अभियांत्रिकी, खर्च अंदाज, साठा गणना." },
            isOrphanPeriod: true
          },
          {
            name: { en: "Development", mr: "विकास" },
            duration: { en: "2 years", mr: "२ वर्षे" },
            description: { en: "Institutional and strategic investors enter -- experienced developers fund construction. Cost and time overrun and geological risks persist.", mr: "संस्थात्मक आणि धोरणात्मक गुंतवणूकदार प्रवेश करतात -- अनुभवी विकासक बांधकामासाठी निधी देतात. खर्च आणि वेळ ओलांडण्याचे आणि भूवैज्ञानिक धोके कायम राहतात." }
          },
          {
            name: { en: "Startup / Operation", mr: "सुरुवात / कार्य" },
            duration: { en: "1+ years", mr: "१+ वर्षे" },
            description: { en: "Mine becomes operational and generates cash flow. Commodity price risk remains throughout the operating life.", mr: "खाण कार्यरत होते आणि रोख प्रवाह निर्माण करते. वस्तू किंमत जोखीम संपूर्ण कार्यकाळात कायम राहते." }
          },
          {
            name: { en: "Depletion", mr: "क्षीणता" },
            duration: { en: "End of life", mr: "जीवनाचा शेवट" },
            description: { en: "Reserves are exhausted and the operation winds down.", mr: "साठा संपतो आणि कार्य बंद होते." }
          }
        ],
        crossCuttingRisks: {
          title: { en: "Four risks run throughout the entire lifecycle", mr: "संपूर्ण जीवनचक्रात चार जोखीम कायम राहतात" },
          items: [
            { en: "Commodity price fluctuation", mr: "वस्तू किंमत चढउतार" },
            { en: "Funding risk", mr: "वित्तपुरवठा जोखीम" },
            { en: "Technical risk", mr: "तांत्रिक जोखीम" },
            { en: "Exploration risk", mr: "शोध जोखीम" }
          ]
        }
      },
      orphanPeriodNote: {
        title: { en: "Where policy actually has leverage", mr: "धोरणाला प्रत्यक्षात प्रभाव कुठे आहे" },
        body: { en: "The feasibility stage -- the \"orphan period\" -- is where most projects die, not for geological reasons but because no one will fund construction of an asset with no revenue yet. This is precisely the gap that government co-investment instruments are designed to close: KABIL's overseas equity stakes and NCMM's viability-gap funding both operate in this window. A subsidy or stockpile decision made today does not produce a tonne of output for 7-10+ years even in optimistic cases -- which is why de-risking tools (5.3) must be evaluated on decade-long timeframes, not annual ones.", mr: "व्यवहार्यता टप्पा -- \"अनाथ काळ\" -- येथे सर्वाधिक प्रकल्प अयशस्वी होतात, भूवैज्ञानिक कारणांमुळे नाही तर अद्याप कोणताही महसूल नसलेल्या मालमत्तेच्या बांधकामासाठी कोणीही निधी देणार नाही म्हणून. सरकारी सह-गुंतवणूक साधने नेमकी हीच तफावत भरण्यासाठी डिझाइन केली आहेत: KABIL च्या परदेशी इक्विटी हिस्सेदारी आणि NCMM चे व्यवहार्यता-तफावत वित्तपुरवठा दोन्ही या काळात कार्य करतात. आजचा अनुदान किंवा साठा निर्णय अनुकूल परिस्थितीतही ७-१०+ वर्षे कोणतेही उत्पादन देत नाही -- म्हणूनच डी-रिस्किंग साधनांचे (५.३) मूल्यांकन दशक-स्तरीय कालमर्यादेवर केले पाहिजे, वार्षिक नाही.", src: "sp_global_2024" }
      },
      sources: ["sp_global_2024", "iea_outlook_2025"]
    }
];

DB._rawMinerals = [
  // ── ESSENTIAL 10 ──
  {sym:'Li',name:'Lithium',essential:true,cat:['battery'],risk:'Very High',
   indiaPos:'100% import dependent',indiaPosTag:'import',
   use:'EV batteries and grid storage. The foundational mineral of the clean energy transition — without lithium, there are no EV batteries at commercial scale.',
   globalProd:'World production: 290,000 MT in 2025 (USGS MCS 2026). Top miners: Australia (~47% ore), Chile. China processes ~65% into battery-grade chemicals.',
   indiaDetail:'G3 inferred resources in Reasi, J&K (~5.9 Mt equivalent). Failed auctions. KABIL secured 5 lithium blocks in Catamarca, Argentina — production targeted end-2029. Zero domestic battery-grade lithium processing. In 2025, India imported 18,200 tonnes of lithium compounds worth USD 1.2 billion — 68% from China, 24% from Chile.',
   stratImpl:'India has the geological potential and the overseas acquisition in motion. The missing link is a domestic lithium processing facility to convert imported or acquired ore into battery-grade lithium carbonate or hydroxide. Acquiring ore without building processing is not a complete supply chain.',
   sources:[{label:'USGS Mineral Commodity Summaries 2026',url:'https://pubs.usgs.gov/periodicals/mcs2026/mcs2026.pdf'},{label:'India Ministry of Mines -- Critical Minerals List (2023)',url:'https://mines.gov.in/admin/download/649d4212cceb01688027666.pdf'},{label:'National Critical Mineral Mission (Jan 2026)',url:'https://mines.gov.in/webportal/content/ongoing-nits-critical-minerals'},{label:'IndexBox -- India Battery Cell Manufacturing 2026',url:'https://www.indexbox.io/blog/indias-battery-storage-push-import-dependency-persists-despite-policy-efforts/'}]},

  {sym:'REE',name:'Rare Earth Elements',essential:true,cat:['battery','defence'],risk:'Very High',
   indiaPos:'Resources locked (Atomic Energy Act)',indiaPosTag:'locked',
   use:'Permanent magnets for EV motors, wind turbines, and defence systems. Catalysts, phosphors, and speciality alloys. The 17 REEs are detailed in Tab 1.',
   globalProd:'World production: 390,000 MT REO in 2025 (USGS MCS 2026). China: ~70% mining, ~90% refining, ~90% permanent magnets. China leads refining for all key REE products.',
   indiaDetail:'11.93 Mt monazite resources (India MoM 2023) — REO content 55–65%. India has the 4th/5th largest REE reserves globally. Entirely locked under the Atomic Energy Act 1962 — only IREL (a PSU) can mine monazite. IREL produces 2,345 tonnes REO/year — not commercial scale.',
   stratImpl:'India has world-class REE reserves and near-zero processing. The Atomic Energy Act constraint was written in 1962 to protect thorium for a nuclear programme that has not materialised at scale. Updating this legislation is the single highest-leverage policy action available to India in the critical minerals space.',
   sources:[{label:'USGS MCS 2026 -- Rare Earths',url:'https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-rare-earths.pdf'},{label:'India Ministry of Mines -- Critical Minerals List (2023)',url:'https://mines.gov.in/admin/download/649d4212cceb01688027666.pdf'},{label:'National Critical Mineral Mission (Jan 2026)',url:'https://mines.gov.in/webportal/content/ongoing-nits-critical-minerals'}]},

  {sym:'C',name:'Graphite',essential:true,cat:['battery'],risk:'Very High',
   indiaPos:'Has ore; zero battery-grade processing',indiaPosTag:'partial',
   use:'EV battery anodes — every lithium-ion battery requires a graphite anode. Also used in fuel cells, refractories, and lubricants.',
   globalProd:'World natural graphite: ~1.3 million MT/year. China: ~65% natural, ~95% battery-grade spherical graphite processing.',
   indiaDetail:'3,01,500 KT resources (India MoM 2023). Mining: ~85,000 t/year. Zero battery-grade spherical graphite processing. India will need ~400,000 tonnes battery-grade graphite by 2030 against zero domestic processing capacity today.',
   stratImpl:'India mines graphite but cannot turn it into battery-grade material. The processing gap here is as significant as the REE processing gap — and the solution (spherical graphite purification and shaping) is technically less complex than REE separation. This is a higher-tractability problem than REE.',
   sources:[{label:'USGS Mineral Commodity Summaries 2025',url:'https://pubs.usgs.gov/periodicals/mcs2025/mcs2025.pdf'},{label:'India Ministry of Mines -- Critical Minerals List (2023)',url:'https://mines.gov.in/admin/download/649d4212cceb01688027666.pdf'},{label:'National Critical Mineral Mission (Jan 2026)',url:'https://mines.gov.in/webportal/content/ongoing-nits-critical-minerals'}]},

  {sym:'Cu',name:'Copper',essential:true,cat:['battery','semiconductor'],risk:'High',
   indiaPos:'Partial — ~4% of smelter requirement met',indiaPosTag:'partial',
   use:'All electrification — EV motors (~83 kg/vehicle), charging, solar, wind, data centres, power grids. No practical substitute for electrical applications.',
   globalProd:'World production: ~23 million MT (2025). Chile ~25%, Peru ~10%, DRC growing. US 6th-ranked producer and refiner (USGS MCS 2026). Added to US critical minerals list 2025.',
   indiaDetail:'1,496,979 KT ore resources. HCL mines ~4% of domestic smelter need. Hindalco, Vedanta process some domestically. Net import reliance is significant.',
   stratImpl:'Copper is the one critical mineral where India has a complete — if undersized — domestic chain. The strategic question is whether India invests to scale existing copper capacity, which carries less policy complexity than REE or lithium.',
   sources:[{label:'USGS Mineral Commodity Summaries 2026',url:'https://pubs.usgs.gov/periodicals/mcs2026/mcs2026.pdf'},{label:'India Ministry of Mines -- Critical Minerals List (2023)',url:'https://mines.gov.in/admin/download/649d4212cceb01688027666.pdf'}]},

  {sym:'Co',name:'Cobalt',essential:true,cat:['battery','defence'],risk:'Very High',
   indiaPos:'100% import dependent',indiaPosTag:'import',
   use:'EV battery cathodes (NMC, NCA), aerospace superalloys, cutting tools.',
   globalProd:'DRC: ~73% of world mine production in 2025. Indonesia: ~14%. China refines the large majority. DRC export quotas imposed October 2025 (up to 96,600 MT/year for 2026–2027). (USGS MCS 2026 Cobalt)',
   indiaDetail:'45,710 KT resources — limited grade. No commercial mining. India has a small existing cobalt refining capacity of approximately 2,060 tonnes/year — far below demand, and dependent on imported feedstock since there is no domestic mining. KABIL mandate covers cobalt but no operational overseas cobalt asset as of June 2026.',
   stratImpl:'India needs cobalt for EV batteries and imports all of it through supply chains where Chinese refiners and Chinese-owned DRC mines dominate. KABIL\'s focus on lithium (Argentina) has left the cobalt exposure unaddressed.',
   sources:[{label:'USGS MCS 2026 -- Cobalt',url:'https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-cobalt.pdf'},{label:'India Ministry of Mines -- Critical Minerals List (2023)',url:'https://mines.gov.in/admin/download/649d4212cceb01688027666.pdf'},{label:'IndexBox -- India Battery Cell Manufacturing 2026',url:'https://www.indexbox.io/blog/indias-battery-storage-push-import-dependency-persists-despite-policy-efforts/'}]},

  {sym:'Ni',name:'Nickel',essential:true,cat:['battery'],risk:'High',
   indiaPos:'100% import dependent',indiaPosTag:'import',
   use:'EV battery cathodes (NMC, NCA — high-nickel = more range), stainless steel (~70% of use), superalloys.',
   globalProd:'World production: ~3.7 million MT (2024). Indonesia: ~61% global output. China processes most Indonesian ore into battery-grade nickel. Nickel prices: -11% in 2025 (USGS MCS 2026).',
   indiaDetail:'1,92,100 KT resources in Odisha (Sukinda), Karnataka. Near-zero commercial production. 100% import dependent for all refined nickel products.',
   stratImpl:'Indonesia proved that resource nationalism — a complete export ban on raw nickel ore — can force $30+ billion in downstream processing investment. India has nickel resources and exports manganese raw. The Indonesian model is relevant but requires execution quality India has not yet demonstrated.',
   sources:[{label:'USGS Mineral Commodity Summaries 2026',url:'https://pubs.usgs.gov/periodicals/mcs2026/mcs2026.pdf'},{label:'India Ministry of Mines -- Critical Minerals List (2023)',url:'https://mines.gov.in/admin/download/649d4212cceb01688027666.pdf'},{label:'S&P Global -- Mine Development Times (July 2024)',url:'https://www.spglobal.com/marketintelligence/en/media-center/press-release/united-states-ranks-next-to-last-in-development-time-for-new-mines-that-produce-critical-minerals-for-energy-transition-sp-globa'}]},

  {sym:'Ga',name:'Gallium',essential:true,cat:['semiconductor','defence'],risk:'Very High',
   indiaPos:'NALCO advancing toward commercial production (Aug 2025, ~2yr horizon)',indiaPosTag:'reviving',
   use:'GaN semiconductors for 5G/6G, power electronics, EV charging, military radar, electronic warfare.',
   globalProd:'World production: ~550 MT primary (2024). China: ~99%. Byproduct of aluminium (bauxite) refining. China export controls December 2024. US diversified within 18 months (Takshashila GAGE 2026).',
   indiaDetail:'1,13,100 KT resources (bauxite-associated). NALCO announced (Aug 2025) it is advancing toward commercial gallium production within roughly two years using indigenous BARC/Heavy Water Board technology; Hindalco has no active programme. The mineral-to-chip link remains pre-commercial — India\'s semiconductor mission (ISM, Dholera) requires GaN chips but the domestic gallium supply chain does not yet supply them.',
   stratImpl:'This is India\'s clearest example of a supply chain broken in the middle. India has the bauxite, processes it into aluminium, and discards the gallium. India also wants to build semiconductor fabs. Nobody has connected these two facts at policy level.',
   csisDisruption:'CSIS (May 2024) rates gallium "High" disruption potential for semiconductor supply chains -- China accounts for ~98% of unprocessed/low-purity gallium and ~86% of total production. Essential for wide-bandgap (GaN) semiconductors used in defence radar, 5G, and EVs.',
   sources:[{label:'India Ministry of Mines -- Critical Minerals List (2023)',url:'https://mines.gov.in/admin/download/649d4212cceb01688027666.pdf'},{label:'Takshashila GAGE Paper (2026)',url:'https://takshashila.org.in/pages/publications/'},{label:'CSIS -- Mineral Demands for Resilient Semiconductor Supply Chains (2024)',url:'https://www.csis.org/analysis/mineral-demands-resilient-semiconductor-supply-chains'}]},

  {sym:'Ge',name:'Germanium',essential:true,cat:['semiconductor','defence'],risk:'Very High',
   indiaPos:'100% import dependent',indiaPosTag:'import',
   use:'Fibre optic cables, infrared optics (night vision, thermal imaging), satellite solar cells.',
   globalProd:'World production: ~160 MT refined (2024). China: ~60%. Byproduct of zinc smelting. China export controls December 2024. Prices: +106% in 2025 (USGS MCS 2026). US secondary recovery from recycling provides partial buffer.',
   indiaDetail:'No quantified domestic resources. 100% import dependent. All defence infrared optics and fibre optic infrastructure import germanium.',
   stratImpl:'India has significant zinc production (Vedanta/HZL is one of the world\'s largest zinc producers). Germanium is a byproduct of zinc smelting. India may have a dormant germanium recovery pathway similar to the gallium situation at bauxite smelters — this has not been systematically assessed.',
   csisDisruption:'CSIS (May 2024) rates germanium "Moderate to High" disruption potential -- China accounts for ~65% of global production. Vital for fibre optics, infrared imaging, and increasing processing power in smaller chips. Canada is a notable non-China producer via zinc-smelting recovery, the same byproduct pathway India has not yet developed.',
   sources:[{label:'USGS Mineral Commodity Summaries 2026',url:'https://pubs.usgs.gov/periodicals/mcs2026/mcs2026.pdf'},{label:'Takshashila GAGE Paper (2026)',url:'https://takshashila.org.in/pages/publications/'},{label:'India Ministry of Mines -- Critical Minerals List (2023)',url:'https://mines.gov.in/admin/download/649d4212cceb01688027666.pdf'},{label:'CSIS -- Mineral Demands for Resilient Semiconductor Supply Chains (2024)',url:'https://www.csis.org/analysis/mineral-demands-resilient-semiconductor-supply-chains'}]},

  {sym:'Ti',name:'Titanium',essential:true,cat:['defence'],risk:'High',
   indiaPos:'Has ore; no metal production',indiaPosTag:'partial',
   use:'Aerospace structural components (strong, lightweight), military aircraft and submarines, medical implants, TiO₂ white pigment.',
   globalProd:'World ilmenite: ~8.5 million MT. India is ~8% of global titanium mineral production. Titanium metal sponge: ~240,000 MT globally — China, Japan, Russia dominant.',
   indiaDetail:'7,61,970 KT titanium mineral resources. IREL produces ~4,34,000 tonnes/year of mineral concentrates. India exports ore; imports all titanium metal, alloys, and parts — including for Tejas fighters, naval platforms, and DRDO systems.',
   stratImpl:'India is the world\'s 8th largest producer of titanium mineral concentrates and imports 100% of its titanium metal. This is among the starkest illustrations of the value chain gap in India\'s minerals position. Every kilogram of titanium in Indian defence hardware has been exported as cheap ore and reimported as expensive metal.',
   sources:[{label:'USGS Mineral Commodity Summaries 2026',url:'https://pubs.usgs.gov/periodicals/mcs2026/mcs2026.pdf'},{label:'India Ministry of Mines -- Critical Minerals List (2023)',url:'https://mines.gov.in/admin/download/649d4212cceb01688027666.pdf'}]},

  {sym:'W',name:'Tungsten',essential:true,cat:['defence','semiconductor'],risk:'Very High',
   indiaPos:'Limited production; net import dependent',indiaPosTag:'partial',
   use:'Cutting tools (tungsten carbide — harder than steel), armour-piercing ammunition, electrical filaments, aerospace applications.',
   globalProd:'World production: ~85,000 MT. China: ~83% of global mined tungsten. China export controls February 2025 (alongside molybdenum, tellurium, bismuth, indium).',
   indiaDetail:'Resources in Rajasthan (Degana), Karnataka, AP, HP. Some historical production at Degana. Net import dependent. China\'s February 2025 export controls affect India\'s defence manufacturing — all precision machining tools use tungsten carbide.',
   stratImpl:'China controls 83% of global tungsten and restricted exports in February 2025. India\'s entire precision manufacturing sector — including defence — depends on tungsten carbide tooling. This is an exposure that does not appear in most India critical minerals discussions because tungsten is less visible than REEs or lithium.',
   sources:[{label:'USGS Mineral Commodity Summaries (publications index)',url:'https://www.usgs.gov/centers/national-minerals-information-center/mineral-commodity-summaries'},{label:'India Ministry of Mines -- Critical Minerals List (2023)',url:'https://mines.gov.in/admin/download/649d4212cceb01688027666.pdf'}]},

  // ── REMAINING 20 ──
  {sym:'Sb',name:'Antimony',essential:false,cat:['semiconductor'],risk:'Very High',
   indiaPos:'100% import dependent',indiaPosTag:'import',
   use:'Flame retardants (largest use), lead-acid batteries, semiconductors, infrared detectors.',
   globalProd:'World production: ~80,000 MT. China: ~50%. Russia, Tajikistan, Bolivia. Prices +144% in 2025. China export controls December 2024.',
   indiaDetail:'Small resources in Rajasthan; not commercially exploited. 100% import dependent.',
   stratImpl:'China imposed export controls on antimony in December 2024 — the same month as gallium and germanium. The pattern is consistent: China weaponising dominance across multiple semiconductor-adjacent minerals simultaneously.',
   sources:[{label:'USGS Mineral Commodity Summaries 2026',url:'https://pubs.usgs.gov/periodicals/mcs2026/mcs2026.pdf'},{label:'India Ministry of Mines -- Critical Minerals List (2023)',url:'https://mines.gov.in/admin/download/649d4212cceb01688027666.pdf'}]},

  {sym:'Be',name:'Beryllium',essential:false,cat:['defence'],risk:'High',
   indiaPos:'100% import dependent',indiaPosTag:'import',
   use:'Aerospace structural alloys, nuclear reactor reflectors, X-ray windows, military hardware.',
   globalProd:'World production: ~250 MT. US: ~75–85% (Materion Corp, Utah near-monopoly). China, Kazakhstan.',
   indiaDetail:'Small occurrences in Rajasthan, Karnataka. No commercial production. 100% import dependent.',
   stratImpl:'Unlike most critical minerals where China is the concern, beryllium is a case where the US near-monopoly creates a different kind of concentration risk. For India, this means supply security depends on maintaining good US relations — not a current problem, but worth noting.',
   sources:[{label:'USGS Mineral Commodity Summaries 2026',url:'https://pubs.usgs.gov/periodicals/mcs2026/mcs2026.pdf'},{label:'India Ministry of Mines -- Critical Minerals List (2023)',url:'https://mines.gov.in/admin/download/649d4212cceb01688027666.pdf'}]},

  {sym:'Bi',name:'Bismuth',essential:false,cat:[],risk:'High',
   indiaPos:'100% import dependent',indiaPosTag:'import',
   use:'Pharmaceuticals (stomach antacids), metallurgical additives, lead-free solders, cosmetics.',
   globalProd:'World production: ~20,000 MT. China: ~80%. Byproduct of lead, copper, tin smelting. Prices +270% in 2025 — sharpest increase of any mineral (USGS MCS 2026).',
   indiaDetail:'No significant reserves. 100% import dependent.',
   stratImpl:'The 270% price spike in 2025 illustrates a pattern: small-volume minerals with Chinese dominance can experience extreme price volatility when supply is restricted. These are not large budget items individually, but they can disrupt specific manufacturing processes severely.',
   sources:[{label:'USGS Mineral Commodity Summaries 2026',url:'https://pubs.usgs.gov/periodicals/mcs2026/mcs2026.pdf'},{label:'India Ministry of Mines -- Critical Minerals List (2023)',url:'https://mines.gov.in/admin/download/649d4212cceb01688027666.pdf'}]},

  {sym:'Hf',name:'Hafnium',essential:false,cat:['semiconductor'],risk:'Moderate',
   indiaPos:'Potential via zirconium; unexploited',indiaPosTag:'dormant',
   use:'Nuclear reactor control rods, semiconductor gate dielectrics (hafnium oxide in advanced chips).',
   globalProd:'World production: ~80 MT. Always a byproduct of zirconium. France (Orano), US, China.',
   indiaDetail:'India has significant zirconium resources processed by IREL. Hafnium separation is technically possible from IREL\'s zirconium operations — not currently exploited. 100% import dependent for hafnium metal.',
   stratImpl:'India has a zirconium processing chain for its nuclear programme. Hafnium is chemically locked with zirconium. A relatively modest technology addition to IREL\'s operations could yield domestic hafnium — relevant for Dholera fab\'s advanced chip needs.',
   sources:[{label:'USGS Mineral Commodity Summaries 2026',url:'https://pubs.usgs.gov/periodicals/mcs2026/mcs2026.pdf'},{label:'India Ministry of Mines -- Critical Minerals List (2023)',url:'https://mines.gov.in/admin/download/649d4212cceb01688027666.pdf'}]},

  {sym:'In',name:'Indium',essential:false,cat:['semiconductor'],risk:'High',
   indiaPos:'Potential via zinc; unexploited',indiaPosTag:'dormant',
   use:'ITO touchscreens and flat panel displays, thin-film CIGS solar cells, solders.',
   globalProd:'World production: ~900 MT refined (2024). China: ~55%. Byproduct of zinc smelting.',
   indiaDetail:'Not quantified in domestic resources. India has large zinc production (Vedanta/HZL). Indium is a byproduct of zinc smelting — potential domestic source not exploited. 100% import dependent.',
   stratImpl:'India is a significant zinc producer but extracts none of the indium in its zinc smelting process. This is the same dormant-byproduct pattern as gallium (aluminium) and potentially germanium (zinc).',
   sources:[{label:'USGS Mineral Commodity Summaries 2026',url:'https://pubs.usgs.gov/periodicals/mcs2026/mcs2026.pdf'},{label:'India Ministry of Mines -- Critical Minerals List (2023)',url:'https://mines.gov.in/admin/download/649d4212cceb01688027666.pdf'}]},

  {sym:'Mo',name:'Molybdenum',essential:false,cat:['defence'],risk:'Moderate',
   indiaPos:'100% import dependent',indiaPosTag:'import',
   use:'High-strength steel alloys, lubricants (MoS₂), petroleum refining catalysts.',
   globalProd:'World production: ~300,000 MT. China ~40%, Chile ~20%, Peru, US. Often byproduct of copper mining. China export controls February 2025.',
   indiaDetail:'Small occurrences in Rajasthan. No commercial production. 100% import dependent.',
   stratImpl:'',
   sources:[{label:'USGS Mineral Commodity Summaries 2026',url:'https://pubs.usgs.gov/periodicals/mcs2026/mcs2026.pdf'},{label:'India Ministry of Mines -- Critical Minerals List (2023)',url:'https://mines.gov.in/admin/download/649d4212cceb01688027666.pdf'}]},

  {sym:'Nb',name:'Niobium',essential:false,cat:['defence'],risk:'High',
   indiaPos:'100% import dependent',indiaPosTag:'import',
   use:'High-strength low-alloy steel, superconducting magnets (MRI, particle accelerators), jet engine superalloys.',
   globalProd:'World production: ~100,000 MT. Brazil: ~90% — from a single mine complex (CBMM, Araxá). Canada ~9%.',
   indiaDetail:'3,22,500 KT resources (India MoM 2023). No commercial production. 100% import dependent.',
   stratImpl:'Brazil\'s CBMM effectively controls global niobium supply from one mine. This is a textbook supply risk — not Chinese dominance, but single-site concentration. India\'s steel industry is directly exposed.',
   sources:[{label:'USGS Mineral Commodity Summaries 2026',url:'https://pubs.usgs.gov/periodicals/mcs2026/mcs2026.pdf'},{label:'India Ministry of Mines -- Critical Minerals List (2023)',url:'https://mines.gov.in/admin/download/649d4212cceb01688027666.pdf'}]},

  {sym:'PGE',name:'Platinum Group Elements',essential:false,cat:['defence'],risk:'High',
   indiaPos:'100% import dependent',indiaPosTag:'import',
   use:'Catalytic converters (Pd dominant), PEM fuel cells (Pt), industrial catalysts, hydrogen electrolysers (Ir), jewellery.',
   globalProd:'South Africa: ~70% platinum, ~35% palladium. Russia: ~45% palladium. USGS MCS 2026: US palladium production decreased in 2025.',
   indiaDetail:'No significant domestic reserves. Small ophiolite occurrences in Manipur — not commercially viable. 100% import dependent. All BS-VI catalytic converters in Indian vehicles use imported PGEs.',
   stratImpl:'India\'s green hydrogen ambitions require iridium-based PEM electrolysers and platinum-based fuel cells. This demand driver for PGEs is not yet reflected in India\'s minerals strategy.',
   sources:[{label:'USGS Mineral Commodity Summaries 2026',url:'https://pubs.usgs.gov/periodicals/mcs2026/mcs2026.pdf'},{label:'India Ministry of Mines -- Critical Minerals List (2023)',url:'https://mines.gov.in/admin/download/649d4212cceb01688027666.pdf'}]},

  {sym:'P',name:'Phosphorous',essential:false,cat:['fertilizer','battery'],risk:'High',
   indiaPos:'Partially domestic; significant import',indiaPosTag:'partial',
   use:'Fertilizers (DAP, SSP — critical for Indian agriculture), LFP battery cathodes (phosphoric acid), industrial chemicals.',
   globalProd:'World phosphate rock: ~250 million MT. China ~40%, Morocco ~17%. Morocco holds ~70% of global reserves (OCP Group).',
   indiaDetail:'Some deposits in Rajasthan (Jhamarkotra), MP. Significant domestic production but insufficient. India imports ~5 million MT DAP/year. LFP battery link: phosphoric acid for LFP cathode is ~95% Chinese.',
   stratImpl:'Phosphorous sits at the intersection of two strategic needs: food security (fertilizers) and energy transition (LFP batteries). India\'s LFP battery ambitions are directly exposed to Chinese phosphoric acid dominance — this connection is not yet in mainstream policy discussion.',
   sources:[{label:'USGS Mineral Commodity Summaries 2026',url:'https://pubs.usgs.gov/periodicals/mcs2026/mcs2026.pdf'},{label:'India Ministry of Mines -- Critical Minerals List (2023)',url:'https://mines.gov.in/admin/download/649d4212cceb01688027666.pdf'}]},

  {sym:'K',name:'Potash',essential:false,cat:['fertilizer'],risk:'High',
   indiaPos:'100% import dependent',indiaPosTag:'import',
   use:'Fertilizers — potassium chloride is an essential plant nutrient with no agricultural substitute.',
   globalProd:'World production: ~50 million MT K₂O. Canada ~30%, Russia ~20%, Belarus ~15%. Russia/Belarus supplies disrupted post-2022.',
   indiaDetail:'No significant deposits. 100% import dependent. India imports ~4–5 million MT MOP annually. Canada became primary supplier post-Russia/Belarus disruption.',
   stratImpl:'Potash is India\'s most complete import dependency for food security. Unlike most critical minerals, there is no substitute for potassium in crop nutrition. This is a food security risk embedded in the critical minerals list.',
   sources:[{label:'USGS Mineral Commodity Summaries 2026',url:'https://pubs.usgs.gov/periodicals/mcs2026/mcs2026.pdf'},{label:'India Ministry of Mines -- Critical Minerals List (2023)',url:'https://mines.gov.in/admin/download/649d4212cceb01688027666.pdf'}]},

  {sym:'Re',name:'Rhenium',essential:false,cat:['defence'],risk:'High',
   indiaPos:'100% import dependent',indiaPosTag:'import',
   use:'Single-crystal jet engine turbine blades (3–6% Re in most advanced engines), petroleum refining catalysts.',
   globalProd:'World production: ~50 MT — one of the rarest metals. Byproduct of molybdenum from copper-molybdenum mines. Chile ~50%, Kazakhstan ~20%, US ~10%.',
   indiaDetail:'No known reserves. 100% import dependent. All advanced aircraft engines in IAF use rhenium in turbine blades.',
   stratImpl:'',
   sources:[{label:'USGS Mineral Commodity Summaries 2026',url:'https://pubs.usgs.gov/periodicals/mcs2026/mcs2026.pdf'},{label:'India Ministry of Mines -- Critical Minerals List (2023)',url:'https://mines.gov.in/admin/download/649d4212cceb01688027666.pdf'}]},

  {sym:'Si',name:'Silicon',essential:false,cat:['semiconductor','battery'],risk:'High',
   indiaPos:'Raw material only; no high-purity production',indiaPosTag:'partial',
   use:'Semiconductors (base substrate for all chips), solar photovoltaic cells, aluminium alloys, silicones.',
   globalProd:'World silicon metal: ~3.5 million MT. China: ~70% silicon metal, ~80% solar-grade polysilicon. Canada added high-purity silicon to its critical minerals list in 2024.',
   indiaDetail:'Abundant quartz and silica sand. Minor silicon metal production. Zero semiconductor-grade or solar-grade polysilicon. Dholera fab will import all wafers. India\'s 500 GW solar target requires polysilicon supply chain.',
   stratImpl:'',
   sources:[{label:'USGS Mineral Commodity Summaries 2026',url:'https://pubs.usgs.gov/periodicals/mcs2026/mcs2026.pdf'},{label:'India Ministry of Mines -- Critical Minerals List (2023)',url:'https://mines.gov.in/admin/download/649d4212cceb01688027666.pdf'}]},

  {sym:'Sr',name:'Strontium',essential:false,cat:['defence'],risk:'High',
   indiaPos:'100% import dependent',indiaPosTag:'import',
   use:'Ferrite permanent magnets (low-cost motors, speakers), pyrotechnics (red), specialty glass.',
   globalProd:'World production: ~350,000 MT celestite. China ~65%, Spain ~15%, Mexico.',
   indiaDetail:'Some celestite in Gujarat (Palitana). No commercial production. 100% import dependent.',
   stratImpl:'',
   sources:[{label:'USGS Mineral Commodity Summaries 2026',url:'https://pubs.usgs.gov/periodicals/mcs2026/mcs2026.pdf'},{label:'India Ministry of Mines -- Critical Minerals List (2023)',url:'https://mines.gov.in/admin/download/649d4212cceb01688027666.pdf'}]},

  {sym:'Ta',name:'Tantalum',essential:false,cat:['semiconductor'],risk:'High',
   indiaPos:'100% import dependent',indiaPosTag:'import',
   use:'Capacitors in electronics (smartphones, laptops), high-temperature alloys, surgical implants.',
   globalProd:'World production: ~2,500 MT. DRC ~40%, Rwanda ~30%, Australia.',
   indiaDetail:'Small occurrences in Karnataka, Rajasthan, AP. No commercial production. 100% import dependent.',
   stratImpl:'',
   sources:[{label:'USGS Mineral Commodity Summaries 2026',url:'https://pubs.usgs.gov/periodicals/mcs2026/mcs2026.pdf'},{label:'India Ministry of Mines -- Critical Minerals List (2023)',url:'https://mines.gov.in/admin/download/649d4212cceb01688027666.pdf'}]},

  {sym:'Te',name:'Tellurium',essential:false,cat:['semiconductor'],risk:'Very High',
   indiaPos:'100% import dependent',indiaPosTag:'import',
   use:'CdTe thin-film solar cells (First Solar), thermoelectric devices, rubber vulcanisation.',
   globalProd:'World production: ~500 MT refined. China ~50%. Byproduct of copper refining. China export controls December 2024.',
   indiaDetail:'No significant reserves. India\'s copper refiners have potential byproduct recovery — not exploited. 100% import dependent.',
   stratImpl:'',
   sources:[{label:'USGS Mineral Commodity Summaries 2026',url:'https://pubs.usgs.gov/periodicals/mcs2026/mcs2026.pdf'},{label:'India Ministry of Mines -- Critical Minerals List (2023)',url:'https://mines.gov.in/admin/download/649d4212cceb01688027666.pdf'}]},

  {sym:'Sn',name:'Tin',essential:false,cat:['semiconductor'],risk:'Moderate',
   indiaPos:'100% import dependent',indiaPosTag:'import',
   use:'Soldering (all electronics circuit boards), tin plating for food cans, bronze and brass alloys.',
   globalProd:'World production: ~330,000 MT. China ~35%, Myanmar ~15%, Indonesia ~15%, Peru ~10%.',
   indiaDetail:'Small occurrences in Chhattisgarh, Rajasthan. No commercial production. 100% import dependent.',
   stratImpl:'',
   sources:[{label:'USGS Mineral Commodity Summaries 2026',url:'https://pubs.usgs.gov/periodicals/mcs2026/mcs2026.pdf'},{label:'India Ministry of Mines -- Critical Minerals List (2023)',url:'https://mines.gov.in/admin/download/649d4212cceb01688027666.pdf'}]},

  {sym:'V',name:'Vanadium',essential:false,cat:['battery'],risk:'High',
   indiaPos:'Resources present; zero production',indiaPosTag:'dormant',
   use:'High-strength steel alloys, vanadium redox flow batteries (VRFB) for long-duration grid storage, catalysts.',
   globalProd:'World production: ~110,000 MT. China ~57%, Russia ~17%, South Africa ~10%.',
   indiaDetail:'3,27,500 KT resources — associated with bauxite, magnetite, and coal fly ash. NTPC coal fly ash contains recoverable vanadium — under study, not operational. Zero commercial production. 100% import dependent.',
   stratImpl:'India produces enormous quantities of coal fly ash (NTPC and others). Coal fly ash contains recoverable vanadium. A fly ash vanadium recovery programme would simultaneously reduce a waste problem and create a domestic critical mineral supply — a policy win that has not been pursued.',
   sources:[{label:'USGS Mineral Commodity Summaries 2026',url:'https://pubs.usgs.gov/periodicals/mcs2026/mcs2026.pdf'},{label:'India Ministry of Mines -- Critical Minerals List (2023)',url:'https://mines.gov.in/admin/download/649d4212cceb01688027666.pdf'}]},

  {sym:'Zr',name:'Zirconium',essential:false,cat:['defence'],risk:'Moderate',
   indiaPos:'Domestic nuclear supply chain functioning',indiaPosTag:'present',
   use:'Nuclear reactor fuel cladding (zircaloy tubes), dental implants (ZrO₂), ceramics, hafnium recovery.',
   globalProd:'World zircon: ~1.5 million MT. Australia ~35%, South Africa ~25%. India ~8%.',
   indiaDetail:'3,02,000 KT zircon mineral resources. IREL produces significant zircon concentrates from coastal sands. IREL supplies zircaloy to NPCIL for reactor fuel cladding. This is one of the few minerals where India has a complete domestic supply chain for a strategic application.',
   stratImpl:'Zirconium is notable as one of the few minerals where India\'s strategic requirement (nuclear fuel cladding) is met domestically through a functioning IREL-NPCIL chain. This is worth highlighting as a model — it shows that strategic mineral security is achievable when the policy intent, the institutional structure, and the resource endowment are aligned.',
   sources:[{label:'USGS Mineral Commodity Summaries 2026',url:'https://pubs.usgs.gov/periodicals/mcs2026/mcs2026.pdf'},{label:'India Ministry of Mines -- Critical Minerals List (2023)',url:'https://mines.gov.in/admin/download/649d4212cceb01688027666.pdf'}]},

  {sym:'Se',name:'Selenium',essential:false,cat:['semiconductor'],risk:'Moderate',
   indiaPos:'100% import dependent; byproduct potential',indiaPosTag:'dormant',
   use:'CdTe and CIGS thin-film solar cells, glass decolourising, rubber vulcanisation.',
   globalProd:'World production: ~3,500 MT. Japan ~30%, Germany, Belgium, China, Canada. Byproduct of copper refining.',
   indiaDetail:'No significant reserves. India\'s copper refiners (Hindalco, Vedanta) have selenium byproduct potential — not exploited. 100% import dependent.',
   stratImpl:'',
   sources:[{label:'USGS Mineral Commodity Summaries 2026',url:'https://pubs.usgs.gov/periodicals/mcs2026/mcs2026.pdf'},{label:'India Ministry of Mines -- Critical Minerals List (2023)',url:'https://mines.gov.in/admin/download/649d4212cceb01688027666.pdf'}]},

  {sym:'Cd',name:'Cadmium',essential:false,cat:['battery'],risk:'Moderate',
   indiaPos:'Partial — byproduct of zinc (Vedanta/HZL)',indiaPosTag:'present',
   use:'CdTe thin-film solar cells, NiCd batteries (declining), electroplating, pigments.',
   globalProd:'World production: ~25,000 MT. China ~35%, South Korea, Japan, India. Exclusively a byproduct of zinc refining. USGS MCS 2026: US cadmium production increased significantly in 2025.',
   indiaDetail:'India produces cadmium as a byproduct at Vedanta/HZL\'s Debari and Dariba refineries in Rajasthan. India is a meaningful cadmium producer — one of the few critical minerals with genuine domestic production capacity.',
   stratImpl:'Cadmium is one of only two or three minerals (alongside zirconium) where India has real domestic production capacity rather than just geological resources. This should be recognised in India\'s minerals strategy as a relative strength.',
   sources:[{label:'USGS Mineral Commodity Summaries 2026',url:'https://pubs.usgs.gov/periodicals/mcs2026/mcs2026.pdf'},{label:'India Ministry of Mines -- Critical Minerals List (2023)',url:'https://mines.gov.in/admin/download/649d4212cceb01688027666.pdf'}]},
];
DB.tab_minerals = {
  nav:   { en: "03 · The Minerals", mr: "०३ · खनिजे" },
  label: { en: "3 — The Minerals", mr: "३ — खनिजे" },
  title: { en: "India's 30 critical minerals — what each one does and where it comes from", mr: "भारताची ३० महत्त्वाची खनिजे — प्रत्येक काय करते आणि ते कुठून येते" },
  intro: { en: "India's Ministry of Mines published a list of 30 critical minerals in June 2023. The Essential 10 are the minerals where India's strategic vulnerability is highest — high demand, near-total import dependence, and concentrated global supply.", mr: "भारताच्या खाण मंत्रालयाने जून २०२३ मध्ये ३० महत्त्वाच्या खनिजांची यादी प्रकाशित केली. आवश्यक १० अशी खनिजे आहेत जिथे भारताची धोरणात्मक असुरक्षितता सर्वाधिक आहे — उच्च मागणी, जवळजवळ संपूर्ण आयात अवलंबित्व, आणि केंद्रित जागतिक पुरवठा." },
  filters: {
    essential: { en: "Essential 10", mr: "आवश्यक १०" },
    all:       { en: "All 30", mr: "सर्व ३०" },
    battery:   { en: "Battery", mr: "बॅटरी" },
    semi:      { en: "Semiconductor", mr: "अर्धवाहक" },
    defence:   { en: "Defence", mr: "संरक्षण" },
    fertilizer:{ en: "Fertilizer", mr: "खत" }
  },
  posLabels: {
    "100% Import Dependent": { en: "100% Import Dependent", mr: "१००% आयात अवलंबित" },
    "Partial / Limited":     { en: "Partial / Limited",     mr: "आंशिक / मर्यादित" },
    "Legally Locked":        { en: "Legally Locked",        mr: "कायदेशीर बंधन" },
    "Resources / Potential": { en: "Resources / Potential", mr: "साठे / संभाव्यता" },
    "Domestic Capacity":     { en: "Domestic Capacity",     mr: "देशांतर्गत क्षमता" }
  },
  detailLabels: {
    whatItDoes: { en: "What it does", mr: "काय करते" },
    globalProd: { en: "Global production", mr: "जागतिक उत्पादन" },
    indiaPos:   { en: "India's position", mr: "भारताची स्थिती" },
    stratImpl:  { en: "Strategic Implication", mr: "धोरणात्मक अनुमान" },
    supplyRisk: { en: "Supply Risk:", mr: "पुरवठा धोका:" },
    src:        { en: "Source:", mr: "स्रोत:" }
  }
};

// ══════════════════════════════════════════════
// TAB 6 — THE TOOLKIT
// Raw toolkit data from verified source
// ══════════════════════════════════════════════
DB._rawToolkit = [
  {icon:'⛏️', name:'Mine More', sub:'Expand domestic and allied extraction',
   pros:['Reduces import dependency at the source','Creates domestic jobs and industrial activity','Provides sovereign control over upstream supply'],
   cons:['Mine development: 17–29 years average (IEA/S&amp;P Global)','Capital intensive; uncertain returns if Chinese prices stay low','Environmental and community opposition in democracies','Solves the upstream problem — not the midstream chokepoint'],
   cases:[
     {country:'Australia 🇦🇺', outcome:'Partial success', text:'Became the world\'s largest lithium miner. But most ore still processed in China — mining alone did not deliver supply chain security. Australian government modelling estimates continuing the current export-led trajectory adds USD 71.2 billion to GDP by 2040; building downstream processing capacity would raise that to USD 139.7 billion — the gap between Mine More alone and Mine More + Build Processing.'},
     {country:'United States 🇺🇸', outcome:'Partial', text:'Mountain Pass REE mine reopened. 29-year average mine development timeline remains a structural constraint.'},
     {country:'India 🇮🇳', outcome:'Early stage', text:'59 mineral blocks auctioned under NCMM. No commercial lithium or cobalt production yet.'}
   ],
   india:'India\'s geological endowment is strong. The constraint is not finding deposits — it is regulatory delay and the 17.8-year global average mine development timeline. Mining more is necessary but insufficient without simultaneous midstream investment.',
   src:'S&amp;P Global July 2024 · IEA 2025 · NCMM Jan 2026 · Australia Critical Minerals Strategy 2023'},
  {icon:'🏭', name:'Build Processing', sub:'Develop domestic or allied refining and separation capacity',
   pros:['Addresses the actual strategic chokepoint','Creates high-value industrial capability','Supports downstream manufacturing ambitions'],
   cons:['5–10 years to build even after capital is committed','Requires specialised engineering expertise that is scarce globally','Chinese IP restrictions now limit technology transfer','Uncompetitive vs Chinese prices without offtake guarantees'],
   cases:[
     {country:'Japan 🇯🇵', outcome:'Most successful', text:'Reduced China REE dependence from ~90% (2010) to ~58% (2023) through JOGMEC-backed systematic investment. The world\'s most successful diversification case — still 58% dependent.'},
     {country:'Australia / Lynas 🇦🇺', outcome:'Pioneering', text:'Lynas operates the only significant non-Chinese commercial REE separation globally. Texas facility under construction. Proof of concept — limited market share.'},
     {country:'India 🇮🇳', outcome:'Not started', text:'4 processing parks announced. None operational. Atomic Energy Act 1962 is the primary structural constraint for REE processing.'}
   ],
   india:'Processing is highest-leverage for India. REE resources are world-class; processing capacity is near-zero. The Atomic Energy Act constraint is a policy choice, not a physical barrier. Updating this is the single action with the highest ratio of impact to cost.',
   src:'IEA 2025 · NCMM Jan 2026 · Kotasthane Mercatus Feb 2026'},
  {icon:'🏦', name:'Stockpile', sub:'Hold strategic reserves to buffer supply disruptions',
   pros:['Works immediately — no 17-year lead time','Buys negotiating leverage','Practical for low-volume, high-value minerals'],
   cons:['Does not reduce structural dependence — only delays disruption impact','Chinese price dumping can undermine stockpile economics','Not viable for high-volume minerals at scale'],
   cases:[
     {country:'Japan 🇯🇵', outcome:'Most developed', text:'~60+ days of key mineral demand held in reserve. Built after 2010 embargo. Buffered the 2025 Chinese export controls.'},
     {country:'United States 🇺🇸', outcome:'Aspirational', text:'Project Vault: $12 billion announced 2026. National Defense Stockpile cobalt solicitation cancelled before year end.'},
     {country:'India 🇮🇳', outcome:'Not started', text:'₹500 crore allocated under NCMM for stockpiling specifically -- part of a larger ₹5,600 crore NMET allocation for overseas mineral security, which also includes ₹4,000 crore for foreign-sourcing risk coverage and ₹1,600 crore for overseas exploration support. Not operational as of June 2026.'}
   ],
   india:'Stockpiling is India\'s fastest deployable tool. For minerals like dysprosium and terbium (small volumes, high strategic value), 90–180 days of demand is tractable immediately. Does not solve the structural problem but reduces acute vulnerability.',
   bankability: {
     body: { en: "A 2026 PIIE analysis identifies the core financing challenge for non-China supply chains: REE/HREE projects face low anticipated returns due to Chinese pricing advantages, yet high exposure to Chinese price manipulation. Offtake agreements, strategic stockpiling, and price floors shift projects into a bankable risk-return zone. Three competing interests define the political economy: private capital (seeks high returns), downstream users (seek low prices), national security (seeks low risk). No configuration satisfies all three.",
             mr: "२०२६ PIIE विश्लेषण: REE/HREE प्रकल्पांना कमी अपेक्षित परतावा परंतु चीनच्या किंमत हाताळणीचा उच्च धोका आहे. तीन स्पर्धात्मक हितसंबंध: खाजगी भांडवल, डाउनस्ट्रीम वापरकर्ते आणि राष्ट्रीय सुरक्षा." },
     chinaContrast: { en: "China solves bankability via policy banks (Eximbank, China Development Bank) providing subsidised credit and price management that spreads risk across the whole economy. The US and India are attempting to solve a strategic infrastructure problem with return-maximising capital market tools — a structural mismatch requiring explicit policy choices about who bears the cost.",
                      mr: "चीन धोरण बँकांद्वारे अनुदानित कर्ज आणि किंमत व्यवस्थापनाद्वारे बँकेबिलिटी सोडवतो जे जोखीम संपूर्ण अर्थव्यवस्थेत पसरवते." },
     indiaAngle: { en: "[OUR INFERENCE] NCMM government-backed offtake agreements and KABIL overseas acquisition are structurally correct responses to the bankability problem — but only if paired with downstream demand creation. A processing facility without an assured domestic buyer remains unbankable. India must build both supply-side capacity and domestic demand (battery, defence, electronics manufacturing) simultaneously.",
                   mr: "[आपला अनुमान] NCMM सरकार-समर्थित ऑफटेक करार आणि KABIL अधिग्रहण बँकेबिलिटी समस्येसाठी योग्य आहेत — परंतु डाउनस्ट्रीम मागणी निर्मितीसह जोडल्यावरच." },
     src: "piie_bankability_2026"
   },
   src:'NCMM Jan 2026 · Reddy &amp; Kotasthane HT June 2026 · Japan METI · ChemIndigest June 2025'},
  {icon:'🤝', name:'Friend-shore', sub:'Source critical minerals from geopolitically aligned countries',
   pros:['Reduces exposure to adversarial supply chains','Builds strategic relationships with resource-rich allies','More tractable than building processing from scratch'],
   cons:['Frameworks are not supply chains — most signed deals have produced no operational capacity','Chinese investment is embedded in many "allied" countries','Allied supply not always cost-competitive without price floors'],
   cases:[
     {country:'Minerals Security Partnership 🌐', outcome:'Framework stage', text:'14 countries, 19+ projects. No operational midstream processing produced as of June 2026.'},
     {country:'Japan-Australia 🇯🇵🇦🇺', outcome:'Most operational', text:'JOGMEC investment in Lynas. Most developed friend-shoring architecture — built over 15 years.'},
     {country:'India 🇮🇳', outcome:'Rapidly building', text:'Quad initiative ($20B May 2026), India-US framework (May 2026), KABIL Argentina blocks. Architecture built in 18 months.'}
   ],
   india:'India is building the right architecture. The risk is treating framework-building as the end point. Friend-shoring only works when the consuming nation also builds domestic processing and provides long-term demand guarantees.',
   src:'State Dept May 2026 · MEA May 2026 · Reddy &amp; Kotasthane HT June 2026'},
  {icon:'🔄', name:'Recycle', sub:'Recover critical minerals from end-of-life products',
   pros:['80% lower GHG emissions than primary mining (IEA 2025)','Growing feedstock as EVs and electronics reach end-of-life','Creates domestic supply independent of geopolitics'],
   cons:['Feedstock limited today — most products still in use','Chinese primary production price keeps recycled material uncompetitive','Collection infrastructure weak in most countries'],
   cases:[
     {country:'European Union 🇪🇺', outcome:'Advanced framework', text:'Battery Regulation requires minimum recycled content from 2030. But operational scale is still small.'},
     {country:'Japan 🇯🇵', outcome:'Established', text:'Urban mining is mainstream. Formalised e-waste collection. REE recovery rates remain low even in Japan.'},
     {country:'India 🇮🇳', outcome:'Early', text:'₹1,500 crore scheme approved September 2025. Per IEA analysis, this is expected to incentivise ~270 KT/year of recycling capacity, resulting in ~40 KT/year of recovered critical mineral output by FY2030-31 -- capacity and recovered-output are different figures for the same scheme, not conflicting ones. EPR rules exist but not REE-calibrated. Kotasthane estimate: ~35% of REE oxide needs possible through recycling within a decade.'}
   ],
   india:'India\'s highest-tractability near-term tool. The raddiwala ecosystem already recovers gold, copper, aluminium. What is missing: (1) price signals making REE recovery economically rational and (2) EPR rules calibrated by mineral criticality. Both are policy changes, not capital investments.',
   src:'IEA 2025 · Kotasthane Mercatus Feb 2026 · NCMM Jan 2026 · IEA NCMM Policy 2026'},
  {icon:'⚗️', name:'Substitute', sub:'Redesign products to use less of a vulnerable mineral',
   pros:['Most elegant solution — removes the dependency entirely','Does not require supply chain infrastructure','Often drives broader technological improvement'],
   cons:['Takes 3–5 years minimum to redesign supply chains','NdFeB magnets have no commercially viable substitute today','China actively closes substitution pathways in real time'],
   cases:[
     {country:'LFP batteries 🔋', outcome:'Major success', text:'Cobalt-free lithium iron phosphate now >40% of global EV battery production. Eliminated cobalt dependency for a large share of the market.'},
     {country:'Tesla induction motor ⚡', outcome:'Unverified at volume', text:'Tesla announced REE-free induction motors for next-gen EVs. Not yet confirmed at production volume.'},
     {country:'Holmium substitution ❌', outcome:'Closed by China', text:'After China restricted dysprosium (April 2025), manufacturers tried holmium substitution. China restricted holmium October 2025 — pathway closed in 6 months.'}
   ],
   india:'India should prioritise LFP battery chemistry for its domestic EV programme — eliminates cobalt exposure India cannot address through domestic supply. For REE magnets, no practical substitute exists; India must build processing capacity.',
   src:'IEA Commentary Oct 2025 · Takshashila GAGE 2026'},
  {icon:'🚀', name:'Leapfrog Innovation', sub:'Use disruptive technology to bypass entrenched supply chain positions',
   pros:['Avoids decades-long infrastructure build','Cannot be countered by Chinese price dumping','Reduces dependency structurally rather than substituting one supplier for another','AI-accelerated materials discovery compresses development timelines'],
   cons:['Most innovations fail between pilot and commercial scale (four valleys of death)','Requires patient equity capital that private markets do not naturally provide','China actively monitors and acquires competing technologies','Success is not guaranteed — Niron Magnetics still pre-commercial at scale'],
   cases:[
     {country:'Niron Magnetics 🇺🇸', outcome:'Pre-commercial but significant', text:'Iron nitride permanent magnets — REE-free. Started with $4.25M ARPA-E grant in 2011. Factory construction began Minnesota 2025. Could break dysprosium/terbium dependency for EV motors if commercially validated.'},
     {country:'Lithium from oilfield wastewater 🇺🇸', outcome:'Pilot stage', text:'Lilac Solutions and Element3 extract lithium from fracking wastewater. US produces 1 trillion gallons of fracking wastewater annually — significant untapped lithium source if technology scales.'},
     {country:'Bioengineered REE separation 🇺🇸', outcome:'Early stage', text:'Alta Resources Technologies uses engineered proteins to selectively bind and separate REEs from complex waste streams. Cleaner than hydrometallurgical acid leaching if commercially proven.'}
   ],
   india:'[OUR INFERENCE] India can apply the leapfrog logic: rather than replicating China 50-year value-chain build-out, India should invest in midstream separation chemistry where innovation is reducing barriers. Ionic adsorption clay (IAC) processing expertise, direct lithium extraction (DLE), and next-generation magnet alloys are areas where India can partner with the US, Japan and Australia under Quad frameworks to build processing hubs. The CFR valleys-of-death framework applies: India needs patient equity capital and government-backed demand guarantees for pilot-scale processing projects, not just exploration grants.',
   src:'CFR CSR101 Feb 2026 · IEA Innovation 2025'},
];
DB.tab_toolkit = {
  nav:   { en: "07 · The Toolkit", mr: "०७ · साधन संच" },
  label: { en: "7 — The Toolkit", mr: "७ — साधन संच" },
  title: { en: "Seven tools. Different trade-offs. No complete solution.", mr: "सात साधने. वेगवेगळे तोटे-फायदे. कोणताही संपूर्ण उपाय नाही." },
  intro: { en: "Governments facing supply concentration have seven tools available. No single tool is sufficient. The question is which combination, deployed in which sequence, produces the most supply chain resilience in the time available.", mr: "पुरवठा एकाग्रतेला तोंड देणाऱ्या सरकारांकडे सात साधने उपलब्ध आहेत. कोणतेही एकच साधन पुरेसे नाही. प्रश्न असा आहे की कोणते संयोजन, कोणत्या क्रमाने तैनात केले, उपलब्ध वेळात सर्वात जास्त पुरवठा साखळी लवचिकता निर्माण करते." },
  toolNames: {
    "Mine More":       { en: "Mine More",       mr: "अधिक खाण" },
    "Build Processing":{ en: "Build Processing",mr: "प्रक्रिया बांधणी" },
    "Stockpile":       { en: "Stockpile",       mr: "साठेबाजी" },
    "Friend-shore":    { en: "Friend-shore",    mr: "मित्र-राष्ट्र सोर्सिंग" },
    "Recycle":         { en: "Recycle",         mr: "पुनर्वापर" },
    "Substitute":      { en: "Substitute",      mr: "पर्याय" },
    "Leapfrog Innovation": { en: "Leapfrog Innovation", mr: "लीपफ्रॉग नवकल्पना" }
  }
};

// ══════════════════════════════════════════════
// TAB 7 — INDIA'S MOVE
// Raw alliance/constraint/condition data from verified source
// ══════════════════════════════════════════════
DB._rawAlliances = [
  {name:'India-US Critical Minerals Framework',date:'May 26, 2026',parties:'India + United States',detail:'Signed by EAM Jaishankar and Secretary Rubio in New Delhi. Covers joint supply chain development, technology transfer, investment facilitation, and offtake agreements. Part of the broader iCET framework.',src:'MEA May 2026',url:'https://www.mea.gov.in/press-releases.htm?dtl/41236'},
  {name:'Quad Critical Minerals Initiative',date:'May 26, 2026',parties:'India + US + Japan + Australia — $20 billion',detail:'$20 billion joint initiative announced at the Quad Foreign Ministers meeting. India provides resources and labour; Japan provides technology and demand; Australia provides mining expertise and ore.',src:'State Dept / MOFA May 2026',url:'https://www.state.gov/releases/office-of-the-spokesperson/2026/05/quad-critical-minerals-initiative-framework-among-the-united-states-japan-australia-and-india'},
  {name:'KABIL — Argentina Lithium Blocks',date:'2023–2026 (ongoing)',parties:'India (KABIL) + Argentina',detail:'5 brine-type lithium blocks in Catamarca province. Phase 1 exploration completed. Feasibility study targeted December 2027. Production targeted end-2029. India\'s most concrete overseas minerals acquisition.',src:'NCMM Jan 2026',url:'https://mines.gov.in/webportal/content/ongoing-nits-critical-minerals'},
  {name:'India-Australia Critical Minerals Investment Partnership',date:'Active since 2022',parties:'India + Australia',detail:'KABIL completed due diligence on 5 Australian lithium projects. Non-binding offer submitted. The partnership is operational — not just aspirational.',src:'DFAT / Geoscience Australia',url:'https://www.ga.gov.au/scientific-topics/minerals/critical-minerals'},
  {name:'Minerals Security Partnership (MSP)',date:'India joined June 2023',parties:'14 countries including India',detail:'US-led initiative. 19+ projects in the pipeline. India is a member alongside US, EU, Japan, South Korea, Australia, Canada, UK. India-specific MSP projects not yet publicly announced.',src:'US State Dept',url:'https://www.state.gov/minerals-security-partnership/'},
];
DB._rawConstraints = [
  {title:'The Atomic Energy Act 1962',severity:'Critical',text:'Monazite is classified under the Atomic Energy Act 1962 — only IREL can mine it. Private sector entirely excluded. Written to protect thorium for a nuclear programme that has not materialised at the envisioned scale. This single piece of 1962 legislation is the primary reason India has near-zero REE processing despite world-class reserves.',src:'India MoM June 2023 · Kotasthane Mercatus Feb 2026'},
  {title:'The Exploration Auction Problem',severity:'High',text:'In India, even exploration requires a competitive auction. In Australia and Canada, exploration licences are granted administratively in 2–3 weeks. India\'s auction-for-exploration model adds years of delay before a drill enters the ground. The NCMM created a separate Exploration Licence — but upfront capital support is not yet operational.',src:'Kotasthane Mercatus Feb 2026 · NCMM Jan 2026'},
  {title:'The NCMM-ISM Silo Problem',severity:'High',text:'India\'s National Critical Mineral Mission (Ministry of Mines) and the India Semiconductor Mission (MeitY) operate as parallel silos without an integrating mineral-to-chip framework. India has gallium resources at HINDALCO/NALCO that could feed GaN semiconductor production at Dholera — but no policy connects them.',src:'NCMM Jan 2026 · NITI Aayog Semiconductor Roadmap 2026'},
  {title:'The Mine-but-not-Process Trap',severity:'High',text:'India exports titanium mineral concentrates and imports titanium metal. India produces graphite flake and imports battery-grade spherical graphite. The pattern is consistent: India operates at Stage 2 (mining) and not at Stages 3–4 (processing/refining) for most critical minerals. The value addition happens elsewhere.',src:'India MoM June 2023 · Reddy &amp; Kotasthane HT June 2026'},
];
DB._rawConditions = [
  {num:'01',title:'Clarity on what each side brings',text:'A deal works when each partner has a defined role: who provides the ore, technology, financing, offtake guarantee. Deals that leave these undefined produce MoUs, not supply chains.'},
  {num:'02',title:'Offtake commitment that beats Chinese prices',text:'Allied supply is almost always more expensive than Chinese supply. Without a price floor or committed long-term offtake, private investors will not fund allied processing capacity.'},
  {num:'03',title:'Technology transfer, not just investment',text:'A deal bringing foreign capital without technology transfer rebuilds dependency in a new form. India needs access to separation and processing knowledge — which China has now restricted.'},
  {num:'04',title:'Regulatory streamlining on the Indian side',text:'A foreign partner willing to invest in Indian REE processing is of no value if the regulatory pathway requires 7-10 years of clearances. India has taken concrete steps here: in 2025 the government created a separate critical-minerals category on the PARIVESH 2.0 clearance portal and amended the Van (Sanrakshan Evam Samvardhan) Rules, 2023 to fast-track forest clearances for critical mineral mining. The open question is whether these procedural fixes translate into faster timelines for the four planned Processing Parks specifically, or remain confined to upstream mining clearances.'},
  {num:'05',title:'A supply chain outcome, not a diplomatic statement',text:'The test of a deal is not the press release. It is whether, 5 years later, a facility is operating that processes Indian minerals into products India needs. Concretely for the India-US framework signed in 2026: the test is whether a lithium refinery or an HREE separation plant is operational by around 2031 -- aligned with the NCMM\'s own self-sufficiency target. If 2031 arrives with KABIL\'s Argentina lithium still being shipped to China for refining, the framework will have failed this condition regardless of how many MoUs were signed.'},
];

DB.tab_india = {
  nav:   { en: "08 · India's Move", mr: "०८ · भारताची चाल" },
  label: { en: "8 — India's Move", mr: "८ — भारताची चाल" },
  title: { en: "What India has, what India lacks, and what the window looks like", mr: "भारताकडे काय आहे, काय नाही, आणि खिडकी कशी दिसते" },
  scorecardLabel: { en: "India Critical Minerals Capability Scorecard — June 2026", mr: "भारत महत्त्वाची खनिज क्षमता स्कोअरकार्ड — जून २०२६" },
  scorecard: [
    { area: { en: "Resources",    mr: "साठे" },           score: 4, note: { en: "REE, graphite, gallium, titanium — significant endowment", mr: "REE, ग्रॅफाइट, गॅलियम, टायटॅनियम — महत्त्वपूर्ण उपलब्धता" } },
    { area: { en: "Exploration",  mr: "शोध" },            score: 3, note: { en: "523/1200 NCMM projects complete. Improving.", mr: "५२३/१२०० NCMM प्रकल्प पूर्ण. सुधारत आहे." } },
    { area: { en: "Mining",       mr: "खाणकाम" },         score: 2, note: { en: "Active for graphite, titanium. Absent for lithium, cobalt, nickel.", mr: "ग्रॅफाइट, टायटॅनियमसाठी सक्रिय. लिथियम, कोबाल्ट, निकेलसाठी अनुपस्थित." } },
    { area: { en: "Processing",   mr: "प्रक्रिया" },      score: 1, note: { en: "IREL REE oxide only. No private sector. AEA blocks monazite.", mr: "IREL REE ऑक्साइड फक्त. खाजगी क्षेत्र नाही. AEA मोनझाइट ब्लॉक करते." } },
    { area: { en: "Refining",     mr: "शुद्धीकरण" },      score: 1, note: { en: "Effectively absent. 100% import for battery minerals.", mr: "प्रभावीपणे अनुपस्थित. बॅटरी खनिजांसाठी १००% आयात." } },
    { area: { en: "Manufacturing",mr: "उत्पादन" },         score: 2, note: { en: "Battery assembly beginning. No cell manufacturing at scale.", mr: "बॅटरी असेंब्ली सुरू. स्केलवर सेल उत्पादन नाही." } },
    { area: { en: "Alliances",    mr: "आघाड्या" },         score: 4, note: { en: "US framework, Quad, MSP membership, KABIL operational.", mr: "US चौकट, Quad, MSP सदस्यता, KABIL कार्यरत." } },
    { area: { en: "Stockpiles",   mr: "साठेबाजी" },        score: 1, note: { en: "₹500 Cr allocated. No operational stockpile.", mr: "₹५०० कोटी वाटप. कोणताही ऑपरेशनल साठा नाही." } },
    { area: { en: "Recycling",    mr: "पुनर्वापर" },        score: 2, note: { en: "15–20% target by 2030 (NCMM). Estimate: ~35% achievable (Kotasthane).", mr: "२०३० पर्यंत १५-२०% लक्ष्य (NCMM). अंदाज: ~३५% साध्य करण्यायोग्य (कोतस्थाने)." } }
  ],
  resources: [
    { mineral: { en: "Monazite (REO 55–65%)",  mr: "मोनझाइट (REO ५५-६५%)" },  stat: "11.93 Mt",    note: { en: "Coastal sands (Kerala, TN, Odisha, AP). Thorium ~8-12%; locked under AEA 1962.", mr: "किनारी वाळू (केरळ, TN, ओडिशा, AP). थोरियम ~८-१२%; AEA १९६२ अंतर्गत बंद." }, src: "india_mom_2023" },
    { mineral: { en: "Graphite Resources",      mr: "ग्रॅफाइट संसाधने" },       stat: "3,01,500 KT", note: { en: "~85,000 t/yr production. Arunachal Pradesh, Rajasthan, TN. Zero battery-grade processing.", mr: "~८५,००० t/वर्ष उत्पादन. अरुणाचल प्रदेश, राजस्थान, TN. शून्य बॅटरी-ग्रेड प्रक्रिया." }, src: "india_mom_2023" },
    { mineral: { en: "Copper Resources", mr: "तांबे संसाधने" }, stat: "14,96,979 KT", note: { en: "Rajasthan, Jharkhand, Madhya Pradesh. Only ~4% of domestic smelter demand met domestically.", mr: "राजस्थान, झारखंड, मध्य प्रदेश. देशांतर्गत स्मेल्टर मागणीपैकी केवळ ~४% देशांतर्गत पूर्ण." }, src: "india_mom_2023" },
    { mineral: { en: "Gallium (bauxite-assoc.)", mr: "गॅलियम (बॉक्साइट-संलग्न)" }, stat: "1,13,100 KT", note: { en: "Odisha, Jharkhand, Gujarat. NALCO advancing toward commercial production (Aug 2025); Hindalco inactive.", mr: "ओडिशा, झारखंड, गुजरात. NALCO व्यावसायिक उत्पादनाकडे वाटचाल (ऑगस्ट २०२५); हिंडाल्को निष्क्रिय." }, src: "india_mom_2023" },
    { mineral: { en: "Titanium Minerals",       mr: "टायटॅनियम खनिजे" },         stat: "7,61,970 KT", note: { en: "~4,34,000 t/yr concentrates. IREL operational. Exports ore; imports metal.", mr: "~४,३४,००० t/वर्ष केंद्रित. IREL कार्यरत. धातुक निर्यात; धातू आयात." }, src: "india_mom_2023" },
    { mineral: { en: "Lithium (J&K)",           mr: "लिथियम (J&K)" },            stat: "5.9 Mt (G3 ore)",  note: { en: "Reasi, J&K — 5.9 million tonnes of G3 inferred lithium ORE (not lithium content). Failed auctions; commercially assessed as unviable. No confirmed extraction pathway. Figures of \'12,900 KT\' that appear in some secondary sources for this deposit could not be traced to a primary source and should be treated with caution.", mr: "रियासी, J&K — ५.९ दशलक्ष टन G3 अनुमानित लिथियम धातुक (लिथियम सामग्री नाही). अयशस्वी लिलाव; व्यावसायिकदृष्ट्या अव्यवहार्य मानले. कोणताही पुष्टी केलेला उत्खनन मार्ग नाही." }, src: "gsi_reasi_lithium_2023" },
    { mineral: { en: "NCMM Outlay",             mr: "NCMM परिव्यय" },             stat: "₹34,300 Cr",  note: { en: "FY2025–FY2031. ₹16,300 Cr government + ₹18,000 Cr PSU/private. 59 blocks auctioned.", mr: "FY2025-FY2031. ₹१६,३०० Cr सरकार + ₹१८,००० Cr PSU/खाजगी. ५९ ब्लॉक्स लिलाव." }, src: "ncmm_2026" }
  ],
  thoriumTrap: {
    title: { en: "The Thorium Trap", mr: "थोरियम सापळा" },
    body:  { en: "India's monazite deposits contain 25% of the world's thorium — making them subject to the Atomic Energy Act 1962, which classifies monazite as a 'prescribed substance'. This prevents private sector participation in mining or processing. The same monazite also contains India's most accessible REE feedstock. The policy that protects India's nuclear fuel reserves simultaneously locks India out of its most viable REE processing pathway. Reforming the AEA to carve out commercial REE processing — while preserving thorium oversight — is analytically the single highest-leverage policy action available to India.", mr: "भारताच्या मोनझाइट निक्षेपांमध्ये जगातील २५% थोरियम आहे — ज्यामुळे ते अणुऊर्जा कायदा १९६२ च्या अधीन आहेत, जे मोनझाइटला 'विहित पदार्थ' म्हणून वर्गीकृत करते. हे खाणकाम किंवा प्रक्रियेत खाजगी क्षेत्राच्या सहभागास प्रतिबंध करते. [OUR INFERENCE]" }
  },
  allianceInsight: {
    body: { en: "India has built a credible alliance architecture in the span of 18 months. The gap is between framework and operational supply chain. Signed agreements do not process lithium or separate rare earths. The next phase — building physical infrastructure — is where most announced diversification programmes have stalled globally.", mr: "भारताने १८ महिन्यांत एक विश्वासार्ह आघाडी आर्किटेक्चर बांधले आहे. चौकट आणि ऑपरेशनल पुरवठा साखळी यांच्यात अंतर आहे. स्वाक्षरी केलेले करार लिथियमवर प्रक्रिया करत नाहीत किंवा रेअर अर्थ वेगळे करत नाहीत." }
  },
  conditionIntro: {
    body: { en: "Writing in the Hindustan Times on June 4, 2026 — the day before the India-US critical minerals framework was formally activated — Shobhankita Reddy and Pranay Kotasthane identified five conditions that determine whether a critical minerals deal produces real supply chain change or remains a diplomatic statement.", mr: "४ जून २०२६ रोजी हिंदुस्तान टाइम्समध्ये लिहिताना — भारत-US महत्त्वाच्या खनिज चौकट औपचारिकपणे सक्रिय होण्याच्या एक दिवस आधी — शोभांकिता रेड्डी आणि प्रणय कोतस्थाने यांनी पाच अटी ओळखल्या." },
    src: "reddy_kotasthane_ht"
  }
};

DB.tab_chain.stageLabels = {
  whoControls: { en: 'Who Controls It',           mr: 'कोण नियंत्रित करते' },
  keyData:     { en: 'Key Data',                   mr: 'प्रमुख आकडेवारी' },
  indiaPos:    { en: "India's Position",            mr: 'भारताची स्थिती' },
  derisking:   { en: 'De-risking efforts underway', mr: 'डी-रिस्किंग प्रयत्न सुरू' },
  chokepoint:  { en: '★ CHOKEPOINT',               mr: '★ अडथळा बिंदू' }
};

// ══════════════════════════════════════════════
// TAB 6 — THE HUMAN COST
// All claims in this version are source-backed
// [OUR INFERENCE] labels applied to analytical conclusions
// ══════════════════════════════════════════════
DB.tab_human = {
  nav:   { en: "06 · The Human Cost", mr: "०६ · मानवी किंमत" },
  label: { en: "6 — The Human Cost",  mr: "६ — मानवी किंमत" },
  title: { en: "Who bears the costs of technologies others enjoy?", mr: "इतरांना मिळणाऱ्या तंत्रज्ञानाची किंमत कोण भरतो?" },
  intro: { en: "Critical minerals enable clean energy, AI, defence, and modern electronics. But extraction and processing impose environmental, health, and social costs on communities far from the consumers who benefit. And the solutions — recycling, responsible mining, monitoring — are each harder than they appear.",
           mr: "महत्त्वाची खनिजे स्वच्छ ऊर्जा, AI, संरक्षण आणि आधुनिक इलेक्ट्रॉनिक्स सक्षम करतात. परंतु उत्खनन आणि प्रक्रिया ग्राहकांपासून दूर असलेल्या समुदायांवर पर्यावरणीय, आरोग्य आणि सामाजिक खर्च लादते. आणि उपाय — पुनर्वापर, जबाबदार खाणकाम, निरीक्षण — प्रत्येक दिसण्यापेक्षा कठीण आहे." },

  sections: [
    // ── 6.1 — THE GEOGRAPHY OF COST ──
    {
      id: "human_61",
      label: { en: "6.1 — The Geography of Cost", mr: "६.१ — खर्चाची भूगोल" },
      title: { en: "The consumer sees the product. Not the supply chain.", mr: "ग्राहक उत्पादन पाहतो. पुरवठा साखळी नाही." },
      intro: { en: "A consumer buying an EV, a smartphone, or using a data centre sees the finished product. They do not see the cobalt mine in the DRC, the nickel smelter in Indonesia, the REE extraction site in Kachin State, or the lithium brine pond in the Atacama. This section maps that invisible geography.",
               mr: "EV खरेदी करणारा, स्मार्टफोन वापरणारा किंवा डेटा सेंटर वापरणारा ग्राहक तयार उत्पादन पाहतो. ते DRC मधील कोबाल्ट खाण, इंडोनेशियातील निकेल स्मेल्टर, काचीन राज्यातील REE उत्खनन स्थळ किंवा अटाकामामधील लिथियम ब्राइन तलाव पाहत नाही." },
      keyInsight: { en: "The energy transition has not eliminated extraction. It has relocated it — from oil fields to mineral deposits, and from regions with strong environmental governance to regions with weaker enforcement.",
                    mr: "ऊर्जा संक्रमणाने उत्खनन संपवले नाही. त्याने ते स्थलांतरित केले — तेल क्षेत्रांपासून खनिज निक्षेपांकडे, आणि मजबूत पर्यावरणीय प्रशासन असलेल्या प्रदेशांपासून कमकुवत अंमलबजावणी असलेल्या प्रदेशांकडे." },
      waterStress: {
        stat: "16%",
        label: { en: "Share of critical mineral mines, deposits and districts already located in areas facing high or extremely high water stress (WRI 2024)", mr: "उच्च किंवा अत्यंत उच्च जल तणावाला सामोरे जाणाऱ्या भागात आधीच असलेल्या महत्त्वाच्या खनिज खाणी, निक्षेप आणि जिल्ह्यांचा वाटा (WRI २०२४)" },
        src: "wri_water_2024"
      },
      waterStressDetail: {
        title: { en: "For the two most water-intensive minerals, the picture is starker", mr: "दोन सर्वाधिक पाणी-केंद्रित खनिजांसाठी, चित्र अधिक गंभीर आहे" },
        body: { en: "The 16% figure above is a broad average across all critical mineral mines and districts. For lithium and copper specifically -- the two minerals with the highest water requirements -- the IEA finds that over 50% of today's production is concentrated in areas with high water stress. In Chile alone, roughly 80% of copper output comes from mines in high water stress and arid areas. The two figures are not contradictory: they describe different scopes (all minerals vs. the two most water-intensive ones), but together they show that water risk is concentrated precisely where the energy transition's demand growth is fastest.", mr: "वरील १६% आकडा सर्व महत्त्वाच्या खनिज खाणी आणि जिल्ह्यांमधील एक व्यापक सरासरी आहे. विशेषतः लिथियम आणि तांब्यासाठी -- सर्वाधिक पाण्याची आवश्यकता असलेली दोन खनिजे -- IEA ला आढळले की आजच्या उत्पादनापैकी ५०% पेक्षा जास्त उच्च जल तणाव असलेल्या भागात केंद्रित आहे. केवळ चिलीमध्ये, सुमारे ८०% तांबे उत्पादन उच्च जल तणाव आणि शुष्क भागातील खाणींमधून येते." },
        src: "iea_role_critical_2025"
      },
      sources: ["global_witness_2024", "iea_outlook_2025", "iea_role_critical_2025"]
    },

    // ── 6.2 — CASE STUDIES ──
    {
      id: "human_62",
      label: { en: "6.2 — Case Studies: Where the Cost Falls", mr: "६.२ — केस स्टडी: खर्च कुठे पडतो" },
      title: { en: "Three supply chains, three different cost structures", mr: "तीन पुरवठा साखळ्या, तीन वेगळ्या खर्च संरचना" },
      intro: { en: "The human and environmental costs of critical mineral supply chains are not uniform. They vary by mineral, by geography, by production method, and by governance quality. Three cases illustrate the range.",
               mr: "महत्त्वाच्या खनिज पुरवठा साखळ्यांचे मानवी आणि पर्यावरणीय खर्च एकसमान नाहीत. ते खनिजानुसार, भूगोलानुसार, उत्पादन पद्धतीनुसार आणि प्रशासनाच्या गुणवत्तेनुसार बदलतात." },
      cases: [
        {
          id: "chile_lithium",
          location: { en: "Atacama Desert, Chile — Lithium", mr: "अटाकामा वाळवंट, चिली — लिथियम" },
          color: "#D4A017",
          body: { en: "Chile's Salar de Atacama holds some of the world's largest lithium reserves and produces a significant share of global lithium carbonate. Extraction uses brine pumping — pulling lithium-rich saltwater to the surface and evaporating it in large open ponds. The process is water-intensive in one of the driest places on Earth. Lithium and copper extraction in the region have reportedly consumed over 65% of the local water supply (WRI 2024), depleting sources used by the Lickanantay indigenous communities — present in the region for approximately 11,000 years — for farming and livestock. A 2024 study found the salt flat is subsiding by up to 2 centimetres per year due to extraction activity. In October 2024, the Council of Atacameño Peoples (representing 18 indigenous communities) filed a formal legal complaint. Attempted governance solutions have created their own fractures: a 2024 benefit-sharing deal between Codelco and local communities divided villages that had previously been united in opposition.",
                 mr: "चिलीच्या Salar de Atacama मध्ये जगातील काही सर्वात मोठे लिथियम साठे आहेत. उत्खनन प्रक्रियेत ब्राइन पंपिंग वापरली जाते — लिथियम-समृद्ध खारे पाणी पृष्ठभागावर खेचणे. ही प्रक्रिया पृथ्वीवरील सर्वात कोरड्या ठिकाणी पाण्याची मोठी मागणी करते. WRI २०२४ नुसार, या प्रदेशातील लिथियम आणि तांबे उत्खनानाने स्थानिक पाण्याचा पुरवठा ६५% पेक्षा जास्त वापरला आहे. ऑक्टोबर २०२४ मध्ये, Atacameño लोकांच्या परिषदेने (१८ स्थानिक समुदायांचे प्रतिनिधित्व करणारी) औपचारिक कायदेशीर तक्रार दाखल केली." },
          inference: { en: "The Atacama case illustrates a structural governance dilemma: even where legal frameworks exist and companies offer benefit-sharing, the underlying resource conflict between industrial extraction and indigenous water rights remains unresolved.", mr: "अटाकामा प्रकरण एक संरचनात्मक प्रशासन दुविधा दर्शवते: जरी कायदेशीर चौकटी अस्तित्वात असल्या आणि कंपन्या लाभ-वाटप ऑफर करत असल्या, तरीही औद्योगिक उत्खनन आणि स्थानिक पाणी अधिकार यांच्यातील मूलभूत संसाधन संघर्ष अनिराकृत राहतो." },
          sources: ["wri_water_2024", "mongabay_chile_2024"]
        },
        {
          id: "drc_cobalt",
          location: { en: "Democratic Republic of Congo — Cobalt", mr: "काँगोचे लोकशाही प्रजासत्ताक — कोबाल्ट" },
          color: "#4A148C",
          body: { en: "DRC produces approximately 76% of global mined cobalt (USGS MCS 2025, up from 74% the prior year). The ERC/Greed of Green investigation (2024, involving newsrooms from 11 countries) documented chronic health issues in communities near cobalt mining areas. The DRC case requires a critical distinction: industrial mines and artisanal & small-scale mines (ASM) are not the same. ASM accounts for roughly 10-20% of DRC's cobalt supply but is where child labour concerns and acute health risks are concentrated -- children have been found at an estimated 30% of cobalt ASM sites, which operate outside formal oversight systems. Large industrial operations are not the same problem. The structural problem is separate from either: DRC bears the environmental and social costs of extraction but processes almost none of its cobalt -- China refines roughly 78% of the world's cobalt. Beyond this trade pattern, ownership itself is concentrated: under the 2007 Sicomines resources-for-infrastructure agreement, Chinese firms hold ownership stakes in 15 of DRC's 19 operating cobalt mines. Most DRC cobalt leaves as raw ore or intermediate (cobalt hydroxide), is refined in China, and returns as battery components worth many times the original export value. DRC captures the environmental cost. Others capture the industrial value -- and increasingly, the upstream value too.",
                 mr: "DRC जागतिक खाण कोबाल्टपैकी अंदाजे ७६% उत्पादन करते (USGS MCS २०२५, मागील वर्षीच्या ७४% वरून वाढले). ERC/Greed of Green तपासणी (२०२४, ११ देशांतील वृत्त संस्थांचा समावेश) ने कोबाल्ट खाण क्षेत्रांजवळील समुदायांमध्ये तीव्र आरोग्य समस्यांचे दस्तावेजीकरण केले. एक महत्त्वाचा फरक: ASM DRC च्या कोबाल्ट पुरवठ्यापैकी सुमारे १०-२०% आहे, पण बाल कामगार आणि तीव्र आरोग्य धोके येथेच केंद्रित आहेत -- अंदाजे ३०% कोबाल्ट ASM स्थळांवर मुले आढळली आहेत. मोठ्या औद्योगिक ऑपरेशन्स ही वेगळी समस्या आहे. संरचनात्मक समस्या वेगळी आहे: DRC उत्खननाचा पर्यावरणीय आणि सामाजिक खर्च सहन करते पण त्याच्या जवळजवळ कोणत्याही कोबाल्टवर प्रक्रिया करत नाही -- चीन जगातील सुमारे ७८% कोबाल्ट शुद्ध करतो. याशिवाय, २००७ च्या Sicomines करारानुसार, चिनी कंपन्यांची DRC च्या १९ पैकी १५ कार्यरत कोबाल्ट खाणींमध्ये मालकी हिस्सेदारी आहे." },
          inference: { en: "[OUR INFERENCE] DRC illustrates how value-chain position determines who captures value and who absorbs costs — independently of any governance quality question. The Sicomines ownership pattern also shows this is not only a trade/processing-location issue: even the upstream mining assets themselves are substantially Chinese-owned, which has direct implications for how 'diversifying away from DRC cobalt' would actually need to work (see 5.0.2's discussion of ownership vs. geography for nickel).", mr: "[आपला अनुमान] DRC हे दाखवते की मूल्य साखळी स्थान कोण मूल्य मिळवतो आणि कोण खर्च शोषतो हे निर्धारित करते. Sicomines मालकी नमुना हे देखील दाखवतो की हा केवळ व्यापार/प्रक्रिया-स्थानाचा मुद्दा नाही: अगदी उर्ध्वप्रवाह खाण मालमत्तादेखील मोठ्या प्रमाणात चिनी-मालकीच्या आहेत." },
          sources: ["usgs_mcs_2025_cobalt", "erc_greed_green_2024", "csis_cobalt_2025"]
        },
        {
          id: "serbia_lithium",
          location: { en: "Jadar Valley, Serbia — Lithium (governance in a democracy)", mr: "जाडर व्हॅली, सर्बिया — लिथियम (लोकशाहीतील प्रशासन)" },
          color: "#C62828",
          body: { en: "The Jadar Valley in western Serbia holds what would be Europe's largest lithium deposit. Rio Tinto's proposed Jadar mine would have met approximately 90% of Europe's then-current lithium needs. Permits were granted in 2017, cancelled in 2022 following mass protests over water and agricultural land risks, reinstated in 2024 under EU pressure, then stalled again after wider protests — ultimately contributing to the resignation of Serbia's Prime Minister in January 2025. A March 2025 poll found 63.5% of the Serbian population opposing the mine. This case is notable because it is a European democracy with established legal and regulatory frameworks — not a governance-weak developing state. Environmental governance failures in critical mineral development are not confined to the Global South.",
                 mr: "पश्चिम सर्बियामधील जाडर व्हॅलीत युरोपचा सर्वात मोठा लिथियम निक्षेप असेल. २०१७ मध्ये परवानगी दिली, २०२२ मध्ये मोठ्या निदर्शनांनंतर रद्द, २०२४ मध्ये EU दबावाखाली पुनर्स्थापित, नंतर पुन्हा स्थगित — अखेरीस जानेवारी २०२५ मध्ये सर्बियाच्या पंतप्रधानांच्या राजीनाम्यास कारणीभूत. मार्च २०२५ च्या सर्वेक्षणात ६३.५% सर्बियन लोकसंख्येने खाणीला विरोध दर्शवला." },
          inference: { en: "Serbia demonstrates that the tension between mineral security urgency and community environmental rights is not a governance problem limited to weak states. It is a structural problem of the transition itself.", mr: "सर्बिया दाखवतो की खनिज सुरक्षा तातडी आणि समुदाय पर्यावरणीय अधिकार यांच्यातील तणाव कमकुवत राज्यांपुरती मर्यादित प्रशासन समस्या नाही. ही संक्रमणाचीच एक संरचनात्मक समस्या आहे." },
          sources: ["springer_serbia_2025", "bbc_serbia_2024"]
        }
      ]
    },

    // ── 6.3 — RECYCLING: NOT SIMPLE ──
    {
      id: "human_63",
      label: { en: "6.3 — Recycling: The Tensions Behind the Promise", mr: "६.३ — पुनर्वापर: आश्वासनामागील तणाव" },
      title: { en: "Recycling reduces upstream pressure — but it is not without its own costs and constraints", mr: "पुनर्वापर वरच्या प्रवाहाचा दबाव कमी करतो — परंतु त्याचे स्वतःचे खर्च आणि मर्यादा आहेत" },
      intro: { en: "Recycling critical minerals is one of the most important tools for reducing long-term extraction pressure. IEA projections show recycled copper and cobalt could reduce 2040 primary supply requirements by 30%, and lithium and nickel by 15%. But recycling is not a simple solution. It involves its own environmental costs, structural tensions, and capital requirements.",
               mr: "महत्त्वाच्या खनिजांचा पुनर्वापर दीर्घकालीन उत्खनन दबाव कमी करण्यासाठी सर्वात महत्त्वाच्या साधनांपैकी एक आहे. IEA च्या अंदाजानुसार, पुनर्वापरलेले तांबे आणि कोबाल्ट २०४० च्या प्राथमिक पुरवठा आवश्यकता ३०% ने कमी करू शकतात. परंतु पुनर्वापर एक सोपा उपाय नाही." },
      tensions: [
        {
          title: { en: "Recycling processes have their own environmental costs", mr: "पुनर्वापर प्रक्रियांचे स्वतःचे पर्यावरणीय खर्च आहेत" },
          body: { en: "The two dominant battery recycling methods — pyrometallurgy and hydrometallurgy — each carry environmental burdens. Pyrometallurgy heats batteries to 1,200–1,600°C, producing toxic gas emissions including hydrogen fluoride and phosphoryl fluoride from electrolyte components. It also fails to recover lithium, aluminum, and graphite — which end up as slag. Hydrometallurgy operates at lower temperatures and recovers more materials, but requires strong acids (sulphuric, hydrochloric, nitric) and generates liquid waste streams requiring further treatment. Direct recycling is cleaner but is not yet commercial at scale. The 80% lower emissions figure cited for recycling is a comparison of recycled vs virgin material production — not a full lifecycle assessment of the recycling process itself. Pyrometallurgical recycling still produces emissions equivalent to approximately 15–19% of making a new battery cell.",
                 mr: "दोन प्रमुख बॅटरी पुनर्वापर पद्धती — पायरोमेटलर्जी आणि हायड्रोमेटलर्जी — प्रत्येकाचे पर्यावरणीय बोझे आहेत. पायरोमेटलर्जी बॅटऱ्या १,२००–१,६००°C पर्यंत गरम करते, हायड्रोजन फ्लोराइड आणि फॉस्फोरिल फ्लोराइडसह विषारी वायू उत्सर्जन निर्माण करते. हायड्रोमेटलर्जीला मजबूत आम्ल आवश्यक आहेत आणि पुढील उपचार आवश्यक असलेल्या द्रव कचरा प्रवाह तयार होतात." },
          src: "acs_est_2024"
        },
        {
          title: { en: "Longevity vs recyclability: an unresolved design tension", mr: "दीर्घायुष्य विरुद्ध पुनर्वापरक्षमता: अनिराकृत डिझाइन तणाव" },
          body: { en: "Batteries designed for longer first lives — a legitimate environmental goal — are often joined using welding and adhesive bonding techniques that make disassembly difficult. 'Design for disassembly' is an emerging principle but not yet standard practice. A further tension: LFP batteries, which are designed to last longer and have a lower cobalt footprint, yield less economically valuable material when recycled. As cheaper battery chemistries emerge, recycled materials from older batteries may not be usable in newer designs — reducing the economic case for recycling the older stock. Battery chemistry is evolving faster than recycling infrastructure can adapt.",
                 mr: "दीर्घ पहिल्या जीवनासाठी डिझाइन केलेल्या बॅटऱ्या — एक वैध पर्यावरणीय उद्दिष्ट — अनेकदा वेल्डिंग आणि चिकट बाँडिंग तंत्रांचा वापर करून जोडल्या जातात ज्यामुळे विघटन कठीण होते. 'डिसअसेम्ब्लीसाठी डिझाइन' हे उदयोन्मुख तत्त्व आहे परंतु अजून मानक सराव नाही." },
          src: "batteries_2024"
        },
        {
          title: { en: "Production volume drives recycling feedstock — with a decade-long lag", mr: "उत्पादन मात्रा पुनर्वापर फीडस्टॉक चालवते — दशकभराच्या विलंबासह" },
          body: { en: "EV batteries have an 8–10 year lifespan. The EV production boom began around 2020. This means large-scale recycling feedstock will not arrive until the late 2020s to 2030s. In the meantime, recycling capacity must be built speculatively — before the feedstock volumes are confirmed. This creates a capital allocation problem: investment must occur years before returns are realised. A 2025 study projects recycling could cover around 61% of annual EV battery demand by 2050 in California — but this requires collection infrastructure, processing chemistry, and policy frameworks to be built now.",
                 mr: "EV बॅटऱ्यांचे आयुष्य ८–१० वर्षे असते. EV उत्पादनाचा उछाल २०२० च्या आसपास सुरू झाला. याचा अर्थ असा की मोठ्या प्रमाणात पुनर्वापर फीडस्टॉक २०२० च्या उत्तरार्धात ते २०३० च्या दशकापर्यंत येणार नाही. या दरम्यान, पुनर्वापर क्षमता सट्टेबाजीने बांधावी लागेल — फीडस्टॉक मात्रा निश्चित होण्यापूर्वी." },
          src: "acs_est_2025_second_life"
        },
        {
          title: { en: "Second life vs recycling: a complementary, not competing, relationship", mr: "दुसरे जीवन विरुद्ध पुनर्वापर: स्पर्धात्मक नाही, पूरक संबंध" },
          body: { en: "Retired EV batteries (typically at 70–80% remaining capacity) can serve a second life in stationary energy storage — grid support, residential, commercial — before being recycled. This extends the value chain without requiring immediate recycling and reduces demand for new battery production. In 2020, approximately 550,000 EV batteries were decommissioned; by 2035 approximately 150 million additional batteries are projected. The second-life and recycling pathways are not in competition — batteries can be recycled after their second-life application concludes. However, inconsistent battery degradation patterns, lack of standardised testing, and fire risks during storage complicate second-life implementation.",
                 mr: "सेवानिवृत्त EV बॅटऱ्या (सामान्यतः ७०–८०% उर्वरित क्षमतेवर) स्थिर ऊर्जा साठवणात दुसरे जीवन देऊ शकतात — पुनर्वापरापूर्वी. हे त्वरित पुनर्वापरासाठी नवीन बॅटरी उत्पादनाची मागणी कमी करते. २०२० मध्ये, अंदाजे ५५०,००० EV बॅटऱ्या सेवामुक्त केल्या गेल्या." },
          src: "acs_est_2025_second_life"
        }
      ],
      recyclingStats: {
        caption: { en: "What recycling can achieve — IEA projections (STEPS scenario)", mr: "पुनर्वापर काय साध्य करू शकते — IEA अंदाज (STEPS परिस्थिती)" },
        src: "iea_recycling_2024",
        rows: [
          { mineral: { en: "Copper + Cobalt", mr: "तांबे + कोबाल्ट" }, reduction: "30%",  timeline: "2040", note: { en: "Reduction in primary supply requirement", mr: "प्राथमिक पुरवठा आवश्यकतेत घट" } },
          { mineral: { en: "Lithium + Nickel", mr: "लिथियम + निकेल" }, reduction: "15%",  timeline: "2040", note: { en: "Reduction in primary supply requirement", mr: "प्राथमिक पुरवठा आवश्यकतेत घट" } },
          { mineral: { en: "Mining investment avoided", mr: "टाळलेली खाण गुंतवणूक" }, reduction: "~30%", timeline: "2040", note: { en: "Without recycling, mining capital requirements would be ~30% higher", mr: "पुनर्वापराशिवाय, खाण भांडवल आवश्यकता ~३०% जास्त असतील" } }
        ]
      },
      riofrancos2023: {
        title: { en: 'The demand-reduction pathway (Riofrancos et al., Climate and Community Project, 2023)', mr: 'मागणी-कपात मार्ग (Riofrancos et al., २०२३)' },
        finding: { en: 'A 2023 material flow analysis of US transportation decarbonisation scenarios found that reducing car dependency and limiting EV battery size can lower lithium demand by 18–66% compared to a car-centric status quo. Even under best-case recycling assumptions (98% collection and recovery), recycling alone cannot meet 50% of demand in 2050. The study modelled four pathways: electrifying the car-dependent status quo (most lithium-intensive) through to an ambitious mode-shift scenario with mass transit, cycling, and smaller vehicles. Key finding: demand-side changes are more effective than recycling alone at reducing mining pressure.',
                   mr: '२०२३ च्या भौतिक प्रवाह विश्लेषणाने आढळले की कार अवलंबित्व कमी करणे आणि EV बॅटरीचा आकार मर्यादित केल्याने कार-केंद्रित स्थिती क्वो च्या तुलनेत लिथियम मागणी १८-६६% कमी होऊ शकते.' },
        keyStats: [
          { stat: '66%', label: { en: 'Maximum lithium demand reduction possible via ambitious mode shift + smaller batteries (US transportation sector)', mr: 'अभिलाषी मोड शिफ्ट + लहान बॅटऱ्यांद्वारे जास्तीत जास्त लिथियम मागणी कपात (US वाहतूक क्षेत्र)' } },
          { stat: '3×', label: { en: 'US EV lithium demand vs entire current global production, if status quo is extended to 2050', mr: '२०५० पर्यंत स्थिती क्वो वाढवल्यास जागतिक सध्याच्या उत्पादनाच्या ३ पट US EV लिथियम मागणी' } },
          { stat: '79%', label: { en: 'Share of known US lithium deposits within 35 miles of Native American reservations', mr: 'मूळ अमेरिकन आरक्षणांपासून ३५ मैलांच्या आत ज्ञात US लिथियम निक्षेपांचा वाटा' } }
        ],
        inference: { en: '[OUR INFERENCE] The Riofrancos et al. finding is relevant beyond the US context: it establishes that the volume of extraction required is not a fixed given — it depends on what kind of transportation system and what battery chemistry decisions consuming countries make. India has an opportunity to leapfrog car-dependency by investing in public transit infrastructure, which would simultaneously reduce future mineral import requirements and improve urban livability.', mr: '[आपला अनुमान] Riofrancos et al. चे निष्कर्ष US संदर्भाच्या पलीकडे प्रासंगिक आहे: आवश्यक उत्खननाचे प्रमाण निश्चित नाही — ते ग्राहक देश काय प्रकारची वाहतूक प्रणाली बनवतात यावर अवलंबून आहे.' },
        src: 'riofrancos_2023'
      },
      recyclingConstraint: { en: "Current lithium recycling supplies less than 3% of demand. Most recycling infrastructure is concentrated in East Asia — two-thirds of global capacity was in East Asia at end of 2021. The environmental benefit of recycling (80% lower emissions vs primary production) assumes the recycling process itself uses clean energy — which is not guaranteed when recycling facilities run on coal-intensive grids.",
                             mr: "सध्याचे लिथियम पुनर्वापर मागणीच्या ३% पेक्षा कमी पुरवतो. बहुतेक पुनर्वापर पायाभूत सुविधा पूर्व आशियात केंद्रित आहेत. पुनर्वापराचा पर्यावरणीय फायदा (प्राथमिक उत्पादनाच्या तुलनेत ८०% कमी उत्सर्जन) गृहीत धरतो की पुनर्वापर प्रक्रिया स्वतः स्वच्छ ऊर्जा वापरते — जे हमी नाही." },
      policyLeversNote: {
        title: { en: "Forcing the market: the EU's recycled-content mandates and digital battery passports", mr: "बाजारावर सक्ती: EU चे पुनर्वापरित-सामग्री आदेश आणि डिजिटल बॅटरी पासपोर्ट" },
        body: { en: "Voluntary recycling has not scaled fast enough on its own, so the EU Battery Regulation (2023/1542) now mandates minimum recycled-content shares in new EV batteries: 16% cobalt, 6% lithium, and 6% nickel from August 2031, rising to 26% cobalt, 12% lithium, and 15% nickel from 2036 (lead remains at 85% throughout). It also sets material recovery targets from waste batteries -- 50% lithium recovery by end-2027 rising to 80% by 2031, and 90% for cobalt/copper/nickel by 2027 rising to 95% by 2031. Alongside this, mandatory Digital Battery Passports are being phased in from 2027, tracking each battery's composition, carbon footprint, and state-of-health data -- intended to make recycling and second-life sorting more efficient by removing the current guesswork about what is inside a given battery.", mr: "स्वैच्छिक पुनर्वापर स्वतःहून पुरेसे वाढले नाही, म्हणून EU बॅटरी नियमन (२०२३/१५४२) आता नवीन EV बॅटऱ्यांमध्ये किमान पुनर्वापरित-सामग्री वाटा अनिवार्य करते: ऑगस्ट २०३१ पासून १६% कोबाल्ट, ६% लिथियम आणि ६% निकेल, २०३६ पासून २६% कोबाल्ट, १२% लिथियम आणि १५% निकेल पर्यंत वाढते. हे टाकाऊ बॅटऱ्यांमधून सामग्री पुनर्प्राप्ती उद्दिष्टेही ठरवते -- २०२७ च्या अखेरीस ५०% लिथियम पुनर्प्राप्ती २०३१ पर्यंत ८०% पर्यंत वाढते. याशिवाय, २०२७ पासून अनिवार्य डिजिटल बॅटरी पासपोर्ट टप्प्याटप्प्याने आणले जात आहेत." },
        src: "eu_battery_reg_2023",
        inference: { en: "[OUR INFERENCE] India's own Battery Waste Management Rules 2022 and EPR framework are directionally similar but currently lack the specific recycled-content percentage mandates the EU regulation sets. As India's recycling incentive scheme (see Tab 4, 5.0.4) builds capacity, recycled-content mandates -- not just collection targets -- may be a useful next policy step to ensure that capacity translates into actual material reuse rather than export of recovered black mass.", mr: "[आपला अनुमान] भारताचे स्वतःचे बॅटरी कचरा व्यवस्थापन नियम २०२२ आणि EPR चौकट दिशात्मकदृष्ट्या समान आहेत पण सध्या EU नियमनाने ठरवलेल्या विशिष्ट पुनर्वापरित-सामग्री टक्केवारी आदेशांचा अभाव आहे." }
      },
      sources: ["iea_recycling_2024", "iea_outlook_2025", "acs_est_2024", "batteries_2024", "eu_battery_reg_2023"]
    },

    // ── 6.4 — RESPONSIBLE MINING: WHY IT IS HARD ──
    {
      id: "human_64",
      label: { en: "6.4 — Responsible Mining: The Governance Challenge", mr: "६.४ — जबाबदार खाणकाम: प्रशासन आव्हान" },
      title: { en: "Standards exist. Monitoring them is the problem.", mr: "मानके अस्तित्वात आहेत. त्यांचे निरीक्षण हीच समस्या आहे." },
      intro: { en: "Multiple international frameworks exist for responsible mineral sourcing: the Initiative for Responsible Mining Assurance (IRMA), the Copper Mark, the Towards Sustainable Mining standard, and the EU's Conflict Minerals Regulation. The IEA Policy Tracker now covers over 450 policies across 35 countries. The gap is not the absence of frameworks — it is the structural difficulty of enforcing them in regions where extraction is most concentrated.",
               mr: "जबाबदार खनिज सोर्सिंगसाठी अनेक आंतरराष्ट्रीय चौकटी अस्तित्वात आहेत. IEA धोरण ट्रॅकर आता ३५ देशांमध्ये ४५० पेक्षा जास्त धोरणे समाविष्ट करतो. अंतर म्हणजे चौकटींची अनुपस्थिती नाही — हे त्यांना लागू करण्याची संरचनात्मक अडचण आहे जेथे उत्खनन सर्वात केंद्रित आहे." },
      challenges: [
        {
          title: { en: "Technology and process: R&D gap", mr: "तंत्रज्ञान आणि प्रक्रिया: R&D अंतर" },
          body: { en: "Environmentally responsible mining requires new technologies for which industrial-scale proof of concept often does not yet exist. Direct lithium extraction (DLE) — which could dramatically reduce water consumption vs brine evaporation — is promising but not yet commercially proven at scale. Ionic adsorption clay (IAC) processing for rare earths offers lower energy and capital intensity but requires expertise concentrated in China. Dry-stack tailings storage (replacing conventional tailings ponds, which carry spill risks) has been proposed for projects like Jadar but adds costs and requires site-specific engineering. The IEA's 2025 innovation analysis identifies AI-assisted exploration, novel synthetic graphite production, and DLE as key opportunities — but notes that diversifying supply faces 'significant technological and cost bottlenecks.'",
                 mr: "पर्यावरणदृष्ट्या जबाबदार खाणकामासाठी नवीन तंत्रज्ञान आवश्यक आहे ज्यासाठी औद्योगिक-स्तरावर प्रूफ-ऑफ-कॉन्सेप्ट अनेकदा अद्याप अस्तित्वात नाही. Direct Lithium Extraction (DLE) आश्वासक आहे परंतु अद्याप मोठ्या प्रमाणात व्यावसायिकरित्या सिद्ध झालेले नाही." },
          src: "iea_outlook_2025"
        },
        {
          title: { en: "Government monitoring: the balance problem", mr: "सरकारी निरीक्षण: समतोल समस्या" },
          body: { en: "Governments face a structural tension in monitoring mining operations: they simultaneously need mineral revenue (for development, for energy transition funding), and need to enforce standards that can reduce that revenue by increasing costs or delaying projects. This tension is not a failure of political will alone — it is structural. UNCTAD's 2025 report on critical minerals explicitly notes that without strong safeguards, mineral booms risk reinforcing extractive patterns and environmental damage, and that market forces alone will not deliver inclusive outcomes. The IEA's refining concentration data confirms the governance problem: most minerals are processed in regions where grids have higher carbon intensity, relying largely on coal-based electricity. High-governance production is more expensive and builds market share more slowly.",
                 mr: "सरकारांना खाण ऑपरेशन्सच्या निरीक्षणात एक संरचनात्मक तणावाला सामोरे जावे लागते: त्यांना एकाच वेळी खनिज महसूल आवश्यक आहे आणि खर्च वाढवून किंवा प्रकल्प विलंब करून तो महसूल कमी करू शकणारे मानके लागू करणे आवश्यक आहे." },
          src: "unctad_2025"
        },
        {
          title: { en: "Community rights vs supply urgency: an unresolved tension", mr: "समुदाय अधिकार विरुद्ध पुरवठा तातडी: अनिराकृत तणाव" },
          body: { en: "The Serbia/Jadar case (2021–2025) demonstrates that environmental governance failures are not confined to developing countries. A 2025 Springer study of the Jadar project identifies a 'security-cost-sustainability trilemma': mineral security urgency, cost-competitiveness pressures, and sustainability requirements pull in different directions simultaneously. EU supply chain pressure — needing lithium for its battery mandate — directly influenced the reinstatement of Serbian mining permits over the objections of Serbian communities. The Springer Nature 2025 review of responsible mining notes that 'social innovations have not kept pace with investment in mineral development, putting the wellbeing and rights of Indigenous peoples and local communities at risk.'",
                 mr: "सर्बिया/जाडर प्रकरण (२०२१–२०२५) दाखवते की पर्यावरणीय प्रशासन अपयश विकसनशील देशांपुरते मर्यादित नाहीत. EU पुरवठा साखळी दबाव — बॅटरी जनादेशासाठी लिथियम आवश्यक आहे — सर्बियन समुदायांच्या आक्षेपांवर सर्बियन खाण परवान्यांच्या पुनर्स्थापनावर थेट प्रभाव टाकला." },
          src: "springer_mining_2025"
        }
      ],
      commercialRiskNote: {
        title: { en: "When governance issues become commercial issues", mr: "जेव्हा प्रशासन समस्या व्यावसायिक समस्या बनतात" },
        body: { en: "Two 2024 episodes in Indonesia and the DRC show how community-rights and regulatory issues can directly affect project economics -- though the causal lines are not always as clean as headlines suggest. In June 2024, BASF and Eramet withdrew from a USD 2.6 billion nickel-cobalt refinery planned for Weda Bay, Halmahera, Indonesia. The companies officially cited a 'strategic adjustment' given near-term nickel oversupply -- but the withdrawal was widely reported alongside concerns that the project's feeder mine threatened the forest home of the uncontacted Forest Tobelo people, a controversy Tesla had separately flagged in its own 2023 impact report. Separately, in April 2024, DRC authorities suspended the COMMUS copper-cobalt mine near Kolwezi (majority-owned by China's Zijin Mining) after export shipments were found to have radioactivity levels exceeding regulatory thresholds; the suspension was lifted about a month later once compliance was verified. Neither episode proves that ESG concerns alone drive commercial outcomes -- in both cases, economic and regulatory factors were also clearly at play -- but both show that governance and reputational issues are now part of the risk calculus that investors and regulators weigh alongside price and supply fundamentals.", mr: "इंडोनेशिया आणि DRC मधील २०२४ च्या दोन घटना दाखवतात की समुदाय-अधिकार आणि नियामक समस्या प्रकल्प अर्थशास्त्रावर थेट परिणाम करू शकतात -- जरी कारणात्मक संबंध मुख्यपानांवरील मथळ्यांप्रमाणे नेहमी स्पष्ट नसतात. जून २०२४ मध्ये, BASF आणि Eramet यांनी इंडोनेशियाच्या वेडा बे, हलमाहेरा येथे नियोजित USD २.६ अब्ज निकेल-कोबाल्ट शुद्धीकरण प्रकल्पातून माघार घेतली. कंपन्यांनी अधिकृतपणे निकेलच्या अल्पकालीन अतिरिक्त पुरवठ्यामुळे 'धोरणात्मक समायोजन' असे कारण दिले -- पण ही माघार फॉरेस्ट टोबेलो लोकांच्या जंगल घराला धोका निर्माण करणाऱ्या फीडर खाणीबद्दलच्या चिंतांसह मोठ्या प्रमाणावर वृत्त झाली. वेगळेपणे, एप्रिल २०२४ मध्ये, DRC अधिकाऱ्यांनी कोल्वेझीजवळील COMMUS तांबे-कोबाल्ट खाण (चीनच्या Zijin Mining च्या बहुसंख्य मालकीची) निर्यात शिपमेंट्समध्ये नियामक मर्यादेपेक्षा जास्त रेडिओअॅक्टिव्हिटी आढळल्यानंतर स्थगित केली; सुमारे एका महिन्यानंतर अनुपालन सत्यापित झाल्यावर स्थगिती मागे घेण्यात आली." },
        sources: ["mongabay_basf_eramet_2024", "miningweekly_commus_2024"]
      },
      frameworks: {
        label: { en: "Existing responsible mining frameworks (selected)", mr: "विद्यमान जबाबदार खाणकाम चौकटी (निवडलेल्या)" },
        items: [
          { name: "Initiative for Responsible Mining Assurance (IRMA)", scope: { en: "Comprehensive mine-site standard across environment, community, labour, business ethics", mr: "पर्यावरण, समुदाय, श्रम, व्यावसायिक नैतिकतेवर व्यापक खाण-स्थळ मानक" } },
          { name: "Towards Sustainable Mining (TSM)", scope: { en: "Mining Association of Canada framework, adopted in multiple countries", mr: "कॅनडाची खाण असोसिएशन चौकट, अनेक देशांमध्ये स्वीकारली" } },
          { name: "EU Conflict Minerals Regulation", scope: { en: "Requires sourcing of gold, tin, tungsten, tantalum from conflict-free areas", mr: "संघर्षमुक्त भागातून सोने, टिन, टंगस्टन, टँटलम सोर्सिंग आवश्यक" } },
          { name: "EU Battery Regulation (2027)", scope: { en: "Requires supply chain due diligence and recycled content thresholds for EV batteries", mr: "EV बॅटऱ्यांसाठी पुरवठा साखळी योग्य परिश्रम आणि पुनर्वापरित सामग्री उंबरठे आवश्यक" } }
        ],
        gap: { en: "Frameworks exist. The primary gap is adoption, enforcement capacity, and the structural conflict between responsible sourcing premiums and cost-competitive markets.", mr: "चौकटी अस्तित्वात आहेत. प्राथमिक अंतर म्हणजे स्वीकृती, अंमलबजावणी क्षमता आणि जबाबदार सोर्सिंग प्रीमियम आणि किंमत-स्पर्धात्मक बाजार यांच्यातील संरचनात्मक संघर्ष." }
      },
      sources: ["iea_outlook_2025", "wri_2025", "unctad_2025", "springer_mining_2025", "springer_serbia_2025"]
    },

    // ── 6.5 — THE CENTRAL QUESTION ──
    {
      id: "human_65",
      label: { en: "6.5 — The Central Question", mr: "६.५ — केंद्रीय प्रश्न" },
      title: { en: "Not whether to use minerals — but how to produce them responsibly, and who decides", mr: "खनिजे वापरायची की नाही नाही — तर ती जबाबदारीने कशी उत्पादित करायची, आणि कोण ठरवते" },
      intro: { en: "The challenge is not whether societies will use critical minerals. They will. The question is who bears the cost of producing them, who benefits, and whether the consuming countries — which have the most leverage over demand — are willing to price in the true costs of responsible production.",
               mr: "आव्हान हे नाही की समाज महत्त्वाची खनिजे वापरेल की नाही. ते वापरतील. प्रश्न असा आहे की त्यांच्या उत्पादनाची किंमत कोण भरतो, कोणाला फायदा होतो आणि ग्राहक देश — ज्यांचा मागणीवर सर्वाधिक प्रभाव आहे — जबाबदार उत्पादनाच्या खऱ्या खर्चाची किंमत मोजण्यास तयार आहेत का." },
      scorecard: [
        { issue: { en: "Water contamination and depletion risk",  mr: "जल प्रदूषण आणि ह्रास धोका" },              severity: "high",   note: { en: "16% of mines already in high water-stress regions (WRI 2024)", mr: "१६% खाणी आधीच उच्च जल-तणाव प्रदेशात (WRI २०२४)" } },
        { issue: { en: "Land disturbance and ecosystem damage",  mr: "जमीन विस्कळीत आणि पर्यावरणतंत्र नुकसान" },  severity: "high",   note: { en: "Most severe at mining stage; varies by deposit type and method", mr: "खाण टप्प्यावर सर्वात तीव्र; निक्षेप प्रकार आणि पद्धतीनुसार बदलते" } },
        { issue: { en: "Chemical waste from processing/refining", mr: "प्रक्रिया/शुद्धीकरणातील रासायनिक कचरा" },   severity: "high",   note: { en: "REE separation and battery recycling both generate hazardous waste streams", mr: "REE विभाजन आणि बॅटरी पुनर्वापर दोन्ही धोकादायक कचरा प्रवाह निर्माण करतात" } },
        { issue: { en: "Community displacement and water rights", mr: "समुदाय विस्थापन आणि पाणी अधिकार" },          severity: "high",   note: { en: "Atacama and DRC illustrate structural conflicts not resolved by compensation", mr: "अटाकामा आणि DRC नुकसान भरपाईद्वारे न सुटणारे संरचनात्मक संघर्ष दाखवतात" } },
        { issue: { en: "Recycling environmental costs",          mr: "पुनर्वापर पर्यावरणीय खर्च" },                severity: "medium", note: { en: "Pyrometallurgy produces toxic gas emissions; hydrometallurgy generates acid waste streams", mr: "पायरोमेटलर्जी विषारी वायू उत्सर्जन निर्माण करते; हायड्रोमेटलर्जी आम्ल कचरा प्रवाह निर्माण करते" } },
        { issue: { en: "Governance and monitoring capacity",     mr: "प्रशासन आणि निरीक्षण क्षमता" },              severity: "high",   note: { en: "Frameworks exist; structural conflict between enforcement and revenue needs remains", mr: "चौकटी अस्तित्वात आहेत; अंमलबजावणी आणि महसूल गरजा यांच्यातील संरचनात्मक संघर्ष कायम" } },
        { issue: { en: "R&D gap for cleaner extraction tech",    mr: "स्वच्छ उत्खनन तंत्रज्ञानासाठी R&D अंतर" },   severity: "medium", note: { en: "DLE, dry-stack tailings, IAC processing — promising but pre-commercial at scale", mr: "DLE, ड्राय-स्टॅक टेलिंग्ज, IAC प्रक्रिया — आशादायक परंतु मोठ्या प्रमाणात पूर्व-व्यावसायिक" } },
        { issue: { en: "Consumer awareness of upstream costs",   mr: "वरच्या प्रवाहाच्या खर्चाची ग्राहक जागरूकता" }, severity: "low",    note: { en: "Most end users have no visibility into the supply chains behind their products", mr: "बहुतेक अंतिम वापरकर्त्यांना त्यांच्या उत्पादनांमागील पुरवठा साखळींची दृश्यता नाही" } }
      ],
      closingInsight: { en: "The most effective long-term responses — scaling recycling, closing the R&D gap in extraction technology, applying and enforcing responsible sourcing standards — all require action from consuming countries, not just from producing ones. The consumer who benefits from clean technology is also best positioned to demand that it be produced responsibly. That demand has to be backed by pricing, procurement policy, and regulation — not just preference.",
                        mr: "सर्वात प्रभावी दीर्घकालीन प्रतिसाद — पुनर्वापर वाढवणे, उत्खनन तंत्रज्ञानातील R&D अंतर बंद करणे, जबाबदार सोर्सिंग मानके लागू करणे — सर्वांना ग्राहक देशांकडून कृती आवश्यक आहे, केवळ उत्पादक देशांकडून नाही. स्वच्छ तंत्रज्ञानाचा फायदा मिळवणारा ग्राहक ते जबाबदारीने तयार केले जाण्याची मागणी करण्यासाठी सर्वोत्तम स्थितीत आहे." },
      sources: ["iea_outlook_2025", "iea_recycling_2024", "unctad_2025", "springer_mining_2025", "wri_2025"]
    }
  ]
};

// ── ADDITIONAL SOURCES for Tab 6 (new entries for registry) ──
// These supplement the existing DB.sources registry
DB.sources.iea_recycling_2024 = {
  title: 'IEA Recycling of Critical Minerals 2024',
  url: 'https://www.iea.org/reports/recycling-of-critical-minerals',
  year: 2024
};
DB.sources.erc_greed_green_2024 = {
  title: 'Environmental Reporting Collective — Greed of Green: The Dark Side of Green Energy',
  url: 'https://greedofgreen.earth/p/',
  year: 2024
};
DB.sources.wri_water_2024 = {
  title: 'WRI — Critical Minerals Mining and Water Stress 2024',
  url: 'https://www.wri.org/insights/critical-minerals-mining-water-impacts',
  year: 2024
};
DB.sources.wri_2025 = {
  title: 'WRI — Critical Minerals Explained 2025',
  url: 'https://www.wri.org/insights/critical-minerals-explained',
  year: 2025
};
DB.sources.mongabay_chile_2024 = {
  title: 'Mongabay — Atacama Lithium Mining and Indigenous Communities 2024',
  url: 'https://news.mongabay.com/2024/12/as-lithium-mining-bleeds-atacama-salt-flat-dry-indigenous-communities-hit-back/',
  year: 2024
};
DB.sources.springer_serbia_2025 = {
  title: 'Mineral Economics — Jadar Lithium Project: Security-Cost-Sustainability Trilemma 2025',
  url: 'https://link.springer.com/article/10.1007/s13563-025-00517-7',
  year: 2025
};
DB.sources.springer_mining_2025 = {
  title: 'Sustainability Science — Values-Centred Approaches for Just Sustainability Transitions 2025',
  url: 'https://link.springer.com/article/10.1007/s11625-025-01726-3',
  year: 2025
};
DB.sources.acs_est_2024 = {
  title: 'ACS Environmental Science & Technology — LIB Recycling Life Cycle Assessment 2024',
  url: 'https://pubs.acs.org/doi/10.1021/acs.est.4c13838',
  year: 2024
};
DB.sources.acs_est_2025_second_life = {
  title: 'ACS Environmental Science & Technology — EV Battery Second Life and Recycling 2025',
  url: 'https://pubs.acs.org/doi/10.1021/acs.est.5c01823',
  year: 2025
};
DB.sources.batteries_2024 = {
  title: 'Batteries (MDPI) — Sustainable Battery Lifecycle and Second Life Applications 2024',
  url: 'https://doi.org/10.3390/batteries10080280',
  year: 2024
};
DB.sources.unctad_2025 = {
  title: 'UNCTAD — Critical Minerals, Critical Decisions: Industrial Policy for the Energy Transition 2025',
  url: 'https://unctad.org/publication/critical-minerals-critical-decisions-industrial-policy-energy-transition',
  year: 2025
};
DB.sources.bbc_serbia_2024 = {
  title: 'BBC — Serbian Protests Against Rio Tinto Lithium Mine 2024',
  url: 'https://www.bbc.co.uk/news/articles/cged9qgwrvyo',
  year: 2024
};


// ── NEW SOURCES: Benchmark Minerals + Riofrancos et al. 2023 ──
DB.sources.benchmark_minerals_2022 = {
  title: 'Benchmark Mineral Intelligence — How Many Mines Are Needed for the Energy Transition',
  url: 'https://source.benchmarkminerals.com/article/how-many-mines-are-needed-for-the-energy-transition',
  year: 2022
};
DB.sources.riofrancos_2023 = {
  title: 'Riofrancos et al. — Achieving Zero Emissions with More Mobility and Less Mining (Climate and Community Project, January 2023)',
  url: 'https://www.climateandcommunity.org/more-mobility-less-mining',
  year: 2023
};

// ── NEW SOURCES: PIIE, RAND Europe, CFR ──
DB.sources.piie_bankability_2026 = {
  title: "PIIE — Bankability of Critical Minerals is in the Eye of Three Beholders (2026)",
  url: "https://www.piie.com/blogs/realtime-economics/2026/bankability-critical-minerals-eye-three-beholders",
  year: 2026
};
DB.sources.rand_europe_2026 = {
  title: "RAND Europe — Old Priorities, New Contexts: China Rare Earth Policy (Ghiretti & Ellis, February 2026)",
  url: "https://www.rand.org/content/dam/rand/pubs/perspectives/PEA4700/PEA4756-1/RAND_PEA4756-1.pdf",
  year: 2026
};
DB.sources.cfr_csr101_2026 = {
  title: "CFR CSR No. 101 — Leapfrogging China Critical Minerals Dominance (Crebo-Rediker & Khan, February 2026)",
  url: "https://assets.cfr.org/images/CFR_CSR101_CriticalMinerals_Full_2026-02-12/CFR_CSR101_CriticalMinerals_Full_2026-02-12.pdf",
  year: 2026
};

DB.sources.sciencehistory_ree = {
  title: "Science History Institute — History and Future of Rare Earth Elements",
  url: "https://www.sciencehistory.org/education/classroom-activities/role-playing-games/case-of-rare-earth-elements/history-future",
  year: 2026
};

// ══════════════════════════════════════════════
// IEA GLOBAL CRITICAL MINERALS OUTLOOK 2025
// HOLDING BLOCK — verified datapoints not yet placed in a tab.
// Source: iea_outlook_2025. To be placed in relevant tabs in future sessions.
// ══════════════════════════════════════════════
DB.sources.rare_earth_exchanges_2025 = {
  title: "Rare Earth Exchanges — 6 Military Uses of Rare Earth Elements in Defense Technology",
  url: "https://rareearthexchanges.com/rare-earth-elements-in-defense-technology/",
  year: 2025
};

DB.sources.east_asia_forum_2026 = {
  title: "East Asia Forum — Policies That Enable China's Critical Minerals Edge (March 2026)",
  url: "https://eastasiaforum.org/2026/03/12/policies-that-enable-chinas-critical-minerals-edge/",
  year: 2026
};

DB.sources.csis_semiconductor_2024 = {
  title: "CSIS — Mineral Demands for Resilient Semiconductor Supply Chains: The Role of the Western Hemisphere (May 2024)",
  url: "https://www.csis.org/analysis/mineral-demands-resilient-semiconductor-supply-chains",
  year: 2024
};

DB.sources.aiddata_2025 = {
  title: "AidData / Business & Human Rights Resource Centre — China's State-Backed Financing of Overseas Transition Minerals (2025)",
  url: "https://www.business-humanrights.org/en/latest-news/report-china-heavily-finances-global-transition-minerals-through-state-banks-to-secure-control-research-shows/",
  year: 2025
};
DB.sources.iea_crrg_2024 = {
  title: "IEA — Establishment of the China Resources Recycling Group (Policy Note, 2024)",
  url: "https://www.iea.org/policies/25207-establishment-of-the-china-resources-recycling-group",
  year: 2024
};
DB.sources.csis_ree_tech_2024 = {
  title: "CSIS — What China's Ban on Rare Earths Processing Technology Exports Means (2024)",
  url: "https://www.csis.org/analysis/what-chinas-ban-rare-earths-processing-technology-exports-means",
  year: 2024
};
DB.sources.cnn_lfp_export_2025 = {
  title: "CNN Business — China Puts New Restrictions on EV Battery Technology (July 2025)",
  url: "https://www.cnn.com/2025/07/17/business/china-new-export-controls-ev-battery-intl-hnk",
  year: 2025
};

DB.sources.lynas_kalgoorlie_2024 = {
  title: "Mining Technology / Lynas Rare Earths -- Kalgoorlie Rare Earths Processing Facility Opening (Nov 2024) and Mt Weld Reserve Update (Aug 2024)",
  url: "https://www.mining-technology.com/news/lynas-opens-australias-first-rare/",
  year: 2024
};

DB.sources.pib_ree_482mt_2025 = {
  title: "PIB / Ministry of Mines -- Parliament Question on Rare Earth Minerals (July 2025): GSI 482.6 Mt REE Ore Resource Augmentation",
  url: "https://www.globalsecurity.org/wmd/library/news/india/2025/india-250723-india-pib02.htm",
  year: 2025
};
DB.sources.ncmm_processing_parks_2026 = {
  title: "Energy Watch -- Govt Identifies 4 States for Critical Mineral Processing Parks (April 2026)",
  url: "https://www.energywatch.in/critical-minerals/govt-identifies-4-states-for-critical-mineral-parks-pushes-processing-and-recycling-ecosystem",
  year: 2026
};
DB.sources.ncmm_recycling_scheme_2025 = {
  title: "PMO India -- Cabinet Approves Rs.1,500 crore Incentive Scheme for Critical Mineral Recycling (Sept 2025)",
  url: "https://www.pmindia.gov.in/en/news_updates/cabinet-approves-rs-1500-crore-incentive-scheme-to-promote-critical-mineral-recycling-in-the-country/",
  year: 2025
};

DB.sources.ncmm_jan2026_pdf = {
  title: "Ministry of Mines -- National Critical Mineral Mission Presentation (10 January 2026)",
  url: "https://mines.gov.in/admin/storage/ckeditor/NCMM'_1768030756.pdf",
  year: 2026
};
DB.sources.gsi_reasi_lithium_2023 = {
  title: "PIB -- GSI Establishes Lithium Inferred Resources (G3) of 5.9 Mt in Reasi, J&K (Feb 2023)",
  url: "https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=1897799",
  year: 2023
};

DB.sources.ioneer_rhyolite_2024 = {
  title: "Ioneer / BLM -- Rhyolite Ridge Lithium-Boron Project, First Lithium Mine Permit Approved Under Biden-era Critical Minerals Push (Oct 2024)",
  url: "https://www.businesswire.com/news/home/20241023742388/en/Ioneer%E2%80%99s-Rhyolite-Ridge-Lithium-Boron-Project-Receives-Final-Permit-Approval-from-U.S.-Federal-Government-Construction-Planned-for-2025",
  year: 2024
};
DB.sources.iea_mining_concentration_2025 = {
  title: "IEA Global Critical Minerals Outlook 2025 -- Mining Concentration and Production Shares",
  url: "https://www.iea.org/reports/global-critical-minerals-outlook-2025",
  year: 2025
};

DB.sources.iea_ree_2026 = {
  title: "IEA -- Rare Earth Elements: Pathways to Secure and Diversified Supply Chains (April 2026)",
  url: "https://www.iea.org/news/new-projects-partnerships-and-policies-are-needed-to-address-supply-chain-risks-for-rare-earth-elements",
  year: 2026
};
DB.sources.aspi_indonesia_nickel_2026 = {
  title: "ASPI The Strategist -- China's Investment in Indonesia is its Global Critical-Minerals Template (Jan 2026)",
  url: "https://www.aspistrategist.org.au/chinas-investment-in-indonesia-is-its-global-critical-minerals-template/",
  year: 2026
};

DB.sources.iea_outlook_2025_precursors = {
  title: "IEA Global Critical Minerals Outlook 2025 -- Beyond NMC: Supply Chain Issues for Emerging Battery Technologies",
  url: "https://www.iea.org/reports/global-critical-minerals-outlook-2025/beyond-nmc-batteries-supply-chain-issues-for-emerging-battery-technologies",
  year: 2025
};
DB.sources.bruegel_eu_battery_2025 = {
  title: "Bruegel -- Europe Has a Solid Basis for Battery and EV Manufacturing Growth (Dec 2025)",
  url: "https://www.bruegel.org/analysis/europe-has-solid-basis-battery-and-electric-vehicle-manufacturing-growth",
  year: 2025
};

DB.sources.iea_magnets_2026 = {
  title: "IEA -- With New Export Controls on Critical Minerals, Supply Concentration Risks Become Reality (2026)",
  url: "https://www.iea.org/commentaries/with-new-export-controls-on-critical-minerals-supply-concentration-risks-become-reality",
  year: 2026
};
DB.sources.niti_semiconductor_roadmap_2026 = {
  title: "NITI Aayog Frontier Tech Hub -- Future of India's Semiconductor Industry: A Roadmap to 2035 (May 2026)",
  url: "https://visionias.in/blog/current-affairs/future-of-indias-semiconductor-industry-chips-strategy-and-the-road-to-2035",
  year: 2026
};

DB.sources.china_export_suspension_2025 = {
  title: "China Briefing -- China Suspends Rare Earth Export Controls for One Year Following Xi-Trump Meeting (Nov 2025)",
  url: "https://www.china-briefing.com/news/chinas-rare-earth-export-controls-impacts-on-businesses/",
  year: 2025
};

DB.sources.indexbox_battery_2026 = {
  title: "IndexBox -- India's Battery Cell Manufacturing Challenges and Import Dependence in 2026",
  url: "https://www.indexbox.io/blog/indias-battery-storage-push-import-dependency-persists-despite-policy-efforts/",
  year: 2026
};

DB.sources.iea_role_critical_2025 = {
  title: "IEA -- The Role of Critical Minerals in Clean Energy Transitions: Reliable Supply of Minerals",
  url: "https://www.iea.org/reports/the-role-of-critical-minerals-in-clean-energy-transitions/reliable-supply-of-minerals",
  year: 2025
};

DB.sources.csis_cobalt_2025 = {
  title: "CSIS -- Stabilizing Cobalt Markets: A Price Floor for U.S. Minerals Security",
  url: "https://www.csis.org/analysis/stabilizing-cobalt-markets-price-floor-us-minerals-security",
  year: 2025
};

DB.sources.usgs_mcs_2025_cobalt = {
  title: "USGS Mineral Commodity Summaries 2025 -- Cobalt",
  url: "https://pubs.usgs.gov/periodicals/mcs2025/mcs2025-cobalt.pdf",
  year: 2025
};

DB.sources.mongabay_basf_eramet_2024 = {
  title: "Mongabay -- BASF, Eramet Drop $2.6B Indonesian Nickel Project That Threatens Isolated Tribe (2024)",
  url: "https://news.mongabay.com/2024/07/basf-eramet-drop-2-6b-indonesian-nickel-project-that-threatens-isolated-tribe/",
  year: 2024
};
DB.sources.miningweekly_commus_2024 = {
  title: "Mining Weekly -- DRC Allows Zijin's COMMUS Mine to Resume Operations (May 2024)",
  url: "https://www.miningweekly.com/article/drcallows-zijin-mine-to-resume-operations-mines-ministry-letter-says-2024-05-14",
  year: 2024
};

DB.sources.eu_battery_reg_2023 = {
  title: "EUR-Lex -- Regulation (EU) 2023/1542 on Batteries and Waste Batteries",
  url: "https://eur-lex.europa.eu/EN/legal-content/summary/sustainability-rules-for-batteries-and-waste-batteries.html",
  year: 2023
};

DB.sources.aus_critical_minerals_strategy_2023 = {
  title: "Australia Department of Industry, Science and Resources -- Critical Minerals Strategy 2023-2030",
  url: "https://www.industry.gov.au/publications/critical-minerals-strategy-2023-2030",
  year: 2023
};
DB.sources.iea_ncmm_policy_2026 = {
  title: "IEA -- National Critical Mineral Mission (Policy Database)",
  url: "https://www.iea.org/policies/25735-national-critical-mineral-mission",
  year: 2026
};

DB.sources.alcircle_nalco_2025 = {
  title: "AlCircle -- NALCO Set to Pioneer Gallium Production, the First in India (Aug 2025)",
  url: "https://www.alcircle.com/news/nalco-set-to-pioneer-gallium-production-the-first-in-india-115168",
  year: 2025
};
DB.sources.vif_ree_2025 = {
  title: "Vivekananda International Foundation -- Securing Bharat's Critical Mineral Supply Chains: The MMDR Amendment Act, 2023 (monazite & Atomic Energy Act decategorisation)",
  url: "https://www.vifindia.org/article/2024/march/04/Securing-Bharat-s-Critical-Mineral-Supply-Chains",
  year: 2024
};
