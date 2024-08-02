import crypto from 'crypto';
import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const AnswerSequence = {
  0: 'A',
  1: 'B',
  2: 'C',
  3: 'D',
  4: 'E',
  5: 'F',
}

/**
 * 单选
 * @param { string } name 问题表态
 * @param { string } description 问题描述
 * @param { Array<string> } answers 问题选项 
 * @param { string } correctAnswer 问题正确答案
 * @returns 
 */
const QuizComponent = ({ name, description, answers = [], correctAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [result, setResult] = useState('');

  const handleAnswerChange = (answer) => {
    setSelectedAnswer(answer);
    setResult('')
  };

  const checkAnswer = () => {
    if (selectedAnswer.startsWith(correctAnswer)) {
      setResult('回答正确！🎉');
    } else {
      setResult('回答错误，请再试一次。');
    }
  };

  return (
    <div className="max-w-md mx-auto p-5 m-12 border rounded-md shadow-md">
      <h2 className="py-2 text-2xl font-bold mb-4 flex items-center justify-center">
        <span role="img" aria-label="question mark" className="mr-2">
          {/* <FontAwesomeIcon icon={faQuestionCircle} className="text-blue-500 h-7 w-7" /> */}
        </span>
        <span>是时候做个测验了！</span>
      </h2>
      <legend className="text-base font-semibold leading-6">{name}</legend>
      <div className="mt-6 space-y-4">
        {
          answers.map((answer, index) => <div key={answer} className="flex items-start gap-x-3" style={{ columnGap: "0.75rem"}}>
            <input
              value={answer}
              checked={selectedAnswer === answer}
              onChange={(e) => handleAnswerChange(answer)}
              id={`${generateMD5(name)}-${index}`}
              name={name}
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 cursor-pointer focus:ring-indigo-600"
              style={{ marginTop: "0.125rem"}}
            />
            <label htmlFor={`${generateMD5(name)}-${index}`} className="block text-sm font-medium cursor-pointer leading-6">{answer}</label>
          </div>)
        }
      </div>
      <div className="mt-4 text-right">
        <button onClick={checkAnswer} className="px-3 py-1.5 rounded-md border border-input">
          检查答案
        </button>
      </div>
      {result && (
        <div className={`mt-4 text-lg font-semibold ${result.includes('正确') ? 'text-green-500' : 'text-red-500'}`}>
          当前答案 {selectedAnswer?.charAt?.(0) || '未选择'}，{result}
        </div>
      )}
    </div>
  );
};

function generateMD5(input) {
  return crypto.createHash('md5').update(input).digest('hex');
}

export default QuizComponent;
