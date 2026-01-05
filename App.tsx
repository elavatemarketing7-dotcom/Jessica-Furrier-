
import React, { useState, useEffect } from 'react';
import { AppState } from './types';
import InitialSelection from './components/InitialSelection';
import Quiz from './components/Quiz';
import QuizResult from './components/QuizResult';
import LandingPage from './components/LandingPage';
import Analyzing from './components/Analyzing';
import { EXPERT_DATA } from './constants';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AppState>(AppState.INITIAL);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);

  const handleStartQuiz = () => setCurrentStep(AppState.QUIZ);
  const handleGoDirect = () => setCurrentStep(AppState.LANDING);
  
  const onQuizComplete = (answers: string[]) => {
    setQuizAnswers(answers);
    setCurrentStep(AppState.ANALYZING);
  };

  const onAnalysisComplete = () => {
    setCurrentStep(AppState.RESULT);
  };

  const onProceedToLanding = () => setCurrentStep(AppState.LANDING);

  // Scroll to top on step change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  return (
    <div className="min-h-screen font-sans text-premium-dark overflow-x-hidden">
      {currentStep === AppState.INITIAL && (
        <InitialSelection 
          onStartQuiz={handleStartQuiz} 
          onGoDirect={handleGoDirect} 
        />
      )}

      {currentStep === AppState.QUIZ && (
        <Quiz 
          onComplete={onQuizComplete} 
          onCancel={handleGoDirect}
        />
      )}

      {currentStep === AppState.ANALYZING && (
        <Analyzing onComplete={onAnalysisComplete} />
      )}

      {currentStep === AppState.RESULT && (
        <QuizResult 
          answers={quizAnswers}
          onProceed={onProceedToLanding}
        />
      )}

      {currentStep === AppState.LANDING && (
        <LandingPage />
      )}
    </div>
  );
};

export default App;
