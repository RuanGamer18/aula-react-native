import { Button, ButtonProps, TextInputProps, View } from 'react-native';

export function BotaoCustomizado(rest: ButtonProps) {
  return (
    <View className="w-full ">
      <Button {...rest} />
    </View>
  );
}
