import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, Star, Heart, Sparkles } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'login' | 'signup';
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, mode: initialMode }) => {
  const [mode, setMode] = useState(initialMode);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const { login, signup, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      if (mode === 'login') {
        await login(formData.email, formData.password);
      } else {
        await signup(formData.username, formData.email, formData.password);
      }
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-gradient-to-br from-memphis-pink via-white to-memphis-lavender rounded-3xl p-8 border-4 border-black max-w-md w-full mx-4 relative overflow-hidden"
          initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          exit={{ scale: 0.8, opacity: 0, rotate: 5 }}
        >
          {/* Decorative elements */}
          <div className="absolute top-4 right-4">
            <Star className="w-6 h-6 text-memphis-yellow" />
          </div>
          <div className="absolute bottom-4 left-4">
            <Heart className="w-5 h-5 text-memphis-coral" />
          </div>
          <div className="absolute top-1/2 right-2">
            <Sparkles className="w-4 h-4 text-memphis-purple" />
          </div>

          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white hover:bg-opacity-50 rounded-full z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-memphis-yellow to-memphis-coral rounded-2xl border-4 border-black mx-auto mb-4 flex items-center justify-center transform rotate-12">
              <span className="text-2xl">🏛️</span>
            </div>
            <h2 className="font-baloo text-3xl font-bold text-memphis-purple mb-2">
              {mode === 'login' ? 'Welcome Back!' : 'Join the Quest!'}
            </h2>
            <p className="font-fredoka text-sm text-gray-600">
              {mode === 'login' 
                ? 'Continue your language learning adventure' 
                : 'Start your journey as a Language Guardian'
              }
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-memphis-purple" />
                <input
                  type="text"
                  placeholder="Choose your guardian name"
                  className="w-full pl-12 pr-4 py-3 border-2 border-black rounded-2xl font-fredoka focus:outline-none focus:border-memphis-coral bg-white"
                  value={formData.username}
                  onChange={(e) => setFormData({...formData, username: e.target.value})}
                  required
                />
              </div>
            )}

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-memphis-purple" />
              <input
                type="email"
                placeholder="Your email address"
                className="w-full pl-12 pr-4 py-3 border-2 border-black rounded-2xl font-fredoka focus:outline-none focus:border-memphis-coral bg-white"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-memphis-purple" />
              <input
                type="password"
                placeholder="Create a strong password"
                className="w-full pl-12 pr-4 py-3 border-2 border-black rounded-2xl font-fredoka focus:outline-none focus:border-memphis-coral bg-white"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
              />
            </div>

            {error && (
              <div className="bg-red-100 border-2 border-red-500 rounded-lg p-3">
                <p className="font-fredoka text-sm text-red-700">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full memphis-button py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Loading...' : (mode === 'login' ? 'Start Adventure!' : 'Begin Quest!')}
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="font-fredoka text-sm text-gray-600">
              {mode === 'login' ? "New to Language Guardian?" : "Already a guardian?"}
            </p>
            <button
              onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
              className="font-fredoka text-memphis-coral hover:text-memphis-purple font-bold"
            >
              {mode === 'login' ? 'Create Account' : 'Sign In'}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
