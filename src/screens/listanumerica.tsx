import { BotaoCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { getData, storeData } from '@/utils/storage';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export async function ListaNumerica() {
  const [Item, seItem] = useState('');
  const [lista, setLista] = useState<number[]>([]);

  function adicionarItem() {
    setLista([...lista, Number(Item)]);
    storeData({ key: 'listaNumerica', value: JSON.stringify([...lista, Number(Item)]) });
    seItem('');
  }

  function limparLista() {
    storeData({ key: 'listaNumerica', value: JSON.stringify([]) });
    setLista([]);
  }

  async function carregarLista() {
    const dados = await getData('listaNumerica');
    if (dados) {
      console.log('Dados carregados:', dados);
      setLista(JSON.parse(dados) as number[]);
    }
  }

  useEffect(() => {
    carregarLista();
  }, []);

  return (
    <View className="w-full flex-1 items-center gap-5 rounded-2xl">
      <Text className="text-4xl">Lista Numérica</Text>
      <InputCustomizado placeholder="Item" value={Item} onChangeText={seItem} />
      <BotaoCustomizado title="Adicionar" onPress={adicionarItem} />
      <BotaoCustomizado title="Limpar" onPress={limparLista} />

      {lista.map((item, index) => (
        <Text key={index} className="text-xl">
          {item} - {item % 2 === 0 ? 'Par' : 'Ímpar'}
        </Text>
      ))}
    </View>
  );
}
