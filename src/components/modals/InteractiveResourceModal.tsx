import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  Star, 
  Play, 
  Code, 
  Printer, 
  FlaskConical, 
  Music, 
  Compass, 
  RotateCcw, 
  Volume2,
  Trophy,
  ArrowRight
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Resource } from '../../types';

export const InteractiveResourceModal: React.FC = () => {
  const { activeModal, activeModalData, closeModal, activeChild, completeResourceForChild } = useApp();

  // State for Quizzes
  const [currentQuizIdx, setCurrentQuizIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // State for Coding Blocks
  const [arrangedBlocks, setArrangedBlocks] = useState<string[]>([]);
  const [roverStatus, setRoverStatus] = useState<'idle' | 'running' | 'success' | 'failed'>('idle');
  const [roverMessage, setRoverMessage] = useState('');

  // State for STEM Lab
  const [experimentStep, setExperimentStep] = useState(0);
  const [fizzingActive, setFizzingActive] = useState(false);

  // State for Rhythm Pad
  const [activeBeatIndex, setActiveBeatIndex] = useState<number | null>(null);

  // State for Leadership Reflection
  const [reflectionAnswer, setReflectionAnswer] = useState('');
  const [pledgeSigned, setPledgeSigned] = useState(false);

  if (activeModal !== 'resource-player' || !activeModalData) return null;

  const resource: Resource = activeModalData;

  // Handle Quiz selection
  const handleOptionSelect = (idx: number) => {
    if (isAnswerChecked) return;
    setSelectedOption(idx);
  };

  const handleCheckQuizAnswer = () => {
    if (selectedOption === null || !resource.quizQuestions) return;
    setIsAnswerChecked(true);
    const correct = selectedOption === resource.quizQuestions[currentQuizIdx].correctIndex;
    if (correct) {
      setQuizScore(prev => prev + 1);
    }
  };

  const handleNextQuizQuestion = () => {
    if (!resource.quizQuestions) return;
    if (currentQuizIdx + 1 < resource.quizQuestions.length) {
      setCurrentQuizIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerChecked(false);
    } else {
      setQuizFinished(true);
      if (activeChild) {
        completeResourceForChild(activeChild.id, resource.id, 20);
      }
    }
  };

  // Handle Coding Blocks
  const handleAddBlock = (block: string) => {
    if (roverStatus === 'running' || roverStatus === 'success') return;
    setArrangedBlocks(prev => [...prev, block]);
  };

  const handleRemoveBlock = (index: number) => {
    if (roverStatus === 'running' || roverStatus === 'success') return;
    setArrangedBlocks(prev => prev.filter((_, i) => i !== index));
  };

  const handleRunRoverProgram = () => {
    if (!resource.codingTask) return;
    setRoverStatus('running');
    setRoverMessage('Rover executing commands...');

    setTimeout(() => {
      const expected = resource.codingTask?.expectedSequence || [];
      const matches = JSON.stringify(arrangedBlocks) === JSON.stringify(expected);

      if (matches) {
        setRoverStatus('success');
        setRoverMessage('🚀 Star Crystal Collected! Mission Complete!');
        if (activeChild) {
          completeResourceForChild(activeChild.id, resource.id, 25);
        }
      } else {
        setRoverStatus('failed');
        setRoverMessage('⚠️ Path off trajectory! Recheck the sequence or check the hint.');
      }
    }, 1200);
  };

  // Handle Print Action
  const handlePrintWorksheet = () => {
    window.print();
    if (activeChild) {
      completeResourceForChild(activeChild.id, resource.id, 15);
    }
  };

  // Handle STEM lab step progression
  const handleTriggerFizz = () => {
    setFizzingActive(true);
    setTimeout(() => {
      setFizzingActive(false);
      setExperimentStep(4);
      if (activeChild) {
        completeResourceForChild(activeChild.id, resource.id, 20);
      }
    }, 2500);
  };

  // Handle Beat tap
  const playBeatSound = (beatIdx: number) => {
    setActiveBeatIndex(beatIdx);
    setTimeout(() => setActiveBeatIndex(null), 300);
  };

  // Handle Leadership Pledge
  const handlePledgeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPledgeSigned(true);
    if (activeChild) {
      completeResourceForChild(activeChild.id, resource.id, 20);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative my-6 text-slate-900">
        
        {/* Top Close & Meta Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
          <div className="flex items-center gap-2">
            <span className="bg-[#0B1B3D] text-amber-400 text-xs font-bold px-2.5 py-1 rounded-lg">
              {resource.category}
            </span>
            <span className="text-xs text-slate-500 font-semibold">
              Ages {resource.ageGroup} • {resource.difficulty}
            </span>
          </div>

          <button
            onClick={closeModal}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 1. QUIZ INTERACTIVE VIEW */}
        {resource.quizQuestions && resource.quizQuestions.length > 0 && !quizFinished && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold font-heading text-slate-900">
                {resource.title}
              </h3>
              <span className="text-xs font-bold bg-amber-100 text-amber-900 px-2.5 py-1 rounded-full">
                Question {currentQuizIdx + 1} of {resource.quizQuestions.length}
              </span>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4">
              <p className="text-sm sm:text-base font-semibold text-slate-900">
                {resource.quizQuestions[currentQuizIdx].question}
              </p>

              {/* Options */}
              <div className="space-y-2">
                {resource.quizQuestions[currentQuizIdx].options.map((opt, oIdx) => {
                  let optStyle = 'border-slate-200 hover:border-amber-400 bg-white text-slate-800';
                  if (selectedOption === oIdx) {
                    optStyle = 'border-amber-500 bg-amber-50 text-amber-950 font-bold';
                  }
                  if (isAnswerChecked) {
                    if (oIdx === resource.quizQuestions![currentQuizIdx].correctIndex) {
                      optStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold';
                    } else if (selectedOption === oIdx) {
                      optStyle = 'border-rose-500 bg-rose-50 text-rose-950';
                    }
                  }

                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleOptionSelect(oIdx)}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${optStyle}`}
                    >
                      <span>{opt}</span>
                      {isAnswerChecked && oIdx === resource.quizQuestions![currentQuizIdx].correctIndex && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation note when checked */}
              {isAnswerChecked && (
                <div className="bg-blue-50 border border-blue-200 p-3.5 rounded-xl text-xs text-blue-900 animate-in fade-in">
                  <strong>Explanation:</strong> {resource.quizQuestions[currentQuizIdx].explanation}
                </div>
              )}
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="text-xs font-semibold text-slate-500">
                🌟 Active Star Explorer: {activeChild?.firstName || 'Guest Explorer'}
              </div>

              {!isAnswerChecked ? (
                <button
                  onClick={handleCheckQuizAnswer}
                  disabled={selectedOption === null}
                  className="bg-[#0B1B3D] hover:bg-[#163273] disabled:opacity-40 text-amber-400 font-bold px-6 py-2.5 rounded-xl text-xs transition-colors"
                >
                  Check Answer
                </button>
              ) : (
                <button
                  onClick={handleNextQuizQuestion}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2.5 rounded-xl text-xs flex items-center gap-1.5 transition-colors"
                >
                  <span>{currentQuizIdx + 1 < resource.quizQuestions.length ? 'Next Question' : 'Complete Quest'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* QUIZ FINISHED CELEBRATION */}
        {quizFinished && (
          <div className="text-center py-8 space-y-5">
            <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto shadow-md">
              <Trophy className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 font-heading">
              Fantastic Job, Star Explorer!
            </h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto">
              You scored <strong>{quizScore} out of {resource.quizQuestions?.length}</strong> questions correctly and unlocked <strong>+20 Polaris Stars</strong>!
            </p>
            <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 text-xs text-amber-900 max-w-xs mx-auto font-bold flex items-center justify-center gap-2">
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              <span>Badge Progress Updated in Kids Zone</span>
            </div>
            <button
              onClick={closeModal}
              className="bg-[#0B1B3D] text-amber-400 font-bold px-8 py-3 rounded-xl text-xs hover:bg-[#163273] transition-colors"
            >
              Collect Rewards & Return
            </button>
          </div>
        )}

        {/* 2. CODING BLOCKS INTERACTIVE VIEW */}
        {resource.codingTask && (
          <div className="space-y-5">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200 mb-1 inline-flex">
                <Code className="w-3.5 h-3.5" />
                <span>Polaris Algorithmic Puzzle</span>
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900">
                {resource.codingTask.title}
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                {resource.codingTask.instructions}
              </p>
            </div>

            {/* Rover Visual Simulator Grid */}
            <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-700 space-y-3 relative overflow-hidden">
              <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800 font-mono">
                <span>SIMULATION GRID: MARS PATHFINDER</span>
                <span className={`font-bold ${roverStatus === 'success' ? 'text-emerald-400' : 'text-amber-400'}`}>
                  STATUS: {roverStatus.toUpperCase()}
                </span>
              </div>

              {/* Grid representation */}
              <div className="grid grid-cols-4 gap-2 py-2 text-center text-xs">
                <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
                  {roverStatus === 'idle' ? '🤖 Rover Start' : '🚩 Start'}
                </div>
                <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
                  {roverStatus === 'running' ? '🚀 Moving...' : 'Waypoint 1'}
                </div>
                <div className="p-3 bg-slate-800 rounded-xl border border-slate-700">
                  Waypoint 2
                </div>
                <div className={`p-3 rounded-xl border font-bold ${
                  roverStatus === 'success' ? 'bg-amber-400 text-slate-950 border-white animate-pulse' : 'bg-indigo-900 text-amber-300 border-indigo-500'
                }`}>
                  ⭐ Star Crystal
                </div>
              </div>

              {roverMessage && (
                <div className="text-xs font-mono text-center text-amber-300 bg-slate-800/80 p-2 rounded-lg">
                  {roverMessage}
                </div>
              )}
            </div>

            {/* Sequence Drop Zone */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-700 flex items-center justify-between">
                <span>Your Algorithm Sequence ({arrangedBlocks.length} blocks):</span>
                {arrangedBlocks.length > 0 && (
                  <button 
                    onClick={() => { setArrangedBlocks([]); setRoverStatus('idle'); setRoverMessage(''); }}
                    className="text-[11px] text-rose-600 hover:underline flex items-center gap-1"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset Blocks</span>
                  </button>
                )}
              </div>

              <div className="min-h-[50px] p-3 bg-slate-100 rounded-xl border-2 border-dashed border-slate-300 flex flex-wrap gap-2 items-center">
                {arrangedBlocks.length === 0 ? (
                  <span className="text-xs text-slate-400 italic">Click commands below to build the sequence in order...</span>
                ) : (
                  arrangedBlocks.map((block, bIdx) => (
                    <button
                      key={bIdx}
                      onClick={() => handleRemoveBlock(bIdx)}
                      className="bg-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm hover:bg-rose-600 transition-colors flex items-center gap-1"
                      title="Click to remove"
                    >
                      <span>{bIdx + 1}. {block}</span>
                      <X className="w-3 h-3" />
                    </button>
                  ))
                )}
              </div>
            </div>

            {/* Available Action Blocks */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-700">Available Command Blocks:</div>
              <div className="flex flex-wrap gap-2">
                {resource.codingTask.availableBlocks.map((block, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAddBlock(block)}
                    className="bg-white border-2 border-indigo-200 hover:border-indigo-500 hover:bg-indigo-50 text-indigo-950 font-bold px-3 py-2 rounded-xl text-xs transition-all shadow-xs"
                  >
                    + {block}
                  </button>
                ))}
              </div>
            </div>

            {/* Hint */}
            <div className="text-[11px] text-slate-500 bg-amber-50 p-2.5 rounded-xl border border-amber-200">
              💡 <strong>Hint:</strong> {resource.codingTask.hint}
            </div>

            {/* Execution Buttons */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={closeModal}
                className="px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700"
              >
                Close
              </button>
              <button
                onClick={handleRunRoverProgram}
                disabled={arrangedBlocks.length === 0 || roverStatus === 'running'}
                className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black px-6 py-2.5 rounded-xl text-xs flex items-center gap-1.5 shadow-md disabled:opacity-40"
              >
                <Play className="w-4 h-4 fill-slate-950" />
                <span>Run Algorithm</span>
              </button>
            </div>

          </div>
        )}

        {/* 3. PRINTABLE WORKSHEET VIEW */}
        {resource.worksheetContent && (
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold font-heading text-slate-900">
                  {resource.worksheetContent.title}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {resource.worksheetContent.printableSummary}
                </p>
              </div>
              <button
                onClick={handlePrintWorksheet}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-sm"
              >
                <Printer className="w-4 h-4" />
                <span>Print Activity</span>
              </button>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border-2 border-slate-300 space-y-4 font-serif">
              <div className="border-b-2 border-slate-300 pb-3 flex justify-between text-xs text-slate-600">
                <span>Explorer Name: _____________________</span>
                <span>Date: ____________</span>
              </div>

              <div className="text-xs font-bold text-slate-900 font-sans">
                Instructions: {resource.worksheetContent.instructions}
              </div>

              <div className="space-y-3 pt-2">
                {resource.worksheetContent.prompts.map((prompt, pIdx) => (
                  <div key={pIdx} className="bg-white p-3.5 rounded-xl border border-slate-200 text-xs text-slate-800 space-y-2">
                    <p className="font-semibold">{prompt}</p>
                    <div className="border-b border-dashed border-slate-300 h-6"></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 pt-2">
              <span>Ready for home or classroom learning. High-contrast printable format.</span>
              <button
                onClick={closeModal}
                className="px-5 py-2 rounded-xl bg-slate-900 text-white font-bold"
              >
                Done
              </button>
            </div>
          </div>
        )}

        {/* 4. STEM EXPERIMENT LAB VIEW */}
        {resource.stemExperimentSteps && (
          <div className="space-y-5">
            <div>
              <div className="inline-flex items-center gap-1 text-xs font-bold text-cyan-700 bg-cyan-50 px-2.5 py-0.5 rounded border border-cyan-200 mb-1">
                <FlaskConical className="w-3.5 h-3.5" />
                <span>Safe Home Kitchen Science</span>
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900">
                {resource.title}
              </h3>
            </div>

            {/* Materials List */}
            <div className="bg-cyan-50/70 p-4 rounded-2xl border border-cyan-200 space-y-2">
              <div className="text-xs font-bold text-cyan-950">Materials Needed:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-cyan-900">
                {resource.stemExperimentSteps.materials.map((mat, mIdx) => (
                  <div key={mIdx} className="flex items-center gap-1.5">
                    <span className="text-cyan-600 font-bold">•</span>
                    <span>{mat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step-by-Step */}
            <div className="space-y-2.5">
              <div className="text-xs font-bold text-slate-800">Experiment Steps:</div>
              {resource.stemExperimentSteps.steps.map((step, sIdx) => (
                <div key={sIdx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-800 flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#0B1B3D] text-amber-400 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {sIdx + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>

            {/* Interactive Reaction Simulator */}
            <div className="bg-slate-900 text-white p-5 rounded-2xl border border-slate-700 text-center space-y-3">
              <div className="text-xs text-slate-400 font-mono">LAB EXPERIMENT SIMULATOR</div>
              {fizzingActive ? (
                <div className="py-4 space-y-2 animate-bounce">
                  <span className="text-4xl">🧪 ✨ 💥 🌌</span>
                  <div className="text-xs font-bold text-amber-300">
                    Reaction occurring! Fizzing CO₂ comet tail creating!
                  </div>
                </div>
              ) : (
                <button
                  onClick={handleTriggerFizz}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-6 py-2.5 rounded-xl text-xs shadow-md"
                >
                  Drip Vinegar & Trigger Comet Reaction 💥
                </button>
              )}
            </div>

            {/* Science Explanation */}
            <div className="text-xs text-slate-600 bg-slate-100 p-3 rounded-xl">
              <strong>The Science Behind It:</strong> {resource.stemExperimentSteps.scienceExplanation}
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={closeModal}
                className="bg-[#0B1B3D] text-amber-400 font-bold px-6 py-2.5 rounded-xl text-xs"
              >
                Complete Lab & Collect Stars
              </button>
            </div>
          </div>
        )}

        {/* 5. RHYTHM BEAT PAD VIEW */}
        {resource.rhythmBeats && (
          <div className="space-y-5">
            <div>
              <div className="inline-flex items-center gap-1 text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded border border-purple-200 mb-1">
                <Music className="w-3.5 h-3.5" />
                <span>Interactive Rhythm Beat Pad</span>
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900">
                {resource.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Tap each pad on time with the beat to create harmonious rhythms!
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4">
              {resource.rhythmBeats.patterns.map((beat, bIdx) => (
                <button
                  key={bIdx}
                  onClick={() => playBeatSound(bIdx)}
                  className={`p-6 rounded-2xl border-2 text-center transition-all flex flex-col items-center justify-center gap-2 ${
                    activeBeatIndex === bIdx
                      ? 'bg-purple-600 text-white border-purple-400 scale-105 shadow-xl'
                      : 'bg-purple-50 text-purple-950 border-purple-200 hover:border-purple-400'
                  }`}
                >
                  <Volume2 className="w-6 h-6" />
                  <span className="text-xs font-bold">{beat}</span>
                  <span className="text-[10px] text-purple-700 font-mono">Beat #{bIdx + 1}</span>
                </button>
              ))}
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => {
                  if (activeChild) completeResourceForChild(activeChild.id, resource.id, 15);
                  closeModal();
                }}
                className="bg-[#0B1B3D] text-amber-400 font-bold px-6 py-2.5 rounded-xl text-xs"
              >
                Save Rhythm Practice (+15 Stars)
              </button>
            </div>
          </div>
        )}

        {/* 6. LEADERSHIP REFLECTION VIEW */}
        {resource.reflectionPrompt && (
          <div className="space-y-5">
            <div>
              <div className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200 mb-1">
                <Compass className="w-3.5 h-3.5" />
                <span>Junior Leader Challenge</span>
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900">
                {resource.title}
              </h3>
            </div>

            <div className="bg-amber-50/70 p-4 rounded-2xl border border-amber-200 text-xs text-amber-950 space-y-2">
              <strong>Scenario:</strong>
              <p>{resource.reflectionPrompt.scenario}</p>
            </div>

            <form onSubmit={handlePledgeSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  How will you hook your listeners and inspire kindness?
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="I will start by asking a fun question about our community, share why it matters, and..."
                  value={reflectionAnswer}
                  onChange={(e) => setReflectionAnswer(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="p-3 bg-slate-100 rounded-xl border border-slate-200 text-xs text-slate-700 italic">
                &ldquo;{resource.reflectionPrompt.actionPledge}&rdquo;
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 rounded-xl border border-slate-300 text-xs font-bold text-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#0B1B3D] text-amber-400 font-bold px-6 py-2.5 rounded-xl text-xs hover:bg-[#163273] transition-colors"
                >
                  Sign Pledge & Submit
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
