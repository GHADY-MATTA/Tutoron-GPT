import sys
import json
from pytube import YouTube
from youtube_transcript_api import YouTubeTranscriptApi
from urllib.parse import parse_qs, urlparse

# 🛠 Fix output encoding immediately
sys.stdout.reconfigure(encoding='utf-8')
