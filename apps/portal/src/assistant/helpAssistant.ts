export async function askAssistant(
  question: string,
  answer: (question: string) => Promise<string>
): Promise<string> {
  const reply = await answer(question);
  return reply;
}
