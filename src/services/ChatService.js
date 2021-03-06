const db = require('../database');
const Try = require('../utility/Try.js');
const Constants = require('../utility/Constants.js');

class ChatService {
  constructor() {
    this.messages = new Map();
  }

  async applyCash(msg) {
    const lastMessage = this.messages.get(msg.author.id);
    const isMessageCooldownOver = lastMessage === undefined || Date.now() - lastMessage > Constants.messageCooldown;
    const isLongEnough = msg.content.length >= Constants.minCharLength;

    if (isMessageCooldownOver && isLongEnough) {
      this.messages.set(msg.author.id, Date.now());

      return Try(db.users.modifyCash(msg.member, Constants.cashPerMessage));
    }
  }
}

module.exports = new ChatService();
