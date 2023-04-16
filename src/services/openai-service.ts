"use server";

import {
  Configuration,
  CreateCompletionResponseChoicesInner,
  OpenAIApi,
} from "openai";

import { IGenerateResponseOptions } from "@/models";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_ENGINE = "text-davinci-003";
const OPENAI_MAX_TOKENS = 4097;

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

export const completion = async (prompt: string) => {
  const max_tokens = OPENAI_MAX_TOKENS - prompt.length;

  const instance = new OpenAIApi(configuration);
  const completion = await instance.createCompletion({
    model: OPENAI_ENGINE,
    max_tokens,
    prompt,
  });

  return completion.data.choices;
};

export async function generateResponse(
  options: IGenerateResponseOptions
): Promise<CreateCompletionResponseChoicesInner[]> {
  const { message, output, tone, writingStyle } = options;

  const instruction = `A user asked: "${message}"\nRespond in ${output} language with a ${tone} tone and a ${writingStyle} writing style.`;

  try {
    const response = await completion(instruction);

    return response;
  } catch (error) {
    console.error("Error generating response:", error);
    throw error;
  }
}
