import { RootState } from "../store";
import { useAppSelector } from "../store/hooks";

type Selector<State, Selected> = (state: State) => Selected;
type GlobalSelectorHook<State> = <Selected>(
  selector: Selector<State, Selected>
) => Selected;

function useLocalSelector<State, Selected>(
  selector: Selector<State, Selected>,
  stateSelector: (state: RootState) => State
) {
  return useAppSelector((state) => selector(stateSelector(state)));
}

export function createLocalSelectorHook<State>(
  stateSelector: (state: RootState) => State
): GlobalSelectorHook<State> {
  return (selector) => useLocalSelector(selector, stateSelector);
}
