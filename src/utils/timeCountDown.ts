import * as dayjs from 'dayjs';
import durationPlugin from 'dayjs/plugin/duration';

dayjs.extend(durationPlugin);

export function timeCountDown(seconds: number) {
	const duration = dayjs.duration(seconds, 'seconds');

	return [
		`${padStartWithTwoZeros(duration.minutes())}`,
		':',
		`${padStartWithTwoZeros(duration.seconds())}`
	].join('');
}

function padStartWithTwoZeros(value: number) {
	return value.toString().padStart(2, '0');
}
