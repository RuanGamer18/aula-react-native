import { BotaoCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { Text, View } from 'react-native';

export function LoginScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-600">
      <InputCustomizado placeholder={'Login'} />
      <InputCustomizado placeholder="senha" />

      <BotaoCustomizado title="entrar" />
    </View>
  );
}
