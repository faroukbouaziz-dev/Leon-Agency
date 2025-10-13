"use server";
import { GoogleGenAI } from "@google/genai";

type History = {
  role: "user" | "model";
  parts: { text: string }[];
}[];

const history: History = [];
const ai = new GoogleGenAI({});

export const ai_boot = async (msg: string) => {
  history.push({ role: "user", parts: [{ text: msg }] });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: history,
      config: {
        thinkingConfig: {
          thinkingBudget: 0,
        },
      },
    });

    if (response.text && response.text.trim().length !== 0) {
      history.push({ role: "model", parts: [{ text: response.text }] });
    } else {
      throw new Error("Empty response from Gemini model");
    }

    return response.text;
  } catch (err) {
    return err;
  }
};
