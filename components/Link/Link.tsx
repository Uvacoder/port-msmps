import cn from 'classnames';
import NextLink from 'next/link';
import type { ReactNode } from 'react';
import { RoughNotation } from 'react-rough-notation';

type LinkProps = {
  href: string;
  target?: string;
  children: ReactNode;
  [p: string]: any;
};

export default function Link({ href, target, children, ...props }: LinkProps) {
  let type = 'internal';
  if (href.match(/(^http|^mailto)/i) || target === '_blank') {
    type = 'external';
  }

  if (typeof target === 'undefined') {
    target = type === 'external' ? '_blank' : undefined;
  }

  const safe = type === 'external' ? 'noopener noreferrer' : undefined;

  if (type === 'external') {
    const className = cn(props.className, 'inline-flex items-center');
    delete props.className;

    return (
      <RoughNotation
        type="underline"
        color={props.color}
        show={true}
        padding={[0, 2]}
        iterations={2}
        strokeWidth={2}
      >
        <a
          target={target}
          rel={safe}
          href={href}
          className={className}
          data-splitbee-event={'External Link'}
          data-splitbee-event-url={href}
          {...props}
        >
          {children}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-1"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
          </svg>
        </a>
      </RoughNotation>
    );
  }

  return (
    <NextLink href={href}>
      <a {...props}>{children}</a>
    </NextLink>
  );
}
