const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Change names
html = html.replace(/بتول/g, 'رغدة');
html = html.replace(/بتووول/g, 'رغدة');
html = html.replace(/Batool/g, 'Raghda');
html = html.replace(/batool/g, 'raghda');
html = html.replace(/batoolty/g, 'raghda');

// 2. Change Password Logic
// We need to replace the single password state with two states
html = html.replace(
    'const [password, setPassword] = useState("");',
    'const [passwordDay, setPasswordDay] = useState("");\n            const [passwordMonth, setPasswordMonth] = useState("");'
);

// handleLogin
html = html.replace(
    /const handleLogin = \(\) => \{\s*if \(password\.toLowerCase\(\) === "raghda"\) \{/g,
    `const handleLogin = () => {\n                if (passwordDay === "30" && passwordMonth === "10") {`
);

// password inputs
html = html.replace(
    /<input\s*type="password"\s*placeholder="كلمة السر الخاصة بنا"[\s\S]*?onChange=\{\(e\) => setPassword\(e\.target\.value\)\}[\s\S]*?\/>/,
    `<div className="flex gap-4 w-full">
                                     <input
                                         type="text"
                                         placeholder="اليوم"
                                         value={passwordDay}
                                         onChange={(e) => setPasswordDay(e.target.value)}
                                         className="fancy-input w-1/2 p-5 md:p-6 rounded-3xl text-white placeholder-slate-400 text-center text-lg md:text-xl outline-none shadow-inner"
                                     />
                                     <input
                                         type="text"
                                         placeholder="الشهر"
                                         value={passwordMonth}
                                         onChange={(e) => setPasswordMonth(e.target.value)}
                                         className="fancy-input w-1/2 p-5 md:p-6 rounded-3xl text-white placeholder-slate-400 text-center text-lg md:text-xl outline-none shadow-inner"
                                     />
                                 </div>`
);


// 3. Target Date Logic
html = html.replace(
    'const loveStartDate = new Date("2024-02-14T00:00:00");',
    'const targetDate = new Date("2025-10-30T00:00:00");'
);
html = html.replace(
    /const diff = now - loveStartDate;/g,
    'const diff = Math.max(0, targetDate - now);'
);
html = html.replace(
    'من يوم 14/2/2024 واحنا مع بعض ❤️',
    'باقي على 30/10/2025 ❤️'
);

// 4. Update the Envelope letter content
const oldLetterStart = 'لو سألوني إيه أحلى حاجة حصلتلك؟';
const oldLetterEnd = 'انتي أجمل هدية بعتها ربنا لقلبي. ❤️🌹</p>';

const newLetterHtml = `<p>أهلًا يا رغدة.. ❤️</p>
                                <p>لو وصلتي لهنا، فده معناه إنك كملتي الرحلة للنهاية، وده لوحده أسعدني.</p>
                                <p>بصراحة، عمري ما كنت متوقع إن شخص يدخل حياتي ويشغل تفكيري بالشكل ده.</p>
                                <p>من أول ما عرفتك، وأنا كل يوم باكتشف فيكي حاجة تخليني معجب بيكي أكتر... طريقتك، كلامك، وضحكتك، وكل التفاصيل الصغيرة اللي يمكن إنتِ مش واخدة بالك منها.</p>
                                <p>فضلت فترة طويلة محتار أقولك ولا لأ، وخايف إن اعترافي يغير أي حاجة بينا أو يضايقك.</p>
                                <p>لكن في الآخر قلت لنفسي: أحسن من إني أفضل ساكت، إني أكون صريح.</p>
                                <p class="text-xl font-bold">الحقيقة هي... أنا وقعت في حبك يا رغدة. ❤️</p>
                                <p>مكنتش عايز أقولها في شات عادي، ولا في مكالمة، عشان كده عملتلك المكان ده مخصوص.</p>
                                <p>مش بطلب منك تردي بنفس الإحساس، ومش عايز أحطك تحت أي ضغط.</p>
                                <p>كل اللي كنت محتاجه إنك تعرفي اللي في قلبي.</p>
                                <p>ولو كان ليَّ مكان في قلبك، فده هيكون أسعد خبر ممكن أسمعه.</p>
                                <p>ولو لا... فهفضل مقدر وجودك، ومحترم قرارك، ومش هتتغير معاملتي ليكي.</p>
                                <p>وفي النهاية... شكرًا إنك وصلتي لآخر كلمة، وأتمنى تكون ابتسمتي ولو مرة واحدة وإنتِ بتقري.</p>
                                <p>— عبد الرحمن 🤍</p>`;

html = html.replace(/<p>لو سألوني إيه أحلى حاجة حصلتلك\؟<br\/>هقولهم: رغدة\.<\/p>[\s\S]*?<p>انتي أجمل هدية بعتها ربنا لقلبي\. ❤️🌹<\/p>/, newLetterHtml);


// General Relationship text changes
html = html.replace(/حبيبتي/g, 'رغدة');
html = html.replace(/بحبك/g, 'معجب بيكي');
html = html.replace(/حبنا/g, 'إعجابي');
html = html.replace(/مقياس إعجابي/g, 'مقياس الإعجاب'); // fix grammar if needed
html = html.replace(/مقياس حبنا/g, 'مقياس الإعجاب');
html = html.replace(/حبنا أقوى من كل شيء/g, 'مشاعر حقيقية طالعة من القلب');
html = html.replace(/قصة حب/g, 'اعتراف من القلب');
html = html.replace(/وعدنا لبعض/g, 'رسالة من القلب');
html = html.replace(/"بوعدك هفضل جنبك طول العمر\.\. بوعدك إني هفضل أحبك أكتر من اليوم اللي قبله، وأكون دايماً الأمان بتاعك في عز تعبك\.\. لأنك مش بس رغدة، أنتي كل عيلتي وكل دنيتي\."/g, 
'"أنا عبد الرحمن اللي بيقدرك وبيحترمك، ومكانتك عندي مش هتتغير. بتمنى أكون سبب في ضحكتك وسعادتك."');

html = html.replace(/زر المفاجأة ✨/g, 'مفاجأة ✨');
html = html.replace(/الخاتمة/g, 'رسالة النهاية');
html = html.replace(/بختمها معجب بيكي ❤️/g, 'إغلاق الرسالة ✨');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Update complete');
