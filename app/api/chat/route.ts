
import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { PERSONALITY_PROMPT } from '@/lib/digital-twin-context';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

const groq = createOpenAI({
    baseURL: 'https://api.groq.com/openai/v1',
    apiKey: process.env.GROQ_API_KEY || '', // Fallback to empty string to avoid build errors, user must set env var
});

export async function POST(req: Request) {
    const { messages } = await req.json();

    const result = streamText({
        model: groq('llama-3.3-70b-versatile'),
        system: PERSONALITY_PROMPT,
        messages,
    });

    return (result as any).toTextStreamResponse();
}
