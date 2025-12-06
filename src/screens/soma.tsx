import { Text, View } from 'react-native';
import { InputCustomizado } from '@/components/inputCustomizado';
import { BotaoCustomizado } from '@/components/botaoCustomizado';
import { useEffect, useState } from 'react';

export function Soma() {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState(0);

  function Soma() {
    const Soma = Number(valor1) + Number(valor2);
    setResultado(Soma);
  }

  useEffect(() => {
    setResultado(0);
  }, [valor1, valor2]);

  return (
    <View className="flex-1 items-center justify-center bg-gray-50 p-6">
      <View className="w-full max-w-sm gap-6 rounded-2xl bg-white p-6 shadow-xl">
        <Text className="text-2xl font-semibold text-gray-800">Calculadora Simples</Text>
        <InputCustomizado
          placeholder={'valor1'}
          keyboardType="numeric"
          value={valor1}
          onChangeText={(text) => setValor1(text)}
        />
        <InputCustomizado
          placeholder="valor2 "
          keyboardType="numeric"
          value={valor2}
          onChangeText={(text) => setValor2(text)}
        />

        <Text className="mt-2 text-4xl font-extrabold text-blue-700">Resultado: {resultado}</Text>
      </View>
      <View className="mt-6 w-full max-w-sm">
        <BotaoCustomizado title="SOMAR" onPress={Soma} />
      </View>
    </View>
  );
}
