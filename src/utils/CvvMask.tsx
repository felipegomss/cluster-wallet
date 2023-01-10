import { Text } from 'react-native';

interface iCvvNumber {
  cvvNumber: number,
  hidden: boolean
}

export function CvvMask({ cvvNumber, hidden }: iCvvNumber) {
  return (
    <Text>
      {hidden ? 'XXX' : cvvNumber}
    </Text >
  );
}

