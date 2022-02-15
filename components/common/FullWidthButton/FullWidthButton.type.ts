import { DefaultTheme } from 'styled-components';

export default interface FullWidthButtonProps {
  backgroundColor: keyof DefaultTheme['colors'];
  color: keyof DefaultTheme['colors'];
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
