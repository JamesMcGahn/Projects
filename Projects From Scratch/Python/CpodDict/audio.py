import urllib.request
from time import sleep

from google.cloud import texttospeech
from write_file import WriteFile


class Audio:
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
        path = WriteFile.check_dup("./out/audios/words", filename, ".mp3")

        with open(path, "wb") as out:
            out.write(response.audio_content)
            print(f'Audio content written to file "{filename}.mp3"')

    @staticmethod
    def download_audio(data, type, start_num):
        count = start_num
        folder_path = ""
        for dat in data:
            if type == "word":
                folder_path = "./out/audios/words/"

                if dat["audio"] == "":
                    Audio.google_audio(dat["chinese"], count)
                    count += 1
                    continue
            elif type == "example":
                folder_path = "./out/audios/examples"
            else:
                folder_path = "./out/audios/dialogues"
            path = WriteFile.check_dup(folder_path, count, ".mp3")
            urllib.request.urlretrieve(dat["audio"], path)
            print(f'Audio content written to file "{count}.mp3"')
            count += 1
            sleep(10)
