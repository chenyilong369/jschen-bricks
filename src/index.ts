import { App } from "vue";

import LText from "./components/LText";
import LShape from "./components/LShape";
import LImage from "./components/LImage";
import FinalPage from "./components/FinalPage";

const componentList = [
  LText,
  LShape,
  LImage,
  FinalPage
]

const install = (app: App) => {
  componentList.forEach(component => {
    app.component(component.name ? component.name : '', component)
  })
}

export {
  LText,
  LShape,
  LImage,
  FinalPage,
  install
}

export default install