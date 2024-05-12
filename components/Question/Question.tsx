'use client';

import { FC, useState } from 'react';
import { Text } from '@/components/common';
import { Plus, Minus } from '@/assets/icons';
import { merge } from '@/utils/helpers';

type QuestionProps = {
  question: string;
  answer: string;
  itemNumber: number;
};

const Question: FC<QuestionProps> = ({ question, answer, itemNumber }) => {
  const [isAnswerOpened, setIsAnswerOpened] = useState(false);
  const handleQuestionOpenClose = () => {
    setIsAnswerOpened((prev) => !prev);
  };

  return (
    <div
      className='group cursor-pointer border-b border-blue-light-800 py-6'
      onClick={handleQuestionOpenClose}
    >
      <div className='flex items-center justify-between gap-2'>
        <div className='flex items-center'>
          <Text
            as='p'
            sz='16'
            className='mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-light-800 font-medium text-yellow-dark-300'
          >
            {itemNumber}
          </Text>
          <Text
            as='h4'
            sz='20'
            className={merge('font-medium md:group-hover:text-blue', {
              'text-blue': isAnswerOpened,
            })}
          >
            {question}
          </Text>
        </div>
        {isAnswerOpened ? (
          <Minus className='flex-shrink-0' />
        ) : (
          <Plus className='flex-shrink-0 md:group-hover:[&>*]:fill-blue' />
        )}
      </div>
      <div
        className={merge('ml-14 overflow-hidden text-gray-600 duration-300', {
          'max-h-96': isAnswerOpened,
          'max-h-0': !isAnswerOpened,
        })}
        onClick={(e) => e.stopPropagation()}
      >
        <Text as='p' sz='16' className='pt-2'>
          {answer}
        </Text>
      </div>
    </div>
  );
};

export default Question;
