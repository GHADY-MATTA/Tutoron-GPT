<img src="./readme/title1.svg"/>

<br><br>

<!-- project overview -->
<img src="./readme/title2.svg"/>

> **Tutoron-GPT** is an AI-powered tool that transforms any YouTube video into a structured, interactive course.  
> Chapters, summaries, quizzes, and even code generation — all automated, no editing needed.

<br><br>

<!-- System Design -->
<img src="./readme/title3.svg"/>

### System Architecture

- Frontend: React + TailwindCSS
- Backend: Node.js (Express) + OpenAI/Gemini API
- Storage: Firebase / Local JSON
- Processing: Transcript chunking → prompt pipelining → JSON insights
- Output: Interactive UI (chapters, summaries, quizzes, starter code)

<br><br>

<!-- Project Highlights -->
<img src="./readme/title4.svg"/>

### Key Features

-  **Auto-Chapter Detection**: Breaks long videos into digestible learning steps
-  **AI-Summaries & Quizzes**: Reinforces understanding through smart prompts
-  **Prompt-to-Code**: For dev tutorials, generate starter code like migrations, models, and routes
-  **Multi-Domain Support**: Works for cooking, coding, gardening, design & more
-  **No Editing Needed**: Just paste the YouTube link and go

<br><br>

<!-- Demo -->
<img src="./readme/title5.svg"/>

### User Screens (Mobile)

| Login screen                            | Register screen                       | Dashboard                             |
| --------------------------------------- | ------------------------------------- | ------------------------------------- |
| ![Login](./readme/demo/login.png)       | ![Register](./readme/demo/register.png) | ![Dashboard](./readme/demo/dashboard.png) |

### Admin Screens (Web)

| Course List                            | Upload Video                         |
| ------------------------------------- | ------------------------------------- |
| ![Courses](./readme/demo/admin-courses.png) | ![Upload](./readme/demo/admin-upload.png) |

<br><br>

<!-- Development & Testing -->
<img src="./readme/title6.svg"/>

### Development & Testing

| Services                | Validation                     | Testing                     |
| -----------------------| -------------------------------| ----------------------------|
| Gemini/ChatGPT API     | Prompt schema validation        | Unit & integration tests    |
| YouTube Transcript API | JSON output parsing             | Cypress for UI flows        |
| Custom Prompt Engine   | Step-by-step generation checks  | Postman / Thunder Client    |

<br><br>

<!-- Deployment -->
<img src="./readme/title7.svg"/>

### Deployment

- Frontend deployed with **Vercel**
- Backend on **Render / Railway**
- API Keys stored in `.env` (never pushed to repo)
- Real-time AI testing done via Postman

| Get Chapters                        | Generate Summary                  | Code Generator Prompt              |
| ---------------------------------- | --------------------------------- | ---------------------------------- |
| ![API 1](./readme/demo/postman1.png) | ![API 2](./readme/demo/postman2.png) | ![API 3](./readme/demo/postman3.png) |

<br><br>
