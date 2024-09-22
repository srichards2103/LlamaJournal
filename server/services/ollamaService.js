const { Ollama } = require("ollama");

const ollama = new Ollama();

async function generateResponse(messages, journalContext) {
  try {
    const chatHistory = messages
      .map((msg) => `${msg.role === "user" ? "Human" : "AI"}: ${msg.content}`)
      .join("\n");
    const lastUserMessage = messages[messages.length - 1].content;
    const fullPrompt = `
    You are currently interacting with a user who is using a journaling app of which you have access to their entire journal.

    You are to help the user with their journaling by answering their questions and providing them with a response based on the context of their journal (if applicable).

    Context from user's journal entries:\n${journalContext}\n\nChat history:\n${chatHistory}\n\nHuman: ${lastUserMessage}\nAI:
    
    Note: If it is your first message, you should introduce yourself as the AI assistant and ask the user how they are doing or answer the questions they may have asked you
    `;

    const response = await ollama.chat({
      model: "llama3.1", // or whichever model you're using
      messages: [{ role: "user", content: fullPrompt }],
    });
    return response.message.content;
  } catch (error) {
    console.error("Error generating response:", error);
    throw error;
  }
}

module.exports = { generateResponse };
