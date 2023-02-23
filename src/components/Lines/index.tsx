import { View } from 'react-native';

import { styles } from './styles';

import { Line } from '../Line';

export function Lines() {
  return (
    <View style={styles.container}>
      <Line width="30%" />
      <Line width="70%" />
      <Line width="50%" />
      <Line width="90%" />
      <Line width="80%" />
    </View>
  );
}