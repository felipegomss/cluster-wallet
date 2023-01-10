import { Text } from 'react-native';
interface iDate {
  expiresM: number,
  expiresY: number,
  hidden: boolean

}
export function DateMask({ expiresM, expiresY, hidden }: iDate) {
  return (
    <Text >
      {
        hidden ? 'XX / XX' :
          <Text>
            {expiresM < 10 ? '0' + expiresM : expiresM} / {expiresY}
          </Text>
      }

    </Text>
  );
}

