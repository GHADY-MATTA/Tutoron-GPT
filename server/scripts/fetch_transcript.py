import sys
import json
from pytube import YouTube
from youtube_transcript_api import YouTubeTranscriptApi
from urllib.parse import parse_qs, urlparse
# 🛠 Fix output encoding immediately
sys.stdout.reconfigure(encoding='utf-8')
sys.stdout.reconfigure(encoding='utf-8')
def extract_video_id(url):
    try:
        qs = parse_qs(urlparse(url).query)
        return qs.get("v", [None])[0]
    except Exception:
        return None
    
if len(sys.argv) < 2:
    print(json.dumps({"error": "No URL provided"}, ensure_ascii=False), flush=True)
    sys.exit(1)
    url = sys.argv[1]
video_id = extract_video_id(url)
if not video_id:
    print(json.dumps({"error": "Invalid YouTube URL"}, ensure_ascii=False), flush=True)
    sys.exit(1)
    try:
    yt = YouTube(url)
    title = yt.title or "Unknown"
    channel = yt.author or "Unknown"
    try:
    yt = YouTube(url)
    title = yt.title or "Unknown"
    channel = yt.author or "Unknown"
except Exception:
    pass  # Still continue even if metadata fails
try:
    transcript_raw = YouTubeTranscriptApi.get_transcript(video_id)
    transcript = [
        {
            "text": line.get("text", ""),
            "start": line.get("start", 0),
            "duration": line.get("duration", 0)
        }
        for line in transcript_raw
    ]
    language = transcript_raw[0].get("language_code", "en") if transcript_raw else "unknown"
except Exception as e:
    print(json.dumps({"error": f"Transcript not found: {str(e)}"}, ensure_ascii=False), flush=True)
    sys.exit(1)
    