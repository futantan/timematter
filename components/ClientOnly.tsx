import { useEffect, useState } from 'react';

const ClientOnly = (props: { children: any }) => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }
  return props.children;
};

export default ClientOnly;
