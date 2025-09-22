import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mic, MicOff, Play, Square } from 'lucide-react';

interface VoiceRecorderProps {
  targetWord: string;
  onRecordingComplete: (accuracy: number) => void;
}

export const VoiceRecorder: React.FC<VoiceRecorderProps> = ({ 
  targetWord, 
  onRecordingComplete 
}) => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        setAudioBlob(audioBlob);
        analyzePronunciation();
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const analyzePronunciation = () => {
    setIsAnalyzing(true);
    
    // Simulate pronunciation analysis
    setTimeout(() => {
      const accuracy = Math.floor(Math.random() * 30) + 70; // 70-100% accuracy
      onRecordingComplete(accuracy);
      setIsAnalyzing(false);
    }, 2000);
  };

  const playRecording = () => {
    if (audioBlob) {
      const audio = new Audio(URL.createObjectURL(audioBlob));
      audio.play();
    }
  };

  return (
    <div className="bg-gradient-to-br from-memphis-lavender to-white p-4 rounded-2xl border-2 border-black">
      <h4 className="font-baloo font-bold text-memphis-purple mb-3 text-center">
        Pronunciation Practice
      </h4>
      
      <div className="text-center mb-4">
        <p className="font-fredoka text-sm text-gray-600 mb-2">Try to pronounce:</p>
        <p className="font-baloo text-xl font-bold text-memphis-green">{targetWord}</p>
      </div>

      <div className="flex justify-center space-x-3">
        {!isRecording ? (
          <button
            onClick={startRecording}
            className="flex items-center space-x-2 px-4 py-2 bg-memphis-coral text-white rounded-full border-2 border-black hover:bg-memphis-purple transition-colors"
          >
            <Mic className="w-4 h-4" />
            <span className="font-fredoka text-sm">Record</span>
          </button>
        ) : (
          <button
            onClick={stopRecording}
            className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-full border-2 border-black hover:bg-red-600 transition-colors"
          >
            <Square className="w-4 h-4" />
            <span className="font-fredoka text-sm">Stop</span>
          </button>
        )}

        {audioBlob && (
          <button
            onClick={playRecording}
            className="flex items-center space-x-2 px-4 py-2 bg-memphis-blue text-white rounded-full border-2 border-black hover:bg-memphis-green transition-colors"
          >
            <Play className="w-4 h-4" />
            <span className="font-fredoka text-sm">Play</span>
          </button>
        )}
      </div>

      {isAnalyzing && (
        <motion.div
          className="mt-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="flex justify-center space-x-1 mb-2">
            <div className="w-2 h-2 bg-memphis-purple rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-memphis-purple rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
            <div className="w-2 h-2 bg-memphis-purple rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>
          <p className="font-fredoka text-sm text-gray-600">Analyzing pronunciation...</p>
        </motion.div>
      )}
    </div>
  );
};
