import { BotaoCustomizado } from '@/components/botaoCustomizado';
import { useState } from 'react';
import { Text, View } from 'react-native';

export function TelaContador() {
  const [Valor, setValor] = useState(0);

  function Incrementar() {
    setValor(Valor + 1);
  }
  function Decrementar() {
    setValor(Valor - 1);
  }
  return (
    <>
      <View className="flex-1 items-center justify-center">
        <Text className="text-2xl font-semibold text-gray-800">Inputs</Text>
        <BotaoCustomizado title="+" onPress={Incrementar} />
        <Text className="mt-2 text-4xl font-extrabold text-blue-700">Valor: {Valor}</Text>
        <BotaoCustomizado title="-" onPress={Decrementar} />
      </View>
    </>
  );
}
