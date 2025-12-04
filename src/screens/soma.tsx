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
    // 1. FUNDO GERAL: Fundo suave (cinza claro) e padding
    <View className="flex-1 items-center justify-center bg-gray-50 p-6"> 
      
      {/* 2. CARD PRINCIPAL: Limita a largura, sombra, fundo branco e cantos arredondados */}
      <View className="w-full max-w-sm gap-6 p-6 bg-white rounded-2xl shadow-xl"> 
        
        {/* 🚀 ADICIONAL: Título para dar contexto visual e hierarquia */}
        <Text className="text-2xl font-semibold text-gray-800">
          Calculadora Simples
        </Text>

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
        
        {/* 3. RESULTADO: Destaque de cor e tamanho para melhor leitura */}
        <Text className="text-4xl font-extrabold text-blue-700 mt-2">
          Resultado: {resultado}
        </Text>
      </View>
      
      {/* 🚀 ADICIONAL: Wrapper para o botão para manter a largura do card */}
      <View className="w-full max-w-sm mt-6">
        <BotaoCustomizado 
            title="SOMAR" 
            onPress={Soma} 
            // O ideal é que o BotaoCustomizado tenha classes como 'bg-blue-600 rounded-lg p-4 shadow-md'
        />
      </View>
    </View>
  );
}