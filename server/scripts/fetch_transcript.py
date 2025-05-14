import sys
import json
from pytube import YouTube
from youtube_transcript_api import YouTubeTranscriptApi
from urllib.parse import parse_qs, urlparse

# 🛠 Fix output encoding immediately
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
