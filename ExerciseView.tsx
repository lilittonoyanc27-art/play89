/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lesson, ExerciseType, Exercise } from './types';
import { X, Trophy, AlertCircle, CheckCircle2, Star, ArrowRight, RotateCcw, Flag } from 'lucide-react';

interface ExerciseViewProps {
  lesson: Lesson;
  onBack: () => void;
}

export default function ExerciseView({ lesson, onBack }: ExerciseViewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [builtSentence, setBuiltSentence] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const currentExercise = lesson.exercises[currentIndex];
  const isLast = currentIndex === lesson.exercises.length - 1;

  // Race progress logic
  const progressPercent = (currentIndex / (lesson.exercises.length - 1)) * 100;

  useEffect(() => {
    // Reset built sentence when exercise changes
    setBuiltSentence([]);
  }, [currentIndex]);

  const handleNext = () => {
    if (isLast) {
      setIsGameOver(true);
    } else {
      setCurrentIndex(v => v + 1);
      setSelectedOption(null);
      setBuiltSentence([]);
      setIsCorrect(null);
      setShowResult(false);
    }
  };

  const checkAnswer = (option: string) => {
    if (showResult) return;
    
    setSelectedOption(option);
    const isRight = option === currentExercise.answer;
    setIsCorrect(isRight);
    setShowResult(true);
    
    if (isRight) {
      setScore(s => s + 1);
    }

    setTimeout(() => {
      handleNext();
    }, 1500);
  };

  const addWord = (word: string) => {
    if (showResult) return;
    setBuiltSentence(prev => [...prev, word]);
  };

  const removeWord = (index: number) => {
    if (showResult) return;
    setBuiltSentence(prev => prev.filter((_, i) => i !== index));
  };

  const checkSentence = () => {
    if (showResult) return;
    const constructed = builtSentence.join(' ');
    const isRight = constructed === currentExercise.answer;
    setIsCorrect(isRight);
    setShowResult(true);

    if (isRight) {
      setScore(s => s + 1);
    }

    setTimeout(() => {
      handleNext();
    }, 1500);
  };

  if (isGameOver) {
    const percentage = Math.round((score / lesson.exercises.length) * 100);
    
    return (
      <div className="text-center space-y-12 py-12 px-4 max-w-2xl mx-auto">
        <motion.div 
          initial={{ scale: 0, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          className="w-48 h-48 bg-white rounded-[40px] flex items-center justify-center mx-auto shadow-2xl border-8 border-brand-yellow/20"
        >
          <Trophy className="w-24 h-24 text-brand-orange" />
        </motion.div>
        
        <div className="space-y-4">
          <h2 className="text-6xl md:text-7xl font-black uppercase leading-none tracking-tighter text-slate-800">
             ԱՎԱՐՏՎԵՑ
          </h2>
          <p className="text-2xl text-slate-400 font-bold">
            Դու պատասխանեցիր հարցերի {percentage}%-ին
          </p>
          <div className="flex justify-center gap-3">
             {[1, 2, 3].map(i => (
               <Star key={i} className="w-10 h-10 text-yellow-400 fill-current animate-bounce" style={{ animationDelay: `${i * 0.1}s` }} />
             ))}
          </div>
        </div>

        <div className="lesson-card p-10 bg-white shadow-xl shadow-brand-orange/5">
          <div className="text-sm font-black text-slate-400 uppercase tracking-widest mb-2">ՔՈ ԱՐԴՅՈՒՆՔԸ</div>
          <div className="text-8xl font-black text-brand-red">{score} / {lesson.exercises.length}</div>
        </div>

        <button onClick={onBack} className="btn-primary w-full py-6 text-2xl flex items-center justify-center gap-4">
          ՎԵՐԱԴԱՌՆԱԼ <ArrowRight className="w-8 h-8" />
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-4 px-4 space-y-8">
      {/* Race Track HUD */}
      <div className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <button onClick={onBack} className="p-3 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors shadow-sm">
            <X className="w-8 h-8 text-slate-400" />
          </button>
          
          <div className="bg-white border border-slate-200 px-6 py-3 rounded-2xl shadow-sm">
             <span className="text-slate-600 font-black text-xl uppercase tracking-tighter">{currentIndex + 1} / {lesson.exercises.length}</span>
          </div>
        </div>

        {/* The Track */}
        <div className="relative h-20 bg-white/50 backdrop-blur-sm rounded-3xl border-4 border-slate-200 px-10 flex items-center overflow-hidden">
          {/* Finish Line */}
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-checkered flex items-center justify-center border-l-4 border-slate-200">
             <Flag className="w-8 h-8 text-brand-red animate-bounce" />
          </div>

          <div className="flex-1 h-2 bg-slate-200/50 rounded-full relative">
            {/* Track Progress Fill */}
            <motion.div 
              className="absolute left-0 top-0 bottom-0 bg-brand-orange/30 rounded-full"
              animate={{ width: `${progressPercent}%` }}
              transition={{ type: 'spring', stiffness: 50, damping: 20 }}
            />

            {/* Characters */}
            <motion.div 
              className="absolute top-1/2 -translate-y-1/2 z-20"
              animate={{ 
                left: `${progressPercent}%`,
                scale: showResult ? (isCorrect ? 1.4 : 0.8) : 1
              }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            >
              <div className="relative group">
                <div className="text-4xl md:text-5xl filter drop-shadow-lg -translate-x-1/2">
                   {score % 2 === 0 ? '🏃‍♂️' : '🏃‍♀️'}
                </div>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-slate-800 text-white text-[10px] px-2 py-1 rounded font-black whitespace-nowrap uppercase">
                  {score % 2 === 0 ? 'ԳՈՌ' : 'ԳԱՅԱՆԵ'}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative pt-6">
         <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="lesson-card p-6 md:p-16 relative overflow-hidden bg-white/90 backdrop-blur-md w-full"
            >
              <div className="relative z-10 space-y-8 md:space-y-12">
                  <div className="text-center space-y-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border bg-brand-orange/10 border-brand-orange text-brand-orange">
                       {currentExercise.type === ExerciseType.MULTIPLE_CHOICE ? 'ԸՆՏՐԻՐ ՃԻՇՏ ԹԱՐԳՄԱՆՈՒԹՅՈՒՆԸ' : 'ԿԱԶՄԻՐ ՆԱԽԱԴԱՍՈՒԹՅՈՒՆԸ'}
                    </span>
                    
                    {currentExercise.image && (
                      <div className="text-7xl md:text-9xl mb-6 whitespace-pre-line animate-bounce-slow h-32 flex items-center justify-center">
                        {currentExercise.image}
                      </div>
                    )}

                    <h3 className="text-3xl md:text-5xl font-black text-slate-800 italic uppercase tracking-tighter leading-tight break-words">
                       {currentExercise.question}
                    </h3>
                  </div>

                 {currentExercise.type === ExerciseType.MULTIPLE_CHOICE ? (
                    <div className="grid grid-cols-1 gap-3 md:gap-4 max-w-md mx-auto w-full">
                        {currentExercise.options.map((opt) => (
                          <button
                            key={opt}
                            disabled={showResult}
                            onClick={() => checkAnswer(opt)}
                            className={`p-4 md:p-6 rounded-2xl border-4 text-xl md:text-2xl font-black transition-all flex items-center justify-between group transform active:scale-[0.98] ${
                              selectedOption === opt
                                ? isCorrect 
                                  ? 'bg-green-500 border-green-600 text-white shadow-xl shadow-green-200'
                                  : 'bg-red-500 border-red-600 text-white shadow-xl shadow-red-200'
                                : 'bg-white border-slate-100 hover:border-brand-red text-slate-700 shadow-sm'
                            }`}
                          >
                            <span className="truncate pr-2">{opt}</span>
                            {selectedOption === opt && (
                              isCorrect ? <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 shrink-0" /> : <AlertCircle className="w-8 h-8 md:w-10 md:h-10 shrink-0" />
                            )}
                          </button>
                        ))}
                    </div>
                 ) : (
                    <div className="space-y-8 md:space-y-12">
                        {/* Sentence Display Area */}
                        <div className="min-h-[100px] md:min-h-[120px] bg-slate-50/50 rounded-3xl p-6 md:p-8 border-4 border-dashed border-slate-200 flex flex-wrap gap-4 md:gap-8 items-center justify-center">
                            {builtSentence.map((word, idx) => (
                                <motion.button
                                    key={`${word}-${idx}`}
                                    layoutId={`${word}-${idx}`}
                                    onClick={() => removeWord(idx)}
                                    className="px-6 py-3 md:px-8 md:py-4 bg-brand-red text-white rounded-2xl font-black text-xl md:text-2xl shadow-xl hover:bg-brand-red/90 transition-colors tracking-wide"
                                >
                                    {word}
                                </motion.button>
                            ))}
                            {builtSentence.length === 0 && (
                                <span className="text-slate-300 font-black uppercase tracking-[0.2em] text-[10px] md:text-sm text-center">Կառուցիր նախադասությունը այստեղ</span>
                            )}
                        </div>

                        {/* Word Pool Area */}
                        <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
                            {currentExercise.options.filter(w => !builtSentence.includes(w) || currentExercise.options.filter(o => o === w).length > builtSentence.filter(o => o === w).length).map((word, idx) => (
                                <motion.button
                                    key={`${word}-${idx}`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => addWord(word)}
                                    className="px-6 py-3 md:px-7 md:py-4 bg-white border-2 border-slate-200 rounded-2xl font-black text-xl md:text-2xl text-slate-700 shadow-sm hover:border-brand-red hover:text-brand-red transition-all tracking-wide"
                                >
                                    {word}
                                </motion.button>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button 
                                onClick={() => setBuiltSentence([])}
                                className="p-4 bg-slate-100 text-slate-400 rounded-2xl hover:bg-slate-200 transition-colors flex items-center justify-center"
                            >
                                <RotateCcw className="w-8 h-8" />
                            </button>
                            <button 
                                disabled={builtSentence.length === 0 || showResult}
                                onClick={checkSentence}
                                className="btn-primary px-8 md:px-12 py-4 text-lg md:text-xl flex-1 max-w-full sm:max-w-xs"
                            >
                                ՍՏՈՒԳԵԼ
                            </button>
                        </div>
                    </div>
                 )}
              </div>
            </motion.div>
         </AnimatePresence>
      </div>

      <AnimatePresence>
         {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-center font-black italic text-4xl uppercase tracking-widest ${isCorrect ? 'text-green-500 animate-pulse' : 'text-red-500'}`}
            >
              {isCorrect ? 'ՃԻՇՏ Է! ✨' : 'ՍԽԱԼ Է! 🦾'}
            </motion.div>
         )}
      </AnimatePresence>
    </div>
  );
}
