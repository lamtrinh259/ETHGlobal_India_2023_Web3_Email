import { Injectable } from '@nestjs/common';
import {
  Protocols,
  createDecoder,
  createEncoder,
  createLightNode,
} from '@waku/sdk';
import { waitForRemotePeer } from '@waku/sdk';
import protobuf from 'protobufjs';

export interface Email {
  from: string;
  to: string;
  message: string;
  subject: string;
  attachments?: string[];
}

@Injectable()
export class EmailNotificationService {
  private node;
  private encoder;
  private decoder;
  private ChatMessage;
  constructor() {
    // this.intialization();
  }
  async sendEmail(email: Email) {
    // const contentTopic = email.to;

    // // Create a message encoder and decoder
    // this.encoder = createEncoder({
    //   contentTopic: contentTopic, // message content topic
    //   ephemeral: true, // allows messages not be stored on the network
    // });
    // this.decoder = createDecoder(contentTopic);
    // this.subscribe();
    // // Create a message structure using Protobuf
    // this.ChatMessage = new protobuf.Type('ChatMessage')
    //   .add(new protobuf.Field('timestamp', 1, 'uint64'))
    //   .add(new protobuf.Field('sender', 2, 'string'))
    //   .add(new protobuf.Field('message', 3, 'string'));
    // // Create a new message object
    // const protoMessage = this.ChatMessage.create({
    //   timestamp: Date.now(),
    //   sender: 'Alice',
    //   message: 'Hello, World!',
    // });

    // Serialise the message using Protobuf
    // const serialisedMessage = this.ChatMessage.encode(protoMessage).finish();

    // // Send the message using Light Push
    // await this.node.lightPush.send(this.encoder, {
    //   payload: serialisedMessage,
    // });
    return true;
  }

  async intialization() {
    // this.node = await createLightNode({ defaultBootstrap: true });
    // this.node.start();
    // await waitForRemotePeer(this.node, [Protocols.LightPush, Protocols.Filter]);
  }

  async subscribe() {
    // Create the callback function
    const callback = (wakuMessage) => {
      // Check if there is a payload on the message
      if (!wakuMessage.payload) return;
      // Render the messageObj as desired in your application
      const messageObj = this.ChatMessage.decode(wakuMessage.payload);
      console.log(messageObj);
    };

    // Create a filter subscription
    const subscription = await this.node.filter.createSubscription();

    // Subscribe to content topics and process new messages
    await subscription.subscribe([this.decoder], callback);
  }
}
