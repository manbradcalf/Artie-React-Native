// components/Hello.tsx
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

export const Hello: React.FC<Props> = ({route}) => {
  const props = route.params.props; 
  const [enthusiasmLevel, setEnthusiasmLevel] = React.useState(
    props.enthusiasmLevel,
  );
  console.log('props is ' + enthusiasmLevel);

  const onIncrement = () => setEnthusiasmLevel((enthusiasmLevel || 0) + 1);
  const onDecrement = () => setEnthusiasmLevel((enthusiasmLevel || 0) - 1);

  const getExclamationMarks = (numChars: number) =>
    Array(numChars + 1).join('!');
  return (
    <View style={styles.root}>
      <Text style={styles.greeting}>
        Hello {props.name + getExclamationMarks(enthusiasmLevel || 0)}
      </Text>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button
            title="-"
            onPress={onDecrement}
            accessibilityLabel="decrement"
            color="red"
          />
        </View>

        <View style={styles.button}>
          <Button
            title="+"
            onPress={onIncrement}
            accessibilityLabel="increment"
            color="blue"
          />
        </View>
      </View>
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  root: {
    // marginTop: 100,
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttons: {
    flexDirection: 'row',
    minHeight: 70,
    alignItems: 'stretch',
    alignSelf: 'center',
    borderWidth: 5,
  },
  button: {
    flex: 1,
    paddingVertical: 0,
  },
  greeting: {
    color: '#999',
    fontWeight: 'bold',
  },
});

