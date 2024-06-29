import { Text, View } from 'react-native';

import SVGLogo from '../../shared/assets/svg-logo.svg';

export default function HomeScreen() {
  return (
    <View className="flex flex-1 justify-center items-center">
      <Text className="text-lg font-semibold">
        HomeScreen
      </Text>

      <SVGLogo width={75} height={75} />
    </View>
  );
}
