import { BotaoCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { Text, View } from 'react-native';

export function LoginScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-200">
      <View className="w-full items-center gap-5 p-5">
        <Text className="text-3xl">Aplication</Text>
        <InputCustomizado placeholder={'Login'} />
        <InputCustomizado placeholder="senha" />

        <BotaoCustomizado title="entrar" />
        <Text className='text-blue-400'>
            Esqueceu a senha?
        </Text>
      </View>
    </View>
  );
}
