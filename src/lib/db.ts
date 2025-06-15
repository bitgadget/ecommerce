import { Pool } from "pg";

console.log("Inizializzo la connessione a PostgreSQL...");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "ciao1234", // aggiornata!
  port: 5432,
});

pool.on("connect", () => {
  console.log("✅ Connessione a PostgreSQL riuscita.");
});
pool.on("error", (err) => {
  console.error("❌ Errore di connessione a PostgreSQL:", err);
});

export async function getProducts() {
  console.log("Eseguo SELECT * FROM products");
  try {
    const res = await pool.query("SELECT * FROM products");
    console.log("Risultato query prodotti:", res.rows);
    return res.rows;
  } catch (err) {
    console.error("❌ Errore durante la query prodotti:", err);
    throw err;
  }
}