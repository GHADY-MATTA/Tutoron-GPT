<img src="./readme/title1.svg"/>

<br><br>

<!-- project overview -->
<img src="./readme/title2.svg"/>

>
>Tutoron-GPT: Your Personal AI Learning Assistant
Tutoron-GPT is an AI-powered education platform designed to revolutionize how individuals learn online. By combining adaptive technology with personalized tutoring experiences, Tutoron-GPT helps users learn faster, understand deeper, and retain longer.

Whether you're a student preparing for exams, a professional upskilling, or a curious mind exploring new topics, Tutoron-GPT tailors its teaching approach to your unique learning style and pace.


> 

<br><br>

<!-- System Design -->
<img src="./readme/title3.svg"/>

### 🧠 Hybrid Cloud-to-Local Transcript Fetching Architecture
![Landing](./readme/demo/erdiagram.png)

-- **Why:**  
  Cloud VMs like EC2 are often blocked from accessing YouTube transcripts due to IP-based restrictions.

- **The Challenge:**  
  Fetching YouTube transcripts directly from a server results in failure or empty responses.

- **The Solution:**  
  Offload the transcript extraction to your **local machine with a residential IP**.

- **How It Works:**  
  - 🌐 Laravel (on EC2) sends an HTTP POST to a public Ngrok endpoint.  
  - 🧩 Ngrok tunnels the request to your **local Node.js + Express** server.  
  - 🐍 Node.js triggers a Python script (`fetch_transcript.py`) to extract the transcript.  
  - 📬 The response is sent back to **Laravel via a secure HTTP route**, completing the flow.

> ✅ This hybrid architecture enables **fast**, **secure**, and **reliable** transcript access even from cloud-restricted environments.

<br><br>

<!-- Project Highlights -->
<img src="./readme/title4.svg"/>

### 🔥 Standout Features That Make Tutoron-GPT Shine

- 📺 **YouTube Transcript Intelligence**  
  Upload any YouTube URL - get clean transcripts, summaries, key insights, and study material.

- 🌐 **Cloud-to-Local Microservice Bridge**  
  Bypasses YouTube transcript blocking with a hybrid Node.js + Python pipeline using Ngrok.

- 🧠 **Smart AI Summarization**  
  Structured video breakdowns: Objectives, Key Points, Highlights, and Insights - powered by GPT.
<br><br>

<!-- Demo -->
<img src="./readme/title5.svg"/>

### User Screens (Responsive)

| Login screen                            | Register screen                       |  Homepage screen                       |
| --------------------------------------- | ------------------------------------- | ------------------------------------- |
| ![Landing](./readme/demo/login%20(1).gif) | ![fsdaf](./readme/demo/signup%20(1).gif )| ![fsdaf](./readme/demo/homepage%20(1).gif) |


### user Screen (Web)

| upload screen                            | Summary screen                       |
| --------------------------------------- | ------------------------------------- |
| ![Landing](./readme/demo/upload.gif) | ![fsdaf](./readme/demo/generate.gif) |


<br><br>
 
<!-- Development & Testing -->
<img src="./readme/title6.svg"/>

### [![Run CI Tests](https://github.com/GHADY-MATTA/Tutoron-GPT/actions/workflows/ci.yml/badge.svg)](https://github.com/GHADY-MATTA/Tutoron-GPT/actions/workflows/ci.yml)


| Services                            | Validation                       | Testing                        |
| --------------------------------------- | ------------------------------------- | ------------------------------------- |
| ![Landing](./readme/demo/service.png) | ![fsdaf](./readme/demo/validation.png) | ![fsdaf](./readme/demo/laravel_logs.png) |


<br><br>

<!-- Deployment -->
<img src="./readme/title7.svg"/>

### Cloud Deployment with CI/CD on Ubuntu EC2 + Docker


- **Automated CI/CD Pipeline**  
- **Dockerized Infrastructure**  
- **Ubuntu EC2 Hosting**  
- **Production Build with Vite + Laravel Artisan**  
- **.env Configuration + Secrets**  
- **Persistent MySQL Volumes**


| Postman API 1                            | Postman API 2                       | Postman API 3                        |
| --------------------------------------- | ------------------------------------- | ------------------------------------- |
| ![Landing](./readme/demo/postmanSignup.png) | ![fsdaf](./readme/demo/postmanlogin.png) | ![fsdaf](./readme/demo/postmanAi.png) |

<br><br>
<img src="./readme/title8.svg"/>

### AI Processing Pipeline (Prism + OpenAI GPT-4 Turbo)

- **User Inputs YouTube URL
         ↓
Laravel Controller receives URL
         ↓
▶ shell_exec('python fetch_transcript.py')
         ↓
Python script fetches transcript using YouTubeTranscriptAPI
         ↓
Transcript returned to Laravel
         ↓
Prism AI Service handles prompt building
         ↓
→ Sends to OpenAI GPT-4 Turbo (via Prism)
         ↓
Receives structured JSON:
    ├── 🧠 Summary
    └── ✅ Quiz
         ↓
Stored in Laravel:
 ↓
React Frontend fetches data via Axios
         ↓
User sees: Summary Viewer + Quiz Viewer**  

![Landing](./readme/demo/workflow-ai.png) | ![fsdaf](./readme/demo/Screenshot%20(363).png)  |