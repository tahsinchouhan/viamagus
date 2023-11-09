import * as React from 'react';
import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {useFont} from '../../hooks/useFont';
import {COLORS} from '../../utils/constants';
import BadgedTab from './BadgedTab';

const renderScene = SceneMap({
  first: BadgedTab,
  second: BadgedTab,
});

export default function TabsSection() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(1);
  const [routes] = React.useState([
    {key: 'first', title: 'Games played'},
    {key: 'second', title: 'Badges'},
  ]);

  return (
    <View className=" h-full">
      <TabView
        className="min-h-screen h-full"
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={props => (
          <TabBar
            {...props}
            style={styles.tabBar}
            indicatorStyle={{
              backgroundColor: COLORS.active,
            }}
            bounces
            renderLabel={({route, focused}) => (
              <TabLabel title={route.title} focused={focused} />
            )}
          />
        )}
      />
    </View>
  );
}

const TabLabel = ({title, focused}: {title: string; focused: boolean}) => {
  const color = focused ? '#6231AD' : '#727682';
  const font = useFont();
  console.log(title);
  return (
    <View className="w-28 items-center">
      <Text
        numberOfLines={1}
        style={[
          {color},
          focused ? font['montserrat-semibold'] : font.montserrat,
        ]}
        className="text-sm">
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
  },
});
