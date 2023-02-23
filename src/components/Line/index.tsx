import { View } from 'react-native';

import { styles } from './styles';

type Props = {
  width: string | number;
}

export function Line({ width }: Props) {
  return (
    <View style={[styles.container, { width }]} />
  );
}