# التطبيق العربي الاحترافي

هذا التطبيق يسمح للمستخدمين بالتفاعل مع واجهة مستخدم عربية متكاملة دون الحاجة إلى تسجيل دخول. يوفر التطبيق تجربة سلسة ومباشرة للمستخدمين للاستفادة من الخدمات المتاحة، بما في ذلك ميزة تحويل النص إلى كلام.

## وصف التطبيق

- **واجهة مستخدم عربية**: جميع عناصر واجهة المستخدم معربة بالكامل لسهولة الاستخدام.
- **تحويل النص إلى كلام**: يمكنك إدخال نص وسيتم تحويله إلى كلام يمكنك الاستماع إليه.
- **الميزات الرئيسية**: يقدم التطبيق واجهة بسيطة للترحيب بالمستخدمين وعرض المحتوى الرئيسي مباشرة.

## رحلات المستخدم

### 1. استكشاف التطبيق

1. افتح التطبيق.
2. سترى رسالة ترحيبية ومحتوى التطبيق الرئيسي مباشرة دون الحاجة إلى تسجيل دخول.
3. يمكنك الاستفادة من الميزات المتاحة في التطبيق.

### 2. استخدام ميزة تحويل النص إلى كلام

1. في الصفحة الرئيسية، ستجد حقلًا لإدخال النص الذي ترغب في تحويله إلى كلام.
2. أدخل النص الذي ترغب في تحويله.
3. اضغط على زر "تحويل النص إلى كلام".
4. انتظر قليلًا بينما يتم معالجة النص.
5. ستظهر لك مشغل صوت يمكنك من خلاله الاستماع إلى النص المحول.

## المتطلبات

- **اتصال بالإنترنت**: يتطلب التطبيق اتصالاً بالإنترنت.
- **مفاتيح البيئة**: تأكد من إضافة مفاتيح البيئة المطلوبة في ملف `.env` كما هو موضح في التعليمات.

## البدء

1. قم بتثبيت التبعيات باستخدام الأمر `npm install`.
2. أنشئ ملف `.env` في جذر المشروع وأضف مفاتيح البيئة المطلوبة:
   ```env
   VITE_PUBLIC_APP_ID=YOUR_PUBLIC_APP_ID
   VITE_PUBLIC_SENTRY_DSN=YOUR_SENTRY_DSN
   VITE_PUBLIC_APP_ENV=production
   TEXT_TO_SPEECH_API_KEY=YOUR_TEXT_TO_SPEECH_API_KEY
   ```
3. ابدأ التطبيق في وضع التطوير باستخدام الأمر `npm run dev`.

## الملاحظات

- **Sentry**: يتم استخدام Sentry لتسجيل وتتبع الأخطاء في التطبيق. يرجى التأكد من إضافة `VITE_PUBLIC_SENTRY_DSN` في ملف `.env`.

## الخدمات الخارجية المستخدمة

- **خدمة تحويل النص إلى كلام (ElevenLabs)**: يتم استخدام خدمة ElevenLabs لتحويل النص المدخل من قبل المستخدم إلى كلام مسموع.
- **Sentry**: لتسجيل وتتبع الأخطاء المحتملة في التطبيق.
