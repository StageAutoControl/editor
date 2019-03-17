import {DMXParams} from "../dmx-device-params";

export interface DMXTransition {
  id?: string;
  name: string;
  ease: string;
  length: number;
  params: DMXTransitionParams[];
}

export interface DMXTransitionParams {
  from: DMXParams;
  to: DMXParams;
}

export const EaseFunctionLinear = "Linear";
export const EaseFunctionInQuad = "InQuad";
export const EaseFunctionOutQuad = "OutQuad";
export const EaseFunctionInOutQuad = "InOutQuad";
export const EaseFunctionInCubic = "InCubic";
export const EaseFunctionOutCubic = "OutCubic";
export const EaseFunctionInOutCubic = "InOutCubic";
export const EaseFunctionInQuart = "InQuart";
export const EaseFunctionOutQuart = "OutQuart";
export const EaseFunctionInOutQuart = "InOutQuart";
export const EaseFunctionInQuint = "InQuint";
export const EaseFunctionOutQuint = "OutQuint";
export const EaseFunctionInOutQuint = "InOutQuint";
export const EaseFunctionInSine = "InSine";
export const EaseFunctionOutSine = "OutSine";
export const EaseFunctionInOutSine = "InOutSine";
export const EaseFunctionInCircular = "InCircular";
export const EaseFunctionOutCircular = "OutCircular";
export const EaseFunctionInOutCircular = "InOutCircular";
export const EaseFunctionInExpo = "InExpo";
export const EaseFunctionOutExpo = "OutExpo";
export const EaseFunctionInOutExpo = "InOutExpo";
export const EaseFunctionInElastic = "InElastic";
export const EaseFunctionOutElastic = "OutElastic";
export const EaseFunctionInOutElastic = "InOutElastic";
export const EaseFunctionInBack = "InBack";
export const EaseFunctionOutBack = "OutBack";
export const EaseFunctionInOutBack = "InOutBack";
export const EaseFunctionInBounce = "InBounce";
export const EaseFunctionOutBounce = "OutBounce";
export const EaseFunctionInOutBounce = "InOutBounce";

export const EaseFunctions = [
  EaseFunctionLinear,
  EaseFunctionInQuad,
  EaseFunctionOutQuad,
  EaseFunctionInOutQuad,
  EaseFunctionInCubic,
  EaseFunctionOutCubic,
  EaseFunctionInOutCubic,
  EaseFunctionInQuart,
  EaseFunctionOutQuart,
  EaseFunctionInOutQuart,
  EaseFunctionInQuint,
  EaseFunctionOutQuint,
  EaseFunctionInOutQuint,
  EaseFunctionInSine,
  EaseFunctionOutSine,
  EaseFunctionInOutSine,
  EaseFunctionInCircular,
  EaseFunctionOutCircular,
  EaseFunctionInOutCircular,
  EaseFunctionInExpo,
  EaseFunctionOutExpo,
  EaseFunctionInOutExpo,
  EaseFunctionInElastic,
  EaseFunctionOutElastic,
  EaseFunctionInOutElastic,
  EaseFunctionInBack,
  EaseFunctionOutBack,
  EaseFunctionInOutBack,
  EaseFunctionInBounce,
  EaseFunctionOutBounce,
  EaseFunctionInOutBounce,
];
