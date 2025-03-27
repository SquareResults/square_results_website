import { streamText, Message, generateId } from "ai"; 
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { initialMessage } from "@/lib/data";
import { NextResponse } from "next/server";  // ✅ Import NextResponse

// Ensure the API key is available
if (!process.env.GOOGLE_API_KEY) {
    throw new Error("GOOGLE_API_KEY is missing. Set it in your .env file.");
}

const google = createGoogleGenerativeAI({
    apiKey: 'AIzaSyBG3FOG2p3nsxVYw1tZcYYAXsGxNiGmDDU',
});

const buildGoogleGenAIPrompt = (messages: Message[]): Message[] => [
    {
        id: generateId(),
        role: "user",
        content: initialMessage.content
    },
    ...messages.map((message) => ({
        id: message.id || generateId(),
        role: message.role,     
        content: message.content,
    })),
];

export async function POST(request: Request) {
    try {
        const { messages } = await request.json();  // Ensure messages is an array

        if (!Array.isArray(messages)) {
            return NextResponse.json(
                { error: "Invalid request. 'messages' must be an array." },
                { status: 400 }
            );
        }

        const stream = await streamText({
            model: google("gemini-2.0-flash"),
            messages: buildGoogleGenAIPrompt(messages),
            temperature: 0.7,
        });

        if (!stream) {
            return NextResponse.json(
                { error: "Failed to generate AI response." },
                { status: 500 }
            );
        }

        return stream.toDataStreamResponse();
    } catch (error) {
        return NextResponse.json(
            { error: (error as Error).message },
            { status: 500 }
        );
    }
}

