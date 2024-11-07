import { createSignal, Show } from 'solid-js';

function App() {
  const [textInput, setTextInput] = createSignal('');
  const [loading, setLoading] = createSignal(false);
  const [audioUrl, setAudioUrl] = createSignal('');

  const handleTextToSpeech = async (e) => {
    e.preventDefault();
    if (!textInput()) return;

    setLoading(true);
    setAudioUrl('');
    try {
      const response = await fetch('/api/textToSpeech', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: textInput() })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error:', errorData.error);
        return;
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setAudioUrl(url);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div class="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-4 text-gray-800">
      <div class="max-w-6xl mx-auto h-full">
        <div class="flex justify-between items-center mb-8">
          <h1 class="text-4xl font-bold text-purple-600">مرحبًا بك في التطبيق</h1>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md h-full">
          <h2 class="text-2xl font-bold mb-4 text-purple-600">تحويل النص إلى كلام</h2>
          <form onSubmit={handleTextToSpeech} class="space-y-4">
            <textarea
              placeholder="أدخل النص هنا..."
              value={textInput()}
              onInput={(e) => setTextInput(e.target.value)}
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent box-border"
              rows="4"
              required
            />
            <button
              type="submit"
              class={`w-full px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer ${loading() ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading()}
            >
              {loading() ? 'جاري التحويل...' : 'تحويل النص إلى كلام'}
            </button>
          </form>

          <Show when={audioUrl()}>
            <div class="mt-6">
              <h3 class="text-xl font-bold mb-2 text-purple-600">النص المحول إلى كلام:</h3>
              <audio controls src={audioUrl()} class="w-full" />
            </div>
          </Show>
        </div>
      </div>
    </div>
  );
}

export default App;