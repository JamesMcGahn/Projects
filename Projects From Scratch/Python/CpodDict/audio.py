import urllib.request
from random import randint
from time import sleep

from google.cloud import texttospeech
from open_file import OpenFile
from write_file import WriteFile


class Audio:
    def __init__(self, path, type):
        self.path = path
        self.type = type
        self.download_audio()

    def google_audio(text, filename):
        client = texttospeech.TextToSpeechClient.from_service_account_json("./key.json")

        input_text = texttospeech.SynthesisInput(text=text)

        voice = texttospeech.VoiceSelectionParams(
            language_code="cmn-CN",
            name="cmn-CN-Standard-D",
        )

        audio_config = texttospeech.AudioConfig(
            audio_encoding=texttospeech.AudioEncoding.MP3
        )

        response = client.synthesize_speech(
            request={"input": input_text, "voice": voice, "audio_config": audio_config}
        )
        path = WriteFile.check_dup("./out/audios/words/", filename, ".mp3")

        with open(path, "wb") as out:
            out.write(response.audio_content)
            print(f'Audio content written to file "{filename}.mp3"')

    def download_audio(self):
        data = OpenFile.open_file(self.path, True)
        folder_path = ""
        for dat in data:
            if self.type == "word":
                folder_path = "./out/audios/words/"

                if dat["audio"] == "":
                    Audio.google_audio(dat["chinese"], dat["id"])
                    continue
            elif self.type == "example":
                folder_path = "./out/audios/examples/"
            else:
                folder_path = "./out/audios/dialogues/"
            path = WriteFile.check_dup(folder_path, dat["id"], ".mp3")
            try:
                urllib.request.urlretrieve(dat["audio"], path)
                print(f'Audio content written to file "{dat["id"]}.mp3"')
            except Exception as e:
                print(e)
                print("Trying to Get Audio from Google...")
                Audio.google_audio(dat["chinese"], dat["id"])
            sleep(randint(5, 15))
