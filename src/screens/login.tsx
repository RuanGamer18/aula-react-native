import { BotaoCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { useState } from 'react';
import { Text, View } from 'react-native';

export function LoginScreen() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  function logar() {
    console.log(`Login: ${login}, Senha: ${senha}`);
  }

  return (
    <View className="flex-1 items-center justify-center bg-slate-200">
      <View className="w-full items-center gap-5 p-5">
        <Text className="text-3xl">Aplication</Text>
        <InputCustomizado
          placeholder={'Login'}
          onChangeText={(text) => {
            setLogin(text);
          }}
        />
        <InputCustomizado
          placeholder="senha"
          onChangeText={(text) => {
            setSenha(text);
          }}
          secureTextEntry={true}
        />

        <BotaoCustomizado title="entrar" onPress={logar} />
        <View className="flex-row gap-2">
          <Text className="text-blue-400 text-xl">Esqueceu a senha?</Text>
          <Text className="text-center">|</Text>
          <Text className="text-blue-400 text-xl">Cadastra-se</Text>
        </View>
      </View>
    </View>
  );
}
