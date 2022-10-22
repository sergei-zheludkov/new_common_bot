import { LocalStorage } from 'node-localstorage';
import { UrbanChat } from '@urban-bot/core';

const CHAT_MAP_KEY = 'CHAT_MAP_KEY';
const localStorage = new LocalStorage('./storage');

const getChatsMap = (): Record<string, UrbanChat> => {
  const chatsRaw = localStorage.getItem(CHAT_MAP_KEY);

  if (!chatsRaw) {
    return {};
  }

  return JSON.parse(chatsRaw) ?? {};
};

const getChats = () => {
  const chatsMap = getChatsMap();
  return Object.values(chatsMap);
};

const saveChat = (chat: UrbanChat) => {
  const chatsMap = getChatsMap();

  const newChatsMap = {
    ...chatsMap,
    [String(chat.id)]: chat,
  };

  localStorage.setItem(CHAT_MAP_KEY, JSON.stringify(newChatsMap));
};

export {
  CHAT_MAP_KEY,
  localStorage,
  getChatsMap,
  getChats,
  saveChat,
};
