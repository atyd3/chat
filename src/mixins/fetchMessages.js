export default function fetchMessages(chat) {
    let messages = [{'received': chat.received}, {'sent': chat.sent}, {'unread': chat.unread}];
    return messages
}
