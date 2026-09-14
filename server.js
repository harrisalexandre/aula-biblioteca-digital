const express = require("express");
const connectDB = require("./config/config");
const Book = require("./models/book");

const app = express();
const port = process.env.PORT || 3000;

connectDB();
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "API da Biblioteca Digital funcionando!" });
});

app.post("/api/books", async (req, res) => {
  try {
    const { title, author, year, genre } = req.body;

    const newBook = new Book({
      title,
      author,
      year,
      genre,
    });

    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    console.error("Erro ao criar livro:", error.message);
    res.status(500).json({ error: "Erro ao criar livro" });
  }
});

app.get("/api/books", async (_req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.error("Erro ao buscar livros:", error.message);
    res.status(500).json({ error: "Erro ao buscar livros" });
  }
});

app.get("/api/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({ error: "Livro não encontrado" });
    }

    res.json(book);
  } catch (error) {
    console.error("Erro ao buscar livro:", error.message);
    res.status(500).json({ error: "Erro ao buscar livro" });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
