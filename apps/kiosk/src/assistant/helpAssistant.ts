export async function askAssistant(
  question: string,
  answer: (question: string) => Promise<string>
): Promise<string> {
  const reply = await answer(question);
  window.pendo?.trackAgent("kiosk_help_assistant", { question, replyLength: reply.length });
  return reply;
}
