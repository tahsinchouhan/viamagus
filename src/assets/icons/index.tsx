import React from 'react';
import {
  Circle,
  Defs,
  LinearGradient,
  Path,
  Rect,
  Stop,
  Svg,
} from 'react-native-svg';
import { COLORS } from '../../utils/constants';

export const ArrowIcon = ({
  direction = 'down',
}: {
  direction?: 'up' | 'down';
}) => {
  const rotataion = direction === 'up' ? 180 : 0;

  return (
    <Svg
      width={11}
      height={12}
      rotation={rotataion}
      viewBox="0 0 11 12"
      fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.801 11.157a.4.4 0 01-.601 0L.582 5.889a.4.4 0 01.3-.664h2.385a.4.4 0 00.4-.4V.4c0-.22.18-.4.4-.4h2.867c.22 0 .4.18.4.4v4.425c0 .22.18.4.4.4h2.384a.4.4 0 01.3.664l-4.617 5.268z"
        fill="#FFF"
      />
    </Svg>
  );
};

export const InfoIconSVG = () => {
  return (
    <Svg width={13} height={13} viewBox="0 0 13 13" fill="none">
      <Circle cx={6.5} cy={6.5} r={6} stroke="#D2BAF5" />
      <Path
        d="M5.688 5.717a.3.3 0 01.3-.3h1.024a.3.3 0 01.3.3V9.45a.3.3 0 01-.3.3H5.989a.3.3 0 01-.3-.3V5.717zM5.688 3.52a.813.813 0 111.625 0 .813.813 0 01-1.625 0z"
        fill="#D2BAF5"
      />
    </Svg>
  );
};

export const ClockIconSVG = () => {
  return (
    <Svg width={14} height={14} viewBox="0 0 14 14" fill="none">
      <Path
        d="M7 0C3.133 0 0 3.133 0 7s3.133 7 7 7 7-3.133 7-7-3.133-7-7-7zm1.612 9.882l-2.49-1.81a.34.34 0 01-.138-.273v-4.75a.34.34 0 01.339-.34h1.354a.34.34 0 01.34.34v3.886L9.807 8.24c.153.11.184.322.074.474l-.796 1.095a.341.341 0 01-.474.074z"
        fill="#D2BAF5"
      />
    </Svg>
  );
};

export const ChartIconSVG = () => {
  return (
    <Svg width={17} height={13} viewBox="0 0 17 13" fill="none">
      <Path
        d="M16.276 10.417c.215 0 .39.175.39.39v1.302c0 .215-.175.391-.39.391H.391A.392.392 0 010 12.11V.39C0 .177.176 0 .39 0h1.303c.215 0 .39.176.39.39v10.027h14.193zm-4.144-7.308L9.375 4.948 6.598 1.247a.391.391 0 00-.647.032L3.125 5.99v3.386h12.5l-2.926-6.113a.39.39 0 00-.567-.153z"
        fill="#727682"
      />
    </Svg>
  );
};

export const AppLogoSVG = () => {
  return (
    <Svg width={30} height={31} viewBox="0 0 30 31" fill="none">
      <Path
        d="M0 15.894C0 7.664 6.67.994 14.9.994c8.23 0 14.901 6.67 14.901 14.9s-6.671 14.9-14.9 14.9C6.67 30.795 0 24.125 0 15.895zm26.23 0c0-6.256-5.073-11.329-11.33-11.329-6.256 0-11.328 5.073-11.328 11.33 0 6.256 5.072 11.328 11.328 11.328 6.257 0 11.33-5.072 11.33-11.329z"
        fill="#fff"
      />
      <Path
        d="M0 15.894C0 7.664 6.67.994 14.9.994c8.23 0 14.901 6.67 14.901 14.9s-6.671 14.9-14.9 14.9C6.67 30.795 0 24.125 0 15.895zm26.23 0c0-6.256-5.073-11.329-11.33-11.329-6.256 0-11.328 5.073-11.328 11.33 0 6.256 5.072 11.328 11.328 11.328 6.257 0 11.33-5.072 11.33-11.329z"
        fill="url(#paint0_linear_3163_4993)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.053 10.232z"
        fill="url(#paint1_linear_3163_4993)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.293 12.48c-.025-.03-.024-.07.01-.09.906-.51 12.285-6.649 16.534 4.439.016.041-.012.09-.057.09-.693 0-5.106.25-4.993 6.386a.064.064 0 01-.02.046l-8.002 7.632a.062.062 0 01-.104-.044l-.118-10.32c0-.022.01-.042.028-.053l3.293-2.119a.062.062 0 00.028-.044l.299-2.366a.062.062 0 00-.092-.06l-4.352 2.575a.062.062 0 00-.03.05l-.223 6.873a.062.062 0 01-.107.04l-1.62-1.704a.062.062 0 01-.016-.049l.957-9.61a.062.062 0 00-.015-.046l-1.4-1.627z"
        fill="#fff"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.293 12.48c-.025-.03-.024-.07.01-.09.906-.51 12.285-6.649 16.534 4.439.016.041-.012.09-.057.09-.693 0-5.106.25-4.993 6.386a.064.064 0 01-.02.046l-8.002 7.632a.062.062 0 01-.104-.044l-.118-10.32c0-.022.01-.042.028-.053l3.293-2.119a.062.062 0 00.028-.044l.299-2.366a.062.062 0 00-.092-.06l-4.352 2.575a.062.062 0 00-.03.05l-.223 6.873a.062.062 0 01-.107.04l-1.62-1.704a.062.062 0 01-.016-.049l.957-9.61a.062.062 0 00-.015-.046l-1.4-1.627z"
        fill="url(#paint2_linear_3163_4993)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.947 10.813l.202.203.01.01-.01-.01C17.654 2.084 6.482 7.583 5.728 7.97a.06.06 0 01-.073-.016L.681 2.351c-.03-.034-.022-.085.021-.097 1.09-.304 12.338-3.292 19.489.72 8.928 5.01 9.315 16.805 9.181 20.74-.003.08-.125.07-.13-.007-.207-2.958-1.243-10.126-6.393-13.208-6.664-3.988-13.522.478-14.105.874-.026.018-.056.01-.077-.012L6.343 8.82a.062.062 0 01.02-.098c10.888-5.407 18.32.874 19.584 2.09z"
        fill="#fff"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.947 10.813l.202.203.01.01-.01-.01C17.654 2.084 6.482 7.583 5.728 7.97a.06.06 0 01-.073-.016L.681 2.351c-.03-.034-.022-.085.021-.097 1.09-.304 12.338-3.292 19.489.72 8.928 5.01 9.315 16.805 9.181 20.74-.003.08-.125.07-.13-.007-.207-2.958-1.243-10.126-6.393-13.208-6.664-3.988-13.522.478-14.105.874-.026.018-.056.01-.077-.012L6.343 8.82a.062.062 0 01.02-.098c10.888-5.407 18.32.874 19.584 2.09z"
        fill="url(#paint3_linear_3163_4993)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_3163_4993"
          x1={5.0353}
          y1={31.7197}
          x2={28.157}
          y2={-0.342326}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FFB800" />
          <Stop offset={0.375546} stopColor="#FD0" />
          <Stop offset={1} stopColor="#FD0" stopOpacity={0.18} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_3163_4993"
          x1={26.0585}
          y1={10.2322}
          x2={26.0585}
          y2={10.2418}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0.7} />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_3163_4993"
          x1={16.94}
          y1={14.8109}
          x2={2.45237}
          y2={1.31316}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#6231AD" />
          <Stop offset={1} stopColor="#6231AD" stopOpacity={0.74} />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear_3163_4993"
          x1={16.94}
          y1={14.8109}
          x2={2.45237}
          y2={1.31316}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#6231AD" />
          <Stop offset={1} stopColor="#6231AD" stopOpacity={0.74} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export const MessageIconSVG = () => {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M19.5 2h-15A2.502 2.502 0 002 4.5v11.25c0 1.378 1.122 2.499 2.5 2.499h3.75v3.281a.47.47 0 00.746.379l4.879-3.66H19.5c1.378 0 2.5-1.121 2.5-2.5V4.5C22 3.122 20.877 2 19.5 2z"
        fill="#727682"
      />
    </Svg>
  );
};

export const EditIconSVG = () => {
  return (
    <Svg width={12} height={12} viewBox="0 0 12 12" fill="none">
      <Path
        d="M7.99 3l1.566 1.565a.17.17 0 010 .24L5.764 8.596l-1.611.18a.338.338 0 01-.373-.374l.178-1.611L7.75 2.999a.17.17 0 01.24 0zm2.812-.398l-.847-.848a.679.679 0 00-.958 0l-.615.615a.17.17 0 000 .24l1.566 1.566a.17.17 0 00.24 0l.614-.615a.679.679 0 000-.958zM7.667 7.565v1.768H2.11V3.777h3.99a.213.213 0 00.147-.06l.695-.695a.208.208 0 00-.148-.356H1.833A.834.834 0 001 3.499V9.61c0 .46.373.834.833.834h6.111c.46 0 .834-.374.834-.834V6.87a.209.209 0 00-.356-.147l-.695.695a.213.213 0 00-.06.147z"
        fill="#727682"
      />
    </Svg>
  );
};

export const LogoutIconSVG = () => {
  return (
    <Svg width={18} height={14} viewBox="0 0 18 14" fill="none">
      <Path
        d="M17.75 7.62l-6 6.123c-.535.547-1.464.164-1.464-.62V9.625H5.43a.864.864 0 01-.857-.875v-3.5c0-.484.382-.874.857-.874h4.857v-3.5c0-.78.925-1.166 1.465-.62l6 6.125a.895.895 0 010 1.24zM6.858 13.56v-1.458a.434.434 0 00-.428-.438h-3A1.154 1.154 0 012.286 10.5V3.5c0-.645.51-1.166 1.143-1.166h3a.434.434 0 00.428-.438V.438A.434.434 0 006.43.001h-3C1.536 0 0 1.568 0 3.5v6.998c0 1.932 1.536 3.5 3.429 3.5h3a.434.434 0 00.428-.438z"
        fill="#727682"
      />
    </Svg>
  );
};

export const StarIconSVG = () => {
  return (
    <Svg width={27} height={30} viewBox="0 0 27 30" fill="none">
      <Path
        d="M26.867 4.547A15.808 15.808 0 0015.734 0C7.044 0 0 6.94 0 15.5 0 24.06 7.044 31 15.734 31c3.91 0 7.603-1.413 10.463-3.924l-2.688-2.972a11.74 11.74 0 01-7.775 2.915C9.276 27.02 4.04 21.862 4.04 15.5S9.276 3.98 15.734 3.98c3.148 0 6.093 1.23 8.274 3.38l2.859-2.813z"
        fill="#FFE200"
      />
      <Circle cx={16.0168} cy={16.0162} r={8.78333} fill="#FEF853" />
      <Path
        d="M16.017 9.3l1.508 4.642h4.88l-3.948 2.868 1.508 4.641-3.948-2.868-3.948 2.868 1.508-4.64-3.948-2.87h4.88l1.508-4.64z"
        fill="#FFA600"
      />
    </Svg>
  );
};

export const ProfitArrowIconSVG = () => {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none">
      <Circle opacity={0.1} cx={16} cy={16} r={16} fill="#48C547" />
      <Path
        d="M17.333 26V11.107l4.787 4.773L24 14l-8-8-8 8 1.88 1.88 4.787-4.773V26h2.666z"
        fill="#48C547"
      />
    </Svg>
  );
};

export const LossArrowIconSVG = () => {
  return (
    <Svg width={30} height={30} viewBox="0 0 30 30" fill="none">
      <Circle opacity={0.1} cx={15} cy={15} r={15} fill="#F73232" />
      <Path
        d="M16.25 5.625v13.962l4.488-4.474 1.762 1.762-7.5 7.5-7.5-7.5 1.762-1.762 4.488 4.474V5.625h2.5z"
        fill="#F73232"
      />
    </Svg>
  );
};

type TabIconProps = {
  active?: boolean;
};

export const HomeIconSVG = (props: TabIconProps) => {
  const fillColour = !props.active ? COLORS['tertiary-text'] : COLORS.active;
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M11.735 8.258l-6.401 5.273v5.69a.556.556 0 00.555.555l3.89-.01a.555.555 0 00.553-.555v-3.323a.555.555 0 01.556-.556h2.222a.555.555 0 01.556.556v3.32a.556.556 0 00.555.558l3.89.01a.555.555 0 00.555-.555v-5.694l-6.4-5.269a.423.423 0 00-.531 0zm10.111 3.584l-2.902-2.393V4.64a.416.416 0 00-.417-.416h-1.944a.417.417 0 00-.417.416v2.521l-3.108-2.557a1.667 1.667 0 00-2.118 0L2.15 11.842a.416.416 0 00-.055.587l.885 1.076a.416.416 0 00.587.056l8.167-6.726a.423.423 0 01.531 0l8.167 6.727a.417.417 0 00.587-.056l.885-1.076a.416.416 0 00-.059-.588z"
        fill={fillColour}
      />
    </Svg>
  );
};

export const LeaguesIconSVG = (props: TabIconProps) => {
  const fillColour = !props.active ? COLORS['tertiary-text'] : COLORS.active;

  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M21.167 5.333h-3.611V3.944a.831.831 0 00-.834-.833H7.278a.831.831 0 00-.834.833v1.39h-3.61A.831.831 0 002 6.166V8.11c0 1.24.781 2.514 2.15 3.497 1.093.788 2.423 1.288 3.819 1.447 1.09 1.81 2.364 2.556 2.364 2.556v2.5H8.667c-1.226 0-2.223.719-2.223 1.944v.417c0 .23.188.417.417.417H17.14c.23 0 .417-.188.417-.417v-.417c0-1.225-.997-1.944-2.223-1.944h-1.666v-2.5s1.274-.746 2.364-2.556c1.4-.16 2.73-.66 3.82-1.447C21.215 10.625 22 9.35 22 8.11V6.167a.831.831 0 00-.833-.834zM5.447 9.806c-.846-.612-1.225-1.292-1.225-1.695v-.555h2.23c.034 1.131.2 2.125.444 2.993a5.598 5.598 0 01-1.448-.743zm14.33-1.695c0 .56-.614 1.254-1.225 1.695a5.62 5.62 0 01-1.451.743c.243-.868.41-1.862.444-2.993h2.233v.555z"
        fill={fillColour}
      />
    </Svg>
  );
};

export const ResearcheIconSVG = (props: TabIconProps) => {
  const fillColour = !props.active ? COLORS['tertiary-text'] : COLORS.active;

  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.243 14.243a6 6 0 11-8.486-8.485 6 6 0 018.486 8.485zm-.179 2.65a8 8 0 112.256-1.987l4.994 4.994a1 1 0 010 1.414l-.707.707a1 1 0 01-1.415 0l-5.128-5.128z"
        fill={fillColour}
      />
    </Svg>
  );
};

export const LeaderboardIconSVG = (props: TabIconProps) => {
  const fillColour = !props.active ? COLORS['tertiary-text'] : COLORS.active;

  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Rect x={1} y={7} width={5} height={13} rx={1} fill={fillColour} />
      <Rect x={9} y={3} width={5} height={17} rx={1} fill={fillColour} />
      <Rect x={17} y={11} width={5} height={9} rx={1} fill={fillColour} />
    </Svg>
  );
};

export const ProfileIconSVG = (props: TabIconProps) => {
  const fillColour = !props.active ? COLORS['tertiary-text'] : COLORS.active;

  return (
    <Svg width={24} height={24} viewBox="0 0 12 12" fill="none">
      <Path
        scale={0.8}
        d="M6 6.75a3.376 3.376 0 10-.002-6.752A3.376 3.376 0 006 6.75zm3 .75H7.709a4.084 4.084 0 01-3.418 0H3a3 3 0 00-3 3v.375C0 11.496.504 12 1.125 12h9.75c.621 0 1.125-.504 1.125-1.125V10.5a3 3 0 00-3-3z"
        fill={fillColour}
      />
    </Svg>
  );
};
