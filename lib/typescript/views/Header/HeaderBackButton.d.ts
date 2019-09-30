import * as React from 'react';
import BackButtonWeb from './BackButtonWeb';
import { HeaderBackButtonProps } from '../../types';
declare type State = {
    initialTextWidth?: number;
};
declare class HeaderBackButton extends React.PureComponent<HeaderBackButtonProps, State> {
    static defaultProps: {
        pressColorAndroid: string;
        tintColor: string;
        truncatedTitle: string;
        backImage: typeof BackButtonWeb;
    };
    state: State;
    private handleTextLayout;
    private renderBackImage;
    private getTitleText;
    private maybeRenderTitle;
    render(): JSX.Element;
}
export default HeaderBackButton;
