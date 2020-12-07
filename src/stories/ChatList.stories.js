import React from 'react';
import ChatList from '../components/ChatList';
import { action } from '@storybook/addon-actions';

export default {
  title: 'ChatList',
  component: ChatList
};

const Template = (args) => <ChatList {...args} />;

export const Common = Template.bind({});
Common.args = {

  clickHandle: action('Chat clicked')
};

export const EmptyList = () => Template.bind({});
EmptyList.args = {
  list: [],
  clickHandle: action('Chat clicked')
};
