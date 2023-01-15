import {
  CircularProgress,
  CircularProgressLabel,
  Text,
} from '@chakra-ui/react';
import { useEffect } from 'react';

import { useStore } from 'stadux-react';
import {
  countdownStore,
  endCountdownEvent,
  isCountdownRunningStore,
  timesRemainingLabelStore,
  timesRemainingPercentageStore,
} from '../store/pomoStore';

const CountdownCircle = () => {
  const countdown = useStore(countdownStore);
  const timesRemainingLabel = useStore(timesRemainingLabelStore);
  const timesRemainingPercentage = useStore(timesRemainingPercentageStore);
  const isCountdownRunning = useStore(isCountdownRunningStore);

  useEffect(() => {
    if (countdown <= 0) {
      endCountdownEvent();
    }
  }, [countdown]);

  return (
    <CircularProgress
      capIsRound
      thickness="6px"
      size={300}
      value={timesRemainingPercentage}
      trackColor="#ebebeb"
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
