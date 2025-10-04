const { Router } = require("express");
const pool = require("../database/db");

const router = Router();

// Crear estudiante
router.post("/api/student", async (req, res) => {
  try {
    const { identifier, name, surname } = req.body;

    // Validar duplicados
    const check = await pool.query("SELECT * FROM students WHERE identifier=$1", [identifier]);
    if (check.rows.length > 0) {
      return res.status(400).json({ success: false, message: "Este identificador ya existe", data: null });
    }

    const result = await pool.query(
      "INSERT INTO students (identifier, name, surname) VALUES ($1, $2, $3) RETURNING *",
      [identifier, name, surname]
    );
    res.json({ success: true, message: "Estudiante creado", data: result.rows[0] });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error al crear estudiante", data: error.message });
  }
});

// Listar estudiantes
router.get("/api/student", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM students");
    res.json({ success: true, message: "Listado de estudiantes", data: result.rows });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error al obtener estudiantes", data: error.message });
  }
});

// Buscar por ID
router.get("/api/student/:identifier", async (req, res) => {
  try {
    const { identifier } = req.params;
    const result = await pool.query("SELECT * FROM students WHERE identifier=$1", [identifier]);
    if (result.rows.length > 0) {
      res.json({ success: true, message: "Estudiante encontrado", data: result.rows[0] });
    } else {
      res.status(404).json({ success: false, message: "Estudiante no encontrado", data: null });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Error al buscar estudiante", data: error.message });
  }
});

// Actualizar estudiante
router.put("/api/student/:identifier", async (req, res) => {
  try {
    const { identifier } = req.params;
    const { name, surname } = req.body;

    const result = await pool.query(
      "UPDATE students SET name=$1, surname=$2 WHERE identifier=$3 RETURNING *",
      [name, surname, identifier]
    );

    if (result.rows.length > 0) {
      res.json({ success: true, message: "Estudiante actualizado", data: result.rows[0] });
    } else {
      res.status(404).json({ success: false, message: "Estudiante no encontrado", data: null });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Error al actualizar estudiante", data: error.message });
  }
});

// Eliminar estudiante
router.delete("/api/student/:identifier", async (req, res) => {
  try {
    const { identifier } = req.params;
    const result = await pool.query("DELETE FROM students WHERE identifier=$1 RETURNING *", [identifier]);
    if (result.rows.length > 0) {
      res.json({ success: true, message: "Estudiante eliminado", data: result.rows[0] });
    } else {
      res.status(404).json({ success: false, message: "Estudiante no encontrado", data: null });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Error al eliminar estudiante", data: error.message });
  }
});

module.exports = router;
