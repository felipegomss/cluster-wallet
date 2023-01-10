import { Text } from 'react-native';

interface iCNumber {
  cNumber: number,
  hidden: boolean
}

export function CcMask({ cNumber, hidden }: iCNumber) {
  var value = cNumber.toString()
  var sliced = value.substring(8, 16)
  var cShow = value.match(/.{4}/g).join(' ')
  var cHidden = sliced.match(/.{4}/g).join(' ').split('').map((char, id) => id < sliced.length - 4 ? 'X' : char)
  return (
    <Text>
      {hidden ? cHidden : cShow}
    </Text >
  );
}

