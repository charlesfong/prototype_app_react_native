import React from 'react'
import { Icon } from 'react-native-elements'
import constants from './constants'

const Chevron = () => (
  <Icon
    name="chevron-right"
    type="entypo"
    color='{constants.lightGray2}'
    containerStyle={{ marginLeft: -15, width: 20 }}
  />
)

export default Chevron
