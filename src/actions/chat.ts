"use server";
import { aiPrompt } from "@/data/data";
import { GoogleGenAI } from "@google/genai";

type History = {
  role: "user" | "model";
  parts: { text: string }[];
}[];

type Response =
  | { success: true; aiReply: string }
  | { success: false; error: string };

const ai = new GoogleGenAI({});
const histories = new Map<string, History>();

export const aiChat = async (
  userId: string = "",
  msg: string,
): Promise<Response> => {
  if (typeof userId !== "string" || !userId.trim()) {
    return { success: false, error: "Invalid user ID" };
  }
  if (typeof msg !== "string" || !msg.trim()) {
    return { success: false, error: "Invalid message" };
  }

  histories.set(userId, [
    ...(histories.get(userId) || []),
    { role: "user", parts: [{ text: msg }] },
  ]);

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: histories.get(userId)!,
      config: {
        systemInstruction: aiPrompt,
        temperature: 0.7,
        thinkingConfig: {
          thinkingBudget: 0,
        },
      },
    });

    const resText = response.text?.trim();

    if (!resText) throw new Error("Empty response from AI model");

    histories.set(userId, [
      ...histories.get(userId)!,
      { role: "model", parts: [{ text: response.text! }] },
    ]);

    return { success: true, aiReply: resText };
  } catch (err) {
    console.error("AI had an error: ", err);
    return { success: false, error: (err as Error).message };
  }
};
