export interface SwitchSelectorProps {
  list: string[];
  selectedItem: string;
  buttonWidth?: string | number;
  onClickTab: (value: string) => void;
}
