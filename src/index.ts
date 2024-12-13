import { App } from "vue";

import LText from "./components/LText";
import LShape from "./components/LShape";
import LImage from "./components/LImage";

const componentList = [
  LText,
  LShape,
  LImage
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
  install
}

export default install