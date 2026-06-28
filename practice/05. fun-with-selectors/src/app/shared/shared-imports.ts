import { CrazyButton } from '../components/crazy-button/crazy-button';
import { Capitalize } from '../directives/capitalize';
import { ImageAlt } from '../directives/image-alt';

// Reuse this list in standalone components to keep template imports centralized.
export const APP_SHARED_IMPORTS = [Capitalize, ImageAlt, CrazyButton] as const;
