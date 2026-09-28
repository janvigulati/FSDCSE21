import express from "express";
import { promises as fs } from "node:fs";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { fileURLToPath } from "node:url";

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.join(__dirname, "requests.json");
const CATEGORIES = ["Facilities", "IT Support", "Housing", "Academics", "Campus Safety", "Other"];
const PRIORITIES = ["Low", "Medium", "High"];

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

async function readRequests() {
  try {
    return JSON.parse(await fs.readFile(DATA_FILE, "utf8"));
  } catch (error) {
    if (error.code === "ENOENT") {
      await fs.writeFile(DATA_FILE, "[]\n");
      return [];
    }
    throw error;
  }
}

async function saveRequests(requests) {
  await fs.writeFile(DATA_FILE, `${JSON.stringify(requests, null, 2)}\n`);
}

function validateRequest(body) {
  const request = {
    studentName: String(body.studentName || "").trim(),
    email: String(body.email || "").trim(),
    category: String(body.category || "").trim(),
    description: String(body.description || "").trim(),
    priority: String(body.priority || "").trim()
  };

  if (Object.values(request).some((value) => !value)) {
    return { error: "All fields are required." };
  }
  if (!/^\S+@\S+\.\S+$/.test(request.email)) {
    return { error: "Enter a valid email address." };
  }
  if (!CATEGORIES.includes(request.category)) {
    return { error: "Choose a valid category." };
  }
  if (!PRIORITIES.includes(request.priority)) {
    return { error: "Choose a valid priority." };
  }
  return { request };
}

app.get("/api/requests", async (req, res, next) => {
  try {
    res.json(await readRequests());
  } catch (error) {
    next(error);
  }
});

app.get("/api/requests/:id", async (req, res, next) => {
  try {
    const requests = await readRequests();
    const request = requests.find((item) => item.id === req.params.id);
    if (!request) return res.status(404).json({ error: "Request not found." });
    res.json(request);
  } catch (error) {
    next(error);
  }
});

app.post("/api/requests", async (req, res, next) => {
  try {
    const result = validateRequest(req.body);
    if (result.error) return res.status(400).json({ error: result.error });

    const requests = await readRequests();
    const now = new Date().toISOString();
    const request = { id: randomUUID(), ...result.request, createdAt: now, updatedAt: now };
    requests.unshift(request);
    await saveRequests(requests);
    res.status(201).json(request);
  } catch (error) {
    next(error);
  }
});

app.put("/api/requests/:id", async (req, res, next) => {
  try {
    const requests = await readRequests();
    const index = requests.findIndex((item) => item.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: "Request not found." });

    const result = validateRequest(req.body);
    if (result.error) return res.status(400).json({ error: result.error });

    requests[index] = { ...requests[index], ...result.request, updatedAt: new Date().toISOString() };
    await saveRequests(requests);
    res.json(requests[index]);
  } catch (error) {
    next(error);
  }
});

app.delete("/api/requests/:id", async (req, res, next) => {
  try {
    const requests = await readRequests();
    const remaining = requests.filter((item) => item.id !== req.params.id);
    if (remaining.length === requests.length) {
      return res.status(404).json({ error: "Request not found." });
    }

    await saveRequests(remaining);
    res.json({ message: "Request deleted." });
  } catch (error) {
    next(error);
  }
});

app.use((error, req, res, next) => {
  console.error(error);
  if (res.headersSent) return next(error);
  res.status(error instanceof SyntaxError ? 400 : 500).json({
    error: error instanceof SyntaxError ? "Request body must be valid JSON." : "Something went wrong."
  });
});

app.listen(PORT, () => {
  console.log(`Campus Help Desk running at http://localhost:${PORT}`);
});