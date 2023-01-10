import { Box } from '@chakra-ui/react';

const LofiPlayer = () => {
  return (
    <Box hidden>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/jfKfPfyJRdk?controls=0&autoplay=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
        allowFullScreen
      />
    </Box>
  );
};

export default LofiPlayer;
