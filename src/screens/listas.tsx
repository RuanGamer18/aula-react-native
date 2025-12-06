import { BotaoCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { useState } from 'react';
import { View, Text } from 'react-native';

export function Listas() {
  const [Item, seItem] = useState('');
  const [lista, setLista] = useState<string[]>([]);

  function adicionarItem() {
    setLista([...lista, Item]);
    seItem('');
  }

  function limparLista() {
    setLista([]);
  }
  return (
    <>
      <View className="w-full flex-1 items-center gap-5 rounded-2xl ">
        <Text className="text-4xl">Lista de itens</Text>
        <InputCustomizado placeholder="Item" value={Item} onChangeText={seItem} />
        <BotaoCustomizado title="Adicionar" onPress={adicionarItem} />
        <BotaoCustomizado title="Limpar" onPress={limparLista} />

        {lista.map((item, index) => (
          <Text key={index} className="text-xl">
            {item}
          </Text>
        ))}
      </View>
    </>
  );
}
