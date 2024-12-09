// import { Tabs } from 'expo-router';
// import Ionicons from '@expo/vector-icons/Ionicons';

// export default function TabLayout() {
//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: '#000000',
//         headerShown: false,
//         tabBarStyle: {
//           backgroundColor: '#FFF',
//         },
//       }}
//     >
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Welcome',
//           tabBarIcon: ({ color, focused }) => (
//             <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="login"
//         options={{
//           title: 'About',
//           tabBarIcon: ({ color, focused }) => (
//             <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }

// 5

import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#000000',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#FFF',
        },
      }}
    >
      <Tabs.Screen
        name="yourRides"
        options={{
          title: 'Suas caronas',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'newspaper' : 'newspaper-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Procurar',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'search-circle' : 'search-circle-outline'} color={color} size={28}/>
          ),
        }}
      />
      <Tabs.Screen
        name="offer"
        options={{
          title: 'Oferecer',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'add-circle' : 'add-circle-outline'} color={color} size={26}/>
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'chatbubbles' : 'chatbubbles-outline'} color={color} size={26}/>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'person-circle' : 'person-circle-outline'} color={color} size={26}/>
          ),
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="signup"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="offerConfirmation"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="rideDetails"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="signuInfo"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="offerInformation"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="searchResults"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="signupInfo"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="rating"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
