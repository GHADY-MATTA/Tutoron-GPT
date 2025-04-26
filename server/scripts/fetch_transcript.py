import sys #read command arguments 
import json # to format as json
from pytube import YouTube #to store metadata
from youtube_transcript_api import YouTubeTranscriptApi  #fetch auto generetad trnascrirt
from urllib.parse import parse_qs, urlparse #exctract video id

def extract_video_id(url): # parrses the url https...
    try:
        qs = parse_qs(urlparse(url).query) #finds the the video id
        return qs.get("v", [None])[0]
    except:
        return None

def main(): #main logic
    if len(sys.argv) < 2:
        print(json.dumps({"error": "No URL provided"}))
        return

    url = sys.argv[1] #take first argument passed after the script name youtube url 
    video_id = extract_video_id(url)
    if not video_id: #exctarct vedio id like asq3ea
        print(json.dumps({"error": "Invalid YouTube URL"}))
        return 
#fetch video met dta title channges transcript else set to unknow
    title = "Unknown"
    channel = "Unknown"
    try:
        yt = YouTube(url)
        title = yt.title or "Unknown"
        channel = yt.author or "Unknown"
    except:
        pass  # no metadata, still proceed

    try:
        transcript_raw = YouTubeTranscriptApi.get_transcript(video_id) #Fetches the transcript using the video ID
        transcript = [
            {
                "text": line.get("text", ""),
                "start": line.get("start", 0),
                "duration": line.get("duration", 0)
            }
            for line in transcript_raw
        ]
        language = transcript_raw[0].get("language_code", "en") if transcript_raw else "unknown" #to gues the langues like en english e
    except Exception as e:
        print(json.dumps({"error": f"Transcript not found: {str(e)}"}))
        return

    # Output clean JSON
    print(json.dumps({  #convert python dic into a jsnon 
        "video_id": video_id,
        "title": title,
        "channel": channel,
        "language": language,
        "transcript": transcript
    }, ensure_ascii=False)) #Laravel will capture this printed output and decode it inside the controller
# keeps special characters readable
if __name__ == "__main__": #Only run the main() function
    main()
