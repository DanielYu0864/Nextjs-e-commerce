import play from '../playground';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    play();
  }, []);

  return <div>Helow World</div>;
}
