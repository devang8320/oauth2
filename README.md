# OAuth2 Authentication Microservice

## 🚀 Overview
This microservice handles OAuth2 authentication using Google. The backend is built with Node.js, while the frontend is developed using React. The authentication flow involves retrieving a Google authentication code from the frontend, sending it to the backend, and exchanging it for user data from Google.

## 🎯 Authentication Flow
1. The frontend calls the Google API to obtain an authentication code.
2. The authentication code is sent to the backend.
3. The backend exchanges the code with Google to get user information.
4. The user data is sent back to the frontend for authentication and session handling.

---

## 🏗️ Technology Stack
| Category      | Technologies |
|--------------|--------------|
| Backend      | Node.js, Express |
| Frontend     | React |
| Authentication | OAuth2.0 (Google) |
| HTTP Requests | Axios |
| Environment Variables | dotenv |

---

## 🔧 Installation & Setup
### 🖥️ Backend (Node.js)
#### 1️⃣ Clone the repository:
```bash
git clone https://github.com/yourusername/oauth2-microservice.git
cd oauth2/backend
```

#### 2️⃣ Install dependencies:
```bash
npm install
```

#### 3️⃣ Create a `.env` file:
```bash
touch .env
```

#### 4️⃣ Add the following environment variables:
```ini
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_REDIRECT_URI=your_redirect_uri
JWT_SECRET=your_jwt_secret
```

#### 5️⃣ Start the backend server:
```bash
npm run dev
```

### 🖥️ Frontend (React)
#### 1️⃣ Navigate to the frontend directory:
```bash
cd ../oauth2
```

#### 2️⃣ Install dependencies:
```bash
npm install
```

#### 3️⃣ Add environment variables in `.env`:
```ini
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
REACT_APP_BACKEND_URL=http://localhost:5000
```

#### 4️⃣ Start the frontend server:
```bash
npm run dev
```

---

## 📬 API Endpoints
### 🔹 `POST /auth/google`
- **Description**: Receives the Google authentication code and retrieves user data.
- **Request Body**:
  ```json
  { "code": "AUTH_CODE_FROM_GOOGLE" }
  ```
- **Response**:
  ```json
  {
    "token": "JWT_TOKEN",
    "user": {
      "name": "John Doe",
      "email": "johndoe@example.com",
      "picture": "profile_image_url"
    }
  }
  ```

---

## 🛠️ Features
✅ Secure OAuth2 authentication with Google
✅ JWT-based session management
✅ React frontend with Google Login button
✅ Node.js backend handling authentication requests

---

## 📬 Contact
For any queries or collaboration, feel free to reach out:
- 👤 **Devang Vasani**
- 📧 Email: devangvasani8320@gmail.com

🚀 Built with passion for secure authentication! 🔐

