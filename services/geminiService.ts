
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateDesignCritique = async (concept: string) => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `作为一名精通 Material Design 3 的资深产品设计师，请评测以下设计概念并提供设计依据。
    设计概念：${concept}
    请以 JSON 格式返回响应，包含以下字段：critique (评测字符串), rationale (设计逻辑字符串), 和 suggestedColors (3个十六进制色值数组)。请务必使用中文回答。`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          critique: { type: Type.STRING },
          rationale: { type: Type.STRING },
          suggestedColors: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING } 
          }
        },
        required: ["critique", "rationale", "suggestedColors"]
      }
    }
  });

  return JSON.parse(response.text);
};

export const generateExpressiveShapeIdea = async (emotion: string) => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `描述一个能表达以下情绪的 UI 组件抽象形状：${emotion}。
    重点关注几何形状、曲率和 Material 3 原则。请提供一段富有诗意的中文描述。`,
  });

  return response.text;
};
