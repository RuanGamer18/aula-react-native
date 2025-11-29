import { TextInput, TextInputProps, View } from 'react-native';

export function InputCustomizado({ ...reset }: TextInputProps) {
  return (
    <View className="border-gray-950 - border-2 rounded-2xl: w-full">
      <TextInput {...reset} />
    </View>
  );
}
