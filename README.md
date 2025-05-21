<img src="./readme/title1.svg"/>

<br>

<!-- Project Overview -->
<img src="./readme/title2.svg"/>

![Tech Stack](https://img.shields.io/badge/stack-Laravel%20%7C%20React%20%7C%20Docker-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/deployment-EC2-orange)
![CI](https://img.shields.io/github/actions/workflow/status/GHADY-MATTA/Tutoron-GPT/ci.yml?label=CI%20Status&logo=github)
![AI](https://img.shields.io/badge/AI-GPT--4%20%7C%20Prism-purple)

---

## 🎓 Tutoron-GPT: Turn Any YouTube Video Into a Smart Tutor

Learning from YouTube is powerful but messy. **Tutoron-GPT** transforms any video into a clear, structured, and interactive experience.

Paste a YouTube link — and instantly get:
- ✅ A full transcript
- 🧠 A structured summary
- 📝 A custom AI-generated quiz

Powered by GPT-4 + Prism SDK and tailored to your learning style.

---

<!-- System Design -->
<img src="./readme/title3.svg"/>

### 🧩 Architecture Diagrams

**Backend**  
![Backend Diagram](./readme/demo/backend-diagram.png)

**Frontend**  
![Frontend Diagram](./readme/demo/betterfront.png)

**Docker**  
![Docker Diagram](./readme/demo/dockerDiagram.png)

---

### 🗄 Database Schema  
![ER Diagram](./readme/demo/erdiagram.png)

---

### 🛰 Hybrid Cloud-to-Local Transcript Architecture

**Why:**  
Cloud VMs like EC2 are often blocked from accessing YouTube transcripts due to IP restrictions.

**Solution:**  
Use your **local Node.js + Python server** to fetch transcripts securely via Ngrok.

**How It Works:**  
- Laravel on EC2 sends a POST request to Ngrok  
- Ngrok tunnels it to your local Node.js server  
- Node triggers Python (`fetch_transcript.py`)  
- Python fetches transcript and returns it to Laravel  

✅ Fast, secure, cloud-compatible.

---

<!-- Highlights -->
<img src="./readme/title4.svg"/>

### ✨ Highlights

- 🔗 **One-Link Learning Flow**  
  Paste a link → Get summary + quiz instantly.

- 🧠 **AI Summarization**  
  GPT-4 breaks videos into Objectives, Key Points, Highlights, and Insights.

- 🧾 **Auto-Quiz Builder**  
  Builds 10+ section-tagged multiple choice questions with answer keys.

![Overview](./readme/demo/Tutoron-overview.png)

---

<!-- Demos -->
<img src="./readme/title5.svg"/>

### 🖥 User Screens (Responsive)

| Login | Register |
| ----- | -------- |
| ![Login Screen](./readme/demo/login%20(1).gif) | ![Register Screen](./readme/demo/signup%20(1).gif) |

| Homepage | Upload |
| -------- | ------ |
| ![Homepage](./readme/demo/homepage%20(1).gif) | ![Upload](./readme/demo/upload.gif) |

| Summary | Quiz |
| ------- | ---- |
| ![Summary](./readme/demo/generate.gif) | ![Quiz](./readme/demo/highlights.gif) |

---

<!-- Dev & Test -->
<img src="./readme/title6.svg"/>

### 🛠 Development & Testing

[![Run CI Tests](https://github.com/GHADY-MATTA/Tutoron-GPT/actions/workflows/ci.yml/badge.svg)](https://github.com/GHADY-MATTA/Tutoron-GPT/actions/workflows/ci.yml)

| Services | Validation |
| -------- | ---------- |
| ![Service Stack](./readme/demo/service.png) | ![Validation Rules](./readme/demo/validation.png) |

| Laravel Logs | Cloud Tunnel |
| ------------ | ------------ |
| ![Testing Logs](./readme/demo/laravel_logs.png) | ![Ngrok Tunnel](./readme/demo/LocalServer.png) |

| Transcript Fetch |
| ---------------- |
| ![Transcript Flow](./readme/demo/fetch-transcript.png) |

---

<!-- AI Workflow -->
<img src="./readme/title8.svg"/>

### 🧠 AI Processing Pipeline (Prism + GPT-4 Turbo)

```text
User Inputs YouTube URL
       ↓
Laravel calls: shell_exec(fetch_transcript.py)
       ↓
Python fetches transcript
       ↓
Laravel sends transcript to Prism
       ↓
Prism builds structured prompt → GPT-4
       ↓
AI returns: Summary + Quiz JSON
       ↓
Saved to DB → Displayed in React
