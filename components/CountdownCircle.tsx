import { useStore } from 'stadux-react';
import {
  timesRemainingLabelStore,
  timesRemainingPercentageStore,
} from '../store/pomoStore';
import CircleProgressBar from './CircleProgressBar';

const CountdownCircle = () => {
  const timesRemainingLabel = useStore(timesRemainingLabelStore);
  const timesRemainingPercentage = useStore(timesRemainingPercentageStore);

  return (
    <div className="relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        {/* TODO: update font here */}
        <div className="text-5xl font-bold">{timesRemainingLabel}</div>
        <span className="text-sm text-gray-300">Focus time remaining</span>
      </div>
      <CircleProgressBar
        size={300}
        strokeWidth={16}
        percentage={timesRemainingPercentage}
      />
    </div>
  );
};

export default CountdownCircle;
