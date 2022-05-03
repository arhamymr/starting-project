
import { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export default function MouseDot() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [scale, setScale] = useState(1);
  const d = '10px';

  useEffect(() => {
    const update = (e) => {
      setX(e.pageX - 5)
      setY(e.pageY - 5)
      if (e.srcElement.id === 'expand' ||
        e.srcElement.classList[0] === 'chakra-switch__thumb' ||
        e.srcElement.classList[0] === 'chakra-switch__track') { setScale(12) } else setScale(1)
    }
    setInterval(() => {
      window.addEventListener('mousemove', update)
      window.addEventListener('touchmove', update)
    }, 20);
  }, []);

  return (
    <Box
      as={motion.div}
      position={'absolute'}
      animate={{ x, y, scale }}
      w={d}
      h={d}
      rounded={'50%'}
      zIndex={999}
      backdropFilter={'invert(100%)'}
      pointerEvents={'none'}
    />
  )
}
