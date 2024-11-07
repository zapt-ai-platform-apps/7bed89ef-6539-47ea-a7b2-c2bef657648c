# التطبيق العربي الاحترافي

هذا التطبيق يسمح للمستخدمين بالتفاعل مع واجهة مستخدم عربية متكاملة دون الحاجة إلى تسجيل دخول. يوفر التطبيق تجربة سلسة ومباشرة للمستخدمين للاستفادة من الخدمات المتاحة.

## وصف التطبيق

- **واجهة مستخدم عربية**: جميع عناصر واجهة المستخدم معربة بالكامل لسهولة الاستخدام.
- **الميزات الرئيسية**: يقدم التطبيق واجهة بسيطة للترحيب بالمستخدمين وعرض المحتوى الرئيسي مباشرة.
- **تسجيل الأخطاء**: يتم استخدام خدمة Sentry لتتبع الأخطاء المحتملة في التطبيق.

## رحلات المستخدم

### 1. استكشاف التطبيق

1. افتح التطبيق.
2. سترى رسالة ترحيبية ومحتوى التطبيق الرئيسي مباشرة دون الحاجة إلى تسجيل دخول.
3. يمكنك الاستفادة من الميزات المتاحة في التطبيق.
4. التفاعل مع العناصر المختلفة وتجربة الوظائف المتاحة.

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
   ```
3. ابدأ التطبيق في وضع التطوير باستخدام الأمر `npm run dev`.

## الملاحظات

- **Sentry**: يتم استخدام Sentry لتسجيل وتتبع الأخطاء في التطبيق. يرجى التأكد من إضافة `VITE_PUBLIC_SENTRY_DSN` في ملف `.env`.

## الخدمات الخارجية المستخدمة

- **Sentry**: لتسجيل وتتبع الأخطاء المحتملة في التطبيق.
