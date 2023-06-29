import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import { ScreenA } from '../screens/screenA';
import { ScreenB } from '../screens/screenB';

export function DrawerRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={ScreenA}/>
      <Drawer.Screen name="Logout" component={ScreenB} />
    </Drawer.Navigator>

    
  );
}