import { View } from 'react-native';

import { styles } from './styles';

import { Button } from '../../components/Button';
import { Banner } from '../../components/Banner';
import { Lines } from '../../components/Lines';
import { Card } from '../../components/Card';

const DATA = Array.from({ length: 6 }, (_, i) => i);

export function Home() {
  return (
    <View style={styles.container}>
      <Banner />

      <View style={styles.content}>
        <Lines />

        <View style={styles.items}>
          {DATA.map(item => <Card key={item} />)}
        </View>

        <Button title="Clique Aqui" />
      </View>
    </View>
  );
}