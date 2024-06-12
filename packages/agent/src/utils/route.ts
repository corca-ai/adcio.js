import { v4 as uuidv4 } from 'uuid';

export const getNewChatGroupPath = () => 'chat/' + uuidv4();
