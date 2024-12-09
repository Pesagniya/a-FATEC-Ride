import { StyleSheet } from 'react-native';
import { Image, type ImageSource } from "expo-image";

type Props = {
  imgSource: ImageSource;
  selectedImage?: string;
  size?: { width: number; height: number };
};

export default function ImageViewer({ imgSource, selectedImage, size }: Props) {
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;

  return (
    <Image 
      source={imageSource} 
      style={[styles.image, size && { width: size.width, height: size.height }]} 
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320, // padrão
    height: 440, 
    borderRadius: 18,
  },
});
