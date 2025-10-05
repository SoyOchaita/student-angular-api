# 📘 Student API + Angular Frontend

Full-stack CRUD application for managing students — built with **Node.js (Express + PostgreSQL)** and **Angular 17**.  
The project is fully containerized using **Docker Compose** and can be run locally or in a development environment.

---

## 👨‍💻 Author

**Alfonso Enrique Ochaita Moreno**  
🌍 Guatemala  
🎓 System Engineering Student – Universidad Mesoamericana (UMES)  
📧 [alfonsochaita@gmail.com](mailto:alfonsochaita@gmail.com)  
💼 [GitHub: SoyOchaita](https://github.com/SoyOchaita)

---

## 🏗️ Project Structure

```
student-angular-api/
│
├── docker-compose.yml               # Orchestration for DB + API containers
├── .env                             # Environment variables for DB and API
├── .gitignore                       # Ignored files
│
├── student-api/                     # Backend - Node.js + Express
│   ├── Dockerfile                   # API container definition
│   ├── package.json
│   ├── package-lock.json
│   ├── src/
│   │   ├── index.js                 # Server entry point
│   │   ├── database/db.js           # Database connection setup
│   │   ├── routes.js                # Route aggregator
│   │   └── routes/students.js       # CRUD endpoints for students
│
├── student-frontend/                # Frontend - Angular 17 standalone
│   ├── Dockerfile                   # Frontend container (for Nginx)
│   ├── angular.json
│   ├── package.json
│   ├── proxy.conf.json              # Proxy API calls to backend
│   ├── src/
│   │   ├── index.html               # Root HTML
│   │   ├── main.ts                  # Angular bootstrap
│   │   └── app/
│   │       ├── app.ts               # Root app component
│   │       ├── app.routes.ts        # Router configuration
│   │       ├── app.config.ts        # Router provider setup
│   │       ├── app.html / app.css   # Base layout
│   │       ├── data/student.model.ts # Interface for Student object
│   │       ├── services/student.service.ts # API communication
│   │       ├── student-list/        # List view
│   │       ├── student-add/         # Add form
│   │       ├── student-edit/        # Edit form
│   │       └── student-delete/      # Delete confirmation (if applicable)
│
└── README.md
```

---

## ⚙️ Prerequisites

- [Node.js 20+](https://nodejs.org/en/)
- [Docker & Docker Compose](https://docs.docker.com/get-docker/)
- [Git](https://git-scm.com/)
- [Angular CLI 17+](https://angular.dev/)

---

## 🐳 Running with Docker Compose

### 1️⃣ Build and start containers
```bash
docker-compose up --build
```
Services started:
- **PostgreSQL** on port `5435`
- **API (Express)** on port `3000`

### 2️⃣ Stop containers (keep DB data)
```bash
docker-compose stop
```

To restart:
```bash
docker-compose start
```

To reset everything (⚠️ clears database):
```bash
docker-compose down -v
```

---

## 🧱 Database Setup (Manual SQL)

Connect to PostgreSQL manually:
```bash
docker exec -it student-angular-api-db-1 psql -U admin -d studentsdb
```

Create the `students` table:
```sql
CREATE TABLE students (
  identifier VARCHAR(20) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  surname VARCHAR(100) NOT NULL
);
```

### 📥 Example Data Insertions
```sql
INSERT INTO students (identifier, name, surname) VALUES
('202325519', 'Alfonso', 'Ochaita'),
('202325520', 'Marvin', 'López'),
('202325521', 'Carlos', 'Taracena'),
('202325522', 'Andrés', 'Hernández'),
('202325523', 'Santiago', 'García');
```

Validate insertion:
```sql
SELECT * FROM students;
```

---

## 🧩 Backend Setup (Local Run)

### 1️⃣ Install dependencies
```bash
cd student-api
npm install
```

### 2️⃣ Configure environment variables
Create a `.env` file in `student-api/`:
```env
DB_HOST=localhost
DB_PORT=5435
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=your_database
PORT=3000
```

### 3️⃣ Start API server
```bash
npm start
```
API available at: **http://localhost:3000/api/student**

---

## 🎨 Frontend Setup (Angular)

### 1️⃣ Install dependencies
```bash
cd student-frontend
npm install
```

### 2️⃣ Run Angular development server
```bash
npm start
```
Angular available at: **http://localhost:4200**

Proxy (`proxy.conf.json`) automatically redirects `/api` requests to `http://localhost:3000`.

---

## 🧠 CRUD Endpoints

| Operation | Method | Endpoint | Description |
|------------|---------|-----------|--------------|
| Create     | POST | `/api/student` | Add new student |
| Read All   | GET  | `/api/student` | Retrieve all students |
| Read One   | GET  | `/api/student/:id` | Get a specific student |
| Update     | PUT  | `/api/student/:id` | Update existing student |
| Delete     | DELETE | `/api/student/:id` | Delete student |

---

## 🧪 Test with Postman

Example requests:

### Create Student
```json
POST http://localhost:3000/api/student
{
  "identifier": "202325524",
  "name": "Luis",
  "surname": "González"
}
```

### Get All Students
```http
GET http://localhost:3000/api/student
```

### Update Student
```json
PUT http://localhost:3000/api/student/202325524
{
  "name": "Luis Alberto",
  "surname": "González"
}
```

### Delete Student
```http
DELETE http://localhost:3000/api/student/202325524
```

---

## 🖥️ Frontend Features

- **Home Page:** Lists all students.
- **Add Student:** Create a new record.
- **Edit Student:** Modify student data.
- **Delete:** Removes a student with confirmation.
- **Error Handling:** Detailed alerts with API messages (e.g., duplicate ID or connection issues).

---

## 💬 Error Handling Logic

- Network errors → "Cannot connect to server."
- API messages → Displays `error.message` from backend.
- Common cases:
  - `409 Conflict` → Student already exists.
  - `404 Not Found` → Student not found.
  - `500 Internal Server Error` → Backend failure.

---

## 🧹 .gitignore Summary

Ignored folders and files:
- `node_modules/`
- `.env`
- `dist/`, `build/`, `.angular/`
- `.vscode/`, `.idea/`
- Docker cache and system files.

---

## 📜 License & Credits

Open-source project maintained by **Alfonso Enrique Ochaita Moreno (SoyOchaita)**.  
For academic and educational purposes.  
Copyright © 2025.

---

## 🔮 Future Improvements
- Add JWT authentication for API security.
- Integrate SweetAlert2 for elegant user notifications.
- Implement pagination and filtering in the student list.
- Deploy on a remote VPS using Docker Compose.

---

> 🧠 _"Data-driven systems are the bridge between logic and creativity."_ – Alfonso Ochaita
