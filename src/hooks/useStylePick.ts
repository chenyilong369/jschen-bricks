import { pick, without } from "lodash-es";
import { textDefaultProps } from "../defaultProps";
import { computed } from "vue";

export const defaultStyles = without(Object.keys(textDefaultProps), 'actionType', 'url', 'text')
const useStylePick = (props: any, pickStyles = defaultStyles) => {
  return computed(() => pick(props, pickStyles))
}

export default useStylePick