import {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';

const useOrientation = () => {
  const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

  const [orientation, setOrientation] = useState(true);
  const onChange = () => {
    let o = isPortrait() ? true : false;
    setOrientation(o);
  };

  useEffect(() => {
    const susbcription = Dimensions.addEventListener('change', onChange);
    return () => susbcription.remove('change', onChange);
  });
  return orientation;
};

export default useOrientation;
