# 🍌 Fruit Jar App — Proxy Server

An Express-based proxy server designed to bypass CORS restrictions on the Fruit API, enabling client apps (like [fruit-jar-app](https://github.com/ChaceN89/fruit-jar-app)) to securely fetch fruit data in production environments.

---

## 🧩 Purpose

The original Fruit API has strict CORS settings and only allows access from specific origins (e.g., `localhost:5173`). This server acts as a **middleware layer** to forward requests and inject necessary API keys—allowing frontend apps to access data without hitting CORS walls.

---

## 🔐 Environment Variables

You must define the following environment variables (e.g., in a `.env` file):

```env
FRUITS_API_PATH=https://fruity-proxy.vercel.app/api/fruits
FRUITS_API_KEY=...
PORT=3000  # (Optional - defaults to 3000)
```

---

## 🚀 Deployment

This proxy is deployed via **AWS App Runner**:

- 🔗 **Live Frontend**: [http://fruit-jar-app.s3-website-us-east-1.amazonaws.com/](http://fruit-jar-app.s3-website-us-east-1.amazonaws.com/)
- 🔗 **Live App**: [https://myvwdd4mpq.us-east-1.awsapprunner.com](https://myvwdd4mpq.us-east-1.awsapprunner.com)
- 📊 **API Endpoint**: [https://myvwdd4mpq.us-east-1.awsapprunner.com/api/fruits](https://myvwdd4mpq.us-east-1.awsapprunner.com/api/fruits)

---

## 🛠 Local Development

1. Clone the repo:

```bash
git clone https://github.com/ChaceN89/fruit-jar-app-proxy-server.git
cd fruit-jar-app-proxy-server
```

2. Install dependencies:

```bash
npm install
```

3. Add a `.env` file with the required variables.

4. Run locally:

```bash
npm run dev
```

The proxy server will be available at `http://localhost:3000/api/fruits`.

---

## 🌐 Used In

- 🍓 [Fruit Jar App](https://github.com/ChaceN89/fruit-jar-app)

This server was built specifically to support that frontend app's production deployment.

---

## 👨‍💻 Author

**Chace Nielson**  
🔗 [chacenielson.com](https://chacenielson.com)
