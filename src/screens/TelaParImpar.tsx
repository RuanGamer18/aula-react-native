import { BotaoCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

export function TelaParImpar() {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState('');
  function VerificarParImpar() {
    // Lógica para verificar se o número é par ou ímpar
    const num = Number(numero);
    if (isNaN(num)) {
      setResultado('Por favor, digite um número válido.');
    } else if (num % 2 === 0) {
      setResultado('Par');
    } else {
      setResultado('Ímpar');
    }
  }
  useEffect(() => {
    setResultado('');
  }, [numero]);

  return (
    <>
      <View className="flex-1 items-center justify-center">
        <Text className="text-2xl font-semibold text-gray-800">Par ou Ímpar</Text>
        <InputCustomizado
          placeholder="Digite um número"
          keyboardType="numeric"
          onChangeText={setNumero}
        />
        <BotaoCustomizado title="Verificar" onPress={VerificarParImpar} />
        <Text className="mt-2 text-4xl font-extrabold text-blue-700">Resultado: {resultado}</Text>
      </View>
    </>
  );
}
