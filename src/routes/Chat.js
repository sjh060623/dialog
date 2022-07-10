import React, { useEffect, useState } from "react";
import "@stream-io/stream-chat-css/dist/css/index.css";
import { StreamChat } from "stream-chat";
import {
  Channel,
  ChannelHeader,
  Chat,
  MessageInput,
  MessageList,
  Window,
} from "stream-chat-react";

const client = StreamChat.getInstance("rkwmdg72bb3y");

export default () => {
  const [channel, setChannel] = useState(null);
  useEffect(() => {
    (async () => {
      await client.setGuestUser({
        id: String(Math.floor(Math.random() * Date.now())),
        name: "Users",
      });
      const channel = await client.channel("lotto-chat", "lo", {
        name: "lo",
      });
      setChannel(channel);
    })();
    return () => {
      client.disconnectUser();
    };
  }, []);
  if (!channel) {
    return null;
  }

  return (
    <div className="chatui">
      <Chat client={client}>
        <Channel channel={channel}>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
        </Channel>
      </Chat>
    </div>
  );
};
