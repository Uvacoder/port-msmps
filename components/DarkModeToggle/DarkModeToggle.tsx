import { useTheme } from 'next-themes';
import type { MouseEvent } from 'react';
import { animated, useSpring } from 'react-spring';

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === 'dark';

  function toggleTheme(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  const springConfig = {
    mass: 4,
    tension: 250,
    friction: 35
  };

  const svgSpring = useSpring({
    transform: isDarkMode ? 'rotate(40deg)' : 'rotate(90deg)',
    config: springConfig
  });

  const maskSpring = useSpring({
    cx: isDarkMode ? 12 : 30,
    cy: isDarkMode ? 4 : 0,
    config: springConfig
  });

  const raysSpring = useSpring({
    opacity: isDarkMode ? 0 : 1,
    config: springConfig,
    immediate: theme === 'dark'
  });

  const circleSpring = useSpring({
    r: isDarkMode ? 9 : 5,
    config: springConfig
  });

  return (
    <button
      aria-label={isDarkMode ? 'Activate light mode' : 'Activate dark mode'}
      title={isDarkMode ? 'Activate light mode' : 'Activate dark mode'}
      type="button"
      className="text-brand-dark dark:text-white p-2 transition opacity-70 hover:opacity-100"
      onClick={toggleTheme}
    >
      <animated.svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={svgSpring}
      >
        <mask id="moon-mask">
          <rect x="0" y="0" width="100%" height="100%" fill="#FFF" />
          <animated.circle {...maskSpring} r="9" fill="#000" />
        </mask>
        <animated.circle
          fill="currentColor"
          cx="12"
          cy="12"
          mask="url(#moon-mask)"
          {...circleSpring}
        ></animated.circle>
        <animated.g stroke="currentColor" style={raysSpring}>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </animated.g>
      </animated.svg>
    </button>
  );
}
