import {
  CircularProgress,
  CircularProgressLabel,
  Text,
} from '@chakra-ui/react';

import { useStore } from 'stadux-react';
import {
  isCountdownRunningStore,
  timesRemainingLabelStore,
  timesRemainingPercentageStore,
} from '../store/pomoStore';

const CountdownCircle = () => {
  const timesRemainingLabel = useStore(timesRemainingLabelStore);
  const timesRemainingPercentage = useStore(timesRemainingPercentageStore);
  const isCountdownRunning = useStore(isCountdownRunningStore);

  return (
    <CircularProgress
      capIsRound
      thickness="6px"
      size={300}
      value={timesRemainingPercentage}
      color="green.400"
    >
      <CircularProgressLabel>
        <Text fontSize="5xl" fontWeight="bold">
          {timesRemainingLabel}
        </Text>
        {isCountdownRunning && (
          <Text fontSize="sm" color="gray.300">
            Focus time remaining
          </Text>
        )}
      </CircularProgressLabel>
    </CircularProgress>
  );
};

export default CountdownCircle;
