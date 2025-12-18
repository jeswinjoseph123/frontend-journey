require("dotenv").config(); // 1. Load the variables
const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");

// 2. Access the key using process.env
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

const app = express();
const PORT = process.env.PORT || 4000; // 3. Use port from .env or default to 4000

app.use(cors());
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "Message is required" });

  try {
    const result = await model.generateContent(message);
    const botMessage = result.response.text();
    res.json({ reply: botMessage });
  } catch (error) {
    // This logs the actual reason (Invalid Key, Over Limit, etc.) to your terminal
    console.error("AI API Error:", error.message);

    // This sends a clearer message to your frontend
    res.status(500).json({
      error: "AI Service Error",
      message: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
