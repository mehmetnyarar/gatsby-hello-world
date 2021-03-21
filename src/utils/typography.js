import Typography from "typography"
import fairyGate from "typography-theme-fairy-gates"
import kirkham from "typography-theme-kirkham"

const themes = {
  fairyGate,
  kirkham,
}

const typography = new Typography(themes.kirkham)

export const { scale, rhythm, options } = typography
export default typography
