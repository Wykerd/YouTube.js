import NavigationEndpoint from './NavigationEndpoint.js';
import Thumbnail from './misc/Thumbnail.js';
import { YTNode } from '../helpers.js';

class CollageHeroImage extends YTNode {
  static type = 'CollageHeroImage';

  left: Thumbnail[];
  top_right: Thumbnail[];
  bottom_right: Thumbnail[];
  endpoint: NavigationEndpoint;

  constructor(data: any) {
    super();
    this.left = Thumbnail.fromResponse(data.leftThumbnail);
    this.top_right = Thumbnail.fromResponse(data.topRightThumbnail);
    this.bottom_right = Thumbnail.fromResponse(data.bottomRightThumbnail);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
  }
}

export default CollageHeroImage;