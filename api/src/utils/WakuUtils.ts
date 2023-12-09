import protobuf from 'protobufjs';
import { createEncoder, createDecoder } from '@waku/sdk';
import { createLightNode } from '@waku/sdk';
import { waitForRemotePeer, Protocols } from '@waku/sdk';

export const runWaku = async () => {
  // Create and start a Light Node
  const node = await createLightNode({ defaultBootstrap: true });
  await node.start();

  // Use the stop() function to stop a running node
  // await node.stop();

  // Wait for a successful peer connection
  await waitForRemotePeer(node);

  // Wait for peer connections with specific protocols
  await waitForRemotePeer(node, [Protocols.LightPush, Protocols.Filter]);

  // Choose a content topic
  const contentTopic = '/light-guide/1/message/proto';

  // Create a message encoder and decoder
  const decoder = createDecoder(contentTopic);
  const encoder = createEncoder({
    contentTopic: contentTopic, // message content topic
    ephemeral: true, // allows messages not be stored on the network
  });

  // Create a message structure using Protobuf
  const ChatMessage = new protobuf.Type('ChatMessage')
    .add(new protobuf.Field('timestamp', 1, 'uint64'))
    .add(new protobuf.Field('sender', 2, 'string'))
    .add(new protobuf.Field('message', 3, 'string'));

  // Create a new message object
  const protoMessage = ChatMessage.create({
    timestamp: Date.now(),
    sender: 'Alice',
    message: 'Hello, World!',
  });

  // Serialise the message using Protobuf
  const serialisedMessage = ChatMessage.encode(protoMessage).finish();

  // Send the message using Light Push
  await node.lightPush.send(encoder, {
    payload: serialisedMessage,
  });

  // Create the callback function
  const callback = (wakuMessage) => {
    // Check if there is a payload on the message
    if (!wakuMessage.payload) return;
    // Render the messageObj as desired in your application
    const messageObj = ChatMessage.decode(wakuMessage.payload);
    console.log(messageObj);
  };

  // Create a filter subscription
  const subscription = await node.filter.createSubscription();

  // Subscribe to content topics and process new messages
  await subscription.subscribe([decoder], callback);
};
