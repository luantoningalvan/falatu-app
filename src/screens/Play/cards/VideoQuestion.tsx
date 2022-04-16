import React, { useRef, useState } from "react";

import Button from "../../../components/Button";
import { Question } from "../../../hooks/Play";
import { ScrollView } from "react-native-gesture-handler";
import { VideoPlayer, VideoQuestionCard, VideoThumb } from "../styles";
import { TouchableOpacity } from "react-native";

const VideoQuestion = ({ question }: { question: Question }) => {
  const playerRef = useRef<any | null>(null);
  const [currentVideo, setCurrentVideo] = useState(0);

  return (
    <>
      <VideoPlayer
        source={{ uri: question.media[currentVideo].url }}
        ref={() => playerRef}
        repeat
        resizeMode="cover"
      />
      <VideoQuestionCard>
        <ScrollView horizontal>
          {question?.options?.map((opt, i) => (
            <TouchableOpacity onPress={() => setCurrentVideo(i)}>
              <VideoThumb
                source={{ uri: opt.thumb }}
                selected={currentVideo === i}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Button size="sm" icon="send" mt={8}>
          Enviar
        </Button>
      </VideoQuestionCard>
    </>
  );
};

export default VideoQuestion;
