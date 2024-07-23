// Types that cannot be clearly classified to a certain category
// and that are reusable throughout the project

export type Translator = (text: string) => string;

export interface SetState<T> extends React.Dispatch<React.SetStateAction<T>> {}

export enum Language {
  English = 'en',
  Finnish = 'fi',
  Vietnamese = 'vi',
}
