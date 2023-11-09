import * as React from 'react';
import {Text, View, useWindowDimensions} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import BadgedTab from './BadgedTab';

const FirstRoute = () => (
  <View>
    <Text>First Route</Text>
  </View>
);

const SecondRoute = () => (
  <View>
    <BadgedTab />
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function TabsSection() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Games played'},
    {key: 'second', title: 'Badges'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={props => (
        <TabBar
          {...props}
          style={{backgroundColor: '#fff'}}
          indicatorStyle={{
            backgroundColor: '#6231AD',
          }}
          renderLabel={({route, focused}) => (
            <Text
              style={{
                color: focused ? '#6231AD' : '#727682',
                fontWeight: focused ? 'bold' : 'normal',
              }}
              className="px-2 text-sm ">
              {route.title}
            </Text>
          )}
        />
      )}
    />
  );
}
