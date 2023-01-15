import { Box, Button, Flex, IconButton } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { useStore } from 'stadux-react';
import CountdownCircle from '../components/CountdownCircle';
import VolumeOffIcon from '../components/icon/VolumeOffIcon';
import VolumeOnIcon from '../components/icon/VolumeOnIcon';
import LofiPlayer from '../components/LofiPlayer';
import {
  endCountdownEvent,
  isCountdownRunningStore,
  startCountdownEvent,
} from '../store/pomoStore';

const musicOnAtom = atomWithStorage('musicOn', true);

export default function Pomo() {
  const isCountdownRunning = useStore(isCountdownRunningStore);
  // Consume persisted state like any other atom
  const [isMusicOn, setMusic] = useAtom(musicOnAtom);
  const toggleLofiMusic = () => setMusic(!isMusicOn);

  return (
    <>
      {isCountdownRunning && isMusicOn && <LofiPlayer />}

      <Flex
        as="main"
        minH="100vh"
        alignItems="center"
        flexDir="column"
        justifyContent="center"
      >
        <Flex flexDir="column">
          <Box alignSelf={'end'}>
            {isCountdownRunning ? (
              <IconButton
                aria-label="volume on icon"
                icon={isMusicOn ? <VolumeOnIcon /> : <VolumeOffIcon />}
                onClick={toggleLofiMusic}
              />
            ) : null}
          </Box>
          <CountdownCircle />
          <Flex mt="4" justifyContent="center">
            <Button
              variant={isCountdownRunning ? 'outline' : 'solid'}
              colorScheme="green"
              onClick={() =>
                isCountdownRunning ? endCountdownEvent() : startCountdownEvent()
              }
            >
              {isCountdownRunning ? 'End focus' : 'Start focus'}
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
