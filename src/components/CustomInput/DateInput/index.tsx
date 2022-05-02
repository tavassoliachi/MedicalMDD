import {View, Text, Pressable} from 'react-native';
import {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {getStyles} from './styles';
import {IProps} from './types';
import React from 'react';

const DateInput = ({
  onChange,
  value,
  borderStyle = 'underlined',
  tip,
  error,
}: IProps) => {
  const [open, setOpen] = useState(false);
  const [picked, setPicked] = useState(false);
  const styles = getStyles({borderStyle, error});
  return (
    <View style={styles.container}>
      <Pressable onPress={() => setOpen(true)} style={styles.dateToggle}>
        <Text style={styles.dateText}>
          {picked ? value.toLocaleDateString() : tip}
        </Text>
      </Pressable>
      <DatePicker
        mode="date"
        modal
        open={open}
        date={value}
        maximumDate={new Date()}
        onConfirm={date => {
          setOpen(false);
          !picked && setPicked(true);
          onChange(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

export default DateInput;
