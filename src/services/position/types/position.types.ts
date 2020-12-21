import { Position, Axes } from '../../../types/types';

export interface IsOnTheRegionArgs {
  region: Position;
  position: Axes;
}

export type IsOnTheRegion = (args: IsOnTheRegionArgs) => boolean;

export interface IsOutOfLimitArgs {
  limit?: Partial<Position>;
  position: Axes;
}

export type IsOutOfLimit = (args: IsOutOfLimitArgs) => boolean;

export interface GetRelativeScrollPositionArgs {
  position: Axes;
  lastRelativePosition?: Axes;
  lastPosition?: Axes;
  limit?: Partial<Position>;
}

export type GetRelativePosition = (args: GetRelativeScrollPositionArgs) => Axes;
