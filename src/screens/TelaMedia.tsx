import { BotaoCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { useState } from 'react';
import { View, Text } from 'react-native';

export function TelaMedia() {
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [media, setMedia] = useState(0);

  function CalcularMedia() {
    const mediacalcula = (Number(nota1) + Number(nota2)) / 2;
    setMedia(mediacalcula);
    return `${mediacalcula}`;
  }

  return (
    <>
      <View className="flex-1 items-center justify-center">
        <Text className="text-2xl font-semibold text-gray-800">Média Final</Text>
        <InputCustomizado placeholder="nota 1" keyboardType="numeric" onChangeText={setNota1} />
        <InputCustomizado placeholder="nota 2" keyboardType="numeric" onChangeText={setNota2} />

        <BotaoCustomizado title="Média" onPress={CalcularMedia} />

        <Text className="mt-2 text-4xl font-extrabold text-blue-700">{media}</Text>
      </View>
    </>
  );
}
