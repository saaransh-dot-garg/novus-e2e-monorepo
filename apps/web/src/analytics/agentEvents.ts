/** Browser agent interaction events — tracks AI assistant conversations. */

interface TrackAgentMetadata {
  agentId: string;
  conversationId: string;
  messageId: string;
  content: string;
  modelUsed?: string;
  suggestedPrompt?: boolean;
  toolsUsed?: string[];
  fileUploaded?: boolean;
}

export function trackAgentEvent(
  eventType: "prompt" | "agent_response" | "user_reaction",
  metadata: TrackAgentMetadata
): void {
  window.pendo?.trackAgent(eventType, metadata);
}
