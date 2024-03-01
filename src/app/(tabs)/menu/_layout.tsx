import { Stack } from "expo-router";

//_layout file cna wrap all the files in the floder
export default function MenuStack() {
  return (
    <Stack>
      <Stack.Screen 
         name="index"
         options={{ title: 'My home' }}
      />
    </Stack>
  )
}