import { TextInput, TextInputProps } from 'react-native';

export function InputCustomizado({...reset}:TextInputProps){
  return <TextInput {...reset} />;
}
