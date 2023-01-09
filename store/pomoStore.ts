import * as dayjs from 'dayjs';
import durationPlugin from 'dayjs/plugin/duration';
import { createEvent, createStore } from 'stadux';

dayjs.extend(durationPlugin);

export const TWENTY_FIVE_MINUTES = 25 * 60;

export const startCountdownEvent = createEvent();
export const endCountdownEvent = createEvent();

const tickEvent = createEvent();
const resetEvent = createEvent();

let intervalHandle: NodeJS.Timeout | string | number | undefined;

startCountdownEvent.watch(() => {
  tickEvent();
  intervalHandle = setInterval(() => {
    tickEvent();
  }, 1000);
});

endCountdownEvent.watch(() => {
  clearInterval(intervalHandle);
  intervalHandle = undefined;
  resetEvent();
});

export const isCountdownRunningStore = createStore(false)
  .on(startCountdownEvent, () => true)
  .on(endCountdownEvent, () => false);

export const countdownStore = createStore(TWENTY_FIVE_MINUTES)
  .on(tickEvent, (state) => state - 1)
  .reset(resetEvent);

export const timesRemainingLabelStore = countdownStore.select((countdown) => {
  const duration = dayjs.duration(countdown, 'seconds');
  return [
    `${padStartWithTwoZeros(duration.minutes())}`,
    ':',
    `${padStartWithTwoZeros(duration.seconds())}`,
  ].join('');
});

export const timesRemainingPercentageStore = countdownStore.select(
  (countdown) => (1 - countdown / TWENTY_FIVE_MINUTES) * 100
);

function padStartWithTwoZeros(value: number) {
  return value.toString().padStart(2, '0');
}
