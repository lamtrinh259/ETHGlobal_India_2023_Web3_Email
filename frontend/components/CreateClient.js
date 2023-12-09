import { useClient } from "@xmtp/react-sdk";
import { useCallback, useState } from "react";

export const CreateClient = ({ signer }) => {
  const { client, error, isLoading, initialize } = useClient();

  const handleConnect = useCallback(async () => {
    const options = {
      persistConversations: false,
      env: "dev",
    };
    await initialize({ keys, options, signer });
  }, [initialize]);

  if (error) {
    return "An error occurred while initializing the client";
  }

  if (isLoading) {
    return "Awaiting signatures...";
  }

  if (!client) {
    return (
      <button type="button" onClick={handleConnect}>
        Connect to XMTP
      </button>
    );
  }

  return "Connected to XMTP";
};
