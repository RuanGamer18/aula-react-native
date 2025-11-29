import { Button, ButtonProps, TextInputProps, View } from 'react-native';

export function BotaoCustomizado(rest: ButtonProps) {
  return (
    <View className="text-4xl:rounded-2xl w-full">
      <Button {...rest} />
    </View>
  );
}
