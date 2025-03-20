import { Tabs } from 'expo-router'
import React from 'react'

function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="Home" />
      <Tabs.Screen name="Order" />
      <Tabs.Screen name="Search" />
      <Tabs.Screen name="Cart" />
      <Tabs.Screen name="Profile" />
    </Tabs>
  )
}

export default TabLayout