import { Redirect } from "expo-router";


export default function TabIndex() {
  return <Redirect href={'/menu/'} />
}

//it will first automaticlly dedirect to index, 
//but we don't have index file, so we create one, and that it redirect to the page we want