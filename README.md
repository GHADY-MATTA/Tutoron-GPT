<img src="./readme/title1.svg"/>

<br><br>
<!-- project overview -->
<img src="./readme/title2.svg"/>

>
>Tutoron-GPT: Your Personal AI Learning Assistant
Paste a YouTube link and Tutoron-GPT instantly pulls the transcript, distills it into a clear summary, and builds a custom quiz to lock in the concepts.
Powered by adaptive AI, it tailors every explanation to your learning style so you grasp ideas quickly and remember them longer.


> 

<br><br>

<!-- System Design -->
<img src="./readme/title3.svg"/>

### Architecture Diagram

Backend Diagram 

 ![Landing](./readme/demo/backend-diagram.png)
 <br><br>


 Front-end Diagram  
 ![fsdaf](./readme/demo/betterfront.png)
<br><br>

DOCKER Diagram 
![fsdaf](./readme/demo/dockerDiagram.png)



<br><br>

### Database Diagram

![Landing](./readme/demo/erdiagram.png)
### 🧠 Hybrid Cloud-to-Local Transcript Fetching Architecture

-- **Why:**  
  Cloud VMs like EC2 are often blocked from accessing YouTube transcripts due to IP-based restrictions.

- **The Challenge:**  Fetching YouTube transcripts directly from a server results in failure or empty responses.

- **The Solution:**  Offload the transcript extraction to your **local machine with a residential IP**.

- **How It Works:**   - 🌐 Laravel (on EC2) sends an HTTP POST to a public Ngrok endpoint.  
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

  **Auto-Quiz Builder**  
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
 -->**Login screen**
![Landing](./readme/demo/login%20(1).gif) 
**Register screen**
![fsdaf](./readme/demo/signup%20(1).gif )
**Homepage screen**
![fsdaf](./readme/demo/homepage%20(1).gif)
### user Screen (Web)

<!-- | upload screen                            | Summary screen                       |
| --------------------------------------- | ------------------------------------- |
| ![Landing](./readme/demo/upload.gif) | ![fsdaf](./readme/demo/generate.gif) | -->

**upload screen**
![Landing](./readme/demo/upload.gif)
**Summary screen**
![fsdaf](./readme/demo/generate.gif)