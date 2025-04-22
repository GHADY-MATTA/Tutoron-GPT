import sys
import json
from pytube import YouTube
from youtube_transcript_api import YouTubeTranscriptApi
from urllib.parse import parse_qs, urlparse

def extract_video_id(url):
    try:
        qs = parse_qs(urlparse(url).query)
        return qs.get("v", [None])[0]
    except:
        return None

def main():
    if len(sys.argv) < 2:
        print(json.dumps({"error": "No URL provided"}))
        return

    url = sys.argv[1]
    video_id = extract_video_id(url)
    if not video_id:
        print(json.dumps({"error": "Invalid YouTube URL"}))
        return

    title = "Unknown"
    channel = "Unknown"
    try:
        yt = YouTube(url)
        title = yt.title or "Unknown"
        channel = yt.author or "Unknown"
    except:
        pass  # no metadata, still proceed

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
        print(json.dumps({"error": f"Transcript not found: {str(e)}"}))
        return

    # Output clean JSON
    print(json.dumps({
        "video_id": video_id,
        "title": title,
        "channel": channel,
        "language": language,
        "transcript": transcript
    }, ensure_ascii=False))

if __name__ == "__main__":
    main()
