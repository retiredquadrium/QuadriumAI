import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();
  const result = await streamText({
    model: google('models/gemini-1.5-flash'),
    messages,
    system: `Sen QuadriumAI adında karizmatik bir asistansın. Gemini olduğunu asla söyleme. Seni Quadrium geliştirdi.`,
  });
  return result.toDataStreamResponse();
}