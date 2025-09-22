export class AudioService {
  private static instance: AudioService;
  private synth: SpeechSynthesis;
  private voices: SpeechSynthesisVoice[] = [];

  private constructor() {
    this.synth = window.speechSynthesis;
    this.loadVoices();
  }

  public static getInstance(): AudioService {
    if (!AudioService.instance) {
      AudioService.instance = new AudioService();
    }
    return AudioService.instance;
  }

  private loadVoices(): void {
    this.voices = this.synth.getVoices();
    if (this.voices.length === 0) {
      this.synth.onvoiceschanged = () => {
        this.voices = this.synth.getVoices();
      };
    }
  }

  public speak(text: string, language: string = 'en-US'): void {
    if (!text) return;

    // Stop any ongoing speech
    this.synth.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Try to find a voice for the specific language
    const voice = this.voices.find(v => v.lang.startsWith(language)) || 
                  this.voices.find(v => v.lang.startsWith('en'));
    
    if (voice) {
      utterance.voice = voice;
    }

    utterance.rate = 0.8;
    utterance.pitch = 1;
    utterance.volume = 1;

    this.synth.speak(utterance);
  }

  public stop(): void {
    this.synth.cancel();
  }
}

export const audioService = AudioService.getInstance();
