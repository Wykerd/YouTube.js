import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';

class ChipCloudChip extends YTNode {
  static type = 'ChipCloudChip';

  is_selected: boolean;
  endpoint: NavigationEndpoint | undefined;
  text: string;

  constructor(data: any) {
    super();
    // TODO: is this isSelected or just selected
    this.is_selected = data.isSelected;
    this.endpoint = data.navigationEndpoint ? new NavigationEndpoint(data.navigationEndpoint) : undefined;
    this.text = new Text(data.text).toString();
  }
}

export default ChipCloudChip;