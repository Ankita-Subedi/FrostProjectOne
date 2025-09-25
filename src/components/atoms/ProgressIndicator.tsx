import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Step {
  id: number;
  title: string;
  date: string;
}

interface ProgressBarProps {
  steps: Step[];
  currentStep: number;
  className?: string;
}

export function ProgressIndicator({
  steps,
  currentStep,
  className
}: ProgressBarProps) {
  return (
    <div className={cn('w-full', className)}>
      <div className="relative flex flex-col md:flex-row md:items-center items-start gap-3 md:mx-0 mx-2 ">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          const isUpcoming = stepNumber > currentStep;

          return (
            <div
              key={step.id}
              className="relative flex-1 flex md:flex-col flex-row md:items-center  min-w-0"
            >
              <div
                className={cn(
                  'w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 ease-in-out relative z-10',
                  {
                    'bg-blue border-skyblue text-white': isCompleted,
                    'bg-white border-skyblue text-skyblue': isCurrent,
                    'bg-gray-200 border-gray-300 text-gray-400': isUpcoming
                  }
                )}
              >
                {isCompleted ? (
                  <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                ) : isCurrent ? (
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-skyblue rounded-full" />
                ) : (
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full" />
                )}
              </div>

              <span
                className={cn(
                  'truncate w-36 md:w-auto mt-2 sm:mt-3 text-xs sm:text-sm font-medium md:text-center ml-4 md:ml-0 leading-tight',
                  'sm:whitespace-nowrap break-words',
                  {
                    'text-skyblue': isCompleted || isCurrent,
                    'text-gray-400': isUpcoming
                  }
                )}
              >
                {step.title}
              </span>
              <span className={cn('text-gray-400 text-xs')}>{step.date}</span>

              {index < steps.length - 1 && (
                <div
                  className={cn(
                    'hidden md:block absolute top-3 sm:top-4 left-1/2 h-0.5 transition-all duration-300 ease-in-ou',
                    {
                      'bg-skyblue': isCompleted,
                      'border-t-2 border-dotted border-gray-300 bg-transparent':
                        !isCompleted
                    }
                  )}
                  style={{
                    left: '50%',
                    right: '-50%',
                    width: 'calc(100% - 12px)',
                    marginLeft: '12px'
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
 
