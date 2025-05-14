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