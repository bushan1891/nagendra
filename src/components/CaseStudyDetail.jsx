import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import backgroundData from '../assets/background.json';

function CaseStudyDetail({ isDark }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [study, setStudy] = useState(null);

  useEffect(() => {
    const caseStudy = backgroundData.case_studies[parseInt(id)];
    if (caseStudy) {
      setStudy(caseStudy);
    }
  }, [id]);

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className={`min-h-screen pt-24 pb-20 px-6 transition-colors ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className={`mb-8 flex items-center gap-2 transition-colors ${
            isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </button>

        <div className={`rounded-2xl p-8 md:p-12 ${
          isDark
            ? 'bg-gray-800 border border-gray-700'
            : 'bg-white border border-gray-200 shadow-lg'
        }`}>
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 ${
            isDark
              ? 'bg-blue-500/20 text-blue-400'
              : 'bg-blue-50 text-blue-600'
          }`}>
            {study.industry}
          </span>

          <h1 className={`text-4xl md:text-5xl font-bold mb-8 transition-colors ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {study.client_alias}
          </h1>

          <div className="space-y-8">
            <div>
              <h2 className={`text-2xl font-bold mb-4 transition-colors ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                The Challenge
              </h2>
              <p className={`text-lg leading-relaxed transition-colors ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {study.challenge}
              </p>
            </div>

            <div>
              <h2 className={`text-2xl font-bold mb-4 transition-colors ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                The Solution
              </h2>
              <p className={`text-lg leading-relaxed transition-colors ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {study.solution}
              </p>
            </div>

            <div className={`rounded-xl p-6 ${
              isDark
                ? 'bg-blue-500/10 border border-blue-500/20'
                : 'bg-blue-50 border border-blue-200'
            }`}>
              <h2 className={`text-2xl font-bold mb-4 transition-colors ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`}>
                Impact & Results
              </h2>
              <p className={`text-lg leading-relaxed transition-colors ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {study.impact}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudyDetail;
