const fs = require('fs');

let html = fs.readFileSync('src/LoveWebsite.jsx', 'utf8');

// 1. Timeline Section
html = html.replace(
    'أنتي أجمل بداية لكل شيء جميل في حياتي.. وجودك هو الأمان اللي كنت بدور عليه ❤️',
    'أول مرة شفتك فيها، حسيت إن فيكي حاجة مختلفة، حاجة شدتني من غير ما أحس ❤️'
);
html = html.replace(
    'كل دقة في قلبي بتنده باسمك.. أنتي حبيبتي ونور عيني كلها 🌹',
    'تفاصيلك البسيطة، وكلامك، وطريقتك.. كلها حاجات خلتني أركز معاكي أكتر وأكتر 🌹'
);
html = html.replace(
    'كان أحلى يوم يا رغدة 🥺♥️ اليوم اللي اتجمعنا فيه واتصورنا.. ضحكتك فيه كانت بالدنيا وما فيها 😍🫶',
    'كل مرة بنكون موجودين في نفس المكان، بكون مبسوط لمجرد إني شايفك.. ضحكتك لوحدها بتخطف قلبي 😍🫶'
);
html = html.replace('خط ذكرياتنا ❤️', 'لحظات فرقت معايا ❤️');
html = html.replace('أجمل بداية', 'أول نظرة');
html = html.replace('نور عيني', 'تفاصيلك');
html = html.replace('أحلى يوم', 'صدف حلوة');


fs.writeFileSync('src/LoveWebsite.jsx', html, 'utf8');
console.log('Update2 jsx complete');
