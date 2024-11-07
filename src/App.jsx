import { createSignal, onMount } from 'solid-js';

function App() {
  return (
    <div class="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-4 text-gray-800">
      <div class="max-w-6xl mx-auto h-full">
        <div class="flex justify-between items-center mb-8">
          <h1 class="text-4xl font-bold text-purple-600">مرحبًا بك في التطبيق</h1>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md h-full">
          <h2 class="text-2xl font-bold mb-4 text-purple-600">الميزات الرئيسية</h2>
          <p class="text-gray-700">يمكنك الآن استخدام التطبيق بكل سهولة.</p>
          {/* يمكنك إضافة المزيد من الميزات هنا */}
        </div>
      </div>
    </div>
  );
}

export default App;