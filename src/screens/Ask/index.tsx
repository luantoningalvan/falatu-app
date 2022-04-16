import React, { useCallback, useState, Fragment } from "react";

import { Alert } from "react-native";
import Button from "../../components/Button";
import { ColorOption, PickFromGallery, QuestionInput } from "./styles";
import { launchImageLibraryAsync } from "expo-image-picker";
import IconButton from "../../components/IconButton";
import { StyledView } from "../../components/StyledView";

const colorList = ["#0af", "#8ab", "#933", "#7ba"];

const Explore: React.FC = () => {
  const [textInputValue, setTextInputValue] = useState("");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [colorPicked, setColorPicker] = useState("#0af");

  const handleAskNewQuestion = useCallback(() => {
    Alert.alert(textInputValue);
  }, [textInputValue]);

  const handleOpenGallery = useCallback(async () => {
    await launchImageLibraryAsync();
  }, []);

  return (
    <StyledView bg={colorPicked} p={24} flex={1}>
      <StyledView direction="row" align="baseline">
        <StyledView flex={1}>
          <IconButton ghost icon="close" ml={-12} />
        </StyledView>
        <IconButton
          icon="palette"
          onPress={() => setShowColorPicker((curr) => !curr)}
          mr={8}
        />
        <IconButton icon="vertical-align-center" />
      </StyledView>

      <StyledView my={16} flex={1} align="center" justify="center">
        <QuestionInput
          onChangeText={(t) => setTextInputValue(t)}
          placeholder="Digite sua pergunta aqui"
        />
      </StyledView>

      {showColorPicker ? (
        <StyledView direction="row" h={40}>
          {colorList.map((color) => (
            <ColorOption color={color} onPress={() => setColorPicker(color)} />
          ))}
        </StyledView>
      ) : (
        <StyledView direction="row" justify="space-between" h={40}>
          <PickFromGallery onPress={handleOpenGallery} />
          <Button size="sm" onPress={handleAskNewQuestion}>
            Publicar
          </Button>
        </StyledView>
      )}
    </StyledView>
  );
};

export default Explore;
