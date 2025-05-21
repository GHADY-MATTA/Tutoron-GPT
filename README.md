<img src="./readme/title1.svg"/>

<br><br>

<!-- project overview -->
<img src="./readme/title2.svg"/>

![Tech Stack](https://img.shields.io/badge/stack-Laravel%20%7C%20React%20%7C%20Docker-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/deployment-EC2-orange)
![CI](https://img.shields.io/github/actions/workflow/status/GHADY-MATTA/Tutoron-GPT/ci.yml?label=CI%20Status&logo=github)
![AI](https://img.shields.io/badge/AI-GPT--4%20%7C%20Prism-purple)


---

##  Tutoron-GPT: Turn Any YouTube Video Into a Smart Tutor

Learning from YouTube is powerful but messy. **Tutoron-GPT** transforms any video into a clear, structured, and interactive experience.

Paste a YouTube link — and instantly get:
-  A full transcript
-  A structured summary
-  A custom AI-generated quiz

Powered by GPT-4 + Prism SDK and tailored to your learning style.

---


<br><br>

<!-- System Design -->
<img src="./readme/title3.svg"/>

### Architecture Diagram

**Backend Diagram** 

 ![Landing](./readme/demo/backend-diagram.png)
 <br><br>

 **Front-end Diagram**  
 ![fsdaf](./readme/demo/betterfront.png)
<br><br>

**DOCKER Diagram** 
![fsdaf](./readme/demo/dockerDiagram.png)



<br><br>

### Database Diagram

![Landing](./readme/demo/erdiagram.png)
### 🧠 Hybrid Cloud-to-Local Transcript Fetching Architecture

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

###  Standout Features That Make Tutoron-GPT Shine

-  **One-link to learning flow**  
 Paste any YouTube URL → auto-grab transcript → AI distills a crystal-clear summary → instant multiple-choice quiz.

-  **Auto-Quiz Builder**  
  GPT-4 reads the freshly-pulled transcript, then writes a clean JSON quiz,10+ unique, section-tagged questions with answer keys ready for instant display in the frontend 
  
-  **Smart AI Summarization**  
  Structured video breakdowns: Objectives, Key Points, Highlights, and Insights - powered by GPT.

![Landing](./readme/demo/Tutoron-overview.png)

<br><br>

<!-- Demo -->
<img src="./readme/title5.svg"/>

### User Screens (Responsive)

<!-- | Login screen                            | Register screen                       |  Homepage screen                       |
| --------------------------------------- | ------------------------------------- | ------------------------------------- |
| ![Landing](./readme/demo/login%20(1).gif) | ![fsdaf](./readme/demo/signup%20(1).gif )| ![fsdaf](./readme/demo/homepage%20(1).gif) |
 -->
| Login Screen | Register Screen |
| ------------ | --------------- |
| ![Login](./readme/demo/login%20(1).gif) | ![Register](./readme/demo/signup%20(1).gif) |

| Homepage Screen | — |
| --------------- | - |
| ![Homepage](./readme/demo/homepage%20(1).gif) |  |

<!-- 
**Login screen**
![Landing](./readme/demo/login%20(1).gif) 

**Register screen**
![fsdaf](./readme/demo/signup%20(1).gif )

**Homepage screen**
![fsdaf](./readme/demo/homepage%20(1).gif) -->

### user Screen (Web)

<!-- | upload screen                            | Summary screen                       |
| --------------------------------------- | ------------------------------------- |
| ![Landing](./readme/demo/upload.gif) | ![fsdaf](./readme/demo/generate.gif) | -->
| Upload Screen | Summary Screen |
| ------------- | -------------- |
| ![Upload](./readme/demo/upload.gif) | ![Summary](./readme/demo/generate.gif) |

| Quiz Screen | — |
| ----------- | -- |
| ![Quiz](./readme/demo/highlights.gif) |  |


<!-- **upload screen**
![Landing](./readme/demo/upload.gif)

**Summary screen**
![fsdaf](./readme/demo/generate.gif)


**Quiz**
![Landing](./readme/demo/highlights.gif) -->

<br><br>
 
<!-- Development & Testing -->
<img src="./readme/title6.svg"/>

### [![Run CI Tests](https://github.com/GHADY-MATTA/Tutoron-GPT/actions/workflows/ci.yml/badge.svg)](https://github.com/GHADY-MATTA/Tutoron-GPT/actions/workflows/ci.yml)


<!-- | Services                            | Validation                       | Testing                        |
| --------------------------------------- | ------------------------------------- | ------------------------------------- |
| ![Landing](./readme/demo/service.png) | ![fsdaf](./readme/demo/validation.png) | ![fsdaf](./readme/demo/laravel_logs.png) | -->
| Services | Validation |
| -------- | ---------- |
| ![Services](./readme/demo/service.png) | ![Validation](./readme/demo/validation.png) |

| Testing | Cloud-Local-Server |
| ------- | ------------------ |
| ![Testing](./readme/demo/laravel_logs.png) | ![Local](./readme/demo/LocalServer.png) |

| Fetch-Transcript | — |
| ---------------- | - |
| ![Transcript](./readme/demo/fetch-transcript.png) |  |

<!-- 
**Services**
![Landing](./readme/demo/service.png)

**Validation**
 ![fsdaf](./readme/demo/validation.png)

 **Testing**
 ![fsdaf](./readme/demo/laravel_logs.png)

**Cloud-Local-Server**
![fsdaf](./readme/demo/LocalServer.png)

**Fetch-Transcript**
![fsdaf](./readme/demo/fetch-transcript.png) -->


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
<br><br>

### Prompt sample
(You are an expert AI tutor. Your job is to generate a high-quality multiple-choice quiz from the following transcript.

Each question must be directly tied to one of the following core educational sections extracted from the transcript:

- summary
- keyPoints
- keyInsights
- examples
- whyItMatters
- whatIfNotUsed
- useCases
- globalBestPractices
- stepsToApply
- concepts

Generate at least 10 questions maximum(generate more question if the transcript is too big). Each question must:

- Be linked to one of the above sections using a "section" field
- Include a short, clear "question"
- Provide 4 answer choices in an "options" object (keys: a, b, c, d)
- Mark the correct answer using the "correct" key (value: "a", "b", "c", or "d")

Format the final response as a strict valid JSON array like this:

[
  {
    "section": "keyPoints",
    "question": "Which of the following is a key teaching point?",
    "options": {
      "a": "...",
      "b": "...",
      "c": "...",
      "d": "..."
    },
    "correct": "b"
  },
  ...
]

Rules:
- Only output valid JSON — no markdown, no explanation, no text around the output
- Be clear, concise, and accurate
- Use real material from the transcript — no guesswork
- Use unique questions — avoid repetition
- Avoid trick questions; be constructive and educational

Transcript:
{{transcript}}
)
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


<!-- | Postman API 1                            | Postman API 2                       | Postman API 3                        |
| --------------------------------------- | ------------------------------------- | ------------------------------------- |
| ![Landing](./readme/demo/postmanSignup.png) | ![fsdaf](./readme/demo/postmanlogin.png) | ![fsdaf](./readme/demo/postmanAi.png) | -->

| Postman API: Signup | Postman API: Login |
| ------------------- | ------------------ |
| ![Signup](./readme/demo/postmanSignup.png) | ![Login](./readme/demo/postmanlogin.png) |

| Postman API: AI Request | Dockerized Overview |
| ------------------------ | ------------------- |
| ![AI](./readme/demo/postmanAi.png) | ![Docker](./readme/demo/Dockerized.png) |

<!-- 
**Postman API 1** 
![Landing](./readme/demo/postmanSignup.png)

**Postman API 2**
![fsdaf](./readme/demo/postmanlogin.png)

**Postman API 3**
![fsdaf](./readme/demo/postmanAi.png)

**Dockerized**
![fsdaf](./readme/demo/Dockerized.png) -->
<br><br>


## License

This project is licensed under the [MIT License](./LICENSE).

> #AI #OpenAI #Laravel #React #Docker #DevOps #YouTubeTranscripts
 #GPT4 #ReactJS #Laravel12 #ViteJS #DockerCompose #FullStack #PrismSDK #NodeJS #Python #YouTubeAPI #TailwindCSS #SanctumAuth #Ngrok #CI-CD #MySQL #RESTAPI #EduTech #LearningPlatform #TranscriptSummarizer #QuizGenerator #CodeQuality #CleanCode
