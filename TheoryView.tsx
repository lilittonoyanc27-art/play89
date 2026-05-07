/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Play, Info, CheckCircle2, User } from 'lucide-react';

interface TheoryViewProps {
  onStart: () => void;
}

export default function TheoryView({ onStart }: TheoryViewProps) {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4 font-sans">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="lesson-card p-6 md:p-14 bg-white border-t-8 border-brand-red relative overflow-hidden"
      >
        <header className="text-center space-y-4 mb-12">
          <div className="w-20 h-20 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-lg">
             <User className="w-10 h-10 text-brand-red" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-800 uppercase tracking-tighter italic">
            LLEVAR <span className="text-brand-orange">ԲԱՅԸ</span>
          </h2>
          <p className="text-slate-400 text-sm font-bold tracking-widest uppercase">
            Կրել • Տանել • Վերցնել
          </p>
        </header>

        <div className="space-y-12">
          {/* Conjugation Section */}
          <section className="space-y-6">
            <h3 className="text-2xl font-black text-slate-800 flex items-center gap-3">
               <Info className="text-brand-blue" /> ԽՈՆԱՐՀՈՒՄ (CONJUGACIÓN)
            </h3>
            <div className="bg-slate-50 p-6 rounded-3xl border-2 border-slate-100">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                     <span className="block text-slate-400 text-[10px] font-black uppercase mb-1 tracking-widest">Yo (Ես)</span>
                     <span className="text-2xl font-black text-brand-red">llevo</span>
                  </div>
                  <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                     <span className="block text-slate-400 text-[10px] font-black uppercase mb-1 tracking-widest">Tú (Դու)</span>
                     <span className="text-2xl font-black text-brand-blue">llevas</span>
                  </div>
                  <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                     <span className="block text-slate-400 text-[10px] font-black uppercase mb-1 tracking-widest">Él / Ella / Usted</span>
                     <span className="text-2xl font-black text-brand-orange">lleva</span>
                  </div>
                  <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                     <span className="block text-slate-400 text-[10px] font-black uppercase mb-1 tracking-widest">Nosotros (Մենք)</span>
                     <span className="text-2xl font-black text-brand-red">llevamos</span>
                  </div>
                  <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                     <span className="block text-slate-400 text-[10px] font-black uppercase mb-1 tracking-widest">Vosotros (Դուք)</span>
                     <span className="text-2xl font-black text-brand-blue">lleváis</span>
                  </div>
                  <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                     <span className="block text-slate-400 text-[10px] font-black uppercase mb-1 tracking-widest">Ellos / Ellas / Ustedes</span>
                     <span className="text-2xl font-black text-brand-orange">llevan</span>
                  </div>
               </div>
            </div>
          </section>

          {/* Usage Section */}
          <section className="space-y-6">
            <h3 className="text-2xl font-black text-slate-800 flex items-center gap-3">
               <CheckCircle2 className="text-brand-orange" /> Ի՞ՆՉ Է ՆՇԱՆԱԿՈՒՄ
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-brand-red/5 p-6 rounded-3xl border border-brand-red/10">
                <b className="text-brand-red text-xl block mb-2 font-black italic">1. ՀԱԳՆԵԼ / ԿՐԵԼ</b>
                <p className="text-sm font-bold text-slate-600">Հագուստ, ակնոց, թանկարժեք իրեր կրելու համար:</p>
                <p className="mt-2 text-xs italic text-slate-400">Օրինակ` Yo llevo una gorra.</p>
              </div>
              <div className="bg-brand-blue/5 p-6 rounded-3xl border border-brand-blue/10">
                <b className="text-brand-blue text-xl block mb-2 font-black italic">2. ՏԱՆԵԼ / ՎԵՐՑՆԵԼ</b>
                <p className="text-sm font-bold text-slate-600">Ինչ-որ բան կամ ինչ-որ մեկին մի տեղից մյուսը տանել:</p>
                <p className="mt-2 text-xs italic text-slate-400">Օրինակ` Llevo comida al café.</p>
              </div>
            </div>
          </section>
        </div>

        <div className="pt-16 text-center">
          <button 
            onClick={onStart}
            className="btn-primary w-full md:w-auto px-16 py-6 text-2xl flex items-center justify-center gap-4 group hover:bg-slate-800"
          >
            ՄՐՑԱՎԱԶՔԻ ՄԵԿՆԱՐԿ <Play className="w-8 h-8 fill-current group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
