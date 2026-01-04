// Text-to-Speech Service using Web Speech API

interface TTSOptions {
  rate?: number;      // 0.1 to 10, default 1
  pitch?: number;     // 0 to 2, default 1
  volume?: number;    // 0 to 1, default 1
  voiceLang?: string; // e.g., 'es-ES', 'en-US'
}

type TTSCallback = () => void;

class TTSService {
  private synth: SpeechSynthesis;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private voices: SpeechSynthesisVoice[] = [];
  private preferredVoice: SpeechSynthesisVoice | null = null;
  private options: TTSOptions = {
    rate: 1,
    pitch: 1,
    volume: 1,
    voiceLang: 'es-ES', // Default to Spanish for this course
  };
  private onEndCallback: TTSCallback | null = null;
  private isPaused: boolean = false;

  constructor() {
    this.synth = window.speechSynthesis;
    this.loadVoices();

    // Voices may load asynchronously
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = () => this.loadVoices();
    }
  }

  private loadVoices() {
    this.voices = this.synth.getVoices();
    this.selectPreferredVoice();
  }

  private selectPreferredVoice() {
    // Priority: Spanish voices, then any voice matching the language
    const lang = this.options.voiceLang || 'es-ES';

    // Try to find a good quality voice
    const preferredVoices = this.voices.filter(v =>
      v.lang.startsWith(lang.split('-')[0])
    );

    // Prefer voices with "natural" or "enhanced" in name, or Google/Microsoft voices
    this.preferredVoice = preferredVoices.find(v =>
      v.name.toLowerCase().includes('natural') ||
      v.name.toLowerCase().includes('enhanced') ||
      v.name.toLowerCase().includes('google') ||
      v.name.toLowerCase().includes('microsoft')
    ) || preferredVoices[0] || this.voices[0] || null;
  }

  getAvailableVoices(): SpeechSynthesisVoice[] {
    return this.voices;
  }

  setVoice(voice: SpeechSynthesisVoice) {
    this.preferredVoice = voice;
  }

  setOptions(options: Partial<TTSOptions>) {
    this.options = { ...this.options, ...options };
    if (options.voiceLang) {
      this.selectPreferredVoice();
    }
  }

  speak(text: string, onEnd?: TTSCallback): void {
    // Cancel any ongoing speech
    this.stop();

    // Clean up the text for better speech
    const cleanText = this.cleanTextForSpeech(text);

    if (!cleanText) return;

    this.currentUtterance = new SpeechSynthesisUtterance(cleanText);

    if (this.preferredVoice) {
      this.currentUtterance.voice = this.preferredVoice;
    }

    this.currentUtterance.rate = this.options.rate || 1;
    this.currentUtterance.pitch = this.options.pitch || 1;
    this.currentUtterance.volume = this.options.volume || 1;

    this.onEndCallback = onEnd || null;

    this.currentUtterance.onend = () => {
      this.currentUtterance = null;
      this.isPaused = false;
      if (this.onEndCallback) {
        this.onEndCallback();
      }
    };

    this.currentUtterance.onerror = (event) => {
      console.error('TTS Error:', event.error);
      this.currentUtterance = null;
      this.isPaused = false;
    };

    this.isPaused = false;
    this.synth.speak(this.currentUtterance);
  }

  private cleanTextForSpeech(text: string): string {
    return text
      // Remove code blocks - they don't read well
      .replace(/```[\s\S]*?```/g, ' código de ejemplo ')
      .replace(/`([^`]+)`/g, '$1')
      // Remove markdown formatting
      .replace(/\*\*([^*]+)\*\*/g, '$1')
      .replace(/\*([^*]+)\*/g, '$1')
      .replace(/__([^_]+)__/g, '$1')
      .replace(/_([^_]+)_/g, '$1')
      // Remove links but keep text
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      // Clean up special characters
      .replace(/[#>-]/g, '')
      // Clean up multiple spaces/newlines
      .replace(/\s+/g, ' ')
      .trim();
  }

  pause(): void {
    if (this.synth.speaking && !this.isPaused) {
      this.synth.pause();
      this.isPaused = true;
    }
  }

  resume(): void {
    if (this.isPaused) {
      this.synth.resume();
      this.isPaused = false;
    }
  }

  stop(): void {
    this.synth.cancel();
    this.currentUtterance = null;
    this.isPaused = false;
    this.onEndCallback = null;
  }

  isSpeaking(): boolean {
    return this.synth.speaking;
  }

  isPausedState(): boolean {
    return this.isPaused;
  }

  isSupported(): boolean {
    return 'speechSynthesis' in window;
  }
}

// Singleton instance
export const ttsService = new TTSService();
export type { TTSOptions };
