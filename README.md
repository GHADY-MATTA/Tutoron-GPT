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

- **The Solution:**  