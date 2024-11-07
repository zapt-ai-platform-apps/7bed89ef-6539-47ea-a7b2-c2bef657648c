import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: process.env.VITE_PUBLIC_SENTRY_DSN,
  environment: process.env.VITE_PUBLIC_APP_ENV,
  initialScope: {
    tags: {
      type: 'backend',
      projectId: process.env.VITE_PUBLIC_APP_ID
    }
  }
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }

    const apiKey = process.env.TEXT_TO_SPEECH_API_KEY;

    if (!apiKey) {
      throw new Error('TEXT_TO_SPEECH_API_KEY is not set');
    }

    const voice_id = '21m00Tcm4TlvDq8ikWAM'; // معرف الصوت الافتراضي من ElevenLabs
    const url = `https://api.elevenlabs.io/v1/text-to-speech/${voice_id}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'xi-api-key': apiKey,
        'Accept': 'audio/mpeg'
      },
      body: JSON.stringify({
        text,
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.5
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API Error: ${errorText}`);
    }

    const audioBuffer = await response.arrayBuffer();

    res.setHeader('Content-Type', 'audio/mpeg');
    res.status(200).send(Buffer.from(audioBuffer));
  } catch (error) {
    console.error('Error in text-to-speech API:', error);
    Sentry.captureException(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}