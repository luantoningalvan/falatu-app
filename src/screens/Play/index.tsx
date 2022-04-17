import React, { useRef, useState } from "react";
import { Dimensions, FlatList, StatusBar, View } from "react-native";

import { PlayContainer, PlayHeader } from "./styles";
import LogoSmall from "../../assets/falatu-logo-small.svg";
import { Avatar } from "../../components/Avatar";
import { ToggleNavigationMode } from "../../components/ToggleNavigationMode";

import TextQuestion from "./cards/TextQuestion";
import BinaryQuestion from "./cards/BinaryQuestion";
import ComparisonQuestion from "./cards/ComparisonQuestion";
import MultiQuestion from "./cards/MultiQuestion";
import VideoQuestion from "./cards/VideoQuestion";

import { usePlay } from "../../hooks/Play";

const feedItemHeight = Dimensions.get("window").height - 56;

const Play: React.FC = () => {
  const mediaRefs = useRef([]);
  const [currentProfile, setCurrentProfile] = useState();
  const { questions } = usePlay();

  const cards: { [key: string]: any } = {
    text: TextQuestion,
    binary: BinaryQuestion,
    comparison: ComparisonQuestion,
    multi: MultiQuestion,
    video: VideoQuestion,
  };

  const onViewableItemsChanged = useRef(({ changed }) => {});

  const renderItem = ({ item, index }) => {
    const PickCard = cards[item.mode];

    return (
      <View style={{ height: feedItemHeight, backgroundColor: "black" }}>
        <PickCard
          question={item}
          ref={(PostSingleRef) => (mediaRefs.current[item.id] = PostSingleRef)}
        />
      </View>
    );
  };

  return (
    <PlayContainer>
      <StatusBar backgroundColor="transparent" translucent />

      <PlayHeader>
        <LogoSmall width={32} height={38} />
        <ToggleNavigationMode />
        <Avatar size="sm" name="Cassandra Luiza" />
      </PlayHeader>

      <FlatList
        data={questions}
        windowSize={4}
        initialNumToRender={0}
        maxToRenderPerBatch={2}
        removeClippedSubviews
        viewabilityConfig={{
          itemVisiblePercentThreshold: 0,
        }}
        renderItem={renderItem}
        pagingEnabled
        keyExtractor={(item) => item.id}
        decelerationRate={"normal"}
        onViewableItemsChanged={onViewableItemsChanged.current}
      />
    </PlayContainer>
  );
};

export default Play;
