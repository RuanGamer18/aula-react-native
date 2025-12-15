import { BotaoCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export function TelaSoma() {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [valor3, setValor3] = useState('');
  const [resultado, setResultado] = useState(0);

  function Soma() {
    const Soma = Number(valor1) + Number(valor2) + Number(valor3);
    setResultado(Soma);
  }
  useEffect(() => {
    setResultado(0);
  }, [valor1, valor2, valor3]);
  return (
    <>
      <View className="flex-1 items-center justify-center">
        <Text className="text-2xl font-semibold text-gray-800">Soma</Text>
        <InputCustomizado
          placeholder="Valor 1"
          keyboardType="numeric"
          value={valor1}
          onChangeText={(text) => setValor1(text)}
        />
        <InputCustomizado
          placeholder="Valor 2"
          keyboardType="numeric"
          value={valor2}
          onChangeText={(text) => setValor2(text)}
        />
        <InputCustomizado
          placeholder="Valor 3"
          keyboardType="numeric"
          value={valor3}
          onChangeText={(text) => setValor3(text)}
        />

        <BotaoCustomizado title="Somar" onPress={Soma} />

        <Text className="mt-2 text-4xl font-extrabold text-blue-700">Resultado: {resultado}</Text>
      </View>
    </>
  );
}
